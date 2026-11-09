// Content for every Aesthetics and Longevity service page. One entry = one WordPress page.
(function () {
const U = s => "service.html?p=" + s;
const AES = { label: "Aesthetics", href: "aesthetics.html" };
const LNG = { label: "Longevity", href: "longevity.html" };
const INJ = { label: "Injectables", href: "aesthetics.html#injectables" };
const SKN = { label: "Skin & Laser", href: U("skin-laser") };

// Face-map hotspots (% of a front-facing, shoulders-up portrait; hair uses a top-down scalp photo) and what each concern looks like.
const CONCERNS = {
  "Forehead lines":{"pts":[[50,22]],"look":"Horizontal lines across the forehead that deepen when you raise your brows."},
  "Frown lines (11s)":{"pts":[[50,33]],"look":"Vertical lines between the brows that can make you look tired or stern."},
  "Crow's feet":{"pts":[[25,41],[75,41]],"look":"Fine lines fanning out from the outer corners of the eyes when you smile."},
  "Brow lift":{"pts":[[36,32],[64,32]],"look":"Brows that sit low or heavy, especially at the outer tail."},
  "Bunny lines":{"pts":[[45,47],[55,47]],"look":"Diagonal creases on the sides of the nose when you scrunch or laugh."},
  "Lip flip":{"pts":[[50,62]],"look":"A thin upper lip that rolls inward when you smile."},
  "Gummy smile":{"pts":[[44,57],[56,57]],"look":"More gum showing above the top teeth than you'd like when you smile."},
  "Downturned corners":{"pts":[[41,66],[59,66]],"look":"Mouth corners that pull down, so you look sad at rest."},
  "Jaw clenching":{"pts":[[26,63],[74,63]],"look":"A square, bulky lower jaw from an overworked masseter muscle, often with tension or grinding."},
  "Neck bands":{"pts":[[43,90],[57,90]],"look":"Vertical cords on the front of the neck that show when you tense."},
  "Thin lips":{"pts":[[50,65]],"look":"Lips that have lost fullness or shape, or have always been thin."},
  "Lip lines":{"pts":[[45,60],[55,60]],"look":"Fine vertical lines above the upper lip, sometimes called lipstick lines."},
  "Cheek volume loss":{"pts":[[33,50],[67,50]],"look":"Flatter cheeks that make the midface look tired or hollow."},
  "Under-eye hollows":{"pts":[[38,45],[62,45]],"look":"A shadowed groove under the eyes that rest doesn't fix."},
  "Temple hollowing":{"pts":[[24,30],[76,30]],"look":"A sunken area at the temples that narrows the upper face."},
  "Smile lines":{"pts":[[40,58],[60,58]],"look":"Folds running from the sides of the nose to the corners of the mouth."},
  "Marionette lines":{"pts":[[40,71],[60,71]],"look":"Lines running down from the mouth corners toward the chin."},
  "Soft jawline":{"pts":[[30,72],[70,72]],"look":"A jawline that has lost its edge and blends into the neck."},
  "Weak chin":{"pts":[[50,77]],"look":"A chin that sits back and throws off the balance of your profile."},
  "Gradual volume loss":{"pts":[[33,52],[67,52]],"look":"A thinner, more hollow face that develops over years."},
  "Skin laxity":{"pts":[[32,69],[68,69]],"look":"Skin that sags along the lower face and jowls."},
  "Crepey skin":{"pts":[[37,44],[63,44]],"look":"Thin, finely wrinkled skin that looks like crepe paper."},
  "Fine lines":{"pts":[[26,42],[74,42]],"look":"Shallow lines that show at rest, often around the eyes."},
  "Dull skin":{"pts":[],"look":"Skin that looks flat or tired instead of bright."},
  "Enlarged pores":{"pts":[[44,52],[56,52]],"look":"Visible pores, most often on the nose and inner cheeks."},
  "Aging hands":{"pts":[],"look":"Thin skin on the backs of the hands with visible veins and tendons."},
  "Neck & chest":{"pts":[[50,93]],"look":"Fine lines and crepey skin on the neck and upper chest."},
  "Neck sun damage":{"pts":[[50,93]],"look":"Brown spots, redness and crepey texture on the sides and front of the neck."},
  "Décolletage spots":{"pts":[],"look":"Freckling, sun spots and uneven tone across the upper chest."},
  "Hand spots":{"pts":[],"look":"Age spots and uneven pigment on the backs of the hands."},
  "Shedding on GLP-1s":{"pts":[],"look":"More hair in the brush or shower a few months after starting a GLP-1 or losing weight quickly."},
  "Sun spots":{"pts":[[31,48],[68,38]],"look":"Flat brown spots from sun exposure, often on the cheeks and forehead."},
  "Uneven tone":{"pts":[],"look":"Patchy color or redness across the face."},
  "Dullness":{"pts":[],"look":"Skin that has lost its radiance and looks flat."},
  "Melasma (case by case)":{"pts":[[50,22],[32,50],[68,50]],"look":"Symmetrical brown patches on the cheeks, forehead or upper lip, often hormonal."},
  "Rough texture":{"pts":[],"look":"Skin that feels uneven or bumpy instead of smooth."},
  "Acne scars":{"pts":[[31,56],[69,56]],"look":"Indented scars from past breakouts, often on the cheeks and temples."},
  "Active acne":{"pts":[[34,62],[66,62],[50,76]],"look":"Ongoing breakouts, especially on the cheeks, chin and jawline."},
  "Stretch marks":{"pts":[],"look":"Lines on the body where skin stretched quickly."},
  "Jawline definition":{"pts":[[30,74],[70,74]],"look":"A jaw edge that has softened with age or loose skin."},
  "Neck":{"pts":[[50,89]],"look":"Loose or lined skin on the neck."},
  "Post-acne marks":{"pts":[[35,62],[65,62]],"look":"Flat red or brown marks left after breakouts heal."},
  "Thinning at the crown":{"pts":[[50,64]],"look":"A see-through area at the top back of the head."},
  "Widening part":{"pts":[[50,40]],"look":"A part that looks wider than it used to."},
  "Receding hairline":{"pts":[[32,18],[68,18]],"look":"A hairline moving back at the temples."},
  "Excess shedding":{"pts":[],"look":"More hair than usual in the drain or on your brush."},
  "Postpartum shedding":{"pts":[],"look":"Heavy shedding a few months after giving birth."},
  "Thinning after stress or illness":{"pts":[],"look":"Diffuse shedding 2 to 3 months after illness, surgery or major stress."}
};

const P = {};

P["skin-laser"] = {
  section: "aes", type: "category", crumbs: [AES],
  seoTitle: "Laser, RF Microneedling & Skin Boosters in One Visit, Jersey City | Peak by MD",
  metaDesc: "LaseMD Ultra laser, Potenza RF Microneedling and skin boosters (PDRN, SkinVive, PRP), combined in one visit in Jersey City near Hoboken. Treat tone, texture and firmness with about 24 to 48 hours of downtime.",
  eyebrow: "Skin & Laser · Jersey City, NJ",
  h1: "Three treatments. One visit. Better skin.",
  intro: "LaseMD Ultra, Potenza RF Microneedling and skin boosters each work on a different layer of your skin. Done together in one appointment, they improve tone, texture and firmness at once, with about 24 to 48 hours of downtime.",
  heroPh: "Potenza or LaseMD Ultra treatment in progress",
  heroImg: "assets/ultra-potenza.jpg",
  heroImgAlt: "LaseMD Ultra and Potenza RF Microneedling devices side by side: the power of pairing",
  combo: {
    eyebrow: "Combined in one visit",
    title: "Three layers of skin, treated at once.",
    text: "Each treatment reaches a different depth, so they don't compete. Stacked in one session, they amplify each other: the laser refines the surface, RF rebuilds collagen underneath, and the booster feeds repair while the skin is most receptive. You recover once instead of three times.",
    layers: [
      { depth: "Surface", name: "LaseMD Ultra", text: "A gentle thulium laser that lifts sun spots, evens tone and brightens the top layers of skin." },
      { depth: "Deep dermis", name: "Potenza RF Microneedling", text: "Fine needles deliver radiofrequency below the surface to rebuild collagen for scars, pores and firmness." },
      { depth: "Skin quality", name: "Skin booster", text: "PDRN, SkinVive or PRP to hydrate, calm and speed healing, so results build faster and recovery is easier." }
    ],
    stats: [
      { label: "Appointment", value: "One visit" },
      { label: "Treats", value: "Tone, texture & firmness" },
      { label: "Typical downtime", value: "About 24 to 48 hours" }
    ],
    note: "Combining isn't right for every skin type or concern. Your physician sets the depth, settings and booster at your consultation."
  },
  items: [
    { slug: "laser-resurfacing", name: "Laser Resurfacing", brands: "LaseMD Ultra", img: "assets/laser-resurfacing-erin.jpg", imgPos: "center", imgAlt: "Erin Latoff, NP, performing a LaseMD Ultra laser treatment", text: "A gentle thulium laser that fades sun spots and evens tone.", bestFor: "Sun spots, uneven tone, dullness", shows: "1 to 2 weeks", lasts: "Long-lasting with SPF", downtime: "Redness, 2 to 4 days" },
    { slug: "microneedling", name: "Microneedling", brands: "Classic · Potenza RF · Potenza Fusion", text: "Three levels of microneedling, from classic with PRP, HA or PDRN to Potenza RF and the Fusion Facial.", bestFor: "Acne scars, pores, texture, laxity", shows: "4 to 12 weeks", lasts: "1 to 2 years with RF", downtime: "Redness, 1 to 3 days" },
    { slug: "skin-boosters", name: "Skin Boosters", brands: "PDRN · SkinVive · PRP", img: "assets/rejuran-skin-boosters.jpg", imgAlt: "Rejuran Healing Essence PDRN skin booster box", text: "Injections that improve the skin itself: hydration, elasticity, texture and glow.", bestFor: "Dull, dry or crepey skin, fine lines", shows: "2 to 4 weeks", lasts: "6 to 9 months", downtime: "Small bumps, about 1 day" }
  ],
  faqs: [
    { q: "Can I have all three treatments in one visit?", a: "Yes, for many patients. Because each treatment works at a different depth, we can combine LaseMD Ultra, Potenza RF and a skin booster in a single appointment. Your physician confirms it's right for your skin first." },
    { q: "What is the downtime when they're combined?", a: "Most patients have about 24 to 48 hours of redness and mild sensitivity. You recover once instead of three separate times." },
    { q: "Is combining more effective than doing them separately?", a: "Combining treats tone, texture and firmness in the same healing window, and the booster supports repair while the skin is most receptive. Many patients see more change per session." },
    { q: "Which treatment is best for acne scars?", a: "Most acne scarring responds best to microneedling with Potenza RF, sometimes combined with PRP. Mild texture can improve with classic microneedling. Your physician will assess scar type and depth first." },
    { q: "Is laser safe for darker skin tones?", a: "Many treatments can be adapted for darker skin, but settings and device choice matter. We evaluate your skin type before recommending any energy-based treatment." },
    { q: "How many sessions will I need?", a: "Most plans involve a series of 3 to 4 sessions spaced about a month apart, followed by maintenance." },
    { q: "What about facials?", a: "Facials are offered by Eddie Dasilva, a licensed esthetician on our team, through Eddie's Skincare Studio in Jersey City. We also partner with Erase Spa in Chelsea. Our physicians focus on medical treatments." }
  ]
};

P["neurotoxins"] = {
  section: "aes", type: "treatment", crumbs: [AES, INJ],
  seoTitle: "Botox, Dysport & Xeomin in Jersey City | Peak by MD",
  metaDesc: "Physician-led Botox, Dysport and Xeomin in Jersey City near Hoboken. Soften forehead lines, frown lines and crow's feet with natural movement. Book a consultation.",
  eyebrow: "Neurotoxins · Botox, Dysport, Xeomin",
  h1: "Soften lines. Keep your expression.",
  intro: "Botox, Dysport and Xeomin relax the muscles behind forehead lines, frown lines and crow's feet. Your physician doses for your anatomy, so you look rested and still move naturally.",
  heroPh: "Close-up: neurotoxin treatment, forehead",
  facts: [ { label: "Treatment time", value: "15 to 30 min" }, { label: "Downtime", value: "None to minimal" }, { label: "Results show", value: "3 to 14 days" }, { label: "Lasts", value: "3 to 4 months" } ],
  concerns: ["Forehead lines", "Frown lines (11s)", "Crow's feet", "Bunny lines", "Brow lift", "Lip flip", "Gummy smile", "Downturned corners", "Jaw clenching", "Neck bands"],
  concernGroups: [{area: "Upper face",items: ["Forehead lines", "Frown lines (11s)", "Crow's feet", "Brow lift"]}, {area: "Mid & lower face",items: ["Bunny lines", "Lip flip", "Gummy smile", "Downturned corners"]}, {area: "Jaw & neck",items: ["Jaw clenching", "Neck bands"]}],
  techQ: "How do neurotoxins work?",
  tech: "Botox, Dysport and Xeomin are forms of botulinum toxin type A. They temporarily block the release of acetylcholine where the nerve meets the muscle, so the treated muscle contracts less and the skin above it creases less. The effect starts in 2 to 5 days and peaks at about 14 days. Over 3 to 4 months the nerve endings form new connections, which is why results gradually fade. Your physician assesses each muscle's strength and doses in units per injection point, adjusting for muscle mass and how you've responded before.",
  optionsTitle: "Three neurotoxins, chosen for you.",
  optionsText: "All three work the same way. They differ in how they spread and how they're formulated, so your physician picks based on the area and how you've responded before.",
  options: [
    { type: "Neurotoxin", name: "Botox", text: "The most widely studied neurotoxin, with decades of data for expression lines." },
    { type: "Neurotoxin", name: "Dysport", text: "Spreads a little more, often chosen for broader areas like the forehead." },
    { type: "Neurotoxin", name: "Xeomin", text: "A purified formula without accessory proteins." }
  ],
  how: [],
  results: [ { title: "Forehead lines", detail: "Neurotoxin, one treatment. Photographed at 2 weeks.", img: "assets/results/neurotoxin-forehead-censored.jpg", ratio: "1080/1189" }, { title: "Crow's feet", detail: "Neurotoxin, one treatment. Photographed at 2 weeks." } ],
  expect: [
    { when: "Before", text: "Skip alcohol for 24 hours. Tell us about any blood thinners or supplements, but don't stop prescribed medication without asking." },
    { when: "Day of", text: "A few quick injections with a fine needle. Most people go straight back to work." },
    { when: "First 24 hours", text: "Stay upright for 4 hours, avoid rubbing the area and skip hard workouts until tomorrow." },
    { when: "Results", text: "Lines begin to soften in a few days, with full effect at about two weeks." }
  ],
  fitYes: ["Expression lines that bother you", "You want to prevent lines from deepening", "You clench or grind your teeth", "You want a subtle brow lift or lip flip"],
  fitNo: ["Pregnant or breastfeeding", "Certain neuromuscular conditions", "Active infection at the treatment site"],
  quote: "Good neurotoxin work is about restraint. We'd rather add a touch at your two-week visit than take away the expressions that make you, you.",
  pairs: ["dermal-fillers", "laser-resurfacing", "biostimulators"],
  faqs: [
    { q: "Botox, Dysport or Xeomin: which is best?", a: "None is universally better. They differ in spread, onset and formulation. Your physician chooses based on the area being treated and your history." },
    { q: "Will I look frozen?", a: "No. We use conservative doses tailored to your muscles so you keep natural movement. It's easier to add a little at your follow-up than to undo too much." },
    { q: "How long does it last?", a: "Typically 3 to 4 months. Many people find results last longer with regular treatments." },
    { q: "Can neurotoxins help with jaw clenching?", a: "Yes. Treating the masseter muscle can ease clenching and grinding, and can also slim the jawline over time." },
    { q: "Does it hurt?", a: "Most people describe a quick pinch. Treatment takes minutes and we can use ice to keep you comfortable." }
  ]
};

P["dermal-fillers"] = {
  section: "aes", type: "treatment", crumbs: [AES, INJ],
  seoTitle: "Dermal Fillers & Lip Filler in Jersey City | Restylane, Juvéderm, Evolysse | Peak by MD",
  metaDesc: "Restylane, Juvéderm and Evolysse dermal fillers in Jersey City near Hoboken. Lips, cheeks, under-eyes, smile lines, jawline and chin, planned around your facial balance.",
  eyebrow: "Dermal Fillers · Restylane · Juvéderm · Evolysse",
  h1: "Restore volume. Keep your proportions.",
  intro: "Hyaluronic acid fillers replace volume lost with age and add subtle definition, from cheeks and under-eyes to lips and jawline. We carry three filler families, Restylane, Juvéderm and Evolysse, so we can match the right gel to each area instead of using one product everywhere.",
  heroPh: "Close-up: filler consultation, facial mapping",
  heroVideo: "assets/videos/filler-hero.mp4",
  facts: [ { label: "Treatment time", value: "30 to 60 min" }, { label: "Downtime", value: "Mild swelling, 1 to 3 days" }, { label: "Results show", value: "Immediately" }, { label: "Lasts", value: "6 to 18 months" } ],
    techQ: "How do dermal fillers work?",
  tech: "Hyaluronic acid (HA) fillers are cross-linked gels. Firmer, more cohesive gels hold lift over bone, like Juvéderm Voluma or Restylane Lyft in the cheeks. Softer, more flexible gels move naturally with the lips and around the mouth. HA also binds water, so it adds hydration as well as volume. Each brand cross-links its gel differently, which changes how it feels, spreads and lasts. Gel is placed with a fine needle or a blunt cannula at a depth matched to each area, and your body breaks it down gradually over 6 to 24 months. If needed, the enzyme hyaluronidase can dissolve it.",
  options: [],
  areaGuide: {
    eyebrow: "Filler by area",
    title: "Every area needs a different gel.",
    text: "A lip needs soft, flexible filler. A cheekbone needs firm lift. We carry Restylane, Juvéderm and Evolysse so we can match the gel to each area. Tap an area to see what changes, how we treat it and what we may use.",
    items: [
      { name: "Lips", pts: [[50,65]], gel: "Soft, flexible gel", changes: "Lips thin and lose definition at the border, and fine lines form above the lip.",
        approach: "Small amounts, built gradually, to restore shape, hydration and definition while keeping natural movement.",
        facts: [ { label: "Lasts", value: "6 to 12 months" }, { label: "Technique", value: "Fine needle" }, { label: "Swelling", value: "2 to 4 days" } ],
        products: [ { brand: "Restylane", name: "Restylane Kysse", why: "Flexible gel for natural shape and color at the lip border." }, { brand: "Juvéderm", name: "Volbella XC", why: "Smooth, subtle gel for definition and fine lip lines." } ] },
      { name: "Under-eyes", pts: [[38,45],[62,45]], gel: "Soft, smooth gel", changes: "The tear trough deepens as fat and bone recede, creating shadows that make you look tired.",
        approach: "Tiny amounts placed deep with a cannula. Not everyone is a good candidate. When skin is thin, we may recommend PRF or a skin booster instead.",
        facts: [ { label: "Lasts", value: "About 12 months" }, { label: "Technique", value: "Blunt cannula" }, { label: "Swelling", value: "Up to 1 week" } ],
        products: [ { brand: "Restylane", name: "Restylane Eyelight", why: "Designed to soften under-eye hollows and shadows." }, { brand: "Juvéderm", name: "Volbella XC", why: "Smooth gel approved for under-eye hollows." } ] },
      { name: "Cheeks & midface", pts: [[33,50],[67,50]], gel: "Firm, lifting gel", changes: "Cheek fat pads deflate and the bone beneath recedes, flattening the midface and deepening folds below.",
        approach: "Firm gel placed deep, often on the bone, to restore support. Lifting the cheek often softens smile lines without treating them directly.",
        facts: [ { label: "Lasts", value: "12 to 24 months" }, { label: "Technique", value: "Needle or cannula" }, { label: "Swelling", value: "1 to 3 days" } ],
        products: [ { brand: "Juvéderm", name: "Voluma XC", why: "Firm lift for cheekbone projection, lasting up to two years." }, { brand: "Restylane", name: "Restylane Lyft or Contour", why: "Lift and contour that moves naturally with expression." } ] },
      { name: "Temples", pts: [[24,30],[76,30]], gel: "Firm, smooth gel", changes: "Temples hollow with age and weight loss, which can make the face look narrower and the brow heavier.",
        approach: "Placed deep, close to the bone, for a smooth, even result that frames the upper face.",
        facts: [ { label: "Lasts", value: "12 to 24 months" }, { label: "Technique", value: "Needle or cannula" }, { label: "Swelling", value: "1 to 3 days" } ],
        products: [ { brand: "Juvéderm", name: "Voluma XC", why: "Restores temple volume with lasting support." }, { brand: "Biostimulator option", name: "Sculptra or PRF EZ Gel", why: "For gradual, collagen-building volume instead of filler." } ] },
      { name: "Smile lines", pts: [[40,58],[60,58],[40,71],[60,71]], gel: "Medium, flexible gel", changes: "The folds from nose to mouth and mouth to chin deepen as the cheeks lose support.",
        approach: "We restore cheek support first when needed, then soften the remaining fold with a gel that moves with your smile.",
        facts: [ { label: "Lasts", value: "6 to 18 months" }, { label: "Technique", value: "Needle or cannula" }, { label: "Swelling", value: "1 to 3 days" } ],
        products: [ { brand: "Evolysse", name: "Evolysse Form or Smooth", why: "FDA-approved for smile lines, made with a cold-temperature process." }, { brand: "Juvéderm", name: "Vollure XC", why: "Softens folds with results that can last up to 18 months." }, { brand: "Restylane", name: "Restylane Refyne or Defyne", why: "Flexible gels that move naturally with expression." } ] },
      { name: "Jawline & chin", pts: [[30,72],[70,72],[50,77]], gel: "Firm, structural gel", changes: "The jawline loses definition and the chin loses projection, blurring the profile and contributing to jowls.",
        approach: "Firm gel placed on the bone to sharpen the jawline and balance the chin with the rest of your face.",
        facts: [ { label: "Lasts", value: "12 months or more" }, { label: "Technique", value: "Needle or cannula" }, { label: "Swelling", value: "1 to 3 days" } ],
        products: [ { brand: "Juvéderm", name: "Volux XC", why: "Firm gel designed for jawline definition." }, { brand: "Restylane", name: "Restylane Defyne or Lyft", why: "Chin projection and contour with natural movement." } ] }
    ]
  },
  how: [
    { title: "Map your face", text: "We assess bone structure, fat pads and skin quality to find where volume has actually changed." },
    { title: "Place with care", text: "Filler is placed in small amounts, with numbing to keep you comfortable." },
    { title: "Settle and review", text: "Swelling settles over 1 to 2 weeks. We review your result and make small refinements if needed." }
  ],
  results: [ { title: "Lip definition", detail: "Restylane Kysse, one syringe. Photographed at 2 weeks." }, { title: "Cheek contour", detail: "Restylane Lyft. Photographed at 2 weeks." } ],
  expect: [
    { when: "Before", text: "Skip alcohol for 24 hours and let us know about blood thinners or supplements. Avoid booking within two weeks of a big event." },
    { when: "Day of", text: "Numbing is applied, then filler is placed. You'll see results right away." },
    { when: "First few days", text: "Some swelling or bruising is normal, especially in the lips. Use cool compresses and avoid hard workouts for 24 hours." },
    { when: "Results", text: "Your final result shows once swelling settles, usually in 1 to 2 weeks." }
  ],
  fitYes: ["You've noticed volume loss in your face", "You want fuller or more defined lips", "You have under-eye hollows or shadows", "You want to balance your profile"],
  fitNo: ["Pregnant or breastfeeding", "Active cold sore or infection in the area", "History of severe allergic reactions"],
  quote: "Filler should restore what time has taken, not create a new face. We look at your whole face before we place a single drop.",
  pairs: ["neurotoxins", "biostimulators", "skin-boosters"],
  faqs: [
    { q: "Do you do lip filler?", a: "Yes. We use Restylane Kysse and Juvéderm Volbella for soft, natural lips. We focus on shape, definition and hydration, building gradually rather than adding a lot at once." },
    { q: "Restylane, Juvéderm or Evolysse: which is best?", a: "None is best everywhere. Each brand makes gels with different firmness and flexibility, so we choose by area. Firm gels for cheeks and jawline, soft gels for lips and under-eyes." },
    { q: "What is Evolysse?", a: "Evolysse is the newest filler family, made by Evolus. Its gels are made with a cold-temperature process designed to keep the hyaluronic acid more intact. Evolysse Form and Smooth are FDA-approved for smile lines." },
    { q: "Is filler reversible?", a: "Hyaluronic acid fillers can be dissolved with an enzyme called hyaluronidase if needed." },
    { q: "How long do fillers last?", a: "About 6 to 18 months depending on the product and the area. Lips tend to last less long than cheeks." },
    { q: "Does filler hurt?", a: "Most fillers contain lidocaine, and we apply numbing first, so most people feel pressure more than pain." },
    { q: "Will I bruise?", a: "Some people do, especially in the lips. Avoiding alcohol and certain supplements beforehand helps." }
  ]
};

P["biostimulators"] = {
  section: "aes", type: "treatment", crumbs: [AES, INJ],
  seoTitle: "Sculptra, Radiesse & PRF in Jersey City | Peak by MD",
  metaDesc: "Sculptra, Radiesse, and PRF biostimulators in Jersey City near Hoboken. Rebuild your own collagen for gradual, natural firmness and volume.",
  eyebrow: "Biostimulators · Sculptra, Radiesse, PRF",
  h1: "Rebuild your face from the bone out.",
  intro: "Biostimulators don't just fill. Placed strategically, layer by layer from the bone out to the skin, they get your body to make its own collagen again, so your skin becomes thicker, firmer and genuinely healthier over time.",
  heroPh: "Close-up: skin texture, natural light",
  facts: [ { label: "Treatment time", value: "30 to 45 min" }, { label: "Downtime", value: "Mild swelling, 1 to 2 days" }, { label: "Results show", value: "Gradually, 1 to 3 months" }, { label: "Lasts", value: "1 to 2 years" } ],
  concerns: ["Gradual volume loss", "Skin laxity", "Under-eye hollows", "Temple hollowing", "Crepey skin", "Aging hands", "Neck & chest"],
  concernGroups: [{area: "Volume & structure",items: ["Gradual volume loss", "Temple hollowing", "Under-eye hollows"]}, {area: "Firmness",items: ["Skin laxity", "Crepey skin"]}, {area: "Beyond the face",items: ["Aging hands", "Neck & chest"]}],
  layers: {
    eyebrow: "Layer by layer",
    title: "Where we place it matters as much as what we use.",
    text: "Your face ages in every layer, not just the skin. We rebuild in order, starting with the foundation and working outward, so each layer supports the one above it.",
    items: [
      { name: "Bone", short: "Radiesse · Sculptra · PRF EZ Gel", hYoung: 92, hOld: 66, depth: "Deepest layer",
        ages: "Facial bones slowly recede. Eye sockets widen, and the cheekbones, jaw and chin lose projection, so everything above them has less to sit on.",
        place: "Small amounts placed directly on the bone at the cheekbone, temple, jawline and chin.",
        products: ["Radiesse", "Sculptra", "PRF EZ Gel"],
        result: "Restores the foundation. Skin and fat sit higher again, so lift comes from structure instead of pulling or overfilling." },
      { name: "Deep fat pads", short: "Sculptra · Radiesse · PRF EZ Gel", hYoung: 84, hOld: 54, depth: "Beneath the muscle",
        ages: "The deep fat pads of the cheek and temple shrink and slide down. The midface flattens, and folds and jowls start to form below.",
        place: "Deep, precise deposits under the cheek and temple to rebuild the support that's been lost.",
        products: ["Sculptra", "Radiesse", "PRF EZ Gel"],
        result: "Lift from within. Folds and jowls soften because the support beneath them returns." },
      { name: "Superficial fat", short: "Sculptra · PRF EZ Gel", hYoung: 68, hOld: 44, depth: "Just under the skin",
        ages: "The fat just under the skin deflates and separates into compartments, creating shadows, hollows and an uneven surface.",
        place: "Fanned in a fine, even layer across the whole area, never in lumps.",
        products: ["Sculptra", "PRF EZ Gel"],
        result: "Smooth, even volume that builds gradually. Hollows soften, and new collagen strengthens the layer beneath your skin." },
      { name: "Skin", short: "Diluted Radiesse · PRF", hYoung: 60, hOld: 40, depth: "The surface",
        ages: "From your mid-20s, collagen drops a little every year. Skin gets thinner, less elastic and crepey, especially under the eyes and on the neck.",
        place: "Diluted product or PRF placed just under the skin in a fine web, so it reaches every part of the area evenly.",
        products: ["Diluted Radiesse", "Diluted Sculptra", "PRF"],
        result: "Thicker, firmer, more elastic skin. Crepiness and texture improve because the skin itself is healthier, not just plumped." }
    ]
  },
  techQ: "How do biostimulators work?",
  tech: "Sculptra is poly-L-lactic acid. As it's slowly absorbed, it signals fibroblasts to produce new type I collagen, so volume builds over several weeks. Radiesse is calcium hydroxylapatite microspheres in a gel. The gel gives some lift right away, and the microspheres act as a scaffold for new collagen and elastin. PRF (platelet-rich fibrin) is made from your own blood and forms a soft gel that releases growth factors over several days. Sessions are spaced 4 to 6 weeks apart so each round of collagen has time to form.",
  optionsTitle: "Three ways to rebuild.",
  optionsText: "Each one restores structure by helping your skin make its own collagen. Your plan depends on the area and how fast you want to see change.",
  options: [
    { type: "Biostimulator", name: "Sculptra", text: "Poly-L-lactic acid that builds collagen over a series of sessions for subtle, lasting volume." },
    { type: "Biostimulator", name: "Radiesse", text: "Gives some immediate lift and keeps stimulating collagen for months after." },
    { type: "Natural option", name: "PRF & PRF EZ Gel", text: "Platelet-rich fibrin from your own blood. Liquid PRF strengthens thin skin and under-eyes. Heated into EZ Gel, it becomes a firmer, natural filler we can place in the fat layers and against bone for structure and volume." }
  ],
  how: [
    { title: "Plan the series", text: "We assess where collagen has thinned and choose a product and number of sessions." },
    { title: "Treat", text: "The product is placed in small amounts across the area to stimulate even collagen growth." },
    { title: "Build over time", text: "Results develop over weeks as your skin rebuilds, with sessions spaced about 4 to 6 weeks apart." }
  ],
  results: [ { title: "Cheek volume", detail: "Sculptra, two sessions. Photographed at 3 months." }, { title: "Under-eye hollows", detail: "PRF, two sessions. Photographed at 3 months.", img: "assets/results/prf-under-eye.jpg", ratio: "1206/1391", labeled: true } ],
  expect: [
    { when: "Before", text: "Skip alcohol for 24 hours and tell us about any blood thinners or supplements." },
    { when: "Day of", text: "Numbing, then a series of small injections. For PRF, a small blood sample is drawn and processed first." },
    { when: "Aftercare", text: "For Sculptra, massage the area as directed for several days. Avoid hard workouts for 24 hours." },
    { when: "Results", text: "Firmness and volume build gradually over 1 to 3 months after your series." }
  ],
  fitYes: ["You want gradual, natural-looking change", "You've noticed skin getting thinner or looser", "You want longer-lasting results than filler", "You'd prefer a treatment made from your own blood (PRF)"],
  fitNo: ["Pregnant or breastfeeding", "Active skin infection in the area", "You want an instant result for an event"],
  quote: "Biostimulators are for people who want to look better a year from now, not just tomorrow. Patience is the trade for results that are truly yours.",
  pairs: ["dermal-fillers", "skin-boosters", "microneedling"],
  faqs: [
    { q: "How is Sculptra different from filler?", a: "Filler adds volume directly. Sculptra stimulates your skin to build its own collagen, so results appear gradually and can last up to two years." },
    { q: "How many sessions will I need?", a: "Sculptra usually takes 2 to 3 sessions. Radiesse often needs just one. PRF is usually a series of 2 to 3, about a month apart." },
    { q: "What is PRF, and how is it different from PRP?", a: "Both come from a small sample of your own blood. PRF (platelet-rich fibrin) is spun differently, without additives, so it forms a soft gel that releases growth factors over days instead of hours. That makes it act like a natural biostimulator, especially under the eyes. PRP is thinner and used as a skin booster." },
    { q: "Is there downtime?", a: "Usually minimal. Expect mild swelling for a day or two." }
  ]
};

P["skin-boosters"] = {
  section: "aes", type: "treatment", crumbs: [AES, SKN],
  seoTitle: "Skin Boosters: PDRN, SkinVive & PRP in Jersey City | Peak by MD",
  metaDesc: "PDRN, SkinVive, and PRP skin boosters in Jersey City near Hoboken. Improve hydration, elasticity, texture and glow without adding volume.",
  eyebrow: "Skin Boosters · PDRN, SkinVive, PRP",
  h1: "Better skin, not more volume.",
  intro: "Skin boosters are injected just under the surface to improve the skin itself: hydration, elasticity, fine lines and glow. Nothing about your shape changes.",
  heroPh: "Close-up: hydrated, glowing skin, natural light",
  facts: [ { label: "Treatment time", value: "30 to 45 min" }, { label: "Downtime", value: "Small bumps, about 1 day" }, { label: "Results show", value: "2 to 4 weeks" }, { label: "Lasts", value: "6 to 9 months" } ],
  techQ: "How do skin boosters work?",
  tech: "PDRN (polydeoxyribonucleotide) uses purified DNA fragments that support skin repair and calm inflammation, improving elasticity and texture. SkinVive places tiny droplets of hyaluronic acid just under the skin's surface, where it binds water to improve hydration and smoothness without adding volume. PRP (platelet-rich plasma) concentrates growth factors from your own blood to support renewal of tone and texture. All three are placed superficially in many small points across the area.",
  options: [],
  boosters: {
    eyebrow: "Our skin boosters",
    title: "What each one does, and why we use it.",
    text: "Three boosters, three different jobs. Pick a goal to see which one fits, or tap a booster to learn more.",
    goals: [
      { label: "Hydration", picks: ["SkinVive"] },
      { label: "Thin or crepey skin", picks: ["PDRN"] },
      { label: "Radiance", picks: ["SkinVive", "PRP"] },
      { label: "Calm, reactive skin", picks: ["PDRN"] },
      { label: "Under-eyes", picks: ["PDRN"] },
      { label: "Made from my own blood", picks: ["PRP"] }
    ],
    items: [
      { name: "PDRN", tag: "Repairs and strengthens thin skin", ingredient: "Polydeoxyribonucleotide",
        does: "PDRN is made of purified DNA fragments. It supports your skin's own repair process, calms inflammation and helps skin become thicker, firmer and more elastic over a series.",
        why: "We use PDRN when skin needs to heal, not just hydrate: thin or crepey skin, the delicate under-eye area, reactive skin, and recovery after lasers or microneedling.",
        meters: [["Hydration", 1], ["Repair", 3], ["Firmness", 3], ["Radiance", 2]],
        facts: [ { label: "Sessions", value: "Series of 3, 2 to 4 weeks apart" }, { label: "Results", value: "Build over 2 to 4 weeks" }, { label: "Lasts", value: "6 to 9 months with maintenance" }, { label: "Downtime", value: "Small bumps for about a day" } ] },
      { name: "SkinVive", tag: "Smooth, hydrated skin in one visit", ingredient: "Hyaluronic acid microdroplets",
        does: "SkinVive by Juvéderm places tiny droplets of hyaluronic acid just under the surface. HA holds water, so skin looks smoother and more hydrated without adding volume or changing your shape.",
        why: "We use SkinVive when the goal is smoother, more hydrated cheeks with almost no downtime. It's usually one session, which makes it easy to time before an event.",
        meters: [["Hydration", 3], ["Repair", 1], ["Firmness", 1], ["Radiance", 3]],
        facts: [ { label: "Sessions", value: "Usually 1" }, { label: "Results", value: "About 2 weeks" }, { label: "Lasts", value: "Up to 6 months" }, { label: "Downtime", value: "Minimal redness or swelling" } ] },
      { name: "PRP", tag: "Natural renewal from your own blood", ingredient: "Platelet-rich plasma",
        does: "PRP concentrates growth factors from a small sample of your blood. Placed in the skin, they signal renewal for better tone, texture and radiance.",
        why: "We use PRP for patients who want an option made entirely from their own body, and to strengthen results alongside microneedling.",
        meters: [["Hydration", 1], ["Repair", 2], ["Firmness", 2], ["Radiance", 2]],
        facts: [ { label: "Sessions", value: "Series of 3, about a month apart" }, { label: "Results", value: "Build over 4 to 6 weeks" }, { label: "Lasts", value: "Several months; maintain 1 to 2 times a year" }, { label: "Downtime", value: "Mild redness for about a day" } ] }
    ]
  },
  how: [
    { title: "Assess your skin", text: "We look at hydration, texture and thickness to choose the right booster." },
    { title: "Treat", text: "Many tiny injections just under the surface, after numbing." },
    { title: "Glow builds", text: "Skin looks smoother and more hydrated over 2 to 4 weeks, building with each session." }
  ],
  results: [ { title: "Texture & pores", detail: "Potenza RF Microneedling with Rejuran PDRN, one treatment. Photographed 4 weeks after treatment.", img: "assets/results/microneedling-texture-pores.png", ratio: "1086/1448", stacked: true, seam: "50%" }, { title: "Hydration & glow", detail: "SkinVive, one session. Photographed at 1 month." } ],
  expect: [
    { when: "Before", text: "Skip alcohol for 24 hours and tell us about any blood thinners or supplements." },
    { when: "Day of", text: "Numbing, then small injections. For PRP, a small blood sample is drawn and processed first." },
    { when: "First day", text: "Small bumps or redness that usually fade within a day. Skip makeup and hard workouts until tomorrow." },
    { when: "Results", text: "Smoother, more hydrated skin in 2 to 4 weeks." }
  ],
  fitYes: ["Your skin looks dull, dry or tired", "Fine lines or crepey texture", "You want better skin without changing your shape", "You want to maintain results between other treatments"],
  fitNo: ["Pregnant or breastfeeding", "Active skin infection or breakout in the area", "Allergy to fish proteins (PDRN)"],
  quote: "Skin boosters are for people who don't want to look different, just better. It's the treatment patients notice in the mirror before anyone else does.",
  pairs: ["biostimulators", "microneedling", "laser-resurfacing"],
  faqs: [
    { q: "What is a skin booster?", a: "An injectable that improves the quality of your skin, like hydration, elasticity and texture, instead of adding volume like filler." },
    { q: "How many sessions will I need?", a: "PDRN and PRP are usually a series of 2 to 3, about a month apart. SkinVive often needs just one. Maintenance once or twice a year." },
    { q: "What is PDRN?", a: "PDRN (polydeoxyribonucleotide) is a skin booster made of purified DNA fragments. It's used to improve skin elasticity, texture and fine lines, including around the eyes." },
    { q: "What is SkinVive?", a: "SkinVive by Juvéderm is a hyaluronic acid skin booster injected in tiny droplets across the cheeks. It improves hydration, smoothness and clarity without adding volume." },
    { q: "What's the difference between PRP and PRF?", a: "Both come from your own blood. PRP is thinner and works as a skin booster for tone and texture. PRF forms a soft gel that builds collagen and volume, so we use it as a biostimulator." }
  ]
};

P["laser-resurfacing"] = {
  section: "aes", type: "treatment", crumbs: [AES, SKN],
  seoTitle: "LaseMD Ultra Laser Resurfacing in Jersey City | Peak by MD",
  metaDesc: "LaseMD Ultra laser resurfacing in Jersey City near Hoboken. Fade sun spots and even tone on the face, neck, chest and hands, with minimal downtime.",
  eyebrow: "Laser Resurfacing · LaseMD Ultra",
  h1: "Fade spots. Even tone. Renewed skin.",
  intro: "LaseMD Ultra is a gentle thulium laser that treats the top layers of skin, fading sun damage and uneven pigment with only a few days of downtime. We treat the face, neck, chest and hands, the areas that show sun damage first.",
  heroPh: "LaseMD Ultra treatment, cheek",
  heroVideo: "assets/videos/hero.mp4",
  facts: [ { label: "Treatment time", value: "20 to 30 min" }, { label: "Downtime", value: "Redness, 2 to 4 days" }, { label: "Results show", value: "1 to 2 weeks" }, { label: "Series", value: "Usually 3 to 4" } ],
  concerns: ["Sun spots", "Uneven tone", "Dullness", "Melasma (case by case)", "Rough texture", "Enlarged pores", "Fine lines", "Neck sun damage", "Décolletage spots", "Hand spots"],
  concernGroups: [{area: "Pigment & tone",items: ["Sun spots", "Uneven tone", "Dullness", "Melasma (case by case)"]}, {area: "Texture",items: ["Rough texture", "Enlarged pores", "Fine lines"]}, {area: "Beyond the face",items: ["Neck sun damage", "Décolletage spots", "Hand spots"]}],
  techQ: "How does LaseMD Ultra work?",
  tech: "LaseMD Ultra is a non-ablative 1927 nm thulium laser. It creates microscopic treatment zones in the outer layers of skin while leaving the surface intact, which draws pigment up and triggers renewal. Energy and density are set for your skin type and goals. For a short time afterward, those micro-channels also improve absorption of serums such as vitamin C or tranexamic acid. Treated pigment rises and sheds as fine bronzing over several days.",
  how: [
    { title: "Skin assessment", text: "We evaluate your skin type, pigment and sun history to set safe, effective settings." },
    { title: "Laser treatment", text: "After numbing cream, the laser passes over the skin in a few minutes per area." },
    { title: "Renew", text: "Treated skin flakes away over several days, revealing brighter, more even skin." }
  ],
  results: [ { title: "Improved skin tone & texture", detail: "LaseMD Ultra, three sessions. Photographed 3 months after the last session.", combined: true, censor: [{ t: "35%", l: "3%", w: "45%", h: "17%" }, { t: "33%", l: "53%", w: "44%", h: "17%" }] }, { title: "Dark spots", detail: "One session combining LaseMD Ultra with Potenza RF Microneedling, with tranexamic acid serum applied immediately after. Photographed 6 weeks after treatment.", combined: true, reuseBefore: true }, { title: "Sun-damaged skin", detail: "LaseMD Ultra, one session. Photographed 4 weeks after treatment.", img: "assets/results/laser-sun-damage-censored.jpg", stacked: true }, { title: "Redness & uneven tone", detail: "LaseMD Ultra with tranexamic acid serum, two sessions. Photographed 4 weeks after the second treatment.", img: "assets/results/laser-ta-two-sessions.png", ratio: "1080/1314" } ],
  expect: [
    { when: "Before", text: "Avoid sun and self-tanner on the treatment area for two weeks. Pause retinoids a few days before as directed." },
    { when: "Day of", text: "Numbing cream for about 30 minutes, then a short treatment." },
    { when: "First week", text: "Skin feels warm and looks red, then darker and rough as spots lift. Moisturize and use SPF daily, including on your neck, chest and hands." },
    { when: "Results", text: "Brighter, more even skin in 1 to 2 weeks, building with each session." }
  ],
  fitYes: ["Sun spots or freckling you want to fade", "Dull or uneven skin tone", "Sun damage on your neck, chest or hands", "You want results with only a few days of downtime"],
  fitNo: ["Recent tan or sunburn", "Pregnant or breastfeeding", "Active skin infection or cold sore"],
  quote: "Tone does more to make skin look young than almost anything else. LaseMD Ultra lets us improve it without taking you out of your life for a week.",
  pairs: ["skin-boosters", "microneedling", "biostimulators"],
  faqs: [
    { q: "Does it hurt?", a: "With numbing cream, most people feel warmth and mild prickling during treatment." },
    { q: "How many sessions will I need?", a: "Most people do a series of 3 to 4 sessions about a month apart, then maintenance once or twice a year." },
    { q: "Can it treat melasma?", a: "Sometimes, with careful settings and a skin care plan. Melasma can be stubborn, so we assess it case by case." },
    { q: "When can I wear makeup?", a: "Usually after 24 to 48 hours, once the skin has settled." },
    { q: "Can you treat my neck, chest or hands?", a: "Yes. Sun damage often shows on the neck, chest and hands before the face, and LaseMD Ultra treats all three. These areas heal more slowly than the face, so we use gentler settings and may plan an extra session." },
    { q: "Is it safe for darker skin tones?", a: "Often, yes, with careful settings. Darker skin has a higher risk of temporary darkening after laser, so we assess your skin type first and may prepare your skin with a brightening routine before treatment." },
    { q: "Can I combine it with other treatments?", a: "Yes. It pairs well with skin boosters for hydration and with microneedling for texture. We space treatments so your skin can recover between them." }
  ]
};

P["microneedling"] = {
  section: "aes", type: "treatment", crumbs: [AES, SKN],
  seoTitle: "Microneedling, Potenza RF & Potenza Fusion Facial in Jersey City | Peak by MD",
  metaDesc: "Microneedling with PRP, HA or PDRN, Potenza RF Microneedling and the Potenza Fusion Facial in Jersey City near Hoboken. Smooth acne scars, refine pores, tighten and restore glow.",
  eyebrow: "Microneedling · Potenza RF · Potenza Fusion",
  h1: "Three ways to rebuild your skin.",
  intro: "Classic microneedling with a serum matched to your skin, Potenza RF for deeper scars and tightening, and the Potenza Fusion Facial, which pairs RF with a biostimulator or skin booster in one visit. We match the treatment to your goal and your downtime.",
  heroPh: "Potenza treatment, jawline",
  heroVideo: "assets/videos/microneedling-hero.mp4",
  video: { src: "assets/potenza-video.mp4", eyebrow: "See it in action", title: "How Potenza Works", text: "Fine needles deliver radiofrequency energy beneath the surface, where scars and laxity actually start. Your skin rebuilds collagen over the following weeks." },
  facts: [ { label: "Treatment time", value: "45 to 60 min" }, { label: "Downtime", value: "Redness, 1 to 3 days" }, { label: "Results show", value: "4 to 12 weeks" }, { label: "Series", value: "Usually 3" } ],
  concerns: ["Acne scars", "Active acne", "Rough texture", "Enlarged pores", "Fine lines", "Skin laxity", "Jawline definition", "Neck", "Stretch marks"],
  concernGroups: [{area: "Scars & acne",items: ["Acne scars", "Active acne", "Stretch marks"]}, {area: "Texture",items: ["Rough texture", "Enlarged pores", "Fine lines"]}, {area: "Firmness",items: ["Skin laxity", "Jawline definition", "Neck"]}],
  techQ: "How do microneedling and Potenza work?",
  tech: "Fine needles create controlled micro-injuries, and your skin responds by producing new collagen and elastin and breaking up scar tissue. Classic microneedling works at 0.5 to 2.5 mm with no heat, and the channels it creates let serums like PRP, HA or PDRN reach deeper. Potenza's needles reach up to 4 mm and deliver radiofrequency energy at the tips, which tightens existing collagen and drives more remodeling. The Fusion tip adds a reservoir that pushes a product into the skin during RF treatment. Results build over 4 to 12 weeks.",
  options: [],
  tiers: {
    eyebrow: "Our microneedling treatments",
    title: "Pick the depth. Pick the boost.",
    text: "Each treatment builds collagen. They differ in how deep they reach, what we add, and how much downtime you'll have.",
    items: [
      { kind: "Classic", name: "Microneedling", text: "Fine needles create tiny channels that trigger collagen repair. We add a serum that travels deeper through those channels.", optLabel: "Paired with", opts: [
        { name: "PRP", text: "Growth factors from your own blood to speed healing and strengthen results." },
        { name: "HA", text: "Hyaluronic acid for deep hydration and a smoother, plumper look." },
        { name: "PDRN", text: "Purified DNA fragments that support repair, elasticity and calmer skin." } ],
        bestFor: "Texture, mild scars, dullness, fine lines", downtime: "Redness for 1 to 2 days", sessions: "Series of 3 to 4, about a month apart" },
      { kind: "Radiofrequency", name: "Potenza RF", dark: true, text: "Needles deliver radiofrequency energy beneath the surface. We set the depth and energy for your goal.", optLabel: "Treatment goals", opts: [
        { name: "Rejuvenation", text: "Shallower, gentler settings for tone, pores and overall glow." },
        { name: "Tightening", text: "Deeper energy to firm loose skin on the face, jawline and neck." },
        { name: "Skin correction", text: "Targeted passes for acne scars, active acne and stretch marks." } ],
        bestFor: "Acne scars, laxity, enlarged pores", downtime: "Redness and swelling for 1 to 3 days", sessions: "Usually 3, 4 to 6 weeks apart" },
      { kind: "RF + infusion", name: "Potenza Fusion Facial", text: "Potenza's Fusion tip delivers a product into the skin during RF treatment, so you get collagen building and a booster in one session.", optLabel: "Infused with", opts: [
        { name: "Biostimulators", text: "Collagen-building ingredients delivered right where new collagen forms." },
        { name: "Skin Boosters", text: "Hydrating and repairing ingredients for glow, elasticity and skin quality." } ],
        bestFor: "Overall skin quality and radiance, with lighter downtime", downtime: "Mild redness, about 1 day", sessions: "Monthly, or as a series of 3" }
    ]
  },
  how: [
    { title: "Customize", text: "We set depth and energy for your skin and concern, so scars, pores and laxity each get the right treatment." },
    { title: "Treat", text: "After numbing, fine needles treat the area. With Potenza, they also deliver radiofrequency energy." },
    { title: "Rebuild", text: "Your skin produces new collagen and elastin over the following weeks." }
  ],
  results: [ { title: "Acne scarring", detail: "Potenza RF Microneedling and LaseMD Ultra with Rejuran Healing Essence (PDRN), two sessions. Photographed 6 weeks after the second treatment.", img: "assets/results/microneedling-acne-scars.png", ratio: "1086/1448", stacked: true, seam: "50%" }, { title: "Texture & pores", detail: "Potenza RF Microneedling with Rejuran PDRN, one treatment. Photographed 4 weeks after treatment.", img: "assets/results/microneedling-texture-pores.png", ratio: "1086/1448", stacked: true, seam: "50%" }, { title: "Jaw tightening & texture", detail: "Potenza RF Microneedling, three sessions. Photographed 4 weeks after the third treatment.", img: "assets/results/microneedling-jaw-tightening.jpg", ratio: "1086/1448", stacked: true, seam: "50%" }, { title: "Texture & skin tone", detail: "Potenza RF Microneedling, LaseMD Ultra and Rejuran PDRN, one session. Photographed 4 weeks after treatment.", img: "assets/results/microneedling-texture-tone.png", ratio: "1086/1448", stacked: true, seam: "50%" } ],
  expect: [
    { when: "Before", text: "Pause retinoids and exfoliants for a few days. Avoid sun and arrive with clean skin." },
    { when: "Day of", text: "Numbing for 30 to 45 minutes, then treatment. Expect warmth and pressure with Potenza." },
    { when: "First few days", text: "Redness and mild swelling, like a sunburn. Gentle skin care and SPF only." },
    { when: "Results", text: "Improvement builds for about 3 months after your final session." }
  ],
  fitYes: ["Acne scars or uneven texture", "Enlarged pores or dull skin", "Early skin laxity on the face, jaw or neck", "You want tightening without surgery"],
  fitNo: ["Pregnant or breastfeeding", "Pacemaker or implanted electronic device (Potenza)", "Active infection or cold sore in the area", "Fish allergy (PDRN)"],
  quote: "Acne scars are personal. We look closely at the type of scar first, because that decides how deep we need to go.",
  pairs: ["skin-boosters", "laser-resurfacing", "biostimulators"],
  faqs: [
    { q: "Which of the three do I need?", a: "Microneedling is best for texture and glow with the least downtime. Potenza RF is for deeper scars, pores and loose skin. The Fusion Facial pairs RF with a biostimulator or skin booster for overall skin quality. We decide together at your consult." },
    { q: "What is the Potenza Fusion Facial?", a: "It's Potenza RF Microneedling with a special tip that delivers a product into the skin during treatment. We choose a biostimulator or skin booster based on your goals, so collagen building and skin quality are treated in the same visit." },
    { q: "PRP, HA or PDRN: which serum should I choose?", a: "PRP supports healing and results. HA adds hydration. PDRN supports repair and calms the skin. We'll recommend one based on your skin, and some plans rotate them across a series." },
    { q: "Is it good for acne scars?", a: "Yes. It's one of the most effective non-surgical options for many types of acne scarring, and we often pair it with PRP to support healing." },
    { q: "Can I treat active acne?", a: "Classic microneedling isn't done over active breakouts. Potenza has an option for active acne, and we may also recommend medical skin care first." },
    { q: "Is it safe for darker skin?", a: "Generally yes, especially RF microneedling, because energy is delivered below the surface. We assess your skin first." },
    { q: "How many sessions?", a: "Usually 3 sessions about 4 to 6 weeks apart, then maintenance as needed." }
  ]
};

P["hair-restoration"] = {
  section: "aes", type: "treatment", crumbs: [AES],
  seoTitle: "Hair Loss Treatment & PRP for Hair in Jersey City | Peak by MD",
  metaDesc: "Physician-led hair restoration in Jersey City near Hoboken. We find the cause, from GLP-1 weight loss and hormones to thyroid, nutrition and stress, then treat it with PRP, prescriptions and peptides.",
  eyebrow: "Hair Restoration · Jersey City, NJ",
  h1: "Find out why. Then treat it.",
  intro: "Thinning hair usually has a cause you can measure: GLP-1 weight loss, hormones, thyroid, nutrition or stress. We test first, then build a plan with PRP, prescription treatments and peptides.",
  heroPh: "Scalp close-up or patient portrait",
  heroImg: "assets/hair-restoration-hero.jpg",
  heroImgAlt: "Man running his hand through thick, healthy hair",
  heroImgRatio: "1080/1350",
  heroImgMax: "440px",
  facts: [ { label: "Starts with", value: "Lab assessment" }, { label: "PRP sessions", value: "3 to 4, monthly" }, { label: "Results show", value: "3 to 6 months" }, { label: "Maintenance", value: "Every 4 to 6 months" } ],
  concerns: ["Thinning at the crown", "Widening part", "Receding hairline", "Excess shedding", "Shedding on GLP-1s", "Postpartum shedding", "Thinning after stress or illness"],
  concernGroups: [{area: "Pattern thinning",items: ["Thinning at the crown", "Widening part", "Receding hairline"]}, {area: "Shedding",items: ["Excess shedding", "Shedding on GLP-1s", "Postpartum shedding", "Thinning after stress or illness"]}],
  causes: {
    eyebrow: "Why hair thins",
    title: "Hair loss is a symptom. We find the cause.",
    text: "Your hair reflects what's happening in the rest of your body. Most thinning traces back to one or more of these, and each one is treated differently.",
    items: [
      { name: "GLP-1 weight loss", text: "Fast weight loss and eating less can push many follicles into their resting phase at once. Shedding usually starts 2 to 4 months after starting a GLP-1, and low protein, iron or zinc makes it worse.",
        check: "Protein intake, ferritin, zinc and how fast you're losing weight", treat: "Protein and nutrient targets, a steadier dose plan, and PRP or peptides to support regrowth", slug: "medical-weight-loss", linkLabel: "Our GLP-1 program" },
      { name: "Hormones", text: "Shifts in estrogen, progesterone, testosterone and DHT during perimenopause, menopause, after pregnancy or on testosterone therapy can thin hair or widen your part.",
        check: "Estradiol, progesterone, testosterone, DHT,\nand DHEA-S", treat: "Balancing hormones, and DHT blockers when appropriate", slug: "womens-hormones", linkLabel: "Women's hormone care" },
      { name: "Thyroid", text: "An underactive or overactive thyroid can cause diffuse thinning across the whole scalp, often with fatigue or dry skin.",
        check: "TSH, free T4, free T3 and thyroid antibodies", treat: "Correcting thyroid levels, coordinated with your hair plan" },
      { name: "Nutritional status", text: "Hair is one of the first things your body cuts back on when nutrients run low. Low iron is one of the most common, and most fixable, causes of thinning in women.",
        check: "Ferritin, vitamin D, B12, zinc and protein", treat: "Targeted repletion with diet, supplements or IV therapy", slug: "iv-therapy", linkLabel: "IV therapy" },
      { name: "Stress and illness", text: "A major stressor, illness, surgery or months of poor sleep can trigger heavy shedding 2 to 3 months later. It's usually temporary, but it can unmask pattern thinning.",
        check: "Your timeline, sleep and recovery, plus labs to rule out other causes", treat: "Support while hair recovers, with PRP and peptides to speed regrowth" },
      { name: "Genetics", text: "Pattern hair loss is driven by DHT, which slowly shrinks follicles at the crown, part or hairline. It runs in families and affects both men and women.",
        check: "Scalp evaluation, pattern and family history", treat: "Minoxidil, DHT blockers and PRP, started early for the best results" }
    ]
  },
  techQ: "How do PRP and prescription hair treatments work?",
  tech: "Pattern hair loss is driven mainly by DHT, a hormone that gradually shrinks follicles (miniaturization). Labs identify other contributors, like low ferritin, thyroid shifts or excess androgens. PRP is spun from your own blood to concentrate platelets, whose growth factors may extend the growth phase of follicles. Minoxidil improves blood flow to the follicle and lengthens the growth phase, while DHT blockers like finasteride slow miniaturization. Peptides such as copper peptides may support scalp health.",
  factsQ: "What does a hair plan timeline look like?",
  optionsTitle: "Your hair plan, in three parts.",
  optionsText: "Most people get the best results combining treatments. Your plan depends on what your labs show.",
  options: [
    { id: "assessment", type: "Step 1", name: "Hair Health Assessment", text: "Bloodwork and a scalp evaluation to uncover hormonal, thyroid, iron and nutritional causes of thinning." },
    { id: "prp", type: "Step 2", name: "PRP for Hair", text: "Platelet-rich plasma from your own blood, injected into the scalp to strengthen follicles and slow shedding." },
    { id: "rx", type: "Step 3", name: "Prescription & Peptide Therapy", text: "Physician-prescribed topical and oral medications, plus peptides that support growth and scalp health." }
  ],
  markersTitle: "What we test.",
  markersText: "Labs reveal causes a quick look at your scalp can't.",
  markers: [
    { name: "Estradiol & progesterone", why: "Shifts during perimenopause, menopause and after pregnancy often trigger thinning." },
    { name: "Thyroid panel", why: "Both under- and overactive thyroid can cause diffuse shedding." },
    { name: "Ferritin & iron", why: "Low iron stores are one of the most common, and most fixable, causes of thinning." },
    { name: "Testosterone, DHT & DHEA-S", why: "Androgen levels drive pattern hair loss in both men and women." },
    { name: "Vitamin D", why: "Low levels are linked to hair loss and are common in the Northeast." },
    { name: "Zinc & B12", why: "Nutrients that support healthy hair growth." }
  ],
  how: [
    { title: "Test", text: "Bloodwork and a scalp evaluation identify what's driving your hair loss." },
    { title: "Treat the cause", text: "Correct deficiencies or hormone imbalances, and start medications if appropriate." },
    { title: "Stimulate regrowth", text: "PRP and peptides strengthen follicles while your plan takes effect." }
  ],
  results: [ { title: "Thinning at the crown", detail: "PRP for hair, four sessions. Photographed at 6 months." }, { title: "Widening part", detail: "PRP and prescription therapy. Photographed at 6 months." } ],
  expect: [
    { when: "Assessment", text: "A consultation, scalp evaluation and blood draw. Results reviewed with your physician." },
    { when: "PRP day", text: "A small blood draw, then numbing and scalp injections. About an hour total." },
    { when: "After PRP", text: "Mild scalp tenderness for a day. Wait 24 hours before washing your hair." },
    { when: "Results", text: "Hair grows slowly. Expect less shedding first, then visible thickness at 3 to 6 months." }
  ],
  fitYes: ["Gradual thinning or a widening part", "Increased shedding", "You want to understand the cause before treating", "You want a non-surgical option"],
  fitNo: ["Pregnant or breastfeeding (some medications)", "Blood or platelet disorders (for PRP)", "Advanced, long-standing baldness"],
  quote: "Most clinics start with treatment. We start with a blood draw, because the cause of hair loss determines everything that comes after.",
  pairs: ["medical-weight-loss", "womens-hormones", "peptide-therapy"],
  faqs: [
    { q: "Does PRP for hair really work?", a: "PRP can reduce shedding and improve thickness for many people with pattern hair loss, especially when started early and combined with other treatments." },
    { q: "Why do you test labs for hair loss?", a: "Thyroid issues, low iron, hormone shifts and nutrient gaps are common, treatable causes of thinning. Treating them can make every other therapy work better." },
    { q: "Can GLP-1s like semaglutide or tirzepatide cause hair loss?", a: "Hair shedding is common with fast weight loss on any plan, including GLP-1s. It usually starts a few months in and is often temporary. Getting enough protein, correcting low iron or zinc, and losing weight at a steadier pace all help. PRP and peptides can support regrowth." },
    { q: "Can stress really make my hair fall out?", a: "Yes. A major stressor or illness can push many follicles into their resting phase at once, causing heavy shedding 2 to 3 months later. It usually recovers, and we check labs to make sure nothing else is involved." },
    { q: "Is this for women too?", a: "Yes. Women's hair loss is often linked to hormones, iron or thyroid, and testing is especially valuable." },
    { q: "Which prescription treatments do you use?", a: "Options include topical and oral medications such as minoxidil and, when appropriate, DHT blockers. Your physician will review benefits and side effects with you." },
    { q: "How long until I see results?", a: "Hair grows slowly. Most people notice less shedding first and visible improvement at 3 to 6 months." }
  ]
};

P["mens-hormones"] = {
  section: "lng", type: "treatment", crumbs: [LNG],
  seoTitle: "Testosterone Therapy (TRT) & Men's Hormone Health in Jersey City | Peak by MD",
  metaDesc: "Physician-led testosterone and hormone care for men in Jersey City near Hoboken. More energy, confidence, strength and drive, guided by your labs.",
  eyebrow: "Men's Hormone Health · TRT",
  h1: "Stop running at 70%.",
  intro: "Testosterone therapy, done the way the evidence supports. Your physician confirms low T with real labs, finds what's driving it, and uses small, frequent doses to bring back your energy, drive and strength without the highs and crashes.",
  quizFirst: true,
  proof: ["Physician-led, in person", "Small, frequent subcutaneous dosing", "Labs drawn in office"],
  heroPh: "Physician reviewing labs with a male patient",
  facts: [ { label: "First visit", value: "About 60 minutes" }, { label: "Labs", value: "Drawn in office" }, { label: "Follow-ups", value: "In person or video" }, { label: "Fertility", value: "Discussed before starting" } ],
  pickTitle: "Which of these sound like you?",
  pickText: "Pick any that apply. We'll show you what they can point to and what we'd test first.",
  concerns: [
    { name: "Tired by mid-afternoon", flag: "Low testosterone" },
    { name: "Less interest in sex", flag: "Low testosterone" },
    { name: "Weaker erections", flag: "Hormones or blood flow" },
    { name: "Less confident or decisive", flag: "Low testosterone" },
    { name: "Irritable, flat or short-tempered", flag: "Hormones or cortisol" },
    { name: "Losing strength despite training", flag: "Low testosterone" },
    { name: "Gaining weight around the middle", flag: "Insulin resistance" },
    { name: "Foggy or less sharp at work", flag: "Thyroid or sleep" },
    { name: "Waking up unrested", flag: "Sleep apnea" }
  ],
  options: [],
  trt: {
    philosophy: {
      eyebrow: "Our philosophy",
      title: "Physiologic, not performance.",
      text: "The goal isn't the highest number on a lab report. It's a healthy level where you feel and function your best, reached carefully and watched closely.",
      items: [
        { num: "01", title: "Restore, don't overshoot", text: "We aim for the healthy range for a man your age, not bodybuilding levels. More isn't better; it just adds side effects." },
        { num: "02", title: "Symptoms and labs together", text: "Two early-morning readings, free testosterone and a full symptom history. One number on its own doesn't tell the story." },
        { num: "03", title: "Find the cause first", text: "Sleep apnea, extra weight, thyroid, alcohol and some medications all lower testosterone. Fixing them can raise T on its own." },
        { num: "04", title: "Lowest dose that works", text: "We start low, adjust with follow-up labs and monitor hematocrit, PSA, estradiol and blood pressure for as long as you're on therapy." }
      ]
    },
    benefits: {
      eyebrow: "Long-known benefits",
      title: "What decades of research show.",
      text: "For men with confirmed low testosterone, these benefits are well established in randomized trials.",
      items: [
        { title: "Sex drive and function", text: "More interest in sex, more sexual activity and better erectile function.", source: "T Trials, NEJM 2016 · TRAVERSE, 2023" },
        { title: "Mood and outlook", text: "Modest but real improvements in mood and fewer depressive symptoms.", source: "T Trials, NEJM 2016" },
        { title: "Bone density", text: "Denser, stronger bone in the spine and hip after one year.", source: "T Trials Bone, JAMA Intern Med 2017" },
        { title: "Red blood cells", text: "Corrected unexplained anemia far more often than placebo.", source: "T Trials Anemia, JAMA Intern Med 2017" },
        { title: "Muscle and body fat", text: "More lean muscle and less body fat, especially paired with training.", source: "Meta-analyses of randomized trials" },
        { title: "Insulin sensitivity", text: "Better insulin sensitivity in men with low T and metabolic syndrome or type 2 diabetes.", source: "TIMES2, Diabetes Care 2011" }
      ]
    },
    trials: {
      eyebrow: "The data",
      title: "The largest trials, in plain numbers.",
      text: "Much of the fear around testosterone came from small, flawed studies. These large randomized trials answered the big questions.",
      studies: [
        { name: "TRAVERSE", meta: "New England Journal of Medicine · 2023", who: "5,246 men aged 45 to 80 with low testosterone and existing heart disease or high heart risk, followed for an average of 33 months.",
          stats: [ { value: "7.0% vs 7.3%", label: "Heart attack, stroke or cardiac death, testosterone vs placebo" }, { value: "0.19% vs 0.12%", label: "High-grade prostate cancer, no significant difference" } ],
          result: "Testosterone did not raise the risk of heart attack or stroke. In 2025 the FDA removed the heart-risk language from the boxed warning on testosterone labels." },
        { name: "The T Trials", meta: "New England Journal of Medicine · 2016", who: "790 men aged 65 and older with low testosterone, treated for one year across seven coordinated trials.",
          stats: [ { value: "7", label: "Coordinated trials, one year of treatment" }, { value: "4", label: "Areas improved: sexual function, mood, bone density, anemia" } ],
          result: "Clear gains in sexual function, mood, bone density and red blood cells. No change in memory, which helps set honest expectations." }
      ],
      watchTitle: "What we watch for",
      watchText: "TRAVERSE also found slightly higher rates of atrial fibrillation, blood clots in the lungs and kidney strain, and testosterone can raise blood pressure and red blood cell counts. That's why we screen before starting and monitor throughout."
    },
    sexual: {
      eyebrow: "Sexual health",
      title: "Low libido and erectile dysfunction aren't the same problem.",
      text: "Low libido is about desire. Erectile dysfunction is about blood flow and function. They often get lumped together, but they have different causes and need different treatment.",
      cards: [
        { tag: "Desire", name: "Low libido", text: "Less interest in sex, fewer sexual thoughts, or sex feeling like a chore. Hormones play a large role here, along with sleep, stress, mood and some medications.",
          checks: ["Testosterone, measured twice in the early morning", "Prolactin and thyroid levels", "Sleep, stress, mood and current medications"],
          treats: ["Testosterone therapy when low T is confirmed", "Adjusting medications that dampen desire", "Bremelanotide (PT-141), an off-label option for men that acts on desire pathways in the brain"] },
        { tag: "Function", name: "Erectile dysfunction", text: "Trouble getting or keeping an erection, even when desire is there. ED is mostly about blood vessels and can be an early warning sign of heart disease or diabetes.",
          checks: ["Blood pressure, cholesterol and blood sugar (A1c)", "Testosterone, since low T can make ED worse", "Medications, smoking, alcohol and sleep"],
          treats: ["Sildenafil or tadalafil, as needed or as a low daily dose", "Treating heart, blood sugar or blood pressure issues behind it", "Adding testosterone therapy when low T is also present", "PRP injections, a regenerative option for blood flow and tissue health", "Accelerated referral to a urology specialist when more advanced care is needed"] }
      ],
      note: "Many men have both. Testosterone therapy reliably improves desire in men with low T, but its effect on erections is modest, so ED usually needs its own treatment."
    },
    dosing: {
      eyebrow: "Our dosing strategy",
      title: "Small doses, more often, under the skin.",
      text: "A large shot every one or two weeks sends levels soaring, then crashing. Small subcutaneous doses two to three times a week keep you steady in the healthy range.",
      sawPath: "M0,150 L20,28 C60,60 140,140 190,166 L210,28 C250,60 330,140 380,166 L400,28 C440,60 520,140 570,166 L590,28 C630,60 710,140 760,166",
      steadyPath: "M0,108 C10,92 20,92 30,100 C40,108 50,118 60,108 C70,92 80,92 90,100 C100,108 110,118 120,108 C130,92 140,92 150,100 C160,108 170,118 180,108 C190,92 200,92 210,100 C220,108 230,118 240,108 C250,92 260,92 270,100 C280,108 290,118 300,108 C310,92 320,92 330,100 C340,108 350,118 360,108 C370,92 380,92 390,100 C400,108 410,118 420,108 C430,92 440,92 450,100 C460,108 470,118 480,108 C490,92 500,92 510,100 C520,108 530,118 540,108 C550,92 560,92 570,100 C580,108 590,118 600,108",
      sawLabel: "Large dose every 1 to 2 weeks",
      steadyLabel: "Small dose 2 to 3 times a week",
      points: [
        { title: "Steadier energy and mood", text: "No mid-week crash as levels fall off." },
        { title: "Fewer side effects", text: "Fewer peaks pushing red blood cells and estrogen up." },
        { title: "A tiny needle", text: "A small insulin-style needle under the skin. Nearly painless and done at home in under a minute." },
        { title: "Easier to fine-tune", text: "Small doses make precise adjustments simple." }
      ]
    },
    forms: {
      eyebrow: "Forms of therapy",
      title: "The right form for your life.",
      text: "Your physician recommends a form based on your labs, routine and fertility plans.",
      items: [
        { name: "Subcutaneous injections", tag: "Our preferred approach", text: "Small doses under the skin two to three times a week. Steady levels, simple to adjust." },
        { name: "Intramuscular injections", tag: "Less frequent", text: "Larger doses into the muscle every one to two weeks. Fewer shots, bigger swings in levels." },
        { name: "Topical cream", tag: "No needles", text: "Applied daily to the skin. Easy to adjust; take care to avoid skin contact with partners and children." },
        { name: "Pellets", tag: "Long-acting", text: "Placed under the skin every few months. Convenient, but harder to adjust once placed." },
        { name: "Fertility-preserving options", tag: "Planning for kids", text: "Medications like enclomiphene or hCG help your body make more of its own testosterone and protect sperm production. These are off-label uses, prescribed when your physician decides they fit your goals." }
      ],
      switchTitle: "On TRT elsewhere?",
      switchText: "Bring your labs and protocol. We'll review and pick up where you are.",
      switchCta: "Book a lab review"
    }
  },
  how: [
    { title: "Test", text: "Two morning testosterone readings plus hormone, thyroid and metabolic labs and a detailed symptom history." },
    { title: "Personalize", text: "If treatment is right for you, your physician chooses the form and dose. For most men, that's small subcutaneous doses two to three times a week." },
    { title: "Monitor", text: "Follow-up labs at 6 to 8 weeks, then every 3 to 6 months, adjusting as needed." }
  ],
  expect: [
    { when: "Week 0", text: "Foundational Assessment labs and a consultation with your physician." },
    { when: "Week 1 to 2", text: "Results review and, if appropriate, your personalized protocol begins." },
    { when: "Week 6 to 8", text: "Follow-up labs to check levels and safety markers and adjust dosing." },
    { when: "Ongoing", text: "Regular monitoring and check-ins to keep you optimal and safe." }
  ],
  fitYes: ["Low energy, mood, drive or libido", "You want to feel stronger and more confident", "You want treatment guided by real lab data"],
  fitNo: ["Trying to conceive without a fertility plan", "Untreated prostate cancer", "Untreated sleep apnea or high red blood cell counts"],
  quote: "High performers push through fatigue for years. We find the cause, treat it carefully and keep watching after we start.",
  pairs: ["medical-weight-loss", "peptide-therapy", "hair-restoration"],
  pairNotes: {
    "medical-weight-loss": "Belly fat converts testosterone to estrogen. Losing it raises T and makes treatment work better.",
    "peptide-therapy": "Support recovery, sleep and body composition alongside your hormone plan.",
    "hair-restoration": "Testosterone can speed hair loss in men prone to it. We protect your hairline from the start."
  },
  partner: "womens-hormones",
  learnEyebrow: "It's not just getting older",
  learnTitle: "You perform for everyone else. You should feel like it.",
  learn: [
    { title: "Running on fumes", text: "Coffee doesn't fix it and sleep doesn't either. Lingering fatigue is a signal worth testing, not pushing through." },
    { title: "The edge is gone", text: "Less confidence, less patience, less drive at work and at home. It's easy to blame stress, but hormones are often part of the picture." },
    { title: "Strength and drive are slipping", text: "Harder to build muscle, less interest in sex, slower recovery. Low testosterone is a common, treatable cause." }
  ],
  myths: [
    { myth: "Testosterone causes heart attacks.", fact: "The TRAVERSE trial followed 5,246 men at high heart risk and found no increase in heart attack or stroke. The FDA removed that warning language in 2025." },
    { myth: "TRT causes prostate cancer.", fact: "In TRAVERSE, high-grade prostate cancer rates were no different than placebo. We still check PSA before and during treatment." },
    { myth: "Once you start, you can never stop.", fact: "You can stop. Your body's own production often recovers over months, and we can support it. We'll plan it together." },
    { myth: "More testosterone is better.", fact: "Levels above the healthy range don't add benefit. They raise red blood cells, estrogen and blood pressure. We aim for physiologic levels." },
    { myth: "Low T is just part of getting older.", fact: "Some decline is normal, but low testosterone with symptoms is a medical condition that can be diagnosed and treated." }
  ],
  faqs: [
    { q: "Is testosterone therapy safe for my heart?", a: "The TRAVERSE trial, the largest of its kind, found no increase in heart attack or stroke in men with confirmed low testosterone. We still monitor blood pressure, hematocrit and heart rhythm throughout." },
    { q: "Why subcutaneous instead of intramuscular shots?", a: "Small doses under the skin a few times a week keep levels steadier than a large shot every week or two. That means fewer highs and crashes and fewer side effects. The needle is tiny and you can do it at home." },
    { q: "Do you offer testosterone replacement therapy (TRT)?", a: "Yes, for men with confirmed low testosterone and symptoms. We monitor hematocrit, PSA and estradiol, and discuss fertility before starting." },
    { q: "My labs were \"normal.\" Could I still have low testosterone?", a: "Possibly. Standard ranges are wide, and a single reading can miss it. We test more than once, look at free testosterone and read results alongside your symptoms." },
    { q: "Will testosterone affect my fertility?", a: "Testosterone therapy can lower sperm production. If you want children, we discuss options that support your body's own production instead." },
    { q: "Will I have to stay on it forever?", a: "Not necessarily. Some men stay on therapy long term; others use it for a period or switch approaches. We'll decide together based on your results." },
    { q: "How soon will I feel better?", a: "Many men notice changes in energy, mood and libido within a few weeks. Changes in muscle and body fat take a few months." }
  ]
};

P["mens-hormones-v1"] = {
  section: "lng", type: "treatment", crumbs: [LNG],
  seoTitle: "Testosterone Therapy (TRT) & Men's Hormone Health in Jersey City | Peak by MD",
  metaDesc: "Physician-led testosterone and hormone care for men in Jersey City near Hoboken. More energy, confidence, strength and drive, guided by your labs.",
  eyebrow: "Men's Hormone Health · TRT",
  h1: "Stop running at 70%.",
  intro: "You're building a company, leading a team and showing up for your family. Your physician tests what's behind the low energy, flat mood and fading drive, then builds a plan to bring back your confidence, strength and sex drive.",
  quizFirst: true,
  proof: ["Physician-led, in person", "Labs drawn in office", "Early morning visits"],
  heroPh: "Physician reviewing labs with a male patient",
  facts: [ { label: "First visit", value: "About 60 minutes" }, { label: "Labs", value: "Drawn in office" }, { label: "Follow-ups", value: "In person or video" }, { label: "Fertility", value: "Discussed before starting" } ],
  pickTitle: "Which of these sound like you?",
  pickText: "Pick any that apply. We'll show you what they can point to and what we'd test first.",
  concerns: [
    { name: "Tired by mid-afternoon", flag: "Low testosterone" },
    { name: "Less interest in sex", flag: "Low testosterone" },
    { name: "Weaker erections", flag: "Hormones or blood flow" },
    { name: "Less confident or decisive", flag: "Low testosterone" },
    { name: "Irritable, flat or short-tempered", flag: "Hormones or cortisol" },
    { name: "Losing strength despite training", flag: "Low testosterone" },
    { name: "Gaining weight around the middle", flag: "Insulin resistance" },
    { name: "Foggy or less sharp at work", flag: "Thyroid or sleep" },
    { name: "Waking up unrested", flag: "Sleep apnea" }
  ],
  options: [],
  plateau: {
    eyebrow: "Treatment options",
    title: "More than a testosterone prescription.",
    text: "Your physician chooses the approach based on your labs, goals and fertility plans. Tap any option to learn more.",
    levers: [
      { tag: "Injections", action: "Weekly testosterone", text: "Steady, precise dosing with a quick routine you can do at home." },
      { tag: "Creams", action: "Daily topical testosterone", text: "Easy to adjust and no needles." },
      { tag: "Pellets", action: "When appropriate", text: "Long-acting testosterone placed under the skin every few months." },
      { tag: "Fertility", action: "Natural production", text: "Helps your body make its own testosterone if you want to keep fertility." },
      { tag: "Peptides", action: "Recovery and body composition", text: "Added when your labs and goals support it." },
      { tag: "Basics", action: "Thyroid, vitamin D, body fat", text: "Common, fixable issues that lower testosterone or mimic low T." },
      { tag: "Sleep", action: "Sleep apnea screen", text: "Untreated apnea lowers testosterone and raises safety risks on TRT." },
      { tag: "Safety", action: "Ongoing monitoring", text: "Hematocrit, PSA, estradiol and heart and metabolic markers checked regularly." },
      { tag: "Future", action: "Health beyond hormones", text: "Feeling better now should support your health later. We track the markers that matter." }
    ],
    doseEyebrow: "Your care",
    doseTitle: "What's included.",
    doseText: "Physician visits, full lab panels, your treatment plan and ongoing follow-ups to fine-tune as you go.",
    doseNote: "See membership plans",
    switchCta: "Book a lab review",
    switchTitle: "On TRT elsewhere?",
    switchText: "Bring your labs and protocol. We'll review and pick up where you are."
  },
  how: [
    { title: "Test", text: "Two morning testosterone readings plus hormone, thyroid and metabolic labs and a detailed symptom history." },
    { title: "Personalize", text: "If treatment is right for you, your physician selects the approach, dose and delivery method." },
    { title: "Monitor", text: "Follow-up labs at 6 to 8 weeks, then every 3 to 6 months, adjusting as needed." }
  ],
  expect: [
    { when: "Week 0", text: "Foundational Assessment labs and a consultation with your physician." },
    { when: "Week 1 to 2", text: "Results review and, if appropriate, your personalized protocol begins." },
    { when: "Week 6 to 8", text: "Follow-up labs to check levels and safety markers and adjust dosing." },
    { when: "Ongoing", text: "Regular monitoring and check-ins to keep you optimal and safe." }
  ],
  fitYes: ["Low energy, mood, drive or libido", "You want to feel stronger and more confident", "You want treatment guided by real lab data"],
  fitNo: ["Trying to conceive without a fertility plan", "Untreated prostate cancer", "Untreated sleep apnea or high red blood cell counts"],
  quote: "High performers push through fatigue for years. We find the cause, treat it carefully and keep watching after we start.",
  pairs: ["medical-weight-loss", "peptide-therapy", "hair-restoration"],
  pairNotes: {
    "medical-weight-loss": "Belly fat converts testosterone to estrogen. Losing it raises T and makes treatment work better.",
    "peptide-therapy": "Support recovery, sleep and body composition alongside your hormone plan.",
    "hair-restoration": "Testosterone can speed hair loss in men prone to it. We protect your hairline from the start."
  },
  partner: "womens-hormones",
  learnEyebrow: "It's not just getting older",
  learnTitle: "You perform for everyone else. You should feel like it.",
  learn: [
    { title: "Running on fumes", text: "Coffee doesn't fix it and sleep doesn't either. Lingering fatigue is a signal worth testing, not pushing through." },
    { title: "The edge is gone", text: "Less confidence, less patience, less drive at work and at home. It's easy to blame stress, but hormones are often part of the picture." },
    { title: "Strength and drive are slipping", text: "Harder to build muscle, less interest in sex, slower recovery. Low testosterone is a common, treatable cause." }
  ],
  myths: [
    { myth: "Low T is just part of getting older.", fact: "Some decline is normal, but symptomatic low testosterone is a medical condition that can be diagnosed and treated." },
    { myth: "TRT causes prostate cancer.", fact: "Current research does not show that properly monitored therapy causes prostate cancer. We screen PSA before and during treatment." },
    { myth: "Testosterone is only for bodybuilders.", fact: "Medical therapy aims for a healthy, normal range, not performance levels. The goal is how you feel and function." }
  ],
  faqs: [
    { q: "Is testosterone therapy safe for my heart?", a: "Recent large studies show properly monitored therapy doesn't raise heart attack or stroke risk in men with confirmed low testosterone. We track your heart markers throughout." },
    { q: "Do you offer testosterone replacement therapy (TRT)?", a: "Yes, for men with confirmed low testosterone and symptoms. We monitor hematocrit, PSA and estradiol, and discuss fertility before starting." },
    { q: "My labs were \"normal.\" Could I still have low testosterone?", a: "Possibly. Standard ranges are wide, and a single reading can miss it. We test more than once, look at free testosterone and read results alongside your symptoms." },
    { q: "Will testosterone affect my fertility?", a: "Testosterone therapy can lower sperm production. If you want children, we discuss options that support your body's own production instead." },
    { q: "Will I have to stay on it forever?", a: "Not necessarily. Some men stay on therapy long term; others use it for a period or switch approaches. We'll decide together based on your results." },
    { q: "How soon will I feel better?", a: "Many men notice changes in energy, mood and libido within a few weeks. Changes in muscle and body fat take a few months." }
  ]
};

P["womens-hormones"] = {
  section: "lng", type: "treatment", crumbs: [LNG],
  seoTitle: "Women's Hormone Therapy: PMOS, Perimenopause & Menopause in Jersey City | Peak by MD",
  metaDesc: "Physician-led hormone care for women in Jersey City near Hoboken. PMOS (formerly PCOS), perimenopause and postmenopause treatment guided by your labs. More energy, clearer thinking, better sleep.",
  eyebrow: "Women's Hormone Health · PMOS, Perimenopause, Postmenopause",
  h1: "Feel like yourself again.",
  intro: "You're running a career, a family and everything in between, and you're running on empty. Your physician tests what's driving the exhaustion, fog and low drive, then builds a plan to bring back your energy, focus and spark.",
  heroPh: "Physician consultation with a female patient",
  facts: [ { label: "Starts with", value: "Foundational Assessment" }, { label: "First follow-up", value: "6 to 8 weeks" }, { label: "Monitoring", value: "Every 3 to 6 months" }, { label: "We treat", value: "PMOS, peri and post" } ],
  pickTitle: "Which of these sound like you?",
  pickText: "Pick any that apply. We'll show you what they can point to and what we'd test first.",
  concerns: [
    { name: "Exhausted no matter how much I sleep", flag: "Thyroid, iron or hormones" },
    { name: "Brain fog, losing words mid-sentence", flag: "Estrogen shifts" },
    { name: "Little to no interest in sex", flag: "Low testosterone" },
    { name: "Always wired, stressed or on edge", flag: "Cortisol or progesterone" },
    { name: "Wide awake at 3am", flag: "Progesterone decline" },
    { name: "Cycles irregular or unpredictable", flag: "PMOS or perimenopause" },
    { name: "Weight shifting to the middle", flag: "Insulin resistance" },
    { name: "Acne, unwanted hair or thinning hair", flag: "PMOS" },
    { name: "Hot flashes or night sweats", flag: "Perimenopause" },
    { name: "Discomfort during sex", flag: "Low estrogen" }
  ],
  options: [],
  plateau: {
    eyebrow: "What we treat",
    title: "Every stage, one physician who knows your history.",
    text: "Your symptoms, life stage and labs decide the approach.",
    levers: [
      { tag: "PMOS", action: "Formerly PCOS", text: "Treat insulin resistance, irregular cycles, acne and hair changes at the root." },
      { tag: "Perimenopause", action: "Often starts in your 40s", text: "Steady sleep, mood and energy while your hormones fluctuate." },
      { tag: "Postmenopause", action: "Feel well, stay protected", text: "Relief from symptoms plus long-term bone, heart and brain health." },
      { tag: "Libido", action: "Testosterone for women", text: "Low dose when labs support it, to restore drive and stamina." },
      { tag: "Nutrients", action: "Thyroid, iron, vitamin D", text: "Common, fixable causes of fatigue and fog." },
      { tag: "Alternatives", action: "Non-hormonal options", text: "Effective choices if you can't or prefer not to use hormones." }
    ],
    doseEyebrow: "Your care",
    doseTitle: "What's included.",
    doseText: "Physician visits, full lab panels, your prescription plan and ongoing follow-ups to fine-tune as you go.",
    switchCta: "Book a lab review",
    switchTitle: "On hormones elsewhere?",
    switchText: "Bring your labs and history. We'll review and pick up where you are."
  },
  markersEyebrow: "Treatment options",
  markersTitle: "Care that fits your body and your life.",
  markersText: "Your physician chooses the form, dose and formulation based on your labs, symptoms and preferences.",
  markers: [
    { name: "Injections", why: "Steady, precise dosing with a quick routine you can do at home." },
    { name: "Creams", why: "Daily topical hormones you can fine-tune easily as your needs change." },
    { name: "Patches", why: "Consistent levels through the skin with a simple change once or twice a week." },
    { name: "Pellets, when appropriate", why: "Long-acting hormones placed under the skin every few months, for women who are a good fit." },
    { name: "Custom formulations", why: "Compounded for specific concerns like vaginal dryness and pain during sex." },
    { name: "Thyroid support", why: "Treatment when your thyroid is part of the fatigue, fog or weight change." },
    { name: "Iron and IV iron", why: "Oral or IV iron to restore energy and support hair when levels run low." },
    { name: "Vitamin D", why: "Corrects a common gap linked to mood, bone health and immunity." }
  ],
  how: [
    { title: "Listen & test", text: "Real time with your physician, plus hormone, thyroid and metabolic labs. No rushed visits." },
    { title: "Personalize", text: "If treatment is right for you, your physician selects the hormones, dose and delivery method." },
    { title: "Monitor", text: "Follow-up at 6 to 8 weeks, then every 3 to 6 months, adjusting as your body changes." }
  ],
  expect: [
    { when: "Week 0", text: "Foundational Assessment labs and an in-depth consultation with your physician." },
    { when: "Week 1 to 2", text: "Results review and, if appropriate, your personalized plan begins." },
    { when: "Week 6 to 8", text: "Follow-up to review symptoms and adjust dosing." },
    { when: "Ongoing", text: "Regular check-ins as you move through each stage." }
  ],
  fitYes: ["You're exhausted, foggy or stressed and want answers", "PMOS, perimenopause or postmenopause symptoms", "You want a physician who takes your symptoms seriously"],
  fitNo: ["History of breast or uterine cancer (we'll discuss non-hormonal options)", "History of blood clots or stroke", "Unexplained vaginal bleeding"],
  quote: "Women are told exhaustion is just part of being busy. It's often hormonal, it's treatable, and you shouldn't have to push through it.",
  pairs: ["medical-weight-loss", "gut-health", "hair-restoration", "biostimulators"],
  pairNotes: {
    "medical-weight-loss": "Shifting estrogen and insulin resistance make midlife and PMOS weight harder to lose. GLP-1 support works alongside your hormone plan.",
    "gut-health": "Your gut helps clear and balance estrogen. Bloating, cravings and fatigue often improve when both are treated together.",
    "hair-restoration": "Thinning and shedding often follow hormone, thyroid or iron changes. We treat the cause and regrow from there.",
    "biostimulators": "Falling estrogen speeds collagen loss. Collagen-building treatments restore firmness and skin quality as your hormones rebalance."
  },
  partner: "mens-hormones",
  learnEyebrow: "It's not just stress",
  learnTitle: "You're doing it all. You shouldn't feel this drained doing it.",
  learn: [
    { title: "Running on empty", text: "Coffee in the morning, wine at night, exhausted in between. Hormone, thyroid and iron shifts are common causes, and they're testable." },
    { title: "Foggy and short on patience", text: "Forgetting words, losing your train of thought, snapping faster than you'd like. Estrogen and progesterone changes affect focus and mood." },
    { title: "Your spark is missing", text: "Low desire isn't a relationship problem or a phase. Low testosterone and estrogen often play a role, and both can be treated." }
  ],
  myths: [
    { myth: "Hormone therapy causes breast cancer.", fact: "Risk depends on the type, timing and your history. For most healthy women starting near menopause, the benefits usually outweigh the risks." },
    { myth: "You have to wait it out.", fact: "Symptoms can last years. Effective hormonal and non-hormonal treatments are available at any stage." },
    { myth: "A blood test can tell you if you're in perimenopause.", fact: "Hormones fluctuate too much for one test to confirm it. Diagnosis is based mostly on age and symptoms, with labs used to rule out other causes." }
  ],
  faqs: [
    { q: "Do I need to be in menopause to get help?", a: "No. We treat women with PMOS, in perimenopause and after menopause. Perimenopause can start years before your last period, often in your early 40s." },
    { q: "What is PMOS?", a: "PMOS is the new name for PCOS. It reflects that the condition affects metabolism and hormones across the whole body, not just the ovaries. We treat insulin resistance, cycles, skin and hair together." },
    { q: "Is hormone therapy safe?", a: "For most healthy women who start within 10 years of menopause or before age 60, the benefits usually outweigh the risks. Your physician reviews your personal and family history first." },
    { q: "Are your hormones bioidentical?", a: "We use FDA-approved bioidentical estradiol and progesterone where available, prescribed at doses guided by your symptoms and labs." },
    { q: "What if I can't take estrogen?", a: "There are effective non-hormonal options for hot flashes, sleep and mood. We'll find what's right for your history." },
    { q: "How soon will I feel better?", a: "Many women sleep better and feel more energy within a few weeks. Focus, mood and libido often build over a few months." }
  ]
};

P["medical-weight-loss"] = {
  section: "lng", type: "treatment", crumbs: [LNG],
  seoTitle: "Medical Weight Loss, Semaglutide & Tirzepatide in Jersey City | Peak by MD",
  metaDesc: "Physician-led medical weight loss in Jersey City near Hoboken. GLP-1 medications like semaglutide and tirzepatide, with body composition tracking to protect muscle.",
  eyebrow: "Medical Weight Loss · GLP-1",
  h1: "GLP-1 care for the whole you, especially when you stall.",
  intro: "Physician-led semaglutide and tirzepatide at the lowest dose that works. When progress stalls, we test to find out why. And we protect your hair, gut, skin and muscle along the way.",
  proof: ["Plateau testing, not just higher doses", "Hair, gut and skin support built in", "Muscle tracked with body comp scans"],
  heroPh: "Body composition scan or patient check-in",
  heroVideo: "assets/videos/weight-loss-hero.mp4",
  facts: [ { label: "Medication", value: "Weekly injection" }, { label: "Check-ins", value: "Monthly" }, { label: "Body comp scans", value: "Every 8 to 12 weeks" }, { label: "Starts with", value: "Foundational Assessment" } ],
  pickTitle: "Which of these sound like you?",
  pickText: "Pick any that apply. We'll show you what they can point to and what we'd test first.",
  concerns: [
    { name: "Hungry again soon after eating", flag: "Insulin resistance" },
    { name: "Energy crash after meals", flag: "Blood sugar swings" },
    { name: "Constant sugar or carb cravings", flag: "Insulin resistance" },
    { name: "Weight settles around my belly", flag: "Visceral fat" },
    { name: "Dieting works less than it used to", flag: "Metabolic adaptation" },
    { name: "I lose it, then it comes back", flag: "Metabolic adaptation" },
    { name: "Tired even after a full night's sleep", flag: "Thyroid or hormones" },
    { name: "On a GLP-1 and stuck", flag: "Plateau" }
  ],
  options: [],
  program: {
    eyebrow: "The Peak GLP-1 program",
    title: "A prescription is the start. This is the rest.",
    text: "Anyone can ship a vial. Our program is built around the two things most GLP-1 patients struggle with: stalling out, and the side effects of losing weight fast.",
    pillars: [
      { tag: "01 · Dosing", title: "Lowest effective dose", text: "We titrate slowly and hold you where it works, for fewer side effects and less long-term risk.", href: "#plateaus", link: "Our approach" },
      { tag: "02 · Plateaus", title: "Plateau protocol", text: "When the scale stops, we test body comp, metabolism, glucose and hormones to find out why, then pull the right lever.", href: "#plateaus", link: "How we break plateaus", dark: true },
      { tag: "03 · Whole body", title: "Hair, gut and skin support", text: "Shedding, GI symptoms and loose skin are common on GLP-1s. We prevent and treat them as part of your plan.", href: "#support", link: "Whole-body support" }
    ]
  },
  support: {
    eyebrow: "Whole-body support",
    title: "Care beyond the scale.",
    text: "Included in every GLP-1 plan. Weight loss, especially on a GLP-1, can affect your hair, digestion and skin. We help prevent and manage these changes, and pair them with gradual, steady weight loss so you look and feel your best.",
    items: [
      { num: "01", slot: "wl-support-hair", photo: "Hair growth: close-up of healthy, full hair", title: "Hair growth", text: "Rapid weight loss can trigger shedding. Labs, PRP and targeted therapies help protect and regrow hair.", href: "service.html?p=hair-restoration", link: "Hair health" },
      { num: "02", slot: "wl-support-gut", photo: "Gut health: colorful whole-food meal", title: "Gut health", text: "Nausea, constipation and bloating are common on GLP-1s. Nutrition and gut support keep you comfortable and on track.", href: "gut-health.html", link: "Gut health & nutrition" },
      { num: "03", slot: "wl-support-skin", photo: "Skin tightening: natural, firm jawline and cheek", title: "Skin & face tightening", text: "Losing weight can leave skin looser and the face hollower. RF microneedling, biostimulators and fillers restore firmness and volume.", href: "aesthetics.html", link: "Aesthetics" }
    ]
  },
  how: [
    { title: "Measure", text: "Labs, body composition and resting metabolic rate set your baseline." },
    { title: "Treat", text: "Medication plus personalized nutrition and training targets." },
    { title: "Adjust", text: "We hold you at the lowest effective dose, and when progress stalls we test to find out why before changing anything." }
  ],
  plateau: {
    eyebrow: "Plateau protocol",
    title: "Stalled? This is where we do our best work.",
    text: "Plateaus are expected, not a failure. We don't just raise the dose. We test, find the cause and pull the right lever.",
    levers: [
      { tag: "Body comp", action: "Fat vs. muscle", text: "A scan shows if you're still losing fat while the scale stalls." },
      { tag: "Caloric burn", action: "RMR retest", text: "If your metabolism has adapted, we reset calories and protein." },
      { tag: "Glucose", action: "CGM tracking", text: "Real-time blood sugar shows which meals stall progress." },
      { tag: "Hormones", action: "Thyroid and hormone labs", text: "Low thyroid, low T or perimenopause can slow fat loss." },
      { tag: "Medication", action: "Dose or switch", text: "Fine-tune your dose, or move from semaglutide to tirzepatide." },
      { tag: "Peptides", action: "Adjunct support", text: "Added only when your labs support it." }
    ],
    doseTitle: "Lowest effective dose.",
    doseText: "Fewer side effects now, less long-term risk.",
    switchTitle: "Stalled with another provider?",
    switchText: "Bring your history. We'll pick up where you are."
  },
  expect: [
    { when: "Week 0", text: "Foundational Assessment: labs, body composition and metabolism testing." },
    { when: "Week 1", text: "Start medication at a low dose with nutrition and training targets." },
    { when: "Months 1 to 3", text: "Gradual dose increases as tolerated, with monthly check-ins." },
    { when: "Ongoing", text: "Body composition rechecks and a plan to maintain results long term." }
  ],
  fitYes: ["BMI of 27 or higher with a health condition, or 30 or higher", "Insulin resistance or prediabetes", "You want to protect muscle while losing fat"],
  fitNo: ["Personal or family history of medullary thyroid cancer or MEN2", "History of pancreatitis", "Pregnant or planning pregnancy"],
  quote: "Weight loss that costs you muscle isn't a win. We measure what you're losing, not just how much.",
  pairs: ["iv-therapy", "peptide-therapy", "gut-health"],
  pairNotes: { "iv-therapy": "Eating less can leave you low on key nutrients. IV therapy helps correct insufficiencies before they become deficiencies." },
  learnEyebrow: "Our philosophy",
  learnTitle: "Medicine is the tool. Your health is the goal.",
  learn: [
    { title: "Not a prescription by mail", text: "Online services screen you with a form and ship a vial. We start with labs, body composition and a physician visit, so treatment fits your biology." },
    { title: "Not a quick fix", text: "Crash results that cost you muscle don't last. We protect lean mass with protein targets and strength training, and track it as you go." },
    { title: "Built to last after the shot", text: "Your physician adjusts dosing, handles side effects and plans a careful taper, so the habits and results stay when the medication ends." }
  ],
  myths: [
    { myth: "GLP-1s are just a quick fix.", fact: "They treat the biology of appetite and blood sugar. Results last longest when paired with nutrition and strength habits." },
    { myth: "You'll gain it all back when you stop.", fact: "Weight can return without a plan. A gradual taper and habits built during treatment help you keep results." },
    { myth: "Compounded and brand-name versions are the same.", fact: "Quality varies. Your physician will explain what's being prescribed and where it comes from." }
  ],
  faqs: [
    { q: "Do you prescribe semaglutide and tirzepatide?", a: "Yes, when they're medically appropriate. Your physician will review your history and labs before prescribing." },
    { q: "How do you protect muscle?", a: "We measure lean mass, set protein targets from your metabolism and prescribe strength training. Then we track body composition to confirm it's working." },
    { q: "What are the side effects?", a: "Nausea, constipation and reduced appetite are common early on, and are usually manageable with gradual dosing." },
    { q: "What happens when I stop?", a: "Weight can return if habits haven't changed. We build nutrition and training habits from day one and plan a careful transition." },
    { q: "I'm already on a GLP-1 and stuck. Can you help?", a: "Yes. We review your current dosing and history, test to find what's causing the plateau, and adjust from there. You don't have to start over." },
    { q: "Why not just increase my dose?", a: "Higher doses bring more side effects and long-term risk. We use the lowest dose that works and look at metabolism, hormones and habits first." }
  ]
};

P["peptide-therapy"] = {
  section: "lng", type: "treatment", crumbs: [LNG],
  seoTitle: "Peptide Therapy in Jersey City | Peak by MD",
  metaDesc: "Physician-prescribed peptide therapy in Jersey City near Hoboken for recovery, sleep, body composition and skin. Sourced from licensed U.S. pharmacies.",
  eyebrow: "Peptide Therapy",
  h1: "Targeted support for recovery and repair.",
  intro: "Peptides are short chains of amino acids that signal specific processes in the body. We prescribe them for clear goals, source them from licensed U.S. pharmacies and monitor how you respond.",
  heroPh: "Peptide vial and consultation",
  facts: [ { label: "Starts with", value: "Physician consult" }, { label: "Delivery", value: "Injection or topical" }, { label: "Cycle", value: "Typically 8 to 12 weeks" }, { label: "Sourcing", value: "Licensed U.S. pharmacies" } ],
  concerns: ["Slow recovery", "Poor sleep", "Body composition", "Joint and tissue repair", "Brain fog and focus", "Skin quality", "Hair health"],
  options: [],
  how: [],
  learnTitle: "How we use peptides.",
  learn: [
    { title: "Only after we look at your data", text: "Peptides are rarely a first step on their own (injuries can be an exception). We start with your goals, history and labs, and prescribe one only when it fits a clear target, like sleep, recovery or body composition." },
    { title: "One target, one peptide, one cycle", text: "Each peptide signals a specific pathway, so we choose for a specific goal and set a defined dose and cycle length. No stacks of five vials, no open-ended use." },
    { title: "Part of a plan, not a trend", text: "Peptides work best alongside sleep, nutrition and training. We pair them with the rest of your plan and measure whether they're actually helping." },
    { title: "Honest about the evidence", text: "Some peptides are FDA-approved medications with strong data. Others have early or limited human research. We tell you which is which before you decide." }
  ],
  areasTitle: "Areas where peptides can help.",
  areasText: "Your physician matches the peptide to the goal. What we prescribe depends on your labs, history and current availability.",
  areasNote: "Some peptides popular online can't currently be compounded under FDA rules. If one you've read about isn't available, we'll explain why and discuss alternatives.",
  areas: [
    { tag: "Sleep & recovery", accent: "var(--pk-slate-blue)", name: "Sleep and growth hormone support", text: "Peptides that prompt your pituitary to release more of your own growth hormone, which can support deeper sleep, recovery and lean mass." },
    { tag: "Metabolic", accent: "var(--pk-grass)", name: "Weight and metabolic health", text: "GLP-1 medications are peptides. We use them to reduce appetite and improve blood sugar, with body composition tracking to protect muscle.", slug: "medical-weight-loss", linkLabel: "Medical weight loss" },
    { tag: "Performance", accent: "var(--pk-midnight-blue)", name: "Training recovery and tissue repair", text: "For active patients with slow recovery or nagging soft-tissue issues. Options here change often, so we review what's legally available and what the evidence supports at your visit." },
    { tag: "Cognitive", accent: "var(--pk-pale-blue)", name: "Brain fog and focus", text: "Brain fog often traces back to sleep, hormones, thyroid, iron or blood sugar, so we test for those first. Peptides for cognition have early, limited human research, and we only consider them once the basics are addressed." },
    { tag: "Aesthetics", accent: "var(--pk-wheat)", name: "Skin, collagen and hair", text: "Copper peptides support collagen, skin quality and scalp health, and pair well with microneedling and regenerative treatments.", slug: "aesthetics.html", linkLabel: "Aesthetics" },
    { tag: "Hormone & sexual health", accent: "var(--pk-lilac)", name: "Libido and sexual health", text: "A peptide that acts on desire pathways in the brain, used alongside hormone care when low libido is part of the picture.", slug: "womens-hormones", linkLabel: "Women's hormone therapy" }
  ],
  library: {
    eyebrow: "Peptide library",
    title: "See every peptide we prescribe.",
    text: "What each one is for, how strong the evidence is, and how it's used. Enter your details for free access.",
    teaser: ["Sermorelin", "Tesamorelin", "Semaglutide", "Tirzepatide", "PT-141", "GHK-Cu"],
    items: [
      { name: "Sermorelin", goal: "Sleep & recovery", evidence: "Established", text: "Prompts your pituitary to release more of your own growth hormone. Used for sleep quality, recovery and lean mass.", use: "Nightly injection under the skin, in cycles" },
      { name: "Tesamorelin", goal: "Metabolic", evidence: "FDA-approved", text: "A growth hormone releasing peptide approved to reduce abdominal fat in specific patients. Considered when belly fat is a key target.", use: "Daily injection under the skin" },
      { name: "Semaglutide", goal: "Metabolic", evidence: "FDA-approved", text: "A GLP-1 medication that reduces appetite and improves blood sugar. Paired with body composition tracking to protect muscle.", use: "Weekly injection under the skin" },
      { name: "Tirzepatide", goal: "Metabolic", evidence: "FDA-approved", text: "Acts on GLP-1 and GIP pathways. Often produces greater weight loss than semaglutide alone.", use: "Weekly injection under the skin" },
      { name: "PT-141 (bremelanotide)", goal: "Sexual health", evidence: "FDA-approved for women", text: "Acts on desire pathways in the brain. Approved for low desire in premenopausal women; use in men is off-label.", use: "As needed, before intimacy" },
      { name: "GHK-Cu (copper peptide)", goal: "Skin & hair", evidence: "Early research", text: "Supports collagen, skin quality and scalp health. Pairs well with microneedling and regenerative treatments.", use: "Topical, or applied during treatment" }
    ],
    note: "Availability changes with FDA compounding rules. Your physician decides what fits your labs and goals."
  },
  sourcingTitle: "Prescription-grade, from licensed U.S. pharmacies.",
  sourcingText: "The biggest risk with peptides isn't the peptide. It's where it comes from. Everything we prescribe follows the same chain from prescription to your fridge.",
  sourcing: [
    { title: "Prescribed for you", text: "Your physician writes a prescription for a specific peptide, dose and cycle, in your name." },
    { title: "Made by a licensed pharmacy", text: "Filled by state-licensed U.S. compounding pharmacies or FDA-registered outsourcing facilities that follow USP sterile standards." },
    { title: "Tested and documented", text: "We work only with pharmacies that test for potency and sterility and provide documentation for each batch." },
    { title: "Shipped and stored correctly", text: "Temperature-controlled delivery, labeled with your name, dose and beyond-use date." },
    { title: "Taught and monitored", text: "We show you how to use it, then check in to track results and side effects." }
  ],
  sourcingCompare: [
    { label: "Prescription", us: "Written by your physician", them: "None required" },
    { label: "Made by", us: "Licensed U.S. pharmacy", them: "Unknown, often overseas" },
    { label: "Purity and sterility", us: "Tested and documented", them: "Unverified, may be mislabeled" },
    { label: "Dose", us: "Set for your goal and labs", them: "Guesswork" },
    { label: "Oversight", us: "Physician follow-up", them: "None" }
  ],
  expect: [
    { when: "Consult", text: "A review of your goals, health history and recent labs." },
    { when: "Start", text: "We teach you how to use your peptide at home, usually a small injection under the skin." },
    { when: "Check-in", text: "A follow-up at 4 to 6 weeks to review progress and side effects." },
    { when: "End of cycle", text: "We assess results and decide together whether to continue, pause or change course." }
  ],
  fitYes: ["You're active and want better recovery", "You want support for sleep or body composition", "You want physician oversight, not internet sourcing"],
  fitNo: ["Pregnant or breastfeeding", "Active or past cancer (for some peptides)", "You're looking for a quick fix without lifestyle changes"],
  quote: "Peptides are promising, and they're also overhyped online. Our job is to be honest about the evidence and source them safely.",
  pairs: ["mens-hormones", "iv-therapy", "medical-weight-loss"],
  myths: [
    { myth: "Peptides aren't proven or studied.", fact: "Dozens of peptide medicines are FDA-approved, including semaglutide, tirzepatide, tesamorelin, bremelanotide and teriparatide, each backed by large human trials. Many popular wellness peptides are different: their data is mostly animal studies and small early trials. We tell you which category a peptide falls into before you start." },
    { myth: "Peptides are steroids.", fact: "They're different. Peptides signal your body's own processes, while anabolic steroids are synthetic hormones." },
    { myth: "\"Research use only\" is the same product.", fact: "Those vials aren't made for people and aren't tested to pharmacy standards. They can be underdosed, mislabeled or contaminated." },
    { myth: "More peptides means better results.", fact: "Stacking many peptides makes it impossible to know what's working. We start with one, measure, then adjust." },
    { myth: "Peptides work instantly.", fact: "Most take weeks to show effects and work best alongside sleep, nutrition and training." }
  ],
  faqs: [
    { q: "Where do your peptides come from?", a: "Licensed U.S. compounding pharmacies and FDA-registered outsourcing facilities, filled by prescription in your name. We never use \"research use only\" suppliers." },
    { q: "Are peptides safe?", a: "When prescribed by a physician and sourced from licensed pharmacies, many peptides are well tolerated. We review the risks of each one and monitor you throughout." },
    { q: "Why can't I get a peptide I read about online?", a: "FDA rules limit which peptides pharmacies can compound, and that list changes. If something isn't available, we'll explain why and offer alternatives with better support." },
    { q: "How are peptides taken?", a: "Most are small injections under the skin that you do at home. Some are topical or nasal." },
    { q: "How soon will I notice a difference?", a: "It depends on the peptide and goal. Sleep changes may come within weeks; body composition takes longer." }
  ]
};

P["iv-therapy"] = {
  section: "lng", type: "treatment", crumbs: [LNG],
  seoTitle: "IV Therapy, NAD+ & Vitamin Shots in Jersey City | Peak by MD",
  metaDesc: "Physician-supervised IV therapy and wellness shots in Jersey City near Hoboken. Hydration, vitamins, NAD+, B12 and Venofer iron infusions, guided by your labs.",
  eyebrow: "IV Therapy & Wellness Shots",
  h1: "Hydration and nutrients, delivered directly.",
  intro: "IV therapy delivers fluids, vitamins and nutrients straight into your bloodstream. Wellness shots are quicker boosts. Both are physician-supervised and, where possible, guided by your labs.",
  heroPh: "IV lounge, calm natural light",
  facts: [],
  concerns: [],
  options: [],
  how: [],
  expect: [],
  quote: "IV therapy isn't magic, but for the right person at the right time it helps. We use labs to decide, not a menu.",
  pairs: ["peptide-therapy", "mens-hormones", "gut-health"],
  learnEyebrow: "Why we do it",
  learnTitle: "Medical IV care, guided by your health.",
  learn: [
    { title: "Straight to your bloodstream", text: "IV delivery skips digestion, so fluids and nutrients reach your body directly. It helps most when you need hydration fast or absorb nutrients poorly." },
    { title: "Screened before every drip", text: "Our nurse practitioner reviews your health before each IV, so you get the right therapy and dose safely." },
    { title: "Guided by your labs", text: "When we have your bloodwork, we use it to fix real gaps, like low B12 or vitamin D, instead of guessing." }
  ],
  learnCta: { eyebrow: "Go deeper", title: "Advanced micronutrient testing", text: "A detailed panel that measures vitamins, minerals and antioxidants inside your cells, so your IV formula is built around your real deficiencies." },
  benefitsTitle: "What it can help with.",
  benefits: ["Rehydrate after travel, illness or a hard workout", "Lift low energy and mental fatigue", "Support your immune system", "Speed training recovery", "Correct nutrient deficiencies found on labs", "Support skin and healthy aging"],
  menuTitle: "IV therapies and wellness shots.",
  menuText: "Filter by goal to explore. After your health screening, your nurse practitioner confirms which therapy fits you.",
  menu: [
    { kind: "drip", name: "The Essential", sub: "Myers Cocktail", goals: ["energy", "recovery", "hydration"], text: "All-around hydration, energy and recovery." },
    { kind: "drip", name: "The Glow", sub: "Glutathione Boost", goals: ["skin", "energy"], text: "A powerful antioxidant that helps with brain fog and brightens skin." },
    { kind: "drip", name: "The Defender", sub: "Tri-Immune Boost", goals: ["immunity"], text: "Zinc, vitamin C and glutathione to fortify immunity." },
    { kind: "drip", name: "The Metabolizer", sub: "Lipo-Mini-Mix C", goals: ["metabolism", "energy"], text: "A lipotropic blend for fat metabolism and energy." },
    { kind: "drip", name: "The Replenisher", sub: "Mineral Blend", goals: ["hydration", "recovery"], text: "Magnesium, zinc, manganese and copper for muscle recovery, hydration and energy." },
    { kind: "drip", name: "Iron Infusion", sub: "Venofer (iron sucrose)", goals: ["energy"], text: "Restores low iron when pills aren't enough or upset your stomach. Requires labs showing iron deficiency." },
    { kind: "shot", name: "B-12", sub: "Wellness shot", goals: ["energy"], text: "Energy and focus." },
    { kind: "shot", name: "Glutathione", sub: "Wellness shot", goals: ["skin"], text: "Brighter skin and antioxidant support." },
    { kind: "shot", name: "Lipo-Mini-Mix", sub: "MIC, B-complex, B-12, L-carnitine", goals: ["metabolism", "energy"], text: "Fat metabolism and energy." },
    { kind: "shot", name: "NAD+", sub: "Wellness shot", goals: ["aging", "energy"], text: "Cellular energy and healthy aging." },
    { kind: "shot", name: "B-Complex", sub: "Wellness shot", goals: ["energy"], text: "Stress and energy support." },
    { kind: "shot", name: "Vitamin D", sub: "Wellness shot", goals: ["immunity"], text: "Immunity and mood." },
    { kind: "shot", name: "Taurine", sub: "Wellness shot", goals: ["energy", "recovery"], text: "Energy and exercise recovery." },
    { kind: "shot", name: "CoQ10", sub: "Wellness shot", goals: ["energy", "aging"], text: "Cellular energy and heart health support." },
    { kind: "shot", name: "Zofran + Toradol", sub: "Add-on injections", goals: ["recovery"], text: "Zofran (ondansetron) for nausea and Toradol (ketorolac) for headache and body aches. Given after a health screening." }
  ],
  menuGoals: [ { id: "all", label: "All" }, { id: "energy", label: "Energy" }, { id: "recovery", label: "Recovery" }, { id: "immunity", label: "Immunity" }, { id: "skin", label: "Skin" }, { id: "metabolism", label: "Metabolism" }, { id: "aging", label: "Healthy aging" } ],
  faqs: [
    { q: "Who gives the IV?", a: "Our nurse practitioner, after a health screening. Where possible, your therapy is guided by your bloodwork." },
    { q: "How long does it take?", a: "Most IV drips take 30 to 60 minutes. Wellness shots take about 5 minutes. There's no downtime." },
    { q: "How often should I come in?", a: "It depends on your goals. Some people come before or after travel; others monthly. We'll recommend a schedule." },
    { q: "Is IV therapy safe for everyone?", a: "Not always. Heart or kidney conditions and some electrolyte disorders can rule it out, which is why we screen first." }
  ]
};

P["gut-health"] = {
  section: "lng", type: "treatment", crumbs: [LNG],
  seoTitle: "Gut Health Testing & Nutrition in Jersey City | Peak by MD",
  metaDesc: "Functional gut health testing and clinical nutrition in Jersey City near Hoboken. Find the cause of bloating, fatigue and digestive issues.",
  eyebrow: "Gut Health & Nutrition",
  h1: "Test your gut. Fix what's actually wrong.",
  intro: "Bloating, irregularity and fatigue have causes you can measure. We use targeted testing to find them, then build a nutrition plan with our clinical nutritionist.",
  heroPh: "Clinical nutritionist consultation",
  facts: [ { label: "Testing", value: "At-home kits + labs" }, { label: "Results", value: "2 to 3 weeks" }, { label: "Plan built by", value: "Physician + nutritionist" }, { label: "Follow-up", value: "8 to 12 weeks" } ],
  concerns: ["Bloating", "Constipation or diarrhea", "Reflux", "Food reactions", "Fatigue", "Skin flares", "Brain fog"],
  markersTitle: "What we test.",
  markersText: "Testing is chosen based on your symptoms, not ordered all at once.",
  markers: [
    { name: "Comprehensive stool analysis", why: "Looks at gut bacteria, inflammation, digestion and infections." },
    { name: "SIBO breath test", why: "Checks for bacterial overgrowth in the small intestine, a common cause of bloating." },
    { name: "Celiac screening", why: "Rules out gluten-related autoimmune disease." },
    { name: "Inflammation markers", why: "hs-CRP and others show whether your gut issues are affecting your whole body." },
    { name: "Micronutrients", why: "Iron, B12, vitamin D and others that gut issues can deplete." }
  ],
  how: [
    { title: "Test", text: "A detailed history and targeted testing based on your symptoms." },
    { title: "Treat", text: "Your physician addresses infections, overgrowth or deficiencies." },
    { title: "Rebuild", text: "Our clinical nutritionist builds a sustainable plan to restore digestion and balance." }
  ],
  expect: [
    { when: "Visit 1", text: "Consultation with your physician and testing ordered." },
    { when: "Weeks 2 to 3", text: "Results reviewed and your treatment plan begins." },
    { when: "Ongoing", text: "Sessions with our clinical nutritionist to guide food choices." },
    { when: "Weeks 8 to 12", text: "Follow-up to measure progress and adjust your plan." }
  ],
  fitYes: ["Ongoing bloating or irregular digestion", "Fatigue or skin issues you suspect are gut-related", "You want testing, not guesswork"],
  fitNo: ["Severe symptoms like bleeding or weight loss (see a GI specialist first)", "Recent major GI surgery"],
  quote: "Most patients have already tried cutting foods on their own. Testing tells us what's really happening, so we can stop guessing.",
  pairs: ["medical-weight-loss", "womens-hormones", "iv-therapy"],
  learnTitle: "Why your gut affects everything.",
  learn: [
    { title: "More than digestion", text: "Your gut houses trillions of bacteria and about 70% of your immune system. Its health affects energy, mood, skin and inflammation." },
    { title: "Symptoms overlap", text: "Bloating can come from SIBO, food intolerance, low stomach acid or stress. Testing separates the causes so treatment targets the right one." },
    { title: "Nutrition is the long-term fix", text: "Treating an infection or overgrowth is step one. A sustainable eating plan keeps your gut balanced afterward." }
  ],
  myths: [
    { myth: "Probiotics help everyone.", fact: "The right strain depends on the problem, and some people with SIBO feel worse on probiotics." },
    { myth: "Cutting out foods will fix it.", fact: "Long elimination diets can reduce gut diversity. Testing helps you remove only what's truly a problem." },
    { myth: "Bloating is normal.", fact: "Occasional bloating is common, but frequent or painful bloating usually has a cause worth finding." }
  ],
  faqs: [
    { q: "What gut tests do you offer?", a: "Options include comprehensive stool analysis, SIBO breath testing, celiac screening and blood markers. We choose based on your symptoms." },
    { q: "Do you have a nutritionist?", a: "Yes. Our clinical nutritionist works alongside your physician to build a plan that fits your life." },
    { q: "Can gut health affect skin or energy?", a: "Often, yes. Gut inflammation and nutrient gaps can show up as fatigue, skin flares and brain fog." },
    { q: "Do I need a referral?", a: "No. You can book a consultation directly." }
  ]
};

const names = {
  "skin-laser": "Skin & Laser", neurotoxins: "Neurotoxins", "dermal-fillers": "Dermal Fillers",
  biostimulators: "Biostimulators", "skin-boosters": "Skin Boosters", "laser-resurfacing": "Laser Resurfacing",
  microneedling: "Microneedling", "hair-restoration": "Hair Restoration", "mens-hormones": "Men's Hormone Therapy", "womens-hormones": "Women's Hormone Therapy",
  "medical-weight-loss": "Medical Weight Loss", "peptide-therapy": "Peptide Therapy", "iv-therapy": "IV Therapy & Wellness Shots",
  "gut-health": "Gut Health & Nutrition"
};
const blurbs = {
  neurotoxins: "Soften lines with natural movement.", "dermal-fillers": "Restore volume and define lips.", biostimulators: "Rebuild collagen gradually.",
  "laser-resurfacing": "Fade spots and even tone.", "skin-boosters": "Hydration, elasticity and glow.", microneedling: "Smooth scars, refine pores, firm skin.",
  "hair-restoration": "Test, then treat thinning.", "mens-hormones": "Testosterone care, lab-guided.", "womens-hormones": "Perimenopause and menopause care.", "medical-weight-loss": "GLP-1s that protect muscle.",
  "peptide-therapy": "Recovery, sleep and repair.", "iv-therapy": "Hydration and nutrients.", "gut-health": "Testing-guided nutrition."
};
Object.keys(P).forEach(k => { P[k].slug = k; P[k].name = names[k]; });
P["rf-microneedling"] = P.microneedling;
window.PEAK_SERVICE_PAGES = { pages: P, names, blurbs, url: U, concerns: CONCERNS };
})();
