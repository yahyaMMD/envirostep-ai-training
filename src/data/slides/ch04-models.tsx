import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import { CloudComputeVisual } from '../../components/diagrams/CloudComputeVisual'
import {
  Card,
  Flow,
  Kicker,
  Pill,
  Subtitle,
  Title,
} from '../../components/ui'

export const ch04Slides: SlideDef[] = [
  {
    id: '04-divider',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'dark',
    notes: notes({
      say: 'Séparez savoir général du modèle et sources de l’entreprise.',
      explain: 'Évite d’attendre des réponses internes d’un outil public sans documents.',
      example: 'Politique de congés de l’entreprise ≠ savoir automatique de ChatGPT.',
      question: 'Avez-vous déjà demandé une info interne à un outil public ?',
      interaction: 'Discutez le résultat si besoin.',
      time: '45 s',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">04</p>
        <Title>Modèles de langage, savoir général, et vos sources</Title>
        <Subtitle>
          Quand la réponse vient de ce que le modèle a appris ? Quand faut-il vos documents
          ou une source à jour ?
        </Subtitle>
      </div>
    ),
  },
  {
    id: '04-what-is-model',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'Définissez le modèle simplement.',
      explain: 'Système entraîné sur des données pour des tâches précises.',
      example: 'Modèle texte pour rédiger, modèle image pour créer des visuels.',
      question: 'Une plateforme peut-elle utiliser plusieurs modèles ?',
      interaction: 'Oui, c’est fréquent.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          Qu’est-ce qu’un <span className="en">AI Model</span> ?
        </Kicker>
        <Title wide>Un système entraîné sur des données pour faire des tâches précises</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <Card>
              <p>
                En pratique : le modèle apprend à partir de beaucoup d’exemples à quoi
                ressemble un bon résultat pour une tâche, puis propose des résultats sur de
                nouvelles demandes. Analogie utile — pas un apprentissage humain au sens
                complet.
              </p>
            </Card>
          </Reveal>
          <Reveal show={step >= 2}>
            <Flow
              nodes={['DATA', 'LEARNING', 'MODEL', 'QUESTION', 'RESULT']}
              accentIndex={2}
            />
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-what-is-llm',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'mint',
    notes: notes({
      say: 'LLM = type de modèle centré sur le langage.',
      explain: 'Beaucoup d’outils bureau s’appuient dessus.',
      example: 'ChatGPT, Claude, Gemini.',
      question: 'Le terme est-il plus clair ?',
      interaction: 'Rappelez modèle ≠ plateforme.',
      time: '1.5 min',
    }),
    content: () => (
      <>
        <Kicker>
          <span className="en">Large Language Model (LLM)</span>
        </Kicker>
        <Title>Le grand modèle de langage : base de beaucoup d’outils texte</Title>
        <div className="slide-body">
          <Card>
            <p>
              C’est un type de modèle d’IA entraîné sur beaucoup de textes. Il peut
              comprendre des demandes et proposer des réponses : résumé, traduction,
              reformulation, structure de rapport… La plateforme peut ajouter recherche,
              fichiers, ou images par-dessus.
            </p>
          </Card>
          <div className="row">
            <Pill>Modèle ≠ plateforme entière</Pill>
            <Pill>Une plateforme peut regrouper plusieurs modèles</Pill>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '04-llm-vs-rag',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'Séparez savoir intégré et recherche dans vos docs.',
      explain: 'RAG récupère des passages puis demande au LLM de formuler.',
      example: 'Procédure interne → recherche → réponse.',
      question: 'Quand avez-vous besoin de documents internes ?',
      interaction: 'Procédures, tarifs, rapports projet.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Distinction importante</Kicker>
        <Title>Le savoir général du modèle n’est pas la même chose qu’une recherche dans vos documents</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3 className="en">LLM</h3>
              <p>
                Génère à partir de schémas appris. Utile pour le général et la rédaction.
                Il ne connaît pas automatiquement vos fichiers internes.
              </p>
            </Card>
            <Reveal show={step >= 2}>
              <Card>
                <h3 className="en">RAG</h3>
                <p>
                  Retrieval-Augmented Generation : retrouve des infos dans des sources
                  choisies, puis formule la réponse avec leur aide. Utile pour le savoir interne.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '04-rag-pipeline',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'light',
    steps: 6,
    notes: notes({
      say: 'Parcourez le pipeline étape par étape.',
      explain: 'Embedding → recherche → LLM.',
      example: 'Question sur une procédure avec dépôt de documents.',
      question: 'Où entrent les documents de l’entreprise ?',
      interaction: 'À DOCUMENTS, avant la formulation.',
      time: '2.5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          Parcours simple d’un <span className="en">RAG</span>
        </Kicker>
        <Title>Comment relier une question à des sources, puis formuler la réponse ?</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'QUESTION' : '…',
              step >= 2 ? 'EMBEDDING' : '…',
              step >= 3 ? 'VECTOR SEARCH' : '…',
              step >= 4 ? 'DOCUMENTS' : '…',
              step >= 5 ? 'LLM' : '…',
              step >= 6 ? 'ANSWER' : '…',
            ]}
            accentIndex={4}
          />
        </div>
      </>
    ),
  },
  {
    id: '04-ex-moscow',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'Exemple de savoir général.',
      explain: 'Pas besoin de fichier interne.',
      example: 'Capitale de la Russie.',
      question: 'Faut-il ici un système documentaire interne ?',
      interaction: 'Non.',
      time: '1 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Exemple 1 — savoir général</Kicker>
        <Title>Une question générale peut s’appuyer sur les schémas du modèle</Title>
        <div className="slide-body">
          <p className="slide-subtitle">Quelle est la capitale de la Russie ?</p>
          <Flow nodes={['Question', 'Model', 'Learned patterns', 'Moscou']} />
          <Reveal show={step >= 2}>
            <p className="muted">Génération à partir du savoir/schémas généraux — pas un RAG interne.</p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-ex-policy',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'Exemple interne.',
      explain: 'L’outil public ne garantit pas la politique de votre société.',
      example: 'Politique de congés.',
      question: 'Mettez-vous des documents internes dans des outils non validés ?',
      interaction: 'Lien avec confidentialité.',
      time: '1.5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Exemple 2 — information interne</Kicker>
        <Title wide>Une question sur la politique de congés de votre société demande une source interne fiable</Title>
        <div className="slide-body">
          <Flow
            nodes={['Question', 'Search docs', 'Relevant doc', 'LLM', 'Answer']}
            accentIndex={1}
          />
          <Reveal show={step >= 2}>
            <p className="muted">Plus proche d’un système de connaissance interne / RAG.</p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-ex-weather',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'Exemple d’info en temps réel.',
      explain: 'Le modèle seul n’a pas forcément la météo du jour.',
      example: 'API météo.',
      question: 'Pourquoi l’outil peut-il se tromper sur des infos qui changent vite ?',
      interaction: 'Absence de source à jour.',
      time: '1.5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Exemple 3 — information qui change</Kicker>
        <Title wide>La météo aujourd’hui à Alger demande une source à jour, pas seulement la mémoire du modèle</Title>
        <div className="slide-body">
          <Flow
            nodes={['Question', 'Weather API', 'Current data', 'AI model', 'Answer']}
            accentIndex={1}
          />
          <Reveal show={step >= 2}>
            <Card>
              <p>
                Le modèle seul n’a pas forcément d’infos en temps réel fiables. Quand on le
                relie à des sources externes (météo, web, fichiers validés), le système peut
                s’en servir puis formuler une réponse claire.
              </p>
            </Card>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-many-models',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'Plusieurs familles, sans classement absolu.',
      explain: 'Choix selon tâche, coût, contexte, règles.',
      example: 'Un résumé rapide n’a pas besoin du modèle le plus puissant.',
      question: 'Le plus récent est-il toujours le mieux pour chaque tâche ?',
      interaction: 'Non.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Pourquoi plusieurs plateformes et modèles ?</Kicker>
        <Title>Parce que les besoins changent : précision, vitesse, coût, intégration</Title>
        <div className="slide-body">
          <div className="grid-3">
            <Card>
              <h3 className="en">ChatGPT</h3>
              <p>OpenAI — usage large pour les tâches générales</p>
            </Card>
            <Card>
              <h3 className="en">Gemini</h3>
              <p>Google — utile surtout dans l’écosystème Google</p>
            </Card>
            <Card>
              <h3 className="en">Claude</h3>
              <p>Anthropic — souvent fort sur l’analyse et les longs textes</p>
            </Card>
          </div>
          <Reveal show={step >= 2}>
            <p>
              Les modèles peuvent différer en raisonnement, vitesse, taille de contexte,
              multimédia, coût et délai.{' '}
              <strong className="highlight-text">
                On choisit selon la tâche et le cadre de l’entreprise, pas seulement la notoriété.
              </strong>
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-not-free',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'dark',
    steps: 2,
    notes: notes({
      say: 'Expliquez brièvement le coût.',
      explain: 'Chaque requête avancée consomme du calcul.',
      example: 'Abonnements, plans pro, API.',
      question: 'L’entreprise peut-elle attendre un usage avancé gratuit illimité ?',
      interaction: 'Clarifiez le coût calmement.',
      time: '1.5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Pourquoi ce n’est pas entièrement gratuit ?</Kicker>
        <Title>Derrière chaque réponse avancée, il y a un coût de calcul</Title>
        <div className="slide-body">
          <CloudComputeVisual />
          <div className="grid-4">
            {['GPU / calcul', 'Serveurs & stockage', 'Ingénierie & sécurité', 'Entraînement & exploitation'].map(
              (x) => (
                <Card key={x}>
                  <h3>{x}</h3>
                </Card>
              ),
            )}
          </div>
          <Reveal show={step >= 2}>
            <p>Les offres gratuites sont souvent limitées. Un usage pro dense demande un cadre clair de coût et de droits.</p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '04-privacy',
    chapter: 'Modèles et systèmes',
    chapterId: '04',
    theme: 'mint',
    notes: notes({
      say: 'Message confidentialité clair pour managers.',
      explain: 'Les politiques diffèrent ; pas de généralisation « toujours utilisé pour entraîner ».',
      example: 'Pas de contrats clients dans un outil non validé.',
      question: 'Quelles infos ne doivent jamais sortir des systèmes de l’entreprise ?',
      interaction: 'Reliez à la politique interne.',
      time: '2 min',
    }),
    content: () => (
      <>
        <Kicker>Données et confidentialité</Kicker>
        <Title>Avant d’envoyer une info à un outil externe, connaissez sa politique</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>Ce qui change selon les services</h3>
              <p>
                Confidentialité, durée de conservation, usage éventuel pour l’amélioration /
                l’entraînement, contrôles des plans entreprise.
              </p>
            </Card>
            <Card>
              <h3>Règle pratique</h3>
              <p>
                N’envoyez pas d’informations sensibles, secrètes ou de données clients à un
                outil avant validation et règles d’usage adaptées à votre travail.
              </p>
            </Card>
          </div>
        </div>
      </>
    ),
  },
]
