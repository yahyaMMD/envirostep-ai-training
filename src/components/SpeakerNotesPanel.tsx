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
    <aside className="notes-panel" dir="ltr">
      <div className="row" style={{ justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <h4>Notes formateur · {slideTitle}</h4>
        <button type="button" className="nav-btn" onClick={onClose}>
          Fermer
        </button>
      </div>
      <section>
        <strong>À dire</strong>
        <p>{notes.say}</p>
      </section>
      <section>
        <strong>Explication simple</strong>
        <p>{notes.explain}</p>
      </section>
      <section>
        <strong>Exemple oral</strong>
        <p>{notes.example}</p>
      </section>
      <section>
        <strong>Question au groupe</strong>
        <p>{notes.question}</p>
      </section>
      <section>
        <strong>Interaction</strong>
        <p>{notes.interaction}</p>
      </section>
      <section>
        <strong>Temps estimé</strong>
        <p>{notes.time}</p>
      </section>
    </aside>
  )
}
