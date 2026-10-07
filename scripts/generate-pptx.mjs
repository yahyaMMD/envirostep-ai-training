/**
 * Generate Envirostep AI Training PowerPoint (French).
 * Run: npm run pptx
 */
import PptxGenJS from 'pptxgenjs'
import { mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'output')
const outPath = join(outDir, 'Envirostep-AI-Training-FR.pptx')
mkdirSync(outDir, { recursive: true })

const C = {
  navy: '0B1D36', teal: '2DD4BF', sky: '38BDF8', white: 'FFFFFF',
  light: 'F8FAFC', mint: 'F0FDFA', text: '0F172A', muted: '64748B', cardDark: '122847',
}

const pptx = new PptxGenJS()
pptx.defineLayout({ name: 'WIDE', width: 13.333, height: 7.5 })
pptx.layout = 'WIDE'
pptx.author = 'Envirostep SARL'
pptx.title = 'Formation pratique à l’intelligence artificielle'
pptx.subject = 'AI training presentation — French'

let slideNo = 0
const font = 'Arial'

function darkBg(s) {
  s.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: C.navy } })
  s.addShape(pptx.shapes.OVAL, { x: 9.8, y: -1.4, w: 5.2, h: 3.6, fill: { color: C.sky, transparency: 88 } })
}
function lightBg(s, mint = false) {
  s.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: mint ? C.mint : C.light } })
}
function footer(s, chapter, dark = false) {
  slideNo += 1
  s.addText(`Envirostep SARL  ·  ${chapter}  ·  ${slideNo}`, {
    x: 0.5, y: 7.12, w: 12.3, h: 0.26, fontSize: 10,
    color: dark ? '94A3B8' : C.muted, fontFace: font, align: 'left',
  })
}
function kicker(s, text, dark = false) {
  s.addText(text, {
    x: 0.55, y: 0.32, w: 12.2, h: 0.32, fontSize: 13, bold: true,
    color: dark ? C.teal : '0F766E', fontFace: font, align: 'left',
  })
}
function title(s, text, dark = false, y = 0.7) {
  if (!text) return
  s.addText(text, {
    x: 0.55, y, w: 12.2, h: 0.95, fontSize: 26, bold: true,
    color: dark ? C.white : C.text, fontFace: font, align: 'left', valign: 'top',
  })
}
function body(s, text, dark = false, y = 1.8, h = 1.35) {
  if (!text) return
  s.addText(text, {
    x: 0.55, y, w: 12.2, h, fontSize: 15,
    color: dark ? 'E2E8F0' : C.text, fontFace: font, align: 'left', valign: 'top',
  })
}
function cards(s, items, { y = 3.2, dark = false, cols = 3, h = 2.3 } = {}) {
  const gap = 0.22, usable = 12.2, w = (usable - gap * (cols - 1)) / cols
  items.forEach((item, i) => {
    const col = i % cols, row = Math.floor(i / cols)
    const x = 0.55 + col * (w + gap), yy = y + row * (h + 0.18)
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x, y: yy, w, h, fill: { color: dark ? C.cardDark : C.white },
      rectRadius: 0.1, line: { color: dark ? '1E3A5F' : 'E2E8F0', width: 1 },
    })
    s.addText(item.title, {
      x: x + 0.14, y: yy + 0.18, w: w - 0.28, h: 0.38, fontSize: 14, bold: true,
      color: dark ? C.teal : '0F766E', fontFace: font, align: 'left',
    })
    if (item.body) {
      s.addText(item.body, {
        x: x + 0.14, y: yy + 0.58, w: w - 0.28, h: h - 0.75, fontSize: 12,
        color: dark ? 'CBD5E1' : C.text, fontFace: font, align: 'left', valign: 'top',
      })
    }
  })
}
function flow(s, nodes, y = 3.5, dark = false) {
  const w = Math.min(2.15, 11.5 / nodes.length - 0.35), gap = 0.32
  const totalW = nodes.length * w + (nodes.length - 1) * gap
  let x = (13.333 - totalW) / 2
  nodes.forEach((node, i) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x, y, w, h: 0.68, fill: { color: dark ? C.cardDark : 'EFF6FF' },
      line: { color: dark ? C.sky : 'BFDBFE', width: 1.4 }, rectRadius: 0.08,
    })
    s.addText(node, {
      x, y, w, h: 0.68, fontSize: 12, bold: true, color: dark ? C.white : '1E3A8A',
      fontFace: font, align: 'center', valign: 'middle',
    })
    if (i < nodes.length - 1) {
      s.addText('→', { x: x + w, y, w: gap, h: 0.68, fontSize: 16, color: dark ? C.teal : '0F766E', align: 'center', valign: 'middle', fontFace: font })
    }
    x += w + gap
  })
}
function compare(s, bad, good, y = 2.7) {
  const w = 5.9
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y, w, h: 3.6, fill: { color: 'FFF1F2' }, line: { color: 'FECDD3', width: 1 }, rectRadius: 0.1 })
  s.addText('Faible / incomplet', { x: 0.75, y: y + 0.18, w: w - 0.4, h: 0.35, fontSize: 14, bold: true, color: 'BE123C', fontFace: font, align: 'left' })
  s.addText(bad, { x: 0.75, y: y + 0.65, w: w - 0.4, h: 2.7, fontSize: 13, color: C.text, fontFace: font, align: 'left', valign: 'top' })
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.85, y, w, h: 3.6, fill: { color: 'ECFDF5' }, line: { color: 'A7F3D0', width: 1 }, rectRadius: 0.1 })
  s.addText('Fort / clair', { x: 7.05, y: y + 0.18, w: w - 0.4, h: 0.35, fontSize: 14, bold: true, color: '065F46', fontFace: font, align: 'left' })
  s.addText(good, { x: 7.05, y: y + 0.65, w: w - 0.4, h: 2.7, fontSize: 12, color: C.text, fontFace: font, align: 'left', valign: 'top' })
}
function divider(num, titleAr, subtitle, chapter) {
  const s = pptx.addSlide(); darkBg(s)
  s.addText(num, { x: 0.55, y: 1.7, w: 12.2, h: 1.1, fontSize: 68, bold: true, color: C.teal, transparency: 35, fontFace: font, align: 'left' })
  s.addText(titleAr, { x: 0.55, y: 3.1, w: 12.2, h: 0.85, fontSize: 28, bold: true, color: C.white, fontFace: font, align: 'left' })
  s.addText(subtitle, { x: 0.55, y: 4.05, w: 12.2, h: 1.0, fontSize: 15, color: 'CBD5E1', fontFace: font, align: 'left' })
  footer(s, chapter, true)
}
function darkSlide(chapter, kick, ttl, txt, extra) {
  const s = pptx.addSlide(); darkBg(s); kicker(s, kick, true); title(s, ttl, true)
  if (txt) body(s, txt, true); if (extra) extra(s, true); footer(s, chapter, true)
}
function lightSlide(chapter, kick, ttl, txt, extra, mint = false) {
  const s = pptx.addSlide(); lightBg(s, mint); kicker(s, kick); title(s, ttl)
  if (txt) body(s, txt); if (extra) extra(s, false); footer(s, chapter)
}

