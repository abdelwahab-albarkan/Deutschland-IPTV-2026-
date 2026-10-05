/**
 * IndexNow Fast Indexing Protocol for https://4kanbieteriptv.de
 * 
 * Supports:
 *  1. Submitting all URLs from sitemap.xml
 *  2. Submitting specific URLs passed as CLI arguments
 * 
 * Target Search Engines:
 *  - api.indexnow.org (IndexNow Central Hub)
 *  - www.bing.com (Microsoft Bing)
 *  - yandex.com (Yandex)
 *  - search.seznam.cz (Seznam)
 */

const fs = require('fs');
const path = require('path');

// 1. DOMAIN & CONFIGURATION
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://4kanbieteriptv.de').replace(/\/+$/, '');
const HOST = new URL(SITE_URL).hostname;
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// Read key from env or discover from public directory
function getIndexNowKey() {
  if (process.env.INDEXNOW_KEY && process.env.INDEXNOW_KEY.trim()) {
    return process.env.INDEXNOW_KEY.trim();
  }
  
  const publicDir = path.join(__dirname, '..', 'public');
  if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir);
    const keyFile = files.find(f => /^[a-f0-9]{32}\.txt$/i.test(f));
    if (keyFile) {
      return keyFile.replace(/\.txt$/, '');
    }
  }
  
  return '7b3e94a8c1f0452d96e831a2b5c7e094';
}

const INDEXNOW_KEY = getIndexNowKey();
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

// IndexNow Engine Endpoints
const ENGINES = [
  'https://api.indexnow.org/IndexNow',
  'https://www.bing.com/IndexNow',
  'https://yandex.com/indexnow',
];

/**
 * Verify that the local verification key file exists in /public and matches the key.
 */
function verifyLocalKeyFile() {
  const publicDir = path.join(__dirname, '..', 'public');
  const expectedFile = path.join(publicDir, `${INDEXNOW_KEY}.txt`);
  
  if (!fs.existsSync(expectedFile)) {
    console.warn(`⚠️ Warning: Key file not found at ${expectedFile}. Creating it now...`);
    fs.writeFileSync(expectedFile, INDEXNOW_KEY, 'utf8');
  }
  
  const content = fs.readFileSync(expectedFile, 'utf8').trim();
  if (content !== INDEXNOW_KEY) {
    console.warn(`⚠️ Warning: Content of ${INDEXNOW_KEY}.txt did not match key. Updating it...`);
    fs.writeFileSync(expectedFile, INDEXNOW_KEY, 'utf8');
  }
  
  console.log(`🔑 Verification Key: ${INDEXNOW_KEY}`);
  console.log(`📁 Local Key File: /public/${INDEXNOW_KEY}.txt`);
  console.log(`🌐 Public Key URL: ${KEY_LOCATION}`);
}

/**
 * Generate site routes matching app/sitemap.ts as reliable fallback
 */
function getFallbackSitemapUrls() {
  const locales = ["de", "en", "fr", "es", "it", "pt", "nl", "pl", "tr", "sq", "ar"];
  const baseRoutes = [
    "",
    "/iptv-kaufen",
    "/iptv-test",
    "/preise",
    "/iptv-anbieter",
    "/iptv-bundesliga",
    "/iptv-sport",
    "/iptv-deutschland",
    "/iptv-apps",
    "/iptv-installieren",
    "/iptv-fire-tv",
    "/iptv-samsung",
    "/iptv-m3u",
    "/iptv-kodi",
    "/iptv-funktioniert-nicht",
    "/iptv-reseller",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/widerruf",
  ];

  const urls = [];
  for (const locale of locales) {
    for (const route of baseRoutes) {
      urls.push(`${SITE_URL}/${locale}${route}`);
    }
  }
  return urls;
}

/**
 * Extracts <loc> tags from sitemap XML string
 */
function parseSitemapXml(xmlText) {
  const locRegex = /<loc>(.*?)<\/loc>/gi;
  const urls = [];
  let match;
  while ((match = locRegex.exec(xmlText)) !== null) {
    const url = match[1].trim();
    if (url.startsWith('http')) {
      urls.push(url);
    }
  }
  return urls;
}

/**
 * Fetches URLs from the production or local sitemap
 */
