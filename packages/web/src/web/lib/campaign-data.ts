/**
 * Every claim on the page is defined here, with the source attached.
 *
 * Two rules this file follows, and the page must keep following:
 *   1. Numbers from the Auditor-General's audit come from SAMPLED counties and
 *      facilities. Say "sampled" wherever the figure is not national.
 *   2. Where we argue from documented facts (the "why it persists" section),
 *      the argument is labelled as inference, not as a finding.
 */

export const CAMPAIGN = {
  kicker: "Kenya · Prehospital Emergency Care · 2026",
  headline: ["Kenya has ambulances.", "It does not yet have a system."],
  standfirst:
    "The Auditor-General's performance audit of emergency medical care was tabled in November 2025. It found a country that has trained prehospital clinicians since 1999, written a national policy to 2030, and still cannot tell a citizen which number to call — or get a working ambulance to them inside the hour.",
  ctaEvidence: "Read the evidence",
  ctaAct: "Add your name",
  published: "Published 15 October 2026",
} as const;

export const TICKER = [
  "8% of surveyed citizens had been sensitised on how to handle an emergency",
  "26% knew which number to call",
  "21% had basic first aid skills",
  "34% of sampled ambulances were non-functional",
  "Ambulance response times: 20 to 60 minutes",
  "No sampled county had a ring-fenced emergency care budget",
  "The Ministry's own ask to Treasury: KSh 11.725 billion",
] as const;

export type HeroStat = {
  figure: string;
  label: string;
  note: string;
  tone: "red" | "green" | "gold" | "ink";
};

export const HERO_STATS: HeroStat[] = [
  {
    figure: "20–60",
    label: "minutes to reach a patient",
    note: "Audit, seven sampled counties with dispatch records",
    tone: "red",
  },
  {
    figure: "34%",
    label: "of sampled ambulances off the road",
    note: "92 of 269 inspected ambulances non-functional",
    tone: "red",
  },
  {
    figure: "8%",
    label: "of citizens sensitised on emergencies",
    note: "Only 21% had any basic first aid skills",
    tone: "red",
  },
  {
    figure: "0",
    label: "ring-fenced county emergency budgets",
    note: "None of 16 sampled counties; none of 114 facilities",
    tone: "gold",
  },
];

/** The one-pager — the whole case, print-ready. */
export const ONE_PAGER = {
  title: "The case in one page",
  intro:
    "Kenya's emergency medical care system fails before the hospital door. That is not an opinion — it is the finding of the Auditor-General's own performance audit, published November 2025.",
  points: [
    {
      n: "01",
      head: "The first link is the weakest",
      body: "Only 8% of surveyed citizens had been sensitised on handling an emergency, 26% knew which number to call and 21% had basic first aid skills. Two of sixteen sampled counties had enough community units and community health promoters.",
    },
    {
      n: "02",
      head: "Transport is uncoordinated and under-resourced",
      body: "Response times ran 20 to 60 minutes against a 15–20 minute standard, and only Machakos met it. A third of inspected ambulances were non-functional, many without equipment, fuel, maintenance or staff.",
    },
    {
      n: "03",
      head: "Hospitals have the sign, not the capability",
      body: "Only 3 of 33 sampled Level 4 hospitals had an accident and emergency department. Nurse-to-patient ratios reached 1:122 against a WHO benchmark of 1:4. 90% of sampled Level 4 hospitals had no piped oxygen.",
    },
    {
      n: "04",
      head: "Nobody budgets for it",
      body: "Not one sampled county, and not one of 114 sampled health facilities, had a specific emergency medical care budget. Emergency care competes with everything else, every year.",
    },
    {
      n: "05",
      head: "The workforce exists; the posts do not",
      body: "Kenya has trained emergency medical technicians since 1999 — over 1,000 to date. There is still no approved scheme of service, so the public system has almost nowhere to employ them. The Auditor-General's recommendation: fast-track it.",
    },
  ],
  ask: [
    "Ring-fence an emergency medical care line in every county budget.",
    "Publish the scheme of service for EMTs and emergency vehicle operators, and open the posts.",
    "Fund community first response, not just hospital preparedness.",
    "Report publicly against the audit's six recommendations, every year.",
  ],
} as const;

