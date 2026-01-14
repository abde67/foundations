import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rpnabgvngwfxfgxjudkj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwbmFiZ3ZuZ3dmeGZneGp1ZGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyMDE0MjIsImV4cCI6MjA4Mzc3NzQyMn0.errbTW8Bz-oDgROFuoN9tkfc1t9llLmSABfuR4rLn_U";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
