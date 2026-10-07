import type { ReactNode } from 'react'

export type SlideTheme = 'dark' | 'light' | 'navy' | 'mint'

export interface SpeakerNotes {
  say: string
  explain: string
  example: string
  question: string
  interaction: string
  time: string
}

export interface SlideContext {
  step: number
  maxStep: number
}

export interface SlideDef {
  id: string
  chapter: string
  chapterId: string
  theme: SlideTheme
  notes: SpeakerNotes
  /** Number of progressive reveal steps (1 = all at once) */
  steps?: number
  content: (ctx: SlideContext) => ReactNode
}

export interface ChapterMeta {
  id: string
  num: string
  title: string
}