export type EvidenceGroup = {
  id: string;
  label: string;
  title: string;
  summary: string;
  stats: { figure: string; label: string; note: string; tone: "red" | "green" | "gold" }[];
  quote?: { text: string; source: string };
};

export const EVIDENCE: EvidenceGroup[] = [
  {
    id: "community",
    label: "01 · Community",
    title: "The first link is weak",
    summary:
      "Emergency care does not begin at the hospital gate. In the audit's citizen survey, the public had almost no capacity to recognise an emergency, call for help or keep someone alive until help arrived.",
    stats: [
      {
        figure: "8%",
        label: "sensitised on how to handle an emergency",
        note: "Audit citizen survey",
        tone: "red",
      },
      { figure: "26%", label: "knew which number to call", note: "Audit citizen survey", tone: "red" },
      { figure: "21%", label: "had basic first aid skills", note: "Audit citizen survey", tone: "red" },
      {
        figure: "53.8%",
        label: "community unit deficit, worst sampled county",
        note: "Nyandarua: 148 units against 320 required",
        tone: "red",
      },
    ],
    quote: {
      text: "That critical hour of need at the scene of incidence often lacks professional management, thereby negatively impacting the victim's recovery process and survival.",
      source: "Auditor-General, Performance Audit on Provision of Emergency Medical Care Services, Nov 2025, §23",
    },
  },
  {
    id: "ambulance",
    label: "02 · Transport",
    title: "An uncoordinated ambulance fleet",
    summary:
      "At the time of the audit Kenya had no national ambulance dispatch centre. Counties that had one lacked real-time tracking, call logging, toll-free numbers, backup power and staff.",
    stats: [
      {
        figure: "20–60 min",
        label: "ambulance response time",
        note: "Seven of eight counties with dispatch records; only Machakos met the standard",
        tone: "red",
      },
      {
        figure: "34%",
        label: "of sampled ambulances non-functional",
        note: "92 of 269 inspected ambulances",
        tone: "red",
      },
      {
        figure: "12/16",
        label: "sampled counties with a dispatch centre",
        note: "None had a national centre to coordinate with",
        tone: "red",
      },
      {
        figure: "1 : 70k",
        label: "WHO ambulance-to-population benchmark",
        note: "Against 200+ accredited ambulances for 47 counties in 2026",
        tone: "gold",
      },
    ],
    quote: {
      text: "These inefficiencies have resulted to slow ambulance response times of up-to sixty (60) minutes. This implies that the critical 'golden hour' … is lost.",
      source: "Auditor-General, Nov 2025, §24",
    },
  },
  {
    id: "hospital",
    label: "03 · Hospital",
    title: "The sign on the door is not the service",
    summary:
      "Most Level 4 and Level 5 hospitals had an accident and emergency area. Functionality was a different question: staffing, oxygen, ventilators, imaging and critical care beds were all short.",
    stats: [
      {
        figure: "3 of 33",
        label: "sampled Level 4 hospitals with an A&E department",
        note: "9% of the Level 4 hospitals audited",
        tone: "red",
      },
      {
        figure: "1–4",
        label: "A&E nurses where at least 10 are required",
        note: "Seven of fourteen sampled Level 4 and 5 facilities",
        tone: "red",
      },
      {
        figure: "1:122",
        label: "highest nurse-to-patient ratio recorded",
        note: "Sampled Level 5 facilities; WHO guidance is 1:4",
        tone: "red",
      },
      {
        figure: "90%",
        label: "of sampled Level 4 hospitals without piped oxygen",
        note: "84% had no ventilator; all sampled Level 2 and 3 facilities had no piped oxygen",
        tone: "red",
      },
      {
        figure: "90% / 33%",
        label: "of sampled Level 4 / Level 5 hospitals without an ICU or HDU",
        note: "None of 33 sampled Level 4 hospitals met the 6-bed ICU requirement",
        tone: "red",
      },
    ],
  },
  {
    id: "money",
    label: "04 · Money",
    title: "Emergency care has no budget line",
    summary:
      "The most structural finding in the audit was financial. Emergency medical care is not ring-fenced anywhere, so it is funded by whatever is left after everything else — in a service where demand is unpredictable by definition.",
    stats: [
      {
        figure: "0 of 16",
        label: "sampled counties with a ring-fenced emergency budget",
        note: "Funds sat under various votes in county health budgets",
        tone: "gold",
      },
      {
        figure: "0 of 114",
        label: "sampled health facilities with an emergency budget",
        note: "Audit facility review",
        tone: "gold",
      },
      {
        figure: "KSh 11.725bn",
        label: "what the Ministry told the Auditor-General it needs",
        note: "Sought from the National Treasury to close the audited gaps",
        tone: "gold",
      },
      {
        figure: "6.6%",
        label: "of the FY2026/27 health budget that ask represents",
        note: "Health allocation for FY2026/27: KSh 177.2 billion",
        tone: "gold",
      },
    ],
    quote: {
      text: "There were no specific emergency medical care budgets in the approved county governments' budgets … This runs counter to national policy and undermines sustainability, preparedness and accountability.",
      source: "Auditor-General, Nov 2025, §22 and conclusion §27",
    },
  },
];