// ===== CONTENT FR =====
darkSlide('Ouverture', 'Envirostep SARL',
  'Formation pratique à l’intelligence artificielle au travail',
  'Nous allons comprendre simplement ces outils et comment ils fonctionnent, puis apprendre à les utiliser clairement et en sécurité : rapports, e-mails, résumés, analyse. Objectif : savoir quand les utiliser, comment demander un bon résultat, et quand vérifier avant une décision importante.')

lightSlide('Ouverture', 'Parcours', 'Comment organisons-nous le temps ?',
  'Idées de base → outils → consignes → application sur vos cas réels.',
  (s) => cards(s, [
    { title: '01–03', body: 'Ouverture · Qu’est-ce que l’IA · Comment ça marche' },
    { title: '04–06', body: 'Modèles · Types d’outils · Donner des consignes' },
    { title: '07–10', body: 'Prompts · Usages · Exercices · Vos cas concrets' },
  ], { y: 3.4, h: 2.1 }))

darkSlide('Ouverture', 'Avant de commencer',
  'Utilisez-vous déjà des outils d’IA au travail ?', null,
  (s) => cards(s, [
    { title: 'Oui', body: 'De temps en temps, ou régulièrement sur certaines tâches.' },
    { title: 'Pas encore', body: 'Vous en avez entendu parler, mais ce n’est pas encore dans votre routine.' },
  ], { y: 2.5, cols: 2, dark: true, h: 2.3 }))

