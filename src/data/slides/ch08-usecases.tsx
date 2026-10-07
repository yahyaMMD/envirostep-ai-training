import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import {
  Card,
  Kicker,
  Quote,
  Subtitle,
  Title,
  TagCloud,
} from '../../components/ui'

export const ch08Slides: SlideDef[] = [
  {
    id: '08-divider',
    chapter: 'Usage au travail',
    chapterId: '08',
    theme: 'dark',
    notes: notes({
      say: 'Rapprochez des tâches management / ingénierie.',
      explain: 'IA = brouillon et organisation ; décision reste humaine.',
      example: 'Résumer une visite de site puis lister les suivis.',
      question: 'Quel document ou échange consomme le plus de temps ?',
      interaction: 'Collectez pour la fin.',
      time: '40 s',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">08</p>
        <Title>Où l’IA apporte une vraie valeur au travail ?</Title>
        <Subtitle>
          Pas un remplacement de l’expérience professionnelle : un moyen d’accélérer
          brouillons, organisation et première analyse.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '08-workplace',
    chapter: 'Usage au travail',
    chapterId: '08',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'Scénarios proches d’Envirostep.',
      explain: 'Brouillon puis revue = bon modèle.',
      example: 'E-mail de changement de date, CR, structure de slides.',
      question: 'Quel scénario ressemble le plus à votre travail ?',
      interaction: 'Priorisez pour la pratique.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Scénarios professionnels fréquents</Kicker>
        <Title>Là où le gain apparaît vite quand on utilise bien</Title>
        <div className="slide-body">
          <div className="grid-2">
            {[
              ['Rapports terrain et admin', 'Organiser des notes, rédiger un brouillon, extraire les points critiques'],
              ['Relation clients et partenaires', 'E-mails clairs sur délais, mises à jour et suivis'],
              ['Réunions', 'Comptes rendus, décisions, responsabilités et dates'],
              ['Présentations et communication interne', 'Structure des slides, messages courts, idées visuelles'],
            ].map(([t, d]) => (
              <Card key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </Card>
            ))}
          </div>
          <Reveal show={step >= 2}>
            <p className="muted">
              La valeur apparaît quand l’outil accélère le travail préparatoire, puis votre
              jugement professionnel valide le résultat final.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '08-choose',
    chapter: 'Usage au travail',
    chapterId: '08',
    theme: 'mint',
    notes: notes({
      say: 'Chacun identifie la priorité pour gagner du temps.',
      explain: 'Prépare la pratique sur leurs cas.',
      example: 'Qui choisit documents → on analysera un exemple.',
      question: 'Quelle famille d’outils ferait gagner le plus de temps le mois prochain ?',
      interaction: 'Discussion calme dans la salle.',
      time: '3 min',
    }),
    content: () => (
      <>
        <Kicker>Priorité</Kicker>
        <Title wide>Quelle famille d’outils sert le mieux vos priorités maintenant ?</Title>
        <Subtitle>
          Choisissez là où le temps se répète, et où l’on peut améliorer sans baisser la qualité
          de la décision.
        </Subtitle>
        <div className="slide-body">
          <TagCloud
            tags={[
              'Texte et rédaction',
              'Images et présentations',
              'Vidéo',
              'Audio et transcription',
              'Données et tableaux',
              'Recherche et documents',
              'Automatisation',
              'Support technique / code',
              'Documents internes',
            ]}
          />
        </div>
      </>
    ),
  },
  {
    id: '08-transition',
    chapter: 'Usage au travail',
    chapterId: '08',
    theme: 'navy',
    notes: notes({
      say: 'Passage aux exercices puis aux cas réels.',
      explain: 'Partie pratique.',
      example: 'Courts exercices, puis leurs cas.',
      question: 'Avez-vous des exemples réels prêts ?',
      interaction: 'Une tâche par personne ou équipe.',
      time: '30 s',
    }),
    content: () => (
      <>
        <Kicker>Passage à la pratique</Kicker>
        <div className="slide-body">
          <Quote>
            Après de courts exercices guidés, nous prendrons des cas de votre réalité et nous
            les ferons ensemble sur les outils adaptés.
          </Quote>
        </div>
      </>
    ),
  },
]