export type TimelineRow = {
  year: string;
  what: string;
  promise: string;
  reality: string;
  status: "delivered" | "partial" | "unmet";
};

export const TIMELINE: TimelineRow[] = [
  {
    year: "1999",
    what: "Kenya trains its first emergency medical technicians — the first such cohort in East and Central Africa, after the 1998 bombing of the US embassy in Nairobi.",
    promise:
      "A professional prehospital workforce, trained to a US Department of Transport curriculum, drawn from St John, Kenyatta National Hospital, the city council, the army and the police.",
    reality:
      "Over 1,000 EMTs have been trained since. There is still no approved scheme of service, so the public system has almost no posts to put them in.",
    status: "partial",
  },
  {
    year: "2009",
    what: "The Kenya Council of Emergency Medical Technicians is registered as the umbrella body for the profession.",
    promise: "Coordinated standards, advocacy and regulation for prehospital practice.",
    reality:
      "KCEMT's own history records it plainly: lack of legislation caused a lull in the development of prehospital structures.",
    status: "partial",
  },
  {
    year: "2017",
    what: "The Health Act 2017 makes emergency medical treatment a right and defines it to include pre-hospital care. It establishes an Emergency Medical Treatment Fund.",
    promise: "Treatment regardless of ability to pay, from the scene to stabilisation and referral.",
    reality:
      "The fund resurfaced years later as the Emergency, Chronic and Critical Illness Fund. The Auditor-General's verdict on it in 2025: established, but not fully operationalised and accessible at all levels of care.",
    status: "partial",
  },
  {
    year: "2021",
    what: "The Kenya Emergency Medical Care Policy 2020–2030 and Strategy 2020–2025 are launched, five years in the making.",
    promise:
      "A single countrywide short-code toll-free emergency number. Ambulance dispatch centres at national level and in every county. A scheme of service and licensing for pre-hospital practitioners.",
    reality:
      "Four years later the audit found no national dispatch centre, no single toll-free number for ambulance services, and no scheme of service. The policy was right; the implementation was not funded.",
    status: "unmet",
  },
  {
    year: "Nov 2025",
    what: "The Auditor-General tables a performance audit on the provision of emergency medical care services, triggered by a 2022 Senate Health Committee request.",
    promise: "Parliament to consider the findings; the Ministry to act on six recommendations.",
    reality:
      "The Ministry's written response supports all core recommendations, concurs that system-wide failures underpin the weaknesses, and states it is seeking KSh 11.725 billion from the Treasury.",
    status: "partial",
  },
  {
    year: "Aug 2026",
    what: "The National Ambulance Dispatch Centre launches as the SHA 922 Lifeline — Kenya's first centralised dispatch platform, serving all 47 counties.",
    promise: "One number, coordinated deployment, clinical triage, real-time tracking, patient data sent ahead to the receiving facility.",
    reality:
      "More than 200 accredited ambulances were onboarded, with 40 staff and seven advanced ambulances deployed. For 47 counties and a population above 50 million, that is roughly one ambulance per 250,000 people — far off the WHO benchmark of 1 per 70,000 to 100,000.",
    status: "delivered",
  },
  {
    year: "Oct 2026",
    what: "Kenya confirms two imported Ebola cases and scales up preparedness: screening at 26 points of entry, 652,584 travellers screened, 267 samples tested, 4,971 health workers trained.",
    promise: "Preparedness that protects every county, not only the capital and the border posts.",
    reality:
      "A suspected case in Wajir tested negative but exposed how little is known about county-level capacity. Against 4,971 health workers trained, we found no published figure for community first responders trained in the same period.",
    status: "partial",
  },
];

