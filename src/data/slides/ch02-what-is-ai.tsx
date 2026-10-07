import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import {
  Card,
  Flow,
  Kicker,
  Pill,
  Subtitle,
  Title,
} from '../../components/ui'

const branches = [
  'Machine Learning',
  'Deep Learning',
  'Generative AI',
  'Computer Vision',
  'Natural Language Processing',
  'Robotics',
  'Speech / Audio',
  'Recommendation Systems',
  'AI Agents',
  'Automation',
]

export const ch02Slides: SlideDef[] = [
  {
    id: '02-divider',
    chapter: "Qu'est-ce que l'IA ?",
    chapterId: '02',
    theme: 'dark',
    notes: notes({
      say: 'L’IA est plus large qu’un seul chatbot.',
      explain: 'Évite de tout réduire à ChatGPT.',
      example: 'Recommandations, reconnaissance d’images, etc.',
      question: 'Quand vous dites IA, à quoi pensez-vous d’abord ?',
      interaction: 'Prenez 2 réponses sans corriger tout de suite.',
      time: '45 s',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">02</p>
        <Title>Que veut dire « intelligence artificielle » au travail ?</Title>
        <Subtitle>
          Ce n’est pas un seul logiciel. C’est un grand domaine de techniques qui aident
          les systèmes à faire des tâches souvent liées au langage, à l’analyse ou aux images.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '02-not-one-tool',
    chapter: "Qu'est-ce que l'IA ?",
    chapterId: '02',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'Montrez la carte des domaines sans tout détailler.',
      explain: 'L’important : sentir l’ampleur, puis se concentrer sur les outils utiles.',
      example: 'Computer Vision = images ; NLP = langage.',
      question: 'Pensiez-vous que l’IA = seulement le chat texte ?',
      interaction: 'Pointez les branches utiles à leur métier.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Idée clé</Kicker>
        <Title wide>L’IA n’est pas un seul outil : c’est un ensemble de domaines</Title>
        <Subtitle>
          Il y a plusieurs spécialités. Au bureau, on utilise surtout une partie : outils
          génératifs et outils de productivité.
        </Subtitle>
        <div className="slide-body">
          <div className="ecosystem">
            <Reveal show={step >= 1}>
              <div className="eco-core en">AI</div>
            </Reveal>
            <Reveal show={step >= 2}>
              <div className="eco-branches">
                {branches.map((b) => (
                  <span key={b} className="eco-branch en">
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '02-wide-field',
    chapter: "Qu'est-ce que l'IA ?",
    chapterId: '02',
    theme: 'light',
    notes: notes({
      say: 'Rassurez : on ne couvre pas tout le domaine.',
      explain: 'Le cadre général suffit pour bien utiliser.',
      example: 'Comme « management » : finance, RH, opérations… on cible ce qui touche votre travail.',
      question: 'Le cadre général vous suffit-il avant les outils ?',
      interaction: 'Passez au focus pratique.',
      time: '1 min',
    }),
    content: () => (
      <>
        <Kicker>Ce qui compte ici</Kicker>
        <Title wide>Le domaine est large — cette session vise la partie utilisable tout de suite</Title>
        <div className="slide-body">
          <Card>
            <p>
              Il existe beaucoup de techniques et de théories. Vous n’avez pas besoin de
              tout étudier pour bien décider en tant qu’utilisateurs. Il suffit de
              comprendre les idées qui évitent les malentendus, améliorent vos demandes,
              et clarifient les limites.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '02-tools-focus',
    chapter: "Qu'est-ce que l'IA ?",
    chapterId: '02',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'Focalisez sur AI Tools.',
      explain: 'Generative AI et productivité sont les plus proches du management.',
      example: 'Brouillon de rapport ou résumé de réunion.',
      question: 'Préférez-vous des outils prêts à l’emploi plutôt que construire des modèles ?',
      interaction: 'Souvent oui à ce stade.',
      time: '1 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Focus de cette session</Kicker>
        <Title>Nous nous concentrons sur les outils utilisables dès aujourd’hui</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <div className="eco-branches">
              {branches.map((b) => (
                <span key={b} className="eco-branch en">
                  {b}
                </span>
              ))}
              <span className="eco-branch highlight en">AI Tools — notre focus</span>
            </div>
          </Reveal>
          <Reveal show={step >= 2}>
            <Pill>Comprendre le domaine → choisir le bon outil pour la tâche</Pill>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '02-theory-to-tools',
    chapter: "Qu'est-ce que l'IA ?",
    chapterId: '02',
    theme: 'dark',
    steps: 6,
    notes: notes({
      say: 'Derrière chaque app, plusieurs couches.',
      explain: 'Cela explique les différences de qualité et de coût.',
      example: 'ChatGPT = plateforme au-dessus de modèles et d’infrastructure.',
      question: 'Voyez-vous que l’outil ouvert n’est pas toute l’histoire technique ?',
      interaction: 'Révélez les couches une par une.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>De la technique à ce que vous voyez</Kicker>
        <Title>Derrière chaque outil prêt à l’emploi, plusieurs couches</Title>
        <Subtitle>
          Pas besoin de maîtriser chaque couche. Connaître cet ordre aide à comprendre
          les limites et les possibilités.
        </Subtitle>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'Theory' : '…',
              step >= 2 ? 'Algorithms' : '…',
              step >= 3 ? 'Models' : '…',
              step >= 4 ? 'AI Systems' : '…',
              step >= 5 ? 'Applications' : '…',
              step >= 6 ? 'Tools' : '…',
            ]}
            accentIndex={step >= 6 ? 5 : undefined}
          />
          <Reveal show={step >= 6}>
            <p className="muted">
              Ce que vous utilisez chaque jour est souvent la dernière couche : une
              interface au-dessus d’un ou plusieurs modèles.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '02-what-we-study',
    chapter: "Qu'est-ce que l'IA ?",
    chapterId: '02',
    theme: 'light',
    notes: notes({
      say: 'Limitez clairement le périmètre.',
      explain: 'Les principes servent à mieux utiliser, pas à construire des modèles.',
      example: 'Tokens, Prompts, RAG de façon simple et utile.',
      question: 'Y a-t-il un sujet technique à approfondir plus tard ?',
      interaction: 'Notez pour les questions ou une autre session.',
      time: '1 min',
    }),
    content: () => (
      <>
        <Kicker>Limites claires</Kicker>
        <Title wide>Nous n’étudierons pas toutes les théories — seulement ce qui améliore votre usage</Title>
        <div className="slide-body">
          <Card>
            <p>
              L’objectif n’est pas de former des ingénieurs en IA. L’objectif est de
              comprendre les idées qui vous aident à mieux guider les outils, juger leurs
              résultats, et éviter les erreurs fréquentes au travail.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '02-familiar-tools',
    chapter: "Qu'est-ce que l'IA ?",
    chapterId: '02',
    theme: 'navy',
    notes: notes({
      say: 'Noms connus pour baisser la barrière.',
      explain: 'Les noms changent ; l’idée d’usage reste proche.',
      example: 'Copilot peut être le plus proche d’un environnement Microsoft.',
      question: 'Lesquels sont disponibles ou autorisés chez vous ?',
      interaction: 'Utile pour la partie confidentialité.',
      time: '1.5 min',
    }),
    content: () => (
      <>
        <Kicker>Exemples connus</Kicker>
        <Title>Des plateformes prêtes à l’emploi, avec des modèles derrière</Title>
        <Subtitle>
          Les interfaces et les règles d’entreprise changent, mais le principe est proche :
          vous donnez une consigne et un contexte, vous obtenez un brouillon à vérifier.
        </Subtitle>
        <div className="slide-body">
          <div className="grid-3">
            {[
              ['ChatGPT', 'Plateforme OpenAI pour le texte et bien plus'],
              ['Gemini', 'Plateforme Google, souvent utile avec Google Workspace'],
              ['Claude', 'Plateforme Anthropic, forte sur l’analyse et les longs textes'],
              ['Copilot', 'IA intégrée dans les produits Microsoft'],
              ['Midjourney', 'Création d’images à partir d’une description'],
              ['Perplexity', 'Recherche et réponses parfois mieux liées aux sources'],
            ].map(([t, d]) => (
              <Card key={t}>
                <h3 className="en">{t}</h3>
                <p>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </>
    ),
  },
]
