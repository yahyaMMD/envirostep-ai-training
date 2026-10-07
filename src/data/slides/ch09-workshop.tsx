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

export const ch09Slides: SlideDef[] = [
  {
    id: '09-divider',
    chapter: 'Exercices guidés',
    chapterId: '09',
    theme: 'dark',
    notes: notes({
      say: 'Courts exercices avant les cas libres.',
      explain: 'Fixer la méthode d’amélioration.',
      example: 'Améliorer une demande faible, puis cas bureau.',
      question: 'Travail individuel ou en binôme ?',
      interaction: 'Selon la taille du groupe.',
      time: '1 min',
    }),
    content: () => (
      <div className="slide-body">
        <p className="section-num en">09</p>
        <Title>Exercices guidés pour fixer la bonne méthode</Title>
        <Subtitle>
          D’abord des exercices courts ensemble, puis une application directe sur vos cas.
        </Subtitle>
      </div>
    ),
  },
  {
    id: '09-method',
    chapter: 'Exercices guidés',
    chapterId: '09',
    theme: 'mint',
    steps: 5,
    notes: notes({
      say: 'Expliquez le rythme avant de commencer.',
      explain: 'Pas d’exécution avant d’améliorer la consigne.',
      example: 'Proposer → discuter → améliorer → exécuter → évaluer.',
      question: 'Le rythme est-il clair ?',
      interaction: 'Validation rapide puis démarrez.',
      time: '1 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Méthode</Kicker>
        <Title>Cinq étapes à chaque exercice</Title>
        <div className="slide-body">
          <Flow
            nodes={[
              step >= 1 ? 'Proposer' : '…',
              step >= 2 ? 'Discuter' : '…',
              step >= 3 ? 'Améliorer' : '…',
              step >= 4 ? 'Exécuter' : '…',
              step >= 5 ? 'Évaluer' : '…',
            ]}
          />
        </div>
      </>
    ),
  },
  {
    id: '09-ex1-weak',
    chapter: 'Exercices guidés',
    chapterId: '09',
    theme: 'light',
    notes: notes({
      say: 'Ne donnez pas la solution tout de suite.',
      explain: 'Manquent contexte, objectif, format, limites.',
      example: 'Rapport sur quel projet ? Pour qui ? Quel livrable ?',
      question: 'Qu’est-ce qui manque pour une bonne exécution ?',
      interaction: '2 min de discussion puis partage.',
      time: '4 min',
    }),
    content: () => (
      <>
        <Kicker>Exercice 1 — améliorer la consigne</Kicker>
        <Title>Pourquoi cette demande est-elle insuffisante pour une tâche pro ?</Title>
        <div className="slide-body">
          <div className="prompt-box" style={{ fontSize: '1.35rem' }}>
            Écris-moi un rapport sur le projet.
          </div>
          <Card>
            <p>
              Discutez vite : quel public ? Quelle étape du projet ? Quelles décisions
              attendues ? Sous quelle forme voulez-vous le résultat ?
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '09-ex1-improve',
    chapter: 'Exercices guidés',
    chapterId: '09',
    theme: 'navy',
    steps: 2,
    notes: notes({
      say: 'Construisez la version finale avec le groupe.',
      explain: 'Écrivez au tableau si possible.',
      example: 'Rôle + projet + public + points + risques + tableau.',
      question: 'Qui propose la phrase de contexte ?',
      interaction: 'Composez ensemble puis testez si le temps le permet.',
      time: '5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>On construit ensemble</Kicker>
        <Title>Ce qui manquait — puis la version améliorée</Title>
        <div className="slide-body">
          <div className="tag-list">
            {['Context', 'Role', 'Objective', 'Format', 'Constraints'].map((t) => (
              <span key={t} className="pill en">
                {t}
              </span>
            ))}
          </div>
          <Reveal show={step >= 2}>
            <div className="prompt-box">
              Tu es un assistant spécialisé en rapports professionnels. Projet : [nom/étape].
              Public : direction de projet. Résume la situation en 5 points, cite les risques
              principaux, propose 3 prochaines étapes. Français clair, résultat en tableau prêt
              à coller dans une présentation.
            </div>
          </Reveal>
        </div>
      </>
    ),
  },
  {
    id: '09-ex2-email',
    chapter: 'Exercices guidés',
    chapterId: '09',
    theme: 'mint',
    notes: notes({
      say: 'Scénario changement de date client.',
      explain: 'Demandez d’écrire la consigne puis comparez.',
      example: 'Ton rassurant + motif court + nouvelle date.',
      question: 'Que faut-il éviter dans ce type de message ?',
      interaction: 'Blâme excessif ou détails internes inutiles.',
      time: '5 min',
    }),
    content: () => (
      <>
        <Kicker>Exercice 2 — e-mail professionnel</Kicker>
        <Title wide>Rédiger une consigne claire pour annoncer un changement de date à un client</Title>
        <div className="slide-body">
          <Card>
            <p>
              Scénario : livraison prévue jeudi, reportée à dimanche pour un contrôle qualité
              supplémentaire. Écrivez une consigne qui produit un e-mail adapté en ton,
              longueur et réassurance.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '09-ex3-doc',
    chapter: 'Exercices guidés',
    chapterId: '09',
    theme: 'light',
    notes: notes({
      say: 'Document non sensible si possible.',
      explain: 'Même fichier, plusieurs demandes en chaîne.',
      example: 'Résumé → tâches → risques → tableau → prochaines étapes.',
      question: 'Quelle étape ne peut pas être totalement déléguée ?',
      interaction: 'Vérification et décision.',
      time: '6 min',
    }),
    content: () => (
      <>
        <Kicker>Exercice 3 — analyser un document</Kicker>
        <Title>Un même document peut servir plusieurs demandes successives</Title>
        <div className="slide-body">
          <div className="grid-2">
            {[
              '1) Résumé exécutif',
              '2) Extraire les tâches de suivi',
              '3) Identifier les risques',
              '4) Organiser en tableau',
              '5) Proposer les prochaines étapes',
            ].map((x) => (
              <Card key={x}>
                <h3>{x}</h3>
              </Card>
            ))}
          </div>
          <Pill>Préférez un texte d’exemple non sensible en session collective</Pill>
        </div>
      </>
    ),
  },
  {
    id: '09-ex4-image',
    chapter: 'Exercices guidés',
    chapterId: '09',
    theme: 'navy',
    notes: notes({
      say: 'Description visuelle pour supports société si utile.',
      explain: 'Appliquez SUBJECT… FORMAT.',
      example: 'Couverture de présentation sans texte dans l’image.',
      question: 'Quel style visuel convient à votre communication ?',
      interaction: 'Mots : clair, terrain, professionnel, calme.',
      time: '4 min',
    }),
    content: () => (
      <>
        <Kicker>Exercice 4 — description visuelle</Kicker>
        <Title>Préparer une consigne pour une image pro (couverture ou communication interne)</Title>
        <div className="slide-body">
          <Card>
            <p>
              Définissez ensemble : sujet, lieu, style, lumière, ratio. Évitez logos ou textes
              inutiles dans l’image si ce n’est pas voulu.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: '09-ex5-automation',
    chapter: 'Exercices guidés',
    chapterId: '09',
    theme: 'light',
    steps: 2,
    notes: notes({
      say: 'Processus répétitif puis schéma simple.',
      explain: 'Pas besoin d’automatiser tout aujourd’hui.',
      example: 'Demandes entrantes → classement → résumé quotidien.',
      question: 'Quelle partie peut être aidée par l’IA, laquelle reste humaine ?',
      interaction: 'Fixez le principe de revue humaine.',
      time: '5 min',
    }),
    content: ({ step }) => (
      <>
        <Kicker>Exercice 5 — imaginer un parcours</Kicker>
        <Title>L’IA peut-elle prendre une partie d’une tâche répétitive chez vous ?</Title>
        <div className="slide-body">
          <Card>
            <p>
              Choisissez une tâche hebdomadaire répétée, puis proposez où l’aide automatique
              entre et où l’expérience humaine reste nécessaire.
            </p>
          </Card>
          <Reveal show={step >= 2}>
            <Flow
              nodes={['Input', 'AI assists', 'Human checks', 'Action', 'Done']}
              accentIndex={2}
            />
            <p className="muted">L’aide automatique est une étape — pas un remplacement de la décision finale.</p>
          </Reveal>
        </div>
      </>
    ),
  },
]
