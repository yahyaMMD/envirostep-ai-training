import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import {
  Card,
  Compare,
  Flow,
  Formula,
  Kicker,
  Subtitle,
  Title,
} from '../../components/ui'

export const ch07Slides: SlideDef[] = [
  {
    id: '07-divider',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'dark',
    notes: notes({
      say: 'إطار بسيط يتذكره المديرون بعد الجلسة.',
      explain: 'ليس إلزامياً ملء كل خانة دائماً، لكنه يمنع الطلبات الناقصة.',
      example: 'Role + Context + Task + Constraints + Format',
      question: 'هل تفضلون قالباً ثابتاً تستخدمونه في الفريق؟',
      interaction: 'يمكن اعتماده لاحقاً داخلياً.',
      time: '40 ثانية',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">07</p>
        <Title>كيف تُكتب تعليمات مهنية فعّالة للأدوات؟</Title>
        <Subtitle>
          إطار عملي يساعد على تحويل طلب عام إلى تكليف واضح يمكن للأداة تنفيذه بشكل أفضل.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '07-anatomy',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'اعرض العناصر كقائمة قرار لا كمعادلة مدرسية.',
      explain: 'للمهام البسيطة قد يكفي Task + Format.',
      example: 'للتقارير المهمة أضيف Role و Constraints.',
      question: 'أي عنصر ترونه الأهم في سياقكم؟',
      interaction: 'غالباً السياق وشكل الناتج.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>إطار التوجيه الجيد</Kicker>
        <Title>مكونات الطلب المهني الكامل</Title>
        <div className="slide-body">
          <Formula
            parts={['ROLE', 'CONTEXT', 'TASK', 'CONSTRAINTS', 'OUTPUT FORMAT', 'EXAMPLES']}
          />
          <Reveal show={step >= 2}>
            <p className="muted">
              استخدموا ما تحتاجه المهمة. كلّما ارتفع أثر الناتج على قرار أو عميل، زاد مستوى التفصيل المطلوب.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '07-parts',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'light',
    notes: notes({
      say: 'مرّ على كل مكون بمثال عربي قصير.',
      explain: 'Role يضبط الأسلوب؛ Format يسهّل الاستخدام اللاحق.',
      example: 'جدول أفضل من فقرة طويلة إذا كان الناتج سيُنقل إلى عرض.',
      question: 'متى يكون المثال المرجعي مفيداً؟',
      interaction: 'عند توحيد أسلوب التواصل المؤسسي.',
      time: '3 دقائق',
    }),
    content: () => (
      <>
        <Kicker>معنى كل مكوّن</Kicker>
        <Title>كيف تترجم هذه العناصر إلى جملة عمل واضحة؟</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3 className="en">1. ROLE</h3>
              <p>حدد الزاوية المهنية: مساعد متخصص في التقارير الفنية أو التواصل مع العملاء.</p>
            </Card>
            <Card>
              <h3 className="en">2. CONTEXT</h3>
              <p>اذكر الشركة/المشروع/المرحلة/الجمهور حتى لا تخمّن الأداة سياقاً خاطئاً.</p>
            </Card>
            <Card>
              <h3 className="en">3. TASK</h3>
              <p>حدد المطلوب بدقة: تلخيص، استخراج مخاطر، اقتراح إجراءات، إعادة صياغة…</p>
            </Card>
            <Card>
              <h3 className="en">4. CONSTRAINTS</h3>
              <p>قيود الطول والنبرة واللغة وما يجب تجنّبه.</p>
            </Card>
            <Card>
              <h3 className="en">5. OUTPUT FORMAT</h3>
              <p>جدول، نقاط، إيميل جاهز للإرسال، شرائح مقترحة…</p>
            </Card>
            <Card>
              <h3 className="en">6. EXAMPLES</h3>
              <p>مرجع أسلوب أو نموذج سابق عندما تريدون اتساقاً مع طريقة عمل الفريق.</p>
            </Card>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '07-report-compare',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'mint',
    notes: notes({
      say: 'قارن طلب تقرير عام بطلب منظم للإدارة.',
      explain: 'الثاني يحدد المخرجات القابلة للاستخدام مباشرة.',
      example: 'نقاط، مخاطر، إجراءات، جدول.',
      question: 'أي ناتج يمكن إدراجه أسرع في اجتماع إدارة؟',
      interaction: 'الثاني.',
      time: '2 دقائق',
    }),
    content: () => (
      <>
        <Kicker>مقارنة عملية</Kicker>
        <Title>طلب إعداد تقرير: ناقص مقابل جاهز للتنفيذ</Title>
        <div className="slide-body">
          <Compare
            badLabel="ناقص"
            goodLabel="جاهز للاستخدام"
            bad={<div className="prompt-box">اكتب تقريراً.</div>}
            good={
              <div className="prompt-box">
                أنت مساعد متخصص في كتابة التقارير المهنية. لدي تقرير عن [الموضوع] موجّه لإدارة
                المشروع. لخّصه في 5 نقاط رئيسية، استخرج المخاطر، واقترح 3 إجراءات عملية. استخدم
                عربية واضحة ومهنية، وقدّم النتيجة في جدول يسهل نقله إلى العرض.
              </div>
            }
          />
        </div>
      </>
    ),
  },
  {
    id: '07-text-email-meeting',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'light',
    notes: notes({
      say: 'أمثلة المراسلات والمحاضر الأكثر تكراراً.',
      explain: 'ركّز على النبرة والمستلم والهدف.',
      example: 'محضر: قرارات + مسؤول + موعد.',
      question: 'أي المثالين أقرب ليومكم؟',
      interaction: 'اختر واحداً للتجربة الحية لاحقاً.',
      time: '2 دقائق',
    }),
    content: () => (
      <>
        <Kicker>أمثلة مكتبية</Kicker>
        <Title>المراسلات ومحاضر الاجتماعات</Title>
        <div className="slide-body stack">
          <Compare
            badLabel="مراسلة ضعيفة التوجيه"
            goodLabel="مراسلة واضحة"
            bad={<div className="prompt-box">اكتب إيميلاً للعميل.</div>}
            good={
              <div className="prompt-box">
                اكتب إيميلاً مهذباً لعميل لإعلامه بتأجيل التسليم من الخميس إلى الأحد بسبب مراجعة
                جودة إضافية، مع طمأنة قصيرة على جودة المخرج النهائي، وبحد أقصى حوالي 120 كلمة.
              </div>
            }
          />
          <Compare
            badLabel="محضر عام"
            goodLabel="محضر قابل للمتابعة"
            bad={<div className="prompt-box">لخّص الاجتماع.</div>}
            good={
              <div className="prompt-box">
                لخّص المحضر التالي إلى: قرارات، مهام مع المسؤول والموعد، ونقاط ما زالت مفتوحة.
                أخرج النتيجة في جدول بسيط.
              </div>
            }
          />
        </div>
      </>
    ),
  },
  {
    id: '07-text-more',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'navy',
    notes: notes({
      say: 'غطِ أنماطاً إضافية بسرعة.',
      explain: 'نفس المنطق: هدف + قيود + شكل المخرج.',
      example: 'Excel: اذكر الأعمدة والسؤال التحليلي.',
      question: 'أي نمط تريدون تطبيقه على حالة حقيقية لاحقاً؟',
      interaction: 'سجّل الاختيار للفصل الأخير.',
      time: '2.5 دقائق',
    }),
    content: () => (
      <>
        <Kicker>أنماط إضافية شائعة في العمل</Kicker>
        <Title>من الترجمة وتحليل البيانات إلى العروض الوظيفية</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>ترجمة</h3>
              <p className="tiny">طلب ضعيف: ترجم هذا</p>
              <p>
                أفضل: ترجم إلى عربية مهنية واضحة، وحافظ على المصطلحات التقنية بين قوسين
                بالإنجليزية عند الحاجة.
              </p>
            </Card>
            <Card>
              <h3>Excel / بيانات</h3>
              <p className="tiny">طلب ضعيف: حلّل الملف</p>
              <p>
                أفضل: هذه الأعمدة […]. استخرج أهم الاتجاهات، نبّه إلى القيم الناقصة، واقترح رسماً
                مناسباً للعرض على الإدارة.
              </p>
            </Card>
            <Card>
              <h3>وصف وظيفة</h3>
              <p className="tiny">طلب ضعيف: اكتب job description</p>
              <p>
                أفضل: لوظيفة […] في شركة هندسية: المسؤوليات، المتطلبات، أسلوب واضح وجاذب، في حدود
                صفحة واحدة.
              </p>
            </Card>
            <Card>
              <h3>عرض تقديمي</h3>
              <p className="tiny">طلب ضعيف: اعمل عرضاً</p>
              <p>
                أفضل: اقترح هيكل 8 شرائح عن [موضوع] لجمهور غير تقني، مع عنوان ونقطة واحدة لكل شريحة.
              </p>
            </Card>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '07-image-prompt',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'الصورة تحتاج لغة بصرية منظمة.',
      explain: 'الموضوع، المكان، الأسلوب، الإضاءة، النسبة.',
      example: 'مكتب هندسي بإضاءة طبيعية ونسبة 16:9.',
      question: 'ما الناقص في طلب: صورة لمكتب حديث؟',
      interaction: 'اجمع عناصر مهنية: زاوية، أسلوب، استخدام.',
      time: '2.5 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>تعليمات توليد الصور</Kicker>
        <Title>صف المشهد كما لو كنت تكلّف مصوراً أو مصمماً محترفاً</Title>
        <div className="slide-body">
          <Formula
            parts={['SUBJECT', 'ENVIRONMENT', 'STYLE', 'COMPOSITION', 'LIGHTING', 'CAMERA', 'FORMAT']}
          />
          <Reveal show={step >= 2}>
            <Compare
              badLabel="وصف ناقص"
              goodLabel="وصف قابل للتنفيذ"
              bad={<div className="prompt-box">صورة لمكتب حديث.</div>}
              good={
                <div className="prompt-box">
                  أنشئ صورة فوتوغرافية واقعية لمكتب هندسي حديث، طاولة اجتماعات خشبية، شاشات تعرض
                  مخططات، إضاءة طبيعية من نوافذ كبيرة، أسلوب corporate photography، تكوين واسع،
                  نسبة 16:9، بدون نصوص داخل الصورة.
                </div>
              }
            />
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '07-video-prompt',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'light',
    notes: notes({
      say: 'الفيديو يضيف الفعل وحركة الكاميرا.',
      explain: 'لا تكتفِ بوصف مشهد ساكن.',
      example: 'مهندس يدخل الموقع والكاميرا تتبعه.',
      question: 'متى يستحق الفيديو وقت الفريق؟',
      interaction: 'عند الحاجة التواصلية الواضحة فقط.',
      time: '1.5 دقيقة',
    }),
    content: () => (
      <>
        <Kicker>تعليمات الفيديو</Kicker>
        <Title>حدّد الموضوع والفعل وحركة الكاميرا والأسلوب</Title>
        <div className="slide-body">
          <div className="tag-list">
            {['Subject', 'Action', 'Environment', 'Camera move', 'Lighting', 'Style'].map((t) => (
              <span key={t} className="tag en">
                {t}
              </span>
            ))}
          </div>
          <div className="prompt-box">
            لقطة سينمائية هادئة لمهندس يدخل موقع عمل في الصباح، الكاميرا تتحرك ببطء خلفه، ضوء شمس
            صباحي طبيعي، أسلوب realistic corporate documentary.
          </div>
        </div>
      </>
    ),
  },
  {
    id: '07-audio-prompt',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'navy',
    notes: notes({
      say: 'الصوت: المتحدث والنبرة والسرعة والسياق.',
      explain: 'مفيد للفيديوهات التعريفية أو المواد التدريبية.',
      example: 'نبرة هادئة واثقة لفيديو تعريفي.',
      question: 'هل لديكم محتوى يحتاج تعليقاً صوتياً منتظماً؟',
      interaction: 'إن لا، اكتفِ بالمرور.',
      time: '1 دقيقة',
    }),
    content: () => (
      <>
        <Kicker>تعليمات الصوت</Kicker>
        <Title>وضوح النبرة والاستخدام أهم من المصطلحات التقنية</Title>
        <div className="slide-body">
          <div className="grid-3">
            {['Speaker', 'Tone', 'Emotion', 'Speed', 'Language', 'Context'].map((t) => (
              <Card key={t}>
                <h3 className="en">{t}</h3>
              </Card>
            ))}
          </div>
          <div className="prompt-box">
            صوت رجل محترف، نبرة هادئة وواثقة، سرعة متوسطة، مناسب لفيديو تعريفي قصير عن خدمات الشركة.
          </div>
        </div>
      </>
    ),
  },
  {
    id: '07-automation-flow',
    chapter: 'كتابة التعليمات',
    chapterId: '07',
    theme: 'dark',
    steps: 6,
    notes: notes({
      say: 'اربط AI بسلسلة عمل لا بمحادثة معزولة.',
      explain: 'التعليمات تصبح خطوة داخل مسار أتمتة.',
      example: 'تصنيف بريد ثم تلخيص للمسؤول.',
      question: 'أي خطوة متكررة يمكن تفويض جزئها اللغوي للأداة؟',
      interaction: 'جهّز مثالاً للفصل الأخير.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>عندما يدخل الذكاء الاصطناعي في مسار عمل</Kicker>
        <Title>مثال: من بريد وارد إلى تنبيه جاهز للمتابعة</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'New email' : '…',
              step >= 2 ? 'AI reads' : '…',
              step >= 3 ? 'Classifies' : '…',
              step >= 4 ? 'Extracts' : '…',
              step >= 5 ? 'Summary' : '…',
              step >= 6 ? 'Notify' : '…',
            ]}
          />
          <Reveal show={step >= 6}>
            <p className="muted">
              منصات مثل Zapier و Make و Copilot تساعد على ربط هذه الخطوات مع بقاء المراجعة عند الحاجة.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
]
