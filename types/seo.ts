export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface PageMeta {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string[];
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export interface StructuredDataOptions {
  type: "Organization" | "Product" | "FAQPage" | "BreadcrumbList" | "WebSite";
  data: Record<string, any>;
}
