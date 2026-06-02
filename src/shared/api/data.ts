"use client";

import { Artwork, Invention, TimelineEvent, BiographySection, LegacyImpact } from "../types";
import { buildArtworkSlug, buildInventionSlug } from "../lib/utils";

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
 *
 * Slugs are NOT hand-written. Each record omits `slug` below and the exported
 * `ARTWORKS` / `INVENTIONS` arrays derive an extremely detailed slug from every
 * available structured field (title/name, year, category, medium, dimensions,
 * location) via `buildArtworkSlug` / `buildInventionSlug`. This guarantees the
 * slug always reflects the full record and can never drift out of sync.
 */

/** Build a reliable public-domain image URL from a Wikimedia Commons filename. */
export const wm = (file: string, width = 1100): string =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

/** Generic fallback used if a remote image ever fails to load. */
export const PLACEHOLDER_IMAGE = wm("Leonardo da Vinci - presumed self-portrait - WGA12798.jpg", 800);

// ============================================
// ARTWORKS
// ============================================

const ARTWORKS_DATA: Omit<Artwork, "slug" | "subjects" | "palette">[] = [
  {
    id: "1",
    title: "Mona Lisa",
    year: 1503,
    medium: "Oil on poplar panel",
    dimensions: "77 cm × 53 cm (30 in × 21 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg"),
    tagline: "La Gioconda — the most studied, most parodied, most visited painting on Earth.",
    description: "The most famous painting in the world, celebrated for the subject's enigmatic smile and Leonardo's masterful use of sfumato.",
    about: [
      "Leonardo began the portrait in Florence around 1503 and is thought to have carried it with him for the rest of his life, refining it over more than a decade and never formally delivering it to a patron. The sitter is most widely identified as Lisa Gherardini, wife of the Florentine silk merchant Francesco del Giocondo — the source of the Italian name 'La Gioconda' and the French 'La Joconde'.",
      "What hypnotises viewers is the ambiguity Leonardo built into the face: the corners of the mouth and eyes dissolve into soft shadow, so the expression seems to shift between amusement and melancholy as the eye moves. Behind her, an imaginary aerial landscape of winding rivers and misty mountains recedes into bluish haze, framing the figure within Leonardo's lifelong study of light, atmosphere and the human soul.",
    ],
    technique: "The painting is the supreme demonstration of sfumato — Leonardo's technique of laying down dozens of near-transparent glazes to blend tones without any visible line or brushstroke, 'in the manner of smoke'. The seamless gradations model the flesh and the famously indeterminate smile.",
    significance: "Already admired in Leonardo's lifetime, the Mona Lisa became a global icon after its theft from the Louvre in 1911 turned it into front-page news. Today it sits behind bulletproof glass and draws millions of visitors a year, standing as shorthand for the very idea of a masterpiece.",
    historicalContext: "Painted during the Italian High Renaissance, the Mona Lisa represents the pinnacle of portrait painting. The subject is believed to be Lisa Gherardini, wife of Francesco del Giocondo.",
    facts: [
      "Painted on a single poplar panel, not canvas.",
      "Has no clearly visible eyebrows or eyelashes.",
      "Stolen from the Louvre in 1911 and recovered two years later in Florence.",
      "Hangs behind bulletproof glass in the Salle des États.",
      "Known as 'La Gioconda' in Italian and 'La Joconde' in French.",
    ],
    category: "painting",
  },
  {
    id: "2",
    title: "Vitruvian Man",
    year: 1490,
    medium: "Pen and ink on paper",
    dimensions: "34.3 cm × 25.5 cm (13.5 in × 10.0 in)",
    location: "Gallerie dell'Accademia, Venice",
    imageUrl: wm("Da Vinci Vitruve Luc Viatour.jpg"),
    tagline: "Where geometry, anatomy and art meet in a single circle and square.",
    description: "A famous drawing representing the ideal human proportions, combining art and science in a perfect geometric composition.",
    about: [
      "Drawn around 1490 in one of Leonardo's notebooks, the Vitruvian Man depicts a male figure in two superimposed positions, inscribed in both a circle and a square. It is accompanied by Leonardo's mirror-script notes interpreting the proportions of the human body set out by the ancient Roman architect Vitruvius.",
      "Leonardo corrected and refined Vitruvius's scheme through his own measurements, reconciling the ideal of a body that fits perfectly within both a circle, centred on the navel, and a square, centred on the groin. The result fuses mathematics, anatomy and philosophy into an emblem of Renaissance humanism — the belief that the human being is the measure of the cosmos.",
    ],
    technique: "Executed in pen, ink and metalpoint with a light wash, the drawing relies on precise compass-and-ruler construction. Two superimposed pairs of arms and legs let the single figure occupy both geometric figures without distortion.",
    significance: "The image has become one of the most recognised drawings in the world, reproduced on everything from medical texts to the Italian one-euro coin, and is treated as a universal symbol of the union of art and science.",
    historicalContext: "Based on the correlations of ideal human proportions with geometry described by the ancient Roman architect Vitruvius.",
    facts: [
      "Based on the writings of the Roman architect Vitruvius.",
      "The surrounding notes are written in mirror script.",
      "The navel centres the circle; the groin centres the square.",
      "Appears on the Italian 1-euro coin.",
      "Rarely exhibited to protect the fragile paper from light.",
    ],
    category: "drawing",
  },
  {
    id: "3",
    title: "The Last Supper",
    year: 1498,
    medium: "Tempera on gesso, pitch and mastic",
    dimensions: "460 cm × 880 cm (181 in × 346 in)",
    location: "Santa Maria delle Grazie, Milan",
    imageUrl: wm("The Last Supper - Leonardo Da Vinci - High Resolution 32x16.jpg", 1400),
    tagline: "The instant betrayal is announced, frozen across thirteen figures.",
    description: "A mural depicting the moment Jesus announces that one of his twelve apostles will betray him, each figure caught in a wave of astonishment.",
    about: [
      "Painted between 1495 and 1498 on the refectory wall of the convent of Santa Maria delle Grazie in Milan, The Last Supper captures the dramatic moment Christ tells his apostles that one of them will betray him. Leonardo arranges the twelve apostles in four groups of three, each reacting with a distinct wave of shock, denial and grief.",
      "Rather than isolating Judas as earlier painters did, Leonardo places him among the others, recoiling into shadow while clutching a money bag. The composition's perspective lines converge on Christ's calm head, making him the still centre of the emotional storm and uniting the painted architecture with the real room.",
    ],
    technique: "Seeking richer colour and detail than true buon fresco allowed, Leonardo painted on dry plaster with tempera and oil. The experimental method let him work slowly but proved unstable, and the surface began flaking within his lifetime.",
    significance: "Despite centuries of deterioration, war damage and repeated restorations, it remains one of the most studied and reproduced religious paintings in history, defining how the scene is imagined to this day.",
    historicalContext: "Commissioned by Ludovico Sforza, Duke of Milan. Leonardo experimented with techniques that unfortunately led to rapid deterioration.",
    facts: [
      "Measures about 4.6 by 8.8 metres on the refectory wall.",
      "Painted in oil and tempera on dry plaster, not true fresco.",
      "Survived a 1943 bombing that destroyed much of the refectory.",
      "Restored over two decades, from 1978 to 1999.",
      "Visitor numbers are strictly limited to preserve it.",
    ],
    category: "painting",
  },
  {
    id: "4",
    title: "Self-Portrait",
    year: 1512,
    medium: "Red chalk on paper",
    dimensions: "33.3 cm × 21.3 cm (13.1 in × 8.4 in)",
    location: "Biblioteca Reale, Turin",
    imageUrl: wm("Leonardo da Vinci - presumed self-portrait - WGA12798.jpg"),
    tagline: "The presumed face of the master, drawn in old age.",
    description: "A presumed self-portrait of Leonardo in his later years, showing an elderly man with flowing beard and piercing gaze.",
    about: [
      "This red-chalk drawing of an elderly man with a long beard and penetrating gaze is traditionally identified as Leonardo's self-portrait, made around 1512 when he was in his sixties. The attribution and identification have been debated, but the image has become inseparable from the popular picture of Leonardo himself.",
      "The face is rendered with economical, confident strokes that nonetheless convey age, wisdom and a certain weariness. Whether or not it is truly Leonardo, it stands as one of the most evocative portrait drawings of the Renaissance.",
    ],
    technique: "Worked in red chalk (sanguine) on paper, the drawing exploits the medium's warmth and softness to build form through fine hatching and gentle blending.",
    significance: "Held in the Royal Library of Turin and rarely displayed because of its fragility, the sheet is among the most reproduced images of Leonardo and shapes how the world pictures the archetypal Renaissance genius.",
    historicalContext: "Created when Leonardo was around 60 years old, during his time in France under the patronage of King Francis I.",
    facts: [
      "Drawn in red chalk (sanguine).",
      "Kept at the Biblioteca Reale in Turin.",
      "Its identification as a true self-portrait is disputed.",
      "Seldom exhibited due to light sensitivity.",
      "Often used as the definitive likeness of Leonardo.",
    ],
    category: "portrait",
  },
  {
    id: "5",
    title: "Virgin of the Rocks",
    year: 1483,
    medium: "Oil on wood (later transferred to canvas)",
    dimensions: "189.5 cm × 120 cm (74.6 in × 47.2 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("Leonardo Da Vinci - Vergine delle Rocce (Louvre).jpg"),
    tagline: "Two versions, one mysterious grotto.",
    description: "A mystical painting showing the Virgin Mary with the infant Saint John the Baptist and an angel in an atmospheric rocky grotto.",
    about: [
      "The Virgin of the Rocks shows the Virgin Mary, the Christ Child, the infant John the Baptist and an angel gathered in a shadowy rocky landscape. Leonardo painted two closely related versions: the earlier one in the Louvre and a later one, partly by his workshop, in London's National Gallery.",
      "The figures are knit together by gestures — Mary's sheltering hand, the angel's pointing finger, the children's blessing and prayer — within an enveloping atmosphere of damp rock, water and filtered light. The setting reflects Leonardo's fascination with geology, botany and the play of light in deep space.",
    ],
    technique: "Oil paint allowed Leonardo to build the soft, smoky transitions of sfumato and the cool, cavernous light, modelling flesh and stone with subtle gradations rather than hard contours.",
    significance: "The commission's long legal dispute and the existence of two autograph-level versions make the work a key case study in Leonardo's practice and in how Renaissance workshops operated.",
    historicalContext: "There are two versions of this painting — the Louvre version shown here and one in the National Gallery, London.",
    facts: [
      "Two versions exist — the Louvre and the National Gallery, London.",
      "Commissioned for a Milan chapel altarpiece in 1483.",
      "The commission led to a protracted payment dispute.",
      "Set in an imaginary grotto reflecting his geological studies.",
      "The Louvre panel was later transferred to canvas.",
    ],
    category: "painting",
  },
  {
    id: "6",
    title: "Annunciation",
    year: 1472,
    medium: "Oil and tempera on wood",
    dimensions: "98 cm × 217 cm (38.6 in × 85.4 in)",
    location: "Uffizi Gallery, Florence",
    imageUrl: wm("Annunciation (Leonardo c. 1472–1476).jpg", 1400),
    tagline: "An early masterpiece of light, garden and gesture.",
    description: "One of Leonardo's earliest works, depicting the Angel Gabriel announcing to Mary that she will become the mother of Jesus.",
    about: [
      "One of Leonardo's earliest surviving paintings, the Annunciation depicts the Angel Gabriel kneeling before the Virgin Mary to announce that she will bear the son of God. It was produced around 1472–1476 while Leonardo was still working in or near Verrocchio's Florentine workshop.",
      "The scene unfolds in a carefully measured garden before a classical building, with a distant hazy landscape beyond. Already visible are Leonardo's signature interests: meticulously observed plants and wings, soft atmospheric distance, and naturalistic drapery and light.",
    ],
    technique: "Painted in oil and tempera on a wide wood panel, the work shows Leonardo experimenting with subtle modelling and atmospheric perspective even as some passages retain the precision of his early training.",
    significance: "Now in the Uffizi, it is regarded as a foundational work for understanding Leonardo's development, marking the transition from apprentice contributions to fully independent invention.",
    historicalContext: "Painted when Leonardo was only about 20 years old, while still associated with Verrocchio's workshop in Florence.",
    facts: [
      "Among Leonardo's earliest known paintings.",
      "Painted when he was only around twenty.",
      "The angel's wings were modelled on real bird wings.",
      "Now displayed in the Uffizi Gallery, Florence.",
      "Its perspective has prompted scholarly debate.",
    ],
    category: "painting",
  },
  {
    id: "7",
    title: "Lady with an Ermine",
    year: 1490,
    medium: "Oil on walnut panel",
    dimensions: "54 cm × 39 cm (21 in × 15 in)",
    location: "Czartoryski Museum, Kraków",
    imageUrl: wm("Lady with an Ermine - Leonardo da Vinci (adjusted levels).jpg"),
    tagline: "Cecilia Gallerani and her telling little beast.",
    description: "A portrait of Cecilia Gallerani holding an ermine, radiating an unprecedented sense of movement, intelligence and presence.",
    about: [
      "This portrait of a young woman cradling an ermine is generally identified as Cecilia Gallerani, the mistress of Ludovico Sforza, Duke of Milan, painted around 1489–1491. She turns sharply as if responding to someone outside the frame, giving the image a startling sense of life and movement.",
      "The white ermine is a layered symbol: a pun on a Greek word for the animal echoing Gallerani's name, and an emblem of the Duke, who belonged to the chivalric Order of the Ermine. The animal's alert pose mirrors the sitter's own intelligent attentiveness.",
    ],
    technique: "Leonardo models the face and hand with soft oil glazes and a gentle fall of light, while the dark background — likely overpainted later — throws the luminous figure forward.",
    significance: "Widely considered one of the great portraits of the Renaissance, it shows Leonardo reinventing the genre by capturing a momentary turn and inner alertness rather than a static profile.",
    historicalContext: "Cecilia was the mistress of Ludovico Sforza; the ermine is both a pun on her name and an emblem of the Duke's chivalric order.",
    facts: [
      "The sitter is believed to be Cecilia Gallerani.",
      "The ermine puns on her name and references the Sforza order.",
      "Held at the Czartoryski Museum in Kraków, Poland.",
      "The dark background is thought to have been repainted.",
      "One of only a handful of portraits of women by Leonardo.",
    ],
    category: "portrait",
  },
  {
    id: "8",
    title: "Salvator Mundi",
    year: 1500,
    medium: "Oil on walnut panel",
    dimensions: "45.4 cm × 65.6 cm (17.9 in × 25.8 in)",
    location: "Private collection",
    imageUrl: wm("Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.jpg"),
    tagline: "The 'Saviour of the World' — and the most expensive painting ever sold.",
    description: "Christ as 'Saviour of the World', raising his right hand in blessing while holding a translucent crystal orb.",
    about: [
      "Salvator Mundi depicts Christ as saviour of the world, facing the viewer, raising his right hand in blessing while holding a transparent crystal orb in his left. Long known only through copies and Leonardo's preparatory studies, a heavily damaged and restored version was controversially attributed to Leonardo in the 21st century.",
      "The painting's attribution remains debated among scholars — opinions range from a fully autograph Leonardo to a workshop production with the master's involvement. Regardless, its sale and the questions surrounding it have made it one of the most talked-about pictures in the world.",
    ],
    technique: "Executed in oil on a walnut panel, the work uses sfumato in the face and hair; the crystal orb is rendered without the optical distortion real glass would produce, a point often raised in attribution debates.",
    significance: "In 2017 it sold at auction for about US$450 million — the highest price ever paid for a painting — and its current whereabouts have themselves become a matter of intrigue.",
    historicalContext: "In 2017 it became the most expensive painting ever sold at auction, fetching US$450.3 million amid ongoing debate over attribution.",
    facts: [
      "Sold for roughly US$450 million in 2017, an auction record.",
      "Its attribution to Leonardo is still disputed.",
      "Survived in poor condition and underwent heavy restoration.",
      "The crystal orb lacks the distortion real glass would cause.",
      "Its current location has not been publicly confirmed.",
    ],
    category: "painting",
  },
  {
    id: "9",
    title: "Ginevra de' Benci",
    year: 1478,
    medium: "Oil on panel",
    dimensions: "38.1 cm × 37 cm (15.0 in × 14.6 in)",
    location: "National Gallery of Art, Washington",
    imageUrl: wm("Leonardo da Vinci - Ginevra de' Benci - Google Art Project.jpg"),
    tagline: "A Florentine beauty framed by juniper — virtue and a pun.",
    description: "An early portrait of a young Florentine noblewoman set against a juniper bush — a visual pun on her name (ginepro).",
    about: [
      "Painted around 1478, this portrait depicts Ginevra de' Benci, a young Florentine noblewoman, set against a spiky juniper bush. The Italian word for juniper, 'ginepro', is a visual pun on her name. Her pale, almost severe face is set off by dark foliage and a misty landscape.",
      "The reverse of the panel bears an emblem of laurel and palm encircling a sprig of juniper, with the Latin motto 'Virtutem forma decorat' — 'Beauty adorns Virtue'. The panel was originally taller; its lower portion, probably including the hands, was cut down at some point.",
    ],
    technique: "Leonardo blends oil and tempera to achieve luminous flesh and finely detailed foliage, using his characteristic soft light and atmospheric background.",
    significance: "It is the only painting by Leonardo on public display in the Americas, held by the National Gallery of Art in Washington, and an important early example of his portraiture.",
    historicalContext: "The only Leonardo painting on public view in the Americas. Its reverse bears an emblem and the motto 'Beauty adorns Virtue'.",
    facts: [
      "The juniper bush is a pun on the sitter's name, Ginevra.",
      "The reverse reads 'Beauty adorns Virtue' in Latin.",
      "The panel was trimmed, likely losing her hands.",
      "The only Leonardo painting on public view in the Americas.",
      "Acquired by the National Gallery of Art in 1967.",
    ],
    category: "portrait",
  },
  {
    id: "10",
    title: "Saint John the Baptist",
    year: 1513,
    medium: "Oil on walnut panel",
    dimensions: "69 cm × 57 cm (27 in × 22 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("Leonardo da Vinci - Saint John the Baptist C2RMF retouched.jpg"),
    tagline: "A smile emerging from darkness, pointing toward heaven.",
    description: "Believed to be Leonardo's last painting — John emerges from darkness with an ambiguous smile, pointing toward heaven.",
    about: [
      "Believed to be among Leonardo's last paintings, completed around 1513–1516, Saint John the Baptist shows the youthful saint emerging from near-total darkness. He raises one finger toward heaven and wears an enigmatic, almost teasing smile, holding a reed cross.",
      "The figure is bathed in a soft, internal-seeming light that dissolves the boundary between body and shadow. The ambiguity of the expression and gesture has unsettled and fascinated viewers for centuries, blurring sacred iconography with something more mysterious and personal.",
    ],
    technique: "The painting is an extreme exercise in chiaroscuro and sfumato: the body glows against an almost black ground, with contours melting into shadow.",
    significance: "Held in the Louvre, it is often read as the culmination of Leonardo's late style, in which form, light and meaning are deliberately rendered uncertain.",
    historicalContext: "An extreme example of sfumato and chiaroscuro, the figure dissolving softly into an almost black ground.",
    facts: [
      "Thought to be Leonardo's final painting.",
      "The figure points upward holding a reed cross.",
      "An extreme example of his dark, smoky chiaroscuro.",
      "Now in the Musée du Louvre.",
      "Its ambiguous smile echoes the Mona Lisa.",
    ],
    category: "painting",
  },
  {
    id: "11",
    title: "The Virgin and Child with Saint Anne",
    year: 1503,
    medium: "Oil on wood panel",
    dimensions: "168 cm × 130 cm (66 in × 51 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("Leonardo da Vinci - Virgin and Child with St Anne C2RMF retouched.jpg"),
    tagline: "Three generations folded into one pyramidal embrace.",
    description: "Three generations woven into a single pyramidal composition — Saint Anne, the Virgin, the Christ Child and a lamb.",
    about: [
      "This panel shows Saint Anne, her daughter the Virgin Mary, the Christ Child and a sacrificial lamb, arranged in a complex interlocking pyramid. Mary leans from her mother's lap toward the child, who playfully grasps the lamb — a foreshadowing of the Passion.",
      "Leonardo worked on the composition for years, producing famous preparatory cartoons. The tender, slightly unstable stacking of figures and the smoky mountainous background show his mature ambition to unite deep emotion, movement and landscape in a single design.",
    ],
    technique: "Painted in oil on wood, the work uses sfumato and atmospheric perspective to dissolve the distant peaks into haze and to bind the figures with soft, continuous light.",
    significance: "Left unfinished at Leonardo's death and now in the Louvre, the painting and its related cartoons profoundly influenced later artists and even inspired a famous psychoanalytic essay by Sigmund Freud.",
    historicalContext: "Leonardo reworked this complex group for years; its tender psychology fascinated Freud and generations of artists.",
    facts: [
      "Depicts three generations: Anne, Mary and the Christ Child.",
      "The lamb foreshadows Christ's sacrifice.",
      "Leonardo reworked the composition over many years.",
      "Left unfinished at his death.",
      "Inspired a well-known essay by Sigmund Freud.",
    ],
    category: "painting",
  },
  {
    id: "12",
    title: "Adoration of the Magi",
    year: 1481,
    medium: "Oil on panel (underpainting)",
    dimensions: "244 cm × 240 cm (96 in × 94 in)",
    location: "Uffizi Gallery, Florence",
    imageUrl: wm("Adoration of the Magi (Leonardo).jpg"),
    tagline: "An unfinished revolution swirling with figures.",
    description: "An unfinished but revolutionary composition swirling with figures around the Virgin and Child, full of restless energy.",
    about: [
      "Commissioned in 1481 for a monastery near Florence, the Adoration of the Magi was left unfinished when Leonardo departed for Milan the following year. Even as a brown underpainting it is revolutionary: the Virgin and Child sit at the calm centre of a turbulent crowd of adoring and agitated figures.",
      "In the background, ruined classical architecture and battling horsemen suggest the collapse of the old order before the new. The dynamic, swirling arrangement broke decisively with the static, frieze-like adorations of earlier painters.",
    ],
    technique: "The panel survives as an underdrawing and underpainting in ink and earth tones, offering a rare window into how Leonardo blocked out light, shade and movement before applying colour.",
    significance: "Though never completed, it is regarded as a turning point in Renaissance composition and a key document of Leonardo's working method; it now hangs in the Uffizi.",
    historicalContext: "Left incomplete when Leonardo departed for Milan in 1482; its dynamic crowd broke entirely with static earlier conventions.",
    facts: [
      "Commissioned in 1481 but never finished.",
      "Abandoned when Leonardo moved to Milan in 1482.",
      "Survives as a monochrome underpainting.",
      "The crowd reacts in a dynamic, swirling arrangement.",
      "Displayed in the Uffizi Gallery, Florence.",
    ],
    category: "painting",
  },
  {
    id: "13",
    title: "Saint Jerome in the Wilderness",
    year: 1480,
    medium: "Oil and tempera on walnut panel",
    dimensions: "103 cm × 75 cm (41 in × 30 in)",
    location: "Vatican Museums, Rome",
    imageUrl: wm("Leonardo da Vinci — Jerome.jpg"),
    tagline: "Penitence and anatomy laid bare.",
    description: "An unfinished study of the penitent Saint Jerome kneeling with a lion, displaying Leonardo's deep anatomical knowledge.",
    about: [
      "This unfinished panel shows the aged Saint Jerome kneeling in rocky wilderness, a stone in his hand to beat his breast in penance, with a lion — his traditional companion — stretched at his feet. Jerome's gaunt, twisting body is a study in expressive anatomy.",
      "Leonardo's knowledge of the muscles and tendons of the neck and shoulder is already evident, years before his systematic dissections. The painting's raw, monochromatic state reveals his process of building a figure from the structure outward.",
    ],
    technique: "Worked in oil and tempera and left largely as an underpainting, it shows Leonardo modelling the body in light and shadow before adding colour and finish.",
    significance: "Now in the Vatican Museums, it is prized both as a powerful devotional image and as evidence of Leonardo's fusion of anatomical science with art.",
    historicalContext: "The gaunt, twisting figure reveals Leonardo's studies of the human body beneath the skin years before his formal dissections.",
    facts: [
      "Left unfinished, in a near-monochrome state.",
      "The lion is Saint Jerome's traditional attribute.",
      "Reveals Leonardo's early anatomical knowledge.",
      "Reputedly once cut into pieces and later reassembled.",
      "Held in the Vatican Museums, Rome.",
    ],
    category: "painting",
  },
  {
    id: "14",
    title: "La Belle Ferronnière",
    year: 1495,
    medium: "Oil on walnut panel",
    dimensions: "63 cm × 45 cm (25 in × 18 in)",
    location: "Musée du Louvre, Paris",
    imageUrl: wm("La Belle Ferronière - Google Arts.jpg"),
    tagline: "A cool, direct gaze from the Milanese court.",
    description: "A poised portrait of a lady of the Milanese court, her steady sidelong gaze meeting the viewer with quiet directness.",
    about: [
      "This portrait of a lady of the Milanese court, painted in the 1490s, is traditionally called 'La Belle Ferronnière' — a title born of a later misidentification. The sitter may be Lucrezia Crivelli, another mistress of Ludovico Sforza.",
      "She meets the viewer with a steady, slightly sidelong look, her form sharply defined against a dark ground and separated from us by a painted parapet. The restrained palette and controlled light concentrate all attention on her composed, intelligent face.",
    ],
    technique: "Leonardo uses oil glazes to render skin, jewellery and fabric with quiet precision, and a strong directional light to give the head sculptural solidity.",
    significance: "Held in the Louvre, the portrait demonstrates Leonardo's command of psychological presence and influenced the development of court portraiture.",
    historicalContext: "Likely depicting Lucrezia Crivelli, another mistress of Ludovico Sforza; the title derives from a later misidentification.",
    facts: [
      "The title comes from a later mistaken identification.",
      "The sitter may be Lucrezia Crivelli.",
      "A painted parapet separates her from the viewer.",
      "Now in the Musée du Louvre.",
      "Its attribution to Leonardo is widely accepted.",
    ],
    category: "portrait",
  },
  {
    id: "15",
    title: "Madonna of the Carnation",
    year: 1479,
    medium: "Oil on panel",
    dimensions: "62 cm × 47.5 cm (24 in × 19 in)",
    location: "Alte Pinakothek, Munich",
    imageUrl: wm("LEONARDO-DA-VINCI - MADONNA-MIT-DER-NELKE-7779 917154 BSTGS.jpg"),
    tagline: "An early Madonna against Leonardo's hazy peaks.",
    description: "A young Madonna offers a carnation to the Christ Child before a window opening onto Leonardo's signature hazy mountains.",
    about: [
      "Painted around 1478–1480, the Madonna of the Carnation shows a young Virgin offering a carnation to the Christ Child, who reaches for it from her lap. The pair sit before a window opening onto a misty mountain landscape.",
      "The work reveals Leonardo's debt to his teacher Verrocchio alongside his own emerging gifts — the soft modelling of the child's flesh, the elaborate crystalline vase of flowers, and the atmospheric blue distance that would become a hallmark of his art.",
    ],
    technique: "Painted in oil, the panel shows Leonardo exploring transparent glazes and atmospheric perspective; some drying cracks in the Virgin's face reveal the experimental nature of his early oil practice.",
    significance: "Now in the Alte Pinakothek in Munich, it is an important early independent work documenting Leonardo's break from his master's style.",
    historicalContext: "An early independent work showing the influence of Verrocchio alongside Leonardo's emerging mastery of light and landscape.",
    facts: [
      "An early independent work by Leonardo.",
      "Shows the influence of his teacher Verrocchio.",
      "The carnation carries symbolic meaning.",
      "Drying cracks mar the Virgin's face.",
      "Held in the Alte Pinakothek, Munich.",
    ],
    category: "painting",
  },
  {
    id: "16",
    title: "Portrait of a Musician",
    year: 1485,
    medium: "Oil on walnut panel",
    dimensions: "44.7 cm × 32 cm (17.6 in × 12.6 in)",
    location: "Pinacoteca Ambrosiana, Milan",
    imageUrl: wm("Leonardo da Vinci - Portrait of a Musician - Pinacoteca Ambrosiana.jpg"),
    tagline: "Leonardo's only known male portrait.",
    description: "Leonardo's only known male portrait, depicting a musician holding a sheet of musical notation in his hand.",
    about: [
      "This panel, painted around 1483–1487, is Leonardo's only known portrait of a man. The young sitter holds a folded sheet of musical notation, which gives the work its name and suggests he was a musician — possibly Franchino Gaffurio, choirmaster of Milan Cathedral.",
      "The face is finished with great subtlety, the eyes alert and the curls crisply defined, while the clothing and hand remain comparatively unfinished. The contrast offers a vivid lesson in how Leonardo brought a portrait to life from the features outward.",
    ],
    technique: "Oil on panel, with the head modelled in delicate light and shade while the lower portion is left in an earlier, sketchier state.",
    significance: "Held in the Pinacoteca Ambrosiana in Milan, it is a key example of Leonardo's Milanese portraiture and of his interest in music, which he both practised and theorised.",
    historicalContext: "The sitter may be Franchino Gaffurio, choirmaster of Milan Cathedral. The lower portion remains unfinished.",
    facts: [
      "Leonardo's only surviving male portrait.",
      "The sitter holds a sheet of musical notation.",
      "Possibly depicts the composer Franchino Gaffurio.",
      "The clothing and hand are unfinished.",
      "Kept at the Pinacoteca Ambrosiana, Milan.",
    ],
    category: "portrait",
  },
  {
    id: "17",
    title: "Head of a Woman (La Scapigliata)",
    year: 1500,
    medium: "Earth, amber and white lead on poplar",
    dimensions: "24.7 cm × 21 cm (9.7 in × 8.3 in)",
    location: "Galleria Nazionale, Parma",
    imageUrl: wm("Leonardo da vinci - La scapigliata.jpg"),
    tagline: "'The dishevelled one' — suspended between drawing and painting.",
    description: "An exquisite, deliberately unfinished study of a young woman with tousled hair and downcast, dreaming eyes.",
    about: [
      "This small panel shows the head of a young woman with downcast eyes and loose, tousled hair, from which it takes its Italian nickname 'La Scapigliata' ('the dishevelled woman'). The face is delicately finished while the hair and shoulders dissolve into rapid, unfinished strokes.",
      "Whether a preparatory study or a deliberately 'non finito' work of art in its own right, it radiates an extraordinary inner stillness and tenderness, distilling Leonardo's lifelong pursuit of capturing a living soul.",
    ],
    technique: "Worked in earth pigments, amber and white lead on poplar, it hovers between drawing and painting, with only the face brought to a high finish.",
    significance: "Now in the Galleria Nazionale in Parma, it is treasured as one of the most intimate and haunting images attributed to Leonardo.",
    historicalContext: "Its title means 'the dishevelled one'. Suspended between drawing and painting, it distills Leonardo's pursuit of inner life.",
    facts: [
      "Its name means 'the dishevelled one' in Italian.",
      "Deliberately left unfinished ('non finito').",
      "Made with earth pigments and white lead on poplar.",
      "Only the face is fully finished.",
      "Held in the Galleria Nazionale, Parma.",
    ],
    category: "drawing",
  },
  {
    id: "18",
    title: "Codex on the Flight of Birds",
    year: 1505,
    medium: "Pen and ink on paper (manuscript)",
    dimensions: "21 cm × 15 cm (8.3 in × 5.9 in)",
    location: "Biblioteca Reale, Turin",
    imageUrl: wm("Leonardo da vinci, Codex on the flight of birds.jpg"),
    tagline: "Notebook of feathers, wind and the dream of flight.",
    description: "A short codex of mirror-written notes and sketches analysing bird flight, air currents and the mechanics of a flying machine.",
    about: [
      "The Codex on the Flight of Birds is a small notebook from around 1505 in which Leonardo analyses how birds stay aloft, manoeuvre and recover their balance in the wind. Across its pages he mixes close observation with the design of a human flying machine.",
      "Written in his characteristic mirror script, the codex anticipates ideas about air resistance, centre of gravity and lift. In one famous passage Leonardo predicts that a great bird — his flying machine — will take its first flight, filling the universe with wonder.",
    ],
    technique: "Pen-and-ink sketches and dense mirror-written notes fill the small paper leaves, combining empirical observation with engineering speculation.",
    significance: "Held in the Royal Library of Turin, the codex is celebrated as an early milestone in the study of aerodynamics and Leonardo's most concentrated meditation on flight.",
    historicalContext: "In these pages Leonardo anticipates principles of aerodynamics, arguing that the same air resistance that supports a bird could lift a machine.",
    facts: [
      "A small notebook of about a dozen folios.",
      "Written in Leonardo's mirror script.",
      "Anticipates principles of aerodynamics.",
      "Links bird flight to a human flying machine.",
      "Kept at the Biblioteca Reale, Turin.",
    ],
    category: "manuscript",
  },
  {
    id: "19",
    title: "The Baptism of Christ",
    year: 1475,
    medium: "Oil and tempera on wood",
    dimensions: "177 cm × 151 cm (70 in × 59 in)",
    location: "Uffizi Gallery, Florence",
    imageUrl: wm("Andrea del Verrocchio, Leonardo da Vinci - Baptism of Christ - Uffizi.jpg"),
    tagline: "The pupil's angel that outshone the master.",
    description: "A collaboration with his master Verrocchio; the young Leonardo painted the luminous kneeling angel on the far left and much of the landscape.",
    about: [
      "The Baptism of Christ was painted in Verrocchio's workshop around 1472–1475, with the young Leonardo contributing as an assistant. He is credited with painting the kneeling angel on the far left and much of the misty landscape, and with work on the figure of Christ.",
      "According to the biographer Giorgio Vasari, when Verrocchio saw how far his pupil's angel surpassed his own work, he resolved never to paint again. Whether literally true or not, the story dramatises the moment Leonardo's gifts became unmistakable.",
    ],
    technique: "The collaborative panel mixes tempera and the newer oil medium; Leonardo's passages show softer modelling and atmospheric distance than the firmer style of the workshop.",
    significance: "Now in the Uffizi, it is a fascinating record of Renaissance workshop collaboration and of Leonardo's earliest documented contribution to a major painting.",
    historicalContext: "Vasari recounts that Verrocchio, seeing his pupil's angel surpass his own work, resolved never to paint again.",
    facts: [
      "A collaboration led by Andrea del Verrocchio.",
      "Leonardo painted the left-hand angel and parts of the landscape.",
      "Vasari claimed Verrocchio gave up painting in response.",
      "Combines tempera and oil techniques.",
      "Displayed in the Uffizi Gallery, Florence.",
    ],
    category: "painting",
  },
  {
    id: "20",
    title: "Benois Madonna",
    year: 1478,
    medium: "Oil on canvas (transferred from panel)",
    dimensions: "49.5 cm × 33 cm (19.5 in × 13 in)",
    location: "Hermitage Museum, Saint Petersburg",
    imageUrl: wm("Madonna benois 01.jpg"),
    tagline: "A young mother and child caught in a moment of play.",
    description: "A youthful, informal Madonna playing with the Christ Child as he reaches for a sprig of flowers — full of natural, human tenderness.",
    about: [
      "The Benois Madonna, painted around 1478–1480, shows a youthful, smiling Virgin holding the Christ Child as he reaches with intense concentration for a sprig of flowers she offers. The informal, almost domestic tenderness was strikingly new for its time.",
      "It is probably one of the two Madonnas Leonardo recorded beginning in 1478. Lost to scholarship for centuries, it resurfaced in the collection of the Benois family — from whom it takes its name — and entered the Hermitage in the early 20th century.",
    ],
    technique: "An early oil painting, later transferred to canvas, it explores natural light, soft modelling and a candid, momentary interaction between mother and child.",
    significance: "Held in the Hermitage in Saint Petersburg, it is valued as a vivid example of how Leonardo humanised sacred subjects.",
    historicalContext: "One of two Madonnas Leonardo recorded starting in 1478; rediscovered in the 20th century from the Benois family collection.",
    facts: [
      "Named after the Benois family who once owned it.",
      "Likely one of two Madonnas begun in 1478.",
      "The child reaches for a flower with intense focus.",
      "Transferred from panel to canvas.",
      "Held at the Hermitage Museum, Saint Petersburg.",
    ],
    category: "painting",
  },
  {
    id: "21",
    title: "Madonna Litta",
    year: 1490,
    medium: "Tempera on canvas (transferred from panel)",
    dimensions: "42 cm × 33 cm (17 in × 13 in)",
    location: "Hermitage Museum, Saint Petersburg",
    imageUrl: wm("Leonardo da Vinci - Madonna Litta - WGA12702.jpg"),
    tagline: "A serene nursing Madonna between two windows.",
    description: "A serene Madonna nursing the Christ Child, framed by two arched windows that open onto a distant blue landscape.",
    about: [
      "The Madonna Litta, dating from around 1490, depicts the Virgin nursing the Christ Child before a wall pierced by two arched windows that open onto a distant blue landscape. The child turns his gaze outward toward the viewer.",
      "Attributed to Leonardo and his workshop, the painting is admired for its calm symmetry, the tender exchange between mother and child, and the luminous landscape glimpsed beyond. A preparatory study for the child's head survives in Leonardo's hand.",
    ],
    technique: "Executed in tempera and later transferred to canvas, the work uses balanced architecture and cool, distant light to frame the intimate central group.",
    significance: "Named after the Litta family of Milan and now in the Hermitage, it remains one of the most reproduced devotional images associated with Leonardo, even as scholars debate the extent of his own hand.",
    historicalContext: "Attributed to Leonardo and his workshop; named after the Litta family of Milan, who owned it in the 19th century.",
    facts: [
      "Named after Milan's Litta family.",
      "Shows the Virgin nursing the Christ Child.",
      "Two arched windows frame a distant landscape.",
      "Attributed to Leonardo and his workshop.",
      "Held at the Hermitage Museum, Saint Petersburg.",
    ],
    category: "painting",
  },
];

