"use client";

import { Artwork, Invention, TimelineEvent, BiographySection, LegacyImpact } from "../types";

/**
 * Da Vinci Codex dataset.
 *
 * Source of imagery: Wikimedia Commons (public domain). Every image is served
 * through the MediaWiki `Special:FilePath` endpoint, which generates an
 * on-demand thumbnail at the requested width and 302-redirects to a cached
 * `upload.wikimedia.org` URL. Unlike hand-built `/thumb/.../NNNpx-` paths
 * (which return HTTP 400 for non-pre-rendered widths), FilePath is reliable
 * for any width — so the gallery never shows broken images.
 *
 * Filenames were resolved from the Wikipedia REST summary API
 * (en.wikipedia.org/api/rest_v1/page/summary/<title>) and the Commons file
 * search API (commons.wikimedia.org/w/api.php), then verified to return 200.
 */

/** Build a reliable public-domain image URL from a Wikimedia Commons filename. */
export const wm = (file: string, width = 1100): string =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

/** Generic fallback used if a remote image ever fails to load. */
export const PLACEHOLDER_IMAGE = wm("Leonardo da Vinci - presumed self-portrait - WGA12798.jpg", 800);

// ============================================
// ARTWORKS
// ============================================

export const ARTWORKS: Artwork[] = [
  {
    id: "1",
    slug: "mona-lisa",
    title: "Mona Lisa",
    year: 1503,
    medium: "Oil on poplar panel",
    dimensions: "77 cm × 53 cm (30 in × 21 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg"),
    description: "The most famous painting in the world, celebrated for the subject's enigmatic smile and Leonardo's masterful use of sfumato.",
    historicalContext: "Painted during the Italian High Renaissance, the Mona Lisa represents the pinnacle of portrait painting. The subject is believed to be Lisa Gherardini, wife of Francesco del Giocondo.",
    category: "painting",
  },
  {
    id: "2",
    slug: "vitruvian-man",
    title: "Vitruvian Man",
    year: 1490,
    medium: "Pen and ink on paper",
    dimensions: "34.3 cm × 25.5 cm (13.5 in × 10.0 in)",
    location: "Gallerie dell'Accademia, Venice",
    imageUrl: wm("Da Vinci Vitruve Luc Viatour.jpg"),
    description: "A famous drawing representing the ideal human proportions, combining art and science in a perfect geometric composition.",
    historicalContext: "Based on the correlations of ideal human proportions with geometry described by the ancient Roman architect Vitruvius.",
    category: "drawing",
  },
  {
    id: "3",
    slug: "last-supper",
    title: "The Last Supper",
    year: 1498,
    medium: "Tempera on gesso, pitch and mastic",
    dimensions: "460 cm × 880 cm (181 in × 346 in)",
    location: "Santa Maria delle Grazie, Milan",
    imageUrl: wm("The Last Supper - Leonardo Da Vinci - High Resolution 32x16.jpg", 1400),
    description: "A mural depicting the moment Jesus announces that one of his twelve apostles will betray him, each figure caught in a wave of astonishment.",
    historicalContext: "Commissioned by Ludovico Sforza, Duke of Milan. Leonardo experimented with techniques that unfortunately led to rapid deterioration.",
    category: "painting",
  },
  {
    id: "4",
    slug: "self-portrait",
    title: "Self-Portrait",
    year: 1512,
    medium: "Red chalk on paper",
    dimensions: "33.3 cm × 21.3 cm (13.1 in × 8.4 in)",
    location: "Biblioteca Reale, Turin",
    imageUrl: wm("Leonardo da Vinci - presumed self-portrait - WGA12798.jpg"),
    description: "A presumed self-portrait of Leonardo in his later years, showing an elderly man with flowing beard and piercing gaze.",
    historicalContext: "Created when Leonardo was around 60 years old, during his time in France under the patronage of King Francis I.",
    category: "portrait",
  },
  {
    id: "5",
    slug: "virgin-of-the-rocks",
    title: "Virgin of the Rocks",
    year: 1483,
    medium: "Oil on wood (later transferred to canvas)",
    dimensions: "189.5 cm × 120 cm (74.6 in × 47.2 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("Leonardo Da Vinci - Vergine delle Rocce (Louvre).jpg"),
    description: "A mystical painting showing the Virgin Mary with the infant Saint John the Baptist and an angel in an atmospheric rocky grotto.",
    historicalContext: "There are two versions of this painting — the Louvre version shown here and one in the National Gallery, London.",
    category: "painting",
  },
  {
    id: "6",
    slug: "annunciation",
    title: "Annunciation",
    year: 1472,
    medium: "Oil and tempera on wood",
    dimensions: "98 cm × 217 cm (38.6 in × 85.4 in)",
    location: "Uffizi Gallery, Florence",
    imageUrl: wm("Annunciation (Leonardo c. 1472–1476).jpg", 1400),
    description: "One of Leonardo's earliest works, depicting the Angel Gabriel announcing to Mary that she will become the mother of Jesus.",
    historicalContext: "Painted when Leonardo was only about 20 years old, while still associated with Verrocchio's workshop in Florence.",
    category: "painting",
  },
  {
    id: "7",
    slug: "lady-with-ermine",
    title: "Lady with an Ermine",
    year: 1490,
    medium: "Oil on walnut panel",
    dimensions: "54 cm × 39 cm (21 in × 15 in)",
    location: "Czartoryski Museum, Kraków",
    imageUrl: wm("Lady with an Ermine - Leonardo da Vinci (adjusted levels).jpg"),
    description: "A portrait of Cecilia Gallerani holding an ermine, radiating an unprecedented sense of movement, intelligence and presence.",
    historicalContext: "Cecilia was the mistress of Ludovico Sforza; the ermine is both a pun on her name and an emblem of the Duke's chivalric order.",
    category: "portrait",
  },
  {
    id: "8",
    slug: "salvator-mundi",
    title: "Salvator Mundi",
    year: 1500,
    medium: "Oil on walnut panel",
    dimensions: "45.4 cm × 65.6 cm (17.9 in × 25.8 in)",
    location: "Private collection",
    imageUrl: wm("Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.jpg"),
    description: "Christ as 'Saviour of the World', raising his right hand in blessing while holding a translucent crystal orb.",
    historicalContext: "In 2017 it became the most expensive painting ever sold at auction, fetching US$450.3 million amid ongoing debate over attribution.",
    category: "painting",
  },
  {
    id: "9",
    slug: "ginevra-de-benci",
    title: "Ginevra de' Benci",
    year: 1478,
    medium: "Oil on panel",
    dimensions: "38.1 cm × 37 cm (15.0 in × 14.6 in)",
    location: "National Gallery of Art, Washington",
    imageUrl: wm("Leonardo da Vinci - Ginevra de' Benci - Google Art Project.jpg"),
    description: "An early portrait of a young Florentine noblewoman set against a juniper bush — a visual pun on her name (ginepro).",
    historicalContext: "The only Leonardo painting on public view in the Americas. Its reverse bears an emblem and the motto 'Beauty adorns Virtue'.",
    category: "portrait",
  },
  {
    id: "10",
    slug: "st-john-baptist",
    title: "Saint John the Baptist",
    year: 1513,
    medium: "Oil on walnut panel",
    dimensions: "69 cm × 57 cm (27 in × 22 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("Leonardo da Vinci - Saint John the Baptist C2RMF retouched.jpg"),
    description: "Believed to be Leonardo's last painting — John emerges from darkness with an ambiguous smile, pointing toward heaven.",
    historicalContext: "An extreme example of sfumato and chiaroscuro, the figure dissolving softly into an almost black ground.",
    category: "painting",
  },
  {
    id: "11",
    slug: "virgin-child-st-anne",
    title: "The Virgin and Child with Saint Anne",
    year: 1503,
    medium: "Oil on wood panel",
    dimensions: "168 cm × 130 cm (66 in × 51 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.jpg"),
    description: "Three generations woven into a single pyramidal composition — Saint Anne, the Virgin, the Christ Child and a lamb.",
    historicalContext: "Leonardo reworked this complex group for years; its tender psychology fascinated Freud and generations of artists.",
    category: "painting",
  },
  {
    id: "12",
    slug: "adoration-magi",
    title: "Adoration of the Magi",
    year: 1481,
    medium: "Oil on panel (underpainting)",
    dimensions: "244 cm × 240 cm (96 in × 94 in)",
    location: "Uffizi Gallery, Florence",
    imageUrl: wm("Adoration of the Magi (Leonardo).jpg"),
    description: "An unfinished but revolutionary composition swirling with figures around the Virgin and Child, full of restless energy.",
    historicalContext: "Left incomplete when Leonardo departed for Milan in 1482; its dynamic crowd broke entirely with static earlier conventions.",
    category: "painting",
  },
  {
    id: "13",
    slug: "st-jerome",
    title: "Saint Jerome in the Wilderness",
    year: 1480,
    medium: "Oil and tempera on walnut panel",
    dimensions: "103 cm × 75 cm (41 in × 30 in)",
    location: "Vatican Museums, Rome",
    imageUrl: wm("Leonardo da Vinci — Jerome.jpg"),
    description: "An unfinished study of the penitent Saint Jerome kneeling with a lion, displaying Leonardo's deep anatomical knowledge.",
    historicalContext: "The gaunt, twisting figure reveals Leonardo's studies of the human body beneath the skin years before his formal dissections.",
    category: "painting",
  },
  {
    id: "14",
    slug: "belle-ferronniere",
    title: "La Belle Ferronnière",
    year: 1495,
    medium: "Oil on walnut panel",
    dimensions: "63 cm × 45 cm (25 in × 18 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("La Belle Ferronière - Google Arts.jpg"),
    description: "A poised portrait of a lady of the Milanese court, her steady sidelong gaze meeting the viewer with quiet directness.",
    historicalContext: "Likely depicting Lucrezia Crivelli, another mistress of Ludovico Sforza; the title derives from a later misidentification.",
    category: "portrait",
  },
  {
    id: "15",
    slug: "madonna-carnation",
    title: "Madonna of the Carnation",
    year: 1479,
    medium: "Oil on panel",
    dimensions: "62 cm × 47.5 cm (24 in × 19 in)",
    location: "Alte Pinakothek, Munich",
    imageUrl: wm("LEONARDO-DA-VINCI - MADONNA-MIT-DER-NELKE-7779 917154 BSTGS.jpg"),
    description: "A young Madonna offers a carnation to the Christ Child before a window opening onto Leonardo's signature hazy mountains.",
    historicalContext: "An early independent work showing the influence of Verrocchio alongside Leonardo's emerging mastery of light and landscape.",
    category: "painting",
  },
  {
    id: "16",
    slug: "portrait-musician",
    title: "Portrait of a Musician",
    year: 1485,
    medium: "Oil on walnut panel",
    dimensions: "44.7 cm × 32 cm (17.6 in × 12.6 in)",
    location: "Pinacoteca Ambrosiana, Milan",
    imageUrl: wm("Leonardo da Vinci - Portrait of a Musician - Pinacoteca Ambrosiana.jpg"),
    description: "Leonardo's only known male portrait, depicting a musician holding a sheet of musical notation in his hand.",
    historicalContext: "The sitter may be Franchino Gaffurio, choirmaster of Milan Cathedral. The lower portion remains unfinished.",
    category: "portrait",
  },
  {
    id: "17",
    slug: "la-scapigliata",
    title: "Head of a Woman (La Scapigliata)",
    year: 1500,
    medium: "Earth, amber and white lead on poplar",
    dimensions: "24.7 cm × 21 cm (9.7 in × 8.3 in)",
    location: "Galleria Nazionale, Parma",
    imageUrl: wm("Leonardo da vinci - La scapigliata.jpg"),
    description: "An exquisite, deliberately unfinished study of a young woman with tousled hair and downcast, dreaming eyes.",
    historicalContext: "Its title means 'the dishevelled one'. Suspended between drawing and painting, it distills Leonardo's pursuit of inner life.",
    category: "drawing",
  },
  {
    id: "18",
    slug: "codex-flight",
    title: "Codex on the Flight of Birds",
    year: 1505,
    medium: "Pen and ink on paper (manuscript)",
    dimensions: "21 cm × 15 cm (8.3 in × 5.9 in)",
    location: "Biblioteca Reale, Turin",
    imageUrl: wm("Leonardo da vinci, Codex on the flight of birds.jpg"),
    description: "A short codex of mirror-written notes and sketches analysing bird flight, air currents and the mechanics of a flying machine.",
    historicalContext: "In these pages Leonardo anticipates principles of aerodynamics, arguing that the same air resistance that supports a bird could lift a machine.",
    category: "manuscript",
  },
  {
    id: "19",
    slug: "baptism-of-christ",
    title: "The Baptism of Christ",
    year: 1475,
    medium: "Oil and tempera on wood",
    dimensions: "177 cm × 151 cm (70 in × 59 in)",
    location: "Uffizi Gallery, Florence",
    imageUrl: wm("Andrea del Verrocchio, Leonardo da Vinci - Baptism of Christ - Uffizi.jpg"),
    description: "A collaboration with his master Verrocchio; the young Leonardo painted the luminous kneeling angel on the far left and much of the landscape.",
    historicalContext: "Vasari recounts that Verrocchio, seeing his pupil's angel surpass his own work, resolved never to paint again.",
    category: "painting",
  },
  {
    id: "20",
    slug: "benois-madonna",
    title: "Benois Madonna",
    year: 1478,
    medium: "Oil on canvas (transferred from panel)",
    dimensions: "49.5 cm × 33 cm (19.5 in × 13 in)",
    location: "Hermitage Museum, Saint Petersburg",
    imageUrl: wm("Madonna benois 01.jpg"),
    description: "A youthful, informal Madonna playing with the Christ Child as he reaches for a sprig of flowers — full of natural, human tenderness.",
    historicalContext: "One of two Madonnas Leonardo recorded starting in 1478; rediscovered in the 20th century from the Benois family collection.",
    category: "painting",
  },
  {
    id: "21",
    slug: "madonna-litta",
    title: "Madonna Litta",
    year: 1490,
    medium: "Tempera on canvas (transferred from panel)",
    dimensions: "42 cm × 33 cm (17 in × 13 in)",
    location: "Hermitage Museum, Saint Petersburg",
    imageUrl: wm("Leonardo da Vinci - Madonna Litta - WGA12702.jpg"),
    description: "A serene Madonna nursing the Christ Child, framed by two arched windows that open onto a distant blue landscape.",
    historicalContext: "Attributed to Leonardo and his workshop; named after the Litta family of Milan, who owned it in the 19th century.",
    category: "painting",
  },
];

