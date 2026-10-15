export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  slug: string;
  category: string;
  summary: string;
  scope: string[];
  forums: string[];
  detailedContent: string;
}

export interface Review {
  id: string;
  reviewer: string;
  relation: string;
  date?: string;
  text: string;
  source: 'Google Review' | 'Verified Client Feedback';
  sourceUrl?: string;
}

export const FIRM_DETAILS = {
  name: 'Path Finder Law Associates',
  founder: 'Advocate & Solicitor Mr. Santosh Shaw',
  established: 2013,
  address: {
    line1: '111, 1st Floor, Jyoti Shikhar',
    line2: 'District Centre, Janakpuri',
    city: 'New Delhi',
    pincode: '110058',
    country: 'India',
    full: '111, 1st Floor, Jyoti Shikhar, District Centre, Janakpuri, New Delhi – 110058',
  },
  phones: [
    { label: 'Mobile / WhatsApp', number: '+91 9868099363', href: 'tel:+919868099363' },
    { label: 'Office Landline', number: '+91 11 4287 8448', href: 'tel:+911142878448' },
  ],
  emails: [
    { label: 'Official Chambers', address: 'legal@path-finder.in', href: 'mailto:legal@path-finder.in' },
    { label: 'Alternate Enquiries', address: 'Pathfinderlawassociates@gmail.com', href: 'mailto:Pathfinderlawassociates@gmail.com' },
  ],
  workingHours: 'Monday – Saturday: 10:00 AM – 8:00 PM (IST) · Consultations by Prior Appointment',
  googleMapsLink:
    'https://www.google.com/maps/search/?api=1&query=Path+Finder+Law+Associates+111+Jyoti+Shikhar+District+Centre+Janakpuri+New+Delhi+110058',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Jyoti+Shikhar+Janakpuri+District+Centre+New+Delhi+110058&t=&z=16&ie=UTF8&iwloc=&output=embed',
  metroAccess: 'Adjacent to Janakpuri West Metro Station (Blue & Magenta Line Interchange)',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'nclt',
    number: '01',
    title: 'Corporate Litigation — NCLT',
    shortTitle: 'Corporate & NCLT',
    slug: 'corporate-litigation-nclt',
    category: 'Corporate & Insolvency Law',
    summary:
      'Strategic representation before the National Company Law Tribunal (NCLT) and Appellate Tribunal (NCLAT) for IBC proceedings, restructuring, and company disputes.',
    scope: [
      'Corporate Insolvency Resolution Process (CIRP) under IBC 2016',
      'Operational and financial creditor claim petitions (Sections 7, 9 & 10)',
      'Oppression and mismanagement petitions under the Companies Act 2013',
      'Mergers, amalgamations, demergers, and capital reduction approvals',
      'Appeals and interlocutory applications before the NCLAT',
    ],
    forums: ['NCLT Principal Bench (New Delhi)', 'NCLT New Delhi Court Benches', 'NCLAT', 'High Court of Delhi'],
    detailedContent:
      'Path Finder Law Associates provides specialized courtroom counsel in corporate dispute resolution. From representing creditors and corporate debtors under the Insolvency and Bankruptcy Code (IBC) to navigating high-stakes shareholder conflicts and oppression-mismanagement suits, our advocates combine commercial understanding with strict statutory rigor before the NCLT and NCLAT.',
  },
  {
    id: 'civil',
    number: '02',
    title: 'Civil Litigation',
    shortTitle: 'Civil Litigation',
    slug: 'civil-litigation',
    category: 'Civil & Commercial Advocacy',
    summary:
      'Advocacy in contractual breaches, injunctions, declaratory suits, specific performance of contracts, and commercial suits.',
    scope: [
      'Original civil suits for damages, declarations, and permanent injunctions',
      'Specific performance suits for agreements to sell and commercial covenants',
      'Execution petitions and enforcement of domestic decrees',
      'Regular First Appeals (RFA) and Civil Revision petitions',
      'Arbitration dispute referrals and Section 34 enforcement actions',
    ],
    forums: ['Delhi High Court (Original & Appellate Jurisdiction)', 'District Courts of Delhi NCR', 'Commercial Courts'],
    detailedContent:
      'Our civil litigation practice encompasses comprehensive advisory and courtroom representation in complex contractual, commercial, and property-related civil suits. We guide clients through pleadings, framing of issues, examination of witnesses, interlocutory injunctions, and appellate challenges.',
  },
  {
    id: 'property',
    number: '03',
    title: 'Property Litigation',
    shortTitle: 'Property Litigation',
    slug: 'property-litigation',
    category: 'Real Estate & Title Law',
    summary:
      'Dispute resolution regarding property title, ancestral partition, possession recovery, NRI real estate defense, and cancellation of fraudulent instruments.',
    scope: [
      'Partition suits for ancestral and jointly-held ancestral properties',
      'Declaration of title, ownership, and cancellation of forged sale deeds',
      'Suit for vacant possession and eviction under rent control laws',
      'NRI property dispute management and power of attorney challenges',
      'RERA and consumer redressal against delay in builder-buyer possession',
    ],
    forums: ['Delhi High Court', 'District Courts across New Delhi', 'Delhi RERA & Appellate Tribunal'],
    detailedContent:
      'Property disputes require meticulous document audit, revenue records verification, and resolute court advocacy. We represent Indian and Non-Resident Indian (NRI) clients in safeguarding immovable assets, asserting inheritance rights, and undoing unauthorized encroachments or conveyances.',
  },
  {
    id: 'criminal',
    number: '04',
    title: 'Criminal Litigation',
    shortTitle: 'Criminal Defense',
    slug: 'criminal-litigation',
    category: 'Criminal Jurisprudence',
    summary:
      'Vigorous defense in criminal proceedings, anticipatory and regular bail, quashing petitions under Section 482 CrPC, and economic offenses.',
    scope: [
      'Anticipatory bail (Section 438 CrPC) and regular bail (Section 439 CrPC)',
      'Quashing of FIRs and criminal proceedings under Section 482 CrPC',
      'Defense in economic offenses, cheating (Section 420), and forgery matters',
      'Criminal revisions and statutory appeals before the Sessions Court and High Court',
      'Trial defense, witness cross-examination, and discharge applications',
    ],
    forums: ['Metropolitan Magistrate Courts', 'Sessions Courts Delhi NCR', 'Delhi High Court', 'Supreme Court of India'],
    detailedContent:
      'Our criminal litigation team provides prompt, tactical representation to protect liberty and constitutional safeguards. We act swiftly in urgent bail hearings, discharge petitions, cross-examinations, and statutory appeals across trial and constitutional courts.',
  },
  {
    id: 'money-recovery',
    number: '05',
    title: 'Money Recovery Litigation',
    shortTitle: 'Money Recovery',
    slug: 'money-recovery-litigation',
    category: 'Commercial Recovery',
    summary:
      'Summary suits under Order 37 CPC, commercial debt claims, execution of decrees, and Debt Recovery Tribunal (DRT) proceedings.',
    scope: [
      'Fast-track Summary Suits under Order XXXVII of the Civil Procedure Code',
      'Proceedings under SARFAESI Act and Debt Recovery Tribunal (DRT)',
      'Enforcement and attachment of judgment-debtor assets',
      'Insolvency and demand notices under statutory timelines',
      'Interstate and cross-border commercial debt adjudication',
    ],
    forums: ['Commercial Courts of Delhi', 'DRT-I, DRT-II & DRT-III New Delhi', 'DRAT', 'Delhi High Court'],
    detailedContent:
      'Recovering outstanding capital requires assertive procedural strategy. We advise individuals, firms, and lending entities in deploying statutory recovery channels, summary court adjudications, and tribunal interventions to recover legitimate receivables efficiently.',
  },
  {
    id: 'matrimonial',
    number: '06',
    title: 'Matrimonial and Family Litigation',
    shortTitle: 'Family Law',
    slug: 'matrimonial-family-litigation',
    category: 'Matrimonial & Custody',
    summary:
      'Empathetic yet disciplined counsel in divorce, child custody, visitation rights, domestic violence defense, maintenance, and family settlements.',
    scope: [
      'Mutual consent divorce petitions (First & Second Motion)',
      'Contested divorce on grounds of cruelty, desertion, or adultery',
      'Maintenance and interim alimony claims (Section 125 CrPC & Section 24 HMA)',
      'Child custody, guardianship, and visitation arrangements',
      'Proceedings under Protection of Women from Domestic Violence Act (PWDVA)',
    ],
    forums: ['Principal Family Courts Delhi NCR', 'Delhi High Court (Matrimonial Appellate Bench)'],
    detailedContent:
      'Family disputes demand high emotional sensitivity combined with unwavering procedural expertise. We assist families in achieving equitable custody arrangements, fair maintenance allocations, and dignified resolutions through structured court proceedings or pre-litigation mediation.',
  },
  {
    id: 'ni-act',
    number: '07',
    title: 'Negotiable Instrument Cases — NI Act',
    shortTitle: 'NI Act Cheque Dishonour',
    slug: 'negotiable-instruments-ni-act',
    category: 'Banking & Financial Instruments',
    summary:
      'Prosecution and defense in cheque dishonour complaints under Section 138 of the Negotiable Instruments Act, 1881.',
    scope: [
      'Drafting and serving mandatory Section 138 statutory demand notices',
      'Filing complaint petitions within the 30-day statutory limitation period',
      'Defense against wrongful dishonour allegations and signature disputes',
      'Compounding of offenses and negotiated settlements during trial',
      'Criminal revisions and appeals against convictions or dismissals',
    ],
    forums: ['Special NI Act Courts (Metropolitan Magistrates)', 'Sessions Courts Delhi NCR'],
    detailedContent:
      'Section 138 cases require strict adherence to procedural timelines, statutory demand requirements, and evidence presentation. Path Finder Law Associates represents both complainants seeking recovery and respondents defending against unjustified claims.',
  },
  {
    id: 'consumer',
    number: '08',
    title: 'Consumer Law — NCDRC',
    shortTitle: 'Consumer Protection',
    slug: 'consumer-law-ncdrc',
    category: 'Consumer Jurisprudence',
    summary:
      'Representation before District Commissions, Delhi State Commission (SCDRC), and the National Commission (NCDRC) for deficiency of services and product liability.',
    scope: [
      'Consumer complaints under the Consumer Protection Act, 2019',
      'Claims against real estate developers for delayed project possession',
      'Deficiency actions against insurance providers, airlines, and banks',
      'Medical negligence and defective goods claims',
      'Appeals and revision petitions before the NCDRC',
    ],
    forums: ['District Consumer Commissions Delhi NCR', 'Delhi State Commission (SCDRC)', 'NCDRC New Delhi'],
    detailedContent:
      'Under the modern Consumer Protection Act, 2019, consumers and commercial entities have potent avenues to remedy deficiency in service and unfair trade practices. We represent clients at District, State, and National Commission tiers with rigorous evidentiary backing.',
  },
];

