import { DeviceGuide } from "@/types/product";
import { deviceGuides } from "@/data/devices";

export function getAllDeviceGuides(): DeviceGuide[] {
  return deviceGuides;
}

export function getDeviceGuideBySlug(slug: string): DeviceGuide | undefined {
  return deviceGuides.find((d) => d.slug === slug);
}
