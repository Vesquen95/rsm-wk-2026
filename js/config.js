const SUPABASE_URL = 'https://tvcyzsfmaspdhlziuion.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2Y3l6c2ZtYXNwZGhseml1aW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NjM4ODgsImV4cCI6MjA5NTEzOTg4OH0.KqVgpfyCfKdren7TvKjKwAbLrjXc-yB9yhcM-guxFco';
const { createClient } = window.supabase;
window.db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