export const AUTHENTIC_REVIEWS: Review[] = [
  {
    id: 'review-somesh',
    reviewer: 'Somesh Nishand',
    relation: 'Client',
    source: 'Google Review',
    text:
      'I highly recommend Path Finder Law Associates and specifically Mr. Santosh Kumar Shaw for their exceptional legal services. His extensive knowledge and professionalism were evident from our first meeting. He took the time to understand my situation and provided clear, empathetic guidance throughout the entire process. What impressed me the most was his transparency and efficiency. He kept me informed at every step, and his strategic approach led to an optimal outcome. The dedication and support from his team were unmatched.',
  },
  {
    id: 'review-corporate',
    reviewer: 'Verified Client',
    relation: 'Commercial & Dispute Resolution',
    source: 'Verified Client Feedback',
    text:
      'The team is extremely talented and master of their jobs. They handled our matter with clear strategy and resolved a complex dispute within six months.',
  },
  {
    id: 'review-guidance',
    reviewer: 'Verified Client',
    relation: 'Civil & Matrimonial Matter',
    source: 'Verified Client Feedback',
    text:
      'Professional, responsive, and deeply knowledgeable. Adv. Santosh Shaw guided us with immense patience and legal clarity throughout the proceedings.',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    number: '01',
    title: 'Courtroom Rigor & Meticulous Preparation',
    desc: 'Every matter is built on thorough statutory analysis, exhaustive case law citation, and structured pleadings before original and appellate benches.',
  },
  {
    number: '02',
    title: 'Direct Advocate-in-Charge Communication',
    desc: 'Clients receive unmediated counsel from experienced advocates. We ensure complete transparency on case merits, procedural timelines, and realistic expectations.',
  },
  {
    number: '03',
    title: 'Multi-Forum Trial & Appellate Reach',
    desc: 'With chambers located in Janakpuri, New Delhi, we regularly represent clients across District Courts, Delhi High Court, NCLT, NCDRC, DRT, and specialized tribunals.',
  },
  {
    number: '04',
    title: 'Ethical & Transparent Standards',
    desc: 'Operating strictly under Bar Council of India guidelines since 2013, our practice prioritizes client confidence, clear fee structures, and disciplined legal craftsmanship.',
  },
];

