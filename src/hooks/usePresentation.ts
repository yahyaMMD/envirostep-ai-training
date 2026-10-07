import { useCallback, useEffect, useMemo, useState } from 'react'
import type { SlideDef } from '../types'

export function usePresentation(slides: SlideDef[]) {
  const [index, setIndex] = useState(0)
  const [step, setStep] = useState(1)
  const [notesOpen, setNotesOpen] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)

  const slide = slides[index]
  const maxStep = slide?.steps ?? 1

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next))
      setIndex(clamped)
      setStep(1)
    },
    [slides.length],
  )

  const next = useCallback(() => {
    if (step < maxStep) {
      setStep((s) => s + 1)
      return
    }
    if (index < slides.length - 1) {
      setIndex((i) => i + 1)
      setStep(1)
    }
  }, [index, maxStep, slides.length, step])

  const prev = useCallback(() => {
    if (step > 1) {
      setStep((s) => s - 1)
      return
    }
    if (index > 0) {
      const prevSlide = slides[index - 1]
      setIndex((i) => i - 1)
      setStep(prevSlide?.steps ?? 1)
    }
  }, [index, slides, step])

  const jumpChapter = useCallback(
    (chapterId: string) => {
      const i = slides.findIndex((s) => s.chapterId === chapterId)
      if (i >= 0) goTo(i)
    },
    [goTo, slides],
  )

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      setFullscreen(true)
    } else {
      await document.exitFullscreen()
      setFullscreen(false)
    }
  }, [])

  useEffect(() => {
    const onFs = () => setFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(slides.length - 1)
      } else if (e.key.toLowerCase() === 'n') {
        setNotesOpen((v) => !v)
      } else if (e.key.toLowerCase() === 'f') {
        void toggleFullscreen()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goTo, next, prev, slides.length, toggleFullscreen])

  const progress = useMemo(
    () => ((index + step / maxStep) / slides.length) * 100,
    [index, maxStep, slides.length, step],
  )

  return {
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
    goTo,
    jumpChapter,
    toggleFullscreen,
    total: slides.length,
  }
}