lightSlide('Ouverture', 'Outils connus', 'Quels outils connaissez-vous ou utilisez-vous ?',
  'ChatGPT · Gemini · Claude · Microsoft Copilot · Canva · Midjourney · NotebookLM · Perplexity · Autres', null, true)

lightSlide('Ouverture', 'Type d’usage', 'Pour quelles tâches les utilisez-vous — ou le feriez-vous ?',
  'Rédaction · Traduction · Recherche · Analyse de fichiers · Excel · E-mails · Présentations · Images · Idées · Programmation · Automatisation')

darkSlide('Ouverture', 'Si vous n’avez pas encore commencé',
  'Pas de problème — c’est un bon point de départ',
  'À la fin, nous prendrons des cas de votre travail et nous les ferons ensemble, étape par étape.')

lightSlide('Ouverture', 'Résultats attendus', 'Trois résultats concrets', null,
  (s) => cards(s, [
    { title: 'Comprendre', body: 'Vision claire de ce qui se passe avec ChatGPT ou Copilot, sans détail inutile.' },
    { title: 'Choisir', body: 'Distinguer les types d’outils et savoir quand chaque famille est utile.' },
    { title: 'Utiliser avec méthode', body: 'Consignes claires, vérification des résultats, protection des données sensibles.' },
  ], { y: 2.6, h: 2.9 }), true)

darkSlide('Ouverture', 'Critère de la session',
  'Comprendre l’IA assez pour l’utiliser avec conscience, en sécurité et avec efficacité',
  'Pas devenir expert en sa construction — savoir l’utiliser intelligemment au travail.')

divider('02', 'Que veut dire « intelligence artificielle » au travail ?',
  'Ce n’est pas un seul logiciel. C’est un large domaine de techniques.', "Qu'est-ce que l'IA ?")

darkSlide("Qu'est-ce que l'IA ?", 'Idée clé',
  'L’IA n’est pas un seul outil : c’est un ensemble de domaines',
  'Machine Learning · Deep Learning · Generative AI · Computer Vision · NLP · Robotics · Speech · Recommendation · AI Agents · Automation')

lightSlide("Qu'est-ce que l'IA ?", 'Focus',
  'Le domaine est large — cette session vise la partie utilisable tout de suite',
  'Vous n’avez pas besoin de tout étudier. Il suffit de comprendre les idées qui améliorent vos demandes et clarifient les limites.')

darkSlide("Qu'est-ce que l'IA ?", 'Couches',
  'Derrière chaque outil prêt à l’emploi, plusieurs couches', null,
  (s) => flow(s, ['Theory', 'Algorithms', 'Models', 'Systems', 'Apps', 'Tools'], 3.3, true))

darkSlide("Qu'est-ce que l'IA ?", 'Exemples connus',
  'Des plateformes prêtes à l’emploi, avec des modèles derrière', null,
  (s) => cards(s, [
    { title: 'ChatGPT', body: 'OpenAI — tâches générales et productivité' },
    { title: 'Gemini', body: 'Google — souvent utile avec Google Workspace' },
    { title: 'Claude', body: 'Anthropic — analyse et longs textes' },
    { title: 'Copilot', body: 'IA dans les produits Microsoft' },
    { title: 'Midjourney', body: 'Images à partir d’une description' },
    { title: 'Perplexity', body: 'Recherche avec sources plus visibles' },
  ], { y: 2.4, cols: 3, dark: true, h: 1.9 }))

