import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pkivoolanqykajyclkoo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBraXZvb2xhbnF5a2FqeWNsa29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2NzY3MDAsImV4cCI6MjAzNTI1MjcwMH0.b4y7iJ1r8EvKWYdgPzppV_BzuNVEA-MU4uYK0nyz26E";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
