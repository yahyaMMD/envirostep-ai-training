import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import {
  Card,
  Flow,
  Kicker,
  Pill,
  Subtitle,
  Title,
} from '../../components/ui'

export const ch09Slides: SlideDef[] = [
  {
    id: '09-divider',
    chapter: 'تمارين موجّهة',
    chapterId: '09',
    theme: 'dark',
    notes: notes({
      say: 'تمارين قصيرة قبل فتح المجال لحالاتهم الكاملة.',
      explain: 'الهدف تثبيت أسلوب التحسين قبل التطبيق الحر.',
      example: 'سنحسّن طلباً ضعيفاً ثم نمرّ على سيناريوهات مكتبية.',
      question: 'هل تفضّلون العمل فردياً أم ثنائياً؟',
      interaction: 'اختر ما يناسب حجم المجموعة.',
      time: '1 دقيقة',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">09</p>
        <Title>تمارين موجّهة ل تثبيت أسلوب العمل الصحيح</Title>
        <Subtitle>
          نبدأ بتمارين مشتركة قصيرة، ثم ننتقل إلى تطبيق مباشر على حالات تقترحونها من عملكم.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '09-method',
    chapter: 'تمارين موجّهة',
    chapterId: '09',
    theme: 'mint',
    steps: 5,
    notes: notes({
      say: 'اشرح إيقاع التمرين قبل البدء.',
      explain: 'لا ننتقل للتشغيل قبل تحسين التوجيه.',
      example: 'اقتراح → نقاش → تحسين → تنفيذ → تقييم.',
      question: 'هل الإيقاع واضح؟',
      interaction: 'تأكيد سريع ثم ابدأ.',
      time: '1 دقيقة',
    }),
    content: ({ step }) => (
      <>
        <Kicker>طريقة العمل في التمارين</Kicker>
        <Title>خمس خطوات نكررها في كل تمرين</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'اقتراح' : '…',
              step >= 2 ? 'نقاش' : '…',
              step >= 3 ? 'تحسين' : '…',
              step >= 4 ? 'تنفيذ' : '…',
              step >= 5 ? 'تقييم' : '…',
            ]}
          />
        </div>
      </>
    ),
  },
  {
    id: '09-ex1-weak',
    chapter: 'تمارين موجّهة',
    chapterId: '09',
    theme: 'light',
    notes: notes({
      say: 'لا تكشف الحل فوراً. اطلب تشخيص النقص.',
      explain: 'ينقص السياق والهدف والشكل والقيود.',
      example: 'تقرير عن أي مشروع؟ ولمن؟ وبأي مخرج؟',
      question: 'ما الذي ينقص هذا الطلب حتى يصبح قابلاً للتنفيذ الجيد؟',
      interaction: 'دقيقتان نقاش ثم مشاركة.',
      time: '4 دقائق',
    }),
    content: () => (
      <>
        <Kicker>تمرين 1 — تحسين التوجيه</Kicker>
        <Title>ما الذي يجعل هذا الطلب غير كافٍ لمهمة مهنية؟</Title>
        <div className="slide-body">
          <div className="prompt-box" style={{ fontSize: '1.35rem' }}>
            اكتب لي تقريراً عن المشروع.
          </div>
          <Card>
            <p>
              ناقشوا بسرعة: من الجمهور؟ ما مرحلة المشروع؟ ما القرارات المتوقعة من التقرير؟ وبأي شكل
              تريدون الناتج؟
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '09-ex1-improve',
    chapter: 'تمارين موجّهة',
    chapterId: '09',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'ابنوا الصيغة النهائية بمساهمات المشاركين.',
      explain: 'اكتب على اللوح إن أمكن.',
      example: 'دور + مشروع + جمهور + نقاط + مخاطر + جدول.',
      question: 'من يقترح جملة السياق؟',
      interaction: 'ركّب النص جماعياً ثم نفّذوه إن توفر وقت.',
      time: '5 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>نبني الصيغة معاً</Kicker>
        <Title>العناصر التي كانت ناقصة — ثم الصيغة المحسّنة</Title>
        <div className="slide-body">
          <div className="tag-list">
            {['Context', 'Role', 'Objective', 'Format', 'Constraints'].map((t) => (
              <span key={t} className="pill en">
                {t}
              </span>
            ))}
          </div>
          <Reveal show={step >= 2}>
            <div className="prompt-box">
              أنت مساعد متخصص في التقارير المهنية. المشروع: [الاسم/المرحلة]. الجمهور: إدارة
              المشروع. لخّص الوضع في 5 نقاط، اذكر المخاطر الرئيسية، واقترح 3 خطوات تالية. لغة عربية
              واضحة، والناتج في جدول جاهز للنقل إلى العرض.
            </div>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '09-ex2-email',
    chapter: 'تمارين موجّهة',
    chapterId: '09',
    theme: 'mint',
    notes: notes({
      say: 'سيناريو تغيير موعد مع عميل.',
      explain: 'اطلب صياغة التوجيه ثم مقارنة النتائج إن نفّذتم.',
      example: 'نبرة مطمئنة + سبب مختصر + موعد جديد.',
      question: 'ما الذي يجب تجنّبه في رسالة من هذا النوع؟',
      interaction: 'اللوم الزائد أو التفاصيل الداخلية غير اللازمة.',
      time: '5 دقائق',
    }),
    content: () => (
      <>
        <Kicker>تمرين 2 — مراسلة مهنية</Kicker>
        <Title wide>إعداد توجيه واضح لإعلام عميل بتغيير موعد التسليم</Title>
        <div className="slide-body">
          <Card>
            <p>
              السيناريو: التسليم كان يوم الخميس وأصبح يوم الأحد بسبب مراجعة جودة إضافية. اكتبوا
              توجيهاً للأداة يُنتج إيميلاً مناسباً من حيث النبرة والطول والاطمئنان المهني.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '09-ex3-doc',
    chapter: 'تمارين موجّهة',
    chapterId: '09',
    theme: 'light',
    notes: notes({
      say: 'استخدم مستنداً غير حسّاس إن توفر.',
      explain: 'نفس الملف بعدة طلبات متسلسلة.',
      example: 'تلخيص ثم مهام ثم مخاطر ثم جدول ثم خطوات.',
      question: 'ما الخطوة التي لا يمكن تفويضها بالكامل للأداة؟',
      interaction: 'التحقق واعتماد القرار.',
      time: '6 دقائق',
    }),
    content: () => (
      <>
        <Kicker>تمرين 3 — تحليل مستند</Kicker>
        <Title>نفس الوثيقة يمكن أن تُخدم بعدة طلبات متدرجة</Title>
        <div className="slide-body">
          <div className="grid-2">
            {[
              '1) تلخيص تنفيذي',
              '2) استخراج مهام المتابعة',
              '3) رصد المخاطر',
              '4) تنظيم الناتج في جدول',
              '5) اقتراح الخطوات التالية',
            ].map((x) => (
              <Card key={x}>
                <h3>{x}</h3>
              </Card>
            ))}
          </div>
          <Pill>يُفضّل استخدام نص عيّنة غير حسّاس أثناء العرض الجماعي</Pill>
        </div>
      </>
    ),
  },
  {
    id: '09-ex4-image',
    chapter: 'تمارين موجّهة',
    chapterId: '09',
    theme: 'navy',
    notes: notes({
      say: 'ابنوا وصفاً بصرياً لعروض الشركة إن كان مناسباً للمجموعة.',
      explain: 'طبّق عناصر SUBJECT… FORMAT.',
      example: 'غلاف عرض مهني بدون نصوص داخل الصورة.',
      question: 'ما الطابع البصري المناسب لتواصلكم المؤسسي؟',
      interaction: 'كلمات مثل: واضح، ميداني، احترافي، هادئ.',
      time: '4 دقائق',
    }),
    content: () => (
      <>
        <Kicker>تمرين 4 — وصف بصري</Kicker>
        <Title>إعداد توجيه لصورة مهنية تصلح لغلاف عرض أو تواصل داخلي</Title>
        <div className="slide-body">
          <Card>
            <p>
              حددوا معاً: الموضوع، المكان، الأسلوب، الإضاءة، ونسبة الأبعاد. تجنّبوا إدخال شعارات أو
              نصوص غير لازمة داخل الصورة إن لم تكن مقصودة.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '09-ex5-automation',
    chapter: 'تمارين موجّهة',
    chapterId: '09',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'اسأل عن عملية متكررة ثم ارسم سلسلة مبسّطة.',
      explain: 'ليس ضرورياً تنفيذ أتمتة كاملة اليوم.',
      example: 'طلبات واردة → تصنيف → ملخص يومي.',
      question: 'أي جزء من العملية يصلح للمساعدة الآلية وأي جزء يبقى بشرياً؟',
      interaction: 'ثبّت مبدأ المراجعة البشرية.',
      time: '5 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>تمرين 5 — تصور مسار عمل</Kicker>
        <Title>هل يمكن أن تتولى الأداة جزءاً من مهمة متكررة لديكم؟</Title>
        <div className="slide-body">
          <Card>
            <p>حددوا مهمة تتكرر أسبوعياً، ثم اقترحوا أين تدخل المساعدة الآلية وأين يبقى الاعتماد على الخبرة.</p>
          </Card>
          <Reveal show={step >= 2}>
            <Flow
              nodes={['Input', 'AI assists', 'Human checks', 'Action', 'Done']}
              accentIndex={2}
            />
            <p className="muted">المساعدة الآلية جزء من السلسلة، وليست بديلاً عن القرار النهائي.</p>
          </Reveal>
        </div>
      </>
    ),
  },
]
