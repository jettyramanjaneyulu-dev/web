import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client
 * Uses SERVICE ROLE key (never expose to client)
 */
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}