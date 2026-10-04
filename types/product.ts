export interface ChannelCategory {
  id: string;
  name: string;
  channelCount: number;
  icon: string;
  featuredChannels: string[];
}

export interface StreamQuality {
  resolution: "4K UHD" | "FHD 1080p" | "HD 720p" | "HEVC";
  fps: number;
  bitrate: string;
  recommendedSpeed: string;
}

export interface DeviceGuide {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  icon: string;
  recommendedApps: string[];
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    codeOrUrl?: string;
    tip?: string;
  }[];
  videoUrl?: string;
  downloadLinks?: {
    appName: string;
    url: string;
    downloaderCode?: string;
  }[];
}

export interface ServerStatus {
  online: boolean;
  uptime: string;
  activeStreams: number;
  pingMs: number;
  regions: {
    name: string;
    flag: string;
    status: "optimal" | "good" | "busy";
  }[];
}