// ============================================
// INVENTIONS
// ============================================

export const INVENTIONS: Invention[] = [
  {
    id: "1",
    slug: "flying-machine",
    name: "Flying Machine (Ornithopter)",
    year: 1485,
    category: "aeronautics",
    description: "A human-powered aircraft with wings designed to flap like a bird's, inspired by Leonardo's observations of bird flight.",
    explanation: "The ornithopter was designed with a wooden frame covered in silk, pine and leather. The pilot would lie prone and drive the wings using hands and feet.",
    imageUrl: wm("Design for a Flying Machine.jpg"),
  },
  {
    id: "2",
    slug: "diving-suit",
    name: "Diving Suit",
    year: 1500,
    category: "military",
    description: "An early diving apparatus with reed breathing tubes and a leather suit, conceived for underwater warfare.",
    explanation: "Designed for Venetian forces to sabotage enemy ships by reaching their hulls from below the waterline; a bag of air allowed the diver to breathe.",
    imageUrl: wm("Leonardo-Taucher.jpg"),
  },
  {
    id: "3",
    slug: "armored-tank",
    name: "Armored Fighting Vehicle",
    year: 1487,
    category: "military",
    description: "A turtle-shaped armored vehicle bristling with cannons on every side, powered by hand cranks turned by the men inside.",
    explanation: "Overlapping metal-clad wooden plates deflected fire while the crew advanced — a conical shell that prefigures the modern tank by four centuries.",
    imageUrl: wm("Leonardo tank.JPG"),
  },
  {
    id: "4",
    slug: "parachute",
    name: "Parachute",
    year: 1483,
    category: "aeronautics",
    description: "A rigid pyramid-shaped canopy of sealed linen allowing a person to descend safely from any great height.",
    explanation: "Leonardo wrote that a 7-by-7-metre frame would let anyone 'throw himself down from any great height without injury'. A 2000 test jump proved him right.",
    imageUrl: wm("Leonardo da Vinci parachute 04659a.jpg"),
  },
  {
    id: "5",
    slug: "anatomical-drawings",
    name: "Anatomical Studies",
    year: 1510,
    category: "anatomical",
    description: "Hundreds of meticulous dissection drawings, including the famous studies of the fetus in the womb.",
    explanation: "Leonardo dissected some 30 human corpses, mapping muscles, vessels and organs with an accuracy not matched for centuries.",
    imageUrl: wm("Da Vinci Studies of Embryos Luc Viatour.jpg"),
  },
  {
    id: "6",
    slug: "helical-aerial-screw",
    name: "Aerial Screw (Helicopter)",
    year: 1489,
    category: "aeronautics",
    description: "A helical screw of linen and reed intended to 'compress the air' and lift itself by rotating rapidly.",
    explanation: "The conceptual ancestor of the helicopter rotor. Modern tests show the design could generate lift, though human muscle alone could never spin it fast enough.",
    imageUrl: wm("Leonardo da Vinci helicopter.jpg"),
  },
  {
    id: "7",
    slug: "giant-crossbow",
    name: "Giant Crossbow",
    year: 1485,
    category: "military",
    description: "An enormous siege crossbow nearly 27 metres wide, engineered for psychological as much as physical impact.",
    explanation: "Mounted on six angled wheels for stability, it was designed to hurl stones or incendiary bombs rather than arrows, intimidating the enemy.",
    imageUrl: wm("Leonardo da Vinci's Giant Crossbow - design.jpg"),
  },
  {
    id: "8",
    slug: "self-propelled-cart",
    name: "Self-Propelled Cart",
    year: 1478,
    category: "civilian",
    description: "A spring-driven, programmable three-wheeled cart — widely regarded as the ancestor of the automobile and the robot.",
    explanation: "Coiled springs powered the wheels while a system of pegs could pre-set its steering, letting the cart run a programmed path on its own.",
    imageUrl: wm("Leonardo da Vinci Self Propelled Cart.jpg"),
  },
  {
    id: "9",
    slug: "mechanical-knight",
    name: "Mechanical Knight (Automaton)",
    year: 1495,
    category: "civilian",
    description: "A humanoid automaton in armour able to sit, stand, raise its visor and move its arms through a system of cables and pulleys.",
    explanation: "Driven by an external crank and cable mechanism, the knight could perform several motions — an early study in robotics built for the Milanese court.",
    imageUrl: wm("Leonardo-Robot3.jpg"),
  },
  {
    id: "10",
    slug: "revolving-bridge",
    name: "Revolving Bridge",
    year: 1487,
    category: "architecture",
    description: "A lightweight swing bridge that could pivot across a river and be packed up and transported by an advancing army.",
    explanation: "Built as a single span with a rope-and-pulley counterweight, it rotated on a bank-mounted pivot so troops could cross, then withdraw the bridge behind them.",
    imageUrl: wm("Leonardo da Vinci Golden Horn Bridge model side.jpg"),
  },
  {
    id: "11",
    slug: "organ-gun",
    name: "Organ Gun (Ribauldequin)",
    year: 1480,
    category: "military",
    description: "A rapid-fire weapon mounting many small-calibre barrels on a revolving rack to keep up a continuous barrage.",
    explanation: "While one bank of barrels fired, another could cool and a third be reloaded, then the rack rotated — an early answer to the slow reload of a single cannon.",
    imageUrl: wm("Ribauldequins - Leonardo da Vinci studies.jpg"),
  },
  {
    id: "12",
    slug: "scythed-chariot",
    name: "Scythed Chariot",
    year: 1485,
    category: "military",
    description: "A horse-drawn war machine fitted with whirling scythe blades to clear a path through massed infantry.",
    explanation: "Geared blades spun as the wheels turned. Leonardo's own notes acknowledge it was as dangerous to friendly troops as to the enemy.",
    imageUrl: wm("Leonardo da vinci, Assault chariot with scythes.jpg"),
  },
];