divider('03', 'Comment fonctionnent les outils d’IA modernes ?',
  'Assez simple pour le management, assez juste pour éviter les idées fausses.', 'Comment ça marche ?')

darkSlide('Comment ça marche ?', 'Vue d’ensemble',
  'Que se passe-t-il entre la demande et le résultat ?',
  'Vous envoyez une demande → le modèle traite → un résultat apparaît → à vérifier avant une décision importante.',
  (s) => flow(s, ['USER', 'INPUT', 'AI MODEL', 'OUTPUT'], 4.5, true))

lightSlide('Comment ça marche ?', 'Idée fausse fréquente',
  'Est-ce que ChatGPT cherche seulement dans une base et renvoie la phrase la plus proche ?',
  'C’est plus précis. Un LLM (Large Language Model) est entraîné à l’avance. Il génère une nouvelle réponse à partir de schémas appris — pas forcément en recopiant une phrase stockée.',
  null, true)

darkSlide('Comment ça marche ?', 'Analogie (pas littérale)',
  'Il s’appuie sur des schémas appris pour proposer une réponse adaptée',
  'Comme quelqu’un qui a beaucoup lu : il ne recopie pas toujours une phrase exacte. Le modèle fait quelque chose de comparable statistiquement — sans garantie de vérité.')

lightSlide('Comment ça marche ?', 'Training vs Inference',
  'Entraînement (avant) puis usage / génération (votre quotidien)', null,
  (s) => {
    flow(s, ['Data', 'Training', 'Parameters', 'Patterns'], 2.8)
    flow(s, ['Prompt', 'Model', 'Prediction', 'Answer'], 4.4)
  })

lightSlide('Comment ça marche ?', 'Tokens & Embeddings',
  'Le texte est découpé en tokens, puis représenté en nombres (vecteurs)',
  'Exemple : « Quelle est la capitale de la Russie ? » → tokens → traitement.\nLes sens proches sont souvent proches dans cette représentation (chat ≈ chien ≠ voiture). Simplification pour comprendre seulement.')

lightSlide('Comment ça marche ?', 'Qualité des données',
  'Plus de données ≠ automatiquement une meilleure IA', null,
  (s) => compare(s, 'Bruit, doublons, infos fausses, biais', 'Exactitude, fraîcheur utile, diversité, exemples clairs\n\nLa qualité compte autant que le volume.'))

divider('04', 'Modèles de langage, savoir général, et vos sources',
  'Quand la réponse vient du modèle ? Quand faut-il vos documents ou une source à jour ?', 'Modèles et systèmes')

lightSlide('Modèles et systèmes', 'AI Model & LLM',
  'Un système entraîné sur des données pour des tâches précises',
  'LLM = grand modèle de langage, base de beaucoup d’outils texte. Modèle ≠ plateforme entière. Une plateforme peut regrouper plusieurs modèles.',
  (s) => flow(s, ['DATA', 'LEARNING', 'MODEL', 'QUESTION', 'RESULT'], 4.3))

darkSlide('Modèles et systèmes', 'LLM vs RAG',
  'Le savoir général du modèle n’est pas une recherche dans vos documents', null,
  (s) => cards(s, [
    { title: 'LLM', body: 'Génère à partir de schémas appris. Utile pour le général et la rédaction. Ne connaît pas vos fichiers internes automatiquement.' },
    { title: 'RAG', body: 'Retrouve des infos dans des sources choisies, puis formule la réponse. Utile pour le savoir interne.' },
  ], { y: 2.5, cols: 2, dark: true, h: 2.8 }))

lightSlide('Modèles et systèmes', 'Parcours RAG', null, null,
  (s) => flow(s, ['QUESTION', 'EMBEDDING', 'SEARCH', 'DOCS', 'LLM', 'ANSWER'], 3.5))

