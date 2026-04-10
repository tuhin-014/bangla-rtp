/** Returns true if Supabase env vars are configured */
export function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://your-project-ref.supabase.co" &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