// ============================================
// TIMELINE EVENTS
// ============================================

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "1",
    year: 1452,
    title: "Birth of Leonardo",
    description: "Leonardo di ser Piero da Vinci was born on April 15, 1452, in Vinci, Republic of Florence.",
    type: "birth",
    relatedArtworkId: undefined,
    relatedInventionId: undefined,
  },
  {
    id: "2",
    year: 1466,
    title: "Apprenticeship with Verrocchio",
    description: "At age 14, Leonardo became an apprentice in Andrea del Verrocchio's workshop in Florence.",
    type: "milestone",
  },
  {
    id: "3",
    year: 1472,
    title: "Joined Artists Guild",
    description: "Leonardo was admitted to the Confraternity of Saint Luke, the painters' guild in Florence.",
    type: "milestone",
  },
  {
    id: "4",
    year: 1478,
    title: "First Independent Commission",
    description: "Received his first independent commission to paint an altarpiece for the Capella Maggiore.",
    type: "creation",
  },
  {
    id: "5",
    year: 1482,
    title: "Moved to Milan",
    description: "Leonardo moved to Milan to work for Ludovico Sforza, Duke of Milan.",
    type: "location",
  },
  {
    id: "6",
    year: 1490,
    title: "Created Vitruvian Man",
    description: "Produced the famous Vitruvian Man drawing, representing ideal human proportions.",
    type: "creation",
    relatedArtworkId: "2",
  },
  {
    id: "7",
    year: 1495,
    title: "Started The Last Supper",
    description: "Began work on the mural painting The Last Supper in Milan.",
    type: "creation",
    relatedArtworkId: "3",
  },
  {
    id: "8",
    year: 1499,
    title: "Left Milan",
    description: "Leonardo left Milan after the French invasion and began wandering through Italy.",
    type: "location",
  },
  {
    id: "9",
    year: 1503,
    title: "Started Mona Lisa",
    description: "Began painting the Mona Lisa in Florence.",
    type: "creation",
    relatedArtworkId: "1",
  },
  {
    id: "10",
    year: 1506,
    title: "Returned to Milan",
    description: "Leonardo returned to Milan to work for the French governor Charles d'Amboise.",
    type: "location",
  },
  {
    id: "11",
    year: 1516,
    title: "Moved to France",
    description: "Leonardo moved to France at the invitation of King Francis I, settling at Clos Lucé near Amboise.",
    type: "location",
  },
  {
    id: "12",
    year: 1519,
    title: "Death of Leonardo",
    description: "Leonardo da Vinci died on May 2, 1519, at Clos Lucé, France.",
    type: "death",
  },
];

