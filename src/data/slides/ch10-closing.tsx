import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import {
  Card,
  Flow,
  Kicker,
  Quote,
  Subtitle,
  Title,
} from '../../components/ui'

export const ch10Slides: SlideDef[] = [
  {
    id: '10-divider',
    chapter: 'تطبيق على حالاتكم',
    chapterId: '10',
    theme: 'dark',
    notes: notes({
      say: 'هذا أهم جزء تطبيقي: افتح المجال لحالاتهم الفعلية.',
      explain: 'هم يقترحون المهمة، وأنتم توجّهون التنفيذ معاً على الأداة المناسبة.',
      example: 'إيميل عميل، تلخيص تقرير، هيكل عرض، تحليل ملف غير حسّاس.',
      question: 'من لديه حالة عمل جاهزة نبدأ بها الآن؟',
      interaction: 'اختر حالتين أو ثلاثاً حسب الوقت.',
      time: '1 دقيقة',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">10</p>
        <Title>تطبيق مباشر على حالات من عملكم</Title>
        <Subtitle>
          أنتم تقترحون المهمة والسياق، ونحن نبني التوجيه معاً، ننفّذه على الأداة المناسبة، ثم نراجع
          الناتج كفريق عمل — لا كتمرين نظري منفصل عن واقعكم.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '10-how-it-works',
    chapter: 'تطبيق على حالاتكم',
    chapterId: '10',
    theme: 'light',
    steps: 4,
    notes: notes({
      say: 'اشرح قواعد الجلسة التطبيقية قبل استقبال الحالات.',
      explain: 'لا ملفات حسّاسة، وضوح الهدف، مراجعة جماعية للناتج.',
      example: 'إن وُجدت بيانات سرية نستبدلها بعيّنة أو نُعمّي التفاصيل.',
      question: 'هل الحالات المقترحة قابلة للعرض الجماعي؟',
      interaction: 'فلتر بسرعة ما يناسب الغرفة.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>كيف سنعمل في هذا الجزء؟</Kicker>
        <Title>أربع قواعد بسيطة للتطبيق الجماعي</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Reveal show={step >= 1}>
              <Card>
                <h3>1) أنتم تحددون الحالة</h3>
                <p>مهمة حقيقية من عملكم: مراسلة، تقرير، تلخيص، عرض، تحليل…</p>
              </Card>
            </Reveal>
            <Reveal show={step >= 2}>
              <Card>
                <h3>2) نبني التوجيه معاً</h3>
                <p>نوضح الهدف والجمهور والقيود وشكل الناتج قبل التنفيذ.</p>
              </Card>
            </Reveal>
            <Reveal show={step >= 3}>
              <Card>
                <h3>3) ننفّذ على الأداة المناسبة</h3>
                <p>نختار فئة الأداة حسب المهمة، لا حسب شهرة الاسم فقط.</p>
              </Card>
            </Reveal>
            <Reveal show={step >= 4}>
              <Card>
                <h3>4) نراجع الناتج مهنياً</h3>
                <p>ماذا يصلح؟ ماذا يجب تعديله؟ وما الذي لا يمكن الاعتماد عليه دون تحقق؟</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-collect-cases',
    chapter: 'تطبيق على حالاتكم',
    chapterId: '10',
    theme: 'mint',
    notes: notes({
      say: 'اجمع الحالات على اللوح أو شفهياً ثم رتّبها حسب الأثر والوقت.',
      explain: 'ابدأ بحالة واضحة وقصيرة لنجاح سريع ثم حالة أعمق.',
      example: 'إيميل قصير أولاً، ثم تلخيص تقرير.',
      question: 'ما المهمة التي إن حسّنّاها اليوم ستوفر وقتاً واضحاً هذا الأسبوع؟',
      interaction: 'سجّل 3 إلى 5 حالات ثم اختر.',
      time: '5–8 دقائق',
    }),
    content: () => (
      <>
        <Kicker>جمع الحالات</Kicker>
        <Title wide>ما المهام التي تريدون معالجتها الآن بمساعدة الذكاء الاصطناعي؟</Title>
        <Subtitle>
          اقترحوا حالات من عملكم مباشرة. كلّما كانت الحالة محددة — الهدف، الجمهور، والزمن المتاح —
          كان التطبيق أوضح وأفيد.
        </Subtitle>
        <div className="slide-body">
          <div className="grid-2">
            {[
              ['مثال', 'إعادة صياغة رسالة لعميل حول تعديل موعد'],
              ['مثال', 'تلخيص تقرير ميداني لإدارة المشروع'],
              ['مثال', 'تحويل ملاحظات اجتماع إلى مهام متابعة'],
              ['مثال', 'اقتراح هيكل عرض لزيارة أو مشروع'],
            ].map(([k, v]) => (
              <Card key={v}>
                <h3>{k}</h3>
                <p>{v}</p>
              </Card>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-live-canvas',
    chapter: 'تطبيق على حالاتكم',
    chapterId: '10',
    theme: 'navy',
    notes: notes({
      say: 'هذه شريحة عمل حية. ابقَ عليها أثناء التنفيذ الفعلي على الأداة.',
      explain: 'املأ العناصر شفهياً أو على اللوح لكل حالة.',
      example: 'الحالة / الأداة / التوجيه / نتيجة المراجعة.',
      question: 'هل الناتج جاهز للاستخدام أم يحتاج جولة تحسين؟',
      interaction: 'كرّر الدورة على حالتين أو أكثر.',
      time: '15–40 دقيقة حسب الوقت',
    }),
    content: () => (
      <>
        <Kicker>لوحة التنفيذ الحي</Kicker>
        <Title>لكل حالة نمرّ على هذه العناصر قبل اعتماد النتيجة</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>الحالة</h3>
              <p>ما المهمة؟ لمن الناتج؟ وما القرار أو الإرسال المتوقع بعده؟</p>
            </Card>
            <Card>
              <h3>الأداة / الفئة</h3>
              <p>نص، مستندات، صور، تفريغ، أتمتة… ولماذا هذه الفئة؟</p>
            </Card>
            <Card>
              <h3>التوجيه</h3>
              <p>الدور، السياق، المهمة، القيود، وشكل المخرج.</p>
            </Card>
            <Card>
              <h3>المراجعة</h3>
              <p>الصحة، النبرة، الاكتمال، وما يجب أن يضيفه المسؤول البشري قبل الاعتماد.</p>
            </Card>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-guardrails',
    chapter: 'تطبيق على حالاتكم',
    chapterId: '10',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'ذكّر بالحدود أثناء التطبيق الحي دون تعطيل الحماس.',
      explain: 'هلوسة، أخطاء واثقة، وبيانات حسّاسة.',
      example: 'لا نضع عقوداً أو بيانات زبائن في أداة غير معتمدة.',
      question: 'ما المعلومات الممنوعة من المشاركة في هذه الجلسة؟',
      interaction: 'أكد الاتفاق قبل متابعة الحالات الحساسة.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>ضوابط أثناء التطبيق</Kicker>
        <Title>نستخدم الأداة بجدية… مع حدود مهنية واضحة</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>ما يمكن أن تقدّمه بسرعة</h3>
              <ul className="check-list">
                <li>تسريع المسودات</li>
                <li>تنظيم الأفكار والملاحظات</li>
                <li>تلخيص وتحليل أولي</li>
                <li>اقتراح صياغات وهياكل</li>
              </ul>
            </Card>
            <Reveal show={step >= 2}>
              <Card>
                <h3>ما يجب أن تبقوا حذرين منه</h3>
                <ul className="x-list">
                  <li>معلومات غير دقيقة تُعرض بثقة</li>
                  <li>سوء فهم للسياق المحلي أو الداخلي</li>
                  <li>تحيّز أو افتراضات غير مناسبة</li>
                  <li>إرسال بيانات حسّاسة دون ضوابط</li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-framework',
    chapter: 'تطبيق على حالاتكم',
    chapterId: '10',
    theme: 'mint',
    steps: 5,
    notes: notes({
      say: 'ثبّت إطار العمل الذي يريدون أخذه للمكتب غداً.',
      explain: 'ASK CHECK REFINE USE PROTECT',
      example: 'بعد كل حالة طبقوا CHECK و REFINE علناً.',
      question: 'أي خطوة تحتاجون تثبيتاً داخلياً كسياسة فريق؟',
      interaction: 'غالباً حماية البيانات والمراجعة.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>إطار الاستخدام بعد اليوم</Kicker>
        <Title>خمس خطوات تصلح كعادة عمل داخل الفريق</Title>
        <div className="slide-body">
          <div className="grid-3">
            {[
              ['ASK', 'وجّه بوضوح', 1],
              ['CHECK', 'راجع الناتج', 2],
              ['REFINE', 'حسّن الطلب', 3],
              ['USE', 'اعتمد المفيد', 4],
              ['PROTECT', 'احمِ البيانات', 5],
            ].map(([en, ar, n]) => (
              <Reveal key={en as string} show={step >= (n as number)}>
                <Card>
                  <h3 className="en">{en as string}</h3>
                  <p>{ar as string}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-loop',
    chapter: 'تطبيق على حالاتكم',
    chapterId: '10',
    theme: 'dark',
    steps: 5,
    notes: notes({
      say: 'أكد أن جولة أو جولتين تحسين أفضل من طلب واحد غامض.',
      explain: 'هذا ما يجب أن يحدث أثناء التطبيق الحي أيضاً.',
      example: 'مسودة 1 → ملاحظات الفريق → مسودة 2.',
      question: 'هل نعيد تحسين الحالة الحالية قبل الانتقال للتالية؟',
      interaction: 'نفّذ جولة تحسين علنية.',
      time: '1 دقيقة',
    }),
    content: ({ step }) => (
      <>
        <Kicker>حلقة العمل الموصى بها</Kicker>
        <Title>من التوجيه إلى النتيجة المعتمدة</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'PROMPT' : '…',
              step >= 2 ? 'AI' : '…',
              step >= 3 ? 'CHECK' : '…',
              step >= 4 ? 'REFINE' : '…',
              step >= 5 ? 'FINAL' : '…',
            ]}
            accentIndex={2}
          />
        </div>
      </>
    ),
  },
  {
    id: '10-commitment',
    chapter: 'تطبيق على حالاتكم',
    chapterId: '10',
    theme: 'light',
    notes: notes({
      say: 'اطلب التزاماً عملياً بمهمة واحدة بعد الجلسة.',
      explain: 'الالتزام الصغير يزيد احتمال الاستمرار.',
      example: 'تلخيص اجتماع الغد بنفس الإطار.',
      question: 'ما أول مهمة ستطبّقون عليها هذا الأسلوب في أيامكم القادمة؟',
      interaction: 'مشاركة تطوعية مختصرة.',
      time: '3 دقائق',
    }),
    content: () => (
      <>
        <Kicker>بعد هذه الجلسة</Kicker>
        <Title wide>ما المهمة العملية التي ستأخذونها إلى مكاتبكم مباشرة؟</Title>
        <div className="slide-body">
          <Quote>
            الأفضل أن تخرج كل مشاركة أو مشارك بمهمة واحدة واضحة، وأداة مناسبة، وطريقة مراجعة محددة —
            لا بانطباع عام فقط.
          </Quote>
        </div>
      </>
    ),
  },
  {
    id: '10-thanks',
    chapter: 'تطبيق على حالاتكم',
    chapterId: '10',
    theme: 'dark',
    notes: notes({
      say: 'اختم بشكر مهني وافتح باب الأسئلة والمتابعة.',
      explain: 'ذكّر أن الهدف استخدام واعٍ لا خبرة هندسية.',
      example: 'يمكن اقتراح قناة داخلية لتبادل التوجيهات الناجحة.',
      question: 'هل بقيت أسئلة قبل الإغلاق؟',
      interaction: 'Q&A حسب الوقت.',
      time: '2 دقائق + أسئلة',
    }),
    content: () => (
      <div className="slide-body" style={{ justifyContent: 'space-between' }}>
        <div>
          <Kicker>
            <span className="en">Envirostep SARL</span>
          </Kicker>
          <Title wide>نطبّق على حالاتكم — ثم تعتمدون ما ينفع عملكم</Title>
          <Subtitle>
            الهدف ليس أن تصبحوا خبراء في بناء الذكاء الاصطناعي، بل أن تعرفوا كيف تستخدمونه بوعي
            وانضباط مهني.
          </Subtitle>
        </div>
        <div className="row">
          <Card>
            <h3>للتذكير</h3>
            <p>ASK · CHECK · REFINE · USE · PROTECT</p>
          </Card>
          <Card>
            <h3>الخطوة التالية</h3>
            <p>مهمة حقيقية واحدة هذا الأسبوع بنفس الأسلوب</p>
          </Card>
        </div>
      </div>
    ),
  },
]
