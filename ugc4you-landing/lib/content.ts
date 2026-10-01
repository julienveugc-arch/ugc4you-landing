// Contenus textuels de la landing (repris tels quels de la maquette).
// Noms, villes et tarifs des élèves / avis : placeholders à remplacer par les vraies données.

export const navLinks = [
  { href: "#methode", label: "La méthode" },
  { href: "#programme", label: "Programme" },
  { href: "#avis", label: "Avis" },
  { href: "#prix", label: "Prix" },
  { href: "#faq", label: "FAQ" },
];

export const brands = [
  { src: "/logos/sumeria.png", alt: "Sumeria" },
  { src: "/logos/laposte.png", alt: "La Poste" },
  { src: "/logos/deezer.png", alt: "Deezer" },
  { src: "/logos/orange.png", alt: "Orange" },
  { src: "/logos/credit-agricole.png", alt: "Crédit Agricole" },
  { src: "/logos/maaf.png", alt: "MAAF" },
  { src: "/logos/mae.png", alt: "MAE" },
];

export const problems = [
  {
    n: "01",
    title: "Tu veux des revenus à côté de ton travail",
    text: "Quelques centaines d’euros en plus par mois, sans lâcher ton taf.",
    icon: "💼",
  },
  {
    n: "02",
    title: "Tu ne sais pas comment t’y prendre pour avoir des clients en UGC",
    text: "Tu vois des gens bosser avec des marques sur TikTok. Toi tu sais même pas à qui écrire.",
    icon: "🤷🏻‍♂️",
  },
  {
    n: "03",
    title: "Tu ne sais pas comment te filmer, ni quoi proposer au client",
    text: "Tu te dis qu’il faut du matos, savoir monter, une « offre ». Du coup tu commences pas.",
    icon: "🤳🏻",
  },
];

export const reelVideos = [
  { brand: "Sumeria", meta: "Témoignage · 32 s", platform: "TikTok" },
  { brand: "Deezer", meta: "Unboxing · 41 s", platform: "Reels" },
  { brand: "Orange", meta: "Face cam · 28 s", platform: "Meta Ads" },
];

export const steps = [
  {
    n: "01",
    icon: "📩",
    kicker: "Semaine 1 · Pitcher",
    title: "Trouver les marques et décrocher une réponse",
    text: "Avant de filmer quoi que ce soit, tu vas chercher le client. Youdji, Fiverr, DM, mails : tu cibles les marques qui achètent déjà du UGC et tu leur envoies le message qui reçoit une réponse. Mes templates, mot pour mot.",
    result: "20 marques contactées et tes premières réponses",
  },
  {
    n: "02",
    icon: "✍🏻",
    kicker: "Semaine 2 · Signer",
    title: "Négocier ton prix et signer ton premier contrat",
    text: "Tu fixes ton prix sans trembler, tu réponds à « c’est trop cher », tu cadres le brief, les délais et les droits d’usage. Un contrat simple, propre, signé avant de tourner une seule seconde.",
    result: "Ta grille tarifaire et ton premier contrat signé",
  },
  {
    n: "03",
    icon: "🤳🏻",
    kicker: "Semaine 3 · Filmer",
    title: "Scripter et tourner une vidéo qui vend",
    text: "Maintenant que c’est signé, tu tournes. Script en 4 blocs, hook, lumière, son, cadrage — au téléphone, chez toi. Tu n’as jamais filmé ? Moi non plus au départ. Ça s’apprend en une semaine.",
    result: "Ta première vidéo UGC livrable",
  },
  {
    n: "04",
    icon: "💶",
    kicker: "Semaine 4 · Encaisser",
    title: "Livrer, facturer et enchaîner",
    text: "Tu livres dans les règles, tu factures, tu relances, tu récupères un avis. Puis tu transformes ce premier client en client récurrent et tu montes tes prix.",
    result: "Ta facture payée et ta routine hebdo",
  },
];

export const students = [
  { name: "Léa M.", meta: "23 ans · Lille", price: "180 €" },
  { name: "Karim B.", meta: "29 ans · Paris", price: "250 €" },
  { name: "Manon R.", meta: "26 ans · Nantes", price: "200 €" },
  { name: "Thomas D.", meta: "34 ans · Lyon", price: "300 €" },
  { name: "Inès K.", meta: "22 ans · Marseille", price: "150 €" },
  { name: "Hugo P.", meta: "31 ans · Bordeaux", price: "220 €" },
  { name: "Sarah L.", meta: "27 ans · Toulouse", price: "200 €" },
  { name: "Nathan G.", meta: "25 ans · Rennes", price: "250 €" },
  { name: "Camille V.", meta: "30 ans · Strasbourg", price: "180 €" },
  { name: "Yanis T.", meta: "24 ans · Montpellier", price: "200 €" },
];

export type Review = { quote: string; name: string; meta: string; avatar?: string };

// Colonne gauche (défile vers le haut) et colonne droite (défile vers le bas).
export const reviewsA: Review[] = [
  {
    quote: "250 € le 11e jour. J’ai un iPhone 12 et 40 abonnés dont ma mère. J’ai juste copié-collé les messages du module 6, franchement.",
    name: "Prénom N.",
    meta: "27 ans · Lyon",
  },
  {
    quote: "6 mois à galérer tout seul, 0 contrat. Après la formation : 3 marques en 4 semaines. Je faisais tout dans le mauvais ordre en fait.",
    name: "Prénom N.",
    meta: "31 ans · Toulouse",
  },
  {
    quote: "Il te dit pas « crois en toi », il te dit quoi envoyer et à qui. Je fais ça le soir après le boulot, ça me rapporte 600-900 € par mois.",
    name: "Prénom N.",
    meta: "24 ans · Paris",
  },
];

