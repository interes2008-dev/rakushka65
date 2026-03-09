const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, comment } = await req.json();

    // Validate inputs
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      return new Response(JSON.stringify({ error: 'Invalid name' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    if (!phone || typeof phone !== 'string' || !/^[\d\s\-\+\(\)]{5,20}$/.test(phone)) {
      return new Response(JSON.stringify({ error: 'Invalid phone' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    if (comment && (typeof comment !== 'string' || comment.length > 1000)) {
      return new Response(JSON.stringify({ error: 'Invalid comment' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const MAX_BOT_TOKEN = Deno.env.get('MAX_BOT_TOKEN');
    const MAX_CHAT_ID = Deno.env.get('MAX_CHAT_ID');

    if (!MAX_BOT_TOKEN || !MAX_CHAT_ID) {
      return new Response(JSON.stringify({ error: 'Max bot not configured' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const text = `🐚 Новая заявка с сайта Rakushka65\n\n👤 Имя: ${name.trim()}\n📞 Телефон: ${phone.trim()}${comment ? `\n💬 Комментарий: ${comment.trim()}` : ''}`;

    const url = `https://platform-api.max.ru/messages?chat_id=${encodeURIComponent(MAX_CHAT_ID)}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MAX_BOT_TOKEN,
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Max API error:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to send message to Max' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    await response.text();
    return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
