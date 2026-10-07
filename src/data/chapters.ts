import type { ChapterMeta } from '../types'

export const CHAPTERS: ChapterMeta[] = [
  { id: '01', num: '01', title: 'Ouverture' },
  { id: '02', num: '02', title: "Qu'est-ce que l'IA ?" },
  { id: '03', num: '03', title: 'Comment ça marche ?' },
  { id: '04', num: '04', title: 'Modèles et systèmes' },
  { id: '05', num: '05', title: "Types d'outils" },
  { id: '06', num: '06', title: 'Parler aux outils' },
  { id: '07', num: '07', title: 'Écrire les consignes' },
  { id: '08', num: '08', title: 'Usage au travail' },
  { id: '09', num: '09', title: 'Exercices guidés' },
  { id: '10', num: '10', title: 'Vos cas concrets' },
]

export function notes(
  partial: Partial<import('../types').SpeakerNotes> &
    Pick<import('../types').SpeakerNotes, 'say'>,
): import('../types').SpeakerNotes {
  return {
    say: partial.say,
    explain: partial.explain ?? '',
    example: partial.example ?? '',
    question: partial.question ?? 'Voulez-vous une précision avant de continuer ?',
    interaction: partial.interaction ?? 'Ouvrez une courte discussion avec un exemple de leur travail.',
    time: partial.time ?? '1–2 min',
  }
}