/**
 * Subject/motif tags and a representative colour palette for each artwork,
 * keyed by id. Kept separate from the prose records above so the descriptive
 * "catalogue" data stays readable; merged into `ARTWORKS` below.
 */
const ARTWORK_EXTRAS: Record<string, { subjects: string[]; palette: { name: string; hex: string }[] }> = {
  "1": {
    subjects: ["Portrait", "Sfumato", "Veiled smile", "Imaginary landscape", "Lisa Gherardini"],
    palette: [
      { name: "Umber shadow", hex: "#3B2F25" },
      { name: "Warm flesh", hex: "#C9A66B" },
      { name: "Sfumato green", hex: "#3E4A3A" },
      { name: "Hazy blue", hex: "#8FA0A0" },
    ],
  },
  "2": {
    subjects: ["Proportion", "Geometry", "Anatomy", "Humanism", "Mirror script"],
    palette: [
      { name: "Aged paper", hex: "#E3D4AE" },
      { name: "Iron-gall ink", hex: "#4A3B2A" },
      { name: "Sanguine", hex: "#9C6B4A" },
      { name: "Deep shadow", hex: "#2B2118" },
    ],
  },
  "3": {
    subjects: ["Religious mural", "The Apostles", "Betrayal", "One-point perspective", "Refectory"],
    palette: [
      { name: "Faded plaster", hex: "#C9BFA6" },
      { name: "Crimson robe", hex: "#7A3030" },
      { name: "Deep blue", hex: "#2E4A6E" },
      { name: "Umber", hex: "#4A3A28" },
    ],
  },
  "4": {
    subjects: ["Old age", "Red chalk", "Flowing beard", "Self-image"],
    palette: [
      { name: "Sanguine", hex: "#9C5A3C" },
      { name: "Warm paper", hex: "#E0CBA0" },
      { name: "Russet", hex: "#6E3B26" },
      { name: "Charcoal", hex: "#2A2018" },
    ],
  },
  "5": {
    subjects: ["Madonna", "Grotto", "Infant John", "Sfumato", "Geology"],
    palette: [
      { name: "Cavern shadow", hex: "#25302B" },
      { name: "Warm flesh", hex: "#C9A66B" },
      { name: "Mossy green", hex: "#3E4A3A" },
      { name: "Cool blue", hex: "#5A7080" },
    ],
  },
  "6": {
    subjects: ["Angel Gabriel", "The Virgin", "Walled garden", "Early work"],
    palette: [
      { name: "Meadow green", hex: "#4A5A3A" },
      { name: "Sky haze", hex: "#9AB0B8" },
      { name: "Marble", hex: "#E2DAC4" },
      { name: "Gold", hex: "#C8A24A" },
    ],
  },
  "7": {
    subjects: ["Court portrait", "Ermine", "Cecilia Gallerani", "Movement"],
    palette: [
      { name: "Black ground", hex: "#1E1A16" },
      { name: "Warm flesh", hex: "#CDA978" },
      { name: "Ermine white", hex: "#ECE6D6" },
      { name: "Deep red", hex: "#6E2B2B" },
    ],
  },
  "8": {
    subjects: ["Christ", "Crystal orb", "Blessing", "Attribution debate"],
    palette: [
      { name: "Dark void", hex: "#1C1714" },
      { name: "Azure robe", hex: "#2E4A6E" },
      { name: "Crimson", hex: "#7A2E2E" },
      { name: "Gilt", hex: "#C8A24A" },
    ],
  },
  "9": {
    subjects: ["Portrait", "Juniper", "Virtue", "Florentine noblewoman"],
    palette: [
      { name: "Juniper green", hex: "#2F3D2E" },
      { name: "Pale flesh", hex: "#D8C2A0" },
      { name: "Stone", hex: "#B7A788" },
      { name: "Misty blue", hex: "#8FA0A0" },
    ],
  },
  "10": {
    subjects: ["Chiaroscuro", "Reed cross", "Ambiguous smile", "Darkness"],
    palette: [
      { name: "Near-black", hex: "#161210" },
      { name: "Warm flesh", hex: "#C9A06A" },
      { name: "Amber", hex: "#8A5A2B" },
      { name: "Shadow brown", hex: "#3A2A1E" },
    ],
  },
  "11": {
    subjects: ["Three generations", "Lamb", "Pyramidal composition", "Madonna"],
    palette: [
      { name: "Hazy peak", hex: "#8FA0A0" },
      { name: "Warm flesh", hex: "#C9A66B" },
      { name: "Lapis", hex: "#2E4A6E" },
      { name: "Earth", hex: "#4A3A28" },
    ],
  },
  "12": {
    subjects: ["Unfinished", "Adoring crowd", "Underpainting", "Nativity"],
    palette: [
      { name: "Bistre", hex: "#4A3826" },
      { name: "Warm ground", hex: "#6E573C" },
      { name: "Pale highlight", hex: "#C9B488" },
      { name: "Shadow", hex: "#261C12" },
    ],
  },
  "13": {
    subjects: ["Penitence", "Lion", "Anatomy", "Unfinished"],
    palette: [
      { name: "Earth brown", hex: "#5A4631" },
      { name: "Pale flesh", hex: "#C7A878" },
      { name: "Stone grey", hex: "#6E665A" },
      { name: "Shadow", hex: "#2A2018" },
    ],
  },
  "14": {
    subjects: ["Court portrait", "Direct gaze", "Parapet", "Milanese lady"],
    palette: [
      { name: "Black ground", hex: "#1A1714" },
      { name: "Crimson bodice", hex: "#7A2E2E" },
      { name: "Warm flesh", hex: "#CDA978" },
      { name: "Gold trim", hex: "#C8A24A" },
    ],
  },
  "15": {
    subjects: ["Madonna", "Carnation", "Early work", "Hazy mountains"],
    palette: [
      { name: "Hazy blue", hex: "#8FA0A0" },
      { name: "Crimson", hex: "#7A3030" },
      { name: "Warm flesh", hex: "#C9A66B" },
      { name: "Gold", hex: "#C8A24A" },
    ],
  },
  "16": {
    subjects: ["Male portrait", "Musician", "Sheet music", "Unfinished"],
    palette: [
      { name: "Dark ground", hex: "#221C16" },
      { name: "Warm flesh", hex: "#CDA978" },
      { name: "Auburn curls", hex: "#6E3B26" },
      { name: "Cream score", hex: "#E6DAC0" },
    ],
  },
  "17": {
    subjects: ["Head study", "Non finito", "Tousled hair", "Inner life"],
    palette: [
      { name: "Warm panel", hex: "#B79A6E" },
      { name: "Soft shadow", hex: "#5A4836" },
      { name: "Highlight", hex: "#E0CBA0" },
      { name: "Umber", hex: "#3A2C1E" },
    ],
  },
  "18": {
    subjects: ["Manuscript", "Bird flight", "Aerodynamics", "Mirror script", "Flying machine"],
    palette: [
      { name: "Aged vellum", hex: "#E3D4AE" },
      { name: "Brown ink", hex: "#4A3B2A" },
      { name: "Sepia wash", hex: "#8A6A45" },
      { name: "Shadow", hex: "#2B2118" },
    ],
  },
  "19": {
    subjects: ["Collaboration", "Verrocchio", "Kneeling angel", "River Jordan"],
    palette: [
      { name: "River blue", hex: "#5A7080" },
      { name: "Warm flesh", hex: "#C9A66B" },
      { name: "Verdant", hex: "#3E4A3A" },
      { name: "Gold halo", hex: "#C8A24A" },
    ],
  },
  "20": {
    subjects: ["Madonna", "Christ Child", "Sprig of flowers", "Early work"],
    palette: [
      { name: "Warm interior", hex: "#6E573C" },
      { name: "Flesh", hex: "#CDA978" },
      { name: "Deep blue", hex: "#2E4A6E" },
      { name: "Highlight", hex: "#E0CBA0" },
    ],
  },
  "21": {
    subjects: ["Madonna", "Nursing", "Arched windows", "Workshop"],
    palette: [
      { name: "Window blue", hex: "#5A7080" },
      { name: "Crimson", hex: "#7A3030" },
      { name: "Warm flesh", hex: "#C9A66B" },
      { name: "Gold", hex: "#C8A24A" },
    ],
  },
};

