export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  teaser: string;
  description: string;
  imageUrl: string;
  ticketLink: string;
}

export const events: Event[] = [
  {
    id: "jazz-in-het-park",
    title: "Jazz in het Park",
    date: "15 februari 2026 • 19:00",
    location: "Citadelpark, Gent",
    teaser: "Een magische avond vol swingend livejazz onder de sterrenhemel.",
    description:
      "Kom genieten van een onvergetelijke avond jazz in het prachtige Citadelpark. Dit jaar verwelkomen we topacts uit binnen- en buitenland die de mooiste jazz-standards brengen. Neem je picknickkleed mee en geniet van food trucks met lokale lekkernijen. Het evenement is geschikt voor alle leeftijden. Bij slecht weer verhuizen we naar de overdekte Parkhal.",
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&h=800&fit=crop",
    ticketLink: "https://jazzintpark.be/",
  },
  {
    id: "gent-smaakt",
    title: "Gent Smaakt",
    date: "22-23 februari 2026 • 12:00 - 22:00",
    location: "Sint-Pietersplein, Gent",
    teaser: "Proef gerechten van over de hele wereld op het Sint-Pietersplein.",
    description:
      "Het grootste food truck festival van Vlaanderen keert terug! Met meer dan 40 food trucks uit 20 landen is er voor ieder wat wils. Van authentieke Mexicaanse taco's tot Japanse ramen, van Belgische friet tot vegan delights. Live muziek en activiteiten voor kinderen maken het een perfect familie-uitje. Gratis toegang!",
    imageUrl: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=1200&h=800&fit=crop",
    ticketLink: "https://www.gentsmaakt.be/nl/",
  },
  {
    id: "open-cinema",
    title: "Open Cinema",
    date: "27 september 2026 • 21:00",
    location: "Sphinx, Gent",
    teaser: "Filmklassiekers op groot scherm onder de open hemel.",
    description:
      "Hier belééf je cinema. Van nieuwe titels tot zeldzame parels en inspirerende programma’s. Tussen 27 september en 5 oktober 2025 verrassen verschillende bioscopen en filmvertoners met hun gevarieerde aanbod.",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=800&fit=crop",
    ticketLink: "https://www.opencinema.be/",
  },
  {
    id: "kunst-op-straat",
    title: "Kunst op Straat",
    date: "1-7 maart 2026 • Hele dag",
    location: "Patershol, Gent",
    teaser: "Ontdek verrassende kunstinstallaties door het Patershol.",
    description:
      "Een week lang transformeert het Patershol in een openluchtmuseum. Meer dan 30 lokale en internationale kunstenaars tonen hun werk op onverwachte plekken: van muurschilderingen tot interactieve installaties. Download de gratis app voor een audiotour en achtergrondverhalen bij elk kunstwerk. Workshops voor kinderen op woensdag en zaterdag.",
    imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&h=800&fit=crop",
    ticketLink: "https://cultuur.stad.gent/nl/street-art",
  },
  {
    id: "nachtmarkt",
    title: "Nachtmarkt",
    date: "14 maart 2026 • 18:00 - 01:00",
    location: "Korenmarkt, Gent",
    teaser: "Shoppen, proeven en genieten tot diep in de nacht.",
    description:
      "De populaire Nachtmarkt keert terug met een unieke mix van vintage vondsten, handgemaakte producten, streetfood en live entertainment. Meer dan 100 kraampjes bieden alles van vinyl platen tot artisanale chocolade. DJ's zorgen voor de beats, en de lokale horeca opent speciaal haar terrassen. Een nachtvlinder-ervaring die je niet wilt missen!",
    imageUrl: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&h=800&fit=crop",
    ticketLink: "https://stad.gent/nl/cultuur-vrije-tijd/markten-gent",
  },
];
