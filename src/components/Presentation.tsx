import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
} from 'lucide-react'
import { usePresentation } from '../hooks/usePresentation'
import { CHAPTERS } from '../data/chapters'
import { slides } from '../data/slides'
import { SpeakerNotesPanel } from './SpeakerNotesPanel'

export function Presentation() {
  const {
    index,
    step,
    maxStep,
    slide,
    notesOpen,
    setNotesOpen,
    fullscreen,
    progress,
    next,
    prev,
    jumpChapter,
    toggleFullscreen,
    total,
  } = usePresentation(slides)

  if (!slide) return null

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden />
          <span>Envirostep SARL · تدريب الذكاء الاصطناعي</span>
        </div>
        <div className="chapter-label">
          <span className="en">{slide.chapterId}</span>
          {' · '}
          {slide.chapter}
        </div>
        <button
          type="button"
          className="nav-btn"
          onClick={() => void toggleFullscreen()}
          title="ملء الشاشة (F)"
        >
          {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          ملء الشاشة
        </button>
      </header>

      <main className={`slide-stage theme-${slide.theme}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="slide-frame"
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.985 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="slide-inner">
              {slide.content({ step, maxStep })}
            </div>
          </motion.div>
        </AnimatePresence>

        <nav className="chapter-nav" aria-label="فصول العرض">
          {CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              type="button"
              className={`chapter-dot${slide.chapterId === ch.id ? ' active' : ''}`}
              title={`${ch.num} — ${ch.title}`}
              onClick={() => jumpChapter(ch.id)}
            />
          ))}
        </nav>
      </main>

      <footer className="bottombar">
        <button type="button" className="nav-btn" onClick={prev} disabled={index === 0 && step === 1}>
          <ChevronRight size={16} />
          السابق
        </button>

        <div className="stack" style={{ flex: 1, gap: '0.35rem' }}>
          <div className="progress-track" aria-hidden>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <span className="en help-keys">← → · Space · F</span>
            <span className="en">
              {index + 1} / {total}
              {maxStep > 1 ? ` · ${step}/${maxStep}` : ''}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="nav-btn"
          onClick={next}
          disabled={index === total - 1 && step === maxStep}
        >
          التالي
          <ChevronLeft size={16} />
        </button>
      </footer>

      {notesOpen && (
        <SpeakerNotesPanel
          notes={slide.notes}
          slideTitle={slide.id}
          onClose={() => setNotesOpen(false)}
        />
      )}
    </div>
  )
}
