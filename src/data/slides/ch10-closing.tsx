import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import {
  Card,
  Flow,
  Kicker,
  Quote,
  Subtitle,
  Title,
} from '../../components/ui'

export const ch10Slides: SlideDef[] = [
  {
    id: '10-divider',
    chapter: 'Vos cas concrets',
    chapterId: '10',
    theme: 'dark',
    notes: notes({
      say: 'Partie la plus concrète : leurs vrais cas.',
      explain: 'Ils proposent la tâche ; vous guidez l’exécution ensemble.',
      example: 'E-mail client, résumé de rapport, structure de slides.',
      question: 'Qui a un cas prêt maintenant ?',
      interaction: 'Choisissez 2–3 cas selon le temps.',
      time: '1 min',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">10</p>
        <Title>Application directe sur vos cas de travail</Title>
        <Subtitle>
          Vous proposez la tâche et le contexte. Ensemble, nous construisons la consigne,
          nous l’exécutons sur l’outil adapté, puis nous revoyons le résultat en équipe —
          pas comme un exercice théorique détaché de votre réalité.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '10-how-it-works',
    chapter: 'Vos cas concrets',
    chapterId: '10',
    theme: 'light',
    steps: 4,
    notes: notes({
      say: 'Règles avant de recevoir les cas.',
      explain: 'Pas de fichiers sensibles, objectif clair, revue collective.',
      example: 'Si données sensibles : anonymiser ou utiliser un exemple.',
      question: 'Les cas proposés sont-ils partageables en salle ?',
      interaction: 'Filtrez vite.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Comment allons-nous travailler ici ?</Kicker>
        <Title>Quatre règles simples pour la pratique collective</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Reveal show={step >= 1}>
              <Card>
                <h3>1) Vous choisissez le cas</h3>
                <p>Tâche réelle : e-mail, rapport, résumé, présentation, analyse…</p>
              </Card>
            </Reveal>
            <Reveal show={step >= 2}>
              <Card>
                <h3>2) On construit la consigne</h3>
                <p>Objectif, public, limites et format avant d’exécuter.</p>
              </Card>
            </Reveal>
            <Reveal show={step >= 3}>
              <Card>
                <h3>3) On exécute sur le bon outil</h3>
                <p>On choisit la famille selon la tâche, pas seulement la notoriété.</p>
              </Card>
            </Reveal>
            <Reveal show={step >= 4}>
              <Card>
                <h3>4) On revoit le résultat</h3>
                <p>Qu’est-ce qui marche ? Que corriger ? Que faut-il vérifier humainement ?</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-collect-cases',
    chapter: 'Vos cas concrets',
    chapterId: '10',
    theme: 'mint',
    notes: notes({
      say: 'Collectez les cas, puis classez par impact et temps.',
      explain: 'Commencez par un cas court pour un succès rapide.',
      example: 'E-mail court d’abord, puis résumé de rapport.',
      question: 'Quelle tâche, si améliorée aujourd’hui, ferait gagner du temps cette semaine ?',
      interaction: 'Notez 3 à 5 cas puis choisissez.',
      time: '5–8 min',
    }),
    content: () => (
      <>
        <Kicker>Collecte des cas</Kicker>
        <Title wide>Quelles tâches voulez-vous traiter maintenant avec l’aide de l’IA ?</Title>
        <Subtitle>
          Proposez des cas de votre travail. Plus le cas est précis — objectif, public, délai —
          plus la pratique est utile.
        </Subtitle>
        <div className="slide-body">
          <div className="grid-2">
            {[
              ['Exemple', 'Reformuler un message client sur un changement de date'],
              ['Exemple', 'Résumer un rapport terrain pour la direction de projet'],
              ['Exemple', 'Transformer des notes de réunion en tâches de suivi'],
              ['Exemple', 'Proposer la structure d’une présentation de visite ou de projet'],
            ].map(([k, v]) => (
              <Card key={v}>
                <h3>{k}</h3>
                <p>{v}</p>
              </Card>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-live-canvas',
    chapter: 'Vos cas concrets',
    chapterId: '10',
    theme: 'navy',
    notes: notes({
      say: 'Slide de travail live pendant l’exécution.',
      explain: 'Remplissez oralement ou au tableau pour chaque cas.',
      example: 'Cas / outil / consigne / revue.',
      question: 'Le résultat est-il prêt ou faut-il une boucle d’amélioration ?',
      interaction: 'Répétez sur 2+ cas.',
      time: '15–40 min',
    }),
    content: () => (
      <>
        <Kicker>Tableau d’exécution live</Kicker>
        <Title>Pour chaque cas, on passe par ces points avant de valider</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>Le cas</h3>
              <p>Quelle tâche ? Pour qui le résultat ? Quelle décision ou envoi ensuite ?</p>
            </Card>
            <Card>
              <h3>Outil / famille</h3>
              <p>Texte, documents, images, transcription, automatisation… pourquoi celle-ci ?</p>
            </Card>
            <Card>
              <h3>La consigne</h3>
              <p>Rôle, contexte, tâche, limites, format de sortie.</p>
            </Card>
            <Card>
              <h3>La revue</h3>
              <p>Exactitude, ton, complétude, et ce que le responsable humain doit ajouter.</p>
            </Card>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-guardrails',
    chapter: 'Vos cas concrets',
    chapterId: '10',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'Limites pendant la pratique, sans casser l’élan.',
      explain: 'Hallucinations, erreurs confiantes, données sensibles.',
      example: 'Pas de contrats dans un outil non validé.',
      question: 'Quelles infos sont interdites de partage dans cette session ?',
      interaction: 'Accord avant les cas sensibles.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Garde-fous pendant la pratique</Kicker>
        <Title>On utilise l’outil sérieusement… avec des limites professionnelles claires</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>Ce qu’elle peut accélérer</h3>
              <ul className="check-list">
                <li>Brouillons plus rapides</li>
                <li>Organisation d’idées et de notes</li>
                <li>Résumé et première analyse</li>
                <li>Propositions de formulations et de structures</li>
              </ul>
            </Card>
            <Reveal show={step >= 2}>
              <Card>
                <h3>Ce qu’il faut surveiller</h3>
                <ul className="x-list">
                  <li>Infos inexactes présentées avec assurance</li>
                  <li>Malentendu sur le contexte local ou interne</li>
                  <li>Biais ou hypothèses inadaptées</li>
                  <li>Envoi de données sensibles sans cadre</li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-framework',
    chapter: 'Vos cas concrets',
    chapterId: '10',
    theme: 'mint',
    steps: 5,
    notes: notes({
      say: 'Cadre à emporter au bureau.',
      explain: 'ASK CHECK REFINE USE PROTECT',
      example: 'Après chaque cas, faites CHECK et REFINE à voix haute.',
      question: 'Quelle étape voulez-vous formaliser en équipe ?',
      interaction: 'Souvent protection des données et revue.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Cadre d’usage après aujourd’hui</Kicker>
        <Title>Cinq étapes qui peuvent devenir une habitude d’équipe</Title>
        <div className="slide-body">
          <div className="grid-3">
            {[
              ['ASK', 'Demander clairement', 1],
              ['CHECK', 'Vérifier le résultat', 2],
              ['REFINE', 'Améliorer la consigne', 3],
              ['USE', 'Garder ce qui est utile', 4],
              ['PROTECT', 'Protéger les données', 5],
            ].map(([en, ar, n]) => (
              <Reveal key={en as string} show={step >= (n as number)}>
                <Card>
                  <h3 className="en">{en as string}</h3>
                  <p>{ar as string}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    id: '10-loop',
    chapter: 'Vos cas concrets',
    chapterId: '10',
    theme: 'dark',
    steps: 5,
    notes: notes({
      say: 'Une ou deux boucles d’amélioration valent mieux qu’une demande vague.',
      explain: 'À faire aussi en live.',
      example: 'Brouillon 1 → remarques → brouillon 2.',
      question: 'Améliorons-nous le cas actuel avant le suivant ?',
      interaction: 'Faites une boucle publique.',
      time: '1 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Boucle de travail recommandée</Kicker>
        <Title>De la consigne au résultat validé</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'PROMPT' : '…',
              step >= 2 ? 'AI' : '…',
              step >= 3 ? 'CHECK' : '…',
              step >= 4 ? 'REFINE' : '…',
              step >= 5 ? 'FINAL' : '…',
            ]}
            accentIndex={2}
          />
        </div>
      </>
    ),
  },
  {
    id: '10-commitment',
    chapter: 'Vos cas concrets',
    chapterId: '10',
    theme: 'light',
    notes: notes({
      say: 'Engagement concret après la session.',
      explain: 'Un petit engagement augmente la continuité.',
      example: 'Résumer la réunion de demain avec le même cadre.',
      question: 'Quelle première tâche appliquerez-vous dans les prochains jours ?',
      interaction: 'Partage volontaire bref.',
      time: '3 min',
    }),
    content: () => (
      <>
        <Kicker>Après cette session</Kicker>
        <Title wide>Quelle tâche concrète emportez-vous au bureau ?</Title>
        <div className="slide-body">
          <Quote>
            Le mieux est que chaque personne reparte avec une tâche claire, un outil adapté,
            et une méthode de vérification — pas seulement une impression générale.
          </Quote>
        </div>
      </>
    ),
  },
  {
    id: '10-thanks',
    chapter: 'Vos cas concrets',
    chapterId: '10',
    theme: 'dark',
    notes: notes({
      say: 'Remerciements et questions.',
      explain: 'Usage lucide, pas expertise d’ingénierie.',
      example: 'Canal interne pour partager de bonnes consignes.',
      question: 'Des questions avant de conclure ?',
      interaction: 'Q&A selon le temps.',
      time: '2 min + questions',
    }),
    content: () => (
      <div className="slide-body" style={{ justifyContent: 'space-between' }}>
        <div>
          <Kicker>
            <span className="en">Envirostep SARL</span>
          </Kicker>
          <Title wide>On applique sur vos cas — puis vous gardez ce qui sert votre travail</Title>
          <Subtitle>
            L’objectif n’est pas de devenir expert en construction de l’IA, mais de savoir
            l’utiliser avec conscience et discipline professionnelle.
          </Subtitle>
        </div>
        <div className="row">
          <Card>
            <h3>À retenir</h3>
            <p>ASK · CHECK · REFINE · USE · PROTECT</p>
          </Card>
          <Card>
            <h3>Prochaine étape</h3>
            <p>Une vraie tâche cette semaine, avec la même méthode</p>
          </Card>
        </div>
      </div>
    ),
  },
]
