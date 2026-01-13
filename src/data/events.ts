import { Event } from "@/types/event";

// Helper om datums te maken relatief aan vandaag
const daysFromNow = (days: number, hour: number = 20, minute: number = 0): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(hour, minute, 0, 0);
  return date;
};

export const dummyEvents: Event[] = [
  {
    id: "jazz-in-het-park",
    title: "Jazz in het Park",
    teaser: "Een magische avond vol swingend livejazz onder de sterrenhemel.",
    description:
      "Kom genieten van een onvergetelijke avond jazz in het prachtige Citadelpark. Dit jaar verwelkomen we topacts uit binnen- en buitenland die de mooiste jazz-standards brengen. Neem je picknickkleed mee en geniet van food trucks met lokale lekkernijen.",
    startDate: daysFromNow(0, 19, 0),
    location: "Citadelpark",
    address: "Citadelpark, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
    ticketLink: "https://jazzinhetpark.be/",
    category: "muziek",
    price: "Gratis",
    source: "API",
  },
  {
    id: "gent-smaakt",
    title: "Gent Smaakt",
    teaser: "Proef gerechten van over de hele wereld op het Sint-Pietersplein.",
    description:
      "Het grootste food truck festival van Vlaanderen keert terug! Met meer dan 40 food trucks uit 20 landen is er voor ieder wat wils. Van authentieke Mexicaanse taco's tot Japanse ramen.",
    startDate: daysFromNow(1, 12, 0),
    endDate: daysFromNow(2, 22, 0),
    location: "Sint-Pietersplein",
    address: "Sint-Pietersplein, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&h=600&fit=crop",
    ticketLink: "https://www.gentsmaakt.be/",
    category: "food",
    price: "Gratis",
    source: "API",
  },
  {
    id: "open-cinema",
    title: "Open Cinema",
    teaser: "Filmklassiekers op groot scherm onder de open hemel.",
    description:
      "Hier belééf je cinema. Van nieuwe titels tot zeldzame parels. Geniet van een unieke filmervaring in de openlucht.",
    startDate: daysFromNow(2, 21, 0),
    location: "Sphinx Cinema",
    address: "Sint-Michielshelling 3, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    ticketLink: "https://www.opencinema.be/",
    category: "film",
    price: "€12",
    source: "API",
  },
  {
    id: "kunst-op-straat",
    title: "Kunst op Straat",
    teaser: "Ontdek verrassende kunstinstallaties door het Patershol.",
    description:
      "Een week lang transformeert het Patershol in een openluchtmuseum. Meer dan 30 lokale en internationale kunstenaars tonen hun werk.",
    startDate: daysFromNow(3, 10, 0),
    endDate: daysFromNow(9, 22, 0),
    location: "Patershol",
    address: "Patershol, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=600&fit=crop",
    ticketLink: "https://cultuur.stad.gent/",
    category: "kunst",
    price: "Gratis",
    source: "API",
  },
  {
    id: "nachtmarkt",
    title: "Nachtmarkt",
    teaser: "Shoppen, proeven en genieten tot diep in de nacht.",
    description:
      "De populaire Nachtmarkt keert terug met een unieke mix van vintage vondsten, handgemaakte producten en streetfood.",
    startDate: daysFromNow(4, 18, 0),
    endDate: daysFromNow(4, 1, 0),
    location: "Korenmarkt",
    address: "Korenmarkt, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&h=600&fit=crop",
    ticketLink: "https://stad.gent/",
    category: "markt",
    price: "Gratis",
    source: "API",
  },
  {
    id: "comedy-night",
    title: "Comedy Night Gent",
    teaser: "Lach je een breuk met de beste Vlaamse comedians.",
    description:
      "Een avond vol humor met bekende en opkomende comedians. Line-up wordt binnenkort aangekondigd!",
    startDate: daysFromNow(0, 20, 30),
    location: "Vooruit",
    address: "Sint-Pietersnieuwstraat 23, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800&h=600&fit=crop",
    ticketLink: "https://vooruit.be/",
    category: "theater",
    price: "€18",
    source: "MANUAL",
  },
  {
    id: "yoga-in-park",
    title: "Yoga in het Blaarmeersen",
    teaser: "Start je weekend met een ontspannende yoga sessie.",
    description:
      "Elke zaterdag gratis yoga in het Blaarmeersen. Breng je eigen matje mee! Geschikt voor alle niveaus.",
    startDate: daysFromNow(5, 9, 0),
    location: "Blaarmeersen",
    address: "Zuiderlaan 5, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    category: "sport",
    price: "Gratis",
    source: "MANUAL",
  },
  {
    id: "techno-warehouse",
    title: "Warehouse Techno Night",
    teaser: "Underground techno in een industriële setting.",
    description:
      "Een nacht vol diepe beats en hypnotiserende sounds. Met internationale DJ's en een unieke lichtshow.",
    startDate: daysFromNow(6, 23, 0),
    location: "DOK",
    address: "Koopvaardijlaan 13, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1571266028243-d220c6a9c1d3?w=800&h=600&fit=crop",
    ticketLink: "https://dok.be/",
    category: "nightlife",
    price: "€15",
    source: "API",
  },
  {
    id: "kindertheater",
    title: "Kindertheater: De Toverdoos",
    teaser: "Magisch theater voor de allerkleinsten.",
    description:
      "Een betoverend verhaal voor kinderen van 4-10 jaar. Interactief theater waar de kinderen zelf mogen meedoen!",
    startDate: daysFromNow(1, 14, 0),
    location: "NTGent",
    address: "Sint-Baafsplein 17, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop",
    ticketLink: "https://ntgent.be/",
    category: "familie",
    price: "€8",
    source: "API",
  },
  {
    id: "vinyl-beurs",
    title: "Vinyl & Vintage Beurs",
    teaser: "Duizenden platen en vintage schatten wachten op jou.",
    description:
      "De grootste vinylbeurs van Oost-Vlaanderen. Van obscure jazz tot de nieuwste releases.",
    startDate: daysFromNow(7, 10, 0),
    endDate: daysFromNow(7, 18, 0),
    location: "ICC Gent",
    address: "Van Rysselberghedreef 2, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=800&h=600&fit=crop",
    ticketLink: "https://iccgent.be/",
    category: "markt",
    price: "€5",
    source: "MANUAL",
  },
  {
    id: "food-tour",
    title: "Culinaire Stadswandeling",
    teaser: "Proef het beste van Gent tijdens een begeleide tour.",
    description:
      "In 3 uur tijd bezoek je 5 culinaire hotspots. Van Gentse waterzooi tot ambachtelijk ijs.",
    startDate: daysFromNow(2, 11, 0),
    location: "Startpunt: Groentenmarkt",
    address: "Groentenmarkt, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    ticketLink: "https://visitgent.be/",
    category: "food",
    price: "€45",
    source: "API",
  },
  {
    id: "running-event",
    title: "Gent City Run",
    teaser: "Loop door de mooiste straten van Gent.",
    description:
      "Kies uit 5km, 10km of halve marathon. Prachtig parcours langs alle highlights van de stad.",
    startDate: daysFromNow(14, 10, 0),
    location: "Start: Sint-Baafsplein",
    address: "Sint-Baafsplein, 9000 Gent",
    imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
    ticketLink: "https://gentcityrun.be/",
    category: "sport",
    price: "€25",
    source: "API",
  },
];