/**
 * Public artwork list. The detailed slug is derived from every field of each
 * record so it carries the full descriptive context (e.g.
 * `mona-lisa-1503-painting-oil-on-poplar-panel-77-cm-53-cm-30-in-21-in-musee-du-louvre-paris`).
 */
export const ARTWORKS: Artwork[] = ARTWORKS_DATA.map((artwork) => ({
  ...artwork,
  ...ARTWORK_EXTRAS[artwork.id],
  slug: buildArtworkSlug(artwork),
}));

// ============================================
// INVENTIONS
// ============================================

const INVENTIONS_DATA: Omit<Invention, "slug" | "subjects">[] = [
  {
    id: "1",
    name: "Flying Machine (Ornithopter)",
    year: 1485,
    category: "aeronautics",
    tagline: "A winged craft to let a human fly like a bird.",
    description: "A human-powered aircraft with wings designed to flap like a bird's, inspired by Leonardo's observations of bird flight.",
    about: [
      "Inspired by his close study of birds and bats, Leonardo designed a human-powered flying machine — an ornithopter — whose wings would beat to generate lift. Sketches across his notebooks show a prone pilot working a system of levers, pulleys and pedals to flap and twist large membranous wings.",
      "Leonardo studied the wing as a structure of spar and membrane, complete with a flexible trailing edge, and considered how a flyer might steer and keep balance. Though human muscle is far too weak to power such flapping flight, the designs reveal a remarkably mechanical, bird-derived approach to the problem.",
    ],
    explanation: "The ornithopter was designed with a wooden frame covered in silk, pine and leather. The pilot would lie prone and drive the wings using hands and feet.",
    materials: "The frame was conceived in light wood and cane, with wings of silk or fine cloth stretched over a jointed skeleton and worked by cords and pulleys — echoing the bones, tendons and feathers of a real wing.",
    modernLegacy: "No flapping-wing craft could ever carry a person by muscle alone, but Leonardo's analysis of wings, air resistance and control prefigures the science of aeronautics; modern engineers have built non-flying models to test his ideas.",
    significance: "The ornithopter embodies Leonardo's conviction that the careful observation of nature could unlock human flight, making him a founding figure in the imaginative history of aviation.",
    facts: [
      "Designed to be powered by the pilot's own muscles.",
      "Modelled directly on bird and bat wings.",
      "The pilot would lie prone and work levers and pedals.",
      "Human muscle is too weak to achieve flapping flight.",
      "Sketched across several of Leonardo's notebooks.",
    ],
    imageUrl: wm("Design for a Flying Machine.jpg"),
  },
  {
    id: "2",
    name: "Diving Suit",
    year: 1500,
    category: "military",
    tagline: "A leather suit to attack ships from beneath the waves.",
    description: "An early diving apparatus with reed breathing tubes and a leather suit, conceived for underwater warfare.",
    about: [
      "Leonardo designed a diving suit while in Venice, which feared naval attack, as a way for divers to approach enemy hulls unseen and sabotage them from below the waterline. The leather suit included a mask with glass eye-pieces and tubes for breathing.",
      "The breathing tubes were to rise to the surface, held open by a floating bell, while details such as a pouch for the diver to relieve himself suggest Leonardo imagined long underwater missions. He reportedly kept some specifics secret, wary of how the device might be misused in war.",
    ],
    explanation: "Designed for Venetian forces to sabotage enemy ships by reaching their hulls from below the waterline; a bag of air allowed the diver to breathe.",
    materials: "The suit was to be made of leather, with cane-and-leather breathing tubes reinforced against water pressure and a bag or bell of air at the surface; glass lenses protected the eyes.",
    modernLegacy: "Leonardo's concept anticipates the basic logic of modern diving equipment — a sealed suit, eye protection and a surface air supply — centuries before practical diving gear existed.",
    significance: "It shows Leonardo applying engineering imagination to the hidden underwater world, and his ethical unease foreshadows modern debates about dual-use military technology.",
    facts: [
      "Designed for the underwater sabotage of enemy ships.",
      "Conceived during Leonardo's time in Venice.",
      "Breathing tubes reached air at the surface.",
      "Included glass lenses to protect the eyes.",
      "Leonardo reportedly hid some details to prevent misuse.",
    ],
    imageUrl: wm("Leonardo-Taucher.jpg"),
  },
  {
    id: "3",
    name: "Armored Fighting Vehicle",
    year: 1487,
    category: "military",
    tagline: "A turtle-shelled war machine bristling with cannon.",
    description: "A turtle-shaped armored vehicle bristling with cannons on every side, powered by hand cranks turned by the men inside.",
    about: [
      "Leonardo's armoured car is a conical, turtle-shaped vehicle clad in metal-reinforced wood, ringed with light cannon pointing in every direction. A crew inside would turn cranks to drive the wheels and advance the machine into battle while protected from arrows and fire.",
      "The sloped shell was designed to deflect projectiles, and the all-round guns let it fire in any direction. Notably, the drawing as preserved contains a deliberate flaw in the gearing that would prevent it from moving — possibly a safeguard, an error, or a trap to foil copyists.",
    ],
    explanation: "Overlapping metal-clad wooden plates deflected fire while the crew advanced — a conical shell that prefigures the modern tank by four centuries.",
    materials: "A wooden framework was to be reinforced with metal plates and topped by a sloping shell, with internal cranks and gears connecting the crew's effort to the wheels.",
    modernLegacy: "Often called an ancestor of the modern tank, the design anticipates the core idea of mobile, armoured, all-round firepower that would only become practical with the engine in the 20th century.",
    significance: "It exemplifies the military engineering Leonardo offered to his patrons, blending intimidation, protection and mobility into a single visionary machine.",
    facts: [
      "A conical, turtle-shaped armoured shell.",
      "Mounted light cannon facing all directions.",
      "Powered by crews turning hand cranks.",
      "The drawn gearing contains a deliberate flaw.",
      "Seen as a forerunner of the modern tank.",
    ],
    imageUrl: wm("Leonardo tank.JPG"),
  },
  {
    id: "4",
    name: "Parachute",
    year: 1483,
    category: "aeronautics",
    tagline: "A linen pyramid for falling from any height unharmed.",
    description: "A rigid pyramid-shaped canopy of sealed linen allowing a person to descend safely from any great height.",
    about: [
      "Leonardo sketched a parachute as a rigid, pyramid-shaped canopy of sealed linen stretched over a wooden frame. He wrote that with such a device a person could 'throw himself down from any great height without injury'.",
      "Where modern parachutes are round and flexible, Leonardo's is a four-sided pyramid roughly seven metres on each side. For centuries it was assumed it could not work — until modern skydivers built and successfully jumped with faithful reconstructions.",
    ],
    explanation: "Leonardo wrote that a 7-by-7-metre frame would let anyone 'throw himself down from any great height without injury'. A 2000 test jump proved him right.",
    materials: "The canopy was to be made of linen sealed against the air, held open by a square wooden frame about seven metres on a side.",
    modernLegacy: "In 2000 the skydiver Adrian Nicholas built a parachute to Leonardo's design and descended safely, vindicating a concept five centuries old; it stands as a milestone in the prehistory of safe descent.",
    significance: "The parachute shows Leonardo reasoning correctly about air resistance and human safety long before the technology or the need fully existed.",
    facts: [
      "A rigid, pyramid-shaped canopy.",
      "Roughly seven metres on each side.",
      "Promised a safe descent 'from any great height'.",
      "Successfully tested with a faithful replica in 2000.",
      "Made of linen over a wooden frame.",
    ],
    imageUrl: wm("Leonardo da Vinci parachute 04659a.jpg"),
  },
  {
    id: "5",
    name: "Anatomical Studies",
    year: 1510,
    category: "anatomical",
    tagline: "Mapping the human body from the inside out.",
    description: "Hundreds of meticulous dissection drawings, including the famous studies of the fetus in the womb.",
    about: [
      "Over his lifetime Leonardo dissected around thirty human bodies, filling notebooks with hundreds of precise drawings of bones, muscles, vessels, organs and the developing fetus in the womb. He combined the eye of an artist with the rigour of a scientist.",
      "He pioneered ways of representing the body — multiple views, exploded and layered diagrams, cross-sections and even wax casts of the heart's chambers. His studies of the heart, spine and fetus were not equalled for generations and were largely unknown until his notebooks were studied centuries later.",
    ],
    explanation: "Leonardo dissected some 30 human corpses, mapping muscles, vessels and organs with an accuracy not matched for centuries.",
    materials: "The studies survive as pen-and-ink drawings with wash over black-chalk underdrawing, annotated in mirror script across thousands of notebook pages.",
    modernLegacy: "Leonardo's methods anticipate modern medical illustration and even imaging, and his observations of the heart's valves have been confirmed by 21st-century cardiology.",
    significance: "His anatomical work represents one of the high points of Renaissance science, fusing art and empirical investigation into a new way of understanding the body.",
    facts: [
      "Based on the dissection of around 30 corpses.",
      "Includes the famous studies of a fetus in the womb.",
      "Pioneered layered and cross-sectional diagrams.",
      "His heart studies were confirmed centuries later.",
      "Largely unpublished and unknown until much later.",
    ],
    imageUrl: wm("Da Vinci Studies of Embryos Luc Viatour.jpg"),
  },
  {
    id: "6",
    name: "Aerial Screw (Helicopter)",
    year: 1489,
    category: "aeronautics",
    tagline: "A spiralling screw meant to bore into the air.",
    description: "A helical screw of linen and reed intended to 'compress the air' and lift itself by rotating rapidly.",
    about: [
      "Leonardo's aerial screw is a helical canopy that, he reasoned, could lift itself by 'screwing' into the air if turned fast enough — a conceptual ancestor of the helicopter rotor. Several men would run around the central shaft to spin it.",
      "The idea drew on the principle of the Archimedes screw applied to air rather than water. In practice the device could never have flown, since no human-powered mechanism could spin it fast enough and it had no way to counter the resulting spin, but the underlying intuition about rotary lift was prophetic.",
    ],
    explanation: "The conceptual ancestor of the helicopter rotor. Modern tests show the design could generate lift, though human muscle alone could never spin it fast enough.",
    materials: "The screw was to be built from reed, linen and wire around a central wooden shaft, the linen stiffened with starch to grip the air.",
    modernLegacy: "While it could not actually fly, the aerial screw foreshadows the principle of rotary-wing flight realised in the modern helicopter; engineers still cite it as an early rotor concept.",
    significance: "It is among the most iconic of Leonardo's flying-machine designs and a vivid emblem of his attempt to conquer the air through mechanism.",
    facts: [
      "A helical screw intended to 'compress' the air.",
      "A conceptual ancestor of the helicopter rotor.",
      "Meant to be spun by several men running in a circle.",
      "Could not generate enough lift with human power.",
      "Built in concept from reed, linen and wire.",
    ],
    imageUrl: wm("Leonardo da Vinci helicopter.jpg"),
  },
  {
    id: "7",
    name: "Giant Crossbow",
    year: 1485,
    category: "military",
    tagline: "A siege bow built as much for terror as for force.",
    description: "An enormous siege crossbow nearly 27 metres wide, engineered for psychological as much as physical impact.",
    about: [
      "Leonardo designed an enormous crossbow nearly 27 metres across, mounted on a wheeled, angled carriage for stability. Rather than arrows, it was meant to hurl large stones or incendiary bombs at the enemy.",
      "A soldier would crank back the bow and release it with a mallet-struck mechanism. Its sheer scale suggests Leonardo intended psychological impact — overawing opponents — as much as raw destructive power, a recurring theme in his military designs for the Sforza court.",
    ],
    explanation: "Mounted on six angled wheels for stability, it was designed to hurl stones or incendiary bombs rather than arrows, intimidating the enemy.",
    materials: "The great bow was to be made of flexible laminated wood on a six-wheeled wooden carriage, drawn back by a worm-gear winding mechanism.",
    modernLegacy: "Never built at full scale, the giant crossbow survives as a striking example of Renaissance siege-engineering imagination and is a favourite of museum reconstructions.",
    significance: "It illustrates Leonardo's flair for combining mechanical ingenuity with the theatre of war to impress potential patrons.",
    facts: [
      "Designed to span nearly 27 metres.",
      "Intended to throw stones or bombs, not arrows.",
      "Mounted on six angled wheels for stability.",
      "Likely meant to terrify as much as to destroy.",
      "Drawn for Leonardo's Milanese patrons.",
    ],
    imageUrl: wm("Leonardo da Vinci's Giant Crossbow - design.jpg"),
  },
  {
    id: "8",
    name: "Self-Propelled Cart",
    year: 1478,
    category: "civilian",
    tagline: "A spring-driven, programmable cart — an ancestor of the robot.",
    description: "A spring-driven, programmable three-wheeled cart — widely regarded as the ancestor of the automobile and the robot.",
    about: [
      "Leonardo designed a three-wheeled cart that moved on its own, powered by coiled springs rather than an animal or a person pushing it. Crucially, its steering could be pre-set using a system of pegs and gears, so it would follow a planned path.",
      "Because it could be 'programmed' in advance and run autonomously, the cart is often described as a forerunner of both the automobile and the robot. It even had a rudimentary braking mechanism that could be released to start it moving.",
    ],
    explanation: "Coiled springs powered the wheels while a system of pegs could pre-set its steering, letting the cart run a programmed path on its own.",
    materials: "Built from wood, the cart used large coiled springs as its power source, with cogwheels and escapement-like mechanisms regulating its motion and steering pegs setting its course.",
    modernLegacy: "Modern reconstructions, including one by Florence's science museum, have confirmed that the cart works — making it a celebrated early example of self-propelled, programmable machinery.",
    significance: "Its combination of stored power and pre-programmed steering anticipates ideas central to robotics and automation.",
    facts: [
      "Powered by coiled springs, not muscle or animals.",
      "Steering could be pre-programmed with pegs.",
      "Often called an ancestor of the car and the robot.",
      "A working replica was built and tested in 2004.",
      "Included a releasable braking mechanism.",
    ],
    imageUrl: wm("Leonardo da Vinci Self Propelled Cart.jpg"),
  },
  {
    id: "9",
    name: "Mechanical Knight (Automaton)",
    year: 1495,
    category: "civilian",
    tagline: "A suit of armour brought to life by cords and pulleys.",
    description: "A humanoid automaton in armour able to sit, stand, raise its visor and move its arms through a system of cables and pulleys.",
    about: [
      "Around 1495 Leonardo designed a humanoid automaton — a knight in armour able to sit up, stand, move its arms, turn its head and raise its visor. It was likely built to entertain the court of Milan.",
      "The knight's motions were driven by an external system of cables, pulleys and gears, with separate mechanisms controlling the legs and the arms. It drew directly on Leonardo's anatomical studies of how muscles and joints produce movement.",
    ],
    explanation: "Driven by an external crank and cable mechanism, the knight could perform several motions — an early study in robotics built for the Milanese court.",
    materials: "Constructed from a wood, metal and leather framework inside a suit of armour, the figure was animated by interlinked cables, pulleys and crank-driven gears.",
    modernLegacy: "Roboticists, including NASA's Mark Rosheim, have reconstructed working versions from Leonardo's notes; Rosheim drew on the knight's design while developing robots for planetary exploration.",
    significance: "The mechanical knight is regarded as one of the earliest known designs for a programmable humanoid robot, linking Renaissance anatomy with modern robotics.",
    facts: [
      "Designed around 1495 for the Milanese court.",
      "Could sit, stand, move its arms and raise its visor.",
      "Driven by cables, pulleys and gears.",
      "Based on Leonardo's anatomical studies.",
      "Reconstructed by a NASA roboticist in modern times.",
    ],
    imageUrl: wm("Leonardo-Robot3.jpg"),
  },
  {
    id: "10",
    name: "Revolving Bridge",
    year: 1487,
    category: "architecture",
    tagline: "A swing bridge an army could carry and reuse.",
    description: "A lightweight swing bridge that could pivot across a river and be packed up and transported by an advancing army.",
    about: [
      "Leonardo's revolving bridge was a lightweight military bridge designed to swing across a river or moat on a pivot, allowing troops to cross quickly and then withdraw the bridge behind them. The whole structure could be packed up and transported by an advancing army.",
      "Built as a single span with a counterweight and a rope-and-pulley system, it rotated on a bank-mounted pivot. The design reflects Leonardo's interest in mobile, reusable military infrastructure rather than permanent works.",
    ],
    explanation: "Built as a single span with a rope-and-pulley counterweight, it rotated on a bank-mounted pivot so troops could cross, then withdraw the bridge behind them.",
    materials: "The span was conceived in light timber with iron fittings, balanced by a counterweight and operated by ropes, pulleys and a windlass.",
    modernLegacy: "The concept of a swinging, redeployable bridge anticipates modern portable and swing bridges used by military engineers and in civil infrastructure.",
    significance: "It shows Leonardo thinking about logistics and mobility — how an army could move and adapt — not just about weapons.",
    facts: [
      "A single-span bridge that pivots on one bank.",
      "Could be swung across a river, then withdrawn.",
      "Designed to be packed up and transported.",
      "Balanced by a counterweight and pulleys.",
      "Aimed at fast-moving military campaigns.",
    ],
    imageUrl: wm("Leonardo da Vinci Golden Horn Bridge model side.jpg"),
  },
  {
    id: "11",
    name: "Organ Gun (Ribauldequin)",
    year: 1480,
    category: "military",
    tagline: "Many barrels firing in turns to end the reload pause.",
    description: "A rapid-fire weapon mounting many small-calibre barrels on a revolving rack to keep up a continuous barrage.",
    about: [
      "To overcome the slow reloading of a single cannon, Leonardo designed a multi-barrelled gun — a ribauldequin or 'organ gun' — mounting numerous small-calibre barrels on a revolving rack. While one bank of barrels fired, another could cool and a third be reloaded.",
      "By rotating the rack, a gun crew could keep up an almost continuous barrage. The design tackles a real tactical problem of Renaissance artillery and points toward the idea of sustained, rapid fire.",
    ],
    explanation: "While one bank of barrels fired, another could cool and a third be reloaded, then the rack rotated — an early answer to the slow reload of a single cannon.",
    materials: "The weapon combined many cast small-calibre barrels arranged on a rotating wooden-and-metal frame mounted on a wheeled carriage.",
    modernLegacy: "Its core idea — multiple barrels delivering rapid, sustained fire — looks forward to volley guns and, conceptually, to the machine gun developed centuries later.",
    significance: "The organ gun captures Leonardo's systematic approach to problems, here re-engineering artillery around the bottleneck of reloading.",
    facts: [
      "Mounted many small barrels on a revolving rack.",
      "Designed to fire, cool and reload in rotation.",
      "Aimed at near-continuous bombardment.",
      "Addressed the slow reload of single cannon.",
      "A conceptual forerunner of rapid-fire guns.",
    ],
    imageUrl: wm("Ribauldequins - Leonardo da Vinci studies.jpg"),
  },
  {
    id: "12",
    name: "Scythed Chariot",
    year: 1485,
    category: "military",
    tagline: "Whirling blades to cut a path through infantry.",
    description: "A horse-drawn war machine fitted with whirling scythe blades to clear a path through massed infantry.",
    about: [
      "Leonardo's scythed chariot is a horse-drawn war machine fitted with large rotating scythe blades, geared to spin as the wheels turn and mow down massed infantry in its path. The idea built on ancient war chariots but mechanised the blades.",
      "Leonardo illustrated the device vividly, including its gruesome effect on the battlefield — yet his own notes acknowledge that such a weapon was as dangerous to friendly troops as to the enemy, a candid recognition of its impracticality.",
    ],
    explanation: "Geared blades spun as the wheels turned. Leonardo's own notes acknowledge it was as dangerous to friendly troops as to the enemy.",
    materials: "A wooden chariot frame carried a system of gears linking the wheels to rotating blades and a forward scythe assembly, drawn by horses.",
    modernLegacy: "More cautionary than influential, the scythed chariot is studied today as an example of Leonardo's military imagination and his awareness of a weapon's unintended consequences.",
    significance: "It reveals both Leonardo's inventive ferocity in designing for his patrons and his clear-eyed scepticism about indiscriminate weapons.",
    facts: [
      "Blades were geared to spin with the wheels.",
      "Designed to clear paths through infantry.",
      "Inspired by ancient war chariots.",
      "Leonardo noted it endangered friendly troops too.",
      "Vividly illustrated in his notebooks.",
    ],
    imageUrl: wm("Leonardo da vinci, Assault chariot with scythes.jpg"),
  },
];

