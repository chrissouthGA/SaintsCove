/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{js,ts,jsx,tsx,mdx}",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/components/NavBar.tsx",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/components/AdminNavBar.tsx",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/src/app/about/page.tsx",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/src/app/connect/page.tsx",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/src/app/media/page.tsx",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/src/app/team/page.tsx",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/src/app/page.tsx",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/src/app/admin/[[...index]]/page.tsx",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/components/Logo.tsx",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/public/images/Black and White Geometric Minimalist Logo-2.png",
    "/Users/agathaa/sei-821/projects/SaintsCove/saintscove/public/images/Black and White Modern Man Youtube Profile Picture (8).png",
  ],
  theme: {
    extend: {
      backgroundImage: {
         "homebg":"url('/images/HomePage.png')",
         "aboutbg":"url('/images/AboutPage.png')",
         "connectbg":"url('/images/ConnectPage.png')",
         "mediabg":"url('/images/Media.png')",
         "teambg":"url('/images/Team2.png')",
      },
    },
  },
  plugins: [],
};
