import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "od";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  showPopup: boolean;
  dismissPopup: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", od: "ମୁଖ୍ୟ ପୃଷ୍ଠା" },
  "nav.about": { en: "About", od: "ଆମ ବିଷୟରେ" },
  "nav.process": { en: "Our Process", od: "ଆମ ପ୍ରକ୍ରିୟା" },
  "nav.standards": { en: "Standards", od: "ମାନଦଣ୍ଡ" },
  "nav.contact": { en: "Contact", od: "ଯୋଗାଯୋଗ" },
  "nav.getAssessment": { en: "Get Assessment", od: "ମୂଲ୍ୟାୟନ ପାଆନ୍ତୁ" },

  // Hero
  "hero.badge": { en: "Authorized Channel Partner — Tata Power Solar", od: "ଅଧିକୃତ ଚ୍ୟାନେଲ ପାର୍ଟନର — ଟାଟା ପାୱାର ସୋଲାର" },
  "hero.title1": { en: "Engineering-Driven", od: "ଇଞ୍ଜିନିୟରିଂ-ଚାଳିତ" },
  "hero.title2": { en: "Residential Rooftop", od: "ଆବାସିକ ଛାତ" },
  "hero.title3": { en: "Solar", od: "ସୋଲାର" },
  "hero.title1.new": { en: "Stop Paying High Electricity Bills.", od: "ଅଧିକ ବିଦ୍ୟୁତ ବିଲ ଦେବା ବନ୍ଦ କରନ୍ତୁ।" },
  "hero.title2.new": { en: "Own Your Power with Solar.", od: "ସୋଲାର ସହ ନିଜ ବିଦ୍ୟୁତ ମାଲିକ ହୁଅନ୍ତୁ।" },
  "hero.subtitle": { en: "For RCC Homes with ₹1,000+ Monthly Electricity Bills", od: "₹୧,୦୦୦+ ମାସିକ ବିଦ୍ୟୁତ ବିଲ ଥିବା RCC ଘର ପାଇଁ" },
  "hero.subtitle.new": { en: "Get government subsidy up to ₹1,38,000 and lock your electricity cost for 25 years.", od: "₹୧,୩୮,୦୦୦ ପର୍ଯ୍ୟନ୍ତ ସରକାରୀ ସବସିଡି ପାଆନ୍ତୁ ଏବଂ ୨୫ ବର୍ଷ ପାଇଁ ଆପଣଙ୍କ ବିଦ୍ୟୁତ ଖର୍ଚ୍ଚ ସ୍ଥିର କରନ୍ତୁ।" },
  "hero.cta1": { en: "Book Free Site Visit", od: "ମାଗଣା ସାଇଟ ଭିଜିଟ ବୁକ କରନ୍ତୁ" },
  "hero.cta2": { en: "Get Savings Estimate", od: "ସଞ୍ଚୟ ଆକଳନ ପାଆନ୍ତୁ" },
  "hero.cta3": { en: "Get Free Consultation", od: "ମାଗଣା ପରାମର୍ଶ ପାଆନ୍ତୁ" },
  "hero.social": { en: "Homes Installed in Odisha", od: "ଓଡ଼ିଶାରେ ସ୍ଥାପିତ ଘର" },
  "hero.tagline": { en: "Structured design. Defined execution. Tata-backed durability.", od: "ସଂରଚିତ ଡିଜାଇନ। ନିର୍ଦ୍ଧାରିତ କାର୍ଯ୍ୟକାରିତା। ଟାଟା-ସମର୍ଥିତ ସ୍ଥାୟୀତ୍ୱ।" },
  "hero.desc": { en: "Convert your monthly electricity expense into a long-term asset — installed under documented engineering standards and delivered within committed timelines.", od: "ଆପଣଙ୍କ ମାସିକ ବିଦ୍ୟୁତ ଖର୍ଚ୍ଚକୁ ଏକ ଦୀର୍ଘକାଳୀନ ସମ୍ପତ୍ତିରେ ପରିଣତ କରନ୍ତୁ — ଡକ୍ୟୁମେଣ୍ଟେଡ ଇଞ୍ଜିନିୟରିଂ ମାନଦଣ୍ଡ ଅନୁସାରେ ସ୍ଥାପିତ ଏବଂ ପ୍ରତିବଦ୍ଧ ସମୟସୀମା ମଧ୍ୟରେ ବିତରଣ।" },
  "hero.cta": { en: "Schedule Technical Site Assessment", od: "ଟେକ୍ନିକାଲ ସାଇଟ ମୂଲ୍ୟାୟନ ସମୟ ନିର୍ଧାରଣ କରନ୍ତୁ" },

  // Why this matters
  "why.label": { en: "Why This Decision Matters", od: "ଏହି ନିଷ୍ପତ୍ତି କାହିଁକି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ" },
  "why.title": { en: "Rooftop Solar Is Not a Short-Term Purchase", od: "ଛାତ ସୋଲାର ଏକ ସ୍ୱଳ୍ପକାଳୀନ କ୍ରୟ ନୁହେଁ" },
  "why.desc": { en: "It is a 20–25 year structural addition to your home. Homeowners hesitate because they fear:", od: "ଏହା ଆପଣଙ୍କ ଘରର ୨୦-୨୫ ବର୍ଷର ଏକ ସଂରଚନାତ୍ମକ ଯୋଗ। ଗୃହ ମାଲିକମାନେ ଡରନ୍ତି କାରଣ:" },
  "why.fear1": { en: "Roof leakage from improper drilling", od: "ଅନୁଚିତ ଡ୍ରିଲିଂରୁ ଛାତ ଲିକେଜ" },
  "why.fear2": { en: "Electrical safety risks", od: "ବିଦ୍ୟୁତ ସୁରକ୍ଷା ବିପଦ" },
  "why.fear3": { en: "Poor-quality components failing early", od: "ନିମ୍ନ ଗୁଣବତ୍ତା ଉପାଦାନ ଶୀଘ୍ର ବିଫଳ" },
  "why.fear4": { en: "Subsidy rejection or delays", od: "ସବସିଡି ପ୍ରତ୍ୟାଖ୍ୟାନ କିମ୍ବା ବିଳମ୍ବ" },
  "why.fear5": { en: "Installation delays after payment", od: "ପେମେଣ୍ଟ ପରେ ସ୍ଥାପନା ବିଳମ୍ବ" },
  "why.fear6": { en: "No long-term accountability", od: "ଦୀର୍ଘକାଳୀନ ଦାୟିତ୍ୱ ନାହିଁ" },
  "why.footer": { en: "Solar should reduce financial pressure — not introduce structural or electrical risk.", od: "ସୋଲାର ଆର୍ଥିକ ଚାପ କମାଇବା ଉଚିତ — ସଂରଚନାତ୍ମକ କିମ୍ବା ବିଦ୍ୟୁତ ବିପଦ ସୃଷ୍ଟି ନୁହେଁ।" },

  // Tata section
  "tata.label": { en: "Tata-Backed Confidence", od: "ଟାଟା-ସମର୍ଥିତ ବିଶ୍ୱାସ" },
  "tata.title": { en: "National Brand. Local Execution.", od: "ଜାତୀୟ ବ୍ରାଣ୍ଡ। ସ୍ଥାନୀୟ କାର୍ଯ୍ୟକାରିତା।" },
  "tata.desc": { en: "As an Authorized Channel Partner of Tata Power Solar, Navanta Solar delivers:", od: "ଟାଟା ପାୱାର ସୋଲାରର ଅଧିକୃତ ଚ୍ୟାନେଲ ପାର୍ଟନର ଭାବରେ, ନାଭାନ୍ତା ସୋଲାର ପ୍ରଦାନ କରେ:" },
  "tata.p1": { en: "Tata-backed solar systems", od: "ଟାଟା-ସମର୍ଥିତ ସୋଲାର ସିଷ୍ଟମ" },
  "tata.p2": { en: "Recognized national brand credibility", od: "ସ୍ୱୀକୃତ ଜାତୀୟ ବ୍ରାଣ୍ଡ ବିଶ୍ୱସନୀୟତା" },
  "tata.p3": { en: "Durable, compliance-aligned components", od: "ସ୍ଥାୟୀ, ଅନୁପାଳନ-ସଜ୍ଜିତ ଉପାଦାନ" },
  "tata.p4": { en: "Structured manufacturing standards", od: "ସଂରଚିତ ଉତ୍ପାଦନ ମାନଦଣ୍ଡ" },
  "tata.p5": { en: "Long-term reliability expectations", od: "ଦୀର୍ଘକାଳୀନ ନିର୍ଭରଯୋଗ୍ୟତା ଆଶା" },
  "tata.footer": { en: "Tata is associated with durability and trust across industries. Your rooftop system should reflect the same standard.", od: "ଟାଟା ସମସ୍ତ ଶିଳ୍ପରେ ସ୍ଥାୟୀତ୍ୱ ଏବଂ ବିଶ୍ୱାସ ସହିତ ଜଡିତ। ଆପଣଙ୍କ ଛାତ ସିଷ୍ଟମ ସମାନ ମାନଦଣ୍ଡ ପ୍ରତିଫଳିତ କରିବା ଉଚିତ।" },

  // Engineering
  "eng.label": { en: "Our Engineering Approach", od: "ଆମର ଇଞ୍ଜିନିୟରିଂ ଦୃଷ୍ଟିକୋଣ" },
  "eng.title": { en: "Process Discipline Over Volume", od: "ପରିମାଣ ଉପରେ ପ୍ରକ୍ରିୟା ଶୃଙ୍ଖଳା" },
  "eng.desc": { en: "Navanta Solar operates as a structured residential solar engineering company. Every installation follows documented workflow:", od: "ନାଭାନ୍ତା ସୋଲାର ଏକ ସଂରଚିତ ଆବାସିକ ସୋଲାର ଇଞ୍ଜିନିୟରିଂ କମ୍ପାନୀ ଭାବରେ କାର୍ଯ୍ୟ କରେ। ପ୍ରତ୍ୟେକ ସ୍ଥାପନା ଡକ୍ୟୁମେଣ୍ଟେଡ ୱର୍କଫ୍ଲୋ ଅନୁସରଣ କରେ:" },
  "eng.p1": { en: "Defined load calculations", od: "ନିର୍ଧାରିତ ଲୋଡ ଗଣନା" },
  "eng.p2": { en: "RCC structural validation", od: "RCC ସଂରଚନାତ୍ମକ ବୈଧତା" },
  "eng.p3": { en: "Engineered panel layout", od: "ଇଞ୍ଜିନିୟର୍ଡ ପ୍ୟାନେଲ ବିନ୍ୟାସ" },
  "eng.p4": { en: "Controlled mounting standards", od: "ନିୟନ୍ତ୍ରିତ ମାଉଣ୍ଟିଂ ମାନଦଣ୍ଡ" },
  "eng.p5": { en: "Electrical safety protocol", od: "ବିଦ୍ୟୁତ ସୁରକ୍ଷା ପ୍ରୋଟୋକଲ" },
  "eng.p6": { en: "MNRE and DISCOM compliance coordination", od: "MNRE ଏବଂ DISCOM ଅନୁପାଳନ ସମନ୍ୱୟ" },
  "eng.footer": { en: "We do not operate as a volume-driven installer. We execute with process discipline.", od: "ଆମେ ଏକ ପରିମାଣ-ଚାଳିତ ସ୍ଥାପକ ଭାବରେ କାର୍ଯ୍ୟ କରୁନାହୁଁ। ଆମେ ପ୍ରକ୍ରିୟା ଶୃଙ୍ଖଳା ସହିତ କାର୍ଯ୍ୟକାରୀ କରୁ।" },

  // Workflow
  "wf.label": { en: "Structured Installation Workflow", od: "ସଂରଚିତ ସ୍ଥାପନା ୱର୍କଫ୍ଲୋ" },
  "wf.title": { en: "Six Steps. Zero Deviation.", od: "ଛଅଟି ପଦକ୍ଷେପ। ଶୂନ୍ୟ ବିଚ୍ୟୁତି।" },
  "wf.s1.title": { en: "Load Assessment", od: "ଲୋଡ ମୂଲ୍ୟାୟନ" },
  "wf.s1.desc": { en: "Electricity consumption review and accurate 2kW+ system sizing.", od: "ବିଦ୍ୟୁତ ଖପତ ସମୀକ୍ଷା ଏବଂ ସଠିକ 2kW+ ସିଷ୍ଟମ ଆକାର ନିର୍ଧାରଣ।" },
  "wf.s2.title": { en: "RCC Technical Evaluation", od: "RCC ଟେକ୍ନିକାଲ ମୂଲ୍ୟାୟନ" },
  "wf.s2.desc": { en: "Roof inspection, shadow study, structural feasibility validation.", od: "ଛାତ ଯାଞ୍ଚ, ଛାୟା ଅଧ୍ୟୟନ, ସଂରଚନାତ୍ମକ ସମ୍ଭାବ୍ୟତା ବୈଧତା।" },
  "wf.s3.title": { en: "Tata-Backed System Design", od: "ଟାଟା-ସମର୍ଥିତ ସିଷ୍ଟମ ଡିଜାଇନ" },
  "wf.s3.desc": { en: "Panel layout planning and inverter configuration.", od: "ପ୍ୟାନେଲ ବିନ୍ୟାସ ଯୋଜନା ଏବଂ ଇନଭର୍ଟର କନଫିଗରେସନ।" },
  "wf.s4.title": { en: "Approvals & Documentation", od: "ଅନୁମୋଦନ ଏବଂ ଡକ୍ୟୁମେଣ୍ଟେସନ" },
  "wf.s4.desc": { en: "PM Surya Ghar registration and DISCOM feasibility coordination.", od: "PM ସୂର୍ଯ୍ୟ ଘର ପଞ୍ଜିକରଣ ଏବଂ DISCOM ସମ୍ଭାବ୍ୟତା ସମନ୍ୱୟ।" },
  "wf.s5.title": { en: "Checklist-Based Installation", od: "ଚେକଲିଷ୍ଟ-ଆଧାରିତ ସ୍ଥାପନା" },
  "wf.s5.desc": { en: "Mounting, wiring, earthing, inverter placement under defined standards.", od: "ନିର୍ଧାରିତ ମାନଦଣ୍ଡ ଅନୁସାରେ ମାଉଣ୍ଟିଂ, ତାର, ଅର୍ଥିଂ, ଇନଭର୍ଟର ସ୍ଥାପନ।" },
  "wf.s6.title": { en: "Testing & Commissioning", od: "ପରୀକ୍ଷା ଏବଂ କମିସନିଂ" },
  "wf.s6.desc": { en: "Performance verification and monitoring activation.", od: "କାର୍ଯ୍ୟଦକ୍ଷତା ଯାଞ୍ଚ ଏବଂ ମନିଟରିଂ ସକ୍ରିୟକରଣ।" },
  "wf.footer": { en: "No deviation from execution checklist.", od: "କାର୍ଯ୍ୟକାରିତା ଚେକଲିଷ୍ଟରୁ କୌଣସି ବିଚ୍ୟୁତି ନାହିଁ।" },

  // Timeline
  "timeline.label": { en: "Timeline Commitment", od: "ସମୟସୀମା ପ୍ରତିବଦ୍ଧତା" },
  "timeline.title": { en: "Installation Within 15–20 Working Days", od: "୧୫-୨୦ କାର୍ଯ୍ୟ ଦିବସ ମଧ୍ୟରେ ସ୍ଥାପନା" },
  "timeline.desc": { en: "Once statutory approvals and loan disbursement are complete, installation is executed within 15–20 working days. We commit to structured, time-bound execution.", od: "ସାଂବିଧାନିକ ଅନୁମୋଦନ ଏବଂ ଋଣ ବିତରଣ ସମ୍ପୂର୍ଣ୍ଣ ହେବା ପରେ, ୧୫-୨୦ କାର୍ଯ୍ୟ ଦିବସ ମଧ୍ୟରେ ସ୍ଥାପନା କାର୍ଯ୍ୟକାରୀ ହୁଏ। ଆମେ ସଂରଚିତ, ସମୟବଦ୍ଧ କାର୍ଯ୍ୟକାରିତାରେ ପ୍ରତିବଦ୍ଧ।" },

  // Financing
  "fin.label": { en: "Financing Support", od: "ଆର୍ଥିକ ସହାୟତା" },
  "fin.title": { en: "EMI Options Through National Banks", od: "ଜାତୀୟ ବ୍ୟାଙ୍କ ମାଧ୍ୟମରେ EMI ବିକଳ୍ପ" },
  "fin.desc": { en: "Solar should improve cash flow — not strain it. We are tied up with national banks to support EMI options. Our team coordinates documentation to simplify financing.", od: "ସୋଲାର ନଗଦ ପ୍ରବାହ ଉନ୍ନତ କରିବା ଉଚିତ — ଚାପ ଦେବା ନୁହେଁ। ଆମେ EMI ବିକଳ୍ପ ସମର୍ଥନ ପାଇଁ ଜାତୀୟ ବ୍ୟାଙ୍କ ସହିତ ଯୁକ୍ତ। ଆମ ଦଳ ଆର୍ଥିକ ସରଳୀକରଣ ପାଇଁ ଡକ୍ୟୁମେଣ୍ଟେସନ ସମନ୍ୱୟ କରେ।" },

  // Calculator
  "calc.subtitle": { en: "Estimate your savings, generation & ROI in seconds", od: "ସେକେଣ୍ଡରେ ଆପଣଙ୍କ ସଞ୍ଚୟ, ଉତ୍ପାଦନ ଏବଂ ROI ଅନୁମାନ କରନ୍ତୁ" },
  "calc.bill": { en: "Monthly Bill", od: "ମାସିକ ବିଲ" },
  "calc.units": { en: "Units", od: "ୟୁନିଟ" },
  "calc.area": { en: "Area", od: "କ୍ଷେତ୍ରଫଳ" },
  "calc.calculate": { en: "Calculate", od: "ଗଣନା କରନ୍ତୁ" },
  "calc.recommended": { en: "Recommended Plant Size", od: "ସୁପାରିଶ କରାଯାଇଥିବା ପ୍ଲାଣ୍ଟ ଆକାର" },
  "calc.monthlyGen": { en: "Monthly Gen", od: "ମାସିକ ଉତ୍ପାଦନ" },
  "calc.annualGen": { en: "Annual Gen", od: "ବାର୍ଷିକ ଉତ୍ପାଦନ" },
  "calc.savings25": { en: "25-Year Savings", od: "୨୫ ବର୍ଷର ସଞ୍ଚୟ" },
  "calc.whatsapp": { en: "Get Free Solar Plan on WhatsApp", od: "WhatsApp ରେ ମାଗଣା ସୋଲାର ପ୍ଲାନ ପାଆନ୍ତୁ" },

  // Post-installation
  "post.label": { en: "Post-Installation Protocol", od: "ସ୍ଥାପନା ପରବର୍ତ୍ତୀ ପ୍ରୋଟୋକଲ" },
  "post.title": { en: "Support Beyond Commissioning", od: "କମିସନିଂ ବାହାରେ ସହାୟତା" },
  "post.p1": { en: "Monitoring app configuration", od: "ମନିଟରିଂ ଆପ କନଫିଗରେସନ" },
  "post.p2": { en: "System activation walkthrough", od: "ସିଷ୍ଟମ ସକ୍ରିୟକରଣ ୱାକଥ୍ରୁ" },
  "post.p3": { en: "7-day performance review", od: "୭-ଦିନ କାର୍ଯ୍ୟଦକ୍ଷତା ସମୀକ୍ଷା" },
  "post.p4": { en: "First bill verification support", od: "ପ୍ରଥମ ବିଲ ଯାଞ୍ଚ ସହାୟତା" },
  "post.p5": { en: "Installation documentation archive", od: "ସ୍ଥାପନା ଡକ୍ୟୁମେଣ୍ଟେସନ ଆର୍କାଇଭ" },
  "post.p6": { en: "Defined escalation pathway", od: "ନିର୍ଧାରିତ ଏସ୍କାଲେସନ ପଥ" },

  // Final CTA
  "cta.label": { en: "Get Started", od: "ଆରମ୍ଭ କରନ୍ତୁ" },
  "cta.title": { en: "Book Your RCC Technical Site Assessment", od: "ଆପଣଙ୍କ RCC ଟେକ୍ନିକାଲ ସାଇଟ ମୂଲ୍ୟାୟନ ବୁକ କରନ୍ତୁ" },
  "cta.primary": { en: "Book RCC Technical Site Assessment", od: "RCC ଟେକ୍ନିକାଲ ସାଇଟ ମୂଲ୍ୟାୟନ ବୁକ କରନ୍ତୁ" },
  "cta.secondary": { en: "Check If Your Home Is Solar-Ready", od: "ଆପଣଙ୍କ ଘର ସୋଲାର-ପ୍ରସ୍ତୁତ କି ଯାଞ୍ଚ କରନ୍ତୁ" },

  // About page
  "about.label": { en: "About Us", od: "ଆମ ବିଷୟରେ" },
  "about.title": { en: "Navanta Solar", od: "ନାଭାନ୍ତା ସୋଲାର" },
  "about.desc": { en: "Navanta Solar is a residential rooftop solar engineering company and Authorized Channel Partner of Tata Power Solar. We specialize in RCC rooftop installations above 2kW for homeowners seeking structured execution and long-term reliability.", od: "ନାଭାନ୍ତା ସୋଲାର ଏକ ଆବାସିକ ଛାତ ସୋଲାର ଇଞ୍ଜିନିୟରିଂ କମ୍ପାନୀ ଏବଂ ଟାଟା ପାୱାର ସୋଲାରର ଅଧିକୃତ ଚ୍ୟାନେଲ ପାର୍ଟନର। ଆମେ ସଂରଚିତ କାର୍ଯ୍ୟକାରିତା ଏବଂ ଦୀର୍ଘକାଳୀନ ନିର୍ଭରଯୋଗ୍ୟତା ଖୋଜୁଥିବା ଗୃହ ମାଲିକଙ୍କ ପାଇଁ 2kW ଉପରେ RCC ଛାତ ସ୍ଥାପନାରେ ବିଶେଷଜ୍ଞ।" },
  "about.approach": { en: "Our approach is defined by:", od: "ଆମର ଦୃଷ୍ଟିକୋଣ ନିର୍ଧାରିତ:" },
  "about.a1": { en: "Engineering-first planning", od: "ଇଞ୍ଜିନିୟରିଂ-ପ୍ରଥମ ଯୋଜନା" },
  "about.a2": { en: "Tata-backed system integration", od: "ଟାଟା-ସମର୍ଥିତ ସିଷ୍ଟମ ଇଣ୍ଟିଗ୍ରେସନ" },
  "about.a3": { en: "Compliance discipline", od: "ଅନୁପାଳନ ଶୃଙ୍ଖଳା" },
  "about.a4": { en: "Installation checklists", od: "ସ୍ଥାପନା ଚେକଲିଷ୍ଟ" },
  "about.a5": { en: "Timeline commitment", od: "ସମୟସୀମା ପ୍ରତିବଦ୍ଧତା" },
  "about.a6": { en: "Controlled execution standards", od: "ନିୟନ୍ତ୍ରିତ କାର୍ଯ୍ୟକାରିତା ମାନଦଣ୍ଡ" },
  "about.epc": { en: "We operate as a structured EPC (Engineering, Procurement, and Construction) execution partner — focused exclusively on residential infrastructure quality.", od: "ଆମେ ଏକ ସଂରଚିତ EPC (ଇଞ୍ଜିନିୟରିଂ, ପ୍ରୋକ୍ୟୁରମେଣ୍ଟ ଏବଂ କନଷ୍ଟ୍ରକସନ) କାର୍ଯ୍ୟକାରିତା ସାଥୀ ଭାବରେ କାର୍ଯ୍ୟ କରୁ — କେବଳ ଆବାସିକ ଭିତ୍ତିଭୂମି ଗୁଣବତ୍ତାରେ ଧ୍ୟାନ ଦେଇ।" },
  "about.phil.label": { en: "Philosophy", od: "ଦର୍ଶନ" },
  "about.phil.title": { en: "Our Operating Philosophy", od: "ଆମର କାର୍ଯ୍ୟକାରୀ ଦର୍ଶନ" },
  "about.phil1": { en: "No over-promising", od: "ଅତିରିକ୍ତ ପ୍ରତିଶ୍ରୁତି ନାହିଁ" },
  "about.phil2": { en: "No compressed execution", od: "ସଙ୍କୁଚିତ କାର୍ଯ୍ୟକାରିତା ନାହିଁ" },
  "about.phil3": { en: "No structural compromise", od: "ସଂରଚନାତ୍ମକ ଆପୋଷ ନାହିଁ" },
  "about.phil.footer": { en: "Solar installation is an infrastructure decision. It must be engineered, not improvised.", od: "ସୋଲାର ସ୍ଥାପନା ଏକ ଭିତ୍ତିଭୂମି ନିଷ୍ପତ୍ତି। ଏହା ଇଞ୍ଜିନିୟର୍ଡ ହେବା ଉଚିତ, ଇମ୍ପ୍ରୋଭାଇଜଡ ନୁହେଁ।" },

  // Process page
  "proc.label": { en: "Our Process", od: "ଆମ ପ୍ରକ୍ରିୟା" },
  "proc.title": { en: "Our Structured Engineering Process", od: "ଆମର ସଂରଚିତ ଇଞ୍ଜିନିୟରିଂ ପ୍ରକ୍ରିୟା" },
  "proc.desc": { en: "Every Navanta Solar installation follows a documented, repeatable workflow.", od: "ପ୍ରତ୍ୟେକ ନାଭାନ୍ତା ସୋଲାର ସ୍ଥାପନା ଏକ ଡକ୍ୟୁମେଣ୍ଟେଡ, ପୁନରାବୃତ୍ତିଯୋଗ୍ୟ ୱର୍କଫ୍ଲୋ ଅନୁସରଣ କରେ।" },
  "proc.s1.title": { en: "Load Assessment", od: "ଲୋଡ ମୂଲ୍ୟାୟନ" },
  "proc.s1.desc": { en: "System sizing based on consumption data — prevents oversizing or underperformance.", od: "ଖପତ ଡାଟା ଆଧାରରେ ସିଷ୍ଟମ ଆକାର ନିର୍ଧାରଣ — ଅତିରିକ୍ତ ଆକାର କିମ୍ବା ନିମ୍ନ କାର୍ଯ୍ୟଦକ୍ଷତା ରୋକେ।" },
  "proc.s2.title": { en: "RCC Structural Evaluation", od: "RCC ସଂରଚନାତ୍ମକ ମୂଲ୍ୟାୟନ" },
  "proc.s2.desc": { en: "Only technically feasible rooftops proceed.", od: "କେବଳ ଟେକ୍ନିକାଲୀ ସମ୍ଭାବ୍ୟ ଛାତ ଆଗେଇଥାଏ।" },
  "proc.s3.title": { en: "Tata-Backed System Design", od: "ଟାଟା-ସମର୍ଥିତ ସିଷ୍ଟମ ଡିଜାଇନ" },
  "proc.s3.desc": { en: "Panel placement and inverter configuration finalized before installation.", od: "ସ୍ଥାପନା ପୂର୍ବରୁ ପ୍ୟାନେଲ ସ୍ଥାନ ଏବଂ ଇନଭର୍ଟର କନଫିଗରେସନ ଚୂଡ଼ାନ୍ତ।" },
  "proc.s4.title": { en: "Approval & Documentation", od: "ଅନୁମୋଦନ ଏବଂ ଡକ୍ୟୁମେଣ୍ଟେସନ" },
  "proc.s4.i1": { en: "PM Surya Ghar registration", od: "PM ସୂର୍ଯ୍ୟ ଘର ପଞ୍ଜିକରଣ" },
  "proc.s4.i2": { en: "DISCOM feasibility coordination", od: "DISCOM ସମ୍ଭାବ୍ୟତା ସମନ୍ୱୟ" },
  "proc.s4.i3": { en: "Compliance verification", od: "ଅନୁପାଳନ ଯାଞ୍ଚ" },
  "proc.s4.i4": { en: "Bank EMI documentation support", od: "ବ୍ୟାଙ୍କ EMI ଡକ୍ୟୁମେଣ୍ଟେସନ ସହାୟତା" },
  "proc.s5.title": { en: "Installation Execution", od: "ସ୍ଥାପନା କାର୍ଯ୍ୟକାରିତା" },
  "proc.s5.i1": { en: "Defined anchoring method", od: "ନିର୍ଧାରିତ ଆଙ୍କରିଂ ପଦ୍ଧତି" },
  "proc.s5.i2": { en: "Corrosion-resistant mounting", od: "ଜଙ୍ଗ-ପ୍ରତିରୋଧୀ ମାଉଣ୍ଟିଂ" },
  "proc.s5.i3": { en: "DC/AC separated routing", od: "DC/AC ପୃଥକ ରାଉଟିଂ" },
  "proc.s5.i4": { en: "Dedicated earthing integration", od: "ସମର୍ପିତ ଅର୍ଥିଂ ଇଣ୍ଟିଗ୍ରେସନ" },
  "proc.s5.i5": { en: "Inverter clearance standards", od: "ଇନଭର୍ଟର କ୍ଲିୟରେନ୍ସ ମାନଦଣ୍ଡ" },
  "proc.s6.title": { en: "Testing & Commissioning", od: "ପରୀକ୍ଷା ଏବଂ କମିସନିଂ" },
  "proc.s6.i1": { en: "Electrical verification", od: "ବିଦ୍ୟୁତ ଯାଞ୍ଚ" },
  "proc.s6.i2": { en: "Generation validation", od: "ଉତ୍ପାଦନ ବୈଧତା" },
  "proc.s6.i3": { en: "Monitoring activation", od: "ମନିଟରିଂ ସକ୍ରିୟକରଣ" },
  "proc.s7.title": { en: "Handover & Monitoring", od: "ହ୍ୟାଣ୍ଡଓଭର ଏବଂ ମନିଟରିଂ" },
  "proc.s7.i1": { en: "Documentation delivery", od: "ଡକ୍ୟୁମେଣ୍ଟେସନ ବିତରଣ" },
  "proc.s7.i2": { en: "Warranty details", od: "ୱାରେଣ୍ଟି ବିବରଣୀ" },
  "proc.s7.i3": { en: "Support protocol explanation", od: "ସହାୟତା ପ୍ରୋଟୋକଲ ବ୍ୟାଖ୍ୟା" },
  "proc.s8.title": { en: "Maintenance & System Care", od: "ରକ୍ଷଣାବେକ୍ଷଣ ଏବଂ ସିଷ୍ଟମ ଯତ୍ନ" },
  "proc.s8.i1": { en: "Regular panel cleaning for optimal performance", od: "ସର୍ବୋତ୍ତମ ପ୍ରଦର୍ଶନ ପାଇଁ ନିୟମିତ ପ୍ୟାନେଲ ସଫା" },
  "proc.s8.i2": { en: "Quarterly inspection of wiring and connections", od: "ତାର ଏବଂ ସଂଯୋଗର ତ୍ରୈମାସିକ ଯାଞ୍ଚ" },
  "proc.s8.i3": { en: "Inverter and system health checks", od: "ଇନଭର୍ଟର ଏବଂ ସିଷ୍ଟମ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ" },
  "proc.s8.i4": { en: "Prompt support for any issues or faults", od: "ଯେକୌଣସି ସମସ୍ୟା ବା ତ୍ରୁଟି ପାଇଁ ତୁରନ୍ତ ସହାୟତା" },

  // Standards page
  "std.label": { en: "Technical Standards", od: "ଟେକ୍ନିକାଲ ମାନଦଣ୍ଡ" },
  "std.title": { en: "Defined Structural & Electrical Standards", od: "ନିର୍ଧାରିତ ସଂରଚନାତ୍ମକ ଏବଂ ବିଦ୍ୟୁତ ମାନଦଣ୍ଡ" },
  "std.desc": { en: "Every Navanta Solar installation follows defined criteria. Technical discipline protects your roof, wiring, and long-term system performance.", od: "ପ୍ରତ୍ୟେକ ନାଭାନ୍ତା ସୋଲାର ସ୍ଥାପନା ନିର୍ଧାରିତ ମାନଦଣ୍ଡ ଅନୁସରଣ କରେ। ଟେକ୍ନିକାଲ ଶୃଙ୍ଖଳା ଆପଣଙ୍କ ଛାତ, ତାର ଏବଂ ଦୀର୍ଘକାଳୀନ ସିଷ୍ଟମ କାର୍ଯ୍ୟଦକ୍ଷତା ସୁରକ୍ଷିତ କରେ।" },
  "std.s1": { en: "Corrosion-resistant mounting structures", od: "ଜଙ୍ଗ-ପ୍ରତିରୋଧୀ ମାଉଣ୍ଟିଂ ସଂରଚନା" },
  "std.s2": { en: "Wind load consideration for regional exposure", od: "ଆଞ୍ଚଳିକ ଏକ୍ସପୋଜର ପାଇଁ ପବନ ଲୋଡ ବିଚାର" },
  "std.s3": { en: "Proper tilt alignment for Odisha latitude", od: "ଓଡ଼ିଶା ଅକ୍ଷାଂଶ ପାଇଁ ଉଚିତ ଟିଲ୍ଟ ସଜ୍ଜୀକରଣ" },
  "std.s4": { en: "DC and AC cable separation", od: "DC ଏବଂ AC କେବୁଲ ପୃଥକୀକରଣ" },
  "std.s5": { en: "MC4 connector locking", od: "MC4 ସଂଯୋଜକ ଲକିଂ" },
  "std.s6": { en: "Surge Protection Device integration", od: "ସର୍ଜ ସୁରକ୍ଷା ଉପକରଣ ଇଣ୍ଟିଗ୍ରେସନ" },
  "std.s7": { en: "Dedicated earthing system", od: "ସମର୍ପିତ ଅର୍ଥିଂ ସିଷ୍ଟମ" },
  "std.s8": { en: "Structured inverter placement clearance", od: "ସଂରଚିତ ଇନଭର୍ଟର ସ୍ଥାପନ କ୍ଲିୟରେନ୍ସ" },
  "std.s9": { en: "ALMM-compliant modules (where applicable)", od: "ALMM-ଅନୁରୂପ ମଡ୍ୟୁଲ (ଯେଉଁଠାରେ ପ୍ରଯୁଜ୍ୟ)" },

  // Contact page
  "contact.label": { en: "Contact", od: "ଯୋଗାଯୋଗ" },
  "contact.title": { en: "Request a Technical Evaluation", od: "ଏକ ଟେକ୍ନିକାଲ ମୂଲ୍ୟାୟନ ଅନୁରୋଧ କରନ୍ତୁ" },
  "contact.desc": { en: "If you are considering Tata-backed residential rooftop solar for your RCC home, begin with a structured assessment.", od: "ଯଦି ଆପଣ ଆପଣଙ୍କ RCC ଘର ପାଇଁ ଟାଟା-ସମର୍ଥିତ ଆବାସିକ ଛାତ ସୋଲାର ବିଚାର କରୁଛନ୍ତି, ଏକ ସଂରଚିତ ମୂଲ୍ୟାୟନ ସହିତ ଆରମ୍ଭ କରନ୍ତୁ।" },
  "contact.evalTitle": { en: "Our evaluation includes:", od: "ଆମର ମୂଲ୍ୟାୟନ ଅନ୍ତର୍ଭୁକ୍ତ:" },
  "contact.e1": { en: "Electricity load feasibility", od: "ବିଦ୍ୟୁତ ଲୋଡ ସମ୍ଭାବ୍ୟତା" },
  "contact.e2": { en: "Roof structural suitability", od: "ଛାତ ସଂରଚନାତ୍ମକ ଉପଯୁକ୍ତତା" },
  "contact.e3": { en: "2kW+ sizing recommendation", od: "2kW+ ଆକାର ସୁପାରିଶ" },
  "contact.e4": { en: "Compliance requirements", od: "ଅନୁପାଳନ ଆବଶ୍ୟକତା" },
  "contact.e5": { en: "Subsidy pathway guidance", od: "ସବସିଡି ପଥ ମାର୍ଗଦର୍ଶନ" },
  "contact.e6": { en: "EMI documentation overview", od: "EMI ଡକ୍ୟୁମେଣ୍ଟେସନ ସାରାଂଶ" },
  "contact.name": { en: "Full Name", od: "ପୂର୍ଣ୍ଣ ନାମ" },
  "contact.namePlaceholder": { en: "Your name", od: "ଆପଣଙ୍କ ନାମ" },
  "contact.phone": { en: "Phone Number", od: "ଫୋନ ନମ୍ବର" },
  "contact.bill": { en: "Monthly Electricity Bill (₹)", od: "ମାସିକ ବିଦ୍ୟୁତ ବିଲ (₹)" },
  "contact.city": { en: "City / Location", od: "ସହର / ସ୍ଥାନ" },
  "contact.cityPlaceholder": { en: "Your city", od: "ଆପଣଙ୍କ ସହର" },
  "contact.submit": { en: "Schedule Technical Site Assessment", od: "ଟେକ୍ନିକାଲ ସାଇଟ ମୂଲ୍ୟାୟନ ସମୟ ନିର୍ଧାରଣ କରନ୍ତୁ" },
  "contact.secondary": { en: "Or check if your home is solar-ready first.", od: "କିମ୍ବା ପ୍ରଥମେ ଆପଣଙ୍କ ଘର ସୋଲାର-ପ୍ରସ୍ତୁତ କି ଯାଞ୍ଚ କରନ୍ତୁ।" },

  // Footer
  "footer.desc": { en: "Authorized Channel Partner of Tata Power Solar. Engineering-driven residential rooftop solar for RCC homes.", od: "ଟାଟା ପାୱାର ସୋଲାରର ଅଧିକୃତ ଚ୍ୟାନେଲ ପାର୍ଟନର। RCC ଘର ପାଇଁ ଇଞ୍ଜିନିୟରିଂ-ଚାଳିତ ଆବାସିକ ଛାତ ସୋଲାର।" },
  "footer.nav": { en: "Navigation", od: "ନାଭିଗେସନ" },
  "footer.contact": { en: "Contact", od: "ଯୋଗାଯୋଗ" },
  "footer.contactDesc": { en: "Serving residential homeowners across Odisha with structured, Tata-backed solar installations.", od: "ସଂରଚିତ, ଟାଟା-ସମର୍ଥିତ ସୋଲାର ସ୍ଥାପନା ସହିତ ଓଡ଼ିଶା ଜୁଡ଼ି ଆବାସିକ ଗୃହ ମାଲିକଙ୍କୁ ସେବା ପ୍ରଦାନ।" },
  "footer.copyright": { en: "Navanta Solar. All rights reserved. Authorized Channel Partner of Tata Power Solar.", od: "ନାଭାନ୍ତା ସୋଲାର। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ। ଟାଟା ପାୱାର ସୋଲାରର ଅଧିକୃତ ଚ୍ୟାନେଲ ପାର୍ଟନର।" },

  // Language popup
  "langPopup.title": { en: "Choose Your Language", od: "ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ" },
  "langPopup.desc": { en: "Would you like to view this website in Odia?", od: "ଆପଣ ଏହି ୱେବସାଇଟ ଓଡ଼ିଆରେ ଦେଖିବାକୁ ଚାହୁଁଛନ୍ତି କି?" },
  "langPopup.odia": { en: "ଓଡ଼ିଆ (Odia)", od: "ଓଡ଼ିଆ (Odia)" },
  "langPopup.english": { en: "English", od: "English" },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("navanta-lang");
    return (saved === "od" ? "od" : "en") as Language;
  });

  const [showPopup, setShowPopup] = useState(() => {
    return !localStorage.getItem("navanta-lang-chosen");
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("navanta-lang", newLang);
    localStorage.setItem("navanta-lang-chosen", "true");
  };

  const dismissPopup = () => {
    setShowPopup(false);
    localStorage.setItem("navanta-lang-chosen", "true");
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, showPopup, dismissPopup }}>
      {children}
    </LanguageContext.Provider>
  );
};