// ============================================
// BIOGRAPHY SECTIONS
// ============================================

export const BIOGRAPHY_SECTIONS: BiographySection[] = [
  {
    id: "1",
    period: "Early Years",
    title: "Childhood in Vinci (1452-1466)",
    startDate: 1452,
    endDate: 1466,
    content: "Leonardo was born on April 15, 1452, in the Tuscan hill town of Vinci, near Florence. He was the illegitimate son of Ser Piero da Vinci, a wealthy notary, and Caterina, a peasant woman. Though illegitimate, Leonardo was raised in his father's household and received a good education in Latin, mathematics, and geometry. His early years were spent observing the natural world around him, developing the keen powers of observation that would characterize his entire life.",
    keyEvents: [
      "Born April 15, 1452 in Vinci, Italy",
      "Raised in father's household",
      "Received informal education in Latin and mathematics",
      "Developed early interest in art and nature",
    ],
    featuredArtworkId: undefined,
  },
  {
    id: "2",
    period: "Apprenticeship",
    title: "Verrocchio's Workshop (1466-1476)",
    startDate: 1466,
    endDate: 1476,
    content: "At age 14, Leonardo became an apprentice in Andrea del Verrocchio's workshop, one of Florence's most prestigious art studios. Here, he received comprehensive training in painting, sculpture, metallurgy, leather work, and mechanics. The workshop was a hub of artistic innovation, and Leonardo quickly distinguished himself with his exceptional talent. He worked on several important projects, including assisting with Verrocchio's 'Baptism of Christ,' where his contribution was so superior that Verrocchio reportedly vowed never to paint again.",
    keyEvents: [
      "Apprenticed to Andrea del Verrocchio at age 14",
      "Learned painting, sculpture, and engineering",
      "Assisted on 'Baptism of Christ' (1475)",
      "Joined the Guild of Saint Luke in 1472",
    ],
    featuredArtworkId: "6",
  },
  {
    id: "3",
    period: "First Period in Florence",
    title: "Independent Master (1476-1482)",
    startDate: 1476,
    endDate: 1482,
    content: "After leaving Verrocchio's workshop, Leonardo established himself as an independent master painter in Florence. During this period, he received several important commissions, though many remained unfinished. His work during this time shows his growing mastery of technique, particularly his development of sfumato - the subtle blending of colors and tones that became his signature style. He also began his extensive notebooks, filling them with observations, sketches, and inventions.",
    keyEvents: [
      "Received first independent commissions",
      "Developed the sfumato technique",
      "Started his famous notebooks",
      "Conducted early anatomical studies",
    ],
    featuredArtworkId: "6",
  },
  {
    id: "4",
    period: "First Milanese Period",
    title: "Court Artist in Milan (1482-1499)",
    startDate: 1482,
    endDate: 1499,
    content: "Leonardo moved to Milan in 1482, seeking employment with Ludovico Sforza, Duke of Milan. He wrote a famous letter to Ludovico, emphasizing his military engineering skills before mentioning his artistic abilities. In Milan, Leonardo entered the most productive period of his career. He created 'The Last Supper,' conducted extensive anatomical studies, designed festivals, and worked on numerous engineering projects. The Milanese court provided him with the resources and freedom to pursue his diverse interests.",
    keyEvents: [
      "Moved to Milan in 1482",
      "Created 'The Last Supper' (1495-1498)",
      "Conducted extensive anatomical dissections",
      "Designed court festivals and machinery",
    ],
    featuredArtworkId: "3",
  },
  {
    id: "5",
    period: "Wandering Years",
    title: "Travels in Italy (1499-1513)",
    startDate: 1499,
    endDate: 1513,
    content: "Following the French invasion of Milan in 1499, Leonardo spent over a decade traveling through Italy. He lived in Florence, Rome, and various smaller cities, working for different patrons. During this period, he painted the Mona Lisa and continued his scientific investigations. Despite the instability, this was a period of intense intellectual activity, with Leonardo's notebooks filled with increasingly sophisticated studies in anatomy, optics, geology, and hydraulics.",
    keyEvents: [
      "Left Milan after French invasion (1499)",
      "Painted the Mona Lisa (1503-1519)",
      "Worked in Rome under Pope Leo X (1513-1516)",
      "Continued extensive scientific research",
    ],
    featuredArtworkId: "1",
  },
  {
    id: "6",
    period: "Final Years",
    title: "In France (1516-1519)",
    startDate: 1516,
    endDate: 1519,
    content: "In 1516, at age 64, Leonardo accepted an invitation from King Francis I of France to settle at Clos Lucé near the king's residence at Amboise. The king granted him the title of 'Premier Peintre, Architecte et Mécanicien du Roi' and gave him freedom to pursue his studies. Though his physical strength had declined, Leonardo's mind remained sharp. He spent his final years organizing his notebooks, designing court festivities, and advising the king on architectural and engineering matters.",
    keyEvents: [
      "Invited to France by King Francis I (1516)",
      "Settled at Clos Lucé near Amboise",
      "Organized his scientific notebooks",
      "Died May 2, 1519",
    ],
    featuredArtworkId: "4",
  },
];

