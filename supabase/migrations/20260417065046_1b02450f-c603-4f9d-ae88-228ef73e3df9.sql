
-- Включаем расширения для cron
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Таблица для авто-сгенерированных статей
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content_html TEXT NOT NULL,
  category TEXT NOT NULL,
  seo_title TEXT,
  seo_description TEXT,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_articles_published_at ON public.articles (published_at DESC);
CREATE INDEX idx_articles_slug ON public.articles (slug);

-- RLS: статьи публичные на чтение, запись только сервис-ролью
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Articles are publicly readable"
ON public.articles FOR SELECT
USING (true);
