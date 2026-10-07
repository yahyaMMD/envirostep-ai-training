import type { SlideDef } from '../../types'
import { notes } from '../chapters'
import { Reveal } from '../../components/Reveal'
import {
  Card,
  Compare,
  Flow,
  Formula,
  Kicker,
  Subtitle,
  Title,
} from '../../components/ui'

export const ch07Slides: SlideDef[] = [
  {
    id: '07-divider',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'dark',
    notes: notes({
      say: 'Cadre simple à retenir.',
      explain: 'Pas obligatoire de tout remplir chaque fois.',
      example: 'Role + Context + Task + Constraints + Format',
      question: 'Voulez-vous un modèle unique pour l’équipe ?',
      interaction: 'Possible à adopter ensuite.',
      time: '40 s',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">07</p>
        <Title>Comment écrire des consignes professionnelles efficaces ?</Title>
        <Subtitle>
          Un cadre simple pour transformer une demande vague en briefing clair.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '07-anatomy',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'Présentez les éléments comme une checklist.',
      explain: 'Pour une tâche simple : Task + Format peuvent suffire.',
      example: 'Pour un rapport important, ajoutez Role et Constraints.',
      question: 'Quel élément est le plus important chez vous ?',
      interaction: 'Souvent contexte et format.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Cadre d’une bonne consigne</Kicker>
        <Title>Les parties d’une demande professionnelle complète</Title>
        <div className="slide-body">
          <Formula
            parts={['ROLE', 'CONTEXT', 'TASK', 'CONSTRAINTS', 'OUTPUT FORMAT', 'EXAMPLES']}
          />
          <Reveal show={step >= 2}>
            <p className="muted">
              Utilisez ce qu’il faut. Plus le résultat impacte une décision ou un client, plus
              le détail est nécessaire.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '07-parts',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'light',
    notes: notes({
      say: 'Parcourez chaque élément avec un mini-exemple.',
      explain: 'Role fixe le style ; Format facilite l’usage ensuite.',
      example: 'Un tableau vaut parfois mieux qu’un long paragraphe.',
      question: 'Quand un exemple de référence est utile ?',
      interaction: 'Pour aligner le style d’équipe.',
      time: '3 min',
    }),
    content: () => (
      <>
        <Kicker>Sens de chaque partie</Kicker>
        <Title>Comment traduire ces éléments en consigne claire ?</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3 className="en">1. ROLE</h3>
              <p>Angle professionnel : assistant rapports techniques ou relation client.</p>
            </Card>
            <Card>
              <h3 className="en">2. CONTEXT</h3>
              <p>Entreprise / projet / étape / public, pour éviter les mauvaises hypothèses.</p>
            </Card>
            <Card>
              <h3 className="en">3. TASK</h3>
              <p>Demande précise : résumer, extraire les risques, proposer des actions…</p>
            </Card>
            <Card>
              <h3 className="en">4. CONSTRAINTS</h3>
              <p>Longueur, ton, langue, et ce qu’il faut éviter.</p>
            </Card>
            <Card>
              <h3 className="en">5. OUTPUT FORMAT</h3>
              <p>Tableau, puces, e-mail prêt à envoyer, structure de slides…</p>
            </Card>
            <Card>
              <h3 className="en">6. EXAMPLES</h3>
              <p>Référence de style quand vous voulez rester cohérents en équipe.</p>
            </Card>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '07-report-compare',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'mint',
    notes: notes({
      say: 'Comparez rapport vague vs demande structurée.',
      explain: 'La 2e définit des sorties utilisables tout de suite.',
      example: 'Points, risques, actions, tableau.',
      question: 'Lequel est plus facile à mettre dans une réunion de direction ?',
      interaction: 'Le second.',
      time: '2 min',
    }),
    content: () => (
      <>
        <Kicker>Comparaison</Kicker>
        <Title>Demande de rapport : incomplète vs prête à l’emploi</Title>
        <div className="slide-body">
          <Compare
            badLabel="Incomplet"
            goodLabel="Prêt à utiliser"
            bad={<div className="prompt-box">Écris un rapport.</div>}
            good={
              <div className="prompt-box">
                Tu es un assistant spécialisé en rapports professionnels. J’ai un rapport sur
                [sujet] pour la direction de projet. Résume en 5 points, extrais les risques,
                propose 3 actions. Français clair, résultat en tableau.
              </div>
            }
          />
        </div>
      </>
    ),
  },
  {
    id: '07-text-email-meeting',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'light',
    notes: notes({
      say: 'E-mails et comptes rendus : usages les plus fréquents.',
      explain: 'Ton, destinataire, objectif.',
      example: 'CR : décisions + responsable + date.',
      question: 'Lequel est le plus proche de votre journée ?',
      interaction: 'Choisissez un cas pour la pratique.',
      time: '2 min',
    }),
    content: () => (
      <>
        <Kicker>Exemples bureau</Kicker>
        <Title>E-mails et comptes rendus</Title>
        <div className="slide-body stack">
          <Compare
            badLabel="E-mail vague"
            goodLabel="E-mail clair"
            bad={<div className="prompt-box">Écris un e-mail au client.</div>}
            good={
              <div className="prompt-box">
                Écris un e-mail poli à un client pour annoncer le report de la livraison du
                jeudi au dimanche, à cause d’un contrôle qualité supplémentaire, avec une
                courte réassurance, max ~120 mots.
              </div>
            }
          />
          <Compare
            badLabel="CR vague"
            goodLabel="CR actionnable"
            bad={<div className="prompt-box">Résume la réunion.</div>}
            good={
              <div className="prompt-box">
                Résume le compte rendu en : décisions, tâches (responsable + date), points
                ouverts. Sortie en tableau simple.
              </div>
            }
          />
        </div>
      </>
    ),
  },
  {
    id: '07-text-more',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'navy',
    notes: notes({
      say: 'Autres patterns rapidement.',
      explain: 'Même logique : objectif + limites + format.',
      example: 'Excel : colonnes + question analytique.',
      question: 'Lequel voulez-vous appliquer sur un vrai cas ?',
      interaction: 'Notez pour la fin.',
      time: '2.5 min',
    }),
    content: () => (
      <>
        <Kicker>Autres cas fréquents</Kicker>
        <Title>Traduction, données, fiche de poste, présentation</Title>
        <div className="slide-body">
          <div className="grid-2">
            <Card>
              <h3>Traduction</h3>
              <p className="tiny">Faible : traduis ça</p>
              <p>Mieux : traduis en français professionnel clair, garde les termes techniques en anglais entre parenthèses si besoin.</p>
            </Card>
            <Card>
              <h3>Excel / données</h3>
              <p className="tiny">Faible : analyse le fichier</p>
              <p>Mieux : voici les colonnes […]. Donne les tendances clés, signale les valeurs manquantes, propose un graphique adapté.</p>
            </Card>
            <Card>
              <h3>Fiche de poste</h3>
              <p className="tiny">Faible : écris un job description</p>
              <p>Mieux : pour un poste […] dans une société d’ingénierie : missions, exigences, style clair, une page max.</p>
            </Card>
            <Card>
              <h3>Présentation</h3>
              <p className="tiny">Faible : fais un slide deck</p>
              <p>Mieux : propose 8 slides sur [sujet] pour un public non technique, avec titre + une idée par slide.</p>
            </Card>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '07-image-prompt',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'mint',
    steps: 2,
    notes: notes({
      say: 'Image = langage visuel structuré.',
      explain: 'Sujet, lieu, style, lumière, ratio.',
      example: 'Bureau technique, lumière naturelle, 16:9.',
      question: 'Que manque « photo d’un bureau moderne » ?',
      interaction: 'Angle, style, usage.',
      time: '2.5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Consignes images</Kicker>
        <Title>Décrivez la scène comme pour un photographe ou un designer</Title>
        <div className="slide-body">
          <Formula
            parts={['SUBJECT', 'ENVIRONMENT', 'STYLE', 'COMPOSITION', 'LIGHTING', 'CAMERA', 'FORMAT']}
          />
          <Reveal show={step >= 2}>
            <Compare
              badLabel="Description trop courte"
              goodLabel="Description utilisable"
              bad={<div className="prompt-box">Photo d’un bureau moderne.</div>}
              good={
                <div className="prompt-box">
                  Crée une photo réaliste d’un bureau d’ingénierie moderne, table de réunion en
                  bois, écrans avec plans, lumière naturelle par de grandes fenêtres, style
                  corporate photography, cadrage large, 16:9, sans texte dans l’image.
                </div>
              }
            />
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '07-video-prompt',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'light',
    notes: notes({
      say: 'Vidéo = action + caméra.',
      explain: 'Ne décrivez pas seulement une image fixe.',
      example: 'Ingénieur entre sur le site, caméra suit.',
      question: 'Quand la vidéo vaut-elle le temps de l’équipe ?',
      interaction: 'Seulement si besoin de communication clair.',
      time: '1.5 min',
    }),
    content: () => (
      <>
        <Kicker>Consignes vidéo</Kicker>
        <Title>Précisez sujet, action, mouvement de caméra et style</Title>
        <div className="slide-body">
          <div className="tag-list">
            {['Subject', 'Action', 'Environment', 'Camera move', 'Lighting', 'Style'].map((t) => (
              <span key={t} className="tag en">
                {t}
              </span>
            ))}
          </div>
          <div className="prompt-box">
            Plan calme d’un ingénieur qui entre sur un chantier le matin, caméra qui avance
            lentement derrière lui, lumière du soleil matinal, style realistic corporate documentary.
          </div>
        </div>
      </>
    ),
  },
  {
    id: '07-audio-prompt',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'navy',
    notes: notes({
      say: 'Audio : locuteur, ton, vitesse, contexte.',
      explain: 'Utile pour vidéos de présentation.',
      example: 'Ton calme et confiant.',
      question: 'Avez-vous souvent besoin de voix-off ?',
      interaction: 'Sinon, passez.',
      time: '1 min',
    }),
    content: () => (
      <>
        <Kicker>Consignes audio</Kicker>
        <Title>Le ton et l’usage comptent plus que le jargon</Title>
        <div className="slide-body">
          <div className="grid-3">
            {['Speaker', 'Tone', 'Emotion', 'Speed', 'Language', 'Context'].map((t) => (
              <Card key={t}>
                <h3 className="en">{t}</h3>
              </Card>
            ))}
          </div>
          <div className="prompt-box">
            Voix d’homme professionnelle, ton calme et confiant, vitesse moyenne, adaptée à une
            courte vidéo de présentation d’entreprise.
          </div>
        </div>
      </>
    ),
  },
  {
    id: '07-automation-flow',
    chapter: 'Écrire les consignes',
    chapterId: '07',
    theme: 'dark',
    steps: 6,
    notes: notes({
      say: 'IA dans un parcours, pas seulement un chat.',
      explain: 'La consigne devient une étape d’automatisation.',
      example: 'Classer un e-mail puis résumer.',
      question: 'Quelle étape répétitive peut être aidée par l’IA ?',
      interaction: 'Préparez un cas pour la fin.',
      time: '2 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Quand l’IA entre dans un flux de travail</Kicker>
        <Title>Exemple : d’un e-mail entrant à une alerte de suivi</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'New email' : '…',
              step >= 2 ? 'AI reads' : '…',
              step >= 3 ? 'Classifies' : '…',
              step >= 4 ? 'Extracts' : '…',
              step >= 5 ? 'Summary' : '…',
              step >= 6 ? 'Notify' : '…',
            ]}
          />
          <Reveal show={step >= 6}>
            <p className="muted">
              Zapier, Make ou Copilot peuvent relier ces étapes, avec revue humaine quand il faut.
            </p>
          </Reveal>
        </div>
      </>
    ),
  },
]
