import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import {
  Compare,
  Kicker,
  Quote,
  Subtitle,
  Title,
} from '../../components/ui'

export const ch06Slides: SlideDef[] = [
  {
    id: '06-divider',
    chapter: 'التواصل مع الأدوات',
    chapterId: '06',
    theme: 'dark',
    notes: notes({
      say: 'المهارة المشتركة بين الأدوات: وضوح التعليمات والسياق.',
      explain: 'جودة الطلب تغيّر جودة الناتج أكثر مما يُظن.',
      example: 'نفس الأداة تعطي مسودتين مختلفتين حسب دقة التوجيه.',
      question: 'هل حصلتم من قبل على رد عام جداً لأن الطلب كان عاماً؟',
      interaction: 'انتقل مباشرة للمقارنة.',
      time: '40 ثانية',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">06</p>
        <Title>كيف نوجّه أدوات الذكاء الاصطناعي بوضوح مهني؟</Title>
        <Subtitle>
          مهما اختلفت المنصة، تبقى جودة النتيجة مرتبطة بوضوح المهمة والسياق والشكل المطلوب للخرج.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '06-common-skill',
    chapter: 'التواصل مع الأدوات',
    chapterId: '06',
    theme: 'mint',
    notes: notes({
      say: 'قدّم الـ Prompt كمفهوم عملي لا كموضة تقنية.',
      explain: 'هو تكليف مكتوب: دور، سياق، مهمة، قيود، شكل الناتج.',
      example: 'مثل تكليف موظف جديد بمهمة: كلما أوضحتم أكثر قلّ سوء الفهم.',
      question: 'هل تكتفون عادة بجملة قصيرة عند الطلب من الأداة؟',
      interaction: 'كثيرون يفعلون ذلك — وسنحسّنه.',
      time: '1.5 دقيقة',
    }),
    content: () => (
      <>
        <Kicker>مهارة مشتركة</Kicker>
        <Title>
          التعليمات التي تكتبونها للأداة — <span className="en">Prompt</span> — تحدد مستوى الفائدة
        </Title>
        <div className="slide-body">
          <Quote>
            الـ Prompt ليس سؤالاً سحرياً. هو توجيه مهني يوضح للأداة: من تخاطب، في أي سياق، ماذا
            تطلب بالضبط، وبأي شكل تريد النتيجة.
          </Quote>
        </div>
      </>
    ),
  },
  {
    id: '06-bad-vs-good',
    chapter: 'التواصل مع الأدوات',
    chapterId: '06',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'اقرأ المثالين وقارن عناصر الوضوح.',
      explain: 'المستلم، السبب، النبرة، والخطوة التالية تصنع الفرق.',
      example: 'تأخير تقرير مع اقتراح موعد جديد.',
      question: 'أي الصياغتين تثقون أنها أقرب لما تريد الإدارة إرساله؟',
      interaction: 'إجماع متوقع على الثانية.',
      time: '2 دقائق',
    }),
    content: ({ step }) => (
      <>
        <Kicker>نفس المهمة، مستويان من الوضوح</Kicker>
        <Title>كيف يبدو الطلب الضعيف مقابل الطلب المهني؟</Title>
        <div className="slide-body">
          <Compare
            badLabel="طلب غير كافٍ"
            goodLabel="طلب واضح"
            bad={<div className="prompt-box">اكتب لي إيميلاً.</div>}
            good={
              <div className="prompt-box">
                اكتب إيميلاً مهنياً قصيراً إلى مدير المشروع لإبلاغه بتأخر تسليم التقرير يومين،
                بنبرة محترمة ومباشرة، مع اقتراح موعد جديد للتسليم وسبب مختصر لا يُحمّل العميل عبئاً
                زائداً.
              </div>
            }
          />
          <Reveal show={step >= 2}>
            <p className="muted">الفرق ليس في الأداة نفسها، بل في اكتمال التوجيه الذي أعطيتموه لها.</p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '06-why-clarity',
    chapter: 'التواصل مع الأدوات',
    chapterId: '06',
    theme: 'navy',
    notes: notes({
      say: 'لخّص القاعدة: الأداة لا تقرأ النوايا.',
      explain: 'تعمل على المعلومات المعطاة والافتراضات الإحصائية.',
      example: 'بدون تحديد الجمهور قد تكتب بأسلوب غير مناسب.',
      question: 'ما التفصيل الذي تنسونه غالباً في الطلب الأول؟',
      interaction: 'النبرة، الطول، الجمهور، أو شكل الجدول.',
      time: '1 دقيقة',
    }),
    content: () => (
      <>
        <Kicker>قاعدة عملية</Kicker>
        <Title wide>كلّما كان التكليف أوضح وأكثر اكتمالاً، اقترب الناتج مما تحتاجونه فعلاً</Title>
        <div className="slide-body">
          <Quote>
            الأداة مساعدة قوية على المسودة والتنظيم، لكنها لا تعوّض عن تحديد الهدف المهني من طرفكم.
          </Quote>
        </div>
      </>
    ),
  },
]
