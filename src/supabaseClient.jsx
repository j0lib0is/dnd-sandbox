import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// const supabaseUrl = 'https://gxoogbuczfooadvkypoe.supabase.co';
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4b29nYnVjemZvb2Fkdmt5cG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3OTgzODgsImV4cCI6MTk5MTM3NDM4OH0.InAM1bAZNLuvMrj-dGUfwofcTnj3HYIRiucZRVfnUWQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);