// Clinical update layer (v2). Merges over window.PEPTIDES by id. All content pending physician review.
var COMPOUND_NOTE = "Peak by MD sources this therapy through licensed 503A or 503B compounding pharmacies. Compounded products are not FDA-approved, and FDA does not review them for safety, effectiveness, or quality before they are marketed.";
var PCAC_2026 = "In April 2026, FDA removed this substance from its “Category 2” list of bulk substances with safety concerns. In July 2026, FDA’s Pharmacy Compounding Advisory Committee voted to recommend it for compounding; FDA rulemaking on that recommendation is ongoing.";

window.PEPTIDE_META2 = {
  evidence: {
    5: { label: "Established Clinical Evidence", short: "Established", desc: "Multiple high-quality human clinical trials demonstrate meaningful benefits for a specific indication." },
    4: { label: "Promising Human Evidence", short: "Promising", desc: "Human studies suggest potential benefits, but more research is needed on efficacy, long-term safety, or who benefits." },
    3: { label: "Early Human Evidence", short: "Early human", desc: "Small, preliminary, or uncontrolled human studies exist. Clinical efficacy remains uncertain." },
    2: { label: "Preclinical Evidence", short: "Preclinical", desc: "Evidence comes mainly from laboratory or animal studies. Clinical benefit in people has not been established." },
    1: { label: "Insufficient Clinical Evidence", short: "Insufficient", desc: "Reliable human efficacy data for this product are absent or inadequate." }
  },
  safety: {
    established: "Established safety profile for an approved indication",
    limited: "Limited human safety data",
    unknown: "Long-term safety unknown"
  },
  regTypes: {
    approved: "FDA-approved for a specific indication",
    offlabel: "FDA-approved, discussed here for off-label use",
    invest: "Investigational / not FDA-approved",
    verify: "Compounded formulation, not FDA-approved"
  },
  noHuman: "High-quality human clinical trials demonstrating this benefit are not currently available.",
  groups: {
    metabolic: {
      screen: ["Weight, BMI, and waist circumference", "Blood pressure", "HbA1c and fasting glucose, when indicated", "Kidney function and hydration status", "Lipid profile", "Body composition, including lean muscle mass", "Nutrition and protein intake", "History of pancreatitis or gallbladder disease", "Gastroparesis or significant digestive symptoms", "Personal or family history of medullary thyroid cancer or MEN2", "Pregnancy status and reproductive plans", "Current diabetes medications"],
      valid: ["Weight and waist circumference", "Blood pressure", "HbA1c, glucose, and lipids, when indicated", "Body composition and lean mass", "Digestive tolerance and hydration", "Protein intake and overall nutrition"],
      explore: ["Appetite, cravings, and energy (subjective)"]
    },
    gh: {
      screen: ["Age-adjusted IGF-1", "HbA1c and fasting glucose", "History of cancer", "Pituitary disorders", "Fluid retention or swelling", "Symptoms of sleep apnea", "Diabetes or insulin resistance", "Diabetic eye disease, where relevant", "Thyroid or other hormone conditions, when indicated"],
      valid: ["IGF-1, to confirm a response and avoid excess", "Glucose and HbA1c", "Swelling, joint pain, or hand numbness"],
      explore: ["Sleep quality, energy, and recovery (subjective)", "Body composition changes"],
      note: "A rise in growth hormone or IGF-1 shows the therapy is having a hormonal effect. It does not by itself show improvements in longevity, athletic performance, or muscle growth."
    },
    repair: {
      screen: ["An accurate diagnosis of the injury or condition", "Current functional limitations", "Imaging, when clinically appropriate", "Rehabilitation and physical therapy history", "Medication review", "History of cancer", "A baseline pain and function assessment"],
      valid: ["Standardized pain scores", "Function, strength, and range of motion", "Progress in rehabilitation"],
      explore: ["How you feel day to day (subjective)"],
      note: "Feeling better does not prove that tissue has structurally healed. Repeat imaging is used only when it would change your care."
    },
    mito: {
      screen: ["Overall metabolic health", "Fatigue and functional status", "Exercise capacity", "Sleep quality", "Kidney or liver function, when relevant", "Existing medical conditions", "Medication interactions"],
      valid: ["Fatigue and function questionnaires", "Exercise tolerance", "Sleep quality", "Relevant labs, such as kidney and liver function"],
      explore: ["NAD+ levels, mitochondrial markers, or biological-age tests"],
      note: "NAD+ levels, mitochondrial markers, and biological-age tests are not validated for choosing or adjusting these therapies."
    },
    immune: {
      screen: ["The specific diagnosis or concern being addressed", "Autoimmune history", "Active infections", "Immunosuppressive medications", "Inflammatory conditions", "Disease-specific testing, when appropriate"],
      valid: ["Symptoms related to your diagnosis", "Disease-specific labs, when appropriate", "Frequency and severity of infections"],
      explore: ["General immune or inflammatory markers without a specific diagnosis"]
    },
    skin: {
      screen: ["Skin type and sensitivity", "History of contact reactions or allergies", "Current skincare and prescription topicals", "Pregnancy or breastfeeding", "Your goals and realistic expectations", "Baseline standardized photographs"],
      valid: ["Standardized photographs at consistent intervals", "Skin tolerance and irritation"],
      explore: ["Texture, firmness, and tone (subjective)"]
    }
  }
};