lightSlide('Modèles et systèmes', 'Trois exemples', null, null,
  (s) => cards(s, [
    { title: 'Savoir général', body: 'Capitale de la Russie ? → schémas du modèle.' },
    { title: 'Savoir interne', body: 'Politique de congés ? → documents internes / RAG.' },
    { title: 'Info en temps réel', body: 'Météo aujourd’hui à Alger ? → source à jour (API).' },
  ], { y: 2.2, h: 3.2 }), true)

darkSlide('Modèles et systèmes', 'Coût et confidentialité',
  'Derrière chaque réponse avancée : coût de calcul. Avant d’envoyer une info : lisez la politique',
  'Les offres gratuites sont limitées. Les politiques de données changent selon les services.\nRègle : ne pas envoyer d’infos sensibles ou de données clients sans validation.')

divider('05', 'Types d’outils d’IA et comment choisir',
  'Pas besoin de retenir tous les noms — connaître la bonne famille pour la tâche.', "Types d'outils")

darkSlide("Types d'outils", 'Carte pratique',
  'Six familles principales', null,
  (s) => cards(s, [
    { title: 'Texte', body: 'Rédaction, résumé, traduction' },
    { title: 'Images', body: 'Visuels et présentations' },
    { title: 'Vidéo', body: 'Scènes courtes' },
    { title: 'Audio', body: 'Voix et transcription' },
    { title: 'Automatisation', body: 'Enchaîner des étapes' },
    { title: 'Recherche', body: 'Sources et documents' },
  ], { y: 2.4, cols: 3, dark: true, h: 1.8 }))

lightSlide("Types d'outils", 'Texte · Images · Audio · Automation · Research',
  'ChatGPT, Claude, Gemini, Copilot · Midjourney, Firefly, Canva · ElevenLabs · Zapier, Make · Perplexity, NotebookLM',
  'Choisissez selon la tâche, les droits, la confidentialité et l’intégration aux systèmes de l’entreprise.')

divider('06', 'Comment guider les outils avec des consignes claires ?',
  'La qualité du résultat dépend de la clarté de la tâche, du contexte et du format.', 'Parler aux outils')

lightSlide('Parler aux outils', 'Prompt',
  'Les consignes que vous écrivez décident de l’utilité du résultat',
  'Un Prompt n’est pas magique. C’est un briefing : rôle, contexte, tâche exacte, format attendu.',
  null, true)

lightSlide('Parler aux outils', 'Même tâche, deux niveaux de clarté', null, null,
  (s) => compare(s, 'Écris-moi un e-mail.',
    'Écris un e-mail professionnel court au chef de projet pour annoncer un retard de deux jours sur le rapport, ton respectueux et direct, avec nouvelle date et raison brève.'))

divider('07', 'Comment écrire des consignes professionnelles efficaces ?',
  'Un cadre simple pour transformer une demande vague en briefing clair.', 'Écrire les consignes')

darkSlide('Écrire les consignes', 'Cadre',
  'ROLE + CONTEXT + TASK + CONSTRAINTS + FORMAT + EXAMPLES', null,
  (s) => flow(s, ['ROLE', 'CONTEXT', 'TASK', 'CONSTRAINTS', 'FORMAT', 'EXAMPLES'], 3.4, true))

lightSlide('Écrire les consignes', 'Comparaison — rapport', null, null,
  (s) => compare(s, 'Écris un rapport.',
    'Tu es un assistant spécialisé en rapports. J’ai un rapport sur [sujet] pour la direction. Résume en 5 points, extrais les risques, propose 3 actions. Français clair, résultat en tableau.'),
  true)

lightSlide('Écrire les consignes', 'Autres cas', null, null,
  (s) => cards(s, [
    { title: 'E-mail', body: 'Destinataire, motif, ton, longueur, prochaine étape.' },
    { title: 'Compte rendu', body: 'Décisions · tâches (responsable + date) · points ouverts.' },
    { title: 'Excel', body: 'Colonnes + question analytique + valeurs manquantes.' },
    { title: 'Présentation', body: 'Nombre de slides, public, titre + une idée par slide.' },
  ], { y: 2.2, cols: 2, h: 1.9 }))