export const NEWS_UPDATES = [
  {
    id: 'news-1',
    date: 'Recent Practice Update',
    category: 'Insolvency & Corporate Law',
    title: 'Key Developments in Corporate Insolvency Resolution under the IBC',
    excerpt: 'An overview of recent judicial precedents shaping Section 7 and 9 admission criteria before the NCLT New Delhi benches.',
  },
  {
    id: 'news-2',
    date: 'Practice Note',
    category: 'Real Estate & Property',
    title: 'Safeguarding Property Rights and Partition Claims in Delhi NCR',
    excerpt: 'Essential documentation, revenue records verification, and procedural stages in ancestral property partition suits.',
  },
  {
    id: 'news-3',
    date: 'Legal Advisory',
    category: 'Commercial Law',
    title: 'Statutory Timelines in Section 138 NI Act Cheque Dishonour Proceedings',
    excerpt: 'A review of mandatory 30-day notice requirements and recent High Court observations on evidentiary burdens.',
  },
];

export const BCI_DISCLAIMER =
  'As per the rules of the Bar Council of India, law firms and advocates are not permitted to solicit work or advertise in any manner. By clicking through or browsing this website (www.path-finder.in), the visitor acknowledges that the information provided is solely for informational purposes and does not constitute legal advice, solicitation, or advertisement. Path Finder Law Associates is not liable for any action taken relying on this material. All disputes are subject to the jurisdiction of courts in New Delhi.';
