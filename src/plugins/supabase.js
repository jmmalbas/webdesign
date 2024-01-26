// plugins/supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cuetscutmucqyjvweeae.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1ZXRzY3V0bXVjcXlqdndlZWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1MDY4NTEsImV4cCI6MjAyMTA4Mjg1MX0.4r60kuj_F12SAdG5sdqpFY0SeXVqjKcV9l8Hq3iy94U';

export const supabase = createClient(supabaseUrl, supabaseKey);
