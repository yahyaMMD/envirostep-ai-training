import type { ChapterMeta } from '../types'

export const CHAPTERS: ChapterMeta[] = [
  { id: '01', num: '01', title: 'افتتاح الجلسة' },
  { id: '02', num: '02', title: 'ما هو الذكاء الاصطناعي؟' },
  { id: '03', num: '03', title: 'كيف يعمل عملياً؟' },
  { id: '04', num: '04', title: 'النماذج والأنظمة' },
  { id: '05', num: '05', title: 'أنواع الأدوات' },
  { id: '06', num: '06', title: 'التواصل مع الأدوات' },
  { id: '07', num: '07', title: 'كتابة التعليمات' },
  { id: '08', num: '08', title: 'الاستخدام في العمل' },
  { id: '09', num: '09', title: 'تمارين موجّهة' },
  { id: '10', num: '10', title: 'تطبيق على حالاتكم' },
]

export function notes(
  partial: Partial<import('../types').SpeakerNotes> &
    Pick<import('../types').SpeakerNotes, 'say'>,
): import('../types').SpeakerNotes {
  return {
    say: partial.say,
    explain: partial.explain ?? '',
    example: partial.example ?? '',
    question: partial.question ?? 'هل تريدون توضيحاً إضافياً قبل المتابعة؟',
    interaction: partial.interaction ?? 'افتح نقاشاً قصيراً مع مثال من عملهم.',
    time: partial.time ?? '1–2 دقيقة',
  }
}
