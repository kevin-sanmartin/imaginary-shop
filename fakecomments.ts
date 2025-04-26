import { IFakeComment } from "./types/FakeComments";

export const coupDeFoudreComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Camille Renaud",
		comment: "J’ai utilisé Coup de Foudre au détour d’un couloir… aujourd’hui on partage des playlists et des silences qui disent tout. Merci pour cette étincelle.",
	},
	{
		stars: 5,
		name: "Fabrice Donjon",
		comment: "Je l’ai activé par erreur en regardant mon grille-pain. Depuis, je ne mange plus que des tartines par amour. Très content.",
	},
	{
		stars: 3,
		name: "Julien Mourant",
		comment: "Déclenché sans faire exprès dans le bus. J’ai passé 20 minutes à fantasmer une vie avec une inconnue. Elle est descendue à République. Moi, au fond du trou.",
	},
];

export const airPieceComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Émile Baron",
		comment: "L’air du salon où on s’est dit 'je t’aime' pour la première fois. Il est dans un petit bocal maintenant, posé sur mon étagère entre deux coquillages.",
	},
	{
		stars: 5,
		name: "Sasha Creux",
		comment: "Un petit cube d’air de notre ancienne coloc… on l’a ouvert ensemble, on a pleuré. C’est le genre de souvenir inutile et essentiel.",
	},
	{
		stars: 5,
		name: "Rachid Tofu",
		comment: "J’ai chopé l’air d’une fête d’anniversaire où je ne connaissais personne. Maintenant je possède un souvenir d’un malaise collectif. Trop bien.",
	},
];

export const boussoleComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Isaline Brume",
		comment: "Elle tourne doucement, comme mes pensées. Elle ne m’a pas trouvé de chemin, mais elle m’a fait aimer l’errance. C’est peut-être ça, l’essentiel.",
	},
	{
		stars: 5,
		name: "Denis Sansplan",
		comment: "Elle ne m’a pas aidé à retrouver mon chemin, mais j’ai trouvé un caillou avec une bonne vibe. C’est suffisant.",
	},
	{
		stars: 4,
		name: "Léna Froid",
		comment: "Elle m’a menée exactement là où je ne voulais pas aller… et c’est ce qu’il me fallait. Merci de ne pas m’avoir guidée.",
	},
];

export const calendrierComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Étienne Beauclair",
		comment: "Ce calendrier ne me dit rien, et c’est ça qui me parle le plus. Il me rappelle que je suis vivant, pas juste occupé.",
	},
	{
		stars: 5,
		name: "Morgane Caoutchouc",
		comment: "Parfait pour oublier mon anniversaire, mes impôts, et que je devais rappeler ma mère. Je vis dans le flou le plus pur.",
	},
	{
		stars: 5,
		name: "Sam Noir",
		comment: "Il ne me rappelle rien. Et c’est exactement ce dont j’avais besoin.",
	},
];

export const cartePostaleComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 4,
		name: "Théo Vallombreux",
		comment: "Je l’ai posée sur mon bureau. Parfois, j’ai l’impression qu’elle m’attend. Comme si elle savait déjà quelque chose que j’ignore encore.",
	},
	{
		stars: 5,
		name: "Gilbert Patatra",
		comment: "J’ai essayé de la lire avec des lunettes 3D, un miroir, et un bol de soupe. Toujours rien. Et pourtant… j’ai pleuré.",
	},
	{
		stars: 5,
		name: "Naël Brume",
		comment: "C’est une carte qui me rappelle tout ce que je n’ai pas encore vécu. Elle me donne un peu le vertige, mais un vertige doux.",
	},
];

export const casseTeteComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Raphaël Douceur",
		comment: "J’ai abandonné toute volonté de finir. Maintenant je le fais juste pour le plaisir de me perdre. C’est devenu un rituel.",
	},
	{
		stars: 5,
		name: "Kevin Mystère",
		comment: "Je l’ai offert à mon cousin. Il a disparu pendant trois semaines. Il est revenu en robe de moine, il dit que tout est cercle. Super produit.",
	},
	{
		stars: 4,
		name: "Camille Nuit",
		comment: "Je croyais vouloir le résoudre. En fait, j’avais juste besoin d’un compagnon silencieux pour mes soirées vides. Il est parfait.",
	},
];

export const coupDeChanceComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Mathieu Clairon",
		comment: "J’ai gratté un ticket après l’avoir activé. Rien gagné. Mais j’ai trouvé une pièce de 2€ dans ma poche. Merci, petit sachet magique.",
	},
	{
		stars: 5,
		name: "Romain Trouillard",
		comment: "Je l’ai ouvert devant un distributeur de bonbons. Il a explosé. J’ai gagné un mois de Skittles gratuits. Je le referai pas, mais je suis reconnaissant.",
	},
	{
		stars: 5,
		name: "Malo Lointain",
		comment: "Je l’ai utilisé un soir où tout semblait figé. Le lendemain, j’ai reçu un message que j’attendais depuis des mois. J’appelle pas ça du hasard.",
	},
];