export type Incentive = {
  head: string;
  documented: string;
  rewards: string;
};

/** Documented facts, then the incentive they create. Explicitly labelled as inference. */
export const INCENTIVES: Incentive[] = [
  {
    head: "Capital is photographed. Readiness is not.",
    documented:
      "Ambulances get bought and flagged off. The audit found 34% of sampled ambulances non-functional, with inadequate fuelling and maintenance, missing equipment and insufficient staff.",
    rewards:
      "Buying a vehicle produces a launch and a photograph. Fuelling, maintaining, equipping and staffing it produces a recurring bill and no headline. The incentive runs one way.",
  },
  {
    head: "Referral is a revenue path.",
    documented:
      "The audit found Level 4 and Level 5 facilities referring patients to Level 6 hospitals for critical care, straining tertiary centres, and patients moved straight from ICU to the ward for want of HDU beds.",
    rewards:
      "An under-equipped lower facility that refers upwards keeps patients flowing to the facilities that are funded, staffed and visible. Fixing the lower facility reduces that flow.",
  },
  {
    head: "A trained workforce with no posts.",
    documented:
      "More than 1,000 EMTs trained since 1999. The Auditor-General's recommendation 32 asks the Ministry to fast-track finalisation and approval of the scheme of service for emergency medical technicians and emergency vehicle operators.",
    rewards:
      "Training is a project that can be funded, counted and closed. Creating a public cadre means permanent payroll, a career structure and a professional body with standing. Only one of those is cheap this financial year.",
  },
  {
    head: "Preparedness that stops at the gate.",
    documented:
      "Ebola preparedness: 26 points of entry, 652,584 travellers screened, 4,971 health workers trained, isolation and treatment units activated. No published figure for community first responders trained.",
    rewards:
      "Outbreak money follows the countable, hospital-based, internationally reportable intervention — screening points, isolation units, health worker trainings. The unfunded community layer is the one that decides whether a febrile traveller in Wajir reaches care in time.",
  },
  {
    head: "Fragmentation is a market.",
    documented:
      "Until August 2026 there was no national ambulance dispatch centre. Callers depended on knowing a number: county services, private providers, hospital fleets, NGOs, each with its own line and its own coverage.",
    rewards:
      "Where the state does not coordinate, private and institutional providers fill the gap and set the terms. A national system that works is a competitor to every operator whose business model depended on being the number someone happened to know.",
  },
];

export const INFERENCE_NOTE = {
  head: "What we document, and what we infer",
  documented:
    "Every fact in this section is sourced: the audit paragraphs, the Ministry's own written response to the audit, published government statements, and reporting on the current outbreak response. Nothing here alleges that any named person or institution acted in bad faith.",
  inferred:
    "What we infer is the shape of the incentive: in Kenya's current arrangements, emergency care is funded, staffed and rewarded at the hospital end and left unfunded at the community and prehospital end. That is a structural outcome, not a conspiracy. Structures can be changed by policy — which is precisely the point of the demands on this page.",
} as const;

export type Myth = { myth: string; fact: string };

