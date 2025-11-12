import { prototype } from "events";

// /data/projectsData.js
export const projects = [
{
  id: "internal-admin-dashboard",
  category: "developing",
  title: "Internal Admin Dashboard",
  role: "Front-End Developer",
  image: "/project/dashboard.jpg",
  shortDesc:
    "A secure admin dashboard built for managing cab rental listings, featuring authentication, approval workflows, and real-time activity tracking.",
  longDesc:
    "Developed an internal admin dashboard for a cab rental service using Next.js and TailwindCSS. The system enables multiple admins to log in, review rental listings, and perform actions like approving or rejecting requests. It also includes an Admin Tracker that logs every activity for transparent operations. The focus was on scalability, UI performance, and intuitive user experience.",

  tools: ["Next.js", "React", "TailwindCSS", "Context API", "Framer Motion"],
  year: 2025,

  projectDetails: {
    overview:
      "The Internal Admin Dashboard is a front-end application designed for cab rental administrators to manage user bookings efficiently. The goal was to create a responsive, user-friendly system where admins can authenticate, view rental records, approve or reject bookings, and track their actions. Built with Next.js for fast rendering and TailwindCSS for a consistent, modern interface.",

    researchAndPlanning:
      "Before development, I defined the key requirements — authentication flow, listing management, and action logging. Created a basic **system flow diagram** outlining how data moves between login, dashboard, and admin tracker modules. This planning ensured modular development and smoother state management.",
    
    architectureAndSetup:
      "The project is structured using the Next.js app router for scalability. Each section (Login, Dashboard, Admin Tracker) is modularized within the `app/components` folder. Context API handles global states such as authentication and activity logs. TailwindCSS was configured for responsive layouts, and Framer Motion introduced lightweight UI animations for better transitions. Simulated APIs were created using local data files for demonstration.",
    
    coreFeaturesOrKeySolutions: [
      "🔐 **Authentication Flow** – Static multi-admin login system simulating real access control.",
      "•  **Rental Listing Management** – Displays booking details like user name, car, start and return dates, and cost.",
      "⚙️ **Action Controls** – Approve, Reject, or View bookings directly from the dashboard.",
      "•  **Admin Tracker** – Real-time log of every action taken by each admin with timestamps.",
      "•  **Responsive UI** – Optimized layout for both desktop and tablet views.",
      "⚡ **Performance Optimization** – Implemented minimal re-render strategy via memoization and functional updates."
    ],

    challengesAndLearnings:
      "A major challenge was ensuring the admin tracker updated seamlessly without unnecessary component re-renders. Solved it by designing a unidirectional data flow with React Context and useReducer. Another learning was planning UI hierarchy early to avoid prop drilling issues as the app scaled.",

    testingAndFeedback:
      "Conducted manual testing across different admin scenarios and screen sizes. Verified that all actions (approve, reject, edit) correctly reflected in the Admin Tracker. Focused on visual consistency, button state validation, and data integrity after simulated API updates. Peer review highlighted the clarity of workflow and responsive design.",

    deploymentOrFinalPrototype: {
      link: "https://your-live-project-link.com",
      github: "https://github.com/your-repo"
    },

    reflectionAndFutureScope:
      "In the next phase, I plan to integrate real backend APIs for persistent data, implement role-based permissions (super-admin vs staff), and add analytics for tracking approval patterns. Additionally, introducing JWT-based authentication and real-time socket updates would elevate it closer to production-level standards."
  }
},

  {
  id: "admin-expense-tracker",
  category: "developing",
  title: "Admin Expense Tracker Panel",
  role: "UI/UX Designer & Front-End Developer",
  image: "/project/myplotpic-admin.jpg",
  shortDesc:
    "Designed and developed a responsive expense tracking dashboard with real-time insights and data visualization using React and Chart.js.",
  longDesc:
    "Built an interactive admin panel for tracking income and daily expenses with visual insights using React and Chart.js. The dashboard features a circular expense breakdown chart, a bar chart for top expense categories, and a list of recent transactions. Focused on creating an intuitive, visually clean, and mobile-responsive interface that delivers both clarity and usability.",
  tools: ["React", "Chart.js", "TailwindCSS", "localStorage"],
  year: 2025,

  projectDetails: {
    overview:
      "The Admin Expense Tracker Panel is a lightweight front-end application that allows users to log income and expenses while visualizing their spending patterns. It combines simple data entry with interactive charts to give users clear insights into their financial behavior. The project emphasizes functional design and real-time UI updates for a seamless experience.",
    
    researchAndPlanning:
      "The planning began with defining the key goal — to make financial data intuitive through visuals. Identified three major components: the input form for transactions, the charts section for analytics, and the transaction history list.  A basic **flowchart** was created to map how data moves from input to visualization. Focused on balancing aesthetics with usability through consistent color contrast and clean typography.",
    
    architectureAndSetup:
      "The project follows a simple component-based structure using React. State management is handled via useState and data persistence through localStorage. The folder structure separates components like `Form`, `Charts`, and `TransactionList`. React Chart.js was integrated for the circular (expense ratio) and bar (top categories) visualizations. CSS3 and utility classes from TailwindCSS ensured a modern responsive layout.",
    
    coreFeaturesOrKeySolutions: [
      "•  **Add Income & Expense** – Users can record multiple transactions with category and amount details.",
      "•  **Circular Expense Chart** – Displays a proportional breakdown of expenses by category using React Chart.js.",
      "•  **Top Expense Bar Chart** – Highlights the most frequently spent categories over time.",
      "•  **Recent Transactions List** – Provides a chronological view of all income and expense entries.",
      "•  **Persistent Storage** – Uses localStorage to save user data between sessions.",
      "•  **Responsive Layout** – Fully adaptable across devices with clean visual hierarchy and contrast-focused design."
    ],
    
    challengesAndLearnings:
      "The key challenge was ensuring data updates reflected instantly in charts without reloading the entire component tree. This was solved using controlled state management and isolated chart re-renders. Another learning was managing color palettes effectively to differentiate expense categories while maintaining visual harmony.",
    
    testingAndFeedback:
      "Manually tested across different browsers and screen sizes. Verified chart responsiveness, input validation, and storage persistence. Collected feedback focused on improving color readability in light/dark themes and optimized the chart legend layout accordingly.",
    
    deploymentOrFinalPrototype: {
      link: "https://expense-tracker-khy1j3pgw-shivani-tekumudis-projects.vercel.app/",
      github: "https://github.com/Shivani-Tekumudi/Expense_Tracker"
    },
    
    reflectionAndFutureScope:
      "Planned future enhancements include integrating authentication for personalized dashboards, exporting expense reports as CSV/PDF, and using indexedDB or a backend API for larger datasets. Adding predictive analytics or AI-driven spending insights would further elevate this project for real-world scalability."
  }
},

 {
  id: "enterprise-admin-panel",
  category: "developing",
  title: "Admin Panel",
  role: "UI/UX Designer & Front-End Developer",
  image: "/project/myplotpic-admin.jpg",
  shortDesc:
    "Developed a secure enterprise-grade admin interface with authentication, dynamic dashboards, and intuitive data management workflows.",
  longDesc:
    "Contributed to the development of a responsive admin panel for an enterprise project. Focused on creating an accessible, clean interface with secure login, data visualization modules, and modular dashboard components. Implemented reusable UI patterns and ensured pixel-perfect alignment with the company’s design system for consistent brand experience.",

  tools: ["React", "Next.js", "TailwindCSS", "Context API", "Framer Motion"],
  year: 2025,

  projectDetails: {
    overview:
      "The Admin Panel serves as the core internal system for administrators to authenticate, manage users, monitor platform activity, and handle various operational controls. My primary responsibility was to design and develop the front-end architecture that delivers high performance and clarity under complex data operations.",
    
    researchAndPlanning:
      "Started with requirement mapping and UI flow diagrams to understand how different admin roles interact with system modules. Defined core actions such as authentication, data visualization, and CRUD management. Created **flowcharts and wireframes** to validate navigation hierarchy and reduce cognitive load for first-time users.",
    
    architectureAndSetup:
      "Built with React and Next.js to ensure optimized routing and scalability. Implemented a structured component hierarchy using container and presentational components. TailwindCSS and custom utility classes were used for layout and theme control. Context API managed global authentication states, and Framer Motion enhanced UI transitions. Data visualization sections used React Chart.js for clear analytics representation.",
    
    coreFeaturesOrKeySolutions: [
      "🔐 **Role-based Authentication** – Secure login system differentiating admin levels and permissions.",
      "•  **Dashboard Overview** – Summarized key business or platform metrics in interactive visual blocks.",
      "👥 **User Management** – Admins can view, edit, activate, or deactivate users through CRUD-enabled tables.",
      "📦 **Content & Data Control** – Sections to monitor activity logs, manage entries, and trigger actions.",
      "🎨 **Adaptive UI** – Maintains uniform design with responsive scaling across all screen sizes.",
      "⚙️ **Reusable Components** – Developed modular UI components improving maintainability and scalability."
    ],
    
    challengesAndLearnings:
      "The main challenge was optimizing dashboard rendering with multiple data streams while maintaining responsiveness. Resolved this using conditional rendering and lazy loading for non-critical components. Learned how to balance performance and design fidelity under production constraints.",
    
    testingAndFeedback:
      "Collaborated with QA and stakeholders for iterative testing cycles. Performed UI consistency tests, authentication validation, and stress testing for dashboard widgets. Incorporated feedback loops to refine navigation clarity and reduce redundant API calls.",
    
    deploymentOrFinalPrototype: {
      link: "Private — company project (access restricted)",
      github: "Private — source under NDA"
    },
    
    reflectionAndFutureScope:
      "Potential future improvements include integrating advanced analytics dashboards, dark mode accessibility, and role-based audit logs. A move toward micro-frontend architecture could further enhance maintainability and feature isolation for larger enterprise teams."
  }
},
 {
  id: "sass-dashboard-design",
  category: "designing",
  title: "SaaS Automation Dashboard Design",
  role: "UI/UX Designer",
  image: "/project/design-test.jpg",
  shortDesc:
    "A clean and data-focused dashboard concept for automation testing platforms.",
  longDesc:
    "A complete redesign of an outdated SaaS automation dashboard focusing on usability, modern data visualization, and accessibility. Designed to give QA engineers and product managers clear visibility of test runs, coverage, and performance metrics — all within a balanced, intuitive layout.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    overview:
      "This concept project reimagines an existing automation testing dashboard with a focus on clarity, efficiency, and modern design principles. The goal was to enhance user navigation and make complex test data digestible through structured UI and visual storytelling.",
    researchAndPlanning:  
      "Conducted heuristic analysis on traditional QA dashboards to identify pain points like cluttered layouts and poor hierarchy. Mapped out user roles (QA, DevOps, Manager) and defined their core needs — quick overview of test results, easy drill-down into failed cases, and transparent progress tracking.",
    architectureAndSetup:
      "Created an organized component-based layout with a fixed sidebar for navigation, a modular card system for analytics, and a clean data visualization section for insights. Applied an 8pt grid and consistent spacing for a balanced interface. Used Figma auto-layout for scalable responsiveness.",
   coreFeaturesOrKeySolutions: [
  "• Overview dashboard with test summary and recent runs.",
  "• Trend visualization using charts and success/failure ratios.",
  "• Modular analytics cards for test cases, environments, and schedules.",
  "• Color-coded status indicators and notification design for quick scanning.",
  "• Smart filters for date range and test type.",
  "• Dark and light theme prototypes to test accessibility and contrast.",
],
    challengesAndLearnings:
      "The primary challenge was designing for dense data without overwhelming the interface. Solved it through contrast balance, color prioritization, and card modularity — ensuring important KPIs remain prominent while secondary data stays visually lightweight.",
    testingAndFeedback:
      "Performed self-led usability sessions to test visual hierarchy and component clarity. Collected peer feedback on readability and spacing adjustments. Validated contrast ratios for accessibility compliance (WCAG AA).",
    deploymentOrFinalPrototype: {
      link: "N/A (Design Prototype Only)",
      github: "N/A (Design Prototype Only)"
    },
    reflectionAndFutureScope:
      "Plan to extend this design into an interactive prototype with dashboard animation flows, dynamic chart transitions, and a responsive mobile layout to simulate real-world usability for SaaS users."
  }
}
,
{
  id: "realestate-appartment-flat",
  category: "designing",
  title: "Real Estate Apartment Landing Page",
  role: "UI/UX Designer",
  image: "/project/design-apartment-project.jpg",
  shortDesc:
    "An elegant, high-converting landing page design for a modern apartment property.",
  longDesc:
    "Designed a premium real estate landing page aimed at improving user engagement and lead generation. Focused on clear information hierarchy, visual trust elements, and strategic call-to-actions for booking and loan inquiry flows.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    overview:
      "This concept project reimagines a real estate apartment landing page designed to attract potential buyers through a visually engaging and trust-driven layout. The goal was to highlight key amenities, project features, and financial offers while maintaining a luxurious and minimal aesthetic.",
    researchAndPlanning:  
      "Analyzed multiple real estate websites and user behavior patterns. Identified that users often drop off when the layout feels cluttered or lacks transparent financial details. Conducted competitive benchmarking to determine what content hierarchy and visual tone increase credibility and conversions.",
    architectureAndSetup:
      "Structured the layout with a hero banner featuring key highlights (price range, location, CTA). Followed by a modular section flow — About the Property → Amenities → Gallery → Loan & Offers → Testimonials → Contact Form. Designed a 12-column responsive grid system with balanced white space and warm accent tones for a professional yet homely appeal.",
    coreFeaturesOrKeySolutions: [
  "• Hero section with location, price range, and primary CTA (Book Visit / Enquire Now).",
  "• Amenities grid displaying features like gym, pool, clubhouse, etc.",
  "• Gallery section for property and interior previews.",
  "• Interactive budget estimator and loan offer cards.",
  "• Trust-building testimonials and developer credentials.",
  "• Sticky CTA bar for quick actions on scroll (Call / Book Visit / Get Loan Info).",
],

    challengesAndLearnings:
      "The main challenge was maintaining visual harmony while showcasing heavy information — amenities, pricing, and multiple offers. Solved by segmenting data into well-defined visual zones, using accent color for CTAs, and maintaining consistent typography rhythm to guide the user's eye naturally.",
    testingAndFeedback:
      "Conducted peer usability reviews to evaluate clarity and CTA visibility. Ensured responsive behavior through Figma constraints and Auto Layout. Verified contrast and text readability across multiple background tones for accessibility.",
    deploymentOrFinalPrototype: {
      link: "N/A (Design Prototype Only)",
      github: "N/A (Design Prototype Only)"
    },
    reflectionAndFutureScope:
      "Plan to extend the project into a complete property portal concept, integrating interactive filters (budget, location, configuration) and a dashboard for lead tracking. Also aim to experiment with motion prototypes for CTA transitions and gallery animations."
  }
},


  {
  id: "realestate-landingpage-flat",
  category: "designing",
  title: "Real Estate Flat Landing Page",
  role: "UI/UX Designer",
  image: "/project/design-flat-project.jpg",
  shortDesc:
    "A sleek and conversion-focused landing page design for modern residential flats.",
  longDesc:
    "Designed a high-impact real estate landing page highlighting premium flat listings and lifestyle features. Focused on visual storytelling, clarity, and intuitive navigation to drive property inquiries and user engagement.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    overview:
      "This design project presents a modern landing page for a real estate brand promoting residential flats. The objective was to create a clean and aspirational interface that builds trust and simplifies the discovery process for potential homebuyers.",
    researchAndPlanning:  
      "Studied top-performing real estate platforms and user expectations when exploring flat listings. Observed that users value concise information, high-quality visuals, and transparent financial details. Designed the layout to keep key information — price range, amenities, and offers — above the fold for maximum retention.",
    architectureAndSetup:
      "Built a structured visual flow starting with a full-width hero banner featuring flat highlights (location, pricing, and CTA). Followed by modular sections — About the Project → Amenities Overview → Lifestyle & Interiors → Pricing & Offers → Testimonials → Contact Form. Utilized a 12-column responsive grid and consistent visual hierarchy to maintain readability and premium feel.",
    coreFeaturesOrKeySolutions: [
  "• Prominent hero section with quick access to price and location info.",
  "• Amenities showcase highlighting flat interiors, nearby facilities, and lifestyle perks.",
  "• Budget estimator and offer card section to display real-time promotions.",
  "• Testimonials carousel for social proof.",
  "• Sticky footer CTA (Enquire Now / Schedule Visit) for continuous engagement.",
  "• Clean, mobile-friendly design optimized for conversion.",
],

    challengesAndLearnings:
      "The biggest challenge was balancing luxury visuals with dense informational content. Solved by introducing breathing space through modular design, subtle color palette, and a focus on typography consistency. Maintained strong contrast to ensure accessibility and legibility on both light and dark surfaces.",
    testingAndFeedback:
      "Performed peer design critiques to test flow, legibility, and user engagement. Refined hierarchy and CTA placements based on feedback. Used Figma Auto Layout and prototyping to simulate interactions and scrolling behavior across screen sizes.",
    deployment: {
      link: "N/A (Design Prototype Only)",
      github: "N/A (Design Prototype Only)"
    },
    reflectionAndFutureScope:
      "Future improvements include adding an interactive map view, loan calculator micro-interactions, and a chatbot assistant for property guidance. Also plan to explore animation-based storytelling for hero banners to enhance engagement."
  }
},

 {
  id: "realestate-landingpage-ag-plot",
  category: "designing",
  title: "Real Estate Agricultural Land Landing Page",
  role: "UI/UX Designer",
  image: "/project/design-ag-land-project.jpg",
  shortDesc:
    "A clean, conversion-driven landing page designed to promote agricultural land listings with clarity and trust.",
  longDesc:
    "Designed an intuitive, nature-inspired landing page for agricultural land promotions. Focused on credibility, simplicity, and highlighting the value of investment plots through visuals and clear data presentation.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    overview:
      "This design focuses on showcasing agricultural plots for investors and buyers interested in land acquisition. The goal was to create a user-friendly and visually grounded layout that conveys trust, transparency, and the long-term value of owning agricultural property.",
    researchAndPlanning:  
      "Researched how land buyers assess properties — focusing on clarity in location, pricing, soil information, and legal transparency. Analyzed user friction points on typical real estate websites, such as cluttered layouts and missing land specs. Designed the UI to emphasize essential metrics like acreage, soil type, accessibility, and investment benefits.",
    architectureAndSetup:
      "Structured the layout using a logical information flow: Hero Banner (with property highlights) → About the Land → Location Map → Key Features (Fertility, Irrigation, Accessibility) → Investment Benefits → Pricing & Offers → Contact Form. Maintained earthy tones and green highlights to reinforce the agricultural theme, using a consistent 12-column grid and modular spacing for visual balance.",
    coreFeaturesOrKeySolutions: [
  "• Hero section with striking aerial imagery and key highlights (acres, price range, location).",
  "• Section for soil fertility and irrigation details for credibility.",
  "• Interactive map showing nearby infrastructure and landmarks.",
  "• Offer and pricing section with clear CTAs for inquiry.",
  "• Testimonials and investor trust indicators.",
  "• Responsive design optimized for readability across all devices.",
],

    challengesAndLearnings:
      "One challenge was presenting technical data (like soil type and irrigation systems) without overwhelming users. Solved by using iconography, collapsible content sections, and data visualization for better comprehension. Ensured color palette reflected environmental authenticity while maintaining readability.",
    testingAndFeedback:
      "Prototyped in Figma and conducted informal usability tests with a small audience to validate hierarchy and clarity. Adjusted layout spacing, CTA colors, and section sequencing based on feedback for a smoother navigation experience.",
    deployment: {
      link: "N/A (Design Prototype Only)",
      github: "N/A (Design Prototype Only)"
    },
    reflectionAndFutureScope:
      "Future plans include adding interactive data filters (by location, acreage, and price), drone video integration for property showcases, and embedding sustainability metrics to enhance investor confidence."
  }
},

