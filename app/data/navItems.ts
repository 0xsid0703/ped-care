// navItems.js
export const navItems = [
  {
    title: "Home",
    href: "/", // Regular link
  },
  {
    title: "Our Doctor",
    href: "/our-doctor", // Regular link
  },
  {
    title: "Pediatric Services",
    submenu: [
      // Dropdown menu
      { title: "Sick Visits", href: "/sick-visits" },
      { title: "Wellness Visits", href: "/wellness-visits" },
      {
        title: "School and Sports Physicals",
        href: "/school-and-sports-physicals",
      },
      { title: "Newborn Care", href: "/newborn-care" },
      { title: "Immunizations", href: "/immunizations" },
      { title: "Additional Pediatric Medical Services", href: "/additaional" },
    ],
  },
  {
    title: "Patient Portal",
    href: "/portal", // Regular link
  },
  {
    title: "About",
    submenu: [
      // Dropdown menu
      { title: "Forms and Policies", href: "/forms-policies" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Contact",
    href: "/contact", // Regular link
  },
];
