const SUPABASE_URL = 'https://uwpnwvwcmqoaavsnbfxa.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cG53dndjbXFvYWF2c25iZnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NDQxNjEsImV4cCI6MjA5NTIyMDE2MX0.XAs72X2PjMhqVZ0mn_0ZlyZdC5k0c1Fb_q3T8USRf7c';
const { createClient } = window.supabase;
window.db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
