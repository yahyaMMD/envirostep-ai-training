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
    chapter: 'Parler aux outils',
    chapterId: '06',
    theme: 'dark',
    notes: notes({
      say: 'Compétence commune : clarté des consignes.',
      explain: 'La qualité de la demande change fortement le résultat.',
      example: 'Même outil, deux résultats selon la précision.',
      question: 'Avez-vous déjà reçu une réponse trop vague car la demande l’était ?',
      interaction: 'Passez à la comparaison.',
      time: '40 s',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">06</p>
        <Title>Comment guider les outils d’IA avec des consignes claires ?</Title>
        <Subtitle>
          Quelle que soit la plateforme, le résultat dépend de la clarté de la tâche, du
          contexte et du format attendu.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '06-common-skill',
    chapter: 'Parler aux outils',
    chapterId: '06',
    theme: 'mint',
    notes: notes({
      say: 'Présentez le Prompt comme une consigne pro, pas une mode.',
      explain: 'Rôle, contexte, tâche, limites, format.',
      example: 'Comme briefer un collègue nouveau.',
      question: 'Donnez-vous souvent une phrase trop courte à l’outil ?',
      interaction: 'Beaucoup le font — on va améliorer.',
      time: '1.5 min',
    }),
    content: () => (
      <>
        <Kicker>Compétence commune</Kicker>
        <Title>
          Les consignes que vous écrivez — le <span className="en">Prompt</span> — décident de l’utilité
        </Title>
        <div className="slide-body">
          <Quote>
            Un Prompt n’est pas une formule magique. C’est une consigne professionnelle qui
            précise : qui tu es (rôle), dans quel contexte, que faire exactement, et sous
            quelle forme rendre le résultat.
          </Quote>
        </div>
      </>
    ),
  },
  {
    id: '06-bad-vs-good',
    chapter: 'Parler aux outils',
    chapterId: '06',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'Comparez les deux exemples.',
      explain: 'Destinataire, motif, ton, prochaine étape.',
      example: 'Retard de rapport + nouvelle date.',
      question: 'Laquelle enverriez-vous à un manager ?',
      interaction: 'Consensus attendu sur la 2e.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Même tâche, deux niveaux de clarté</Kicker>
        <Title>Demande faible vs demande claire</Title>
        <div className="slide-body">
          <Compare
            badLabel="Demande insuffisante"
            goodLabel="Demande claire"
            bad={<div className="prompt-box">Écris-moi un e-mail.</div>}
            good={
              <div className="prompt-box">
                Écris un e-mail professionnel court au chef de projet pour annoncer un retard
                de deux jours sur le rapport, sur un ton respectueux et direct, avec une
                nouvelle date proposée et une raison brève.
              </div>
            }
          />
          <Reveal show={step >= 2}>
            <p className="muted">La différence n’est pas l’outil : c’est la complétude de la consigne.</p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '06-why-clarity',
    chapter: 'Parler aux outils',
    chapterId: '06',
    theme: 'navy',
    notes: notes({
      say: 'L’outil ne lit pas vos intentions.',
      explain: 'Il travaille avec ce que vous donnez.',
      example: 'Sans public cible, le ton peut être faux.',
      question: 'Quel détail oubliez-vous le plus souvent ?',
      interaction: 'Ton, longueur, public, format.',
      time: '1 min',
    }),
    content: () => (
      <>
        <Kicker>Règle pratique</Kicker>
        <Title wide>Plus la consigne est claire et complète, plus le résultat se rapproche de ce dont vous avez besoin</Title>
        <div className="slide-body">
          <Quote>
            L’outil aide fort pour brouillon et organisation. Il ne remplace pas la définition
            de l’objectif professionnel de votre côté.
          </Quote>
        </div>
      </>
    ),
  },
]
