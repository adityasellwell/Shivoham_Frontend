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
    shortDescription: 'Secure exclusive rights to your brand name, logo, slogan, or sound.',
    fullDescription: 'A trademark registration gives you a nationwide monopoly over your brand identity, preventing competitors from using similar names, logos, taglines, or packaging that could confuse customers. At Shivoham & Associates, we manage the complete lifecycle from trademark search, class selection, filing, to handling trademark objections.',
    benefits: [
      'Exclusive brand ownership and protection against copycats',
      'Asset creation - trademarks are intangible assets that can be sold, franchised, or licensed',
      'Builds brand credibility and trust in the marketplace',
      'Legal right to use the ® symbol next to your brand',
      'Provides protection for 10 years and can be renewed indefinitely'
    ],
    documents: [
      'Brand Name /logo',
      'Applicant Name , Email and Contact Details',
      'MSME Certificate / Startup certificate',
      'GST certificate'
    ],
    process: [
      { step: 1, title: 'Trademark Search', desc: 'Comprehensive search across all 45 classes to ensure your brand name/logo is unique and registrable.' },
      { step: 2, title: 'Class Selection', desc: 'Identifying the correct classes matching your business operations.' },
      { step: 3, title: 'Application Filing', desc: 'Preparing and filing Form TM-A with the Trademark Registry. Receive the TM application number instantly.' },
      { step: 4, title: 'Examination & Publication', desc: 'Government examiners review the application. If clean, it is published in the Trademark Journal.' },
      { step: 5, title: 'Registration Certificate', desc: 'If no oppositions are filed within 4 months of publication, the registration certificate is issued.' }
    ],
    faqs: [
      { q: 'What is a trademark class?', a: 'A trademark class is a category defining the types of goods or services your brand represents. There are 45 classes (1 to 34 for goods, 35 to 45 for services).' },
      { q: 'How long does trademark registration take?', a: 'You can use the "TM" symbol instantly upon filing (takes 24-48 hours). The complete process to get the registered ® symbol usually takes 6 to 12 months.' },
      { q: 'What is the validity of a registered trademark?', a: 'A trademark is valid for 10 years from the date of application and can be renewed indefinitely every 10 years.' }
    ]
  },
  'copyright': {
    id: 'copyright',
    categoryId: 'ipr',
    title: 'Copyright Registration',
    shortDescription: 'Protect software, source code, websites, books, brochures, and creative designs.',
    fullDescription: 'Copyright registration protects original literary, dramatic, musical, artistic works, and computer software. It prevents unauthorized duplication, distribution, or adaptation of your proprietary files and codebases. This is highly recommended for tech companies, authors, designers, and creative agencies.',
    benefits: [
      'Legal proof of authorship and ownership of creative/technical assets',
      'Right to sue for damages in case of copyright infringement',
      'Protects computer software and database source codes from theft',
      'Global protection under the Berne Convention in over 170 countries',
      'Ability to license or sell rights for royalities'
    ],
    documents: [
      'Description and three copies of the work',
      'For Software: Source code & Object code (in PDF format)',
      'Identity & Address Proof of the author/applicant',
      'No Objection Certificate (NOC) from publisher or employer (if applicable)'
    ],
    process: [
      { step: 1, title: 'Filing Application', desc: 'Prepare and submit Form XIV online with the Copyright Registry along with copies of the work.' },
      { step: 2, title: 'Diary Number Generation', desc: 'A unique Diary Number is issued instantly upon filing.' },
      { step: 3, title: 'Mandatory Waiting Period', desc: 'A 30-day waiting period is enforced to allow any objections to be filed.' },
      { step: 4, title: 'Scrutiny & Examination', desc: 'Examiners check for objections and compliance. If discrepencies are found, a reply must be submitted.' },
      { step: 5, title: 'Registration Certificate', desc: 'Once cleared, the extract is registered, and the registration certificate is issued.' }
    ],
    faqs: [
      { q: 'Can I copyright my website source code?', a: 'Yes! Software source codes, databases, and website content (HTML/CSS/JS, custom scripts) are protectable under literary works.' },
      { q: 'What is the duration of copyright protection?', a: 'For literary, dramatic, musical, and artistic works, copyright lasts for the lifetime of the author plus 60 years.' }
    ]
  },
  'patent': {
    id: 'patent',
    categoryId: 'ipr',
    title: 'Patent Filing & Registration',
    shortDescription: 'Secure patents for technical inventions, machinery, formulations, and processes.',
    fullDescription: 'A patent is a statutory right granted by the government for an invention that is new, involves an inventive step, and has industrial application. It gives the patentee the exclusive right to exclude others from making, using, selling, or importing the patented invention for 20 years.',
    benefits: [
      'Absolute monopoly over a technological breakthrough or invention',
      'Strong barriers to entry for competitors',
      'Highly valuable business asset that can command premium licensing fees',
      'Increases funding valuation for tech startups',
      'Direct pathway for international expansion via Patent Cooperation Treaty (PCT)'
    ],
    documents: [
      'Patent specifications (description of the invention with drawings/diagrams)',
      'Claims explaining the specific features to be protected',
      'Abstract summarizing the invention technical details',
      'Declaration of inventorship (Form 5) and authorization (Form 26)',
      'Proof of right to apply (if applicant is not the inventor)'
    ],
    process: [
      { step: 1, title: 'Patentability Search', desc: 'Verify that the invention is novel, non-obvious, and has utility by searching global patent databases.' },
      { step: 2, title: 'Drafting Specifications', desc: 'Detailed drafting of patent specifications (Provisional or Complete specification).' },
      { step: 3, title: 'Filing Application', desc: 'Submit application (Form 1) along with specifications to the Patent Office.' },
      { step: 4, title: 'Publication & Examination', desc: 'The application is published after 18 months (can request early publication). Request examination must be filed.' },
      { step: 5, title: 'Grant of Patent', desc: 'Resolve First Examination Report (FER) objections. Once satisfied, the Patent Registry grants the patent.' }
    ],
    faqs: [
      { q: 'What is a provisional patent application?', a: 'A provisional application is filed when an invention is still in the developmental stage. It secures a priority date and gives you 12 months to file a complete specification.' },
      { q: 'How long does a patent last?', a: 'A patent is valid for 20 years from the filing date, subject to payment of annual renewal fees.' }
    ]
  },
  'design': {
    id: 'design',
    categoryId: 'ipr',
    title: 'Industrial Design Registration',
    shortDescription: 'Protect the visual appearance, shapes, and aesthetic appeal of physical products.',
    fullDescription: 'Design registration protects the aesthetic appearance, shape, pattern, configuration, or ornamentation of an industrial article. It does not protect functional aspects, but guarantees that competitors cannot copy the visual structure of products like bottles, electronic casings, furniture, or apparel.',
    benefits: [
      'Protects unique product aesthetics from piracy',
      'Adds market value and makes the product visually distinct',
      'Protects 3D shapes, 2D patterns, and color combinations',
      'Provides a competitive edge in manufacturing and retail sectors'
    ],
    documents: [
      'Four copies of photographs/drawings of the product from all angles (front, back, top, bottom, perspective)',
      'Brief statement of novelty explaining which visual features are unique',
      'Applicant identity details and board resolution (if company)'
    ],
    process: [
      { step: 1, title: 'Aesthetic Search', desc: 'Ensure the visual design has not been registered or published anywhere before.' },
      { step: 2, title: 'Application Preparation', desc: 'Classify the product under the Locarno Classification and compile design views.' },
      { step: 3, title: 'Filing', desc: 'Submit the application to the Patent Office (Design Wing).' },
      { step: 4, title: 'Examination & Correction', desc: 'Respond to objections regarding representation sheets or classification details.' },
      { step: 5, title: 'Registration & Publication', desc: 'Once approved, the design is registered and published in the Official Journal, valid for 10 years (extendable by 5 years).' }
    ],
    faqs: [
      { q: 'Does design registration protect functionality?', a: 'No. Design registration only protects the external look and feel (aesthetics). Functionality must be protected under a patent.' }
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
    shortDescription: 'Easiest business structure managed and owned by a single individual.',
    fullDescription: 'A Sole Proprietorship is the simplest business structure in India. It is owned, managed, and controlled by a single person. There is no separate legal distinction between the owner and the business, making it ideal for micro-retailers, freelancers, and small local traders.',
    benefits: [
      'Minimal setup costs and quick incorporation',
      'Fewer statutory compliances compared to companies',
      'Complete control over business operations and profits',
      'Easy to close or dissolve'
    ],
    documents: [
      'PAN Card and Aadhaar Card of the proprietor',
      'Utility bill of business premises (electricity/landline)',
      'NOC from property owner (if rented premises)',
      'Bank statement/cancelled check'
    ],
    process: [
      { step: 1, title: 'Select Business Name', desc: 'Choose a unique name for your trading operations.' },
      { step: 2, title: 'Apply for Licenses', desc: 'Apply for Udyam registration and Shop Act / Gumasta license to establish business proof.' },
      { step: 3, title: 'GST Registration', desc: 'Apply for GST registration if operating inter-state or crossing threshold limits.' },
      { step: 4, title: 'Open Bank Account', desc: 'Submit business proofs (GST/Gumasta) to open a current account.' }
    ],
    faqs: [
      { q: 'Is there a separate PAN card for proprietorship?', a: 'No. The business runs on the proprietor\'s personal PAN card. Tax filings are done under individual income tax slabs.' }
    ]
  },
  'partnership-firm': {
    id: 'partnership-firm',
    categoryId: 'company-formation',
    title: 'Partnership Firm Registration',
    shortDescription: 'Register a business owned by two or more partners under a Partnership Deed.',
    fullDescription: 'A Partnership Firm is a business structure where two or more individuals manage a business in accordance with the terms set out in a Partnership Deed. While registration is optional, registering a partnership deed is highly recommended to enforce legal rights.',
    benefits: [
      'Easy to start with a written agreement (Partnership Deed)',
      'Combined capital and diverse skills of multiple partners',
      'Shared responsibilities and liabilities',
      'Relatively low compliance overhead'
    ],
    documents: [
      'PAN Card and Aadhaar Card of all partners',
      'Partnership Deed drafted and printed on stamp paper',
      'Address proof of the firm premises',
      'NOC from landlord'
    ],
    process: [
      { step: 1, title: 'Drafting Partnership Deed', desc: 'Draft deed specifying profit-sharing ratios, capital contributions, and operational rules.' },
      { step: 2, title: 'Deed Registration', desc: 'Register the deed with the Registrar of Firms (ROF) in your state.' },
      { step: 3, title: 'Firm PAN Card', desc: 'Apply for a dedicated Permanent Account Number (PAN) in the name of the firm.' },
      { step: 4, title: 'Tax & License Registration', desc: 'Obtain GST, Shop Act/Gumasta, and open bank current account.' }
    ],
    faqs: [
      { q: 'Is registration of partnership compulsory?', a: 'In India, it is optional under the Partnership Act, but unregistered firms cannot sue third parties or partners in court.' }
    ]
  },
  'opc': {
    id: 'opc',
    categoryId: 'company-formation',
    title: 'One Person Company (OPC)',
    shortDescription: 'Combine limited liability protection with solo business ownership.',
    fullDescription: 'A One Person Company (OPC) allows a single entrepreneur to operate a corporate entity. It offers limited liability protection, a separate legal identity, and perpetual succession, similar to a Private Limited company, without requiring a second director/shareholder.',
    benefits: [
      'Limited liability protection for the solo promoter',
      'Separate legal entity status improves business credibility',
      'No minimum capital requirement',
      'Exempt from certain administrative compliances of private companies'
    ],
    documents: [
      'PAN Card and Aadhaar of Director & Nominee',
      'Identity Proof (Passport/Voter ID/Driving License)',
      'Address Proof (Bank Statement/Electricity Bill not older than 2 months)',
      'Registered office address proof (Electricity bill + Landlord NOC)'
    ],
    process: [
      { step: 1, title: 'Apply for DSC', desc: 'Obtain Digital Signature Certificate (DSC) for the director.' },
      { step: 2, title: 'Name Approval', desc: 'Apply for name reservation via SPICe+ Part A on MCA portal.' },
      { step: 3, title: 'Filing SPICe+ Form', desc: 'Submit incorporation application with MOA, AOA, and Nominee consent.' },
      { step: 4, title: 'Certificate of Incorporation', desc: 'MCA reviews and issues Certificate of Incorporation along with PAN and TAN.' }
    ],
    faqs: [
      { q: 'Who is a nominee in an OPC?', a: 'A nominee is an individual who becomes the shareholder of the OPC in the event of the death or incapacity of the sole director.' }
    ]
  },
  'llp': {
    id: 'llp',
    categoryId: 'company-formation',
    title: 'Limited Liability Partnership (LLP)',
    shortDescription: 'Ideal for professional services combining partnership flexibility with limited liability.',
    fullDescription: 'An LLP is an alternative corporate business form that gives the benefits of limited liability of a company and the flexibility of a partnership. No partner is liable on account of the unauthorized or independent actions of other partners, shielding personal assets.',
    benefits: [
      'Limited liability for all partners',
      'Separate legal entity status',
      'Fewer compliance regulations compared to Private Limited companies',
      'No corporate tax on distributed profits (no Dividend Distribution Tax)'
    ],
    documents: [
      'PAN and Aadhaar of all partners (minimum 2)',
      'Identity and Address Proofs of partners (Bank Statement, Voter ID/Passport)',
      'Registered office address proof (utility bill + NOC)'
    ],
    process: [
      { step: 1, title: 'DSC Acquisition', desc: 'Obtain DSC for all designated partners.' },
      { step: 2, title: 'Name Reservation', desc: 'Reserve name through RUN-LLP application on MCA portal.' },
      { step: 3, title: 'Incorporation Form', desc: 'File FiLLiP form for incorporation with MCA.' },
      { step: 4, title: 'Drafting & Filing Agreement', desc: 'Prepare LLP Agreement specifying capital contribution, roles, and submit Form-3 within 30 days.' }
    ],
    faqs: [
      { q: 'Is there a minimum capital required to start an LLP?', a: 'No, there is no minimum capital requirement. Partners can contribute cash, assets, or services.' }
    ]
  },
  'private-limited': {
    id: 'private-limited',
    categoryId: 'company-formation',
    title: 'Private Limited Company Registration',
    shortDescription: 'Highly credible corporate structure, mandatory for venture capital and scaling.',
    fullDescription: 'A Private Limited Company is the most popular corporate structure for businesses looking to scale, hire talent, and raise external funding. It requires a minimum of 2 directors/shareholders and limits shareholder liability to the value of their shares.',
    benefits: [
      'High credibility with banks, vendors, and clients',
      'Allows raising venture capital, seed funds, or issuing ESOPs to employees',
      'Easy transferability of shares and perpetual succession',
      'Separate legal asset protection'
    ],
    documents: [
      'PAN Card & Aadhaar of all directors/shareholders (minimum 2)',
      'Voter ID/Passport/Driving License of directors',
      'Bank statement/electricity bill (directors\' address proof, under 2 months old)',
      'Company address proof (Utility bill + Rent agreement + NOC)'
    ],
    process: [
      { step: 1, title: 'DSC Setup', desc: 'Acquire Digital Signature Certificates (DSC) for all directors.' },
      { step: 2, title: 'Name Reservation', desc: 'Reserve company name via SPICe+ Part A.' },
      { step: 3, title: 'Incorporation Filing', desc: 'File SPICe+ Part B along with MOA, AOA, AGILE-PRO-S (for GST, EPFO, ESIC registration).' },
      { step: 4, title: 'Approval', desc: 'Ministry of Corporate Affairs (MCA) reviews and issues Certificate of Incorporation (COI), PAN, and TAN.' }
    ],
    faqs: [
      { q: 'Can a foreign national be a director in a Private Limited company?', a: 'Yes, a foreign national can be a director and shareholder, but at least one director must be a resident of India.' }
    ]
  },
  'ngo': {
    id: 'ngo',
    categoryId: 'company-formation',
    title: 'NGO / Trust Incorporation',
    shortDescription: 'Incorporate non-profits, trusts, or Section 8 companies for social welfare.',
    fullDescription: 'Incorporation services for social welfare organizations. We assist in registering Public Charitable Trusts, Societies, and Section 8 (non-profit) Companies, helping you secure tax exemptions under sections 12A and 80G.',
    benefits: [
      'Eligible for government and CSR grants',
      'Tax exemptions for donors under Section 80G',
      'Tax exemptions on corporate income under Section 12A',
      'Separate legal identity (specifically for Section 8 companies)'
    ],
    documents: [
      'Identity and Address Proof of promoters/trustees (minimum 3 for society/trust, 2 for Section 8)',
      'Objectives of the social/charitable work',
      'Registered address proof'
    ],
    process: [
      { step: 1, title: 'Choose NGO Form', desc: 'Select trust, society, or Section 8 company structure based on scale.' },
      { step: 2, title: 'Drafting Documents', desc: 'Draft Trust Deed, Memorandum of Association (MOA), and Rules/Regulations.' },
      { step: 3, title: 'Registration Filing', desc: 'File registration application with the Charity Commissioner (for Trust/Society) or MCA (for Section 8).' },
      { step: 4, title: 'Tax Exemptions', desc: 'Apply for 12A/80G status to unlock tax-free donations.' }
    ],
    faqs: [
      { q: 'What is a Section 8 Company?', a: 'It is a company registered under the Companies Act for promoting charity, arts, science, or sports, where all profits are reinvested in social objectives.' }
    ]
  },

  // --- LICENSES & COMPLIANCE ---
  'msme-udyam': {
    id: 'msme-udyam',
    categoryId: 'licenses',
    title: 'MSME Udyam Registration',
    shortDescription: 'Unlock government subsidies, credit guarantees, and delayed payment protections.',
    fullDescription: 'MSME Udyam is a government registration portal for micro, small, and medium enterprises. It classifies businesses based on investment and turnover, granting access to subsidized loans, priority sector lending, and protective trade rules.',
    benefits: [
      'Collateral-free loans and lower interest rates from banks',
      'Strict legal protection against delayed payments (mandatory interest for defaults)',
      'Subsidies on patent/trademark filing fees (up to 50%)',
      'Exemptions on electricity bills and government tender applications'
    ],
    documents: [
      'Aadhaar Card of the proprietor/director (linked to mobile)',
      'PAN Card of the business',
      'Bank account details and IFSC code',
      'GSTIN (if applicable)',
      'Investment & Turnover figures'
    ],
    process: [
      { step: 1, title: 'Aadhaar Verification', desc: 'OTP verification via applicant\'s Aadhaar card.' },
      { step: 2, title: 'PAN Validation', desc: 'Validate PAN card details with CBDT database.' },
      { step: 3, title: 'Fill Business Details', desc: 'Input employment count, bank accounts, NIC activity codes, and investment ranges.' },
      { step: 4, title: 'Udyam Certificate Download', desc: 'Generate and instantly download the Udyam Registration Certificate.' }
    ],
    faqs: [
      { q: 'Is there any registration fee for MSME Udyam?', a: 'No, the government portal does not charge registration fees. It is completely paperless and free.' }
    ]
  },
  'gst': {
    id: 'gst',
    categoryId: 'licenses',
    title: 'GST Registration & Filing',
    shortDescription: 'Indirect tax registration mandatory for businesses operating inter-state or scaling turnover.',
    fullDescription: 'Goods and Services Tax (GST) is a unified indirect tax structure in India. Registration is mandatory for manufacturing/trading businesses with turnover > ₹40 lakhs (₹20 lakhs for services) or any business executing e-commerce and inter-state transactions.',
    benefits: [
      'Legal authorization to collect tax and pass on Input Tax Credit (ITC)',
      'Enables seamless inter-state transactions',
      'Mandatory for selling products on e-commerce platforms like Amazon/Flipkart',
      'Improves credit eligibility and credibility'
    ],
    documents: [
      'PAN Card and Aadhaar of the applicant',
      'Business address proof (Electricity bill + NOC/Rent agreement)',
      'Bank statement or cancelled check',
      'Authorization letter (for partnerships and companies)'
    ],
    process: [
      { step: 1, title: 'Apply TRN', desc: 'Submit PAN, mobile, and email to receive Temporary Reference Number (TRN).' },
      { step: 2, title: 'Submit Details', desc: 'Upload address proofs, business constitution details, and promoter photos.' },
      { step: 3, title: 'Aadhaar Authentication', desc: 'Execute instant Aadhaar e-KYC validation via SMS link.' },
      { step: 4, title: 'GSTIN Issuance', desc: 'Government officer reviews details. Approved certificate (Form GST REG-06) is issued online.' }
    ],
    faqs: [
      { q: 'Is GST registration mandatory for service providers?', a: 'Yes, if your annual service turnover exceeds ₹20 Lakhs (₹10 Lakhs for special category states), or if you do inter-state sales.' }
    ]
  },
  'dsc': {
    id: 'dsc',
    categoryId: 'licenses',
    title: 'Digital Signature Certificate (DSC)',
    shortDescription: 'Acquire secure Class 3 USB tokens for corporate and tax filing.',
    fullDescription: 'A Digital Signature Certificate (DSC) is a secure digital key issued by certifying authorities to validate the identity of the holder. It is legally recognized on par with physical signatures and is mandatory for income tax, GST, and MCA filings.',
    benefits: [
      'High cryptographic security preventing forgery of documents',
      'Mandatory for incorporating companies, e-tendering, and filing taxes',
      'Saves time by enabling paperless digital signatures on PDF files'
    ],
    documents: [
      'Aadhaar Card copy',
      'PAN Card copy',
      'Passport size photograph of the applicant',
      'Active mobile number and email address'
    ],
    process: [
      { step: 1, title: 'Form Submission', desc: 'Apply online and fill applicant details.' },
      { step: 2, title: 'Video Verification', desc: 'Record a quick 20-second selfie video reading a statement for identity verification.' },
      { step: 3, title: 'OTP Approvals', desc: 'Verify email and mobile via OTP links.' },
      { step: 4, title: 'USB Token Dispatch', desc: 'The Class 3 cryptographic certificate is written onto a secure USB token and delivered.' }
    ],
    faqs: [
      { q: 'What is Class 3 DSC?', a: 'Class 3 is the highest security standard for DSC, mandatory for e-tendering, trademark filing, and company registration.' }
    ]
  },
  'iec': {
    id: 'iec',
    categoryId: 'licenses',
    title: 'Import Export Code (IEC)',
    shortDescription: 'Mandatory registration issued by DGFT for international trading.',
    fullDescription: 'Import Export Code (IEC) is a 10-digit registration code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. It is mandatory for any Indian business importing goods or services, clearing custom shipments, and receiving foreign remittances.',
    benefits: [
      'Unlock global markets for importing and exporting products',
      'Lifetime validity - no renewals required',
      'Required to claim export subsidies and duty drawbacks from customs',
      'Enables opening bank accounts handling foreign currencies'
    ],
    documents: [
      'PAN Card of individual or business entity',
      'Aadhaar / Passport details of applicant',
      'Cancelled check of current bank account showing firm name',
      'Address proof of the business premises'
    ],
    process: [
      { step: 1, title: 'DGFT Portal Access', desc: 'Register and authenticate on the official DGFT portal.' },
      { step: 2, title: 'Form ANF-2A Filling', desc: 'Submit application detailing business activities, bank details, and promoters.' },
      { step: 3, title: 'Upload Proofs', desc: 'Upload bank cancelled check and address proofs in PDF/JPEG.' },
      { step: 4, title: 'E-payment & Approval', desc: 'Pay government application fee. The system automatically issues the e-IEC certificate.' }
    ],
    faqs: [
      { q: 'Does IEC require filing monthly returns?', a: 'No, IEC has no return filing compliances. Once issued, it is valid for a lifetime.' }
    ]
  },
  'shop-act-gumasta': {
    id: 'shop-act-gumasta',
    categoryId: 'licenses',
    title: 'Shop Act & Gumasta License',
    shortDescription: 'Mandatory commercial establishment license for operating in Maharashtra.',
    fullDescription: 'Shop Act, also known as Gumasta License in Maharashtra, is a mandatory registration under the Maharashtra Shops and Establishment Act. It regulates working hours, employee leaves, and is the key document required to open commercial bank current accounts in Mumbai/Dadar.',
    benefits: [
      'Allows legal operation of a shop, office, or commercial center',
      'Required by banks to establish a business current account',
      'Ensures compliance with state labor and safety guidelines'
    ],
    documents: [
      'PAN and Aadhaar Card of the proprietor/directors',
      'Photograph of the shop/office showing the name board in Marathi & English',
      'Partnership Deed or Incorporation Certificate (if applicable)',
      'Rent agreement and electricity bill of premises'
    ],
    process: [
      { step: 1, title: 'Aaple Sarkar Filing', desc: 'Create applicant profile on the Maharashtra Aaple Sarkar portal.' },
      {
        step: 2, title: 'Application Submission', desc: 'Fill establishment details: employee counts, business nature, name board.',
        note: 'Establishments with < 10 employees receive Intimation Receipt, while > 10 employees receive regular License.'
      },
      { step: 3, title: 'Fees Payment', desc: 'Pay state government processing fees.' },
      { step: 4, title: 'License Download', desc: 'Upon verification of the Marathi sign board and proofs, download the approved license.' }
    ],
    faqs: [
      { q: 'What is the sign board rule in Mumbai?', a: 'The shop name board must be written in Marathi script (Devanagari) alongside English, with Marathi having equal or prominent lettering.' }
    ]
  },
  'fssai-health-fire': {
    id: 'fssai-health-fire',
    categoryId: 'licenses',
    title: 'FSSAI, Health & Fire Licenses',
    shortDescription: 'Essential food safety, fire protection clearances, and municipal health permits.',
    fullDescription: 'Specialized regulatory licensing for restaurants, cafes, hotels, manufacturing units, and corporate hubs. We secure food safety registration (FSSAI), municipal health trade licenses (MCH), and Fire safety NOCs.',
    benefits: [
      'FSSAI certificate is mandatory to sell food items or list on food delivery apps (Zomato, Swiggy)',
      'Ensures customer trust in food quality and safety',
      'Fire NOC ensures property protection and legal safety compliance',
      'Mitigates risk of municipal closures and penalties'
    ],
    documents: [
      'Applicant PAN and Aadhaar Card',
      'Layout blueprint of the kitchen/premises showing exits',
      'Water testing report and employee medical certificates (for FSSAI/Health)',
      'Fire fighting equipment list and installation vendor bill'
    ],
    process: [
      { step: 1, title: 'Determine License Category', desc: 'FSSAI (Registration/State License/Central License) based on production output or turnover.' },
      { step: 2, title: 'Submit Applications', desc: 'File applications on FoSCoS portal (FSSAI) and local fire/municipal portals.' },
      { step: 3, title: 'Inspection Phase', desc: 'Municipal/Fire department officers inspect the premises to check sanitation and fire escape paths.' },
      { step: 4, title: 'Issuance', desc: 'Clear inspections and receive the legal permits and safety NOC certificates.' }
    ],
    faqs: [
      { q: 'Who needs FSSAI Central License?', a: 'Food businesses with turnover > ₹20 Crores or operating in multiple states, or importing food products.' }
    ]
  },
  'iso-ce-bis': {
    id: 'iso-ce-bis',
    categoryId: 'licenses',
    title: 'ISO, CE & BIS Certifications',
    shortDescription: 'Product quality standards and international certifications.',
    fullDescription: 'Get global and national quality standard seals. We guide businesses in auditing and certifying processes for ISO 9001 (Quality), ISO 27001 (Information Security), CE Marking for European exports, and BIS (Bureau of Indian Standards) ISI mark for domestic product safety.',
    benefits: [
      'Improves product eligibility for government exports and international contracts',
      'Assures buyers of premium manufacturing and security protocols',
      'Builds massive competitive edge in retail and tech sectors'
    ],
    documents: [
      'Company incorporation and PAN details',
      'Description of manufacturing/development process flows',
      'Standard operating manuals and test reports (for BIS/CE)'
    ],
    process: [
      { step: 1, title: 'Gap Analysis', desc: 'Evaluate existing operational protocols against standard requirements.' },
      { step: 2, title: 'System Implementation', desc: 'Formulate quality manuals, risk plans, and train employees.' },
      { step: 3, title: 'Auditing', desc: 'An accredited third-party registrar conducts an audit of the facility.' },
      { step: 4, title: 'Certification Award', desc: 'Correct audit flags to receive the certified ISO, CE, or BIS compliance seal.' }
    ],
    faqs: [
      { q: 'What is ISO 9001?', a: 'The global benchmark for Quality Management Systems, showing a company maintains processes to deliver quality.' }
    ]
  }
};
