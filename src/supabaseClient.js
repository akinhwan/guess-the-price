import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://covzokoldhopvuyqduco.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvdnpva29sZGhvcHZ1eXFkdWNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM4NTE2MTcsImV4cCI6MTk2OTQyNzYxN30.JgTKfgDB6bUa98macE87jSUo2I0qPOFDEJ2D-qyzWu4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
