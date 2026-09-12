export const categories = [
  {
    id: 'ipr',
    title: 'Intellectual Property Rights (IPR)',
    description: 'Protect your brand, inventions, creative works, and designs with our expert IP filing services.',
    icon: 'Shield'
  },
  {
    id: 'company-formation',
    title: 'Company Formation',
    description: 'Incorporate your business legally with the right corporate structure for scaling and funding.',
    icon: 'Briefcase'
  },
  {
    id: 'licenses',
    title: 'Company Licenses & Compliance',
    description: 'Ensure absolute compliance and smooth operations with mandatory business licenses.',
    icon: 'FileCheck'
  }
];

export const services = {
  // --- IPR SERVICES ---
  'trademark': {
    id: 'trademark',
    categoryId: 'ipr',
    title: 'Trademarks Registration',
    shortDescription: 'Secure exclusive national rights over your brand name, logo or slogan under the Trade Marks Act, 1999.',
    fullDescription: 'A trademark registration gives you a nationwide monopoly over your brand identity, preventing competitors from using similar names, logos, taglines, or packaging that could confuse customers. At Shivoham & Associates, we manage the complete lifecycle from trademark search, class selection, filing, to handling trademark objections.',
    whatItProtects: 'A word, logo, device, slogan, taglines, shape, colour combination or sound that distinguishes your goods or services from others. A trademark does not protect your product design, your invention or your written content.',
    benefits: [
      'Exclusive right to use the mark across territorial boundaries of India',
      'Statutory basis to sue for infringement, rather than relying on a passing-off claim',
      'Right to use the ® symbol; the ™ symbol is available from the date of filing',
      'A transferable business asset that can be sold, licensed, franchised or pledged',
      'Protection for 10 years, renewable indefinitely'
    ],
    documents: [
      'Brand Name/ Logo',
      'Applicants Name',
      'Contact details - address, mobile no. & email',
      'MSME Udyam/ DPIIT (Start up) certificate, if claiming the reduced fee',
      'Proof of Brand use along with 1st Sales Bill',
      'GST Certificate'
    ],
    process: [
      { step: 1, title: 'Name Search', desc: 'To understand feasibility of the brand before proceeding for Applications.' },
      { step: 2, title: 'Application', desc: 'Approved and executed application is submitted with the Trademarks Offices; ™ usable post this point.' },
      { step: 3, title: 'Execution', desc: 'Application undergoes various stages of Executions like Formality Examination, Substantive Examination, Hearings, Oppositions etc.' },
      { step: 4, title: 'Registration', desc: 'Applicants are honored with Certificate, ® usable post this point.' }
    ],
    feesAtAGlance: [
      {
        particular: 'Government fee (e-filing)',
        detail: 'For Individuals, Proprietors, MSME & DPIIT-recognised Startup Applicants',
        fee: '₹ 4,500 per class'
      },
      {
        particular: 'Government fee (e-filing)',
        detail: 'For all Other Applicants “except above”',
        fee: '₹ 9,000 per class'
      },
      {
        particular: '™ symbol available',
        detail: 'Post submission & allotment of Trademarks Application No.',
        fee: null
      },
      {
        particular: '® symbol available',
        detail: 'On registration',
        fee: null
      },
      {
        particular: 'Typical timeline',
        detail: '15–18 months without Opposition*',
        fee: null
      },
      {
        particular: 'Validity',
        detail: '10 years from the Date of Application',
        fee: null
      },
      {
        particular: 'Renewal',
        detail: 'Every 10 years',
        fee: null
      }
    ],
    faqs: [
      {
        q: 'Is registering my company name the same as registering a trademark?',
        a: 'No. An MCA name approval only confirms that no other company is registered under that name. It gives you no right to stop another business from using it as a brand. Trademark registration is a separate filing under a different law, and it is the one that creates enforceable rights.'
      },
      {
        q: 'What is the difference between ™ and ®?',
        a: '™ can be used from the moment you file, and signals a claim to the mark. ® can only be used after registration is granted. Using ® before registration is a punishable offence under Section 107 of the Trade Marks Act.'
      },
      {
        q: 'Which class do I file in, and can one application cover several?',
        a: 'Classes are decided by what you actually sell, not by your industry label. A clothing brand files in Class 25; a store retailing that clothing falls in Class 35; a café serving food sits in Class 43. A single Form TM-A can cover multiple classes, with the fee charged per class. Multi-class filing keeps everything under one number, but an objection in any one class can hold up the whole application; separate single-class filings cost the same and proceed independently. Note: the Nice Classification 13th edition took effect on 1 January 2026 and changed several headings.'
      },
      {
        q: 'How do I check whether a brand name is already taken?',
        a: 'A public search on the IP India database is the starting point. It will not catch phonetically similar marks, marks in adjacent classes, or unregistered marks with established prior use — all of which can defeat your application. A search across all 45 classes before filing is the single most cost-effective step, because filing fees are non-refundable.'
      },
      {
        q: 'Can an individual register a trademark, or do I need a company?',
        a: 'An individual or a sole proprietor can file. No company is required. Individuals also qualify for the lower government fee.'
      },
      {
        q: 'I received a trademark objection. What happens now?',
        a: 'An objection is not a rejection. Section 9 objections say the mark is descriptive or lacks distinctiveness; Section 11 objections say it conflicts with an existing mark. Either is answered by a written reply within 30 days, supported by evidence of distinctiveness or use. A hearing may follow. There is no government fee for filing the reply or attending the hearing.'
      },
      {
        q: 'Someone opposed my application. What does that mean?',
        a: 'A third party filed a formal objection within four months of publication. It moves the matter to a contested proceeding with pleadings, evidence and a hearing. Timelines are strict and a missed deadline can result in abandonment.'
      },
      {
        q: 'Do I need to register separately in each state?',
        a: 'No. One registration covers all of India.'
      },
      {
        q: 'Should I file the name and the logo together or separately?',
        a: 'Filing the word mark separately gives you rights over the name in any font or styling, which is broader. A combined device mark protects only that specific presentation. Where budget allows, filing both is the stronger position.'
      },
      {
        q: 'Someone is already using my brand name. What can I do?',
        a: 'It depends on who used it first and who filed first. If you have earlier documented use, you may be able to oppose their application or seek rectification. Gather dated evidence of your use before taking any step.'
      },
      {
        q: 'Is my domain name automatically a trademark?',
        a: 'No. Registering a domain gives you the right to that URL, nothing more. Domain registrars themselves require a trademark registration before acting on a name-based complaint.'
      },
      {
        q: 'How long is registration valid, and what happens if I miss renewal?',
        a: 'Ten years from the application date. Renewal is filed on Form TM-R. A mark can be restored within a limited window after expiry on payment of a surcharge; beyond that, it is removed from the register.'
      },
      {
        q: 'Can I sell or license a trademark?',
        a: 'Yes. A registered trademark can be assigned, licensed or franchised. The transaction should be recorded with the Registry.'
      }
    ]
  },
  'copyright': {
    id: 'copyright',
    categoryId: 'ipr',
    title: 'Copyright Registration',
    shortDescription: 'Register your original literary, artistic, musical, cinematographic or software work under the Copyright Act, 1957.',
    fullDescription: 'Copyright registration protects original literary, dramatic, musical, artistic works, and computer software. It prevents unauthorized duplication, distribution, or adaptation of your proprietary files and codebases. This is highly recommended for tech companies, authors, designers, and creative agencies.',
    whatItProtects: 'Original expression — books, articles, website copy, artwork, photographs, music, lyrics, films, sound recordings, software source code, food recipes and many others. Copyright protects the expression of an idea, never the idea itself.',
    benefits: [
      'A public record of authorship and date, admissible as evidence in court',
      'Prima facie proof of ownership, which shifts the practical burden in an infringement dispute',
      'Protection in over 180 countries under the Berne Convention, without separate filing',
      'The right to license, assign or monetise the work through royalties',
      'A recognised intangible asset for due diligence, funding rounds and acquisitions'
    ],
    documents: [
      'Title & Language of Work',
      'Applicants Name',
      'Contact details - address, mobile no. & email',
      'Identity and address proof of the author and of the applicant',
      'NOC from the author',
      'NOC from the publisher or employer, where applicable',
      'For a logo or artwork used on goods or services: a search certificate from the Trade Marks Registry'
    ],
    process: [
      { step: 1, title: 'Application', desc: 'Executed application is submitted with the Copyrights Offices.' },
      { step: 2, title: 'Execution', desc: 'Application undergoes Examination, scrutiny for discrepancies has to be replied accordingly.' },
      { step: 3, title: 'Registration', desc: 'Entry made in the Register of Copyrights and the certificate issued, © usable post this point.' }
    ],
    feesAtAGlance: [
      {
        particular: 'Government fee',
        detail: 'Literary, dramatic, musical or artistic work',
        fee: '₹ 500 per work'
      },
      {
        particular: 'Government fee',
        detail: 'Software (filed as a literary work)',
        fee: '₹ 500'
      },
      {
        particular: 'Government fee',
        detail: 'Artistic work used on goods or services, such as a logo or label (plus Trade Marks Registry search certificate)',
        fee: '₹ 2,000 per work'
      },
      {
        particular: 'Government fee',
        detail: 'Sound recording',
        fee: '₹ 2,000'
      },
      {
        particular: 'Government fee',
        detail: 'Cinematograph film',
        fee: '₹ 5,000'
      },
      {
        particular: 'Applicant concessions',
        detail: 'None. The fee depends on the type of work, not the size of the applicant',
        fee: null
      },
      {
        particular: 'Typical timeline',
        detail: '6–12 months*',
        fee: null
      },
      {
        particular: 'Validity',
        detail: "Literary, dramatic, musical and artistic works: author's life + 60 years",
        fee: null
      },
      {
        particular: 'Renewal',
        detail: 'Not required',
        fee: null
      }
    ],
    faqs: [
      {
        q: 'Copyright exists automatically. Why register at all?',
        a: 'Copyright arises the moment a work is created, but that is a claim you have to prove. In a dispute, an unregistered author must establish authorship and date from scratch. A registration certificate is prima facie evidence which converts an argument into a document.'
      },
      {
        q: 'Should I copyright my logo or trademark it?',
        a: 'Trademark it. A trademark protects the logo as a brand identifier, which is what you actually need to stop a competitor from using it. Copyright protects the artwork as a creative work and is useful against exact reproduction. Filing both is common; if you file only one, file the trademark.'
      },
      {
        q: 'Can I copyright an idea, a concept or a business plan?',
        a: 'No. Copyright protects the specific form in which an idea is expressed, not the idea. Two people can write about the same concept and each own copyright in their own text. If the value lies in a technical method, the question is whether it is patentable; if it lies in confidential information, the answer is an NDA.'
      },
      {
        q: 'Can software source code be registered?',
        a: 'Yes, as a literary work. Both source code and object code are filed, usually in PDF. This protects the code as written; it does not protect the underlying functionality or algorithm.'
      },
      {
        q: 'Who owns work I paid a freelancer to create?',
        a: 'Not automatically you. Under Section 17, work created by an employee in the course of employment generally vests in the employer, but work commissioned from an independent contractor stays with the contractor unless copyright is assigned in writing. Every design, code and content contract should carry an express assignment clause under Section 19.'
      },
      {
        q: 'Someone copied my content on Instagram or YouTube. What can I do?',
        a: "Start with the platform's copyright complaint process, which usually resolves it fastest. Preserve dated evidence of your original publication first. A registration certificate makes the complaint considerably harder to contest, and is necessary if the matter escalates to a legal notice or a suit."
      },
      {
        q: 'Do I need to register each article or photograph separately?',
        a: 'Each work is a separate registration, though a compilation or a collection published as one work can often be filed together. For continuously produced content, register the substantial pieces rather than every item.'
      },
      {
        q: 'How long does protection last?',
        a: "For literary, dramatic, musical and artistic works, the author's lifetime plus 60 years. For films, sound recordings, photographs and anonymous or pseudonymous works, 60 years from publication."
      },
      {
        q: 'Is my Indian registration valid abroad?',
        a: 'Copyright is recognised in over 180 Berne Convention countries without separate filing. Your Indian registration serves as evidence of authorship in those jurisdictions.'
      }
    ]
  },
  'patent': {
    id: 'patent',
    categoryId: 'ipr',
    title: 'Patent Filing & Registration',
    shortDescription: 'Protect a new and non-obvious invention for 20 years under the Patents Act, 1970.',
    fullDescription: 'A patent is a statutory right granted by the government for an invention that is new, involves an inventive step, and has industrial application. It gives the patentee the exclusive right to exclude others from making, using, selling, or importing the patented invention for 20 years.',
    whatItProtects: 'A product or process that is **new**, involves an **inventive step**, and is capable of **industrial application**. All three must be satisfied.',
    whatCannotBePatented: 'Section 3 excludes, among others: a computer programme per se, a mathematical or business method or algorithm; a mere discovery of a scientific principle; a new form of a known substance without enhanced efficacy; methods of medical treatment; and plants and animals. Software is patentable only where it produces a technical effect beyond ordinary computer operation.',
    benefits: [
      'A 20-year monopoly on making, using, selling or importing the invention in India',
      'A genuine barrier to entry — competitors cannot lawfully replicate the protected invention',
      'A licensable asset capable of generating royalty income without manufacturing',
      'A material factor in startup valuation and technology due diligence',
      'A 12-month priority window to file internationally, including via the PCT',
      'Startups and small entities pay a substantially reduced government fee and can request expedited examination'
    ],
    documents: [
      'Complete description of the invention, with drawings',
      'Claims defining precisely what is being protected',
      'Abstract',
      'Form 1 (application), Form 2 (specification), Form 3 (foreign filing statement), Form 5 (declaration of inventorship), Form 26 (Power of Attorney)',
      'Form 28, with the Udyam or DPIIT certificate, to claim small entity or startup status',
      'Assignment or proof of right to apply, if the applicant is not the inventor'
    ],
    process: [
      {
        step: 1,
        title: 'Patentability search',
        desc: 'Global prior-art search for novelty and inventive step',
        isRed: true
      },
      {
        step: 2,
        title: 'Drafting',
        desc: 'Provisional or complete specification, with claims'
      },
      {
        step: 3,
        title: 'Filing',
        desc: 'Priority date secured; a provisional filing must be followed by a complete specification within 12 months'
      },
      {
        step: 4,
        title: 'Publication',
        desc: 'Automatic at 18 months from the priority date; early publication can be requested with requisite fees'
      },
      {
        step: 5,
        title: 'Request for examination',
        desc: 'Must be filed within the prescribed period or post 18 months from date of Patents Applications, or the application is treated as withdrawn'
      },
      {
        step: 6,
        title: 'First Examination Report',
        desc: 'Objections answered and the application put in order for grant within the statutory window'
      },
      {
        step: 7,
        title: 'Hearings',
        desc: 'Applicants been heard to get know-how of the Patents before formally allowing grant to the application'
      },
      {
        step: 8,
        title: 'Grant',
        desc: 'Patent granted and published in the Official Journal'
      },
      {
        step: 9,
        title: 'Renewals',
        desc: 'Subsequent yearly Renewals till 20th year'
      },
      {
        step: 10,
        title: 'Compliances',
        desc: 'Post grant of the Patents, subsequent compliances on commercial use/ International use etc. has to be declared along with procedural requirements with the subsequent authorities'
      }
    ],
    feesAtAGlance: [
      {
        particular: 'Government fee (e-filing)',
        detail: 'Natural person or DPIIT-recognised startup',
        fee: '₹ 1,600'
      },
      {
        particular: 'Government fee (e-filing)',
        detail: 'Small entity',
        fee: '₹ 4,000'
      },
      {
        particular: 'Government fee (e-filing)',
        detail: 'Other entities',
        fee: '₹ 8,000'
      },
      {
        particular: 'Examination fee',
        detail: 'Natural person or DPIIT-recognised startup',
        fee: '₹ 4,000'
      },
      {
        particular: 'Examination fee',
        detail: 'Small entity',
        fee: '₹ 10,000'
      },
      {
        particular: 'Examination fee',
        detail: 'Other entities',
        fee: '₹ 20,000'
      },
      {
        particular: 'Typical timeline',
        detail: [
          '3–5 years standard*',
          '1–2 years with expedited examination*'
        ],
        fee: null
      },
      {
        particular: 'Validity',
        detail: '20 years from the filing date',
        fee: null
      },
      {
        particular: 'Renewal',
        detail: 'Annual, from the third year onwards',
        fee: null
      }
    ],
    faqs: [
      {
        q: 'Can I patent an idea?',
        a: 'No. A patent requires a worked-out invention that can be described in enough technical detail for a skilled person to reproduce it. If the concept is not yet developed to that point, a provisional application secures your priority date and gives you 12 months to complete it.'
      },
      {
        q: 'Is software patentable in India?',
        a: 'A computer programme as such is excluded under Section 3(k). Software becomes patentable where it produces a technical effect beyond the normal working of a computer — improving hardware performance, controlling a physical process, solving a technical problem. A pure business method or algorithm, however implemented, is not patentable. Most software is better protected by copyright in the code and by trade secrecy.'
      },
      {
        q: 'What is the difference between a provisional and a complete specification?',
        a: 'A provisional secures the filing date while the invention is still being developed, and costs less. A complete specification, with full claims, must follow within 12 months or the provisional lapses. The 20-year term runs from the provisional filing date.'
      },
      {
        q: 'I already showed my invention publicly. Have I lost the right to patent it?',
        a: 'Usually yes. Prior public disclosure destroys novelty. The Act allows narrow exceptions — display at a government-notified exhibition, a paper read before a learned society, or limited public working — each with a strict 12-month window. Never disclose before filing; use an NDA where disclosure is unavoidable.'
      },
      {
        q: 'Can a business method be patented?',
        a: 'No. Business methods are expressly excluded under Section 3(k), however innovative.'
      },
      {
        q: 'What does a patent cost from filing to grant?',
        a: 'Government fees alone typically run from around ₹15,000 for a startup to significantly more for a large entity, spread across filing, examination, objection responses and renewals. Professional drafting is the larger cost, and it is where value is created — a poorly drafted claim set produces a patent nobody can enforce.'
      },
      {
        q: 'How do I protect the invention in other countries?',
        a: 'An Indian filing gives a 12-month priority window. Within it you can file directly in chosen countries, or file a single PCT application which extends the decision point to roughly 30 months. There is no single "international patent"; every patent is granted country by country.'
      },
      {
        q: 'What is a First Examination Report?',
        a: "The Controller's written objections on novelty, inventive step, patentability and formalities. It is a normal stage, not a refusal. The application must be put in order for grant within the period prescribed from the FER date."
      },
      {
        q: 'Do I have to pay anything after the patent is granted?',
        a: 'Yes. Renewal fees fall due annually from the third year. Missing them causes the patent to lapse, with only a limited restoration window.'
      }
    ]
  },
  'design': {
    id: 'design',
    categoryId: 'ipr',
    title: 'Industrial Design Registration',
    shortDescription: 'Protect the visual appearance of your product under the Designs Act, 2000.',
    fullDescription: 'Design registration protects the aesthetic appearance, shape, pattern, configuration, or ornamentation of an industrial article. It does not protect functional aspects, but guarantees that competitors cannot copy the visual structure of products like bottles, electronic casings, furniture, or apparel.',
    whatItProtects: 'The shape, configuration, pattern, ornamentation or composition of lines and colours applied to an article, judged solely by the eye. The design must be new or original and must not have been published anywhere in the world before filing.',
    whatItDoesNotProtect: 'Function or how the article works; mode of construction; anything dictated solely by technical necessity; trademarks and property marks; and pure artistic works such as paintings or sculptures.',
    benefits: [
      'Exclusive right to apply the registered design to the article for 10 years, further extendable to 5 years*',
      'Protects product appearance where a patent is unavailable because there is no new function',
      'A faster and considerably cheaper route than a patent',
      'Direct grounds to act against look-alike products and counterfeits',
      'A licensable asset, particularly valuable in consumer goods, furniture, packaging and textiles',
      'Can be filed before manufacturing begins'
    ],
    documents: [
      'Title & Language of Work',
      'Applicants Name',
      'Contact details - address, mobile no. & email',
      'Product Representations of the design — clear views from front, back, top, bottom, both sides and perspective (at least four consistent views for a three-dimensional design)',
      'Statement of novelty identifying which visual features are claimed as new',
      'To claim the reduced fee, provide MSME Udyam or DPIIT certificate'
    ],
    process: [
      { step: 1, title: 'Applications', desc: 'Application filed with representations and the statement of novelty.' },
      { step: 2, title: 'Executions', desc: 'Objections on representations, classification or novelty are answered.' },
      { step: 3, title: 'Registration', desc: 'Design registered and published in the Official Journal.' }
    ],
    feesAtAGlance: [
      {
        particular: 'Government fee',
        detail: 'Natural person, startup or small entity',
        fee: '₹ 1,000 per design per class'
      },
      {
        particular: 'Government fee',
        detail: 'Other entities',
        fee: '₹ 4,000 per design per class'
      },
      {
        particular: 'Typical timeline',
        detail: '6–12 months*',
        fee: null
      },
      {
        particular: 'Validity',
        detail: '10 years from the filing date',
        fee: null
      },
      {
        particular: 'Extension',
        detail: 'Maximum 5 further years, applied for before the initial term expires — 15 years maximum',
        fee: null
      },
      {
        particular: 'Classification',
        detail: 'Locarno; a separate application is required for each class',
        fee: null
      }
    ],
    faqs: [
      {
        q: 'Design, patent or copyright — which applies to my product?',
        a: 'If the value is in how the product looks, register the design. If it is in how the product works, consider a patent. If it is a standalone artistic creation rather than something applied to a manufactured article, it is copyright. The same product can attract all three, on different aspects.'
      },
      {
        q: 'Can I register packaging, a bottle shape, or a fabric print?',
        a: 'Yes, provided the appearance is new and has not been published. Packaging shapes, container forms, textile patterns, jewellery, furniture and footwear are all commonly registered.'
      },
      {
        q: 'Does design registration cover how the product functions?',
        a: 'No. Protection is limited to visual appearance. Features dictated purely by function are excluded, and functionality must be protected by a patent.'
      },
      {
        q: 'Can one application cover multiple classes?',
        a: 'No. A separate application is required for each Locarno class.'
      },
      {
        q: 'Do I have to manufacture the product first?',
        a: 'No. A design can be registered before production begins, as long as it is capable of being applied to an article.'
      },
      {
        q: 'I have already sold the product. Can I still register the design?',
        a: 'Prior publication or sale generally destroys novelty and bars registration. File before any public launch, catalogue, trade show or online listing.'
      },
      {
        q: 'What happens after 15 years?',
        a: 'The design enters the public domain. There is no further extension.'
      }
    ]
  },
  'legal-advice': {
    id: 'legal-advice',
    categoryId: 'ipr',
    title: 'Legal Advice & Agreements',
    shortDescription: 'Draft solid legal contracts, NDAs, terms of service, and seek expert legal counsel.',
    fullDescription: 'Comprehensive corporate legal advisory services. We draft, review, and negotiate critical business documents, including Founders Agreements, Non-Disclosure Agreements (NDAs), Service Level Agreements (SLAs), and Vendor Contracts, protecting your interests and ensuring compliance with commercial laws.',
    benefits: [
      'Mitigates litigation risks through airtight contracts',
      'Ensures compliance with commercial, labor, and privacy laws',
      'Clear definition of rights, liabilities, and intellectual property ownership',
      'Professional counsel for resolving partner disputes or customer claims'
    ],
    documents: [
      'Basic details of the transacting parties',
      'Commercial terms, scopes of work, and timelines',
      'Specific objectives and conditions to incorporate'
    ],
    process: [
      { step: 1, title: 'Consultation', desc: 'Understand the business requirement, transaction scope, and potential risk factors.' },
      { step: 2, title: 'First Draft Preparation', desc: 'Drafting the contract highlighting IP clauses, liability limits, termination, and dispute resolution.' },
      { step: 3, title: 'Client Review & Iteration', desc: 'Review the draft with the client and modify based on feedback.' },
      { step: 4, title: 'Finalization', desc: 'Provide the final legal document ready for execution on stamp paper or digital signatures.' }
    ],
    faqs: [
      { q: 'Why is a Founders Agreement crucial?', a: 'It defines equity splits, roles, vesting schedules, and IP assignment among founders, avoiding catastrophic disputes later.' }
    ]
  },

  // --- COMPANY FORMATION SERVICES ---
  'sole-proprietor': {
    id: 'sole-proprietor',
    categoryId: 'company-formation',
    title: 'Sole Proprietorship Registration',
    shortDescription: 'The simplest way to start trading in your own name, with no separate registration under any single statute.',
    heroLine: 'The simplest way to start trading in your own name, with no separate registration under any single statute.',
    fullDescription: 'A Sole Proprietorship is the simplest business structure in India. It is owned, managed, and controlled by a single person. There is no separate legal distinction between the owner and the business, making it ideal for micro-retailers, freelancers, and small local traders.',
    whatItIs: 'A business owned and run by one person, with no legal distinction between the owner and the business. There is no "proprietorship registration certificate" — the business is established through a combination of registrations that prove it exists.',
    bestSuitedFor: 'Freelancers, consultants, local retailers, small traders and anyone testing an idea before committing to a corporate structure.',
    howItIsEstablished: {
      title: 'How a proprietorship is actually established',
      intro: 'There is no single registration. In practice you obtain some combination of:',
      items: [
        'Udyam (MSME) registration — instant and the most commonly accepted proof',
        'Shop Act / Gumasta licence — mandatory in Maharashtra for any commercial establishment, and the document banks usually insist on for a current account',
        'GST registration — if you cross the threshold, sell inter-state, or sell on e-commerce',
        'Professional Tax registration — applicable in Maharashtra',
        'Current bank account — opened in the business name using the above'
      ]
    },
    benefits: [
      'Fastest and cheapest way to start; no incorporation process',
      'Complete control over decisions and profits',
      'Minimal statutory compliance — no ROC filings, no statutory audit',
      'Taxed at individual slab rates, which is often lower than company rates at small scale',
      'Easy to wind up; simply stop filing and surrender registrations'
    ],
    limitations: [
      '**Unlimited personal liability.** Business debts reach your personal assets, including your home',
      '**No separate legal existence.** The business cannot own property or sue in its own name',
      '**No perpetual succession.** The business ends with the proprietor',
      '**Cannot bring in partners or investors without converting.**',
      '**Banks and larger clients often prefer to contract with an incorporated entity.**'
    ],
    documents: [
      'PAN and Aadhaar of the proprietor',
      'Electricity bill of the business premises',
      'NOC from the property owner, or rent agreement, if the premises are rented',
      'Cancelled cheque of the current account',
      'Passport-size photograph'
    ],
    process: [
      { step: 1, title: 'Select Business Name', desc: 'Choose a unique name for your trading operations.' },
      { step: 2, title: 'Apply for Licenses', desc: 'Apply for Udyam registration and Shop Act / Gumasta license to establish business proof.' },
      { step: 3, title: 'GST Registration', desc: 'Apply for GST registration if operating inter-state or crossing threshold limits.' },
      { step: 4, title: 'Open Bank Account', desc: 'Submit business proofs (GST/Gumasta) to open a current account.' }
    ],
    faqs: [
      {
        q: 'Is there a "proprietorship registration certificate"?',
        a: 'No. No single authority issues one. A proprietorship is proved through Udyam registration, a Shop Act licence, a GST certificate and a current account in the business name. Anyone promising you a standalone proprietorship certificate is selling one of these under another label.'
      },
      {
        q: 'Can I use a business name different from my own?',
        a: 'Yes. You can trade under any name that is not already a registered trademark. Note that a trade name gives you no exclusive rights — protecting the name requires a trademark registration.'
      },
      {
        q: 'How is a proprietorship taxed?',
        a: 'Business income is added to your personal income and taxed at individual slab rates. There is no separate return for the business; it is reported in your own income tax return.'
      },
      {
        q: 'Can I convert to a Private Limited Company later?',
        a: 'Yes, and it is common. The conversion involves incorporating a new company and transferring the business as a going concern. Plan it before you take on significant liabilities or contracts.'
      },
      {
        q: 'Do I need a current account, or can I use my savings account?',
        a: 'Legally you can use a savings account, but banks object to business volumes on personal accounts, and clients frequently refuse to pay into one. A current account under the business name is the practical requirement.'
      },
      {
        q: 'Is there a separate PAN card for proprietorship?',
        a: 'No. The business runs on the proprietor\'s personal PAN card. Tax filings are done under individual income tax slabs.'
      }
    ]
  },
  'partnership-firm': {
    id: 'partnership-firm',
    categoryId: 'company-formation',
    title: 'Partnership Firm Registration',
    shortDescription: 'Two or more people running a business together under the Indian Partnership Act, 1932, governed by a written Partnership Deed.',
    heroLine: 'Two or more people running a business together under the Indian Partnership Act, 1932, governed by a written Partnership Deed.',
    fullDescription: 'A Partnership Firm is a business structure where two or more individuals manage a business in accordance with the terms set out in a Partnership Deed. While registration is optional, registering a partnership deed is highly recommended to enforce legal rights.',
    bestSuitedFor: 'Family businesses, small trading firms and professional partnerships where the partners know and trust one another and there is no intention to raise outside capital.',
    benefits: [
      'Straightforward to form; a Partnership Deed can be executed and the firm can begin trading',
      'Low setup and running costs; no ROC filings and no statutory audit requirement',
      'Shared capital, workload and expertise across partners',
      'Flexible internal structure — profit share, roles and authority are whatever the Deed says',
      'Fewer disclosure obligations than a company; the firm\'s accounts are not public'
    ],
    limitations: [
      '**Unlimited liability, and it is joint and several.** Each partner is personally liable for the whole of the firm\'s debts, including those arising from another partner\'s actions',
      '**An unregistered firm cannot sue to enforce a contract.** Under Section 69 of the Partnership Act, an unregistered firm and its partners are barred from filing suit to enforce rights arising from a contract. This is the single strongest reason to register',
      '**No perpetual succession.** The firm may dissolve on a partner\'s death or exit unless the Deed provides otherwise',
      '**Difficult to transfer ownership or admit investors.**'
    ],
    documents: [
      'Partnership Deed on stamp paper of the appropriate value',
      'PAN and Aadhaar of all partners',
      'Address proof of all partners',
      'Contact details of all partners',
      'Electricity Bill of principal place of business, with NOC or rent agreement',
      'Passport-size photographs of all partners'
    ],
    process: [
      { step: 1, title: 'Draft the Partnership Deed', desc: 'Capital contribution, profit-sharing ratio, roles, authority, admission and retirement of partners, dispute resolution, dissolution.' },
      { step: 2, title: 'Stamp Paper & Notarisation', desc: 'Execute on stamp paper of the appropriate value and have it notarised.' },
      { step: 3, title: 'Apply for the firm\'s PAN', desc: 'Apply for dedicated Permanent Account Number (PAN) in the name of the partnership firm.' },
      { step: 4, title: 'Register with Registrar of Firms', desc: 'Register with the Registrar of Firms of the state — optional in law, but see Section 69.' },
      { step: 5, title: 'Obtain GST, Shop Act & Current Account', desc: 'Obtain GST, Shop Act and a current account as applicable.' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key legal parameters and statutory framework of a Partnership Firm in India.',
    feesAtAGlance: [
      { particular: 'Governing law', detail: 'Indian Partnership Act, 1932*' },
      { particular: 'Minimum partners', detail: '2' },
      { particular: 'Maximum partners', detail: '50' },
      { particular: 'Registration', detail: 'Optional, but an unregistered firm cannot sue on a contract' },
      { particular: 'Statutory audit', detail: 'Not required under the Partnership Act; tax audit applies above thresholds' },
      { particular: 'Taxation', detail: 'Taxed as a firm at the applicable firm rate, plus surcharge and cess' },
      { particular: 'Registered with', detail: 'Registrar of Firms, state government' }
    ],
    faqs: [
      {
        q: 'Is registering a partnership firm compulsory?',
        a: 'Registration is optional under the Act, but an unregistered firm cannot file a suit to enforce a contractual right, and a partner cannot sue the firm or other partners. In practice this means an unregistered firm has no way to recover money a customer refuses to pay. Register.'
      },
      {
        q: 'Partnership Firm or LLP — which should I choose?',
        a: 'An LLP gives you limited liability and separate legal existence; a partnership firm does not. The trade-off is annual MCA filings for the LLP. If your business carries any meaningful contractual or financial risk, the LLP is the better structure and the extra compliance is worth it.'
      },
      {
        q: 'Can a partnership firm be converted into an LLP or a company?',
        a: 'Yes, both conversions are provided for. Conversion to an LLP is the more common route (SUBJECT TO CONDITIONS AND APPLICABLE LAWS).'
      },
      {
        q: 'What must the Partnership Deed cover?',
        a: 'Capital contribution, profit and loss sharing, each partner\'s role and signing authority, salary or interest on capital, the procedure for admitting or retiring a partner, what happens on death, dispute resolution, and dissolution. Vague deeds are the source of most partnership litigation.'
      },
      {
        q: 'How is a partnership firm taxed?',
        a: 'The firm is taxed as a separate assessee at the firm rate. Partners\' salary and interest on capital are deductible to the firm within prescribed limits, and the share of profit received by a partner is exempt in the partner\'s hands.'
      }
    ]
  },
  'opc': {
    id: 'opc',
    categoryId: 'company-formation',
    title: 'One Person Company (OPC)',
    shortDescription: 'A company with a single shareholder — limited liability and corporate status for a solo founder, under the Companies Act, 2013.',
    heroLine: 'A company with a single shareholder — limited liability and corporate status for a solo founder, under the Companies Act, 2013.',
    fullDescription: 'A One Person Company (OPC) allows a single entrepreneur to operate a corporate entity. It offers limited liability protection, a separate legal identity, and perpetual succession, similar to a Private Limited company, without requiring a second director/shareholder.',
    bestSuitedFor: 'A solo founder who wants the credibility and liability protection of a company without taking on a co-shareholder purely to satisfy a numbers requirement.',
    benefits: [
      'Limited liability — personal assets are protected from business debts',
      'Separate legal entity with perpetual succession; the nominee ensures continuity',
      'Full control retained by one person; no co-founder or partner required',
      'Considerably more credible with banks, corporate clients and vendors than a proprietorship',
      'Fewer compliance obligations than a Private Limited Company — no requirement to hold an AGM, and simplified board and annual return requirements',
      'Can be converted into a Private Limited Company at any time, with no capital or turnover restriction on doing so'
    ],
    limitations: [
      '**Only one member is permitted;** you cannot bring in a co-founder or investor without converting',
      '**Not a practical vehicle** for equity fundraising or ESOPs',
      '**Cannot carry on** Non-Banking Financial Investment activities',
      '**Statutory audit is mandatory** from year one regardless of turnover',
      '**Higher running cost** than a proprietorship'
    ],
    documents: [
      '2 Proposed Names of the Company',
      'PAN, Aadhaar and photograph of the sole member and director',
      'Valid Passport',
      'Contact details – address, mobile no. & email',
      '6 months Bank statement',
      'Proof of the registered office, with Electricity bill and NOC or rent agreement',
      'Digital Signature Certificate (DSC)'
    ],
    process: [
      { step: 1, title: 'Application', desc: 'Name reservation & other compliances.' },
      { step: 2, title: 'Execution', desc: 'Formal documents are submitted for compliance & approval from the authorities.' },
      { step: 3, title: 'Certificate of Incorporation', desc: 'Issued by the MCA, with PAN, TAN and DIN allotted together.' },
      { step: 4, title: 'INC-20A Commencement of Business', desc: 'Declaration of commencement of business, filed after the subscription money is deposited, within 180 days of incorporation.' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key corporate parameters and statutory governance framework of a One Person Company (OPC).',
    feesAtAGlance: [
      { particular: 'Governing law', detail: 'Companies Act, 2013' },
      { particular: 'Members', detail: 'Exactly 1' },
      { particular: 'Directors', detail: 'Minimum 1, maximum 15' },
      { particular: 'Nominee', detail: 'Mandatory' },
      { particular: 'Minimum capital', detail: 'None prescribed' },
      { particular: 'MCA filing fee', detail: 'Nil for authorised capital up to ₹15 lakh; slab-based above that' },
      { particular: 'Stamp duty', detail: 'State-based, calculated on authorised capital. Maharashtra is among the higher-duty states' },
      { particular: 'Statutory audit', detail: 'Mandatory from year one' },
      { particular: 'Annual filings', detail: 'AOC-4, MGT-7A, DIR-3 KYC, income tax return' }
    ],
    faqs: [
      {
        q: 'Who is a nominee, and what do they actually do?',
        a: 'The nominee is a person you name at incorporation who becomes the member of the OPC if you die or become incapacitated. They have no role, rights or say while you are running the company. Their written consent in Form INC-3 is required, and they can be changed later.'
      },
      {
        q: 'Do I still have to convert to a Private Limited Company after crossing a turnover limit?',
        a: 'No. The mandatory conversion thresholds that previously applied were removed with effect from April 2021. Conversion is now voluntary and can be done at any time.'
      },
      {
        q: 'Can an NRI form an OPC?',
        a: 'Yes. NRIs were permitted to incorporate OPCs from April 2021, and the residency requirement for the member was reduced. Confirm the current residency period before filing.'
      },
      {
        q: 'OPC or Proprietorship — which should I pick?',
        a: 'The deciding factor is liability. A proprietorship costs less to run but exposes your personal assets completely. An OPC costs more in audit and ROC filings but ring-fences your personal wealth. If your business signs contracts, takes credit, or could face a customer claim, the OPC is the safer structure.'
      },
      {
        q: 'Can an OPC have more than one director?',
        a: 'Yes. It can have up to fifteen directors. The restriction is on members — there can be only one shareholder — not on directors.'
      }
    ]
  },
  'llp': {
    id: 'llp',
    categoryId: 'company-formation',
    title: 'Limited Liability Partnership (LLP)',
    shortDescription: 'Partnership flexibility with corporate limited liability, under the LLP Act, 2008.',
    heroLine: 'Partnership flexibility with corporate limited liability, under the LLP Act, 2008.',
    fullDescription: 'An LLP is an alternative corporate business form that gives the benefits of limited liability of a company and the flexibility of a partnership. No partner is liable on account of the unauthorized or independent actions of other partners, shielding personal assets.',
    bestSuitedFor: 'Professional services firms, consultancies, agencies and businesses with two or more owners who want liability protection without the compliance load of a Private Limited Company.',
    benefits: [
      'Limited liability — each partner\'s exposure is capped at their agreed contribution, and no partner is liable for another partner\'s wrongful acts',
      'Separate legal entity with perpetual succession; partners can change without disturbing the LLP',
      'Materially lower compliance than a Private Limited Company — two annual MCA forms, and no statutory audit unless thresholds are crossed',
      'No minimum capital requirement; contribution can be in cash or in kind',
      'Internal structure is governed by the LLP Agreement, so profit share and management rights can be arranged freely',
      'Profits distributed to partners are not taxed again in the partners\' hands'
    ],
    limitations: [
      '**Venture capital and institutional investors** will generally not fund an LLP',
      '**Cannot issue shares** or grant ESOPs',
      '**Partners cannot be salaried employees** of the LLP in the ordinary sense',
      '**Late filing of the annual forms attracts a daily penalty** that accumulates without an upper limit and can reach very large amounts on a dormant LLP'
    ],
    documents: [
      '2 Proposed Names of the Company',
      'PAN, Aadhaar and photograph of all partners',
      'Valid Passport of all partners',
      'Contact details – address, mobile no. & email of all partners',
      '6 months Bank statement of all partners',
      'Proof of the registered office, with Electricity bill and NOC or rent agreement',
      'Digital Signature Certificate (DSC) of all partners'
    ],
    process: [
      { step: 1, title: 'Application', desc: 'Name reservation & other compliances.' },
      { step: 2, title: 'Execution', desc: 'Formal documents are submitted for compliance & approval from the authorities.' },
      { step: 3, title: 'Certificate of Incorporation', desc: 'Issued by the MCA.' },
      { step: 4, title: 'LLP Agreement', desc: 'Executed on stamp paper and filed in Form 3 within 30 days of incorporation. Missing this deadline is the most common and most expensive LLP error.' },
      { step: 5, title: 'Registrations & Bank Account', desc: 'PAN, TAN, bank account and other registrations as applicable.' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key statutory parameters and regulatory framework of a Limited Liability Partnership (LLP).',
    feesAtAGlance: [
      { particular: 'Governing law', detail: 'Limited Liability Partnership Act, 2008' },
      { particular: 'Minimum partners', detail: '2' },
      { particular: 'Designated partners', detail: 'Minimum 2, at least one resident in India' },
      { particular: 'Maximum partners', detail: 'No limit' },
      { particular: 'Minimum capital', detail: 'None prescribed' },
      { particular: 'Statutory audit', detail: 'Required only if turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh' },
      { particular: 'Annual filings', detail: 'Form 11 (Annual Return) and Form 8 (Statement of Account & Solvency)' },
      { particular: 'Late filing penalty', detail: '₹100 per day per form, with no cap' }
    ],
    faqs: [
      {
        q: 'What is the difference between an LLP and a Partnership Firm?',
        a: 'A partnership firm has no separate legal existence and every partner is personally liable for the firm\'s entire debt, including liabilities created by another partner. An LLP is a separate legal person registered with the MCA, and each partner\'s liability is limited to their contribution. The LLP costs more to maintain but protects personal assets; the partnership firm does not.'
      },
      {
        q: 'Is there a minimum capital requirement for an LLP?',
        a: 'No. There is no prescribed minimum. Contribution can be any amount agreed among the partners, and may be in cash or in kind.'
      },
      {
        q: 'When does an LLP need a statutory audit?',
        a: 'Only where turnover exceeds ₹40 lakh or partner contribution exceeds ₹25 lakh in a financial year. Below both thresholds, no statutory audit is required, which is the main compliance saving over a Private Limited Company.'
      },
      {
        q: 'What happens if I forget to file Form 3?',
        a: 'The LLP Agreement must be filed within 30 days of incorporation. Late filing attracts additional fees, and until it is filed the LLP is governed by the default provisions in the First Schedule to the Act rather than by what the partners actually agreed.'
      },
      {
        q: 'What if my LLP is dormant — do I still have to file?',
        a: 'Yes. Form 8 and Form 11 must be filed every year even if there was no business activity at all. The ₹100 per day penalty runs per form with no ceiling, and dormant LLPs routinely accumulate penalties running into lakhs before the owners notice. If you are not using the LLP, strike it off rather than leaving it idle.'
      },
      {
        q: 'Can an LLP be converted into a Private Limited Company?',
        a: 'Yes, and it is a common step when a business decides to raise equity funding.'
      }
    ]
  },
  'private-limited': {
    id: 'private-limited',
    categoryId: 'company-formation',
    title: 'Private Limited Company Registration',
    shortDescription: 'The standard structure for businesses that intend to raise capital, issue ESOPs or scale, under the Companies Act, 2013.',
    heroLine: 'The standard structure for businesses that intend to raise capital, issue ESOPs or scale, under the Companies Act, 2013.',
    fullDescription: 'A Private Limited Company is the most popular corporate structure for businesses looking to scale, hire talent, and raise external funding. It requires a minimum of 2 directors/shareholders and limits shareholder liability to the value of their shares.',
    bestSuitedFor: 'Startups planning to raise funding, businesses onboarding investors or co-founders, and any enterprise where credibility with large customers and lenders matters.',
    benefits: [
      'Limited liability — shareholders risk only their subscribed capital',
      'The only structure institutional investors will fund. Angel investors, venture capital funds and most corporate acquirers require a Private Limited Company',
      'Can issue equity shares, preference shares, convertible instruments and ESOPs',
      'Separate legal entity with perpetual succession; ownership transfers by share transfer without disturbing operations',
      'Strongest credibility with banks, vendors, large clients and government tenders',
      'Ownership and management are separable — shareholders and directors need not be the same people'
    ],
    limitations: [
      '**The highest compliance burden of any structure here.** Statutory audit is mandatory from year one regardless of turnover or activity, plus board meetings, AGMs and multiple annual filings',
      '**Highest running cost.** Budget realistically for audit, ROC filings and tax compliance every year',
      '**Directors carry personal statutory responsibility** for filings and disclosures',
      '**Financials filed with the MCA** are publicly accessible',
      '**Winding up is a formal process,** not simply ceasing to trade'
    ],
    documents: [
      '2 Proposed Names of the Company',
      'PAN, Aadhaar and photograph of all directors',
      'Valid Passport of all directors',
      'Contact details – address, mobile no. & email of all directors',
      '6 months Bank statement of all directors',
      'Proof of the registered office, with Electricity bill and NOC or rent agreement',
      'Digital Signature Certificate (DSC) of all directors'
    ],
    process: [
      { step: 1, title: 'Application', desc: 'Name reservation & other compliances.' },
      { step: 2, title: 'Execution', desc: 'Formal documents are submitted for compliance & approval from the authorities.' },
      { step: 3, title: 'Certificate of Incorporation', desc: 'Issued by the MCA, with PAN, TAN and DIN allotted together.' },
      { step: 4, title: 'Deposit Subscription Capital', desc: 'Deposit subscription capital into the company bank account.' },
      { step: 5, title: 'INC-20A — Commencement of Business', desc: 'Declaration of commencement of business, mandatory within 180 days. A company cannot legally commence business or borrow until this is filed.' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key legal parameters, statutory rules, and regulatory framework of a Private Limited Company.',
    feesAtAGlance: [
      { particular: 'Governing law', detail: 'Companies Act, 2013' },
      { particular: 'Shareholders', detail: 'Minimum 2, maximum 200' },
      { particular: 'Directors', detail: 'Minimum 2, maximum 15, at least one resident in India' },
      { particular: 'Minimum capital', detail: 'None prescribed' },
      { particular: 'MCA filing fee', detail: 'Nil for authorised capital up to ₹15 lakh; slab-based above that' },
      { particular: 'Name reservation', detail: '₹1,000 if filed separately through RUN' },
      { particular: 'Stamp duty', detail: 'State-based on authorised capital. Maharashtra is among the higher-duty states' },
      { particular: 'Typical one-time cost', detail: 'Government cost is mostly stamp duty and DSC; professional fees separate' },
      { particular: 'Statutory audit', detail: 'Mandatory from year one' },
      { particular: 'Annual filings', detail: 'AOC-4, MGT-7, DIR-3 KYC, income tax return, plus board meetings and AGM' }
    ],
    faqs: [
      {
        q: 'Is there a minimum capital requirement?',
        a: 'No. The minimum paid-up capital requirement was removed. You can incorporate with a nominal amount. Keep authorised capital at or below ₹15 lakh to stay within the nil MCA filing fee bracket and to keep stamp duty low.'
      },
      {
        q: 'What is the difference between authorised and paid-up capital?',
        a: 'Authorised capital is the ceiling up to which the company may issue shares; paid-up capital is what shareholders have actually contributed. Setting a high authorised capital "just in case" raises both your MCA fee and your stamp duty for no benefit — it can be increased later when actually needed.'
      },
      {
        q: 'Can I register a company at my home or residential address?',
        a: 'Yes. A residential address is acceptable as a registered office, supported by a utility bill and an NOC from the owner. Note that the address becomes part of the public record and that some housing societies restrict commercial use.'
      },
      {
        q: 'Can an NRI or a foreign national be a director or shareholder?',
        a: 'Yes, subject to at least one director being resident in India, and to FEMA and sectoral FDI rules for the shareholding. A foreign director requires a passport and apostilled or notarised documents.'
      },
      {
        q: 'What compliances apply after incorporation, and what do they cost every year?',
        a: 'This is the part most founders underestimate. Every Private Limited Company must, each year, appoint an auditor and have its accounts audited regardless of turnover or activity; hold at least four board meetings and one AGM; file AOC-4 and MGT-7 with the MCA; file its income tax return; and have each director complete DIR-3 KYC. INC-20A is due within 180 days of incorporation. A dormant company with no revenue still carries all of this. Budget for it before you incorporate.'
      },
      {
        q: 'What happens if I don\'t file INC-20A?',
        a: 'The company cannot legally commence business or borrow money, and the default attracts penalties on both the company and its officers. It can also be a ground for the ROC to strike the company off the register.'
      },
      {
        q: 'Why was my company name rejected?',
        a: 'Common reasons are similarity to an existing company or LLP name, conflict with a registered trademark, use of a restricted word requiring approval, or a name that does not reflect the stated objects. Check both the MCA name database and the trademark register before applying.'
      },
      {
        q: 'How do I close a company I am no longer using?',
        a: 'Through a formal strike-off application, or through winding up where liabilities exist. Simply abandoning a company does not end its obligations — filings continue to fall due and penalties accumulate against the directors.'
      },
      {
        q: 'Pvt Ltd or LLP — which should I choose?',
        a: 'If you will raise equity funding or issue ESOPs, choose Pvt Ltd; nothing else works for that. If you will not, the LLP gives you the same limited liability at a significantly lower annual cost. The honest question is not which is "better" but whether you genuinely intend to raise capital.'
      }
    ]
  },
  'ngo': {
    id: 'ngo',
    categoryId: 'company-formation',
    title: 'Section 8 Company (Non-Profit Company)',
    shortDescription: 'A company incorporated for charitable, educational, scientific, environmental or social objects, where profits are reinvested and never distributed.',
    heroLine: 'A company incorporated for charitable, educational, scientific, environmental or social objects, where profits are reinvested and never distributed.',
    fullDescription: 'A Section 8 Company is a non-profit company incorporated under the Companies Act, 2013 for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment or any such other object. Profits and income are applied solely towards promoting its objects, and payment of any dividend to members is strictly prohibited.',
    bestSuitedFor: 'Organisations that intend to raise institutional grants or CSR funding, operate across states, or need the governance credibility of a corporate structure.',
    noteOnTerminology: 'This was Section 25 under the Companies Act, 1956. Under the Companies Act, 2013 it is Section 8. Many people still search for "Section 25 company", so address the old term explicitly on the page rather than ignoring it.',
    benefits: [
      'The most credible non-profit structure for CSR funding, institutional grants and foreign partnerships, because it is regulated by the MCA and its filings are public',
      'Separate legal entity with perpetual succession and limited liability for members',
      'No minimum capital requirement',
      'Exempt from using "Limited" or "Private Limited" in its name',
      'Eligible for income tax exemption and for donor deduction benefits, on separate registration',
      'Nationwide operation without state-level re-registration',
      'Higher stamp duty exemptions on incorporation documents than an ordinary company'
    ],
    limitations: [
      '**Requires a licence from the Central Government** in addition to incorporation, which adds time',
      '**No dividend, no profit distribution.** All surplus must be applied to the stated objects',
      '**Full ROC compliance applies,** including statutory audit, AOC-4 and MGT-7',
      '**The objects clause is binding;** altering it requires prior approval',
      '**The licence can be revoked** if the company operates against its stated objects'
    ],
    documents: [
      'PAN, Aadhaar, photographs and address proof of all directors and subscribers',
      'Proof of the registered office, with utility bill and NOC',
      'DSC for subscribers and directors',
      'Declarations in Form INC-14 (by a professional) and INC-15 (by each subscriber)',
      'Projected income and expenditure statement for the next three years',
      'Statement of the proposed work and grounds for the licence application'
    ],
    process: [
      { step: 1, title: 'Applications', desc: 'Name reservation, typically include Foundation, Association, Council, Institute, Federation or similar.' },
      { step: 2, title: 'Executions', desc: 'Licence application under Section 8.' },
      { step: 3, title: 'Certificate of Incorporation', desc: 'Issued with the Section 8 licence, PAN and TAN.' },
      { step: 4, title: 'Tax Registrations', desc: 'Apply for the non-profit registrations (formerly 12A and 80G) immediately after incorporation.' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key legal, statutory, and operational parameters of a Section 8 Non-Profit Company.',
    feesAtAGlance: [
      { particular: 'Governing law', detail: 'Companies Act, 2013, Section 8' },
      { particular: 'Members', detail: 'Minimum 2 (private) or 7 (public)' },
      { particular: 'Directors', detail: 'Minimum 2 (private) or 3 (public)' },
      { particular: 'Minimum capital', detail: 'None prescribed' },
      { particular: 'Licence', detail: 'Required from the Central Government' },
      { particular: 'Statutory audit', detail: 'Mandatory' },
      { particular: 'Profit distribution', detail: 'Prohibited' },
      { particular: 'Portal', detail: 'mca.gov.in' }
    ],
    faqs: [
      {
        q: 'Is a Section 8 company the same as a Section 25 company?',
        a: 'Yes. Section 25 of the Companies Act, 1956 was the earlier provision. It was replaced by Section 8 of the Companies Act, 2013. Companies incorporated under the old Section 25 continue to be valid and are now treated as Section 8 companies.'
      },
      {
        q: 'Section 8 Company, Trust or Society — which should I set up?',
        a: 'A Section 8 company is the strongest option for CSR funding, institutional grants and multi-state operations, because MCA regulation and public filings give donors confidence. A trust is simplest and cheapest to form and works well for a family-run or locally funded charity. A society suits membership-based organisations with a democratic structure. The trade-off is compliance: the Section 8 company carries the heaviest load and the trust the lightest.'
      },
      {
        q: 'Can directors of a Section 8 company draw a salary?',
        a: 'Reasonable remuneration for actual services rendered is permissible and must be disclosed. What is prohibited is the distribution of profits or dividends to members.'
      },
      {
        q: 'Does incorporation automatically give tax exemption?',
        a: 'No. Incorporation and tax exemption are separate. Exemption and donor deduction benefits require a separate application to the Income Tax Department after incorporation.'
      },
      {
        q: 'Is a minimum capital or a minimum donation required?',
        a: 'No minimum capital is prescribed. However, the projected income and expenditure statement filed with the licence application should be realistic, because it forms part of the basis on which the licence is granted.'
      }
    ]
  },
  'trust': {
    id: 'trust',
    categoryId: 'company-formation',
    title: 'Public Charitable Trust Registration',
    shortDescription: 'The simplest and most established charitable structure, formed by a Trust Deed and registered with the Charity Commissioner.',
    heroLine: 'The simplest and most established charitable structure, formed by a Trust Deed and registered with the Charity Commissioner.',
    fullDescription: 'A Public Charitable Trust is the traditional legal form for non-profit and benevolent initiatives in India. It is created by a Settlor dedicating property or funds through a registered Trust Deed for charitable, educational, medical, or religious purposes benefiting the public, and administered by a Board of Trustees.',
    bestSuitedFor: 'Family charities, religious institutions, temples, educational trusts and organisations with a stable founding group and locally raised funds.',
    maharashtraNote: 'Public charitable trusts in Maharashtra are governed by the Maharashtra Public Trusts Act, 1950 and registered with the Office of the Charity Commissioner. This differs from states that rely only on the Indian Trusts Act, 1882. Say so on the page — it is the kind of local specificity national portals do not cover.',
    benefits: [
      'Simplest and least expensive charitable structure to form',
      'Lightest ongoing compliance of the three non-profit forms',
      'Perpetual existence, independent of the founders\' lifetimes',
      'Founders retain substantial control; the trustee board is self-appointing under most deeds',
      'Eligible for income tax exemption and donor deduction benefits on separate registration',
      'Well understood by Indian banks, donors and courts'
    ],
    limitations: [
      '**Amending the Trust Deed is difficult** and generally requires Charity Commissioner approval',
      '**Governance is less transparent to outside donors** than a Section 8 company, which some institutional funders treat as a negative',
      '**Trustees can be personally accountable** for breach of trust',
      '**Charity Commissioner filings,** including annual accounts and change reports, are mandatory',
      '**Operating outside the state of registration** can raise practical difficulties'
    ],
    documents: [
      'Trust Deed on stamp paper of the appropriate value',
      'PAN, Aadhaar, photographs and address proof of the settlor and all trustees',
      'Proof of the registered office, with utility bill and NOC from the owner',
      'Objects of the trust, drafted precisely',
      'Two witnesses',
      'Application in the prescribed form to the Charity Commissioner'
    ],
    process: [
      { step: 1, title: 'Draft the Trust Deed', desc: 'Name, objects, registered address, trustees, powers and duties, succession, accounts and audit, and amendment procedure.' },
      { step: 2, title: 'Execution & Sub-Registrar', desc: 'Execute on stamp paper before witnesses and register with the Sub-Registrar.' },
      { step: 3, title: 'Charity Commissioner Application', desc: 'Apply to the Charity Commissioner for registration under the Maharashtra Public Trusts Act.' },
      { step: 4, title: 'Enquiry & Registration', desc: 'The trust is entered in the Public Trusts Register and an official registration number is issued.' },
      { step: 5, title: 'PAN, Bank Account & Tax Registrations', desc: 'Apply for PAN, open a bank account, and then apply for non-profit tax registrations (12A and 80G).' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key statutory parameters and administrative framework of a Public Charitable Trust.',
    feesAtAGlance: [
      { particular: 'Governing law', detail: 'Maharashtra Public Trusts Act, 1950 (Maharashtra); Indian Trusts Act, 1882 (private trusts)' },
      { particular: 'Minimum trustees', detail: '2' },
      { particular: 'Registered with', detail: 'Charity Commissioner, and Sub-Registrar for the Deed' },
      { particular: 'Minimum corpus', detail: 'Nominal; a small initial corpus is customary' },
      { particular: 'Statutory audit', detail: 'Applies above the prescribed income threshold' },
      { particular: 'Annual compliance', detail: 'Accounts and change reports to the Charity Commissioner; income tax return' }
    ],
    faqs: [
      {
        q: 'Trust or Society — what is the practical difference?',
        a: 'A trust is controlled by a small, largely self-perpetuating board of trustees, which suits a founder who wants continuity of vision. A society is member-based and democratic, with an elected governing body and annual general meetings, which suits an organisation whose members should have a genuine say. Trusts are simpler; societies are more accountable to their members.'
      },
      {
        q: 'Can family members be trustees of the same trust?',
        a: 'Yes, and it is common in family charities. Note that a trust dominated by related trustees can attract closer scrutiny during tax exemption processing.'
      },
      {
        q: 'Can a trust be dissolved?',
        a: 'Only in accordance with the Trust Deed and with Charity Commissioner approval. Trust property generally cannot revert to the settlor; it must pass to another trust with similar objects.'
      },
      {
        q: 'Do I need to register the Trust Deed?',
        a: 'For a public charitable trust holding immovable property, registration of the deed is required. Registration with the Charity Commissioner is separately mandatory in Maharashtra.'
      },
      {
        q: 'Can a trust receive foreign donations?',
        a: 'Only with FCRA registration or prior permission from the Ministry of Home Affairs.'
      }
    ]
  },

  // --- LICENSES & COMPLIANCE ---
  'msme-udyam': {
    id: 'msme-udyam',
    categoryId: 'licenses',
    title: 'MSME Udyam Registration',
    shortDescription: 'Free government registration for micro, small and medium enterprises, unlocking credit, procurement and statutory payment protections.',
    heroLine: 'Free government registration for micro, small and medium enterprises, unlocking credit, procurement and statutory payment protections.',
    fullDescription: 'Udyam Registration is the official statutory registration portal for Micro, Small, and Medium Enterprises administered by the Ministry of MSME. Classification is determined based on composite criteria of investment in plant and machinery/equipment and annual turnover (revised with effect from 1 April 2025). Registration provides eligibility for priority sector lending, delayed payment protection, public procurement preferences, and statutory fee concessions.',
    benefits: [
      'Statutory protection against delayed payment. Buyers must pay a registered MSME within the period prescribed under the MSMED Act, with mandatory interest on default. Separately, a buyer is denied the income tax deduction for the expense if MSME dues remain unpaid beyond the prescribed period — which gives you real commercial leverage',
      'Access to the Credit Guarantee scheme for collateral-free lending',
      'Priority sector lending status, generally meaning easier credit at lower spreads',
      '25% reservation in government procurement, and access to the Government e-Marketplace',
      'Reduced government fees on IP filings — the trademark fee halves, and the patent fee reduction is considerably steeper',
      'Access to TReDS for discounting receivables from large buyers',
      'State-level incentives including electricity duty and subsidy schemes'
    ],
    classification: {
      title: 'Classification (revised with effect from 1 April 2025)',
      headers: ['Category', 'Investment in plant, machinery or equipment', 'Annual turnover'],
      rows: [
        { category: 'Micro', investment: 'Up to ₹2.5 crore', turnover: 'Up to ₹10 crore' },
        { category: 'Small', investment: 'Up to ₹25 crore', turnover: 'Up to ₹100 crore' },
        { category: 'Medium', investment: 'Up to ₹125 crore', turnover: 'Up to ₹500 crore' }
      ],
      note: 'Both criteria must be satisfied. Investment and turnover are auto-fetched from your ITR and GST filings, so the figures cannot be self-declared inaccurately.'
    },
    documents: [
      'Aadhaar of the proprietor, managing partner or authorised director, linked to a mobile number',
      'PAN of the business',
      'GSTIN, where applicable',
      'Bank account details',
      'NIC code for your business activity',
      'Contact details – address, mobile no. & email'
    ],
    process: [
      { step: 1, title: 'Profiling', desc: 'Understand the need of the Employer/ business enterprise' },
      { step: 2, title: 'Documentation', desc: 'Gather all documents required in the process' },
      { step: 3, title: 'Execution', desc: 'Submit applications & authenticate through Aadhaar authentication' },
      { step: 4, title: 'Certification', desc: 'Instant certificate — the Udyam Registration Certificate is generated' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key statutory parameters, timeline, government fee, and official portal details.',
    feesAtAGlance: [
      { particular: 'Government fee', detail: 'Nil. The portal charges nothing at any stage' },
      { particular: 'Timeline', detail: 'Immediate' },
      { particular: 'Validity', detail: 'No official validity; yet it is suggested to update Certificate every 10-12 months' },
      { particular: 'Annual obligation', detail: 'Details must be kept updated on the portal each year' },
      { particular: 'Official Portal', detail: 'udyamregistration.gov.in' }
    ],
    faqs: [
      {
        q: 'Is Udyam registration free?',
        a: 'Yes, completely. The official portal charges no fee and issues the certificate instantly. A large number of look-alike private websites charge several thousand rupees for the same free registration. Always check that the URL ends in .gov.in.'
      },
      {
        q: 'Can a trader register on Udyam?',
        a: 'The MSMED Act covers manufacturing and service enterprises. Retail and wholesale traders can register on Udyam, but their benefits are limited to priority sector lending rather than the full range of MSME schemes. Confirm the current position before relying on any specific benefit.'
      },
      {
        q: 'I have an old Udyog Aadhaar. Is it still valid?',
        a: 'No. Udyog Aadhaar registrations ceased to be valid and migration to Udyam was required. If you have not migrated, register afresh on the Udyam portal.'
      },
      {
        q: 'A large customer has not paid me. How do I actually use the MSME protection?',
        a: 'The MSMED Act sets a maximum payment period and makes interest payable on delay. Enforcement runs through the MSME Samadhaan portal, where a registered MSME can file a delayed payment application against the buyer, which goes to a Micro and Small Enterprise Facilitation Council. The additional pressure point is that the buyer loses the tax deduction for the unpaid amount, so the reference often produces payment before it reaches a hearing.'
      },
      {
        q: 'Do I need GST to register on Udyam?',
        a: 'Only if you are otherwise required to hold GST registration. If you are below the threshold and not otherwise liable, you can register on Udyam without a GSTIN.'
      },
      {
        q: 'Does the registration expire?',
        a: 'No. The Udyam number is permanent. Your details must be kept current on the portal, and your category updates automatically as your filed turnover and investment change.'
      }
    ]
  },
  'gst': {
    id: 'gst',
    categoryId: 'licenses',
    title: 'GST Registration & Filing',
    shortDescription: 'Registration under the GST regime, mandatory once you cross the threshold, sell inter-state, or sell through an e-commerce platform.',
    heroLine: 'Registration under the GST regime, mandatory once you cross the threshold, sell inter-state, or sell through an e-commerce platform.',
    fullDescription: 'Registration under the GST regime, mandatory once you cross the threshold, sell inter-state, or sell through an e-commerce platform. Goods and Services Tax (GST) is a unified indirect tax structure in India enabling businesses to legally collect tax, claim input tax credit, and expand trade nationally.',
    benefits: [
      'Legal authority to collect GST and issue tax invoices',
      'Input tax credit on purchases, which is the main commercial reason to register',
      'Required to sell on Amazon, Flipkart and most marketplaces',
      'Enables inter-state supply without restriction',
      'Improves credibility with corporate customers, who often will not contract with unregistered suppliers because they cannot claim credit',
      'Enables export without payment of tax under an LUT, and IGST refund claims'
    ],
    whenRegistrationIsMandatory: {
      title: 'When registration is mandatory',
      subtitle: 'Statutory criteria where GST registration is compulsory under the law:',
      items: [
        'Aggregate turnover exceeds ₹40 lakh for goods or ₹20 lakh for services (₹20 lakh and ₹10 lakh respectively in special category states)',
        'Inter-state supply of goods',
        'Supply through an e-commerce operator',
        'Casual taxable persons and non-resident taxable persons',
        'Persons liable under reverse charge',
        'Input service distributors and agents'
      ]
    },
    documents: [
      'PAN of the business and of the proprietor, partners or directors',
      'Contact details – address, mobile no. & email',
      'Aadhaar of the proprietor, partners or directors',
      'Constitutional Proof of Business',
      'Business address proof — electricity bill with NOC or rent agreement',
      'Bank statement or cancelled cheque',
      'Passport-size photographs',
      'Board resolution or authorisation letter',
      'Digital Signature, mandatory for companies and LLPs'
    ],
    process: [
      { step: 1, title: 'Profiling', desc: 'Understand the need of the Employer/ business enterprise' },
      { step: 2, title: 'Documentation', desc: 'Gather all documents required in the process' },
      { step: 3, title: 'Execution', desc: 'Submit applications & authenticate through Aadhaar authentication, the officer reviews and may raise queries' },
      { step: 4, title: 'Certification', desc: 'GSTIN issued in Form GST REG-06' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key statutory parameters, fees, timeline, composition scheme, and return schedule for GST Registration.',
    feesAtAGlance: [
      { particular: 'Government fee', detail: 'Nil' },
      { particular: 'Typical timeline', detail: 'Around 7 working days; a simplified route grants registration within three working days for small applicants below a prescribed monthly output tax liability' },
      { particular: 'Composition scheme', detail: 'Available up to ₹1.5 crore for goods and ₹50 lakh for services, at a fixed rate, with quarterly payment and annual return' },
      { particular: 'Returns', detail: 'GSTR-1 and GSTR-3B, monthly or quarterly under QRMP; GSTR-9 annually where applicable' }
    ],
    atAGlanceNote: 'GST rates were substantially rationalised in September 2025 into a simplified slab structure. Published rates on the site may vary from the actual, you are suggested to re-check them before considering blatantly.',
    faqs: [
      {
        q: 'Is GST registration mandatory for a small business?',
        a: 'Only above the threshold — ₹40 lakh for goods, ₹20 lakh for services — unless you sell inter-state, sell through an e-commerce platform, or fall into one of the compulsory categories. Below the threshold it is optional.'
      },
      {
        q: "Should I register voluntarily if I'm below the threshold?",
        a: 'It depends on who your customers are. If you sell to registered businesses, they will want a tax invoice so they can claim credit, and being unregistered can cost you the work. If you sell to consumers, voluntary registration adds compliance and a return-filing obligation for little gain.'
      },
      {
        q: 'Can I get GST registration at a residential address?',
        a: 'Yes. A residential address is acceptable with a valid electricity bill and an NOC from the owner, or a rent agreement.'
      },
      {
        q: 'Do I need separate registration in each state?',
        a: 'Yes. GST is state-specific. A separate registration is required for each state from which you make taxable supplies.'
      },
      {
        q: 'Do freelancers need GST?',
        a: 'Only above the ₹20 lakh services threshold, or if supplying inter-state. Note that service exports are zero-rated but not exempt — an exporter who is registered should file a Letter of Undertaking (LUT) to export without paying IGST.'
      },
      {
        q: 'Is GST compulsory if I sell on Amazon or Flipkart?',
        a: 'For most sellers, yes, regardless of turnover. Confirm your position, since limited relaxations exist for certain intra-state suppliers.'
      },
      {
        q: 'What returns do I have to file, and what happens if I miss them?',
        a: 'GSTR-1 and GSTR-3B, monthly or quarterly under the QRMP scheme, plus the annual return where applicable. Late filing attracts late fees per return per day plus interest, and continued non-filing can lead to suspension and cancellation of the registration.'
      },
      {
        q: 'What is the composition scheme, and should I opt in?',
        a: 'A simplified scheme with a lower fixed rate and quarterly payment. The trade-off is that you cannot collect GST from customers or claim input tax credit, and you cannot make inter-state supplies. It suits small B2C businesses; it is usually wrong for B2B.'
      }
    ]
  },
  'dsc': {
    id: 'dsc',
    categoryId: 'licenses',
    title: 'Digital Signature Certificate (DSC)',
    shortDescription: 'A Class 3 cryptographic certificate on a secure USB token, required to sign filings electronically.',
    heroLine: 'A Class 3 cryptographic certificate on a secure USB token, required to sign filings electronically.',
    fullDescription: 'A Class 3 cryptographic certificate on a secure USB token, required to sign filings electronically. A Digital Signature Certificate (DSC) provides statutory authentication and legal validity under the Information Technology Act for corporate, tax, and intellectual property filings.',
    typesTitle: 'Types',
    types: [
      'Signature certificate — for signing documents and filings',
      'Encryption certificate — for securing data, used in e-tendering',
      'Combo — both, on a single token'
    ],
    benefits: [
      'Mandatory for MCA filings, company incorporation and ROC returns',
      'Required for GST filings by companies and LLPs, and for income tax filings in audit cases',
      'Required for trademark and patent filings, e-tendering, DGFT and ICEGATE',
      'Legally valid electronic signature under the Information Technology Act',
      'Removes the need for physical signing, printing and courier',
      'Provides authentication and tamper-evidence on signed documents'
    ],
    documents: [
      'PAN card copy',
      'Aadhaar card copy',
      'Passport-size photograph',
      'Mobile number and email address',
      "For an organisational DSC, additionally the entity's incorporation and PAN documents and an authorisation letter"
    ],
    process: [
      { step: 1, title: 'Application', desc: 'Verification & completion of eKYC using Aadhaar or PAN' },
      { step: 2, title: 'Verification', desc: 'Email and mobile via OTP' },
      { step: 3, title: 'Certificate', desc: 'Downloaded onto a secure USB crypto token' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Official statutory parameters, validity periods, storage mandates, and issuance timelines for DSC.',
    atAGlanceHeaders: ['Parameter', 'Details'],
    feesAtAGlance: [
      { particular: 'Class', detail: 'Class 3 only. Class 2 certificates were discontinued from January 2021' },
      { particular: 'Validity', detail: '1, 2 or 3 years, chosen at purchase/ 2 years preferably' },
      { particular: 'Issued by', detail: 'Certifying Authorities licensed by the Controller of Certifying Authorities' },
      { particular: 'Storage', detail: 'Mandatory on a FIPS-compliant USB crypto token; a DSC cannot legally be stored as a plain file' },
      { particular: 'Timeline', detail: 'Usually within 1 to 2 working days after video verification' }
    ],
    faqs: [
      {
        q: 'Which class of DSC do I need?',
        a: 'Class 3. It is the only class currently issued, and it is what MCA, GST, income tax, IP India and e-tendering portals all require.'
      },
      {
        q: 'Can I use one DSC across MCA, GST, income tax and IP India?',
        a: 'Yes. A single Class 3 signature certificate in your name works across portals, provided it is registered on each portal against your profile.'
      },
      {
        q: 'What is the video verification step?',
        a: 'A short recorded video in which you read a prescribed statement, used to confirm identity. It is mandatory and cannot be skipped.'
      },
      {
        q: 'Can I keep the DSC as a file on my computer?',
        a: 'No. It must be stored on a secure crypto token. Storing it as a plain file is not permitted, and sharing a token with another person defeats the legal basis of the signature — the holder remains accountable for anything signed with it.'
      },
      {
        q: 'What happens when my DSC expires?',
        a: 'Filings cannot be signed once it expires. It cannot be extended; a fresh certificate must be issued, though the same token can usually be reused. Track the expiry, especially before an approaching MCA or tax deadline.'
      }
    ]
  },
  'iec': {
    id: 'iec',
    categoryId: 'licenses',
    title: 'Import Export Code (IEC)',
    shortDescription: 'The 10-digit code from DGFT required to import or export goods from India.',
    heroLine: 'The 10-digit code from DGFT required to import or export goods from India.',
    fullDescription: 'The Import Export Code (IEC) is a 10-digit business identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry. It is mandatory for commercial import and export of physical goods and notified cross-border services.',
    warningNotice: {
      title: 'The annual updation requirement',
      desc: 'An IEC does not need renewal in the ordinary sense, but it must be confirmed or updated on the DGFT portal between 1 April and 30 June every year, even where nothing has changed and even where you did no trade at all. Missing the window results in automatic deactivation, and consignments will not clear customs until the overdue update is completed. Reactivation is possible by completing the update, but is without prejudice to any action DGFT may take for the period of non-compliance.',
      note: 'State this prominently on the page. It is the most common and most costly IEC error.'
    },
    benefits: [
      'Mandatory for customs clearance of any import or export consignment',
      'Enables banks to process foreign currency payments, letters of credit and export remittances',
      'Required to claim export incentives and duty schemes from DGFT',
      'Required for IGST refund on exports',
      'One-time application; the code itself does not expire',
      'No monthly or quarterly return filing'
    ],
    documents: [
      'PAN of the business and of the proprietor, partners or directors',
      'Contact details – address, mobile no. & email',
      'Aadhaar of the proprietor, partners or directors',
      'Business address proof — electricity bill with NOC or rent agreement',
      'Passport-size photographs',
      'Board resolution or authorisation letter',
      'Cancelled cheque or bank certificate showing the firm\'s name',
      'Digital Signature or Aadhaar-based authentication'
    ],
    process: [
      { step: 1, title: 'Profiling', desc: 'Understand the need of the Employer/ business enterprise' },
      { step: 2, title: 'Documentation', desc: 'Gather all documents required in the process' },
      { step: 3, title: 'Execution', desc: 'Submit applications & authenticate through Aadhaar authentication, the officer reviews and may raise queries' },
      { step: 4, title: 'Certification', desc: 'e-IEC issued, generally within one to three working days*' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key official parameters, timeline, fees, and statutory compliance of Import Export Code (IEC).',
    feesAtAGlance: [
      { particular: 'Government fee', detail: '₹500' },
      { particular: 'Timeline', detail: '1 to 3 working days*' },
      { particular: 'Validity', detail: 'Does not expire, subject to the annual update' },
      { particular: 'Annual update window', detail: '1 April to 30 June, every year, without exception' },
      { particular: 'Modification fee', detail: 'A nominal fee applies when actually changing details' }
    ],
    faqs: [
      {
        q: 'Do I need an IEC to export services?',
        a: 'For most service exports there is no customs clearance, so an IEC is not required simply to receive payment. You do need one to claim DGFT export incentives, and banks often ask for it when processing larger inward remittances. Software exporters may separately have SOFTEX obligations.'
      },
      {
        q: 'Do I have to file returns for my IEC?',
        a: 'There is no monthly or quarterly return. The only recurring obligation is the annual April-to-June confirmation, and it is mandatory.'
      },
      {
        q: 'My IEC has been deactivated. What now?',
        a: 'Log in to the DGFT portal and complete the pending update with proper authentication. The IEC is generally reactivated immediately.'
      },
      {
        q: 'Is my IEC the same as my PAN?',
        a: 'The IEC is issued against your PAN and mirrors it, but holding a PAN does not mean you hold an IEC. You must still apply. If you convert from a proprietorship to a company, the company needs a fresh IEC under its own PAN — the old one does not carry over.'
      },
      {
        q: 'What is an AD Code and do I need one?',
        a: 'An Authorised Dealer Code links your bank to the customs port. You obtain an AD Code letter from your bank and register it at each port you ship through. Without it, shipping bills cannot be filed.'
      },
      {
        q: 'Should I surrender my IEC if I stop trading?',
        a: 'Yes. An unused IEC still requires the annual update, and a long-deactivated IEC attached to your PAN can complicate later applications for credit facilities and other registrations.'
      }
    ]
  },
  'shop-act-gumasta': {
    id: 'shop-act-gumasta',
    categoryId: 'licenses',
    title: 'Shop Act & Gumasta License',
    shortDescription: 'The mandatory commercial establishment registration for operating any shop, office or business premises in Maharashtra.',
    heroLine: 'The mandatory commercial establishment registration for operating any shop, office or business premises in Maharashtra.',
    fullDescription: 'Shop Act, also known as Gumasta License in Maharashtra, is a mandatory registration under the Maharashtra Shops and Establishment Act. It regulates working hours, leave, wages, and is the key document required to open commercial bank current accounts in Mumbai.',
    whatItIs: 'Registration under the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017, known locally as the Gumasta licence. It regulates working hours, leave, wages and employment conditions, and is the document banks rely on to open a business current account.',
    benefits: [
      'Legal authority to operate a commercial premises in Maharashtra',
      'The document banks most commonly require to open a current account',
      'Establishes proof of business existence for vendors, landlords and marketplaces',
      'Required for most other municipal licences and registrations',
      'Demonstrates compliance with state labour and safety provisions'
    ],
    documents: [
      'PAN and Aadhaar of the proprietor, partners or directors',
      'Photograph of the premises clearly showing the name board visible and readable in Marathi',
      'Rent agreement or ownership proof, plus a recent electricity bill',
      'Partnership Deed or Certificate of Incorporation, where applicable',
      'Details of employees, if any',
      'Passport-size photograph of the applicant',
      'Contact details – address, contact no. & email id'
    ],
    process: [
      { step: 1, title: 'Profiling', desc: 'Understand the need of the Employer/ business enterprise' },
      { step: 2, title: 'Documentation', desc: 'Gather all documents required in the process' },
      { step: 3, title: 'Execution', desc: 'Submit applications on behalf of the applicants' },
      { step: 4, title: 'Certification', desc: 'Establishments below the employee threshold generally receive an intimation receipt; those above receive a full licence' },
      { step: 5, title: 'Display', desc: 'Display the certificate at the premises' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key statutory parameters, timeline, fees, and regulatory details of Maharashtra Shop & Establishment (Gumasta) License.',
    feesAtAGlance: [
      { particular: 'Governing law', detail: 'Maharashtra Shops and Establishments Act, 2017' },
      { particular: 'Applies to', detail: 'Any shop, office or commercial establishment in Maharashtra' },
      { particular: 'Fee', detail: 'State fee, varies with employee count' },
      { particular: 'Validity', detail: 'Chosen at application, typically 1 to 10 years' },
      { particular: 'Renewal', detail: 'Before expiry; late renewal attracts a penalty' }
    ],
    faqs: [
      {
        q: 'What exactly is the Marathi signboard rule?',
        a: "The establishment's name board must be clearly displayed in Marathi in Devanagari script, and the Marathi lettering must be at least as prominent as any other language used. This is enforced by the BMC, and non-compliance attracts penalties. Your registration photograph must show the compliant board."
      },
      {
        q: 'Do I need Gumasta if I work from home or run a purely online business?',
        a: 'If you are carrying on commercial activity from a premises in Maharashtra, the registration generally applies, including from a residential address used as an office. In practice, the more immediate driver is that your bank will ask for it before opening a current account.'
      },
      {
        q: 'What is the difference between an intimation receipt and a licence?',
        a: 'Establishments below the prescribed employee threshold receive a simpler intimation-based registration; those above it go through the full licensing route. Both serve as proof of registration for banking purposes.'
      },
      {
        q: 'Is Gumasta the same as a Municipal Trade Licence?',
        a: 'No. Gumasta is a state labour registration. A BMC trade or health licence is a separate municipal permission required for specific activities such as food service. A restaurant needs both.'
      },
      {
        q: "What happens if I don't renew on time?",
        a: 'Late renewal attracts penalties, and an expired registration can create problems with banking and with any municipal licence that depends on it. Track the expiry date.'
      }
    ]
  },
  'fssai-health-fire': {
    id: 'fssai-health-fire',
    categoryId: 'licenses',
    title: 'FSSAI (Food License)',
    shortDescription: 'Mandatory food safety registration or licence for anyone who manufactures, stores, transports, distributes or sells food in India.',
    heroLine: 'Mandatory food safety registration or licence for anyone who manufactures, stores, transports, distributes or sells food in India.',
    fullDescription: 'Mandatory food safety registration or licence for anyone who manufactures, stores, transports, distributes or sells food in India. We secure FSSAI registrations and state/central licences on the FoSCoS portal with complete end-to-end documentation, testing, and statutory compliance.',
    benefits: [
      'Legal authority to handle or sell food; operating without one is an offence',
      'Required to list on Zomato, Swiggy, Amazon, Blinkit and every other food platform',
      'Builds consumer trust; the 14-digit licence number is a visible quality signal',
      'Required by most landlords, malls and corporate canteens before granting space',
      'Protects against sealing, seizure and penalty action by food safety officers',
      'Necessary for food exports and for institutional supply contracts'
    ],
    whichLicenceYouNeed: {
      title: 'Which licence you need',
      subtitle: 'Statutory categorization based on scale, turnover, and operational jurisdiction:',
      rows: [
        {
          category: 'Basic Registration',
          appliesTo: 'Petty food businesses with turnover up to ₹12 lakh — small vendors, home kitchens, small retailers'
        },
        {
          category: 'State Licence',
          appliesTo: 'Turnover between ₹12 lakh and ₹20 crore, operating within one state'
        },
        {
          category: 'Central Licence',
          appliesTo: 'Turnover above ₹20 crore, or importers and exporters, or operations in more than one state, or supply to central government agencies and railways'
        }
      ]
    },
    documents: [
      'PAN and Aadhaar of the applicant',
      'Contact details – address, mobile no. & email',
      'Photo identity and passport-size photograph',
      'Proof of premises — rent agreement or ownership document, plus Electricity bill',
      'Layout plan of the kitchen or unit showing exits (for manufacturing and State/Central licences)',
      'List of food products to be handled',
      'Water test report from a recognised laboratory',
      'Medical fitness certificates for food handlers',
      'Food safety management plan',
      'Certificate of Incorporation or Partnership Deed, where applicable'
    ],
    process: [
      { step: 1, title: 'Determine Category', desc: 'Determine the correct category - from turnover, scale and geography' },
      { step: 2, title: 'Apply', desc: 'Apply - with documents and the prescribed fee' },
      { step: 3, title: 'Scrutiny', desc: 'Scrutiny - with any deficiency to be corrected within the stipulated period' },
      { step: 4, title: 'Inspection', desc: 'Inspection - of the premises by a Food Safety Officer, where applicable' },
      { step: 5, title: 'Licence Issued', desc: 'Licence issued - with a 14-digit FSSAI number' }
    ],
    atAGlanceTitle: 'At a Glance',
    atAGlanceDesc: 'Key regulatory framework, portal, validity, display rules, and annual compliance for FSSAI Food Licence.',
    feesAtAGlance: [
      { particular: 'Governing law', detail: 'Food Safety and Standards Act, 2006' },
      { particular: 'Portal', detail: 'foscos.fssai.gov.in' },
      { particular: 'Validity', detail: '1 to 5 years, chosen at application' },
      { particular: 'Renewal', detail: 'Must be applied for before expiry; late renewal attracts a daily penalty' },
      { particular: 'Display', detail: 'The 14-digit licence number must be displayed at the premises and on packaging and bills' },
      { particular: 'Annual return', detail: 'Required for manufacturers and importers in the prescribed categories' }
    ],
    faqs: [
      {
        q: 'I run a home kitchen or cloud kitchen. Do I need FSSAI?',
        a: 'Yes. Scale determines which category applies, not whether you need one. Most home-based food businesses fall under Basic Registration, and every delivery platform will demand the number before listing you.'
      },
      {
        q: 'What does Zomato or Swiggy require?',
        a: 'A valid FSSAI registration or licence covering the exact address you operate from. Platforms verify the number against the FSSAI database, so it must be live and correctly registered.'
      },
      {
        q: 'How long is the licence valid, and what if I renew late?',
        a: 'You choose a period of one to five years at application. Renewal must be applied for before expiry. Late renewal attracts a penalty for each day of delay, which accumulates quickly.'
      },
      {
        q: 'Do I have to display the licence number?',
        a: 'Yes. It must be displayed prominently at the premises and printed on food packaging and bills. This is checked during inspection.'
      },
      {
        q: 'Who needs a Central Licence?',
        a: 'Businesses above the ₹20 crore turnover mark, importers and exporters, businesses operating in more than one state, and suppliers to central government agencies.'
      },
      {
        q: 'Is FSSAI the same as a BMC health licence or a fire NOC?',
        a: 'No. A restaurant in Mumbai typically needs FSSAI and a BMC health trade licence and a fire NOC and Gumasta. They are issued by different authorities under different laws and must be obtained in sequence.'
      },
      {
        q: 'Is a trained food safety supervisor required?',
        a: 'For several categories, yes, under the FoSTaC training framework. Confirm whether your category is covered.'
      }
    ]
  },
  'iso-ce-bis': {
    id: 'iso-ce-bis',
    categoryId: 'licenses',
    title: 'ISO Certification',
    shortDescription: 'Internationally recognised management system standards, awarded by an accredited certification body after audit.',
    heroLine: 'Internationally recognised management system standards, awarded by an accredited certification body after audit.',
    fullDescription: 'Internationally recognised management system standards, awarded by an accredited certification body after audit. ISO standards certify that an enterprise maintains audited, verified operational workflows across quality management, information security, or occupational safety.',
    sayPlainlyNotice: {
      title: 'Say this plainly on the page:',
      text: 'ISO certification is voluntary. No law requires it. It is a commercial credential, not a licence. Being honest about that will earn you more trust than implying otherwise.'
    },
    commonStandards: {
      title: 'Common standards',
      subtitle: 'Internationally recognised management system standards and operational coverage:',
      rows: [
        { standard: 'ISO 9001', covers: 'Quality management systems' },
        { standard: 'ISO 14001', covers: 'Environmental management' },
        { standard: 'ISO 27001', covers: 'Information security management' },
        { standard: 'ISO 45001', covers: 'Occupational health and safety' },
        { standard: 'ISO 22000', covers: 'Food safety management' }
      ]
    },
    benefits: [
      'Qualifies you for tenders and RFPs that list certification as a precondition',
      'Demonstrates documented, repeatable processes to buyers and auditors',
      'Frequently required by international customers and enterprise procurement teams',
      'ISO 27001 in particular is increasingly demanded by clients before sharing data',
      'Drives genuine internal improvement where the implementation is real rather than paper-only',
      'Supports export competitiveness and channel partner requirements'
    ],
    documents: [
      'Company incorporation and PAN details',
      'Description of process and activity flows',
      'Quality manual and standard operating procedures',
      'Records demonstrating the system is operating — internal audits, management reviews, corrective actions',
      'Scope statement defining what is being certified'
    ],
    process: [
      { step: 1, title: 'Gap analysis', desc: 'Assess existing practice against the standard' },
      { step: 2, title: 'Documentation', desc: 'Build the manual, procedures, risk plans and records' },
      { step: 3, title: 'Implementation & Training', desc: 'Implementation and training so the system is genuinely in use' },
      { step: 4, title: 'Internal Audit', desc: 'Internal audit and management review' },
      { step: 5, title: 'Certification Audit', desc: 'Certification audit by an accredited third-party certification body, usually in two stages' },
      { step: 6, title: 'Certificate Issued', desc: 'Certificate issued, typically valid three years with annual surveillance audits' }
    ],
    faqs: [
      {
        q: 'Is ISO certification mandatory?',
        a: 'No. It is entirely voluntary. It becomes effectively necessary only when a customer or a tender requires it.'
      },
      {
        q: 'How do I tell a genuine ISO certificate from a fake one?',
        a: "This matters more than anything else on this page. A meaningful certificate is issued by a certification body that is itself accredited — in India by NABCB, or by a foreign accreditation body that is a signatory to the IAF multilateral arrangement. Check three things: the certification body's accreditation status on the accreditation body's own website; whether an actual audit took place; and whether the certificate carries the accreditation mark. A certificate issued in twenty-four hours without an audit is worthless, and will be rejected by any serious procurement team."
      },
      {
        q: 'How long does real certification take?',
        a: 'For a small organisation starting from scratch, typically a few months, because the system must be documented, implemented and running before the audit can produce evidence.'
      },
      {
        q: 'Is ISO 9001 certification the same as product quality certification?',
        a: 'No. ISO 9001 certifies your management processes, not your product. Product conformity is BIS, CE or a sector-specific standard.'
      },
      {
        q: 'Does the certificate need renewal?',
        a: 'The certification cycle is generally three years, with surveillance audits in between and a recertification audit at the end.'
      }
    ]
  }
};