export const eauDesertComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Isaure Bleu",
		comment: "On m’a dit que j’étais irréaliste. Alors j’ai acheté cette bouteille. Maintenant, je souris chaque fois qu’on me dit que c’est impossible.",
	},
	{
		stars: 5,
		name: "Salomé Touareg",
		comment: "Je l’ai mise dans mon frigo. Depuis, mon bac à glaçons me raconte des secrets. C’est sûrement lié.",
	},
	{
		stars: 5,
		name: "Maëlle Horizon",
		comment: "Je la garde sur mon bureau. Elle me rappelle que même dans mes périodes les plus sèches, une marée peut surgir. C’est mon oasis personnelle.",
	},
];

export const etincelleComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Nina Crayon",
		comment: "Ce flacon sent le souvenir. L’odeur de ce que j’aurais pu créer si j’avais eu le courage. Maintenant, je l’ai.",
	},
	{
		stars: 5,
		name: "Kevin Bourdon",
		comment: "Une étincelle a sauté sur mon cactus. Il est devenu architecte. Je ne pose plus de questions.",
	},
	{
		stars: 5,
		name: "Émile Silence",
		comment: "Je pensais avoir perdu cette idée. Celle qui brillait mais que j’ai laissée filer. Elle est revenue, timide mais vivante. Et je l’ai notée cette fois.",
	},
];

export const illusionLiquideComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Juliette Fumée",
		comment: "J’ai versé quelques gouttes sur ma tasse, elle s’est mise à danser. Depuis, je bois le matin comme dans un rêve. Merci, douce étrangeté.",
	},
	{
		stars: 5,
		name: "Éléa Plis",
		comment: "Ce bocal est un rappel : ce que je vois n’est jamais ce qui est. Depuis, je regarde tout avec un doute heureux.",
	},
	{
		stars: 5,
		name: "Anaël Onde",
		comment: "Il n’y a pas de forme fixe. Juste des interprétations. Ce bocal me le rappelle chaque fois que j’ose verser une goutte.",
	},
];

export const livreBlancComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Salomé Nullepart",
		comment: "Je me suis endormie à la page 47. C’était exactement ce que je cherchais. Merci pour ce doux abandon.",
	},
	{
		stars: 4,
		name: "Lola Carrévide",
		comment: "J’ai surligné tous les passages importants. Le surligneur est toujours plein.",
	},
	{
		stars: 5,
		name: "Naïm Calme",
		comment: "Il m’a aidé à ne rien attendre. Et ça, c’est précieux dans un monde qui nous pousse à tout remplir.",
	},
];

export const montreComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Léo Respire",
		comment: "J’ai cessé de regarder l’heure. Peut-être pour la première fois, je vis vraiment le moment présent. Cette montre ne me dit rien, et c’est parfait.",
	},
	{
		stars: 4,
		name: "Clarisse Sablier",
		comment: "Mon chien a regardé cette montre pendant une heure entière sans bouger. Je pense qu’il a compris quelque chose que je n’ai pas saisi.",
	},
	{
		stars: 5,
		name: "Sophie Éphémère",
		comment:
			"Chaque minute avec cette montre est un rappel que le temps n’est pas mon maître. La liberté de ne rien savoir de l’heure m’a permis de mieux profiter de l’instant.",
	},
];

export const nuagesComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Isabelle Douceur",
		comment:
			"C'est comme avoir un ciel privé, juste là, dans ma chambre. Ces nuages ne bougent jamais, et pourtant, je me sens emportée vers un endroit paisible à chaque regard.",
	},
	{
		stars: 5,
		name: "Gérald Nuageux",
		comment: "Je l’ai offert à ma tante. Maintenant, elle parle aux nuages. J’ai peur qu’elle devienne leur porte-parole.",
	},
	{
		stars: 5,
		name: "Emmanuel Nuée",
		comment: "Ce paquet m’a appris à ralentir. Rien ne change, mais tout semble différent quand je laisse mon esprit se perdre dans ces nuages immobiles.",
	},
];

export const phraseMalPlaceComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Léa Maladroite",
		comment:
			"C’est l’instant où tu te dis ‘Pourquoi j’ai dit ça ?’ capturé à jamais. Chaque fois que je le regarde, j’ai un petit sourire gêné… mais ça me rappelle aussi d’être plus prudente.",
	},
	{
		stars: 4,
		name: "Victor Gêné",
		comment:
			"J’ai dit quelque chose d’horrible à un dîner, et cette parole me hante encore. Maintenant, je la garde dans ma poche, comme un petit rappel que les mots ont du poids.",
	},
	{
		stars: 5,
		name: "Emmanuel Tact",
		comment: "C’est un souvenir tangible de ce que je ne voulais pas dire. Mais parfois, accepter ses erreurs est un premier pas vers la sagesse.",
	},
];

