const services = [
  {
    title: "Website Development",
    description:
      "We build responsive, user-friendly websites that drive engagement and conversions. Our web development services ensure your site is fast, secure, and optimized for the best user experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-laptop text-green-100"
      >
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    ),
    types: [
      "Custom Website",
      "CMS Development",
      "E-commerce Development",
      "Website Maintenance",
    ],
  },
  {
    title: "App Development",
    description:
      "Transform your ideas into functional, user-centric mobile and web applications. Our app development services include design, development, and maintenance to ensure your app performs seamlessly across all devices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-smartphone text-green-100"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    types: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Development",
      "Progressive Web Apps",
    ],
  },
  {
    title: "Branding",
    description:
      "Our branding service empowers businesses to develop a distinctive identity that resonates with their target audience and sets them apart from the competition. We craft captivating logos, sensory color palettes, and compelling brand narratives that create a lasting impact on customers. With our comprehensive brand guidelines, your brand identity remains consistent across all platforms, leaving a memorable impression.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-cookie text-green-100"
      >
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 15.5v.01" />
        <path d="M12 12v.01" />
        <path d="M11 17v.01" />
        <path d="M7 14v.01" />
      </svg>
    ),
    types: [
      "Logo Design",
      "Brand Strategy Consulting",
      "Brand Identity Design",
      "User Interface Design",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing strategies help you reach a larger audience and increase conversions. We use a variety of tactics including SEO, PPC, content marketing, and social media marketing to drive traffic and engagement.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-line-chart text-green-100"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    types: ["SEO", "PPC", "Content Marketing", "Social Media Marketing"],
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility on search engines with our expert SEO services. We conduct comprehensive keyword research, optimize your content, and build quality backlinks to increase your rankings.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-search text-green-100"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    types: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO"],
  },
  {
    title: "Quality Assurance",
    description:
      "Ensure the highest quality for your software with our quality assurance services. We provide comprehensive testing, including manual and automated testing, to identify and fix issues before they impact your users.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-shield-check text-green-100"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    types: [
      "Manual Testing",
      "Automated Testing",
      "Performance Testing",
      "Security Testing",
    ],
  },
  {
    title: "Graphic Design",
    description:
      "Our creative designers will provide visually stunning graphics that captivate your audience. From social media graphics to print design, we cover all your graphic design needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-brush text-green-100"
      >
        <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
        <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
      </svg>
    ),
    types: [
      "Social Media Graphics",
      "Print Design",
      "Illustrations",
      "Infographics",
    ],
  },
  {
    title: "Animation",
    description:
      "Bring your ideas to life with our animation services. We create engaging animations for various purposes, including explainer videos, product demos, and marketing campaigns.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-clapperboard text-green-100"
      >
        <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
        <path d="m6.2 5.3 3.1 3.9" />
        <path d="m12.4 3.4 3.1 4" />
        <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      </svg>
    ),
    types: [
      "2D Animation",
      "3D Animation",
      "Motion Graphics",
      "Explainer Videos",
    ],
  },
];

export default services;