// Helper functies voor filtering
export function getEventsForDate(events: Event[], date: Date): Event[] {
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);
  
  const nextDay = new Date(targetDate);
  nextDay.setDate(nextDay.getDate() + 1);
  
  return events.filter((event) => {
    const eventStart = new Date(event.startDate);
    eventStart.setHours(0, 0, 0, 0);
    
    const eventEnd = event.endDate 
      ? new Date(event.endDate) 
      : new Date(event.startDate);
    eventEnd.setHours(23, 59, 59, 999);
    
    return eventStart <= nextDay && eventEnd >= targetDate;
  });
}

export function getUpcomingEvents(events: Event[], limit?: number): Event[] {
  // For demo: show all events sorted by date (not filtering past events)
  // In production, you would filter by current date
  const sorted = events
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  
  return limit ? sorted.slice(0, limit) : sorted;
}

export function filterEventsByCategory(events: Event[], category: string): Event[] {
  if (category === "alle") return events;
  return events.filter((event) => event.category === category);
}

export function searchEvents(events: Event[], query: string): Event[] {
  const lowerQuery = query.toLowerCase();
  return events.filter(
    (event) =>
      event.title.toLowerCase().includes(lowerQuery) ||
      event.teaser.toLowerCase().includes(lowerQuery) ||
      event.location.toLowerCase().includes(lowerQuery)
  );
}
