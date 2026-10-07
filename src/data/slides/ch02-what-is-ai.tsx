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

const branches = [
  'Machine Learning',
  'Deep Learning',
  'Generative AI',
  'Computer Vision',
  'Natural Language Processing',
  'Robotics',
  'Speech / Audio',
  'Recommendation Systems',
  'AI Agents',
  'Automation',
]

export const ch02Slides: SlideDef[] = [
  {
    id: '02-divider',
    chapter: 'ما هو الذكاء الاصطناعي؟',
    chapterId: '02',
    theme: 'dark',
    notes: notes({
      say: 'انتقل بهدوء: نبدأ بتوضيح أن AI أوسع من أداة دردشة واحدة.',
      explain: 'هذا يمنع اختزال المجال في ChatGPT فقط.',
      example: 'التوصيات في التطبيقات أو التعرف على الوجه مجالات أخرى من AI.',
      question: 'عندما تقولون ذكاء اصطناعي، ما أول شيء يخطر ببالكم؟',
      interaction: 'خذ إجابتين دون تصحيح فوري.',
      time: '45 ثانية',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">02</p>
        <Title>ما المقصود بالذكاء الاصطناعي في العمل؟</Title>
        <Subtitle>
          ليس برنامجاً واحداً، بل مجال واسع من التقنيات التي تساعد الأنظمة على أداء مهام
          كانت تحتاج عادة إلى جهد بشري تحليلي أو لغوي أو بصري.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '02-not-one-tool',
    chapter: 'ما هو الذكاء الاصطناعي؟',
    chapterId: '02',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'اعرض الفروع كخريطة للمجال، دون شرح كل فرع بالتفصيل.',
      explain: 'المهم الإحساس بالاتساع ثم التركيز لاحقاً على الأدوات القابلة للاستخدام.',
      example: 'Computer Vision يتعامل مع الصور؛ NLP مع اللغة.',
      question: 'هل كنتم تعتبرون أن الذكاء الاصطناعي يقتصر على الدردشة النصية؟',
      interaction: 'أشر إلى الفروع ذات الصلة بعملهم إن ذكروا أمثلة.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>فكرة أساسية</Kicker>
        <Title wide>الذكاء الاصطناعي ليس أداة واحدة، بل منظومة مجالات وتقنيات</Title>
        <Subtitle>
          داخل هذا المجال توجد تخصصات متعددة. ما نستخدمه يومياً في المكتب غالباً جزء منها فقط،
          خاصة الأدوات التوليدية وأدوات الإنتاجية.
        </Subtitle>
        <div className="slide-body">
          <div className="ecosystem">
            <Reveal show={step >= 1}>
              <div className="eco-core en">AI</div>
            </Reveal>
            <Reveal show={step >= 2}>
              <div className="eco-branches">
                {branches.map((b) => (
                  <span key={b} className="eco-branch en">
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '02-wide-field',
    chapter: 'ما هو الذكاء الاصطناعي؟',
    chapterId: '02',
    theme: 'light',
    notes: notes({
      say: 'هدّئ أي قلق من كثرة المصطلحات: لن ندرس كل الفروع.',
      explain: 'الوعي بالاتساع يكفي؛ التخصص التفصيلي ليس هدف الجلسة.',
      example: 'مثل قول "الإدارة": مالية، موارد بشرية، عمليات… ونحن نركز على ما يمس عملكم.',
      question: 'هل يكفيكم فهم الإطار العام قبل الدخول في الأدوات؟',
      interaction: 'انتقل مباشرة إلى التركيز العملي.',
      time: '1 دقيقة',
    }),
    content: () => (
      <>
        <Kicker>ما الذي يهمّنا هنا؟</Kicker>
        <Title wide>المجال واسع، لكن جلستنا تركز على الجزء القابل للاستخدام فوراً</Title>
        <div className="slide-body">
          <Card>
            <p>
              هناك عشرات التقنيات والنظريات داخل الذكاء الاصطناعي. لسنا بحاجة إلى دراسة كل
              ذلك لاتخاذ قرارات جيدة كمستخدمين مهنيين. يكفي فهم المبادئ التي تمنع سوء الفهم،
              وتحسّن طريقة الطلب من الأدوات، وتوضح حدودها.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '02-tools-focus',
    chapter: 'ما هو الذكاء الاصطناعي؟',
    chapterId: '02',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'حوّل الانتباه إلى AI Tools كمحور الجلسة.',
      explain: 'Generative AI وأدوات المكتب هما الأقرب لاستخدام الإدارة والفرق.',
      example: 'كتابة مسودة تقرير أو تلخيص اجتماع عبر أداة جاهزة.',
      question: 'هل تهمّكم أدوات جاهزة أكثر من بناء نماذج داخل الشركة الآن؟',
      interaction: 'غالباً نعم في هذه المرحلة.',
      time: '1 دقيقة',
    }),
    content: ({ step }) => (
      <>
        <Kicker>تركيز هذه الجلسة</Kicker>
        <Title>نهتم أساساً بالأدوات التي يمكن إدخالها في العمل اليوم</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <div className="eco-branches">
              {branches.map((b) => (
                <span key={b} className="eco-branch en">
                  {b}
                </span>
              ))}
              <span className="eco-branch highlight en">AI Tools — محورنا العملي</span>
            </div>
          </Reveal>
          <Reveal show={step >= 2}>
            <Pill>من فهم المجال ← إلى اختيار الأداة المناسبة للمهمة</Pill>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '02-theory-to-tools',
    chapter: 'ما هو الذكاء الاصطناعي؟',
    chapterId: '02',
    theme: 'dark',
    steps: 6,
    notes: notes({
      say: 'اشرح أن خلف كل تطبيق طبقات تقنية، والأداة هي الطبقة الظاهرة لكم.',
      explain: 'هذا يفسّر اختلاف الجودة والتكلفة بين المنتجات.',
      example: 'ChatGPT تطبيق/منصة فوق نماذج وبنية تحتية وتشغيل.',
      question: 'هل يتضح أن الأداة التي تفتحونها ليست كل القصة التقنية؟',
      interaction: 'اكشف الطبقات تدريجياً.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>من الخلفية التقنية إلى ما يظهر لكم</Kicker>
        <Title>خلف كل أداة جاهزة توجد طبقات متعددة</Title>
        <Subtitle>
          لا نحتاج لإتقان كل طبقة، لكن معرفة هذا الترتيب تساعد على فهم حدود الأداة وإمكاناتها.
        </Subtitle>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'Theory' : '…',
              step >= 2 ? 'Algorithms' : '…',
              step >= 3 ? 'Models' : '…',
              step >= 4 ? 'AI Systems' : '…',
              step >= 5 ? 'Applications' : '…',
              step >= 6 ? 'Tools' : '…',
            ]}
            accentIndex={step >= 6 ? 5 : undefined}
          />
          <Reveal show={step >= 6}>
            <p className="muted">
              ما تستخدمونه يومياً هو غالباً الطبقة الأخيرة: واجهة جاهزة فوق نموذج أو عدة نماذج.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '02-what-we-study',
    chapter: 'ما هو الذكاء الاصطناعي؟',
    chapterId: '02',
    theme: 'light',
    notes: notes({
      say: 'حدّد نطاق الجلسة بوضوح مهني.',
      explain: 'المبادئ المختارة تخدم الاستخدام الأفضل لا بناء النماذج.',
      example: 'سنغطي Tokens و Prompts و RAG باختصار وظيفي.',
      question: 'هل هناك موضوع تقني معيّن تريدون التعمق فيه لاحقاً؟',
      interaction: 'سجّل الطلب لوقت الأسئلة أو جلسة لاحقة.',
      time: '1 دقيقة',
    }),
    content: () => (
      <>
        <Kicker>حدود واضحة</Kicker>
        <Title wide>لن ندخل في كل نظريات الذكاء الاصطناعي — وسنركز على ما يغيّر جودة استخدامكم</Title>
        <div className="slide-body">
          <Card>
            <p>
              الهدف ليس تحويل المشاركين إلى مهندسي ذكاء اصطناعي. الهدف أن تفهموا المبادئ التي
              تساعدكم على توجيه الأدوات بشكل أفضل، وتقييم نتائجها، وتجنب أخطاء شائعة في بيئة
              العمل.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '02-familiar-tools',
    chapter: 'ما هو الذكاء الاصطناعي؟',
    chapterId: '02',
    theme: 'navy',
    notes: notes({
      say: 'اعرض أسماء مألوفة لخفض الحاجز، مع التأكيد أنها منصات فوق تقنيات.',
      explain: 'الأسماء تختلف؛ فكرة الاستخدام متشابهة نسبياً.',
      example: 'Copilot قد يكون الأقرب لبيئة Microsoft في الشركات.',
      question: 'أي من هذه المنصات متاحة أو معتمدة لديكم تنظيمياً؟',
      interaction: 'مهم لجزء الخصوصية لاحقاً.',
      time: '1.5 دقيقة',
    }),
    content: () => (
      <>
        <Kicker>أمثلة معروفة في السوق</Kicker>
        <Title>منصات جاهزة تعتمد على نماذج ذكاء اصطناعي من الخلف</Title>
        <Subtitle>
          تختلف الواجهات والاشتراكات وضوابط المؤسسات، لكن المبدأ متقارب: تعطون تعليمات وسياقاً،
          وتحصلون على مسودة أو تحليل يحتاج مراجعة.
        </Subtitle>
        <div className="slide-body">
          <div className="grid-3">
            {[
              ['ChatGPT', 'منصة محادثة وإنتاج محتوى من OpenAI'],
              ['Gemini', 'منصة Google، مفيدة غالباً مع بيئة Google'],
              ['Claude', 'منصة Anthropic، شائعة في التحليل والنصوص الطويلة'],
              ['Copilot', 'دمج AI داخل منتجات Microsoft'],
              ['Midjourney', 'توليد صور من وصف نصي'],
              ['Perplexity', 'بحث وإجابات مع ارتباط أوضح بالمصادر أحياناً'],
            ].map(([t, d]) => (
              <Card key={t}>
                <h3 className="en">{t}</h3>
                <p>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </>
    ),
  },
]
