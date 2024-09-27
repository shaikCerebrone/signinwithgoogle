// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ejbgiclntkjsvvnkpfoh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYmdpY2xudGtqc3Z2bmtwZm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MzYwOTgsImV4cCI6MjA0MzAxMjA5OH0.uTxyNvFvA9BTjjR5trOhIBnVbJjenvvmJDIGytcnI1U";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
