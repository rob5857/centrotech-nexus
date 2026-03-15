// Supabase client configuration
// Install: npm install @supabase/supabase-js
// Then uncomment this code and add your credentials to .env.local


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// Temporary placeholder until Supabase is configured