// ============================================
// LEGACY IMPACT
// ============================================

export const LEGACY_IMPACTS: LegacyImpact[] = [
  {
    id: "1",
    field: "art",
    title: "Revolutionary Painting Techniques",
    description: "Leonardo's development of sfumato and chiaroscuro techniques transformed Western art and influenced generations of painters.",
    modernConnection: "These techniques remain fundamental to oil painting education and continue to influence contemporary artists.",
    icon: "palette",
  },
  {
    id: "2",
    field: "science",
    title: "Scientific Method Pioneer",
    description: "Leonardo's emphasis on observation, experimentation, and documentation prefigured the scientific method by centuries.",
    modernConnection: "His approach to systematic observation and recording influenced the development of modern scientific inquiry.",
    icon: "microscope",
  },
  {
    id: "3",
    field: "medicine",
    title: "Anatomical Discovery",
    description: "Leonardo's anatomical drawings were the most accurate of his time and many discoveries weren't matched until centuries later.",
    modernConnection: "His anatomical studies laid groundwork for modern medical illustration and anatomical understanding.",
    icon: "heart",
  },
  {
    id: "4",
    field: "technology",
    title: "Engineering Visionary",
    description: "Leonardo's designs for flying machines, tanks, and other inventions were centuries ahead of their time.",
    modernConnection: "Many of his concepts have been realized in modern technology, from helicopters to armored vehicles.",
    icon: "lightbulb",
  },
  {
    id: "5",
    field: "architecture",
    title: "Urban Planning Innovator",
    description: "Leonardo's designs for ideal cities incorporated sanitation, multi-level traffic systems, and human-centered design.",
    modernConnection: "His urban planning concepts anticipate modern sustainable city design and smart city principles.",
    icon: "building",
  },
];

// ============================================
// DATA FETCHING FUNCTIONS
// ============================================

export function getStaticArtworks(): Artwork[] {
  return ARTWORKS;
}

export function getStaticInventions(): Invention[] {
  return INVENTIONS;
}

export function getTimelineEvents(): TimelineEvent[] {
  return TIMELINE_EVENTS;
}

export function getBiographySections(): BiographySection[] {
  return BIOGRAPHY_SECTIONS;
}

export function getLegacyImpacts(): LegacyImpact[] {
  return LEGACY_IMPACTS;
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return ARTWORKS.find((artwork) => artwork.slug === slug);
}

export function getInventionBySlug(slug: string): Invention | undefined {
  return INVENTIONS.find((invention) => invention.slug === slug);
}