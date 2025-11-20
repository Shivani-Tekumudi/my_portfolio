import { prototype } from "events";

// /data/projectsData.js
export const projects = [
{
  id: "internal-admin-dashboard",
  category: "developing",
  title: "Internal Admin Dashboard",
  role: "Front-End Developer",
  image: "/project/dashboard.svg",
  shortDesc:
    "A focused admin dashboard for cab rental bookings with login access, listing controls, and transparent action tracking.",
  longDesc:
    "Developed a functional internal admin dashboard for a cab rental service using Next.js and TailwindCSS. Admins can log in, view rental listings, and take actions like approving, rejecting, or reviewing booking details. The project includes an Admin Tracker module that records each action to maintain accountability and smooth internal workflow.",

  tools: ["Next.js", "React", "TailwindCSS", "Context API", "Framer Motion"],
  year: 2025,

  projectDetails: {
  problemStatement:
    "Cab rental admins needed a simple interface to review booking requests quickly and record their actions in one place. The existing process was manual and slow.",

  systemFlow:
    "Admin → Login → Dashboard → View Listings → Approve/Reject/View Details → Activity stored in Admin Tracker.",

  myResponsibilities:
    "Built the entire front-end including login flow, listing UI, action handlers, activity tracker logic, and responsive layout.",

  overview:
    "The Internal Admin Dashboard is a front-end application designed for cab rental administrators to manage bookings. It provides a clean interface for reviewing rental records and recording admin actions.",
  
  researchAndPlanning:
    "Identified essential modules: login, listing table, and tracker. Created a small system flow to maintain clarity and avoid unnecessary features.",

  architectureAndSetup:
    "Implemented using Next.js App Router and modular components. Context API manages authentication and admin logs. Local JSON simulates API data.",

  coreFeaturesOrKeySolutions: [
    "⚡ Multi-Admin Login",
    "⚡ Rental Listing Table",
    "⚡ Approve / Reject / View",
    "⚡ Admin Tracker",
    "⚡ Responsive Layout",
    "⚡ Optimized Re-renders"
  ],

  challengesAndLearnings:
    "Keeping tracker updates smooth without causing extra renders required reducer-based state flow.",

  testingAndFeedback:
    "Tested actions, UI spacing, and cross-device responsiveness. Adjusted layouts based on feedback.",

  deploymentOrFinalPrototype: {
    isLive: true,
    isLivegit: true,
    link: "https://cabs-admin-next.vercel.app/dashboard",
    github: "https://github.com/Shivani-Tekumudi/cabs_admin_next"
  },

  reflectionAndFutureScope:
    "Plan to integrate real APIs, JWT authentication features."
}

}
,

 {
  id: "admin-expense-tracker",
  category: "developing",
  title: "Admin Expense Tracker Panel",
  role: "UI/UX Designer & Front-End Developer",
  image: "/project/expense-tracker.svg",
  shortDesc:
    "A simple expense tracking dashboard with charts, real-time updates, and persistent storage.",
  longDesc:
    "Designed and built a clean expense tracking panel using React and Chart.js. Users can add income/expenses, visualize spending patterns, and view recent transactions. The layout is structured for clarity and mobile responsiveness.",

  tools: ["React", "Chart.js", "TailwindCSS", "localStorage"],
  year: 2025,

 projectDetails: {
  problemStatement:
    "Users needed a simple way to record expenses and instantly visualize where their money was going without relying on heavy apps.",

  systemFlow:
    "User → Add Income/Expense → Data Saved → Charts Update → View Recent Transactions.",

  myResponsibilities:
    "Designed clean UI, built React components, integrated Chart.js, implemented localStorage sync, and optimized chart rendering.",

  overview:
    "A lightweight finance dashboard showing expense distribution and recent entries using interactive charts.",

  researchAndPlanning:
    "Planned three modules: input, charts, and history. Created a simple flow from input → visualization.",

  architectureAndSetup:
    "React components with localStorage persistence. Chart.js handles category and bar visuals. TailwindCSS ensures responsiveness.",

  coreFeaturesOrKeySolutions: [
    "⚡ Add Income & Expense",
    "⚡ Category Pie Chart",
    "⚡ Top Categories Bar Chart",
    "⚡ Recent Transactions",
    "⚡ Persistent Storage",
    "⚡ Responsive Layout"
  ],

  challengesAndLearnings:
    "Chart updates were tricky; solved by isolating state updates and controlling re-renders.",

  testingAndFeedback:
    "Checked responsiveness and data accuracy. Adjusted chart contrast for better readability.",

  deploymentOrFinalPrototype: {
    isLive: true,
     isLivegit: true,
    link: "https://expense-tracker-khy1j3pgw-shivani-tekumudis-projects.vercel.app/",
    github: "https://github.com/Shivani-Tekumudi/Expense_Tracker"
  },

  reflectionAndFutureScope:
    "Plans include authentication, data export, and migrating storage to IndexedDB."
}

}
,

{
  id: "enterprise-admin-panel",
  category: "developing",
  title: "Admin Panel",
  role: "UI/UX Designer & Front-End Developer",
  image: "/project/myplotpic-admin.svg",
  shortDesc:
    "A structured admin panel with authentication, dashboards, and user management.",
  longDesc:
    "Built a modular admin interface using Next.js and TailwindCSS. Worked on secure login, dashboard layout, and user management sections. Focus was on clear UI structure, reliable components, and a layout aligned with enterprise design guidelines.",

  tools: ["React", "Next.js", "TailwindCSS", "Context API", "Framer Motion"],
  year: 2025,

  projectDetails: {
  problemStatement:
    "The company needed a structured admin interface to manage users, view dashboard metrics, and maintain consistent internal workflows.",

  systemFlow:
    "Admin → Login → Dashboard → Select Module → Perform CRUD / View Data → Save Updates.",

  myResponsibilities:
    "Built UI screens, created modular components, implemented authentication flow, and integrated analytics sections.",

  overview:
    "A scalable admin interface designed for internal management of users, analytics, and dashboard modules.",

  researchAndPlanning:
    "Mapped navigation and role requirements. Created wireframes to validate layout and reduce onboarding time.",

  architectureAndSetup:
    "Next.js routing, Context API for auth, TailwindCSS for layout consistency, and Chart.js for analytics.",

  coreFeaturesOrKeySolutions: [
    "⚡ Role-based Login",
    "⚡ Dashboard Metrics",
    "⚡ User Management",
    "⚡ Data Control Panels",
    "⚡ Responsive Layout",
    "⚡ Reusable Component Architecture"
  ],

  challengesAndLearnings:
    "Optimizing render-heavy sections required lazy loading and conditional rendering techniques.",

  testingAndFeedback:
    "Performed UI checks, authentication testing, and validated component responsiveness.",

  deploymentOrFinalPrototype: {
    isLive: false,
     isLivegit: false,
    link: "Private — company project (access restricted)",
    github: "Private — source under NDA"
  },

  reflectionAndFutureScope:
    "Future improvements include advanced analytics, dark mode, and deeper audit logging."
}

}
,
{
  id: "eventer-events-platform",
  category: "developing",
  title: "Eventer — Events Listing Platform",
  role: "UI/UX Designer & Front-End Developer",
  image: "/project/eventer.svg",
  shortDesc:
    "A lightweight events browsing platform with search, date-based sorting, and a clean card-based layout.",
  longDesc:
    "Created a simple but effective events listing platform using a JSON dataset and jQuery. Designed the UI from scratch, built interactive filters, and implemented fast client-side search for event titles.",

  tools: ["HTML", "CSS", "JavaScript", "jQuery", "JSON"],
  year: 2024,

  projectDetails: {
    problemStatement:
      "Users needed a fast and simple way to explore upcoming events without logging in or navigating a complex interface.",

    systemFlow:
      "Home → Events Page → Browse Cards → Search / Sort by Date → View Event Details.",

    myResponsibilities:
      "Designed the UI, created the card layout, implemented search and date sorting, and structured the JSON event dataset.",

    overview:
      "A fully client-side event listing tool that lets users browse, filter, and search events instantly.",

    researchAndPlanning:
      "Studied event listing platforms for minimal UI patterns. Planned card structure, sorting logic, and responsive grid layout.",

    architectureAndSetup:
      "Used JSON for event data, jQuery for DOM manipulation, and simple functions for filtering, sorting, and rendering cards.",

    coreFeaturesOrKeySolutions: [
      "⚡ Events displayed as clean, responsive cards",
      "⚡ Sort by date (ascending or upcoming first)",
      "⚡ Search by event title",
      "⚡ JSON-driven — no backend",
      "⚡ Fast filtering using jQuery",
      "⚡ Fully custom-designed UI"
    ],

    challengesAndLearnings:
      "Ensuring fast rendering while filtering multiple times with jQuery required optimizing the event card generation logic.",

    testingAndFeedback:
      "Tested responsiveness, search accuracy, date sorting logic, and UI clarity across devices.",

    deploymentOrFinalPrototype: {
      isLive: false,
      link: "Deployed locally / static hosting",
      github: "https://github.com/Shivani-Tekumudi/eventer_jquery"
    },

    reflectionAndFutureScope:
      "Future plans include category filters, a month-view calendar, and replacing jQuery with React or Next.js for scalability."
  }
}


,
{
  id: "sass-dashboard-design",
  category: "designing",
  title: "SaaS Automation Dashboard Design",
  role: "UI/UX Designer",
  image: "/project/design-test.svg",
  shortDesc:
    "A clean and data-focused dashboard concept for automation testing platforms.",
  longDesc:
    "A redesign of an outdated SaaS automation dashboard focused on usability, modern visualization, and accessibility. Built to help QA engineers and managers track test runs, coverage, and performance metrics with clarity.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    problemStatement:
      "QA teams faced difficulty navigating outdated dashboards overloaded with scattered metrics. There was no hierarchy, no structure, and performance insights were hard to interpret. The challenge was to convert a dense data system into a clean, intuitive dashboard that boosts clarity and decision-making.",
    userFlow:
      "Login → Dashboard Overview → Recent Test Runs → Drill-down to Failed Cases → Analyze Trends → Apply Filters → Export Insights",
    systemFlow:
      "User Input → System Fetches Test Data → Dashboard Renders KPIs & Charts → Filters Applied → Recalculated Data → Updated Visuals Displayed",
    featureJustification:
      "Analytics cards allow fast scanning of KPIs, trend charts help identify patterns, color-coded statuses reduce cognitive load, filters enable targeted insights, sidebar navigation improves structure, and light/dark themes support accessibility.",
    roleAndResponsibilities:
      "Handled UX research, dashboard architecture, layout design, UI visuals, color system, spacing rules, component modularity, and Figma prototype testing.",

    overview:
      "This concept project reimagines an automation testing dashboard with an emphasis on clarity, efficiency, and modern visual storytelling.",
    researchAndPlanning:
      "Heuristic analysis revealed cluttered layouts and poor hierarchy in typical QA dashboards. Mapped out user roles and their needs — quick test overviews, drill-down into failures, and progress tracking.",
    architectureAndSetup:
      "Built a component-based interface with a fixed sidebar, analytics cards, clean data visuals, auto-layout components, and an 8pt spacing grid.",
    coreFeaturesOrKeySolutions: [
      "⚡ Overview dashboard with test summary.",
      "⚡ Trend visualization for success/failure ratios.",
      "⚡ Modular cards for test cases & environments.",
      "⚡ Color-coded test statuses.",
      "⚡ Smart filters (date, type).",
      "⚡ Dark/Light theme prototypes."
    ],
    challengesAndLearnings:
      "Main challenge was displaying dense data without overwhelming users. Solved using contrast balance, color prioritization, and modular cards.",
    testingAndFeedback:
      "Self usability testing done to validate hierarchy, readability, and accessibility (WCAG AA).",
    deploymentOrFinalPrototype: {
      link: "https://www.figma.com/proto/BfOErYQLx6wHnuEv16y3EX/Portfloio---Dashboard?node-id=83-12761&t=9ZFaQ8t3EALDd5wa-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=98%3A2857",
      github: "N/A"
    },
    reflectionAndFutureScope:
      "Planned improvements include interactive charts, animated transitions."
  }
}
,
{
  id: "realestate-appartment-flat",
  category: "designing",
  title: "Real Estate Apartment Landing Page",
  role: "UI/UX Designer",
  image: "/project/design-apartment-project.svg",
  shortDesc:
    "An elegant landing page design for a modern apartment property.",
  longDesc:
    "A premium apartment landing page designed for clarity, trust-building, and high conversions. It blends strong hierarchy, minimal visuals, and persuasive CTAs.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    problemStatement:
      "Real estate sites often overwhelm users with cluttered layouts and unclear pricing. The goal was to build a premium layout that maintains trust, clarity, and easy exploration to boost inquiries.",
    userFlow:
      "Hero → About → Amenities → Gallery → Offers → Testimonials → Contact Form",
    systemFlow:
      "User Scrolls → Section Loads → CTA Click → Form Submission → Confirmation",
    featureJustification:
      "Hero clarity reduces bounce, amenities showcase lifestyle, gallery builds emotional appeal, loan cards motivate leads, testimonials build trust, and sticky CTAs improve conversion.",
    roleAndResponsibilities:
      "Designed layout flow, visuals, spacing logic, UI components, color palette, and Figma prototype.",

    overview:
      "A high-trust apartment landing page created to highlight amenities, location details, and property features.",
    researchAndPlanning:
      "Analyzed competitor sites and identified drop-offs caused by cluttered layouts and unclear pricing sections.",
    architectureAndSetup:
      "Structured with a hero → amenities grid → gallery → loan/offer section → testimonials → inquiry form.",
    coreFeaturesOrKeySolutions: [
      "⚡ Hero with price & location.",
      "⚡ Lifestyle amenities grid.",
      "⚡ High-quality gallery.",
      "⚡ Loan & offer cards.",
      "⚡ Testimonials & trust badges.",
      "⚡ Sticky CTA bar."
    ],
    challengesAndLearnings:
      "Balancing luxury visuals with heavy information required zoning and consistent typography.",
    testingAndFeedback:
      "Peer reviews helped refine spacing and CTA clarity.",
    deploymentOrFinalPrototype: {
      link: "https://www.figma.com/proto/XyW9PgZAT4PllXY9izVX6O/My-plot-pic?node-id=2413-4375&t=oEPMWeEuRIsKYJ1M-0&scaling=min-zoom&content-scaling=fixed&page-id=47%3A5&starting-point-node-id=2413%3A4375&show-proto-sidebar=1",
      github: "https://github.com/Shivani-Tekumudi/eventer_jquery"
    },
    reflectionAndFutureScope:
      "Future plans include dynamic filtering, micro-interactions, and motion prototypes."
  }
}
,
{
  id: "realestate-landingpage-flat",
  category: "designing",
  title: "Real Estate Flat Landing Page",
  role: "UI/UX Designer",
  image: "/project/design-flat-project.svg",
  shortDesc:
    "A sleek landing page design for modern flat listings.",
  longDesc:
    "A conversion-oriented landing page designed for residential flat promotions, focusing on clarity, trust, and strong visuals.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    problemStatement:
      "Flat buyers need clarity on pricing, visuals, and amenities, but most platforms overload them with details. The task was to design a streamlined flow with high visual appeal and clear content hierarchy.",
    userFlow:
      "Hero → About → Amenities → Interiors → Pricing → Testimonials → Contact",
    systemFlow:
      "Scroll → Content Reveal → CTA Interaction → Lead Form → Confirmation",
    featureJustification:
      "Hero improves clarity, amenities add lifestyle value, interiors attract emotions, testimonials build trust, and sticky footers drive continuous engagement.",
    roleAndResponsibilities:
      "Designed layout, visuals, grid structure, CTA placements, and complete responsive prototype.",

    overview:
      "A modern real estate landing page designed to attract flat buyers through clean visuals and structured content.",
    researchAndPlanning:
      "Studied real estate user expectations and optimized the layout to keep key info above the fold.",
    architectureAndSetup:
      "Hero → project highlights → amenities → pricing → testimonials → inquiry.",
    coreFeaturesOrKeySolutions: [
      "⚡ Hero with pricing & location.",
      "⚡ Lifestyle amenities grid.",
      "⚡ Interiors showcase.",
      "⚡ Clear pricing section.",
      "⚡ Testimonials carousel.",
      "⚡ Sticky CTA footer."
    ],
    challengesAndLearnings:
      "Balancing visuals with detailed property info required modular structuring.",
    testingAndFeedback:
      "Refinements were made to spacing and typography after peer reviews.",
    deploymentOrFinalPrototype: {
      link: "https://www.figma.com/proto/XyW9PgZAT4PllXY9izVX6O/My-plot-pic?node-id=1419-170&t=oEPMWeEuRIsKYJ1M-0&scaling=min-zoom&content-scaling=fixed&page-id=47%3A5&starting-point-node-id=1419%3A170&show-proto-sidebar=1",
      github: "N/A"
    },
    reflectionAndFutureScope:
      "Plan to add interactive maps and animated hero visuals."
  }
}
,
{
  id: "realestate-landingpage-ag-plot",
  category: "designing",
  title: "Real Estate Agricultural Land Landing Page",
  role: "UI/UX Designer",
  image: "/project/design-ag-land-project.svg",
  shortDesc:
    "A clean, nature-inspired landing page for agricultural land listings.",
  longDesc:
    "Designed to promote agricultural land through trust-building visuals, clarity, and structured information flow.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    problemStatement:
      "Buyers struggle to understand soil details, land value, legal info, and location access. The challenge was to simplify technical land information into a clear, trustworthy design.",
    userFlow:
      "Hero → About Land → Location → Key Benefits → Pricing → Contact",
    systemFlow:
      "Scroll → Section Reveal → Map Interaction → CTA → Lead Submission",
    featureJustification:
      "Aerial visuals add context, soil data builds credibility, maps improve understanding, pricing sections motivate inquiries, and testimonials build trust.",
    roleAndResponsibilities:
      "Handled research, layout structure, color palette, iconography, spacing system, and prototyping.",

    overview:
      "A structured landing page designed for agricultural investors focusing on clarity and trust.",
    researchAndPlanning:
      "Researched buyer expectations like soil quality, irrigation, and legal clarity.",
    architectureAndSetup:
      "Hero → land overview → location map → investment highlights → pricing → inquiry form.",
    coreFeaturesOrKeySolutions: [
      "⚡ Aerial visuals.",
      "⚡ Soil & irrigation details.",
      "⚡ Interactive map.",
      "⚡ Pricing & offers.",
      "⚡ Investor testimonials.",
      "⚡ Fully responsive."
    ],
    challengesAndLearnings:
      "Main challenge was simplifying technical land data. Solved using iconography and collapsible sections.",
    testingAndFeedback:
      "Usability tests improved clarity and CTA placements.",
    deploymentOrFinalPrototype: {
      link: "https://www.figma.com/proto/XyW9PgZAT4PllXY9izVX6O/My-plot-pic?node-id=1790-2217&t=oEPMWeEuRIsKYJ1M-0&scaling=min-zoom&content-scaling=fixed&page-id=47%3A5&starting-point-node-id=1419%3A170&show-proto-sidebar=1",
      github: "N/A"
    },
    reflectionAndFutureScope:
      "Plans include drone video integration and animated storytelling."
  }
}
,
{
  id: "realestate-landingpage-plot-design",
  category: "designing",
  title: "Real Estate Plot Landing Page Design",
  role: "UI/UX Designer",
  image: "/project/design-plot-project.svg",
  shortDesc:
    "A clean landing page designed to showcase residential plots.",
  longDesc:
    "A high-conversion plot landing page designed for clarity, trust-building, and smooth exploration.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    problemStatement:
      "Users looking for plots face confusion around layout maps, pricing, and location clarity. The task was to design a structured, trustworthy, easy-to-explore landing page.",
    userFlow:
      "Hero → Plot Layout → Amenities → Location Map → Pricing & EMI → Inquiry",
    systemFlow:
      "Scroll → Section Reveal → Map Interaction → CTA → Lead Capture",
    featureJustification:
      "Hero builds trust, plot layout clarifies visuals, amenities add lifestyle value, maps improve navigation, and pricing removes friction.",
    roleAndResponsibilities:
      "Designed the overall UX flow, visual style, grid, spacing, CTA strategy, and responsive prototype.",

    overview:
      "A layout designed to simplify plot research through visual storytelling and clear segmenting.",
    researchAndPlanning:
      "Analyzed user needs around transparency and layout previews.",
    architectureAndSetup:
      "Linear flow: hero → layout → amenities → map → pricing → inquiry.",
    coreFeaturesOrKeySolutions: [
      "⚡ Plot layout preview.",
      "⚡ Amenities breakdown.",
      "⚡ Interactive location map.",
      "⚡ EMI options.",
      "⚡ Testimonials.",
      "⚡ Responsive layout."
    ],
    challengesAndLearnings:
      "Balancing visuals with detailed data required strict spacing and modular components.",
    testingAndFeedback:
      "Prototype reviews confirmed the pricing + map sections as top-performing.",
    deploymentOrFinalPrototype: {
      link: "https://www.figma.com/proto/XyW9PgZAT4PllXY9izVX6O/My-plot-pic?node-id=2887-4361&t=oEPMWeEuRIsKYJ1M-0&scaling=min-zoom&content-scaling=fixed&page-id=47%3A5&starting-point-node-id=2887%3A4361&show-proto-sidebar=1",
      github: "N/A"
    },
    reflectionAndFutureScope:
      "Future upgrades include plot comparison and a virtual walkthrough."
  }
}




 

];