export const pinceeGeneComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Sophie Involontaire",
		comment:
			"C’est le secret pour transformer n’importe quelle situation banale en un moment d’inconfort délicieux. Un seul geste et la pièce devient une scène de théâtre absurde.",
	},
	{
		stars: 4,
		name: "Lucie Tension",
		comment:
			"J’ai essayé d’utiliser la pincée pendant un mariage. Un regard mal interprété, un rire trop fort… C’était l’instant parfait pour ce flacon. Mes amis n’ont pas encore compris pourquoi ils se sont tous figés.",
	},
	{
		stars: 4,
		name: "Antoine Détournement",
		comment: "Cette petite pincée me rappelle qu’être humain, c’est aussi savoir gérer ses erreurs sociales. Un flacon parfait pour accepter ce qui échappe à notre contrôle.",
	},
];

export const proutComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Benoît Câlin",
		comment:
			"Je n’aurais jamais cru qu'un prout dans une boîte pourrait me faire autant rire. Il suffit de le poser sur la table, et toute la pièce se transforme en un festival de rires incontrôlables. J’adore l’effet instantané !",
	},
	{
		stars: 4,
		name: "Thomas Fartiste",
		comment: "Il a transformé un dîner formel en une soirée de fous rires. Ne sous-estimez jamais le pouvoir d’un prout bien placé !",
	},
	{
		stars: 4,
		name: "Isabelle Légèreté",
		comment: "Un prout, c’est la nature dans sa plus pure expression. Ce produit m’a appris que tout ne doit pas être pris au sérieux. L’humour dans sa forme la plus simple.",
	},
];

export const reveNonRealiseComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Paul Nostalgie",
		comment:
			"J’avais oublié combien de rêves j’avais laissés de côté. Ce pot m’a permis de revivre un peu de ma jeunesse et de ses espoirs. Peut-être qu’un jour, je pourrais ouvrir ce pot pour de bon…",
	},
	{
		stars: 5,
		name: "Emma Réactive",
		comment:
			"Je l’ai offert à un ami qui parlait toujours de ses rêves de voyage. Cela l’a poussé à enfin commencer à planifier son grand trip ! Ce pot a la magie de raviver les passions cachées.",
	},
	{
		stars: 5,
		name: "Claire Moment",
		comment:
			"Ce pot est l’essence même de l’imperfection humaine. Tout ce qui nous échappe et que l’on regrette, tout ce que l’on abandonne, est contenu ici, mais c’est aussi ce qui nous fait avancer. L’essentiel, c’est de continuer à rêver.",
	},
];

export const rireCristalComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Lina Sourire",
		comment:
			"Je l’ai ouvert lors d’un jour particulièrement difficile. Dès que le rire a résonné, tout mon stress est parti. C’est comme un petit rayon de soleil dans une journée nuageuse. Incontournable pour les journées grises !",
	},
	{
		stars: 5,
		name: "Thierry Sérénité",
		comment:
			"J'ai ouvert cette boîte un jour où je me sentais un peu perdu et fatigué. Le rire m’a enveloppé d’une douceur inédite. C’est comme un câlin sonore qui vous prend par surprise.",
	},
	{
		stars: 5,
		name: "Alice Instant",
		comment:
			"Le rire d’un bébé est l’expression de l’inconscience heureuse. Il me rappelle que la vie, malgré ses difficultés, est aussi remplie de ces petites perles de pureté qui nous redonnent espoir.",
	},
];

export const silenceComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Lina Calme",
		comment: "Je l’ai ouvert après une journée de travail très stressante, et cela m’a permis de respirer profondément. Ces 10 secondes de silence m’ont fait un bien fou.",
	},
	{
		stars: 5,
		name: "Jérôme Bruit",
		comment:
			"Je n'ai jamais cru qu'un silence aussi court pouvait avoir un tel impact. À ouvrir absolument avant une réunion ou quand la colocataire parle trop fort ! Vous ne pourrez plus vous en passer.",
	},
	{
		stars: 5,
		name: "Lucie Repos",
		comment:
			"L’art du silence. C’est incroyable comment 10 secondes peuvent changer une journée. Ce moment suspendu m’a donné l’impression d’être en paix avec le monde, juste un instant. À savourer.",
	},
];

export const ticketAttenteComments: Omit<IFakeComment, "id" | "product">[] = [
	{
		stars: 5,
		name: "Lucie Suspendu",
		comment:
			"Ce ticket a été une véritable révélation. Il m'a montré que parfois, dans l'attente, on trouve une paix étrange. Le silence et la réflexion qui l'accompagnent sont incroyables. À expérimenter pour tous ceux qui s’interrogent sur le passage du temps.",
	},
	{
		stars: 5,
		name: "Antoine Attente",
		comment:
			"Vous n'avez jamais vraiment compris ce qu'était la patience jusqu'à ce que vous vous retrouviez dans cette file infinie. C’est comme une version éternelle de la salle d'attente chez le médecin… mais sans jamais voir le médecin !",
	},
	{
		stars: 5,
		name: "Émilie Absurdie",
		comment:
			"Une expérience totalement absurde, mais absolument magique. Le ticket m’a permis de m’immerger dans l'attente infinie, et de me demander : 'Pourquoi devons-nous toujours avancer ?' Un voyage dans la contemplation pure.",
	},
];