export const MYTHS: Myth[] = [
  {
    myth: "Kenya has no trained prehospital clinicians.",
    fact: "It has. Kenya has trained emergency medical technicians since 1999 and now has more than 1,000. What it does not have is an approved scheme of service, so there are almost no public posts for them to fill. The Auditor-General recommends fast-tracking that scheme.",
  },
  {
    myth: "The 922 dispatch centre solved the problem.",
    fact: "Dispatch is not capability. The centre can only send ambulances that are fuelled, equipped, staffed and maintained. The audit found 34% of sampled ambulances non-functional, and 200+ accredited ambulances were onboarded for 47 counties.",
  },
  {
    myth: "Emergency care is a hospital problem.",
    fact: "The audit states that of roughly 45 million annual deaths in low- and middle-income countries, 24.3 million — 54% — are from conditions that pre-hospital and emergency medical care can potentially address. The first link in that chain is the community, where only 8% of surveyed citizens had been sensitised.",
  },
  {
    myth: "There is no money for this.",
    fact: "There is. The FY2026/27 health budget is KSh 177.2 billion, with KSh 4 billion to the Emergency, Chronic and Critical Illness Fund. What is missing is a ring-fenced emergency line: none of 16 sampled counties and none of 114 sampled facilities had one. The Ministry's own request was KSh 11.725 billion — about 6.6% of the health budget.",
  },
  {
    myth: "Ebola preparedness proves the system works.",
    fact: "It proves the hospital and border end works — screening, isolation, laboratory testing and 4,971 health workers trained. It says nothing about the community layer that meets a febrile patient first, and the Wajir suspected case showed how little county-level capacity is publicly verifiable.",
  },
  {
    myth: "Health is devolved, so this is a county problem.",
    fact: "Devolution assigns delivery, not the whole mandate. Article 43(2) of the Constitution and the Health Act 2017 make emergency treatment a right, and the audit's recommendations split cleanly: the national government on dispatch, the toll-free number and the scheme of service; counties on budgets, community units and facility readiness.",
  },
];

export const TALKING_POINTS = [
  "Only 8% of Kenyans surveyed by the Auditor-General had been sensitised on how to handle an emergency, 26% knew which number to call, and 21% had any basic first aid skills.",
  "Ambulance response times in the counties with dispatch records ran 20 to 60 minutes against a national standard of 15 to 20. Only Machakos met the standard.",
  "92 of 269 inspected ambulances — 34% — were non-functional, and many lacked equipment, fuel, maintenance and staff.",
  "Only 3 of 33 sampled Level 4 hospitals had an accident and emergency department. Nurse-to-patient ratios reached 1:122 against a WHO benchmark of 1:4.",
  "90% of sampled Level 4 hospitals had no piped oxygen and 84% had no ventilator. 90% of Level 4 and 33% of Level 5 hospitals had no ICU or HDU.",
  "No sampled county and no sampled health facility had a ring-fenced emergency medical care budget. Emergency care competes with everything else, every year.",
  "The Ministry told the Auditor-General it needs KSh 11.725 billion to close these gaps — about 6.6% of the KSh 177.2 billion health budget for FY2026/27.",
  "Kenya has trained more than 1,000 emergency medical technicians since 1999 and still has no approved scheme of service to employ them in the public system.",
  "The Kenya Emergency Medical Care Policy 2020–2030 promised a single toll-free emergency number and dispatch centres in every county. Five years on, the Auditor-General found neither.",
  "Ebola preparedness has trained 4,971 health workers and screened 652,584 travellers at 26 points of entry. We could find no published figure for community first responders trained in the same period.",
  "The 922 National Ambulance Dispatch Centre launched in August 2026 with more than 200 accredited ambulances for 47 counties — roughly one ambulance per 250,000 people against a WHO benchmark of one per 70,000 to 100,000.",
  "None of this is new information. It is in the Auditor-General's report, tabled in Parliament in November 2025. The question is not what we know. It is what gets funded.",
];

export type SocialBlock = { platform: string; format: string; body: string };

