export const teamMembers = [
  { id: "ziad", image: "/team/Ziad%20.jpg" },
  { id: "hassan", image: "/team/Hassan%20.jpg" },
  { id: "ali", image: "/team/Ali.jpeg" },
  { id: "mohamed", image: "/team/Mohamed%20.jpg" },
  { id: "amr", image: "/team/Amr.jpg" },
  { id: "abeer", image: "/team/Abeer%20.jpg" },
  { id: "aya", image: "/team/Aya%20.jpg" },
  { id: "hala", image: "/team/Hala%20.jpg" },
  { id: "mariam", image: "/team/Mariam.jpg" },
  
] as const;

export type TeamMemberId = (typeof teamMembers)[number]["id"];
