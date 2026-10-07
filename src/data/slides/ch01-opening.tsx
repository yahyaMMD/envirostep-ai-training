import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import {
  Card,
  Discussion,
  Kicker,
  Quote,
  Subtitle,
  Title,
  TagCloud,
} from '../../components/ui'

export const ch01Slides: SlideDef[] = [
  {
    id: '01-title',
    chapter: 'Ouverture',
    chapterId: '01',
    theme: 'dark',
    notes: notes({
      say: 'Accueillez le groupe calmement et présentez l’objectif sans exagérer.',
      explain: 'Public : managers et professionnels. Ils veulent de l’utile, pas du spectacle.',
      example: 'Comprendre assez pour utiliser les outils avec confiance au travail.',
      question: 'Quelle tâche écrite ou analytique vous prend le plus de temps chaque semaine ?',
      interaction: 'Notez 2–3 réponses pour le final.',
      time: '2 min',
    }),
    content: () => (
      <div className="slide-body" style={{ justifyContent: 'center', gap: '1.5rem' }}>
        <Kicker>
          <span className="en">Envirostep SARL</span>
        </Kicker>
        <Title wide>Formation pratique à l’intelligence artificielle au travail</Title>
        <Subtitle>
          Nous allons comprendre simplement ce que sont ces outils et comment ils
          fonctionnent, puis apprendre à les utiliser clairement et en sécurité dans le
          travail quotidien : rapports, e-mails, résumés, analyse. L’objectif : savoir
          quand les utiliser, comment demander un bon résultat, et quand vérifier avant
          de s’en servir pour une décision importante.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '01-agenda',
    chapter: 'Ouverture',
    chapterId: '01',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'Présentez le parcours rapidement. Insistez sur la fin pratique.',
      explain: 'Cela rassure : le temps mène à quelque chose de concret.',
      example: 'À la fin, on travaille sur vos vrais cas.',
      question: 'Préférez-vous plus d’explication ou plus de pratique ?',
      interaction: 'Adaptez le rythme.',
      time: '1.5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Parcours de la session</Kicker>
        <Title>Comment allons-nous organiser le temps ?</Title>
        <Subtitle>
          Nous avançons étape par étape : idées de base → outils → façon de donner des
          consignes → application sur vos cas réels.
        </Subtitle>
        <div className="slide-body">
          <Reveal show={step >= 1}>
            <div className="grid-2">
              {[
                ['01', 'Ouverture et besoins'],
                ['02', "Qu'est-ce que l'IA ?"],
                ['03', 'Comment ça marche ?'],
                ['04', 'Modèles et sources'],
                ['05', "Types d'outils"],
                ['06', 'Donner des consignes'],
                ['07', 'Bien écrire un Prompt'],
                ['08', 'Usages au travail'],
                ['09', 'Exercices guidés'],
                ['10', 'Vos cas concrets'],
              ].map(([num, title]) => (
                <div key={num} className="card row">
                  <span className="en" style={{ fontWeight: 800, color: '#0f766e' }}>
                    {num}
                  </span>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal show={step >= 2}>
            <p className="muted">
              Comprendre → choisir l’outil → donner une consigne claire → vérifier → appliquer
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '01-question',
    chapter: 'Ouverture',
    chapterId: '01',
    theme: 'navy',
    notes: notes({
      say: 'Demandez calmement le niveau de départ. Pas de jeu de vote.',
      explain: 'Savoir qui utilise déjà des outils IA.',
      example: 'Même un usage occasionnel compte.',
      question: 'Utilisez-vous déjà des outils d’IA dans votre travail ?',
      interaction: 'Main levée ou réponse orale brève.',
      time: '2 min',
    }),
    content: () => (
      <>
        <Kicker>Avant de commencer</Kicker>
        <Title wide>Utilisez-vous déjà des outils d’intelligence artificielle au travail ?</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>Oui</h3>
              <p>De temps en temps, ou régulièrement sur certaines tâches.</p>
            </Card>
            <Card>
              <h3>Pas encore</h3>
              <p>Vous en avez entendu parler, mais ce n’est pas encore dans votre routine.</p>
            </Card>
          </div>
          <Discussion>
            Cela nous aide à adapter les exemples à votre réalité, pas à des cas inventés.
          </Discussion>
        </div>
      </>
    ),
  },
  {
    id: '01-tools-used',
    chapter: 'Ouverture',
    chapterId: '01',
    theme: 'mint',
    notes: notes({
      say: 'Si certains utilisent déjà : demandez quels outils.',
      explain: 'Beaucoup utilisent l’IA dans Copilot ou Canva sans le nommer ainsi.',
      example: 'Microsoft Copilot dans Word ou Outlook.',
      question: 'Lesquels connaissez-vous ou utilisez-vous ?',
      interaction: 'Discussion orale.',
      time: '2 min',
    }),
    content: () => (
      <>
        <Kicker>Si vous les utilisez déjà</Kicker>
        <Title>Quels outils connaissez-vous ou utilisez-vous ?</Title>
        <Subtitle>
          Liste d’exemples courants. L’important est de savoir ce qui existe déjà chez vous.
        </Subtitle>
        <div className="slide-body">
          <TagCloud
            tags={[
              'ChatGPT',
              'Gemini',
              'Claude',
              'Microsoft Copilot',
              'Canva',
              'Midjourney',
              'NotebookLM',
              'Perplexity',
              'Autres',
            ]}
          />
        </div>
      </>
    ),
  },
  {
    id: '01-use-cases',
    chapter: 'Ouverture',
    chapterId: '01',
    theme: 'light',
    notes: notes({
      say: 'Demandez pour quels types de tâches.',
      explain: 'Cela prépare la dernière partie.',
      example: 'E-mails clients, comptes rendus de réunion.',
      question: 'Sur quels types de tâches voyez-vous le plus de besoin d’aide ?',
      interaction: 'Notez les réponses pour le chapitre final.',
      time: '2 min',
    }),
    content: () => (
      <>
        <Kicker>Type d’usage</Kicker>
        <Title>Pour quelles tâches les utilisez-vous — ou le feriez-vous ?</Title>
        <Subtitle>
          Le type de tâche compte plus que le nom de l’outil. Le même principe sert sur
          presque toutes les plateformes.
        </Subtitle>
        <div className="slide-body">
          <TagCloud
            tags={[
              'Rédaction',
              'Traduction',
              'Recherche',
              'Analyse de fichiers',
              'Excel / données',
              'E-mails',
              'Présentations',
              'Images',
              'Idées',
              'Programmation',
              'Automatisation',
            ]}
          />
        </div>
      </>
    ),
  },
  {
    id: '01-if-no',
    chapter: 'Ouverture',
    chapterId: '01',
    theme: 'dark',
    notes: notes({
      say: 'Rassurez ceux qui n’ont pas encore commencé.',
      explain: 'Aucune base technique n’est exigée.',
      example: 'À la fin, une vraie tâche pas à pas.',
      question: 'Quelle première tâche aimeriez-vous tester ?',
      interaction: 'Une seule tâche par personne.',
      time: '1 min',
    }),
    content: () => (
      <>
        <Kicker>Si vous n’avez pas encore commencé</Kicker>
        <Title wide>Pas de problème — c’est un bon point de départ</Title>
        <div className="slide-body">
          <Quote>
            À la fin de la session, nous prendrons des cas de votre travail et nous les
            ferons ensemble, étape par étape — pour une expérience concrète, pas seulement
            des idées générales.
          </Quote>
        </div>
      </>
    ),
  },
  {
    id: '01-promise',
    chapter: 'Ouverture',
    chapterId: '01',
    theme: 'mint',
    steps: 3,
    notes: notes({
      say: 'Clarifiez les trois résultats attendus.',
      explain: 'Pas former des ingénieurs IA : former des utilisateurs lucides.',
      example: 'Comme conduire une voiture : assez pour bien l’utiliser, pas pour la fabriquer.',
      question: 'Ce niveau convient-il à vos attentes ?',
      interaction: 'Validez avant de continuer.',
      time: '1.5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Que retirez-vous de cette session ?</Kicker>
        <Title>Trois résultats concrets</Title>
        <div className="slide-body">
          <div className="grid-3">
            <Reveal show={step >= 1}>
              <Card>
                <h3>Comprendre</h3>
                <p>
                  Une vision claire de ce qui se passe avec des outils comme ChatGPT ou
                  Copilot, sans détail d’ingénierie inutile.
                </p>
              </Card>
            </Reveal>
            <Reveal show={step >= 2}>
              <Card>
                <h3>Choisir</h3>
                <p>
                  Distinguer les types d’outils et savoir quand chaque catégorie est utile.
                </p>
              </Card>
            </Reveal>
            <Reveal show={step >= 3}>
              <Card>
                <h3>Utiliser avec méthode</h3>
                <p>
                  Écrire des consignes claires, vérifier les résultats, et protéger les
                  informations sensibles.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '01-goal',
    chapter: 'Ouverture',
    chapterId: '01',
    theme: 'navy',
    notes: notes({
      say: 'Fixez le critère de la session.',
      explain: 'On y revient à chaque sujet technique.',
      example: 'Si l’explication devient trop longue, on revient à l’exemple métier.',
      question: 'Souhaitez-vous que j’aille plus lentement sur les notions techniques ?',
      interaction: 'Convenez d’un signe simple pour demander une précision.',
      time: '1 min',
    }),
    content: () => (
      <>
        <Kicker>Critère de la session</Kicker>
        <div className="slide-body">
          <Quote>
            Comprendre l’IA assez pour l’utiliser avec conscience, en sécurité et avec
            efficacité au travail — pas devenir expert en sa construction.
          </Quote>
        </div>
      </>
    ),
  },
]