export const SOCIAL_KIT: SocialBlock[] = [
  {
    platform: "X / Twitter",
    format: "Thread · 7 posts",
    body: `1/ Kenya has trained emergency medical technicians since 1999. It has a policy running to 2030. It still cannot tell a citizen which number to call.

The Auditor-General's audit, tabled November 2025, explains why. A thread.

2/ The first link is the weakest. In the audit's citizen survey:
· 8% had been sensitised on handling an emergency
· 26% knew which number to call
· 21% had basic first aid skills

The golden hour is lost at the scene, before any clinician arrives.

3/ Transport: response times ran 20–60 minutes against a national standard of 15–20. Only Machakos met it. 92 of 269 inspected ambulances — 34% — were non-functional. Many had no equipment, no fuel, no maintenance, no staff.

4/ Hospitals: only 3 of 33 sampled Level 4 hospitals had an accident and emergency department. Nurse-to-patient ratios reached 1:122 against a WHO benchmark of 1:4. 90% of sampled Level 4 hospitals had no piped oxygen.

5/ Money: no sampled county and no sampled facility had a ring-fenced emergency care budget. The Ministry told the Auditor-General it needs KSh 11.725bn to close the gaps. That is 6.6% of the KSh 177.2bn health budget.

6/ And the workforce exists. 1,000+ EMTs trained since 1999. No approved scheme of service, so almost no public posts. The Auditor-General's own recommendation: fast-track it.

7/ The 922 dispatch centre launched in August 2026 — real progress, and only one part of the system. Dispatch cannot send an ambulance that is not fuelled, equipped or staffed.

Read the audit. Ask your county for the budget line. #EmergencyCareKE`,
  },
  {
    platform: "Instagram",
    format: "Caption · carousel or single post",
    body: `Kenya has ambulances. It does not yet have a system.

The Auditor-General's performance audit on emergency medical care was tabled in November 2025. It found:
· 8% of surveyed citizens sensitised on handling an emergency
· 20–60 minute ambulance response times
· 34% of inspected ambulances non-functional
· No ring-fenced emergency care budget in any sampled county

Emergency care is a right under Article 43(2) of the Constitution. It is also the difference between a crash, a collapse or a complicated delivery being survivable — and not.

We are asking county governments to ring-fence an emergency medical care line. We are asking the Ministry of Health to publish the scheme of service for EMTs and open the posts. We are asking Parliament to report progress against the audit every year.

Swipe for the evidence. Then add your name.

#EmergencyCareKE #PrehospitalCare #KenyaHealth #EMS #Paramedic #GoldenHour #HealthSystems #Kenya`,
  },
  {
    platform: "WhatsApp",
    format: "Broadcast message",
    body: `*Kenya's emergency care problem starts before the hospital.*

The Auditor-General audited emergency medical care and tabled the report in Parliament in November 2025. The findings:

· Only 8% of people surveyed had been taught how to handle an emergency
· Only 26% knew which number to call
· Ambulance response times: 20 to 60 minutes
· 34% of inspected ambulances were not working
· No county had a budget line for emergency care

Kenya has trained more than 1,000 emergency medical technicians since 1999. There is still no scheme of service to employ them.

Emergency medical treatment is your right under Article 43(2) of the Constitution — including pre-hospital care.

Ask your county government one question: *what is in this year's budget for emergency medical care?*

Add your name and share this with your MCA and your county health committee.`,
  },
  {
    platform: "Video",
    format: "45-second vertical script",
    body: `[0:00–0:05 — night highway, no ambulance in sight]
VO: It is 11pm on a highway outside town. There has been a crash.

[0:05–0:12 — the roadside, bystanders]
VO: The first people on the scene are not clinicians. They are whoever happened to be there.

[0:12–0:20 — on screen: 8% · 26% · 21%]
VO: In the Auditor-General's survey, 8% of Kenyans had been sensitised on how to handle an emergency. 26% knew which number to call. 21% had basic first aid skills.

[0:20–0:28 — on screen: 20–60 MINUTES]
VO: Where records existed, ambulances took 20 to 60 minutes. The national standard is 15 to 20.

[0:28–0:36 — on screen: 34% · 0 of 16]
VO: A third of the inspected ambulances were not working. Not one sampled county had a ring-fenced budget for emergency care.

[0:36–0:45 — full frame: text card]
VO: The report exists. The clinicians exist. The policy exists. What is missing is the budget line.
On screen: ASK YOUR COUNTY. THEN ADD YOUR NAME.`,
  },
  {
    platform: "Press",
    format: "Opening paragraph + questions to ask",
    body: `FOR IMMEDIATE RELEASE

Kenya's prehospital emergency care system remains unbuilt more than a year after the Auditor-General's performance audit exposed systemic gaps, a review of the audit and subsequent government statements shows. The audit, tabled in Parliament in November 2025, found that only 8% of surveyed citizens had been sensitised on how to handle an emergency, ambulance response times of 20 to 60 minutes against a 15–20 minute standard, 34% of inspected ambulances non-functional, and no ring-fenced emergency medical care budget in any sampled county or facility. The Ministry of Health told the Auditor-General it requires KSh 11.725 billion to close the gaps — about 6.6% of the KSh 177.2 billion health allocation for FY2026/27.

Questions for the Ministry of Health, the National Treasury and county governments:
1. What is the current status of the KSh 11.725 billion the Ministry requested to close the gaps identified in the audit?
2. Has the scheme of service for emergency medical technicians and emergency vehicle operators been finalised and approved? If not, by when — and how many of the more than 1,000 trained EMTs in Kenya will it employ?
3. How many counties have ring-fenced an emergency medical care budget line in the current financial year?
4. What proportion of the 269 ambulances inspected by the Auditor-General are now functional?
5. How many community first responders have been trained in each county, and what is the budget for community-level emergency response?`,
  },
];

