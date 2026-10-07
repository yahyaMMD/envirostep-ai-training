import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import { CloudComputeVisual } from '../../components/diagrams/CloudComputeVisual'
import {
  Card,
  Flow,
  Kicker,
  Pill,
  Subtitle,
  Title,
} from '../../components/ui'

export const ch04Slides: SlideDef[] = [
  {
    id: '04-divider',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'dark',
    notes: notes({
      say: 'نميّز بين معرفة النموذج العامة وربط مصادر الشركة أو البيانات الحية.',
      explain: 'هذا يمنع انتظار إجابات داخلية صحيحة من أداة عامة بلا ربط وثائق.',
      example: 'سياسة إجازات الشركة ليست معرفة مضمونة في ChatGPT العام.',
      question: 'هل سأل أحد أداة عامة عن معلومة داخلية خاصة بالشركة؟',
      interaction: 'ناقش النتيجة إن وُجدت.',
      time: '45 ثانية',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">04</p>
        <Title>النماذج اللغوية، المعرفة العامة، وربط مصادركم</Title>
        <Subtitle>
          متى تعتمد الإجابة على ما تعلّمه النموذج سابقاً؟ ومتى نحتاج وثائق الشركة أو مصدراً حديثاً؟
        </Subtitle>
      </div>
    ),
  },
  {
    id: '04-what-is-model',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'عرّف النموذج بجملة إدارية واضحة ثم التشبيه.',
      explain: 'النموذج نظام مدرَّب على أنماط من بيانات لأداء مهام محددة.',
      example: 'نموذج نصّي للصياغة، ونموذج صور للتوليد البصري.',
      question: 'هل يمكن أن تستخدم المنصة الواحدة أكثر من نموذج؟',
      interaction: 'نعم، وهذا شائع.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          ما هو <span className="en">AI Model</span>؟
        </Kicker>
        <Title wide>نظام مدرَّب على بيانات ليؤدي مهاماً محددة</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <Card>
              <p>
                بعبارة عملية: النموذج يتعلّم من أمثلة كثيرة كيف يبدو الناتج الجيد لمهمة معينة، ثم
                يُستخدم لاحقاً لاقتراح نتائج على مدخلات جديدة. هذا تشبيه وظيفي مفيد — وليس وصفاً
                حرفياً لتعلّم الإنسان.
              </p>
            </Card>
          </Reveal>
          <Reveal show={step >= 2}>
            <Flow
              nodes={['DATA', 'LEARNING', 'MODEL', 'QUESTION', 'RESULT']}
              accentIndex={2}
            />
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-what-is-llm',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'mint',
    notes: notes({
      say: 'LLM نوع من النماذج يركّز على اللغة وتوليدها.',
      explain: 'كثير من أدوات المكتب تعتمد على هذا النوع مع اختلافات.',
      example: 'ChatGPT و Claude و Gemini تعتمد على نماذج من هذه العائلة بمسميات مختلفة.',
      question: 'هل المصطلح أصبح أوضح الآن؟',
      interaction: 'أكد الفرق بين النموذج والمنصة.',
      time: '1.5 دقيقة',
    }),
    content: () => (
      <>
        <Kicker>
          <span className="en">Large Language Model (LLM)</span>
        </Kicker>
        <Title>النموذج اللغوي الكبير: العمود الفقري لكثير من أدوات النص</Title>
        <div className="slide-body">
          <Card>
            <p>
              هو نوع من نماذج الذكاء الاصطناعي مدرَّب على كميات كبيرة من النصوص، فيصبح قادراً على
              فهم الطلبات اللغوية وتوليد إجابات أو مسودات: تلخيص، ترجمة، اقتراح صياغة، هيكلة تقرير،
              وغير ذلك. المنصة التي تفتحونها قد تضيف فوقه أدوات بحث أو رفع ملفات أو توليد صور.
            </p>
          </Card>
          <div className="row">
            <Pill>النموذج ≠ المنصة بالكامل</Pill>
            <Pill>المنصة قد تجمع عدة نماذج وميزات</Pill>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '04-llm-vs-rag',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'افصل بوضوح بين المعرفة المدمجة والاسترجاع من مصادركم.',
      explain: 'RAG يجلب مقاطع ذات صلة ثم يطلب من LLM صياغتها.',
      example: 'دليل سياسات داخلية → استرجاع → إجابة مسنودة بالوثيقة.',
      question: 'متى تحتاجون وثائق الشركة بدل المعرفة العامة؟',
      interaction: 'إجراءات داخلية، أسعار خاصة، تقارير مشاريع.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>تمييز إداري مهم</Kicker>
        <Title>
          المعرفة العامة داخل النموذج تختلف عن البحث في وثائقكم أو قواعدكم
        </Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3 className="en">LLM</h3>
              <p>
                يولّد من أنماط تعلّمها أثناء التدريب. مفيد للمعرفة العامة والصياغة، لكنه لا يعرف
                تلقائياً ملفات شركتكم الخاصة.
              </p>
            </Card>
            <Reveal show={step >= 2}>
              <Card>
                <h3 className="en">RAG</h3>
                <p>
                  Retrieval-Augmented Generation: يسترجع معلومات من مصادر محددة ثم يصيغ الإجابة
                  بالاستعانة بها. مناسب للمعرفة الداخلية عند بنائه بشكل صحيح.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '04-rag-pipeline',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'light',
    steps: 6,
    notes: notes({
      say: 'امشِ مع خط الأنابيب خطوة بخطوة.',
      explain: 'Embedding ثم بحث متجهات ثم LLM.',
      example: 'سؤال موظف عن إجراء داخلي مع مستودع وثائق معتمد.',
      question: 'أين تدخل وثائق الشركة في هذه السلسلة؟',
      interaction: 'عند Documents قبل الصياغة.',
      time: '2.5 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          مسار مبسّط لـ <span className="en">RAG</span>
        </Kicker>
        <Title>كيف يُربَط السؤال بمصادر خارج النموذج ثم تُصاغ الإجابة؟</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'QUESTION' : '…',
              step >= 2 ? 'EMBEDDING' : '…',
              step >= 3 ? 'VECTOR SEARCH' : '…',
              step >= 4 ? 'DOCUMENTS' : '…',
              step >= 5 ? 'LLM' : '…',
              step >= 6 ? 'ANSWER' : '…',
            ]}
            accentIndex={4}
          />
        </div>
      </>
    ),
  },
  {
    id: '04-ex-moscow',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'مثال معرفة عامة.',
      explain: 'لا يحتاج ملف شركة، مع بقاء عادة التحقق للمعلومات الحساسة.',
      example: 'عاصمة روسيا.',
      question: 'هل تحتاجون هنا نظام وثائق داخلي؟',
      interaction: 'لا.',
      time: '1 دقيقة',
    }),
    content: ({ step }) => (
      <>
        <Kicker>مثال 1 — معرفة عامة من النموذج</Kicker>
        <Title>سؤال عام يمكن أن يجيب عليه النموذج من أنماطه المكتسبة</Title>
        <div className="slide-body">
          <p className="slide-subtitle">ما هي عاصمة روسيا؟</p>
          <Flow nodes={['Question', 'Model', 'Learned patterns', 'موسكو']} />
          <Reveal show={step >= 2}>
            <p className="muted">هذا مثال على توليد من معرفة/أنماط عامة — وليس مسار RAG داخلي.</p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-ex-policy',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'مثال داخلي يحتاج وثائق معتمدة.',
      explain: 'الأداة العامة لا تضمن معرفة سياسة شركتكم.',
      example: 'سياسة الإجازات.',
      question: 'هل تضعون وثائق داخلية في أدوات غير معتمدة مؤسسياً؟',
      interaction: 'اربط بسياسات الخصوصية لاحقاً.',
      time: '1.5 دقيقة',
    }),
    content: ({ step }) => (
      <>
        <Kicker>مثال 2 — معلومة داخلية خاصة بالمؤسسة</Kicker>
        <Title wide>سؤال عن سياسة الإجازات في شركتكم يحتاج مصدراً داخلياً موثوقاً</Title>
        <div className="slide-body">
          <Flow
            nodes={['Question', 'Search docs', 'Relevant doc', 'LLM', 'Answer']}
            accentIndex={1}
          />
          <Reveal show={step >= 2}>
            <p className="muted">هذا أقرب إلى أنظمة معرفة داخلية أو مسار RAG عند توفره.</p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-ex-weather',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'مثال معلومة لحظية.',
      explain: 'النموذج وحده لا يملك بالضرورة طقس اليوم.',
      example: 'ربط بمصدر طقس حديث.',
      question: 'لماذا قد تخطئ الأداة في معلومات تتغير بسرعة؟',
      interaction: 'غياب مصدر حيّ أو محدّث.',
      time: '1.5 دقيقة',
    }),
    content: ({ step }) => (
      <>
        <Kicker>مثال 3 — معلومة تتغير لحظياً</Kicker>
        <Title wide>الطقس اليوم في الجزائر يحتاج مصدراً حديثاً، لا ذاكرة النموذج وحدها</Title>
        <div className="slide-body">
          <Flow
            nodes={['Question', 'Weather API', 'Current data', 'AI model', 'Answer']}
            accentIndex={1}
          />
          <Reveal show={step >= 2}>
            <Card>
              <p>
                النموذج وحده لا يملك بالضرورة معلومات لحظية موثوقة. عندما يُربَط بمصادر خارجية —
                مثل خدمة طقس أو الإنترنت أو ملفات معتمدة — يمكن للنظام الاعتماد على هذه المعلومات
                ثم صياغتها بلغة واضحة.
              </p>
            </Card>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-many-models',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'اشرح تعدد العائلات دون تصنيفات مطلقة.',
      explain: 'الاختيار حسب المهمة والتكلفة والسياق والضوابط.',
      example: 'تلخيص سريع قد لا يحتاج أعلى نموذج متاح.',
      question: 'هل الأحدث دائماً الأنسب لكل مهمة؟',
      interaction: 'لا.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>لماذا توجد عدة منصات ونماذج؟</Kicker>
        <Title>لأن المهام تختلف في متطلباتها: دقة، سرعة، تكلفة، وتكامل</Title>
        <div className="slide-body">
          <div className="grid-3">
            <Card>
              <h3 className="en">ChatGPT</h3>
              <p>OpenAI — منصة واسعة الاستخدام للمهام العامة والإنتاجية</p>
            </Card>
            <Card>
              <h3 className="en">Gemini</h3>
              <p>Google — مفيدة خصوصاً عند العمل داخل منظومة Google</p>
            </Card>
            <Card>
              <h3 className="en">Claude</h3>
              <p>Anthropic — شائعة في التحليل والنصوص الطويلة والمراجعة</p>
            </Card>
          </div>
          <Reveal show={step >= 2}>
            <p>
              قد تختلف النماذج في القدرة على الاستدلال، السرعة، حجم السياق، التعامل مع الوسائط،
              التكلفة، وزمن الاستجابة.{' '}
              <strong className="highlight-text">نختار حسب المهمة والسياق المؤسسي، لا حسب الشهرة فقط.</strong>
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-not-free',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'dark',
    steps: 2,
    notes: notes({
      say: 'اشرح باختصار لماذا توجد خطط مدفوعة وحدود للاستخدام المجاني.',
      explain: 'خلف كل استعلام متقدم بنية حوسبة وتكاليف تشغيل.',
      example: 'اشتراكات، خطط أعمال، أو فوترة API.',
      question: 'هل تتوقع الإدارة استخداماً مجانياً غير محدود لنماذج متقدمة؟',
      interaction: 'وضّح واقع التكلفة بهدوء.',
      time: '1.5 دقيقة',
    }),
    content: ({ step }) => (
      <>
        <Kicker>لماذا ليست الخدمة المتقدمة مجانية بالكامل؟</Kicker>
        <Title>خلف كل إجابة متقدمة توجد تكلفة حوسبة وتشغيل</Title>
        <div className="slide-body">
          <CloudComputeVisual />
          <div className="grid-4">
            {['وحدات معالجة / GPU', 'خوادم وتخزين', 'هندسة وأمان', 'تدريب وتحديث وتشغيل'].map(
              (x) => (
                <Card key={x}>
                  <h3>{x}</h3>
                </Card>
              ),
            )}
          </div>
          <Reveal show={step >= 2}>
            <p>الخطط المجانية غالباً محدودة، بينما الاستخدام المؤسسي الكثيف يحتاج ترتيباً واضحاً للتكلفة والصلاحيات.</p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-privacy',
    chapter: 'النماذج والأنظمة',
    chapterId: '04',
    theme: 'mint',
    notes: notes({
      say: 'رسالة خصوصية مهنية مباشرة للإدارة.',
      explain: 'السياسات تختلف؛ لا تعميم بأن البيانات تُستخدم دائماً للتدريب.',
      example: 'لا ترسل عقوداً أو بيانات زبائن قبل اعتماد الأداة مؤسسياً.',
      question: 'ما نوع المعلومات الممنوعة حالياً من الخروج خارج أنظمة الشركة؟',
      interaction: 'اربط بسياسة داخلية إن وُجدت.',
      time: '2 دقائق',
    }),
    content: () => (
      <>
        <Kicker>البيانات والخصوصية</Kicker>
        <Title>قبل إرسال أي معلومة إلى أداة خارجية، يجب معرفة سياسة التعامل معها</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>ما الذي يختلف بين الخدمات؟</h3>
              <p>
                سياسات الخصوصية، مدة الاحتفاظ، إمكانية استخدام البيانات للتحسين/التدريب، وضوابط
                خطط الأعمال والمؤسسات.
              </p>
            </Card>
            <Card>
              <h3>قاعدة عملية</h3>
              <p>
                لا تُرسل معلومات حساسة أو سرية أو بيانات عملاء إلى أي أداة قبل التأكد من اعتمادها
                ومن ضوابط الاستخدام المناسبة لعملكم.
              </p>
            </Card>
          </div>
        </div>
      </>
    ),
  },
]