/** Theme/motif tags for each invention, keyed by id; merged into `INVENTIONS`. */
const INVENTION_SUBJECTS: Record<string, string[]> = {
  "1": ["Aeronautics", "Flapping wings", "Bird study", "Human-powered"],
  "2": ["Diving", "Underwater warfare", "Breathing apparatus", "Leather suit"],
  "3": ["Armoured vehicle", "All-round cannon", "Hand-cranked", "Proto-tank"],
  "4": ["Parachute", "Air resistance", "Safe descent", "Linen canopy"],
  "5": ["Anatomy", "Dissection", "The fetus", "Medical illustration"],
  "6": ["Aerial screw", "Rotary lift", "Proto-helicopter", "Archimedes screw"],
  "7": ["Siege weapon", "Giant crossbow", "Psychological warfare", "Worm gear"],
  "8": ["Spring power", "Programmable", "Proto-automobile", "Robotics"],
  "9": ["Automaton", "Humanoid robot", "Cables & pulleys", "Court spectacle"],
  "10": ["Military bridge", "Swing span", "Portable", "Counterweight"],
  "11": ["Multi-barrel gun", "Rapid fire", "Revolving rack", "Artillery"],
  "12": ["War chariot", "Rotating blades", "Geared mechanism", "Cautionary design"],
};

/**
 * Public invention list. The detailed slug is derived from every field of each
 * record so it carries the full descriptive context (e.g.
 * `flying-machine-ornithopter-1485-aeronautics`).
 */
export const INVENTIONS: Invention[] = INVENTIONS_DATA.map((invention) => ({
  ...invention,
  subjects: INVENTION_SUBJECTS[invention.id] ?? [],
  slug: buildInventionSlug(invention),
}));

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