async function fetchSitemapUrls() {
  console.log(`📡 Fetching sitemap from: ${SITEMAP_URL}`);
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(SITEMAP_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; IndexNowBot/1.0; +https://www.indexnow.org)',
        'Accept': 'application/xml, text/xml, */*'
      }
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const xml = await response.text();
      const urls = parseSitemapXml(xml);
      if (urls.length > 0) {
        console.log(`✅ Successfully loaded ${urls.length} URLs from remote sitemap.`);
        return urls;
      }
    }
    console.log(`ℹ️ Remote sitemap returned status ${response.status}. Using internal sitemap generator...`);
  } catch (err) {
    console.log(`ℹ️ Could not fetch remote sitemap (${err.message}). Using internal sitemap generator...`);
  }

  // Fallback: Generate identical URLs directly from sitemap architecture
  const fallbackUrls = getFallbackSitemapUrls();
  console.log(`✅ Generated ${fallbackUrls.length} production URLs matching sitemap.ts.`);
  return fallbackUrls;
}

/**
 * Submits URL list in batches to IndexNow search engines
 */
async function submitToIndexNow(urls) {
  // Deduplicate and filter strictly to current domain host
  const cleanUrls = Array.from(new Set(urls)).filter(u => {
    try {
      const parsed = new URL(u);
      return parsed.hostname === HOST || parsed.hostname === `www.${HOST}` || HOST === `www.${parsed.hostname}`;
    } catch {
      return false;
    }
  });

  if (cleanUrls.length === 0) {
    console.log('⚠️ No valid URLs to submit for host:', HOST);
    return;
  }

  const batchSize = 1000; // Standard batch size
  console.log(`\n🚀 Submitting ${cleanUrls.length} unique URL(s) to IndexNow protocol...`);

  for (let i = 0; i < cleanUrls.length; i += batchSize) {
    const batch = cleanUrls.slice(i, i + batchSize);
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch
    };

    console.log(`\n📦 Processing Batch ${Math.floor(i / batchSize) + 1} (${batch.length} URLs):`);

    for (const engine of ENGINES) {
      try {
        const res = await fetch(engine, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(payload)
        });

        if (res.status === 200 || res.status === 202) {
          console.log(`  ✅ [${res.status}] ${engine} - Submission Accepted`);
        } else if (res.status === 400) {
          console.log(`  ❌ [400] ${engine} - Bad Request (Invalid Format)`);
        } else if (res.status === 403) {
          console.log(`  ⚠️ [403] ${engine} - Key validation pending / forbidden (Check key file on live host)`);
        } else if (res.status === 422) {
          console.log(`  ❌ [422] ${engine} - Unprocessable Entity (URLs do not match host)`);
        } else if (res.status === 429) {
          console.log(`  ⚠️ [429] ${engine} - Rate limited (Too many requests)`);
        } else {
          console.log(`  ℹ️ [${res.status}] ${engine} - Response: ${res.statusText}`);
        }
      } catch (error) {
        console.error(`  ❌ Failed to reach ${engine}: ${error.message}`);
      }
    }
  }
}

// MAIN EXECUTION
(async () => {
  try {
    console.log('====================================================');
    console.log('⚡ INDEXNOW FAST INDEXING PROTOCOL');
    console.log('====================================================');
    console.log(`🏠 Host: ${HOST}`);
    console.log(`🔗 Site URL: ${SITE_URL}`);
    console.log(`🗺️ Sitemap: ${SITEMAP_URL}`);
    
    // 1. Verify Verification Key File
    verifyLocalKeyFile();

    // 2. Determine URLs to submit
    const cliArgs = process.argv.slice(2).filter(arg => arg.startsWith('http'));
    let urlsToSubmit = [];

    if (cliArgs.length > 0) {
      console.log(`\n🎯 Mode: Specific CLI URLs provided (${cliArgs.length} URL(s))`);
      urlsToSubmit = cliArgs;
    } else {
      console.log(`\n🎯 Mode: Full Sitemap Submission`);
      urlsToSubmit = await fetchSitemapUrls();
    }

    // 3. Submit
    await submitToIndexNow(urlsToSubmit);

    console.log('\n====================================================');
    console.log('✨ All Done! IndexNow indexing cycle completed.');
    console.log('====================================================\n');
  } catch (error) {
    console.error('\n🔥 Fatal Error in IndexNow script:', error.message);
    process.exit(1);
  }
})();