window.PEPTIDE_CLINICAL = {
semaglutide: {
  group: "metabolic", ev: 5, safety: "established", regType: "approved",
  evFor: "Weight management, type 2 diabetes, and cardiovascular risk reduction in the populations studied",
  human: ["Average weight loss of about 15% over 68 weeks in adults with obesity (STEP 1, about 2,000 adults)", "20% relative reduction in major cardiovascular events in adults with cardiovascular disease and overweight, without diabetes (SELECT, over 17,000 adults)", "Improved blood sugar control in type 2 diabetes"],
  invest: ["Low-dose use for healthy aging in people without obesity", "Kidney, liver, and other organ outcomes beyond approved uses"],
  evSummary: "Semaglutide is supported by large, randomized, placebo-controlled human trials with long follow-up. Weight tends to return after stopping, so it is generally considered a long-term therapy.",
  studies: [
    { type: "Randomized controlled trial", subj: "Human", pop: "About 2,000 adults with obesity or overweight, without diabetes", outcome: "Change in body weight at 68 weeks", finding: "About 15% average weight loss vs. about 2% on placebo", limit: "Weight regain after stopping was common in follow-up" },
    { type: "Randomized controlled trial", subj: "Human", pop: "Over 17,000 adults with cardiovascular disease and overweight, without diabetes", outcome: "Heart attack, stroke, or cardiovascular death", finding: "20% relative reduction in major cardiovascular events", limit: "Applies to people with existing cardiovascular disease" }
  ],
  serious: ["Gallbladder disease", "Pancreatitis (rare)", "Dehydration-related kidney injury with severe GI symptoms", "Low blood sugar when combined with insulin or sulfonylureas"],
  interact: "Can cause low blood sugar with insulin or sulfonylureas. Slower stomach emptying can affect how some oral medications are absorbed.",
  preg: "Not for use during pregnancy. If you are planning a pregnancy, your provider will advise when to stop.",
  theory: ["Thyroid C-cell tumors were seen in rodents. Whether this applies to people is not established, which is why a history of medullary thyroid cancer or MEN2 is a contraindication."],
  reg: "Semaglutide is FDA-approved as Ozempic and Rybelsus for type 2 diabetes and as Wegovy for chronic weight management and cardiovascular risk reduction. Other uses are off-label. " + COMPOUND_NOTE
},
tirzepatide: {
  group: "metabolic", ev: 5, safety: "established", regType: "approved",
  evFor: "Weight management, type 2 diabetes, and obstructive sleep apnea with obesity",
  human: ["Average weight loss of 15–21% over 72 weeks, depending on dose, in adults with obesity (SURMOUNT-1, about 2,500 adults)", "Reduced sleep apnea severity in adults with obesity (SURMOUNT-OSA)", "Improved blood sugar control in type 2 diabetes"],
  invest: ["Heart failure and fatty liver disease", "Use in people without excess weight"],
  evSummary: "Tirzepatide is supported by large, randomized, placebo-controlled human trials. As with other incretin therapies, weight tends to return after stopping.",
  studies: [
    { type: "Randomized controlled trial", subj: "Human", pop: "About 2,500 adults with obesity or overweight, without diabetes", outcome: "Change in body weight at 72 weeks", finding: "15–21% average weight loss by dose vs. about 3% on placebo", limit: "Long-term outcomes beyond the trial period are still being studied" },
    { type: "Randomized controlled trials", subj: "Human", pop: "Adults with obesity and moderate-to-severe obstructive sleep apnea", outcome: "Apnea-hypopnea index", finding: "Meaningful reductions in sleep apnea severity", limit: "Limited to people with obesity" }
  ],
  serious: ["Gallbladder disease", "Pancreatitis (rare)", "Dehydration-related kidney injury with severe GI symptoms", "Low blood sugar when combined with insulin or sulfonylureas"],
  interact: "Can cause low blood sugar with insulin or sulfonylureas. May reduce the effectiveness of oral birth control, especially when starting or increasing the dose.",
  preg: "Not for use during pregnancy. If you are planning a pregnancy, your provider will advise when to stop.",
  theory: ["Thyroid C-cell tumors were seen in rodents. Whether this applies to people is not established."],
  unknowns: ["Long-term effects beyond several years", "Optimal maintenance dosing", "Use in people without excess weight"],
  reg: "Tirzepatide is FDA-approved as Mounjaro for type 2 diabetes and as Zepbound for chronic weight management and obstructive sleep apnea in adults with obesity. Other uses are off-label. " + COMPOUND_NOTE
},
retatrutide: {
  group: "metabolic", ev: 4, safety: "unknown", regType: "invest",
  summary: "An investigational triple-hormone agonist that produced large weight reductions in phase 3 trials. It is not FDA-approved.",
  evFor: "Weight reduction in adults with obesity, in phase 3 trials not yet reviewed by FDA",
  human: ["Large average weight reductions in adults with obesity in a 48-week phase 2 trial (338 adults)", "Phase 3 trials reported in 2025–2026 showed large average weight reductions in adults with obesity, with and without type 2 diabetes"],
  invest: ["Liver fat reduction", "Knee osteoarthritis pain with obesity", "Cardiovascular and kidney outcomes"],
  evSummary: "Retatrutide now has phase 3 trial results, but most have been reported by the manufacturer and are not yet fully published or reviewed by FDA. Its long-term safety in broad populations is not yet known.",
  studies: [
    { type: "Randomized controlled trial (phase 2)", subj: "Human", pop: "338 adults with obesity", outcome: "Change in body weight at 48 weeks", finding: "Average weight loss of about 24% at the highest dose", limit: "Relatively small and short" },
    { type: "Randomized controlled trials (phase 3)", subj: "Human", pop: "Several thousand adults with obesity, with and without type 2 diabetes", outcome: "Change in body weight", finding: "Large average weight reductions vs. placebo", limit: "Several results not yet fully peer-reviewed or reviewed by FDA" }
  ],
  serious: ["Increased resting heart rate", "Gallbladder disease", "Abnormal skin sensations (dysesthesia)", "GI side effects leading to stopping treatment, more often at higher doses"],
  interact: "Expected to share the interactions of other incretin therapies, including low blood sugar with insulin or sulfonylureas and effects on oral medication absorption.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["Expected to share the thyroid and pancreatitis cautions of other incretin therapies. This has not been confirmed in long-term data."],
  caution: "Not for use with a personal or family history of medullary thyroid cancer or MEN2, during pregnancy, or with a history of pancreatitis.",
  unknowns: ["FDA review of the phase 3 data", "Long-term safety", "Cardiovascular outcomes", "Effect of higher heart rate over time"],
  reg: "Retatrutide is investigational and not FDA-approved for any use. The manufacturer has announced plans to apply for FDA approval. ",
  bottom: ["Retatrutide has produced some of the largest weight reductions seen with medication, but it remains investigational. Its long-term safety and FDA review are still ahead."],
  refs: ["Jastreboff AM, et al. Triple-hormone-receptor agonist retatrutide for obesity — a phase 2 trial. N Engl J Med. 2023.", "Eli Lilly and Company. TRIUMPH phase 3 topline results. Press releases, 2025–2026. ClinicalTrials.gov: retatrutide TRIUMPH program."]
},
"bpc-157": {
  group: "repair", ev: 3, safety: "limited", regType: "invest",
  summary: "A synthetic peptide studied mainly in animals for tendon, ligament, muscle, and gut repair. Human evidence is limited to very small studies.",
  human: [],
  invest: ["Tendon, ligament, and muscle injury", "Gut inflammation and ulcers", "Joint pain"],
  evSummary: "Rodent studies consistently report faster tissue repair, much of it from a small number of research groups. Human data are limited to a very small retrospective study of knee pain and early safety studies. These are not enough to establish benefit or long-term safety.",
  studies: [
    { type: "Review of preclinical studies", subj: "Animal", pop: "Rodent models of tendon, ligament, and muscle injury", outcome: "Healing measures", finding: "Faster healing in most models", limit: "Animal results may not translate to people" },
    { type: "Retrospective case series", subj: "Human", pop: "About 12 adults with knee pain", outcome: "Patient-reported pain", finding: "Most reported improvement", limit: "No control group, very small, and not randomized" }
  ],
  serious: ["Serious adverse effects in people have not been well studied"],
  interact: "No well-characterized drug interactions, largely because human studies are lacking.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["Because BPC-157 promotes blood vessel growth in animals, it could in theory affect existing tumors. This has not been studied in people."],
  reg: "BPC-157 is not FDA-approved. " + PCAC_2026 + " " + COMPOUND_NOTE
},
tb4: {
  group: "repair", ev: 2, safety: "limited", regType: "invest",
  human: [],
  invest: ["Soft-tissue and muscle injury", "Wound healing", "Eye surface healing (eye-drop forms)"],
  evSummary: "Animal studies suggest effects on wound closure, blood vessel formation, and inflammation. Small human trials have tested topical or eye-drop forms for wounds and dry eye. Injected TB-4 or TB-500 for injuries has essentially no controlled human data.",
  studies: [
    { type: "Review of laboratory and animal studies", subj: "Animal", pop: "Wound, heart, and soft-tissue injury models", outcome: "Tissue repair", finding: "Improved repair and cell migration", limit: "Not tested as an injection for injuries in people" }
  ],
  serious: ["Serious adverse effects of injected forms have not been well studied"],
  interact: "No well-characterized drug interactions.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["Because it promotes cell migration and blood vessel growth, it could in theory affect existing tumors. This has not been studied in people."],
  reg: "Thymosin beta-4 and TB-500 are not FDA-approved. " + PCAC_2026 + " " + COMPOUND_NOTE
},
"bpc-tb4": {
  group: "repair", ev: 1, safety: "limited", regType: "verify",
  ingredients: "Ingredient evidence: BPC-157, early human; TB-4, preclinical.",
  human: [],
  invest: ["Tendon, ligament, and muscle injury", "Joint pain"],
  evSummary: "Each peptide has been studied separately, almost entirely in animals. No published trials have tested BPC-157 and TB-4 together in people, so this formulation’s effectiveness and safety are unknown.",
  studies: [
    { type: "No studies of the combination", subj: "—", pop: "—", outcome: "—", finding: "Expected effects are extrapolated from studies of each ingredient", limit: "The combination has not been tested" }
  ],
  serious: ["Serious adverse effects have not been well studied"],
  interact: "No well-characterized drug interactions.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["Both peptides promote blood vessel growth in animals and could in theory affect existing tumors."],
  reg: "Neither ingredient is FDA-approved, and the combination has not been reviewed. Both BPC-157 and TB-500 were recommended by FDA’s compounding advisory committee in July 2026; FDA rulemaking is ongoing. " + COMPOUND_NOTE
},
glow: {
  group: "repair", ev: 1, safety: "limited", regType: "verify",
  ingredients: "Ingredient evidence: BPC-157, early human; TB-500, preclinical; GHK-Cu, early human (topical only).",
  human: [],
  invest: ["Tissue repair", "Collagen and skin quality"],
  evSummary: "There are no published studies of this combination. Expected benefits are extrapolated from research on each peptide, most of which is laboratory or animal research. Human GHK-Cu studies used topical, not injected, forms.",
  studies: [
    { type: "No studies of the combination", subj: "—", pop: "—", outcome: "—", finding: "Expected effects are extrapolated from each ingredient", limit: "The combination and its interactions have not been tested" }
  ],
  serious: ["Serious adverse effects have not been well studied"],
  interact: "No well-characterized drug interactions.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["BPC-157 and TB-500 promote blood vessel growth in animals and could in theory affect existing tumors.", "Repeated copper exposure from injections has not been studied long term."],
  reg: "None of the ingredients is FDA-approved for this use, and the combination has not been reviewed. BPC-157 and TB-500 were recommended by FDA’s compounding advisory committee in July 2026, with FDA rulemaking ongoing. Injectable GHK-Cu is expected to be reviewed separately. " + COMPOUND_NOTE
},
klow: {
  group: "repair", ev: 1, safety: "limited", regType: "verify",
  ingredients: "Ingredient evidence: BPC-157, early human; TB-500, preclinical; GHK-Cu, early human (topical only); KPV, preclinical.",
  human: [],
  invest: ["Tissue repair", "Gut and skin inflammation"],
  evSummary: "There are no clinical studies of this combination. KPV has shown anti-inflammatory effects in cell and animal studies, but human data are minimal.",
  studies: [
    { type: "No studies of the combination", subj: "—", pop: "—", outcome: "—", finding: "Expected effects are extrapolated from each ingredient", limit: "The combination and its interactions have not been tested" }
  ],
  serious: ["Serious adverse effects have not been well studied"],
  interact: "No well-characterized drug interactions.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["BPC-157 and TB-500 promote blood vessel growth in animals and could in theory affect existing tumors."],
  caution: "Avoid with active or suspected cancer, during pregnancy or breastfeeding, or with copper sensitivity or Wilson disease.",
  reg: "None of the ingredients is FDA-approved for this use, and the combination has not been reviewed. BPC-157, TB-500, and KPV were recommended by FDA’s compounding advisory committee in July 2026, with FDA rulemaking ongoing. Injectable GHK-Cu is expected to be reviewed separately. " + COMPOUND_NOTE
},
pentosan: {
  group: "repair", ev: 3, safety: "limited", regType: "verify",
  human: ["Improvements in knee pain and function in small, mostly open-label studies of knee osteoarthritis"],
  invest: ["Cartilage changes on imaging", "Bone marrow edema"],
  evSummary: "Small open-label and early randomized studies in knee osteoarthritis have reported improvements in pain and function. These studies were small and often uncontrolled. Larger controlled trials are needed.",
  studies: [
    { type: "Open-label clinical trial", subj: "Human", pop: "Adults with knee osteoarthritis", outcome: "Pain, function, and cartilage imaging", finding: "Improvements in symptoms and some imaging measures", limit: "No placebo group and small sample" },
    { type: "Case series", subj: "Human", pop: "Long-term users of oral pentosan", outcome: "Retinal findings", finding: "A pattern of retinal pigment changes (maculopathy) linked to long-term use", limit: "Relates to oral use over years" }
  ],
  screen: ["Bleeding disorders and blood thinner use", "Upcoming surgery or procedures", "Eye history, including any retinal conditions"],
  valid: ["Standardized pain scores", "Function and mobility", "Bruising or bleeding", "Vision changes"],
  serious: ["Bleeding", "Retinal changes (pigmentary maculopathy) with long-term oral use"],
  interact: "Increases bleeding risk with blood thinners, antiplatelet drugs, NSAIDs, and some supplements such as fish oil.",
  preg: "Not recommended during pregnancy or breastfeeding.",
  theory: ["Whether injectable use carries the same retinal risk as long-term oral use is not known."],
  reg: "Oral pentosan polysulfate (Elmiron) is FDA-approved for interstitial cystitis bladder pain. Injectable pentosan for joints is not FDA-approved and is used off-label. " + COMPOUND_NOTE
},
"cjc-ipamorelin": {
  group: "gh", ev: 3, safety: "limited", regType: "invest",
  human: ["Increased growth hormone and IGF-1 levels for several days after CJC-1295 in healthy adults (short hormone-level study)"],
  invest: ["Body composition", "Sleep quality", "Recovery"],
  evSummary: "Human studies show that CJC-1295 raises growth hormone and IGF-1. Ipamorelin was tested for bowel recovery after surgery and did not show clear benefit. There are no trials showing that the combination improves body composition, sleep, or aging outcomes.",
  studies: [
    { type: "Clinical pharmacology study", subj: "Human", pop: "Healthy adults", outcome: "Growth hormone and IGF-1 levels", finding: "Sustained increases after a single dose", limit: "Measured hormone levels, not health outcomes" },
    { type: "Randomized controlled trial", subj: "Human", pop: "Adults after bowel surgery (IV ipamorelin)", outcome: "Return of bowel function", finding: "No clear benefit over placebo", limit: "Different route and purpose than wellness use" }
  ],
  serious: ["Increased heart rate and flushing reactions reported with CJC-1295", "Higher blood sugar", "Fluid retention"],
  interact: "May raise blood sugar and affect diabetes medications. Glucocorticoids and thyroid medications can affect the response.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["Raising growth hormone and IGF-1 over long periods could in theory affect cancer risk. This has not been established in people."],
  reg: "Neither CJC-1295 nor ipamorelin is FDA-approved. In 2024, FDA’s compounding advisory committee voted against adding either to the list of substances eligible for compounding. " + COMPOUND_NOTE
},
sermorelin: {
  group: "gh", ev: 3, safety: "limited", regType: "verify",
  human: ["Increased growth hormone release in children with growth hormone deficiency (the basis of its former approval)", "Increased growth hormone in small studies of older adults"],
  invest: ["Lean mass, skin, and well-being in aging adults", "Sleep quality"],
  evSummary: "Sermorelin increased growth hormone in children with deficiency and in small studies of older adults. Studies in aging adults were small and short, and did not establish meaningful long-term benefit.",
  studies: [
    { type: "Small clinical studies (reviewed)", subj: "Human", pop: "Older adults", outcome: "Growth hormone, IGF-1, body composition", finding: "Increased GH and IGF-1 with modest changes in some measures", limit: "Small, short, and mostly older studies" }
  ],
  serious: ["Higher blood sugar", "Fluid retention"],
  interact: "May affect diabetes medications. Glucocorticoids and thyroid medications can affect the response.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["Long-term growth hormone stimulation could in theory affect cancer risk. This has not been established."],
  reg: "Sermorelin was previously FDA-approved (Geref) and was discontinued for reasons not related to safety. There is no currently marketed FDA-approved sermorelin product. " + COMPOUND_NOTE
},
tesamorelin: {
  group: "gh", ev: 5, safety: "established", regType: "offlabel",
  evFor: "Reducing abdominal visceral fat in adults with HIV-associated lipodystrophy",
  human: ["About 15–18% reduction in visceral fat over six months in adults with HIV-associated lipodystrophy (phase 3 trials)", "Reduced liver fat in adults with HIV and fatty liver (randomized trial)"],
  invest: ["Visceral fat reduction in people without HIV", "Cognition in older adults"],
  evSummary: "Tesamorelin has strong randomized trial evidence in its approved population. Evidence for other groups, including people without HIV, is limited. Fat often returns after stopping.",
  studies: [
    { type: "Randomized controlled trials (phase 3)", subj: "Human", pop: "Adults with HIV-associated abdominal fat", outcome: "Visceral fat on imaging", finding: "About 15–18% reduction vs. placebo", limit: "Limited to people with HIV" },
    { type: "Randomized controlled trial", subj: "Human", pop: "Adults with HIV and fatty liver", outcome: "Liver fat", finding: "Reduced liver fat", limit: "Limited to people with HIV" }
  ],
  serious: ["Higher blood sugar", "Fluid retention", "Allergic reactions (uncommon)"],
  interact: "May affect diabetes medications. Glucocorticoids may need adjustment.",
  preg: "Not for use during pregnancy.",
  theory: ["Long-term IGF-1 elevation could in theory affect cancer risk."],
  reg: "Tesamorelin is FDA-approved (Egrifta) to reduce excess abdominal fat in adults with HIV-associated lipodystrophy. Use for other purposes is off-label. " + COMPOUND_NOTE
},
nad: {
  group: "mito", ev: 3, safety: "limited", regType: "verify",
  human: ["Oral NAD+ precursors (NR, NMN) reliably raise NAD+ levels in blood, with modest and inconsistent clinical effects"],
  invest: ["Energy and fatigue", "Muscle and metabolic function", "Healthy aging"],
  evSummary: "Most human research has used oral precursors rather than injected or nasal NAD+. Research on injected or nasal NAD+ is very limited, and it is not clear how much reaches the tissues where it would act.",
  studies: [
    { type: "Review of human and animal studies", subj: "Human and animal", pop: "Various", outcome: "NAD+ levels and metabolic measures", finding: "Precursors raise NAD+; clinical benefits are modest and inconsistent", limit: "Few studies of injected or nasal NAD+" }
  ],
  serious: ["Chest tightness or pressure during injection"],
  interact: "No well-characterized drug interactions.",
  preg: "Safety in pregnancy and breastfeeding has not been established.",
  theory: ["Because NAD+ supports cell metabolism broadly, its effect on existing cancers is unknown."],
  reg: "NAD+ is not an FDA-approved medication for any condition. " + COMPOUND_NOTE
},
"ss-31": {
  group: "mito", ev: 4, safety: "limited", regType: "offlabel",
  evFor: "Barth syndrome, a rare genetic mitochondrial disease",
  human: ["Improved knee extensor muscle strength in Barth syndrome, the basis of its accelerated approval"],
  invest: ["Primary mitochondrial myopathy", "Heart failure", "Age-related macular degeneration", "Energy and longevity in healthy adults"],
  evSummary: "Elamipretide’s human evidence is disease-specific. In Barth syndrome it did not meet its primary walking and fatigue endpoints in the placebo-controlled phase, but improved muscle strength. Trials in other diseases have been mixed. There are no trials in healthy adults seeking energy or longevity benefits.",
  studies: [
    { type: "Randomized controlled trial with open-label extension", subj: "Human", pop: "Patients with Barth syndrome", outcome: "Walking distance, fatigue, muscle strength", finding: "Primary endpoints not met; strength improved in extension", limit: "Very small rare-disease population" }
  ],
  screen: ["Whether you have a diagnosed mitochondrial condition"],
  serious: ["Injection-site reactions are very common and occasionally lead to stopping"],
  interact: "No well-characterized drug interactions.",
  preg: "Not studied in pregnancy or breastfeeding.",
  theory: [],
  reg: "Elamipretide is FDA-approved (Forzinity) only for Barth syndrome, under accelerated approval. Use for energy, performance, or longevity is off-label. " + COMPOUND_NOTE
},
"mots-c": {
  group: "mito", ev: 3, safety: "limited", regType: "invest",
  human: [],
  invest: ["Insulin sensitivity", "Exercise capacity", "Age-related muscle decline"],
  evSummary: "In mice, MOTS-c improved insulin sensitivity and physical performance. Human data are mainly observational, showing that MOTS-c levels rise with exercise and fall with age. Controlled human treatment trials are very limited.",
  studies: [
    { type: "Animal study", subj: "Animal", pop: "Mice on high-fat diets", outcome: "Weight and insulin resistance", finding: "Reduced diet-induced weight gain and insulin resistance", limit: "Animal results may not translate to people" },
    { type: "Observational and animal study", subj: "Human and animal", pop: "Exercising adults; aging mice", outcome: "MOTS-c levels; physical capacity", finding: "Levels rise with exercise; treated older mice performed better", limit: "Human data were observational, not treatment trials" }
  ],
  serious: ["Serious adverse effects have not been well studied"],
  interact: "May lower blood sugar and add to the effect of diabetes medications.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["Effects on existing cancers are unknown."],
  reg: "MOTS-c is not FDA-approved. " + PCAC_2026 + " " + COMPOUND_NOTE
},
epitalon: {
  group: "mito", ev: 3, safety: "limited", regType: "invest",
  human: [],
  invest: ["Telomere maintenance", "Melatonin and sleep-wake rhythm", "Aging markers"],
  evSummary: "Cell studies report increased telomerase activity. Small human studies in older adults reported changes in melatonin rhythm and some aging-related markers. Nearly all research comes from one research group in Russia and has not been independently replicated.",
  studies: [
    { type: "Cell study", subj: "Laboratory", pop: "Human cells in culture", outcome: "Telomerase activity", finding: "Increased telomerase activity", limit: "Cell results do not show health benefit" },
    { type: "Small clinical study", subj: "Human and animal", pop: "Older adults and older monkeys", outcome: "Daily melatonin rhythm", finding: "Melatonin rhythm normalized", limit: "Small, single research group, not replicated" }
  ],
  serious: ["Serious adverse effects have not been well studied"],
  interact: "No well-characterized drug interactions.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["Increasing telomerase activity could in theory affect cancer cells. This has not been studied in people."],
  reg: "Epitalon is not FDA-approved. " + PCAC_2026 + " " + COMPOUND_NOTE
},
"ghk-cu": {
  group: "skin", ev: 3, safety: "limited", regType: "verify",
  ingredients: "Rating reflects topical use. Evidence for injected GHK-Cu is preclinical.",
  what: ["GHK-Cu is a small peptide that binds copper and is found naturally in blood plasma, saliva, and urine. Its levels decline with age. At Peak by MD it is offered as an injection, a topical cream, and a hair foam."],
  human: ["Improvements in skin density, firmness, and fine lines in small studies of topical GHK-Cu"],
  invest: ["Hair growth", "Wound healing", "Injected use for skin or tissue repair"],
  evSummary: "Small human studies of topical GHK-Cu reported improvements in skin quality over several months. Laboratory work shows broad effects on genes involved in tissue repair. Evidence for injected GHK-Cu in people is minimal, and evidence for hair growth is limited.",
  studies: [
    { type: "Review of small clinical and laboratory studies", subj: "Human and laboratory", pop: "Adults using topical products; cell studies", outcome: "Skin density, firmness, wrinkles", finding: "Modest improvements with topical use", limit: "Small studies, often industry-linked" }
  ],
  serious: ["Allergic reactions (rare)"],
  interact: "No well-characterized drug interactions.",
  preg: "Not recommended during pregnancy or breastfeeding.",
  theory: ["Long-term effects of repeated copper injections are unknown."],
  reg: "GHK-Cu is not an FDA-approved drug. Topical GHK-Cu is widely used as a cosmetic ingredient. FDA is expected to review injectable GHK-Cu for compounding separately. " + COMPOUND_NOTE
},
"skin-cream": {
  group: "skin", ev: 1, safety: "limited", regType: "verify",
  ingredients: "Ingredient evidence: GHK-Cu, early human (topical); topical rapamycin, early human; KPV, preclinical.",
  human: [],
  invest: ["Fine lines and skin aging", "Firmness and elasticity", "Redness and inflammatory skin conditions"],
  evSummary: "Each ingredient has been studied on its own. Small studies of topical GHK-Cu reported modest skin improvements. A small randomized exploratory trial found topical rapamycin reduced markers of aging in skin. KPV evidence is mainly from laboratory and animal studies. This combination has not been studied as a single product.",
  studies: [
    { type: "Randomized exploratory trial", subj: "Human", pop: "Older adults (topical rapamycin)", outcome: "Skin senescence markers and appearance", finding: "Reduced aging markers and some improvement in appearance", limit: "Small and exploratory; not this formulation" }
  ],
  serious: ["Allergic skin reaction (rare)"],
  interact: "Irritation may increase with retinoids, exfoliating acids, or vitamin C at the same time of day.",
  preg: "Not recommended during pregnancy or breastfeeding unless your provider advises otherwise.",
  theory: ["How much rapamycin is absorbed through skin with long-term use is not well studied."],
  reg: "This is a compounded topical product and is not FDA-approved. Rapamycin (sirolimus) is FDA-approved as an oral medication for other uses and as a topical gel for a specific skin condition, not for skin aging. " + COMPOUND_NOTE
},
"selank-semax": {
  group: "neuro", ev: 3, safety: "limited", regType: "invest",
  ingredients: "Each peptide has early human evidence. The combination has not been studied.",
  human: ["Selank: reduced anxiety similar to a benzodiazepine comparator in a small study of 62 patients with generalized anxiety or neurasthenia", "Semax: better functional recovery in a study of 110 stroke patients"],
  invest: ["Memory and focus in healthy adults", "Stress resilience", "Neuroprotection"],
  evSummary: "Both peptides were developed and studied mainly in Russia and Eastern Europe. Human studies are small and have not been independently replicated in large trials. Evidence for memory or focus in healthy adults is much more limited.",
  studies: [
    { type: "Comparative clinical study", subj: "Human", pop: "62 patients with generalized anxiety or neurasthenia", outcome: "Anxiety scores", finding: "Improvement similar to medazepam", limit: "Small, not placebo-controlled, not replicated" },
    { type: "Neuroimaging study", subj: "Human", pop: "Healthy volunteers", outcome: "Brain functional connectivity", finding: "Changes in connectivity after each peptide", limit: "Imaging changes do not prove clinical benefit" }
  ],
  screen: ["Neurologic and psychiatric history", "Current psychiatric or neurologic medications", "Sleep patterns", "Blood pressure"],
  valid: ["Validated anxiety or mood questionnaires, when relevant", "Sleep and side effects"],
  explore: ["Focus and mental energy (subjective)"],
  serious: ["Serious adverse effects have not been well studied"],
  interact: "Interactions with psychiatric or neurologic medications have not been studied.",
  preg: "Not studied in pregnancy or breastfeeding.",
  theory: [],
  caution: "Discuss with your provider first if you have a psychiatric or seizure disorder, or are pregnant or breastfeeding.",
  reg: "Selank and Semax are not FDA-approved. Both were removed from FDA’s “Category 2” list in April 2026 after their nominations were withdrawn. In July 2026, FDA’s compounding advisory committee recommended adding Semax to the list of substances eligible for compounding. Selank has not yet been reviewed by the committee. " + COMPOUND_NOTE
},
"zzz-sleep": {
  group: "neuro", ev: 1, safety: "limited", regType: "invest",
  ingredients: "Ingredient evidence: DSIP, early human with mixed results; Pinealon, preclinical.",
  what: ["DSIP (delta sleep-inducing peptide) was first isolated in the 1970s from rabbits during sleep. Pinealon is a short synthetic peptide studied mainly in Russia for effects on nerve cells."],
  human: [],
  invest: ["Sleep onset and quality", "Stress regulation"],
  evSummary: "Small human studies of DSIP from the 1980s showed mixed effects on sleep. Pinealon research is mostly cell and animal studies. There are no published studies of this combination.",
  studies: [
    { type: "Review of human and animal studies", subj: "Human and animal", pop: "Various, including small insomnia studies", outcome: "Sleep measures", finding: "Inconsistent effects on sleep", limit: "Old, small studies; natural role still unclear" }
  ],
  screen: ["Sleep history, including symptoms of sleep apnea", "Use of sedatives, sleep medications, or alcohol", "Psychiatric history"],
  valid: ["Sleep diary or validated sleep questionnaires", "Daytime alertness and side effects"],
  explore: ["Consumer sleep-tracker data"],
  serious: ["Serious adverse effects have not been well studied"],
  interact: "May add to the effects of sedating medications, sleep aids, or alcohol.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: [],
  reg: "Neither DSIP nor Pinealon is FDA-approved. In July 2026, FDA’s compounding advisory committee voted against adding DSIP (emideltide) to the list of substances eligible for compounding. " + COMPOUND_NOTE,
  bottom: ["DSIP and Pinealon are experimental, and evidence for better sleep is weak. Good sleep habits and evaluation for conditions such as sleep apnea remain the foundation of care."]
},
"ta-1": {
  group: "immune", ev: 4, safety: "limited", regType: "invest",
  evFor: "Chronic hepatitis B and use as a vaccine adjuvant, in trials mainly outside the US",
  human: ["Improved immune markers and outcomes in some trials of chronic hepatitis B", "Improved vaccine response in some trials as an adjuvant"],
  invest: ["Sepsis", "Immune support during cancer treatment", "General immune support in healthy adults"],
  evSummary: "Clinical trials, many conducted in Asia and Europe, support some benefit in hepatitis B and as a vaccine adjuvant. Results in sepsis have been mixed. Evidence for general immune support in healthy people is limited.",
  studies: [
    { type: "Review of clinical trials", subj: "Human", pop: "Patients with viral hepatitis, sepsis, and other conditions", outcome: "Viral response, immune markers, survival", finding: "Benefit in some hepatitis B trials; mixed elsewhere", limit: "Trials vary in quality and population" }
  ],
  serious: ["Serious adverse effects are uncommon in published trials"],
  interact: "May counteract immunosuppressive medications.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["Stimulating the immune system could in theory worsen autoimmune disease or affect transplant tolerance."],
  reg: "Thymosin alpha-1 is not FDA-approved in the United States, though it is approved in several other countries. It was removed from FDA’s “Category 2” list in April 2026 after the nomination was withdrawn. " + COMPOUND_NOTE
},
"ll-37": {
  group: "immune", ev: 2, safety: "limited", regType: "invest",
  ingredients: "Rating reflects injected use. A small trial of topical LL-37 for leg ulcers is early human evidence.",
  summary: "A naturally occurring antimicrobial peptide involved in innate immune defense. Clinical evidence for injected use is minimal.",
  human: ["Improved healing of hard-to-heal venous leg ulcers with topical LL-37 (small trial)"],
  invest: ["Immune resilience", "Chronic inflammatory or infection-related conditions", "Gut barrier function"],
  evSummary: "Laboratory studies show LL-37 acts against bacteria, fungi, and viruses and influences immune signaling. A small trial of topical LL-37 for leg ulcers reported improved healing. Human data for injected LL-37 are very limited. LL-37 can also promote inflammation and has been linked to conditions such as psoriasis and rosacea.",
  studies: [
    { type: "Randomized controlled trial", subj: "Human", pop: "Adults with hard-to-heal venous leg ulcers", outcome: "Ulcer healing rate", finding: "Improved healing with topical LL-37", limit: "Small; topical, not injected" }
  ],
  serious: ["Flare of inflammatory or autoimmune symptoms"],
  interact: "May interact with immunosuppressive medications.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: ["LL-37 affects blood vessel growth and immune activity, which could in theory influence cancers or autoimmune disease."],
  reg: "LL-37 is not FDA-approved. FDA is expected to review it for compounding at a future advisory committee meeting. " + COMPOUND_NOTE
},
kpv: {
  group: "immune", ev: 2, safety: "limited", regType: "invest",
  human: [],
  invest: ["Inflammatory bowel conditions", "Skin inflammation", "Wound healing"],
  evSummary: "In mouse models of colitis, KPV reduced inflammation and tissue damage. Cell studies show it lowers inflammatory signals. Published human clinical trials are lacking.",
  studies: [
    { type: "Animal and cell study", subj: "Animal", pop: "Mouse models of colitis", outcome: "Intestinal inflammation", finding: "Reduced inflammation", limit: "Not studied in people" }
  ],
  serious: ["Serious adverse effects have not been well studied"],
  interact: "No well-characterized drug interactions.",
  preg: "Not for use during pregnancy or breastfeeding unless directed by your provider.",
  theory: [],
  reg: "KPV is not FDA-approved. " + PCAC_2026 + " " + COMPOUND_NOTE
},
larazotide: {
  group: "immune", ev: 3, safety: "limited", regType: "invest", route: "Oral capsule",
  ingredients: "Rating reflects larazotide alone. Offered alone or combined with BPC-157 and/or KPV; those combinations have not been studied.",
  summary: "An oral peptide that acts locally in the gut to help regulate the seals between intestinal cells. It reached late-stage trials for celiac disease but has not been approved.",
  what: ["Larazotide is a synthetic eight-amino-acid peptide that stays in the gut rather than entering the bloodstream. It helps regulate tight junctions, the seals between intestinal lining cells, by countering zonulin, a protein that loosens them.", "It was developed as an add-on to a gluten-free diet for celiac disease."],
  mech: [{ t: "Tight junction regulation", d: "Promotes assembly of tight junctions and counters zonulin signaling, which loosens the connections between intestinal cells." }, { t: "Reduced immune activation", d: "By limiting what crosses the gut lining, may reduce inflammatory responses triggered in the intestine." }],
  human: ["Fewer celiac symptoms at the 0.5 mg dose three times daily, but not at higher doses, in a randomized trial of 342 adults with ongoing symptoms despite a gluten-free diet", "Safety comparable to placebo across several clinical trials in celiac disease"],
  invest: ["Fatty liver disease (NAFLD/NASH), based on the gut-liver connection", "Crohn’s disease and ulcerative colitis", "Autoimmune conditions, including rheumatoid arthritis", "Intestinal permeability outside celiac disease"],
  evSummary: "Larazotide is one of the few gut-barrier peptides tested in randomized human trials. In celiac disease, one large phase 2b trial met its primary endpoint at the lowest dose only; higher doses showed no effect. A phase 3 trial was stopped in 2022 after an interim analysis suggested it was unlikely to succeed. Uses for fatty liver disease, inflammatory bowel disease, and autoimmunity are based on laboratory and animal research and have not been tested in people.",
  studies: [
    { type: "Randomized controlled trial (phase 2b)", subj: "Human", pop: "342 adults with celiac disease and persistent symptoms on a gluten-free diet", outcome: "GI symptom scores", finding: "Improvement at 0.5 mg three times daily; no effect at higher doses", limit: "Inconsistent dose response; later phase 3 trial stopped early" },
    { type: "Laboratory and animal study", subj: "Laboratory and animal", pop: "Intestinal cell models and animal models", outcome: "Tight junction structure and gut permeability", finding: "Promoted tight junction assembly and reduced permeability", limit: "Not a human outcome study" },
    { type: "Animal study", subj: "Animal", pop: "Mouse models of autoimmune arthritis", outcome: "Onset of arthritis", finding: "Treatment before arthritis developed reduced its onset", limit: "Not studied in people" }
  ],
  screen: ["Celiac disease testing, when appropriate", "Inflammatory bowel disease or liver disease history, when relevant"],
  serious: ["Serious adverse effects were uncommon in clinical trials"],
  interact: "No well-characterized drug interactions. Because it acts locally in the gut, systemic interactions are considered unlikely.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: [],
  unknowns: ["Benefit outside celiac disease", "Benefit of combinations with BPC-157 or KPV", "Long-term safety", "Which patients, if any, benefit most"],
  reg: "Larazotide is an investigational drug and is not FDA-approved. Its late-stage development for celiac disease was stopped in 2022. " + COMPOUND_NOTE,
  bottom: ["Larazotide has real randomized trial data in celiac disease, where results were modest and dose-dependent. Uses for liver, bowel, and autoimmune conditions are promising in the laboratory but unproven in people."],
  refs: ["Leffler DA, Kelly CP, Green PH, et al. Larazotide acetate for persistent symptoms of celiac disease despite a gluten-free diet: a randomized controlled trial. Gastroenterology. 2015;148(7):1311-9. doi:10.1053/j.gastro.2015.02.008", "Gopalakrishnan S, et al. Larazotide acetate regulates epithelial tight junctions in vitro and in vivo. Peptides. 2012;35(1):86-94. PMID: 22401908", "Khaleghi S, Ju JM, Lamba A, Murray JA. The potential utility of tight junction regulation in celiac disease: focus on larazotide acetate. Therap Adv Gastroenterol. 2016;9(1):37-49. doi:10.1177/1756283X15616576", "Fasano A. Zonulin and its regulation of intestinal barrier function: the biological door to inflammation, autoimmunity, and cancer. Physiol Rev. 2011;91(1):151-75.", "Tajik N, et al. Targeting zonulin and intestinal epithelial barrier function to prevent onset of arthritis. Nat Commun. 2020."]
},
"super-sexy-spray": {
  group: "neuro", ev: 1, safety: "limited", regType: "verify",
  ingredients: "Ingredient evidence: injected bremelanotide, established for low sexual desire in premenopausal women; intranasal bremelanotide, early human; oxytocin for sexual function, early human.",
  human: [],
  invest: ["Sexual desire and arousal in men and women", "Intimacy and emotional connection"],
  evSummary: "Injected bremelanotide improved sexual desire in two phase 3 trials of premenopausal women with low desire. Early studies tested a nasal form. Evidence for oxytocin in sexual function is limited and mixed. This nasal combination has not been studied.",
  studies: [
    { type: "Randomized controlled trials (phase 3)", subj: "Human", pop: "Premenopausal women with low sexual desire (injected bremelanotide)", outcome: "Desire and related distress", finding: "Modest improvement vs. placebo", limit: "Injected form; not this combination" }
  ],
  screen: ["Blood pressure", "Heart disease, stroke, or heart attack history", "Medication review", "Hormone assessment, when clinically indicated"],
  valid: ["Blood pressure", "Validated sexual function questionnaires", "Side effects such as nausea or flushing"],
  explore: ["Overall satisfaction (subjective)"],
  serious: ["Temporary rise in blood pressure", "Darkening of skin patches with repeated use"],
  interact: "Bremelanotide slows stomach emptying and can reduce absorption of some oral medications, including naltrexone. Use caution with blood pressure medications.",
  preg: "Not for use during pregnancy or breastfeeding.",
  theory: [],
  reg: "Bremelanotide is FDA-approved as an injection (Vyleesi) for low sexual desire in premenopausal women. Oxytocin is FDA-approved as an injection for use in labor. This compounded nasal combination is not FDA-approved. " + COMPOUND_NOTE
}
};

