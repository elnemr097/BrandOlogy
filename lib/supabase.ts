import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type LeadStatus = "new" | "contacted" | "converted";
export type ServiceType =
  | "ai-automation"
  | "marketing"
  | "software"
  | "design"
  | "video"
  | "other";

export interface Lead {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  service: ServiceType;
  message?: string;
  source: string;
  created_at?: string;
  status?: LeadStatus;
}
