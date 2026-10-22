// Single source of truth for advertiser identity and legal notices. These
// strings appear in the header bar, footer, Terms, Privacy and the JSON-LD.
// Google Ads review compares them for consistency, so they must never drift
// apart. Edit here, not in the components.

// ---------------------------------------------------------------------------
// This site markets Phase 2 of Hype 2 (Trybe) Residences at Subang Jaya
// Xchange (SJX). Naming the project was approved by the operator on
// 22 Oct 2026. It is still operated by a licensed estate agency, not the
// developer, and is clearly disclosed as such.
// ---------------------------------------------------------------------------

export const project = {
  name: "Trybe Residences",
  officialName: "Hype 2 (Trybe) Residences, Subang Jaya Xchange",
  wordmarkTop: "TRYBE",
  wordmarkBottom: "HYPE 2 RESIDENCES",
  township: "Subang Jaya Xchange (SJX)",
  locality: "USJ7, Subang Jaya",
  tagline: "Phase 2 now launching at Subang Jaya Xchange, USJ7",
};

export const agency = {
  name: "Nexsgen Realty Sdn Bhd",
  licence: "E (1) 1914",
  // Optional. Leave "" to hide. Add the SSM company number when confirmed.
  companyNo: "",
  address:
    "1-1, PJ 21 Commercial Centre, Jalan SS3/39, 47300 Petaling Jaya, Selangor, Malaysia",
};

export const agent = {
  name: "Chloe Tan",
  ren: "REN 65782",
  role: "Registered Real Estate Negotiator",
  phoneDisplay: "+60 13-402 2862",
  phoneHref: "+60134022862",
  whatsapp: "60134022862",
  email: "jiaweii927@gmail.com",
};

export const site = {
  url: "https://www.subangjayabiggesttodtownship.com.my",
};

/** One-line attribution used in the header bar. */
export const identityLine = `Independent marketing site by ${agent.name} (${agent.ren}) · ${agency.name}, BOVAEP ${agency.licence}`;

/** The "we are not the developer" notice, reused verbatim in 3 places. */
export const independenceNotice = `This is an independent marketing website operated by ${agent.name} (${agent.ren}), a registered Real Estate Negotiator with ${agency.name} (Registered Estate Agency, BOVAEP ${agency.licence}). It is not the developer's official website, and it is not operated by or on behalf of the developer.`;

export const permitNotice = `Advertising permit and developer's licence details are issued to the developer and are available for inspection on request.`;

export const materialsNotice = `All visuals shown are illustrative artist's impressions and conceptual references only, and are subject to change without notice. Layouts, dimensions, facilities and proximities are indicative and subject to change. Nothing on this website forms part of an offer or contract. Any purchase is governed solely by the executed Sale and Purchase Agreement (SPA) confirmed by the developer.`;

/** Pre-filled WhatsApp deep link. */
export const waLink = (message: string) =>
  `https://wa.me/${agent.whatsapp}?text=${encodeURIComponent(message)}`;

/** The one enquiry label used by every contact CTA on the page. */
export const ctaLabel = "Register Interest";

/** Default pre-filled message for "Register Interest". */
export const registerMessage = `Hi Chloe, I'd like to register interest in ${project.name} Phase 2 at Subang Jaya Xchange. Please send me the floor plans, pricing and early bird details.`;
