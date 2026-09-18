import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, ArrowRight } from 'lucide-react';
import api from '../config/api';
import SEO from '../components/SEO';

const fallbackFaqs = [
  {
    category: 'Trademarks',
    question: 'Is registering my company name the same as registering a trademark?',
    answer: 'No. An MCA name approval only confirms that no other company is registered under that name. It gives you no right to stop another business from using it as a brand. Trademark registration is a separate filing under a different law, and it is the one that creates enforceable rights.'
  },
  {
    category: 'Trademarks',
    question: 'What is the difference between ™ and ®?',
    answer: '™ can be used from the moment you file, and signals a claim to the mark. ® can only be used after registration is granted. Using ® before registration is a punishable offence under Section 107 of the Trade Marks Act.'
  },
  {
    category: 'Trademarks',
    question: 'Which class do I file in, and can one application cover several?',
    answer: 'Classes are decided by what you actually sell, not by your industry label. A clothing brand files in Class 25; a store retailing that clothing falls in Class 35; a café serving food sits in Class 43. A single Form TM-A can cover multiple classes, with the fee charged per class. Multi-class filing keeps everything under one number, but an objection in any one class can hold up the whole application; separate single-class filings cost the same and proceed independently. Note: the Nice Classification 13th edition took effect on 1 January 2026 and changed several headings.'
  },
  {
    category: 'Trademarks',
    question: 'How do I check whether a brand name is already taken?',
    answer: 'A public search on the IP India database is the starting point. It will not catch phonetically similar marks, marks in adjacent classes, or unregistered marks with established prior use — all of which can defeat your application. A search across all 45 classes before filing is the single most cost-effective step, because filing fees are non-refundable.'
  },
  {
    category: 'Trademarks',
    question: 'Can an individual register a trademark, or do I need a company?',
    answer: 'An individual or a sole proprietor can file. No company is required. Individuals also qualify for the lower government fee.'
  },
  {
    category: 'Trademarks',
    question: 'I received a trademark objection. What happens now?',
    answer: 'An objection is not a rejection. Section 9 objections say the mark is descriptive or lacks distinctiveness; Section 11 objections say it conflicts with an existing mark. Either is answered by a written reply within 30 days, supported by evidence of distinctiveness or use. A hearing may follow. There is no government fee for filing the reply or attending the hearing.'
  },
  {
    category: 'Trademarks',
    question: 'Someone opposed my application. What does that mean?',
    answer: 'A third party filed a formal objection within four months of publication. It moves the matter to a contested proceeding with pleadings, evidence and a hearing. Timelines are strict and a missed deadline can result in abandonment.'
  },
  {
    category: 'Trademarks',
    question: 'Do I need to register separately in each state?',
    answer: 'No. One registration covers all of India.'
  },
  {
    category: 'Trademarks',
    question: 'Should I file the name and the logo together or separately?',
    answer: 'Filing the word mark separately gives you rights over the name in any font or styling, which is broader. A combined device mark protects only that specific presentation. Where budget allows, filing both is the stronger position.'
  },
  {
    category: 'Trademarks',
    question: 'Someone is already using my brand name. What can I do?',
    answer: 'It depends on who used it first and who filed first. If you have earlier documented use, you may be able to oppose their application or seek rectification. Gather dated evidence of your use before taking any step.'
  },
  {
    category: 'Trademarks',
    question: 'Is my domain name automatically a trademark?',
    answer: 'No. Registering a domain gives you the right to that URL, nothing more. Domain registrars themselves require a trademark registration before acting on a name-based complaint.'
  },
  {
    category: 'Trademarks',
    question: 'How long is registration valid, and what happens if I miss renewal?',
    answer: 'Ten years from the application date. Renewal is filed on Form TM-R. A mark can be restored within a limited window after expiry on payment of a surcharge; beyond that, it is removed from the register.'
  },
  {
    category: 'Trademarks',
    question: 'Can I sell or license a trademark?',
    answer: 'Yes. A registered trademark can be assigned, licensed or franchised. The transaction should be recorded with the Registry.'
  },
  {
    category: 'Copyright',
    question: 'Copyright exists automatically. Why register at all?',
    answer: 'Copyright arises the moment a work is created, but that is a claim you have to prove. In a dispute, an unregistered author must establish authorship and date from scratch. A registration certificate is prima facie evidence which converts an argument into a document.'
  },
  {
    category: 'Copyright',
    question: 'Should I copyright my logo or trademark it?',
    answer: 'Trademark it. A trademark protects the logo as a brand identifier, which is what you actually need to stop a competitor from using it. Copyright protects the artwork as a creative work and is useful against exact reproduction. Filing both is common; if you file only one, file the trademark.'
  },
  {
    category: 'Copyright',
    question: 'Can I copyright an idea, a concept or a business plan?',
    answer: 'No. Copyright protects the specific form in which an idea is expressed, not the idea. Two people can write about the same concept and each own copyright in their own text. If the value lies in a technical method, the question is whether it is patentable; if it lies in confidential information, the answer is an NDA.'
  },
  {
    category: 'Copyright',
    question: 'Can software source code be registered?',
    answer: 'Yes, as a literary work. Both source code and object code are filed, usually in PDF. This protects the code as written; it does not protect the underlying functionality or algorithm.'
  },
  {
    category: 'Copyright',
    question: 'Who owns work I paid a freelancer to create?',
    answer: 'Not automatically you. Under Section 17, work created by an employee in the course of employment generally vests in the employer, but work commissioned from an independent contractor stays with the contractor unless copyright is assigned in writing. Every design, code and content contract should carry an express assignment clause under Section 19.'
  },
  {
    category: 'Copyright',
    question: 'Someone copied my content on Instagram or YouTube. What can I do?',
    answer: "Start with the platform's copyright complaint process, which usually resolves it fastest. Preserve dated evidence of your original publication first. A registration certificate makes the complaint considerably harder to contest, and is necessary if the matter escalates to a legal notice or a suit."
  },
  {
    category: 'Copyright',
    question: 'Do I need to register each article or photograph separately?',
    answer: 'Each work is a separate registration, though a compilation or a collection published as one work can often be filed together. For continuously produced content, register the substantial pieces rather than every item.'
  },
  {
    category: 'Copyright',
    question: 'How long does protection last?',
    answer: "For literary, dramatic, musical and artistic works, the author's lifetime plus 60 years. For films, sound recordings, photographs and anonymous or pseudonymous works, 60 years from publication."
  },
  {
    category: 'Copyright',
    question: 'Is my Indian registration valid abroad?',
    answer: 'Copyright is recognised in over 180 Berne Convention countries without separate filing. Your Indian registration serves as evidence of authorship in those jurisdictions.'
  },
  {
    category: 'Patents',
    question: 'Can I patent an idea?',
    answer: 'No. A patent requires a worked-out invention that can be described in enough technical detail for a skilled person to reproduce it. If the concept is not yet developed to that point, a provisional application secures your priority date and gives you 12 months to complete it.'
  },
  {
    category: 'Patents',
    question: 'Is software patentable in India?',
    answer: 'A computer programme as such is excluded under Section 3(k). Software becomes patentable where it produces a technical effect beyond the normal working of a computer — improving hardware performance, controlling a physical process, solving a technical problem. A pure business method or algorithm, however implemented, is not patentable. Most software is better protected by copyright in the code and by trade secrecy.'
  },
  {
    category: 'Patents',
    question: 'What is the difference between a provisional and a complete specification?',
    answer: 'A provisional secures the filing date while the invention is still being developed, and costs less. A complete specification, with full claims, must follow within 12 months or the provisional lapses. The 20-year term runs from the provisional filing date.'
  },
  {
    category: 'Patents',
    question: 'I already showed my invention publicly. Have I lost the right to patent it?',
    answer: 'Usually yes. Prior public disclosure destroys novelty. The Act allows narrow exceptions — display at a government-notified exhibition, a paper read before a learned society, or limited public working — each with a strict 12-month window. Never disclose before filing; use an NDA where disclosure is unavoidable.'
  },
  {
    category: 'Patents',
    question: 'Can a business method be patented?',
    answer: 'No. Business methods are expressly excluded under Section 3(k), however innovative.'
  },
  {
    category: 'Patents',
    question: 'What does a patent cost from filing to grant?',
    answer: 'Government fees alone typically run from around ₹15,000 for a startup to significantly more for a large entity, spread across filing, examination, objection responses and renewals. Professional drafting is the larger cost, and it is where value is created — a poorly drafted claim set produces a patent nobody can enforce.'
  },
  {
    category: 'Patents',
    question: 'How do I protect the invention in other countries?',
    answer: 'An Indian filing gives a 12-month priority window. Within it you can file directly in chosen countries, or file a single PCT application which extends the decision point to roughly 30 months. There is no single "international patent"; every patent is granted country by country.'
  },
  {
    category: 'Patents',
    question: 'What is a First Examination Report?',
    answer: "The Controller's written objections on novelty, inventive step, patentability and formalities. It is a normal stage, not a refusal. The application must be put in order for grant within the period prescribed from the FER date."
  },
  {
    category: 'Patents',
    question: 'Do I have to pay anything after the patent is granted?',
    answer: 'Yes. Renewal fees fall due annually from the third year. Missing them causes the patent to lapse, with only a limited restoration window.'
  },
  {
    category: 'Industrial Design',
    question: 'Design, patent or copyright — which applies to my product?',
    answer: 'If the value is in how the product looks, register the design. If it is in how the product works, consider a patent. If it is a standalone artistic creation rather than something applied to a manufactured article, it is copyright. The same product can attract all three, on different aspects.'
  },
  {
    category: 'Industrial Design',
    question: 'Can I register packaging, a bottle shape, or a fabric print?',
    answer: 'Yes, provided the appearance is new and has not been published. Packaging shapes, container forms, textile patterns, jewellery, furniture and footwear are all commonly registered.'
  },
  {
    category: 'Industrial Design',
    question: 'Does design registration cover how the product functions?',
    answer: 'No. Protection is limited to visual appearance. Features dictated purely by function are excluded, and functionality must be protected by a patent.'
  },
  {
    category: 'Industrial Design',
    question: 'Can one application cover multiple classes?',
    answer: 'No. A separate application is required for each Locarno class.'
  },
  {
    category: 'Industrial Design',
    question: 'Do I have to manufacture the product first?',
    answer: 'No. A design can be registered before production begins, as long as it is capable of being applied to an article.'
  },
  {
    category: 'Industrial Design',
    question: 'I have already sold the product. Can I still register the design?',
    answer: 'Prior publication or sale generally destroys novelty and bars registration. File before any public launch, catalogue, trade show or online listing.'
  },
  {
    category: 'Industrial Design',
    question: 'What happens after 15 years?',
    answer: 'The design enters the public domain. There is no further extension.'
  },
  {
    category: 'Company Formation',
    question: 'Is there a "proprietorship registration certificate"?',
    answer: 'No. No single authority issues one. A proprietorship is proved through Udyam registration, a Shop Act licence, a GST certificate and a current account in the business name. Anyone promising you a standalone proprietorship certificate is selling one of these under another label.'
  },
  {
    category: 'Company Formation',
    question: 'Can I use a business name different from my own?',
    answer: 'Yes. You can trade under any name that is not already a registered trademark. Note that a trade name gives you no exclusive rights — protecting the name requires a trademark registration.'
  },
  {
    category: 'Company Formation',
    question: 'How is a proprietorship taxed?',
    answer: 'Business income is added to your personal income and taxed at individual slab rates. There is no separate return for the business; it is reported in your own income tax return.'
  },
  {
    category: 'Company Formation',
    question: 'Can I convert to a Private Limited Company later?',
    answer: 'Yes, and it is common. The conversion involves incorporating a new company and transferring the business as a going concern. Plan it before you take on significant liabilities or contracts.'
  },
  {
    category: 'Company Formation',
    question: 'Do I need a current account, or can I use my savings account?',
    answer: 'Legally you can use a savings account, but banks object to business volumes on personal accounts, and clients frequently refuse to pay into one. A current account under the business name is the practical requirement.'
  },
  {
    category: 'Company Formation',
    question: 'Is registering a partnership firm compulsory?',
    answer: 'Registration is optional under the Act, but an unregistered firm cannot file a suit to enforce a contractual right, and a partner cannot sue the firm or other partners. In practice this means an unregistered firm has no way to recover money a customer refuses to pay. Register.'
  },
  {
    category: 'Company Formation',
    question: 'Partnership Firm or LLP — which should I choose?',
    answer: 'An LLP gives you limited liability and separate legal existence; a partnership firm does not. The trade-off is annual MCA filings for the LLP. If your business carries any meaningful contractual or financial risk, the LLP is the better structure and the extra compliance is worth it.'
  },
  {
    category: 'Company Formation',
    question: 'Can a partnership firm be converted into an LLP or a company?',
    answer: 'Yes, both conversions are provided for. Conversion to an LLP is the more common route (SUBJECT TO CONDITIONS AND APPLICABLE LAWS).'
  },
  {
    category: 'Company Formation',
    question: 'What must the Partnership Deed cover?',
    answer: 'Capital contribution, profit and loss sharing, each partner\'s role and signing authority, salary or interest on capital, the procedure for admitting or retiring a partner, what happens on death, dispute resolution, and dissolution. Vague deeds are the source of most partnership litigation.'
  },
  {
    category: 'Company Formation',
    question: 'How is a partnership firm taxed?',
    answer: 'The firm is taxed as a separate assessee at the firm rate. Partners\' salary and interest on capital are deductible to the firm within prescribed limits, and the share of profit received by a partner is exempt in the partner\'s hands.'
  },
  {
    category: 'Company Formation',
    question: 'Who is a nominee, and what do they actually do?',
    answer: 'An OPC nominee is the person whose name is mentioned in the Memorandum with prior written consent, and who becomes the member of the OPC upon the death or incapacity to contract of the sole member/subscriber. The nominee\'s consent is required to be filed with the Registrar at incorporation.'
  },
  {
    category: 'Company Formation',
    question: 'Do I still have to convert to a Private Limited Company after crossing a turnover limit?',
    answer: 'No. The mandatory conversion thresholds that previously applied were removed with effect from April 2021. Conversion is now voluntary and can be done at any time.'
  },
  {
    category: 'Company Formation',
    question: 'Can an NRI form an OPC?',
    answer: 'Yes. NRIs were permitted to incorporate OPCs from April 2021, and the residency requirement for the member was reduced. Confirm the current residency period before filing.'
  },
  {
    category: 'Company Formation',
    question: 'OPC or Proprietorship — which should I pick?',
    answer: 'The deciding factor is liability. A proprietorship costs less to run but exposes your personal assets completely. An OPC costs more in audit and ROC filings but ring-fences your personal wealth. If your business signs contracts, takes credit, or could face a customer claim, the OPC is the safer structure.'
  },
  {
    category: 'Company Formation',
    question: 'Can an OPC have more than one director?',
    answer: 'Yes. It can have up to fifteen directors. The restriction is on members — there can be only one shareholder — not on directors.'
  },
  {
    category: 'Company Formation',
    question: 'What is the difference between an LLP and a Partnership Firm?',
    answer: 'A partnership firm has no separate legal existence and every partner is personally liable for the firm\'s entire debt, including liabilities created by another partner. An LLP is a separate legal person registered with the MCA, and each partner\'s liability is limited to their contribution. The LLP costs more to maintain but protects personal assets; the partnership firm does not.'
  },
  {
    category: 'Company Formation',
    question: 'Is there a minimum capital requirement for an LLP?',
    answer: 'No. There is no prescribed minimum. Contribution can be any amount agreed among the partners, and may be in cash or in kind.'
  },
  {
    category: 'Company Formation',
    question: 'When does an LLP need a statutory audit?',
    answer: 'Only where turnover exceeds ₹40 lakh or partner contribution exceeds ₹25 lakh in a financial year. Below both thresholds, no statutory audit is required, which is the main compliance saving over a Private Limited Company.'
  },
  {
    category: 'Company Formation',
    question: 'What happens if I forget to file Form 3?',
    answer: 'The LLP Agreement must be filed within 30 days of incorporation. Late filing attracts additional fees, and until it is filed the LLP is governed by the default provisions in the First Schedule to the Act rather than by what the partners actually agreed.'
  },
  {
    category: 'Company Formation',
    question: 'What if my LLP is dormant — do I still have to file?',
    answer: 'Yes. Form 8 and Form 11 must be filed every year even if there was no business activity at all. The ₹100 per day penalty runs per form with no ceiling, and dormant LLPs routinely accumulate penalties running into lakhs before the owners notice. If you are not using the LLP, strike it off rather than leaving it idle.'
  },
  {
    category: 'Company Formation',
    question: 'Can an LLP be converted into a Private Limited Company?',
    answer: 'Yes, and it is a common step when a business decides to raise equity funding.'
  },
  {
    category: 'Company Formation',
    question: 'Is there a minimum capital requirement for a Private Limited Company?',
    answer: 'No. The minimum paid-up capital requirement was removed. You can incorporate with a nominal amount. Keep authorised capital at or below ₹15 lakh to stay within the nil MCA filing fee bracket and to keep stamp duty low.'
  },
  {
    category: 'Company Formation',
    question: 'What is the difference between authorised and paid-up capital?',
    answer: 'Authorised capital is the ceiling up to which the company may issue shares; paid-up capital is what shareholders have actually contributed. Setting a high authorised capital "just in case" raises both your MCA fee and your stamp duty for no benefit — it can be increased later when actually needed.'
  },
  {
    category: 'Company Formation',
    question: 'Can I register a company at my home or residential address?',
    answer: 'Yes. A residential address is acceptable as a registered office, supported by a utility bill and an NOC from the owner. Note that the address becomes part of the public record and that some housing societies restrict commercial use.'
  },
  {
    category: 'Company Formation',
    question: 'Can an NRI or a foreign national be a director or shareholder in a Pvt Ltd?',
    answer: 'Yes, subject to at least one director being resident in India, and to FEMA and sectoral FDI rules for the shareholding. A foreign director requires a passport and apostilled or notarised documents.'
  },
  {
    category: 'Company Formation',
    question: 'What compliances apply after incorporation, and what do they cost every year?',
    answer: 'This is the part most founders underestimate. Every Private Limited Company must, each year, appoint an auditor and have its accounts audited regardless of turnover or activity; hold at least four board meetings and one AGM; file AOC-4 and MGT-7 with the MCA; file its income tax return; and have each director complete DIR-3 KYC. INC-20A is due within 180 days of incorporation. A dormant company with no revenue still carries all of this. Budget for it before you incorporate.'
  },
  {
    category: 'Company Formation',
    question: 'What happens if I don\'t file INC-20A?',
    answer: 'The company cannot legally commence business or borrow money, and the default attracts penalties on both the company and its officers. It can also be a ground for the ROC to strike the company off the register.'
  },
  {
    category: 'Company Formation',
    question: 'Why was my company name rejected?',
    answer: 'Common reasons are similarity to an existing company or LLP name, conflict with a registered trademark, use of a restricted word requiring approval, or a name that does not reflect the stated objects. Check both the MCA name database and the trademark register before applying.'
  },
  {
    category: 'Company Formation',
    question: 'How do I close a company I am no longer using?',
    answer: 'Through a formal strike-off application, or through winding up where liabilities exist. Simply abandoning a company does not end its obligations — filings continue to fall due and penalties accumulate against the directors.'
  },
  {
    category: 'Company Formation',
    question: 'Pvt Ltd or LLP — which should I choose?',
    answer: 'If you will raise equity funding or issue ESOPs, choose Pvt Ltd; nothing else works for that. If you will not, the LLP gives you the same limited liability at a significantly lower annual cost. The honest question is not which is "better" but whether you genuinely intend to raise capital.'
  },
  {
    category: 'Company Formation',
    question: 'Is a Section 8 company the same as a Section 25 company?',
    answer: 'Yes. Section 25 of the Companies Act, 1956 was the earlier provision. It was replaced by Section 8 of the Companies Act, 2013. Companies incorporated under the old Section 25 continue to be valid and are now treated as Section 8 companies.'
  },
  {
    category: 'Company Formation',
    question: 'Section 8 Company, Trust or Society — which should I set up?',
    answer: 'A Section 8 company is the strongest option for CSR funding, institutional grants and multi-state operations, because MCA regulation and public filings give donors confidence. A trust is simplest and cheapest to form and works well for a family-run or locally funded charity. A society suits membership-based organisations with a democratic structure. The trade-off is compliance: the Section 8 company carries the heaviest load and the trust the lightest.'
  },
  {
    category: 'Company Formation',
    question: 'Can directors of a Section 8 company draw a salary?',
    answer: 'Reasonable remuneration for actual services rendered is permissible and must be disclosed. What is prohibited is the distribution of profits or dividends to members.'
  },
  {
    category: 'Company Formation',
    question: 'Does incorporation automatically give tax exemption?',
    answer: 'No. Incorporation and tax exemption are separate. Exemption and donor deduction benefits require a separate application to the Income Tax Department after incorporation.'
  },
  {
    category: 'Company Formation',
    question: 'Is a minimum capital or a minimum donation required for a Section 8 company?',
    answer: 'No minimum capital is prescribed. However, the projected income and expenditure statement filed with the licence application should be realistic, because it forms part of the basis on which the licence is granted.'
  },
  {
    category: 'Company Formation',
    question: 'Trust or Society — what is the practical difference?',
    answer: 'A trust is controlled by a small, largely self-perpetuating board of trustees, which suits a founder who wants continuity of vision. A society is member-based and democratic, with an elected governing body and annual general meetings, which suits an organisation whose members should have a genuine say. Trusts are simpler; societies are more accountable to their members.'
  },
  {
    category: 'Company Formation',
    question: 'Can family members be trustees of the same trust?',
    answer: 'Yes, and it is common in family charities. Note that a trust dominated by related trustees can attract closer scrutiny during tax exemption processing.'
  },
  {
    category: 'Company Formation',
    question: 'Can a trust be dissolved?',
    answer: 'Only in accordance with the Trust Deed and with Charity Commissioner approval. Trust property generally cannot revert to the settlor; it must pass to another trust with similar objects.'
  },
  {
    category: 'Company Formation',
    question: 'Do I need to register the Trust Deed?',
    answer: 'For a public charitable trust holding immovable property, registration of the deed is required. Registration with the Charity Commissioner is separately mandatory in Maharashtra.'
  },
  {
    category: 'Company Formation',
    question: 'Can a trust receive foreign donations?',
    answer: 'Only with FCRA registration or prior permission from the Ministry of Home Affairs.'
  },
  {
    category: 'MSME / Udyam Registration',
    question: 'Is Udyam registration free?',
    answer: 'Yes, completely. The official portal charges no fee and issues the certificate instantly. A large number of look-alike private websites charge several thousand rupees for the same free registration. Always check that the URL ends in .gov.in.'
  },
  {
    category: 'MSME / Udyam Registration',
    question: 'Can a trader register on Udyam?',
    answer: 'The MSMED Act covers manufacturing and service enterprises. Retail and wholesale traders can register on Udyam, but their benefits are limited to priority sector lending rather than the full range of MSME schemes. Confirm the current position before relying on any specific benefit.'
  },
  {
    category: 'MSME / Udyam Registration',
    question: 'I have an old Udyog Aadhaar. Is it still valid?',
    answer: 'No. Udyog Aadhaar registrations ceased to be valid and migration to Udyam was required. If you have not migrated, register afresh on the Udyam portal.'
  },
  {
    category: 'MSME / Udyam Registration',
    question: 'A large customer has not paid me. How do I actually use the MSME protection?',
    answer: 'The MSMED Act sets a maximum payment period and makes interest payable on delay. Enforcement runs through the MSME Samadhaan portal, where a registered MSME can file a delayed payment application against the buyer, which goes to a Micro and Small Enterprise Facilitation Council. The additional pressure point is that the buyer loses the tax deduction for the unpaid amount, so the reference often produces payment before it reaches a hearing.'
  },
  {
    category: 'MSME / Udyam Registration',
    question: 'Do I need GST to register on Udyam?',
    answer: 'Only if you are otherwise required to hold GST registration. If you are below the threshold and not otherwise liable, you can register on Udyam without a GSTIN.'
  },
  {
    category: 'MSME / Udyam Registration',
    question: 'Does the registration expire?',
    answer: 'No. The Udyam number is permanent. Your details must be kept current on the portal, and your category updates automatically as your filed turnover and investment change.'
  },
  {
    category: 'Shop Act / Gumasta License',
    question: 'What exactly is the Marathi signboard rule?',
    answer: "The establishment's name board must be clearly displayed in Marathi in Devanagari script, and the Marathi lettering must be at least as prominent as any other language used. This is enforced by the BMC, and non-compliance attracts penalties. Your registration photograph must show the compliant board."
  },
  {
    category: 'Shop Act / Gumasta License',
    question: 'Do I need Gumasta if I work from home or run a purely online business?',
    answer: 'If you are carrying on commercial activity from a premises in Maharashtra, the registration generally applies, including from a residential address used as an office. In practice, the more immediate driver is that your bank will ask for it before opening a current account.'
  },
  {
    category: 'Shop Act / Gumasta License',
    question: 'What is the difference between an intimation receipt and a licence?',
    answer: 'Establishments below the prescribed employee threshold receive a simpler intimation-based registration; those above it go through the full licensing route. Both serve as proof of registration for banking purposes.'
  },
  {
    category: 'Shop Act / Gumasta License',
    question: 'Is Gumasta the same as a Municipal Trade Licence?',
    answer: 'No. Gumasta is a state labour registration. A BMC trade or health licence is a separate municipal permission required for specific activities such as food service. A restaurant needs both.'
  },
  {
    category: 'Shop Act / Gumasta License',
    question: "What happens if I don't renew on time?",
    answer: 'Late renewal attracts penalties, and an expired registration can create problems with banking and with any municipal licence that depends on it. Track the expiry date.'
  },
  {
    category: 'FSSAI / Food License',
    question: 'I run a home kitchen or cloud kitchen. Do I need FSSAI?',
    answer: 'Yes. Scale determines which category applies, not whether you need one. Most home-based food businesses fall under Basic Registration, and every delivery platform will demand the number before listing you.'
  },
  {
    category: 'FSSAI / Food License',
    question: 'What does Zomato or Swiggy require?',
    answer: 'A valid FSSAI registration or licence covering the exact address you operate from. Platforms verify the number against the FSSAI database, so it must be live and correctly registered.'
  },
  {
    category: 'FSSAI / Food License',
    question: 'How long is the licence valid, and what if I renew late?',
    answer: 'You choose a period of one to five years at application. Renewal must be applied for before expiry. Late renewal attracts a penalty for each day of delay, which accumulates quickly.'
  },
  {
    category: 'FSSAI / Food License',
    question: 'Do I have to display the licence number?',
    answer: 'Yes. It must be displayed prominently at the premises and printed on food packaging and bills. This is checked during inspection.'
  },
  {
    category: 'FSSAI / Food License',
    question: 'Who needs a Central Licence?',
    answer: 'Businesses above the ₹20 crore turnover mark, importers and exporters, businesses operating in more than one state, and suppliers to central government agencies.'
  },
  {
    category: 'FSSAI / Food License',
    question: 'Is FSSAI the same as a BMC health licence or a fire NOC?',
    answer: 'No. A restaurant in Mumbai typically needs FSSAI and a BMC health trade licence and a fire NOC and Gumasta. They are issued by different authorities under different laws and must be obtained in sequence.'
  },
  {
    category: 'FSSAI / Food License',
    question: 'Is a trained food safety supervisor required?',
    answer: 'For several categories, yes, under the FoSTaC training framework. Confirm whether your category is covered.'
  },
  {
    category: 'Import Export Code (IEC)',
    question: 'Do I need an IEC to export services?',
    answer: 'For most service exports there is no customs clearance, so an IEC is not required simply to receive payment. You do need one to claim DGFT export incentives, and banks often ask for it when processing larger inward remittances. Software exporters may separately have SOFTEX obligations.'
  },
  {
    category: 'Import Export Code (IEC)',
    question: 'Do I have to file returns for my IEC?',
    answer: 'There is no monthly or quarterly return. The only recurring obligation is the annual April-to-June confirmation, and it is mandatory.'
  },
  {
    category: 'Import Export Code (IEC)',
    question: 'My IEC has been deactivated. What now?',
    answer: 'Log in to the DGFT portal and complete the pending update with proper authentication. The IEC is generally reactivated immediately.'
  },
  {
    category: 'Import Export Code (IEC)',
    question: 'Is my IEC the same as my PAN?',
    answer: 'The IEC is issued against your PAN and mirrors it, but holding a PAN does not mean you hold an IEC. You must still apply. If you convert from a proprietorship to a company, the company needs a fresh IEC under its own PAN — the old one does not carry over.'
  },
  {
    category: 'Import Export Code (IEC)',
    question: 'What is an AD Code and do I need one?',
    answer: 'An Authorised Dealer Code links your bank to the customs port. You obtain an AD Code letter from your bank and register it at each port you ship through. Without it, shipping bills cannot be filed.'
  },
  {
    category: 'Import Export Code (IEC)',
    question: 'Should I surrender my IEC if I stop trading?',
    answer: 'Yes. An unused IEC still requires the annual update, and a long-deactivated IEC attached to your PAN can complicate later applications for credit facilities and other registrations.'
  },
  {
    category: 'GST Registration & Filing',
    question: 'Is GST registration mandatory for a small business?',
    answer: 'Only above the threshold — ₹40 lakh for goods, ₹20 lakh for services — unless you sell inter-state, sell through an e-commerce platform, or fall into one of the compulsory categories. Below the threshold it is optional.'
  },
  {
    category: 'GST Registration & Filing',
    question: "Should I register voluntarily if I'm below the threshold?",
    answer: 'It depends on who your customers are. If you sell to registered businesses, they will want a tax invoice so they can claim credit, and being unregistered can cost you the work. If you sell to consumers, voluntary registration adds compliance and a return-filing obligation for little gain.'
  },
  {
    category: 'GST Registration & Filing',
    question: 'Can I get GST registration at a residential address?',
    answer: 'Yes. A residential address is acceptable with a valid electricity bill and an NOC from the owner, or a rent agreement.'
  },
  {
    category: 'GST Registration & Filing',
    question: 'Do I need separate registration in each state?',
    answer: 'Yes. GST is state-specific. A separate registration is required for each state from which you make taxable supplies.'
  },
  {
    category: 'GST Registration & Filing',
    question: 'Do freelancers need GST?',
    answer: 'Only above the ₹20 lakh services threshold, or if supplying inter-state. Note that service exports are zero-rated but not exempt — an exporter who is registered should file a Letter of Undertaking (LUT) to export without paying IGST.'
  },
  {
    category: 'GST Registration & Filing',
    question: 'Is GST compulsory if I sell on Amazon or Flipkart?',
    answer: 'For most sellers, yes, regardless of turnover. Confirm your position, since limited relaxations exist for certain intra-state suppliers.'
  },
  {
    category: 'GST Registration & Filing',
    question: 'What returns do I have to file, and what happens if I miss them?',
    answer: 'GSTR-1 and GSTR-3B, monthly or quarterly under the QRMP scheme, plus the annual return where applicable. Late filing attracts late fees per return per day plus interest, and continued non-filing can lead to suspension and cancellation of the registration.'
  },
  {
    category: 'GST Registration & Filing',
    question: 'What is the composition scheme, and should I opt in?',
    answer: 'A simplified scheme with a lower fixed rate and quarterly payment. The trade-off is that you cannot collect GST from customers or claim input tax credit, and you cannot make inter-state supplies. It suits small B2C businesses; it is usually wrong for B2B.'
  },
  {
    category: 'ISO Certification',
    question: 'Is ISO certification mandatory?',
    answer: 'No. It is entirely voluntary. It becomes effectively necessary only when a customer or a tender requires it.'
  },
  {
    category: 'ISO Certification',
    question: 'How do I tell a genuine ISO certificate from a fake one?',
    answer: "This matters more than anything else on this page. A meaningful certificate is issued by a certification body that is itself accredited — in India by NABCB, or by a foreign accreditation body that is a signatory to the IAF multilateral arrangement. Check three things: the certification body's accreditation status on the accreditation body's own website; whether an actual audit took place; and whether the certificate carries the accreditation mark. A certificate issued in twenty-four hours without an audit is worthless, and will be rejected by any serious procurement team."
  },
  {
    category: 'ISO Certification',
    question: 'How long does real certification take?',
    answer: 'For a small organisation starting from scratch, typically a few months, because the system must be documented, implemented and running before the audit can produce evidence.'
  },
  {
    category: 'ISO Certification',
    question: 'Is ISO 9001 certification the same as product quality certification?',
    answer: 'No. ISO 9001 certifies your management processes, not your product. Product conformity is BIS, CE or a sector-specific standard.'
  },
  {
    category: 'ISO Certification',
    question: 'Does the certificate need renewal?',
    answer: 'The certification cycle is generally three years, with surveillance audits in between and a recertification audit at the end.'
  },
  {
    category: 'Digital Signature Certificate (DSC)',
    question: 'Which class of DSC do I need?',
    answer: 'Class 3. It is the only class currently issued, and it is what MCA, GST, income tax, IP India and e-tendering portals all require.'
  },
  {
    category: 'Digital Signature Certificate (DSC)',
    question: 'Can I use one DSC across MCA, GST, income tax and IP India?',
    answer: 'Yes. A single Class 3 signature certificate in your name works across portals, provided it is registered on each portal against your profile.'
  },
  {
    category: 'Digital Signature Certificate (DSC)',
    question: 'What is the video verification step?',
    answer: 'A short recorded video in which you read a prescribed statement, used to confirm identity. It is mandatory and cannot be skipped.'
  },
  {
    category: 'Digital Signature Certificate (DSC)',
    question: 'Can I keep the DSC as a file on my computer?',
    answer: 'No. It must be stored on a secure crypto token. Storing it as a plain file is not permitted, and sharing a token with another person defeats the legal basis of the signature — the holder remains accountable for anything signed with it.'
  },
  {
    category: 'Digital Signature Certificate (DSC)',
    question: 'What happens when my DSC expires?',
    answer: 'Filings cannot be signed once it expires. It cannot be extended; a fresh certificate must be issued, though the same token can usually be reused. Track the expiry, especially before an approaching MCA or tax deadline.'
  },
  {
    category: 'DPIIT Startup Recognition',
    question: 'Does DPIIT recognition automatically give me a tax exemption?',
    answer: 'No, and this is the most common misunderstanding. Recognition gives you the IP, procurement and self-certification benefits. The income tax holiday requires a further, separately assessed application to the Inter-Ministerial Board, and approval rates are considerably lower.'
  },
  {
    category: 'DPIIT Startup Recognition',
    question: 'Can a proprietorship get DPIIT recognition?',
    answer: 'No. Only a Private Limited Company, an LLP or a Registered Partnership Firm is eligible. A proprietorship must convert first.'
  },
  {
    category: 'DPIIT Startup Recognition',
    question: 'What counts as "innovative"?',
    answer: 'The write-up should show what problem you solve, why the approach differs from what already exists, and how the model scales. A conventional trading, reselling or services business without a differentiating element is unlikely to be recognised.'
  },
  {
    category: 'DPIIT Startup Recognition',
    question: 'What happened to the angel tax exemption?',
    answer: 'The angel tax provision that DPIIT recognition used to protect startups from was abolished with effect from April 2025, so that particular benefit no longer needs to be claimed. Confirm the current position before relying on it either way.'
  },
  {
    category: 'DPIIT Startup Recognition',
    question: 'Does recognition expire?',
    answer: 'It runs up to ten years from incorporation, and lapses earlier if turnover crosses ₹100 crore in any year.'
  },
  {
    category: 'CE Marking Certification',
    question: 'Who issues a CE marking?',
    answer: "Nobody. For most product categories the manufacturer self-declares, backed by the technical file and the Declaration of Conformity. For higher-risk categories a Notified Body must be involved in the assessment, but the declaration remains the manufacturer's."
  },
  {
    category: 'CE Marking Certification',
    question: 'Do I need a representative inside the EU?',
    answer: 'For many product categories, an EU-established Authorised Representative or Responsible Person is required for a manufacturer outside the EU, and their details must appear on the product or packaging. Check the requirement for your specific category.'
  },
  {
    category: 'CE Marking Certification',
    question: 'Is CE marking the same as ISO certification?',
    answer: 'No. ISO certifies your management system and is voluntary. CE marking is a mandatory legal requirement for covered products entering the EU market.'
  },
  {
    category: 'CE Marking Certification',
    question: 'Does CE marking cover the UK?',
    answer: "Great Britain operates its own UKCA marking regime. Northern Ireland's position differs. Verify the current requirement before shipping."
  },
  {
    category: 'CE Marking Certification',
    question: 'What happens if I affix CE marking without the technical file?',
    answer: 'It is a serious regulatory offence in the EU. Products can be withdrawn from the market, importers and distributors face liability, and penalties apply. The file must exist and be retainable.'
  },
  {
    category: 'Bureau of Indian Standards (BIS)',
    question: 'Is BIS certification mandatory for my product?',
    answer: 'Only if a Quality Control Order has been notified for that product category. The list expands regularly, so check the current notified list rather than relying on older information.'
  },
  {
    category: 'Bureau of Indian Standards (BIS)',
    question: 'What is the difference between the ISI mark and CRS registration?',
    answer: 'The ISI mark under Scheme I involves factory inspection and ongoing surveillance and applies to a broad range of products. CRS under Scheme II is primarily for electronics and IT goods, is based on laboratory testing followed by registration, and does not ordinarily involve factory inspection.'
  },
  {
    category: 'Bureau of Indian Standards (BIS)',
    question: 'Can a foreign manufacturer obtain BIS certification?',
    answer: 'Yes, through the Foreign Manufacturers Certification Scheme, which requires an Authorised Indian Representative.'
  },
  {
    category: 'Bureau of Indian Standards (BIS)',
    question: 'Is BIS the same as ISO?',
    answer: 'No. BIS is an Indian product certification, often legally mandatory. ISO is a voluntary international management system standard. They are not substitutes.'
  },
  {
    category: 'Bureau of Indian Standards (BIS)',
    question: 'What happens if I sell a notified product without BIS certification?',
    answer: 'Sale of a product requiring certification without it is an offence under the BIS Act, exposing you to seizure, penalty and prosecution. Marketplaces also delist non-compliant listings.'
  },
  {
    category: 'Professional Tax (PTEC & PTRC)',
    question: 'Do I need PTEC, PTRC, or both?',
    answer: 'If you have no employees, you need only PTEC. If you pay salaries above the threshold, you need PTRC as well. Companies and LLPs generally need both from the outset.'
  },
  {
    category: 'Professional Tax (PTEC & PTRC)',
    question: 'I am a salaried employee. Do I need to register?',
    answer: 'No. Your employer deducts and deposits it under their PTRC. You need a PTEC only if you have a separate professional or business income.'
  },
  {
    category: 'Professional Tax (PTEC & PTRC)',
    question: 'I am a director of three companies. Do I pay three times?',
    answer: 'No. The PTEC liability attaches to the individual, and a single certificate covers you regardless of how many directorships or partnerships you hold.'
  },
  {
    category: 'Professional Tax (PTEC & PTRC)',
    question: 'My firm has partners. Who pays?',
    answer: 'A partnership firm or LLP is not itself enrolled as an entity for PTEC in the ordinary case; instead each partner is individually liable. A firm with three partners therefore has three liabilities.'
  },
  {
    category: 'Professional Tax (PTEC & PTRC)',
    question: 'What are the penalties for missing this?',
    answer: 'Late registration attracts a daily penalty, late returns a fixed penalty per return, and unpaid tax carries monthly interest plus a penalty. Because the amounts are small, PT is the registration businesses most often neglect — and the penalties on a few years of neglect regularly exceed the tax many times over.'
  },
  {
    category: 'Professional Tax (PTEC & PTRC)',
    question: 'Can I stop PTRC compliance if all my employees leave?',
    answer: 'The PTRC can be surrendered when there are no longer any employees. Leaving it active creates a continuing return-filing obligation.'
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await api.get('/faqs');
        if (res.data?.data && res.data.data.length > 0) {
          const existingQuestions = new Set(res.data.data.map(f => f.question?.toLowerCase().trim()));
          const missingFallback = fallbackFaqs.filter(f => !existingQuestions.has(f.question?.toLowerCase().trim()));
          setFaqs([...res.data.data, ...missingFallback]);
        } else {
          setFaqs(fallbackFaqs);
        }
      } catch (err) {
        console.error('Error fetching FAQs', err);
        setFaqs(fallbackFaqs);
      } finally {
        setLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  const filteredFaqs = faqs.filter(
    faq =>
      (faq.question && faq.question.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (faq.answer && faq.answer.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (faq.category && faq.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const displayList = faqs.length > 0 ? faqs : fallbackFaqs;
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': 'https://shivoham.biz/faq#faqs',
    mainEntity: displayList.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': 'https://shivoham.biz/faq#breadcrumbs',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://shivoham.biz'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Frequently Asked Questions',
        item: 'https://shivoham.biz/faq'
      }
    ]
  };

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20  transition-all">
      {/* SEO Metadata & FAQPage Schema */}
      <SEO
        title="Frequently Asked Questions | Legal & IPR FAQs | Shivoham & Associates"
        description="Comprehensive answers to frequently asked legal questions regarding Trademark, Copyright, Patent, Industrial Design, Company Incorporation, and GST compliance in India."
        canonicalUrl="https://shivoham.biz/faq"
        schemas={[faqSchema, breadcrumbSchema]}
      />

      {/* Title Header Banner */}
      <section className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] py-20 pb-25 px-4 text-center relative overflow-hidden border-b border-[#0B4619]/10">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-tight text-[#0B4619]">Frequently Asked Questions</h1>
          <p className="text-[#0B4619]/80 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Quick answers to key legal compliance questions. Search below to find details.
          </p>
        </div>
      </section>

      {/* FAQ Accordions with Search */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
        {/* Search input bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Search FAQs by keywords (e.g., trademark, GST, OPC)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIdx(null);
            }}
            className="w-full bg-transparent border-0 outline-none text-slate-800 dark:text-white text-base font-semibold placeholder-slate-400 focus:ring-0"
          />
        </div>

        {/* Collapsible List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12 text-slate-400">Loading FAQs...</div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => (
                  <motion.div
                    key={faq.id || idx}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      className="w-full flex justify-between items-center p-6 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer"
                    >
                      <div className="flex items-center space-x-3.5 pr-2">
                        <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openIdx === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-6 overflow-hidden"
                        >
                          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-3 border-t border-slate-100 dark:border-slate-800/60">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div layout className="text-center py-12 text-slate-500 dark:text-slate-400 font-sans">
                  {faqs.length === 0 ? "No FAQs available yet." : "No FAQs match your search query. Try typing something else."}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </section>
    </div>
  );
}