divider('08', 'Où l’IA apporte une vraie valeur au travail ?',
  'Accélérer brouillons, organisation et première analyse — la décision reste humaine.', 'Usage au travail')

lightSlide('Usage au travail', 'Scénarios fréquents', null, null,
  (s) => cards(s, [
    { title: 'Rapports', body: 'Organiser des notes, brouillon, points critiques.' },
    { title: 'Clients', body: 'E-mails clairs sur délais et mises à jour.' },
    { title: 'Réunions', body: 'Comptes rendus, décisions, responsabilités.' },
    { title: 'Présentations', body: 'Structure des slides et messages courts.' },
  ], { y: 2.2, cols: 2, h: 2.0 }))

divider('09', 'Exercices guidés',
  'D’abord des exercices courts, puis vos cas réels.', 'Exercices guidés')

lightSlide('Exercices guidés', 'Méthode',
  'Proposer → Discuter → Améliorer → Exécuter → Évaluer', null,
  (s) => flow(s, ['Proposer', 'Discuter', 'Améliorer', 'Exécuter', 'Évaluer'], 3.5))

lightSlide('Exercices guidés', 'Exercice 1',
  'Pourquoi cette demande est-elle insuffisante ?', null,
  (s) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 2.5, y: 2.6, w: 8.3, h: 1.2, fill: { color: C.navy }, rectRadius: 0.1 })
    s.addText('Écris-moi un rapport sur le projet.', {
      x: 2.7, y: 2.6, w: 7.9, h: 1.2, fontSize: 20, bold: true, color: C.white, fontFace: font, align: 'center', valign: 'middle',
    })
    body(s, 'Public ? Étape du projet ? Décisions attendues ? Format du résultat ?', false, 4.2, 1.2)
  })

lightSlide('Exercices guidés', 'Exercices 2–5', null, null,
  (s) => cards(s, [
    { title: '2) E-mail', body: 'Annoncer un changement de date à un client.' },
    { title: '3) Document', body: 'Résumé · tâches · risques · tableau · prochaines étapes.' },
    { title: '4) Image', body: 'Couverture de présentation : sujet, style, lumière, ratio.' },
    { title: '5) Parcours', body: 'Tâche répétitive : où l’IA aide, où l’humain décide.' },
  ], { y: 2.2, cols: 2, h: 2.0 }), true)

divider('10', 'Application directe sur vos cas de travail',
  'Vous proposez la tâche. Ensemble : consigne → exécution → revue.', 'Vos cas concrets')

lightSlide('Vos cas concrets', 'Règles de la pratique', null, null,
  (s) => cards(s, [
    { title: '1) Vous choisissez', body: 'Tâche réelle : e-mail, rapport, résumé, slides…' },
    { title: '2) On construit la consigne', body: 'Objectif, public, limites, format.' },
    { title: '3) On exécute', body: 'Bon outil selon la tâche.' },
    { title: '4) On revoit', body: 'Ce qui marche, à corriger, à vérifier humainement.' },
  ], { y: 2.2, cols: 2, h: 2.0 }))

lightSlide('Vos cas concrets', 'Collecte',
  'Quelles tâches voulez-vous traiter maintenant avec l’IA ?',
  'Exemple : reformuler un message client · résumer un rapport terrain · notes de réunion → tâches · structure de présentation',
  null, true)

darkSlide('Vos cas concrets', 'Cadre à emporter',
  'ASK · CHECK · REFINE · USE · PROTECT',
  'Demander clairement → vérifier → améliorer → utiliser ce qui est utile → protéger les données.\n\nProchaine étape : une vraie tâche cette semaine avec la même méthode.')

darkSlide('Vos cas concrets', 'Envirostep SARL',
  'On applique sur vos cas — puis vous gardez ce qui sert votre travail',
  'L’objectif n’est pas de devenir expert en construction de l’IA, mais de savoir l’utiliser avec conscience et discipline professionnelle.')

await pptx.writeFile({ fileName: outPath })
console.log(`Created: ${outPath}`)
console.log(`Slides: ${slideNo}`)