{
  id: "realestate-landingpage-plot-design",
  category: "designing",
  title: "Real Estate Plot Landing Page Design",
  role: "UI/UX Designer",
  image: "/project/design-plot-project.jpg",
  shortDesc:
    "A clean, persuasive real estate landing page crafted to showcase residential plot listings and drive user inquiries.",
  longDesc:
    "Designed a high-converting landing page for residential plots, focusing on trust, clarity, and easy exploration. Created with Figma to ensure grid precision, strong hierarchy, and seamless navigation for prospective buyers.",
  tools: ["Figma", "Illustrator"],
  year: 2025,
  projectDetails: {
    overview:
      "The Real Estate Plot Landing Page was created to simplify how potential buyers view and explore available plots. The goal was to build an intuitive, visually appealing interface that builds trust and communicates property value through structured storytelling and design clarity.",
    researchAndPlanning:  
      "Analyzed several real estate websites to identify gaps in user understanding — particularly around price transparency, amenities, and plot availability. Derived insights from competitor layouts and feedback from real users who prefer quick access to visuals and location details. The focus was on clear segmentation of data and motivating CTAs that push for inquiries.",
    architectureAndSetup:
      "The layout follows a linear scroll experience optimized for conversions — Hero Section with property highlights → Featured Plot Layout → Amenities Overview → Location Map → Pricing & Offer Details → Inquiry Form. The visual direction uses clean whites and accent colors with soft shadows for a modern and trustworthy appearance. Consistent grid structure and modular spacing ensure scalability across devices.",
    coreFeaturesOrKeySolutions: [
  "• Hero banner showcasing prime plot visuals and offer highlights.",
  "• Sectioned layout with details like area size, location benefits, and ownership details.",
  "• Interactive location map with nearby facilities (schools, transport, etc.).",
  "• Transparent pricing and EMI options with strong call-to-action buttons.",
  "• Customer testimonial area to enhance credibility.",
  "• Fully responsive design ensuring optimal view on mobile and tablet.",
],

    challengesAndLearnings:
      "The main challenge was to create a layout that could effectively balance large visuals with critical property data without cluttering. Resolved it by using grid segmentation and white space strategically. Another hurdle was designing strong yet minimal CTAs that blend naturally into the page flow while maintaining focus on conversion intent.",
    testingAndFeedback:
      "Prototyped and tested design flow within Figma to ensure the clarity of CTAs and readability hierarchy. Feedback emphasized that the pricing and location sections were the most engaging, which validated the section prioritization strategy.",
    deployment: {
      link: "N/A (Design Prototype Only)",
      github: "N/A (Design Prototype Only)"
    },
    reflectionAndFutureScope:
      "Future improvements include adding a plot comparison feature, integration with Google Maps for live navigation, and a virtual walkthrough for showcasing layout plans interactively."
  }
}


 

];