export type Demand = { who: string; asks: string[]; tone: "green" | "gold" | "red" | "ink" };

export const DEMANDS: Demand[] = [
  {
    who: "County governments",
    tone: "green",
    asks: [
      "Ring-fence an emergency medical care line in the next budget, and report on it.",
      "Fund community first response training and name the community health promoters doing it.",
      "Fuel, maintain, equip and staff the ambulances the county already owns — and publish the numbers.",
      "Publish ambulance response times every quarter.",
    ],
  },
  {
    who: "Ministry of Health",
    tone: "green",
    asks: [
      "Publish the scheme of service for emergency medical technicians and emergency vehicle operators, and open the posts.",
      "Deliver the single short-code toll-free emergency number promised in the 2020–2030 policy.",
      "Publish the ambulance and emergency department standards, and the accreditation results.",
      "Publish the status of the KSh 11.725 billion request to the Treasury.",
    ],
  },
  {
    who: "Parliament & Treasury",
    tone: "gold",
    asks: [
      "Fund the audited gaps, and require the Ministry to report against all six recommendations annually.",
      "Treat the performance audit as a public accounts matter with a deadline, not a document.",
      "Condition emergency allocations on published response times and county ring-fencing.",
    ],
  },
  {
    who: "Media",
    tone: "red",
    asks: [
      "Ask for the response time, not the ribbon-cutting.",
      "Ask how many community first responders were trained, not only how many health workers.",
      "Ask what happened to the KSh 11.725 billion.",
      "Ask each county what its emergency medical care line item is.",
    ],
  },
];

export type Source = { label: string; detail: string; href: string };

