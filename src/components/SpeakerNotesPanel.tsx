import type { SpeakerNotes } from '../types'

export function SpeakerNotesPanel({
  notes,
  slideTitle,
  onClose,
}: {
  notes: SpeakerNotes
  slideTitle: string
  onClose: () => void
}) {
  return (
    <aside className="notes-panel" dir="rtl">
      <div className="row" style={{ justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <h4>ملاحظات المدرّب · {slideTitle}</h4>
        <button type="button" className="nav-btn" onClick={onClose}>
          إغلاق
        </button>
      </div>
      <section>
        <strong>ماذا تقول</strong>
        <p>{notes.say}</p>
      </section>
      <section>
        <strong>شرح مبسّط</strong>
        <p>{notes.explain}</p>
      </section>
      <section>
        <strong>مثال شفهي</strong>
        <p>{notes.example}</p>
      </section>
      <section>
        <strong>سؤال للجمهور</strong>
        <p>{notes.question}</p>
      </section>
      <section>
        <strong>تفاعل مقترح</strong>
        <p>{notes.interaction}</p>
      </section>
      <section>
        <strong>الوقت التقريبي</strong>
        <p>{notes.time}</p>
      </section>
    </aside>
  )
}
