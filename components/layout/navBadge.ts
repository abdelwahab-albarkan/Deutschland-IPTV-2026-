import type { NavBadgeTone } from "@/lib/navigation";

export const navBadgeClass: Record<NavBadgeTone, string> = {
  free: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  live: "bg-rose-500/20 text-rose-300 border-rose-500/40",
  default: "bg-primary-500/20 text-primary-300 border-primary-500/40",
};
