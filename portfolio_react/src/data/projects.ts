import webShopImage from "../assets/WebShop.png";
import budgetAppImage from "../assets/BudgetApp.png";
import escapeRoomImage from "../assets/EscapeRoom.png";
import sverigesRadioImage from "../assets/SverigesRadio.png";
import goodMorningClubImage from "../assets/GoodMorningClub.png";

import hotelImage from "../assets/Hotel.png";

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
  repoUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Skolprojekt: Webbshop med JavaScript-villkor",
    image: webShopImage,
    description: "JavaScript-tung e-handelsapplikation med fokus på komplex varukorgslogik och villkorliga betalningsformulär. Strukturerad med modern SCSS-arkitektur och semantisk HTML5.",
    tags: ["HTML", "SCSS", "JavaScript"],
    repoUrl: "https://github.com/filip-brandt/album-webshop"
  },
  {
    id: 2,
    title: "Skolprojekt: Budgetapp",
    image: budgetAppImage,
    description: "TypeScript-baserad budgetapplikation med fokus på typsäkerhet och lokal datalagring via LocalStorage. Hanterar dynamisk inkomst- och utgiftsspårning med en strukturerad stylingarkitektur i SCSS.",
    tags: ["TypeScript", "LocalStorage",  "Vite", "SCSS", "Prettier"],
    repoUrl: "https://github.com/filip-brandt/Budget-app"
  },
  {
    id: 3,
    title: "Skolprojekt i grupp: Escape Room Spel",
    image: escapeRoomImage,
    description: "Interaktivt Escape Room-spel utvecklat som ett agilt gruppprojekt direkt för webbläsaren. Fokus på logikhantering, händelsestyrd programmering (DOM-manipulation) och versionshantering via Git för sömlöst teamsamarbete.",
    tags: ["HTML", "CSS", "TypeScript", "Vite", "ESLint", "Prettier", "Git"],
    repoUrl: "https://github.com/filip-brandt/Escape-Room-Game"
  },
  {
    id: 4,
    title: "Skolprojekt: Hotell webbplats",
    image: hotelImage,
    description: "Slutprojekt i Webbutveckling 1 bestående av en responsiv och modern hotellwebbplats. Bedömd med högsta betyg (A) för välstrukturerad kod, semantisk HTML5, CSS3-arkitektur och god användarvänlighet (UI/UX).",
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/filip-brandt/modul4-hotell"
  },
  {
    id: 5,
    title: "Skolprojekt: Refaktorering av kodbas",
    image: sverigesRadioImage,
    description: "Skolprojekt fokuserat på refaktorering av befintlig kodbas samt strikt tillämpning av Conventional Commits. Rollspelat scenario kring att ta över en annan utvecklares kod, optimera strukturen och förbereda en kundpresentation.",
    tags: ["HTML", "SCSS", "TypeScript", "Refaktorering", "Conventional Commits", "Vite", "ESLint", "Git"],
    repoUrl: "https://github.com/filip-brandt/Refaktorera-Kod"
  },
  {
    id: 6,
    title: "Skolprojekt: Café meny",
    image: goodMorningClubImage,
    description: "Avancerad magasinslayout byggd med CSS Grid och Flexbox utifrån en designskiss. Slutförd med högsta betyg (VG) för pixel-precision och ren kodstruktur.",
    tags: ["HTML", "CSS", "JavaScript", "Grid", "Flexbox"],
    repoUrl: "https://github.com/filip-brandt/good-morning-club"
  }
];