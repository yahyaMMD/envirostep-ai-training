import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import { NeuralNetVisual } from '../../components/diagrams/NeuralNetVisual'
import {
  Card,
  Compare,
  Flow,
  Kicker,
  Quote,
  Subtitle,
  Title,
  VerticalFlow,
} from '../../components/ui'

export const ch03Slides: SlideDef[] = [
  {
    id: '03-divider',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'dark',
    notes: notes({
      say: 'Chapitre important, sans formules.',
      explain: 'Image correcte de ce qui se passe quand on envoie une demande.',
      example: 'Corriger l’idée « il cherche juste une phrase en base ».',
      question: 'Pensez-vous que ChatGPT cherche seulement dans une base de phrases ?',
      interaction: 'Prenez l’idée courante, puis corrigez calmement.',
      time: '45 s',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">03</p>
        <Title>Comment fonctionnent les outils d’IA modernes, en pratique ?</Title>
        <Subtitle>
          Une image assez simple pour le management, et assez juste pour éviter les idées fausses.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '03-io-flow',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'navy',
    steps: 4,
    notes: notes({
      say: 'Cycle de base : utilisateur → entrée → modèle → sortie.',
      explain: 'Cycle le plus simple pour un outil génératif.',
      example: 'Vous écrivez, le modèle traite, un résultat apparaît.',
      question: 'Où se joue la partie la plus importante selon vous ?',
      interaction: 'Souvent au modèle — et dans la qualité de la demande.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Vue d’ensemble</Kicker>
        <Title wide>Que se passe-t-il entre la demande et le résultat ?</Title>
        <div className="slide-body" style={{ gap: '1rem', justifyContent: 'flex-start' }}>
          <Flow
            nodes={[
              step >= 1 ? 'USER' : '…',
              step >= 2 ? 'INPUT' : '…',
              step >= 3 ? 'AI MODEL' : '…',
              step >= 4 ? 'OUTPUT' : '…',
            ]}
            accentIndex={step >= 3 ? 2 : undefined}
          />
          <Reveal show={step >= 3}>
            <NeuralNetVisual active={step >= 3} />
          </Reveal>
          <Reveal show={step >= 4}>
            <p className="slide-subtitle" style={{ maxWidth: '48ch' }}>
              Vous envoyez une demande. Elle arrive au modèle. Il la traite selon ce qu’il a
              appris. Puis il propose un résultat — à vérifier avant une décision importante.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-simple-words',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'light',
    notes: notes({
      say: 'Reformulez en langage métier.',
      explain: 'Ce n’est pas toujours une copie d’une phrase stockée.',
      example: 'Il peut écrire une nouvelle formulation.',
      question: 'Avez-vous déjà reçu une réponse convaincante puis fausse ?',
      interaction: 'Reliez à la vérification plus tard.',
      time: '1 min',
    }),
    content: () => (
      <>
        <Kicker>En langage simple</Kicker>
        <Title wide>L’outil reçoit vos consignes, les traite via un modèle entraîné, puis propose un résultat</Title>
        <div className="slide-body">
          <Card>
            <p>
              Quand vous écrivez une question ou une demande, elle n’est pas lue par une
              personne derrière l’écran. Elle entre dans un <strong>modèle d’IA (AI Model)</strong>,
              qui la traite selon des schémas appris pendant l’entraînement, puis propose un
              brouillon. La qualité dépend beaucoup de la clarté de votre demande et des
              limites du modèle.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '03-not-database',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'Corrigez l’idée courante avec respect.',
      explain: 'Un LLM n’est pas un simple moteur de recherche de phrases.',
      example: 'Il peut produire une formulation jamais stockée telle quelle.',
      question: 'Était-ce votre idée de départ ?',
      interaction: 'Dites : idée logique, mais incomplète.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Idée fausse fréquente</Kicker>
        <Title wide>Est-ce que ChatGPT cherche seulement dans une base et renvoie la phrase la plus proche ?</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <h2 style={{ margin: 0, color: '#0f766e' }}>C’est plus précis que cela.</h2>
          </Reveal>
          <Reveal show={step >= 2}>
            <Card>
              <p>
                Un <span className="en">Large Language Model (LLM)</span> est un modèle
                entraîné à l’avance. Pendant l’entraînement, ses paramètres apprennent des
                schémas de langage et de connaissances générales. À l’usage, il génère une
                nouvelle réponse à partir de ces schémas — pas forcément en recopiant une
                phrase enregistrée telle quelle.
              </p>
            </Card>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-analogy',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'dark',
    notes: notes({
      say: 'Analogie utile, mais approximative.',
      explain: 'Le modèle ne pense pas comme un humain.',
      example: 'Il peut reformuler, pas seulement copier.',
      question: 'Cette image aide-t-elle ?',
      interaction: 'Demandez une reformulation en une phrase.',
      time: '2 min',
    }),
    content: () => (
      <>
        <Kicker>Analogie — pas une description littérale</Kicker>
        <div className="slide-body">
          <Quote>
            Imaginez quelqu’un qui a lu énormément de livres, d’articles et d’échanges. Quand
            on lui pose une question, il ne rouvre pas forcément un fichier pour recopier une
            phrase exacte. Il s’appuie sur des schémas appris pour proposer une réponse adaptée.
            Le modèle fait quelque chose de comparable sur le plan statistique — sans
            compréhension humaine réelle, et sans garantie de vérité.
          </Quote>
        </div>
      </>
    ),
  },
  {
    id: '03-training',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'light',
    steps: 4,
    notes: notes({
      say: 'L’entraînement est fait en amont par les éditeurs.',
      explain: 'L’utilisateur final utilise surtout le modèle déjà entraîné.',
      example: 'Vous ne réentraînez pas le modèle à chaque question.',
      question: 'Voyez-vous la différence entre construire et utiliser ?',
      interaction: 'Nous sommes côté usage.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          Étape <span className="en">Training</span> — entraînement
        </Kicker>
        <Title>Comment le modèle est-il construit avant d’arriver chez vous ?</Title>
        <div className="slide-body">
          <VerticalFlow
            nodes={[
              step >= 1 ? 'Beaucoup de données (Data)' : '…',
              step >= 2 ? 'Entraînement coûteux (Training)' : '…',
              step >= 3 ? 'Paramètres du modèle (Parameters)' : '…',
              step >= 4 ? 'Schémas appris pour générer ensuite' : '…',
            ]}
          />
        </div>
      </>
    ),
  },
  {
    id: '03-inference',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'mint',
    steps: 4,
    notes: notes({
      say: 'Usage quotidien = Inference.',
      explain: 'Chaque Prompt lance une génération, pas un réentraînement complet.',
      example: 'Demande d’e-mail → brouillon.',
      question: 'Notre travail quotidien est dans quelle étape ?',
      interaction: 'Inference.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          Étape <span className="en">Inference</span> — usage / génération
        </Kicker>
        <Title>Que se passe-t-il quand vous écrivez une demande aujourd’hui ?</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'Prompt' : '…',
              step >= 2 ? 'Model' : '…',
              step >= 3 ? 'Prediction' : '…',
              step >= 4 ? 'Answer' : '…',
            ]}
            accentIndex={1}
          />
          <Reveal show={step >= 4}>
            <p className="muted">
              Au quotidien, vous êtes surtout dans l’étape d’usage et de génération.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-tokens',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'navy',
    steps: 3,
    notes: notes({
      say: 'Tokens = petits morceaux de texte.',
      explain: 'Mot, bout de mot, ponctuation.',
      example: 'Les limites de conversation se comptent souvent en tokens.',
      question: 'Avez-vous vu des limites de longueur de chat ou de fichier ?',
      interaction: 'Reliez à la fenêtre de contexte.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          <span className="en">Tokens</span> — unités de texte
        </Kicker>
        <Title>Le modèle ne lit pas la phrase exactement comme un humain</Title>
        <Subtitle>
          Le texte est découpé en unités plus petites (tokens), puis traité pour produire la réponse.
        </Subtitle>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <Card>
              <p>
                Exemple : <strong>Quelle est la capitale de la Russie ?</strong>
              </p>
            </Card>
          </Reveal>
          <Reveal show={step >= 2}>
            <div className="row" style={{ justifyContent: 'center' }}>
              {['Quelle', 'est', 'la', 'capitale', 'de', 'la', 'Russie', '?'].map((t) => (
                <span key={t} className="token">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal show={step >= 3}>
            <p className="muted">
              Un token peut être un mot, une partie de mot, ou un signe de ponctuation.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-numbers-vectors',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'light',
    steps: 4,
    notes: notes({
      say: 'Du texte aux nombres, sans équations.',
      explain: 'Les embeddings représentent le sens en nombres.',
      example: 'Chat plus proche de chien que de voiture.',
      question: 'Pourquoi est-ce utile pour chercher dans des documents ?',
      interaction: 'Introduction au RAG.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>
          Du texte aux nombres : <span className="en">Embeddings</span>
        </Kicker>
        <Title>L’ordinateur travaille avec des représentations numériques du sens</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'Text' : '…',
              step >= 2 ? 'Tokens' : '…',
              step >= 3 ? 'Numbers' : '…',
              step >= 4 ? 'Vectors' : '…',
            ]}
          />
          <Reveal show={step >= 4}>
            <div className="grid-3">
              <Card>
                <h3>Chat</h3>
                <p className="tiny en">→ vector</p>
              </Card>
              <Card>
                <h3>Chien</h3>
                <p className="tiny en">→ vector</p>
              </Card>
              <Card>
                <h3>Voiture</h3>
                <p className="tiny en">→ vector</p>
              </Card>
            </div>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-vector-space',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'Carte 2D simplifiée + avertissement.',
      explain: 'Les vraies dimensions sont très nombreuses.',
      example: 'La recherche par sens utilise la proximité.',
      question: 'Où placeriez-vous « avion » par rapport à « voiture » ?',
      interaction: 'Près des véhicules.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Image simplifiée de la similarité</Kicker>
        <Title>Les sens proches sont souvent proches dans cette représentation</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <div className="vector-map">
              <span className="vector-point" style={{ top: '28%', left: '30%' }}>
                Chat
              </span>
              <span className="vector-point" style={{ top: '38%', left: '42%' }}>
                Chien
              </span>
              <span className="vector-point" style={{ top: '68%', left: '70%' }}>
                Voiture
              </span>
              <span className="vector-point" style={{ top: '58%', left: '82%' }}>
                Avion
              </span>
            </div>
          </Reveal>
          <Reveal show={step >= 2}>
            <p className="tiny">
              Dessin en 2D pour comprendre seulement — pas une copie exacte du modèle réel.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-next-token',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'dark',
    steps: 5,
    notes: notes({
      say: 'Génération token après token.',
      explain: 'La fluidité n’égale pas la vérité.',
      example: 'Confiance excessive possible avec une erreur.',
      question: 'Pourquoi la revue humaine reste nécessaire ?',
      interaction: 'Parce que c’est une génération, pas une preuve.',
      time: '1.5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Idée de génération</Kicker>
        <Title>Des schémas appris à la construction progressive de la réponse</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'TOKENS' : '…',
              step >= 2 ? 'PATTERNS' : '…',
              step >= 3 ? 'PREDICTION' : '…',
              step >= 4 ? 'NEXT TOKEN' : '…',
              step >= 5 ? 'ANSWER' : '…',
            ]}
          />
          <Reveal show={step >= 5}>
            <p className="muted">
              Le modèle construit la réponse étape par étape. Cela explique un style fluide —
              pas une exactitude garantie.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '03-data-quality',
    chapter: 'Comment ça marche ?',
    chapterId: '03',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'Plus de données ≠ automatiquement mieux.',
      explain: 'Qualité et diversité comptent aussi.',
      example: 'Documents internes faux affaiblissent un système interne.',
      question: 'Si on forme une équipe sur des procédures périmées, que se passe-t-il ?',
      interaction: 'Qualité des données d’entreprise.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Qualité des données</Kicker>
        <Title wide>Plus de données veut-il toujours dire une meilleure IA ?</Title>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <h2 style={{ margin: 0 }}>Pas automatiquement. La qualité compte autant que le volume.</h2>
          </Reveal>
          <Reveal show={step >= 2}>
            <Compare
              badLabel="Données faibles"
              goodLabel="Données de bonne qualité"
              bad={
                <ul className="x-list">
                  <li>Bruit et doublons</li>
                  <li>Infos fausses ou trop anciennes</li>
                  <li>Biais ou manque de diversité</li>
                </ul>
              }
              good={
                <ul className="check-list">
                  <li>Exactitude et fraîcheur utiles</li>
                  <li>Diversité adaptée aux tâches</li>
                  <li>Exemples clairs et utiles</li>
                </ul>
              }
            />
          </Reveal>
        </div>
      </>
    ),
  },
]