export const reviewsB: Review[] = [
  {
    quote: "Youdji je savais même pas que ça existait mdr. J’ai fait mon profil comme il montre, première commande 9 jours après.",
    name: "Prénom N.",
    meta: "29 ans · Marseille",
  },
  {
    quote: "Je bradais à 120 € la vidéo. Maintenant 280 €, même clients. Le module négo a payé la formation à lui tout seul.",
    name: "Prénom N.",
    meta: "33 ans · Lille",
  },
  {
    quote: "Je suis en 3×8, j’ai regardé les modules dans le RER. Aujourd’hui j’ai 2 marques qui me recommandent tous les mois.",
    name: "Prénom N.",
    meta: "26 ans · Nantes",
  },
];

export const faqLeft = [
  {
    q: "Je suis pas à l’aise face caméra.",
    a: "Personne ne l’est au début. Le UGC c’est pas de la télé : tu parles à ton téléphone comme à un pote, 30 secondes, tu recommences si tu te plantes. Le module 3 te fait faire ta première vidéo dès le jour 3, et tu verras que ça passe. Moi j’étais rouge sur mes 10 premières vidéos.",
  },
  {
    q: "Mes proches vont me voir faire ça ?",
    a: "Non, et c’est le truc que les gens comprennent pas : tes vidéos sont publiées sur les comptes de la marque, pas sur les tiens. Tu peux faire du UGC sans avoir de compte Instagram et sans que ta famille sache que tu en fais.",
  },
  {
    q: "J’ai jamais filmé ni monté, c’est pour moi ?",
    a: "Oui, c’est fait pour ça. J’ai commencé sans caméra, sans logiciel, sans abonnés. Le module 3 t’apprend à filmer proprement au téléphone en une semaine. Et les marques achètent ta vidéo, pas ton audience.",
  },
  {
    q: "Le UGC c’est pas un truc de filles / de beauté ?",
    a: "C’est ce que tout le monde croit, donc il y a très peu de mecs. Résultat : les marques de sport, tech, finance, auto, food, jeux galèrent à trouver des gars crédibles. J’ai bossé avec Sumeria, Orange, La Poste, Deezer. Zéro rouge à lèvres.",
  },
  {
    q: "Le marché est saturé, non ?",
    a: "Il y a beaucoup de gens qui se disent créateurs UGC. Il y en a très peu qui envoient 20 messages par semaine avec un portfolio propre. La formation te met dans la deuxième catégorie. La concurrence, c’est des gens qui attendent.",
  },
  {
    q: "Pourquoi payer 500 € alors qu’il y a YouTube ?",
    a: "Parce que j’ai fait YouTube pendant 3 mois et signé zéro contrat. Ce qui manque sur YouTube c’est l’ordre, les templates exacts, et quelqu’un qui te dit « ton pitch est nul, réécris-le comme ça ». C’est ce que tu paies. Et la formation est remboursée dès ta troisième vidéo.",
  },
  {
    q: "Il faut un statut, des papiers, les impôts ?",
    a: "Auto-entrepreneur, ça se fait en ligne en 20 minutes, gratuit. Le module 8 te montre l’écran par écran, plus mon contrat type et ma facture type. Tu peux aussi commencer par une plateforme (Youdji, Fiverr) qui gère le paiement pour toi.",
  },
];

export const faqRight = [
  {
    q: "J’ai 30, 35, 40 ans, c’est trop tard ?",
    a: "Au contraire. Les marques cherchent des gens qui ressemblent à leurs clients, et leurs clients ont rarement 19 ans. Un mec de 35 ans qui parle d’une appli bancaire ou d’une assurance, c’est exactement ce qu’elles veulent.",
  },
  {
    q: "Combien de temps par jour ?",
    a: "45 min à 1 h par jour pendant un mois, le soir ou le week-end. Les vidéos font 15-20 min, le reste c’est de la pratique. J’ai tout fait à côté de mon taf.",
  },
  {
    q: "Combien on gagne vraiment ?",
    a: "Un débutant facture 150 à 400 € la vidéo. Après 3 mois, 300 à 800 €. À plein temps, certains dépassent 5 000 € par mois. Je te montre mes vrais tarifs et mes vrais revenus dans les modules 1 et 7.",
  },
  {
    q: "Et si je bloque, qui me répond ?",
    a: "La communauté privée où je passe tous les jours, et un call de groupe par mois où on relit tes pitchs et tes vidéos ensemble. Tu n’es pas lâché avec 10 vidéos.",
  },
  {
    q: "Un an d’expérience, c’est pas un peu léger pour former ?",
    a: "C’est justement pour ça que c’est utile. Je me souviens exactement de ce qui bloque quand on part de zéro, parce que c’était moi il y a 12 mois. Un mec qui fait ça depuis 8 ans a oublié. Et les résultats sont là, captures à l’appui plus haut.",
  },
  {
    q: "Et si ça ne me convient pas ?",
    a: "14 jours, un mail, remboursé. Sans condition, sans justification.",
  },
];

export const offerFeatures = [
  "10 modules, dans l’ordre exact que j’ai suivi",
  "Mes templates de pitch, contrat, facture et négo",
  "Ma liste d’agences et mon profil Youdji / Fiverr décortiqué",
  "La communauté et un call de groupe par mois",
  "Accès à vie, mises à jour comprises",
];

export const footerLinks = [
  { href: "#", label: "Mentions légales" },
  { href: "#", label: "CGV" },
  { href: "#", label: "Politique de remboursement" },
  { href: "#", label: "Confidentialité" },
];
