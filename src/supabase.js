import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ggcpmdsnrbbqipxdwtvu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnY3BtZHNucmJicWlweGR3dHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwOTYxMjcsImV4cCI6MTk5ODY3MjEyN30.iAu6iV1ccOXlTVmlHrhDigpSWOqhUDh6sQGOod8LZHA";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log(supabase);

export default supabase;
