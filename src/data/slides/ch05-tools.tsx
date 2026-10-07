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

function CategorySlide(
  title: string,
  subtitle: string,
  does: string,
  how: string,
  tools: string[],
  examples: string[],
): SlideDef['content'] {
  return () => (
    <>
      <Kicker>Catégorie d’outils</Kicker>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <div className="slide-body">
        <div className="grid-2">
          <Card>
            <h3>À quoi ça sert ?</h3>
            <p>{does}</p>
          </Card>
          <Card>
            <h3>Idée simple de fonctionnement</h3>
            <p>{how}</p>
          </Card>
        </div>
        <div className="tag-list">
          {tools.map((t) => (
            <span key={t} className="tag en">
              {t}
            </span>
          ))}
        </div>
        <Card>
          <h3>Exemples au travail</h3>
          <p>{examples.join(' · ')}</p>
        </Card>
      </div>
    </>
  )
}

export const ch05Slides: SlideDef[] = [
  {
    id: '05-divider',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'dark',
    notes: notes({
      say: 'Carte de choix selon la tâche.',
      explain: 'Cadre de décision, pas liste marketing.',
      example: 'Rédiger ≠ créer une image ≠ automatiser.',
      question: 'Quelle catégorie semble la plus proche de votre travail ?',
      interaction: 'Notez pour la pratique.',
      time: '40 s',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">05</p>
        <Title>Types d’outils d’IA et comment choisir</Title>
        <Subtitle>
          Pas besoin de retenir tous les noms. Il faut savoir quelle famille convient à la tâche.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '05-map',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'navy',
    notes: notes({
      say: 'Six familles comme carte.',
      explain: 'Un produit peut couvrir plusieurs familles.',
      example: 'Certains chats ajoutent images ou analyse de fichiers.',
      question: 'Quelle famille consomme le plus de temps chez vous ?',
      interaction: 'Courte discussion.',
      time: '1.5 min',
    }),
    content: () => (
      <>
        <Kicker>Carte pratique</Kicker>
        <Title>Six familles principales pour la plupart des usages pro</Title>
        <div className="slide-body">
          <div className="grid-3">
            {[
              ['Texte', 'Text — rédaction, résumé, traduction'],
              ['Images', 'Images — visuels et présentations'],
              ['Vidéo', 'Video — scènes courtes'],
              ['Audio', 'Audio — voix et transcription'],
              ['Automatisation', 'Automation — enchaîner des étapes'],
              ['Recherche', 'Research — sources et documents'],
            ].map(([ar, en]) => (
              <Card key={ar}>
                <h3>{ar}</h3>
                <p className="en">{en}</p>
              </Card>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    id: '05-text',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'light',
    notes: notes({
      say: 'Texte = catégorie la plus utile en management.',
      explain: 'Brouillons rapides puis revue humaine.',
      example: 'E-mail client ou résumé de réunion.',
      question: 'Quel document vous prend le plus de temps chaque semaine ?',
      interaction: 'Bon candidat pour la fin.',
      time: '1.5 min',
    }),
    content: CategorySlide(
      '1) Outils texte',
      'Les plus proches des tâches de bureau et de management.',
      'Aider à écrire, améliorer, résumer, traduire et organiser des idées.',
      'Un modèle de langage reçoit vos consignes et le contexte, puis propose un texte à revoir.',
      ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot'],
      ['E-mails', 'Rapports', 'Résumés', 'Traduction', 'Structure de présentation', 'Idées organisées'],
    ),
  },
  {
    id: '05-image',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'mint',
    notes: notes({
      say: 'Les images demandent une description visuelle claire.',
      explain: 'Utile pour présentations et communication.',
      example: 'Couverture de présentation.',
      question: 'Produisez-vous régulièrement des supports visuels ?',
      interaction: 'Si oui, un exemple plus tard.',
      time: '1.5 min',
    }),
    content: CategorySlide(
      '2) Outils images',
      'Utiles pour un visuel rapide avant ou pendant le design final.',
      'Créer des images ou concepts à partir d’une description écrite.',
      'Un modèle image transforme la description en composition selon style, lumière et cadrage.',
      ['ChatGPT (Images)', 'Midjourney', 'Adobe Firefly', 'Canva AI'],
      ['Diapositives', 'Communication', 'Concepts', 'Visuels internes'],
    ),
  },
  {
    id: '05-video',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'light',
    notes: notes({
      say: 'Vidéo en évolution rapide ; pas prioritaire pour tous.',
      explain: 'Utile pour contenus courts.',
      example: 'Courte scène de chantier ou démo.',
      question: 'La vidéo est-elle centrale dans votre travail ?',
      interaction: 'Sinon, passez vite.',
      time: '1 min',
    }),
    content: CategorySlide(
      '3) Outils vidéo',
      'Utiles dans des cas précis, pas pour toutes les équipes au même niveau.',
      'Produire de courtes scènes ou récits animés à partir d’une description.',
      'Un modèle vidéo génère du mouvement selon sujet, action et style de caméra.',
      ['Runway', 'Kling', 'Veo', 'Outils en évolution'],
      ['Communication marketing', 'Démos courtes', 'Récit visuel simple'],
    ),
  },
  {
    id: '05-audio',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'navy',
    notes: notes({
      say: 'La transcription a souvent plus de valeur que la voix synthétique.',
      explain: 'Comptes rendus de réunion.',
      example: 'Enregistrement → décisions et tâches.',
      question: 'Combien de temps perdez-vous à écrire des comptes rendus ?',
      interaction: 'Reliez à la pratique si cité.',
      time: '1 min',
    }),
    content: CategorySlide(
      '4) Outils audio / transcription',
      'Forte valeur quand il y a beaucoup de réunions.',
      'Passer de l’audio au texte, ou créer une voix-off si besoin.',
      'Modèles de parole et de transcription qui réduisent le travail répétitif, avec revue humaine.',
      ['ElevenLabs', 'Speech-to-Text', 'Transcription de réunions'],
      ['Comptes rendus', 'Notes de suivi', 'Voix-off pour présentations'],
    ),
  },
  {
    id: '05-automation',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'mint',
    notes: notes({
      say: 'L’automatisation lie l’IA à un flux de travail.',
      explain: 'Bon pour tâches répétitives avec règles assez claires.',
      example: 'E-mail → classement → résumé quotidien.',
      question: 'Quel processus répété vous ennuie le plus ?',
      interaction: 'Bon candidat pour la fin.',
      time: '1.5 min',
    }),
    content: CategorySlide(
      '5) Productivité et automatisation',
      'Quand on veut réduire la répétition et lier des étapes.',
      'Mettre l’IA dans un parcours : lire, classer, extraire, alerter.',
      'La plateforme enchaîne des étapes ; l’IA fait la partie langage ou analyse entre elles.',
      ['Microsoft Copilot', 'Zapier', 'Make', 'AI Agents'],
      ['Trier des e-mails', 'Résumé périodique', 'Préparer des données', 'Alertes internes'],
    ),
  },
  {
    id: '05-research',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'light',
    notes: notes({
      say: 'Recherche ≠ chat général quand les sources comptent.',
      explain: 'NotebookLM utile avec un lot de documents.',
      example: 'Analyser un dossier projet.',
      question: 'Vos décisions s’appuient-elles sur de longs documents ?',
      interaction: 'Toujours vérifier la source.',
      time: '1 min',
    }),
    content: CategorySlide(
      '6) Recherche et knowledge',
      'Utiles quand la réponse doit s’appuyer sur des documents ou des sources plus claires.',
      'Résumer et analyser un ensemble de documents, ou soutenir une recherche.',
      'Combine récupération / organisation des sources et formulation de la réponse.',
      ['Perplexity', 'NotebookLM', 'AI research tools'],
      ['Revoir des fichiers projet', 'Préparer un dossier pour décision', 'Extraire des points de plusieurs sources'],
    ),
  },
  {
    id: '05-online-vs-desktop',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'dark',
    steps: 2,
    notes: notes({
      say: 'Pas de gagnant absolu cloud vs intégré.',
      explain: 'Selon tâche, droits, confidentialité, intégration.',
      example: 'Copilot dans un document ouvert peut gagner du temps.',
      question: 'Travaillez-vous plutôt navigateur ou applications bureau ?',
      interaction: 'Cadre entreprise.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Cloud ou intégré aux applications ?</Kicker>
        <Title>Il n’y a pas de meilleur choix absolu — cela dépend du contexte</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>Outils web / cloud</h3>
              <Flow nodes={['Browser', 'Cloud', 'Model']} />
              <p className="tiny">Accès facile · mises à jour · dépend de la connexion et de la politique du service</p>
            </Card>
            <Card>
              <h3>Outils intégrés aux apps</h3>
              <Flow nodes={['Computer', 'Apps', 'AI']} />
              <p className="tiny">Intégration avec fichiers ouverts · droits parfois plus clairs · dépend de la licence</p>
            </Card>
          </div>
          <Reveal show={step >= 2}>
            <Pill>Critères : tâche · droits · confidentialité · intégration aux systèmes</Pill>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '05-multi-model',
    chapter: "Types d'outils",
    chapterId: '05',
    theme: 'light',
    notes: notes({
      say: 'Une plateforme peut changer de mode selon la tâche.',
      explain: 'Mode recherche ou fichiers ≠ chat simple.',
      example: 'Déposer un fichier puis demander les risques.',
      question: 'Avez-vous vu une qualité différente selon le mode ?',
      interaction: 'Encourager un choix conscient du mode.',
      time: '1 min',
    }),
    content: () => (
      <>
        <Kicker>Note pratique</Kicker>
        <Title wide>La plateforme que vous ouvrez peut regrouper plusieurs modèles et fonctions</Title>
        <div className="slide-body">
          <Card>
            <p>
              Posez-vous toujours la question : ai-je besoin d’un chat général, d’une analyse
              de fichier, d’une recherche avec sources, ou d’un visuel ? Choisir le bon mode
              dans le même produit compte souvent plus que changer d’outil au hasard.
            </p>
          </Card>
        </div>
      </>
    ),
  },
]
