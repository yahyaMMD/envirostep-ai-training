# مصادر التحقق والمراجع

استُخدمت للتحقق من دقة المفاهيم العامة وأسماء الأدوات/العائلات النموذجية وقت إعداد العرض (أكتوبر 2026). لا تُقدَّم كادعاءات مطلقة عن "أفضل نموذج".

## مفاهيم تقنية (أساسية ومستقرة)

- الفرق بين **التدريب (Training)** و**الاستدلال/التوليد (Inference)** — مفهوم معياري في تعلّم الآلة والنماذج اللغوية.
- **Tokens**: وحدات تقطيع النص قبل المعالجة في نماذج اللغة.
- **Embeddings / Vectors**: تمثيلات رقمية للمعنى؛ التقارب في الفضاء يرتبط بالتشابه الدلالي (تبسيط تعليمي في العرض).
- **RAG (Retrieval-Augmented Generation)**: استرجاع مقاطع ذات صلة ثم تمريرها إلى LLM للصياغة — لتمييزه عن "البحث في قاعدة جمل جاهزة" كوصف كامل لـ LLM.
- سياسات الخصوصية والتدريب **تختلف** بين المزودين والخطط (شخصي / أعمال) — يجب مراجعة سياسة كل خدمة قبل إرسال بيانات حسّاسة.

## أدوات ومنصات مذكورة (أمثلة شائعة في السوق)

- OpenAI / ChatGPT — https://openai.com
- Google Gemini — https://gemini.google.com
- Anthropic Claude — https://claude.ai
- Microsoft Copilot — https://www.microsoft.com/copilot
- Perplexity — https://www.perplexity.ai
- NotebookLM — https://notebooklm.google
- Midjourney — https://www.midjourney.com
- Adobe Firefly — https://www.adobe.com/products/firefly.html
- Canva AI — https://www.canva.com
- Runway — https://runwayml.com
- ElevenLabs — https://elevenlabs.io
- Zapier — https://zapier.com
- Make — https://www.make.com

## عائلات النماذج (تحقق لحظي — أكتوبر 2026)

أسماء الإصدارات تتغير بسرعة. العرض يتجنب ادعاء قدرات تفصيلية لإصدار بعينه، ويذكر العائلات والمنتجات:

- وثائق نماذج OpenAI: https://developers.openai.com/api/docs/models  
  (إشارات عامة في السوق وقت الإعداد إلى عائلات GPT-6 / GPT-5.6 وغيرها — للتحقق قبل أي ادعاء قدرات محددة)
- Anthropic / Claude: https://www.anthropic.com  
- Google Gemini: https://ai.google.dev  

**قاعدة العرض:** لا يوجد نموذج "الأفضل دائماً"؛ الاختيار حسب المهمة، السرعة، التكلفة، السياق، والخصوصية.

## ما لم نَدَّعه عمداً

- أن LLM = محرك بحث في قاعدة بيانات فقط
- أن النموذج العام يعرف تلقائياً سياسات/ملفات الشركة
- أن النموذج وحده يعرف دائماً الطقس اللحظي بلا مصدر خارجي
- أن بيانات المستخدم تُستخدم دائماً للتدريب
- أن النسخة الأحدث أفضل لكل مهمة
- أن تطبيقات سطح المكتب أفضل دائماً من السحابة (أو العكس)