export const SOURCES: Source[] = [
  {
    label: "Office of the Auditor-General, Kenya",
    detail:
      "Performance Audit Report on Provision of Emergency Medical Care Services in Kenya, November 2025 (tabled 27 November 2025). Primary source for every audit figure on this page, including Appendix 13 (Ministry of Health comments) and the KSh 11.725 billion request.",
    href: "https://www.oagkenya.go.ke/wp-content/uploads/2026/03/PROVISION-OF-EMERGENCY-MEDICAL-CARE-SERVICES-IN-KENYA.pdf",
  },
  {
    label: "Ministry of Health, Kenya",
    detail:
      "Kenya Emergency Medical Care Policy 2020–2030 — the source of the toll-free number, dispatch centre, scheme of service and licensing commitments.",
    href: "https://www.emergencymedicinekenya.org/wp-content/uploads/2020/11/KENYA-EMERGENCY-MEDICAL-CARE-POLICY.pdf",
  },
  {
    label: "Ministry of Health, Kenya",
    detail:
      "Kenya Emergency Medical Care Strategy 2020–2025, Part 2.3.6 — the 15–20 minute response time standard cited in the audit.",
    href: "https://www.emergencymedicinekenya.org/wp-content/uploads/2020/11/KENYA-EMERGENCY-MEDICAL-EMERGNCY-STRATEGY_2020-2025.pdf",
  },
  {
    label: "Ministry of Health, Kenya",
    detail:
      "President Ruto Launches National Ambulance Dispatch Centre to Strengthen Emergency Care Nationwide, 5 August 2026 — 47 counties, 200+ accredited ambulances, 40 staff, seven advanced ambulances.",
    href: "https://www.health.go.ke/president-ruto-launches-national-ambulance-dispatch-centre-strengthen-emergency-care-nationwide",
  },
  {
    label: "Al Jazeera",
    detail:
      "Kenya's Ebola cases test preparedness beyond Nairobi, 15 October 2026 — county-level preparedness gaps, Wajir suspected case, national preparedness score of 66% (May) rising to 82% (July).",
    href: "https://www.aljazeera.com/news/2026/10/15/kenyas-ebola-cases-test-preparedness-beyond-nairobi",
  },
  {
    label: "World Health Organization",
    detail:
      "Ebola disease caused by Bundibugyo virus — Disease Outbreak News, October 2026; Kenya's imported cases and the regional outbreak.",
    href: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON619",
  },
  {
    label: "Kenya Council of Emergency Medical Technicians",
    detail:
      "Background information — the history of EMT training in Kenya from 1999, the 1,000+ trained figure, accredited training centres and the effect of the absence of legislation.",
    href: "https://kcemt.co.ke/about-us/background-information/",
  },
  {
    label: "World Health Assembly",
    detail:
      "Resolution WHA72.16, Emergency care systems for universal health coverage — the global mandate for integrating emergency and prehospital care into health systems.",
    href: "https://www.who.int/publications/i/item/who-emergency-care-system-framework",
  },
  {
    label: "National Transport and Safety Authority / Citizen Digital",
    detail:
      "4,458 road deaths recorded in 2025, up from 4,311 in 2024 — the demand side of the prehospital system.",
    href: "https://citizen.digital/article/ntsa-reports-spike-in-road-fatalities-as-2025-death-toll-hits-4458-n374206",
  },
];

export const METHOD_NOTE = {
  head: "How to read these numbers",
  body: [
    "Figures attributed to the Auditor-General come from the performance audit of November 2025. Where the audit worked from a sample — 16 counties, 114 health facilities and 269 ambulances — we say sampled. They are the Auditor-General's findings, not national totals.",
    "The published audit PDF is an image-only document with no text layer. We transcribed it ourselves to quote it, and the figures are reproduced as published.",
    "The KSh 11.725 billion figure and the statement that the Emergency, Chronic and Critical Illness Fund is established but not fully operational appear in the Ministry of Health's own written comments to the audit, reproduced in Appendix 13 of the report.",
    "The 'why it persists' section separates documented facts from our inference about incentives, and says so on the page. We document incentives, not intentions.",
    "Where we state that something is not published — for example, a figure for community first responders trained during the 2026 Ebola response — that is a statement about what we could find in public sources, not proof that no such figure exists.",
  ],
} as const;

export const KENYA_COUNTIES = [
  "Baringo",
  "Bomet",
  "Bungoma",
  "Busia",
  "Elgeyo-Marakwet",
  "Embu",
  "Garissa",
  "Homa Bay",
  "Isiolo",
  "Kajiado",
  "Kakamega",
  "Kericho",
  "Kiambu",
  "Kilifi",
  "Kirinyaga",
  "Kisii",
  "Kisumu",
  "Kitui",
  "Kwale",
  "Laikipia",
  "Lamu",
  "Machakos",
  "Makueni",
  "Mandera",
  "Marsabit",
  "Meru",
  "Migori",
  "Mombasa",
  "Murang'a",
  "Nairobi",
  "Nakuru",
  "Nandi",
  "Narok",
  "Nyamira",
  "Nyandarua",
  "Nyeri",
  "Samburu",
  "Siaya",
  "Taita-Taveta",
  "Tana River",
  "Tharaka-Nithi",
  "Trans Nzoia",
  "Turkana",
  "Uasin Gishu",
  "Vihiga",
  "Wajir",
  "West Pokot",
  "Outside Kenya",
] as const;

export const NAV_LINKS = [
  { href: "#case", label: "The case" },
  { href: "#evidence", label: "Evidence" },
  { href: "#timeline", label: "Timeline" },
  { href: "#money", label: "The money" },
  { href: "#incentives", label: "Why it persists" },
  { href: "#kit", label: "Campaign kit" },
  { href: "#add", label: "Add your name" },
] as const;
