select cron.schedule(
  'daily-article-generation',
  '0 3 * * *',
  $$
  select net.http_post(
    url := 'https://wpynydhowoumjeaarjlc.supabase.co/functions/v1/generate-article',
    headers := '{"Content-Type":"application/json","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndweW55ZGhvd291bWplYWFyamxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyMzcyNzQsImV4cCI6MjA4NzgxMzI3NH0.SGbwwRSYy5NcLXkAkP5On021-g4NEptT8KECqwlWM2M"}'::jsonb,
    body := '{}'::jsonb
  );
  $$
);