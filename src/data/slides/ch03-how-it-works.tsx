import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import { NeuralNetVisual } from '../../components/diagrams/NeuralNetVisual'
import {
  Card,
  Compare,
  Flow,
  Kicker,
  Quote,
  Subtitle,
  Title,
  VerticalFlow,
} from '../../components/ui'

export const ch03Slides: SlideDef[] = [
  {
    id: '03-divider',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'dark',
    notes: notes({
      say: 'هذا فصل مفاهيمي مهم. طمئنهم: بدون معادلات، وبأمثلة عملية.',
      explain: 'نبني صورة صحيحة لما يحدث عند إرسال طلب إلى الأداة.',
      example: 'سنصحح فكرة أن الأداة تبحث فقط عن جملة محفوظة وتعيدها.',
      question: 'هل تعتقدون أن ChatGPT يبحث داخل قاعدة بيانات ثابتة عن أقرب جملة؟',
      interaction: 'خذ التصور الشائع ثم صحّحه بلطف.',
      time: '45 ثانية',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">03</p>
        <Title>كيف تعمل أدوات الذكاء الاصطناعي الحديثة عملياً؟</Title>
        <Subtitle>
          صورة مبسّطة بما يكفي للإدارة والاستخدام اليومي، ودقيقة بما يكفي لتجنب المفاهيم الخاطئة الشائعة.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '03-io-flow',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'navy',
    steps: 4,
    notes: notes({
      say: 'اعرض الدورة الأساسية: مستخدم، إدخال، نموذج، مخرج.',
      explain: 'هذه أبسط دورة لأي تفاعل مع أداة توليديّة.',
      example: 'تكتب طلباً في الواجهة، فيُمرَّر إلى النموذج، ثم تظهر نتيجة.',
      question: 'أين يحدث الجزء الأهم في رأيكم؟',
      interaction: 'غالباً عند النموذج — مع أهمية جودة الإدخال.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>الصورة العامة</Kicker>
        <Title wide>ماذا يحدث من لحظة الطلب حتى ظهور النتيجة؟</Title>
        <div className="slide-body" style={{ gap: '1rem', justifyContent: 'flex-start' }}>
          <Flow
            nodes={[
              step >= 1 ? 'USER' : '…',
              step >= 2 ? 'INPUT' : '…',
              step >= 3 ? 'AI MODEL' : '…',
              step >= 4 ? 'OUTPUT' : '…',
            ]}
            accentIndex={step >= 3 ? 2 : undefined}
          />
          <Reveal show={step >= 3}>
            <NeuralNetVisual active={step >= 3} />
          </Reveal>
          <Reveal show={step >= 4}>
            <p className="slide-subtitle" style={{ maxWidth: '48ch' }}>
              تدخلون طلباً أو سؤالاً، يصل إلى النموذج، تتم معالجته وفق ما تعلّمه سابقاً، ثم تُنتَج
              نتيجة تحتاج مراجعة بشرية قبل الاعتماد عليها في قرارات مهمة.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-simple-words',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'light',
    notes: notes({
      say: 'أعد الفكرة بلغة إدارية مباشرة.',
      explain: 'المعالجة ليست دائماً نسخ جملة مخزّنة حرفياً.',
      example: 'قد يصيغ رداً جديداً انطلاقاً من أنماط تعلّمها.',
      question: 'هل سبق وحصلتم على إجابة تبدو مقنعة ثم تبين أنها غير دقيقة؟',
      interaction: 'اربط لاحقاً بضرورة المراجعة.',
      time: '1 دقيقة',
    }),
    content: () => (
      <>
        <Kicker>بلغة العمل</Kicker>
        <Title wide>الأداة تستقبل تعليماتكم، تعالجها عبر نموذج مدرَّب، ثم تقترح ناتجاً</Title>
        <div className="slide-body">
          <Card>
            <p>
              عندما تكتبون سؤالاً أو طلباً، لا تذهب الرسالة إلى موظف بشري خلف الشاشة. تدخل إلى{' '}
              <strong>نموذج ذكاء اصطناعي (AI Model)</strong>، فيعالجها وفق أنماط تعلّمها أثناء
              تدريبه، ثم يقدّم مسودة إجابة أو محتوى. جودة الناتج تعتمد كثيراً على وضوح طلبكم
              وعلى حدود معرفة النموذج.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '03-not-database',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'صحّح المفهوم الشائع بهدوء واحترام.',
      explain: 'LLM ليس محرك بحث بسيطاً داخل أرشيف جمل جاهزة.',
      example: 'قد ينتج صياغة لم تُحفظ حرفياً من قبل.',
      question: 'هل كان هذا هو التصور الشائع لديكم؟',
      interaction: 'قل: تصور منطقي، لكنه غير كافٍ لوصف ما يحدث.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>تصحيح مفهوم شائع</Kicker>
        <Title wide>هل أدوات مثل ChatGPT تبحث فقط داخل قاعدة بيانات وتعيد أقرب جملة؟</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <h2 style={{ margin: 0, color: '#0f766e' }}>الأمر أدق من ذلك، وليس بهذه البساطة.</h2>
          </Reveal>
          <Reveal show={step >= 2}>
            <Card>
              <p>
                النموذج اللغوي الكبير <span className="en">(Large Language Model — LLM)</span>{' '}
                نموذج مدرَّب مسبقاً. خلال التدريب تُضبط ملايين أو مليارات المعاملات{' '}
                <span className="en">(Parameters)</span> بحيث يتعلّم أنماطاً لغوية ومعرفية عامة.
                عند الاستخدام، يولّد إجابة جديدة انطلاقاً من هذه الأنماط، وليس بالضرورة بنسخ جملة
                محفوظة كما هي.
              </p>
            </Card>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-analogy',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'dark',
    notes: notes({
      say: 'استخدم التشبيه مع التأكيد أنه تقريبي فقط.',
      explain: 'النموذج لا يفكر كالإنسان، لكنه يبني على أنماط مكتسبة.',
      example: 'قد يلخّص فكرة بأسلوب جديد بدل نسخ فقرة.',
      question: 'هل يساعد هذا التشبيه على توضيح الفكرة؟',
      interaction: 'اطلب من أحد إعادة الصياغة بجملة مهنية واحدة.',
      time: '2 دقائق',
    }),
    content: () => (
      <>
        <Kicker>تشبيه للتوضيح — وليس وصفاً حرفياً</Kicker>
        <div className="slide-body">
          <Quote>
            تخيّل شخصاً اطّلع على كميات هائلة من الكتب والمقالات والمراسلات. عندما تسأله سؤالاً،
            لا يفتح بالضرورة ملفاً ويعيد جملة محفوظة حرفياً في كل مرة. يعتمد على ما استوعبه من
            أنماط ليصوغ إجابة مناسبة للسياق. النموذج يفعل شيئاً مقارباً إحصائياً — دون فهم بشري
            حقيقي ودون ضمان للصحة دائماً.
          </Quote>
        </div>
      </>
    ),
  },
  {
    id: '03-training',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'light',
    steps: 4,
    notes: notes({
      say: 'التدريب مرحلة سابقة تقوم بها الشركات المطوّرة عادة.',
      explain: 'المستخدم النهائي يعمل بعد انتهاء التدريب في أغلب الحالات.',
      example: 'أنتم لا تعيدون تدريب النموذج من الصفر عند كل سؤال.',
      question: 'هل يتضح الفرق بين بناء النموذج واستخدامه؟',
      interaction: 'أكد أننا في جانب الاستخدام.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          مرحلة <span className="en">Training</span> — التدريب
        </Kicker>
        <Title>كيف يُبنى النموذج قبل أن يصل إليكم كأداة جاهزة؟</Title>
        <div className="slide-body">
          <VerticalFlow
            nodes={[
              step >= 1 ? 'بيانات واسعة ومتنوعة (Data)' : '…',
              step >= 2 ? 'عملية تدريب مكلفة حسابياً (Training)' : '…',
              step >= 3 ? 'معاملات مضبوطة داخل النموذج (Parameters)' : '…',
              step >= 4 ? 'أنماط عامة مكتسبة يمكن التوليد منها' : '…',
            ]}
          />
        </div>
      </>
    ),
  },
  {
    id: '03-inference',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'mint',
    steps: 4,
    notes: notes({
      say: 'الاستخدام اليومي = Inference.',
      explain: 'كل Prompt يطلق عملية توليد/استدلال، لا إعادة تدريب كاملة.',
      example: 'سؤال عن صياغة إيميل يمر عبر النموذج ويعطي مسودة.',
      question: 'إذن عملنا اليومي يقع في أي مرحلة؟',
      interaction: 'Inference.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          مرحلة <span className="en">Inference</span> — الاستخدام والتوليد
        </Kicker>
        <Title>ماذا يحدث عندما تكتبون طلباً اليوم داخل الأداة؟</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'Prompt' : '…',
              step >= 2 ? 'Model' : '…',
              step >= 3 ? 'Prediction' : '…',
              step >= 4 ? 'Answer' : '…',
            ]}
            accentIndex={1}
          />
          <Reveal show={step >= 4}>
            <p className="muted">
              في العمل اليومي أنتم عادة في مرحلة الاستخدام والتوليد، لا في مرحلة تدريب النموذج.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-tokens',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'navy',
    steps: 3,
    notes: notes({
      say: 'قدّم Tokens كوحدات معالجة للنص.',
      explain: 'قد تكون كلمة أو جزءاً منها أو علامة ترقيم.',
      example: 'لذلك أحياناً يحسب النظام الاستهلاك بالتوكنات لا بعدد الصفحات فقط.',
      question: 'هل لاحظتم حدوداً لطول المحادثة أو حجم الملف؟',
      interaction: 'اربط بفكرة نافذة السياق لاحقاً باختصار.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          <span className="en">Tokens</span> — وحدات معالجة النص
        </Kicker>
        <Title>النموذج لا يتعامل مع الجملة كما يقرأها الإنسان دفعة واحدة</Title>
        <Subtitle>
          يُقسَّم النص إلى وحدات أصغر تُسمّى توكنات، ثم تُعالج هذه الوحدات لتوليد الاستجابة.
        </Subtitle>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <Card>
              <p>
                مثال: <strong>ما هي عاصمة روسيا؟</strong>
              </p>
            </Card>
          </Reveal>
          <Reveal show={step >= 2}>
            <div className="row" style={{ justifyContent: 'center' }}>
              {['ما', 'هي', 'عاصمة', 'روسيا', '؟'].map((t) => (
                <span key={t} className="token">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal show={step >= 3}>
            <p className="muted">
              التوكن قد يكون كلمة كاملة أو جزءاً من كلمة أو علامة ترقيم. هذا تبسيط كافٍ لفهم الفكرة.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-numbers-vectors',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'light',
    steps: 4,
    notes: notes({
      say: 'اربط النص بالأرقام ثم المتجهات دون معادلات.',
      explain: 'التضمين يحول المعنى إلى تمثيل رقمي يمكن حساب التشابه عليه.',
      example: 'قطة وكلب أقرب لبعضهما من قطة وسيارة في هذا التمثيل.',
      question: 'لماذا قد يكون ذلك مفيداً في البحث داخل وثائق الشركة؟',
      interaction: 'مقدمة لـ RAG.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          من النص إلى الأرقام: <span className="en">Embeddings</span> والمتجهات
        </Kicker>
        <Title>الحاسوب يتعامل في النهاية مع تمثيلات رقمية للمعنى</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'Text' : '…',
              step >= 2 ? 'Tokens' : '…',
              step >= 3 ? 'Numbers' : '…',
              step >= 4 ? 'Vectors' : '…',
            ]}
          />
          <Reveal show={step >= 4}>
            <div className="grid-3">
              <Card>
                <h3>قطة</h3>
                <p className="tiny en">→ vector representation</p>
              </Card>
              <Card>
                <h3>كلب</h3>
                <p className="tiny en">→ vector representation</p>
              </Card>
              <Card>
                <h3>سيارة</h3>
                <p className="tiny en">→ vector representation</p>
              </Card>
            </div>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-vector-space',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'اعرض الخريطة المفاهيمية مع التحذير أنها تبسيط.',
      explain: 'الأبعاد الحقيقية كثيرة جداً؛ الرسم للفهم فقط.',
      example: 'البحث بالمعنى يعتمد على تقارب المتجهات.',
      question: 'أين تتوقعون أن تقع كلمة طائرة بالنسبة لسيارة؟',
      interaction: 'قرب المركبات لا الحيوانات.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>تبسيط بصري لفكرة التشابه</Kicker>
        <Title>المعاني المتقاربة غالباً ما تكون متقاربة في التمثيل الرقمي</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <div className="vector-map">
              <span className="vector-point" style={{ top: '28%', left: '30%' }}>
                قطة
              </span>
              <span className="vector-point" style={{ top: '38%', left: '42%' }}>
                كلب
              </span>
              <span className="vector-point" style={{ top: '68%', left: '70%' }}>
                سيارة
              </span>
              <span className="vector-point" style={{ top: '58%', left: '82%' }}>
                طائرة
              </span>
            </div>
          </Reveal>
          <Reveal show={step >= 2}>
            <p className="tiny">
              هذا رسم ثنائي الأبعاد للفهم فقط، وليس تمثيلاً حرفياً لما يحدث داخل النموذج الحقيقي.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-next-token',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'dark',
    steps: 5,
    notes: notes({
      say: 'اربط التوكنات بآلية التوليد المتتابع.',
      explain: 'التنبؤ المتكرر لا يعني ضمان الحقيقة.',
      example: 'لذلك تظهر ثقة مفرطة أحياناً مع خطأ.',
      question: 'لماذا تبقى المراجعة البشرية ضرورية؟',
      interaction: 'لأن الناتج احتمال/توليد لا شهادة صحة.',
      time: '1.5 دقيقة',
    }),
    content: ({ step }) => (
      <>
        <Kicker>فكرة التوليد باختصار</Kicker>
        <Title>من الأنماط المكتسبة إلى بناء الإجابة تدريجياً</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'TOKENS' : '…',
              step >= 2 ? 'PATTERNS' : '…',
              step >= 3 ? 'PREDICTION' : '…',
              step >= 4 ? 'NEXT TOKEN' : '…',
              step >= 5 ? 'ANSWER' : '…',
            ]}
          />
          <Reveal show={step >= 5}>
            <p className="muted">
              النموذج يبني الإجابة خطوة بخطوة. هذا يفسّر طلاقة الأسلوب، ولا يضمن دقة المعلومة دائماً.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-data-quality',
    chapter: 'كيف يعمل عملياً؟',
    chapterId: '03',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'اكسر فكرة أن الحجم وحده يكفي.',
      explain: 'الجودة والتنوع والدقة مهمة للمؤسسات أيضاً عند بناء معرفة داخلية.',
      example: 'وثائق قديمة خاطئة إن أُدخلت في نظام داخلي ستُضعف الإجابات.',
      question: 'لو درّبنا فريقاً على إجراءات غير محدّثة، ماذا تتوقعون؟',
      interaction: 'اربط بجودة بيانات الشركة.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>جودة البيانات</Kicker>
        <Title wide>هل زيادة كمية البيانات تعني بالضرورة ذكاءً اصطناعياً أفضل؟</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <h2 style={{ margin: 0 }}>ليس تلقائياً. الجودة لا تقل أهمية عن الحجم.</h2>
          </Reveal>
          <Reveal show={step >= 2}>
            <Compare
              badLabel="بيانات ضعيفة"
              goodLabel="بيانات جيدة"
              bad={
                <ul className="x-list">
                  <li>ضجيج وتكرار</li>
                  <li>معلومات قديمة أو خاطئة</li>
                  <li>تحيّز أو نقص تمثيل</li>
                </ul>
              }
              good={
                <ul className="check-list">
                  <li>دقة وحداثة مناسبة</li>
                  <li>تنوّع مفيد للمهام</li>
                  <li>أمثلة واضحة وقابلة للتعلّم</li>
                </ul>
              }
            />
          </Reveal>
        </div>
      </>
    ),
  },
]
