import { Event, EventCategory } from "@/types/event";

// Dummy events for demo purposes with dates from today onwards
// Current date: January 6, 2026

export function getDummyEvents(): Event[] {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
  
  const thisFriday = new Date(today);
  const daysUntilFriday = (5 - today.getDay() + 7) % 7;
  thisFriday.setDate(today.getDate() + daysUntilFriday);
  
  const thisSaturday = new Date(thisFriday);
  thisSaturday.setDate(thisFriday.getDate() + 1);

  const thisSunday = new Date(thisSaturday);
  thisSunday.setDate(thisSaturday.getDate() + 1);

  const nextWeekWednesday = new Date(today);
  nextWeekWednesday.setDate(today.getDate() + 8);

  const dummyEvents: Event[] = [
    // VANDAAG - 6 Jan
    {
      id: "gravensteen-visit",
      title: "Bezoek aan het Gravensteen",
      description: "Ontdek de machtige burcht van de graven van Vlaanderen. In de winter hangt er een mysterieuze sfeer in de koude stenen gangen. Warm je op met de audiotour van Wouter Deprez.",
      teaser: "Bezoek de machtige burcht met de ludieke audiotour van Wouter Deprez.",
      startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
      endDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 0),
      location: "Gravensteen",
      address: "Sint-Veerleplein 11, 9000 Gent",
      imageUrl: "https://images.unsplash.com/photo-1647614055272-acda46c4f69e?w=800&h=600&fit=crop", // Castle image replacement
      category: "familie" as EventCategory,
      price: "€12",
      source: "MANUAL" as const,
    },
    {
      id: "winter-boat-tour",
      title: "Verwarmde Boottocht op de Leie",
      description: "Bewonder de 'skyline' van Gent vanop het water. Geen zorgen over de kou, onze boten zijn overdekt en heerlijk verwarmd. De kapitein vertelt sterke verhalen over de stad.",
      teaser: "Lekker warm de stad verkennen in een overdekte boot.",
      startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
      endDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0),
      location: "Graslei",
      address: "Graslei, 9000 Gent",
      imageUrl: "https://images.unsplash.com/photo-1698224536768-45ae69cb0df9?w=800&h=600&fit=crop", // Canal/bootish
      category: "overig" as EventCategory,
      price: "€9",
      source: "MANUAL" as const,
    },
    {
      id: "msk-museum",
      title: "Oude Meesters in het MSK",
      description: "Vlucht voor de winterkou en duik in de kunstgeschiedenis. Het Museum voor Schone Kunsten herbergt een topcollectie van middeleeuwen tot 20ste eeuw.",
      teaser: "Vlucht voor de winterkou en geniet van topkunst in het MSK.",
      startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
      endDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 30),
      location: "MSK Gent",
      address: "Fernand Scribedreef 1, 9000 Gent",
      imageUrl: "https://images.unsplash.com/photo-1554907984-15263bf063bd?w=800&h=600&fit=crop", // Museum vibe
      category: "kunst" as EventCategory,
      price: "€12",
      source: "MANUAL" as const,
    },

    // MORGEN - 7 Jan
    {
      id: "lam-gods",
      title: "Het Lam Gods Bezoeken",
      description: "Hét meesterwerk van de Gebroeders Van Eyck. Bewonder de details van dit wereldberoemde altaarstuk in de sacramentskapel van de Sint-Baafskathedraal.",
      teaser: "Bewonder het wereldberoemde Lam Gods in de Sint-Baafskathedraal.",
      startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10, 30),
      endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 16, 0),
      location: "Sint-Baafskathedraal",
      address: "Sint-Baafsplein, 9000 Gent",
      imageUrl: "https://images.unsplash.com/photo-1548625361-988225d7d5fe?w=800&h=600&fit=crop", // Cathedral detail
      category: "kunst" as EventCategory,
      price: "€16",
      source: "MANUAL" as const,
    },
    {
      id: "gent-by-night",
      title: "Gent Verlicht: Avondwandeling",
      description: "Gent heeft een bekroond lichtplan. Zodra de avond valt, lichten de monumenten sprookjesachtig op. Perfect voor een frisse, romantische winterwandeling.",
      teaser: "Ontdek het sprookjesachtig verlichte Gent tijdens een avondwandeling.",
      startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 19, 0),
      endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 21, 0),
      location: "Sint-Michielsbrug",
      address: "Sint-Michielsbrug, 9000 Gent",
      imageUrl: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&h=600&fit=crop", // Night city
      category: "overig" as EventCategory,
      price: "Gratis",
      source: "MANUAL" as const,
    },

    // WEEKEND / DEZE WEEK
    {
      id: "jazz-hot-club",
      title: "Live Jazz in Hot Club Gent",
      description: "Warm op in dit verscholen steegje met stomende live jazz. Een begrip in Gent voor muziekliefhebbers. Gezelligheid gegarandeerd!",
      teaser: "Stomende live jazz in een gezellig verscholen steegje.",
      startDate: new Date(thisFriday.getFullYear(), thisFriday.getMonth(), thisFriday.getDate(), 21, 0),
      endDate: new Date(thisFriday.getFullYear(), thisFriday.getMonth(), thisFriday.getDate(), 23, 59),
      location: "Hot Club Gent",
      address: "Schuddeveilstraatje, 9000 Gent",
      imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
      category: "muziek" as EventCategory,
      price: "Gratis",
      source: "MANUAL" as const,
    },
    {
      id: "bloemenmarkt",
      title: "Zondagse Bloemenmarkt",
      description: "Kleur je winterzondag op de Kouter. Bloemen, planten en... oesters met champagne bij 'De Blauwe Kiosk' is een Gentse traditie.",
      teaser: "Bloemen, planten en oesters op de Kouter: een echte zondagse traditie.",
      startDate: new Date(thisSunday.getFullYear(), thisSunday.getMonth(), thisSunday.getDate(), 8, 0),
      endDate: new Date(thisSunday.getFullYear(), thisSunday.getMonth(), thisSunday.getDate(), 13, 0),
      location: "De Kouter",
      address: "Kouter, 9000 Gent",
      imageUrl: "https://images.unsplash.com/photo-1563245464-969c6f29633c?w=800&h=600&fit=crop",
      category: "markt" as EventCategory,
      price: "Gratis",
      source: "MANUAL" as const,
    },
    {
      id: "huis-van-alijn",
      title: "Het Huis van Alijn",
      description: "Het museum van het dagelijks leven. Duik in nostalgie en ontdek hoe we vroeger leefden, vierden en rouwden. Hartverwarmend herkenbaar.",
      teaser: "Duik in nostalgie en het dagelijks leven van vroeger.",
      startDate: new Date(thisSaturday.getFullYear(), thisSaturday.getMonth(), thisSaturday.getDate(), 10, 0),
      endDate: new Date(thisSaturday.getFullYear(), thisSaturday.getMonth(), thisSaturday.getDate(), 17, 30),
      location: "Huis van Alijn",
      address: "Kraanlei 65, 9000 Gent",
      imageUrl: "https://images.unsplash.com/photo-1588863266938-1ee4608c0206?w=800&h=600&fit=crop", // Cozy indoor/old vibe
      category: "familie" as EventCategory,
      price: "€8",
      source: "MANUAL" as const,
    },
    
    // VOLGENDE WEEK (tot 18 jan)
    {
      id: "film-sphinx",
      title: "Filmklassieker in Sphinx Cinema",
      description: "Ontsnap aan het grijze weer met een kwaliteitsfilm in de Sphinx. Inclusief nabespreking in het gezellige café.",
      teaser: "Kwaliteitsfilm kijken in de gezellige Sphinx Cinema.",
      startDate: new Date(nextWeekWednesday.getFullYear(), nextWeekWednesday.getMonth(), nextWeekWednesday.getDate(), 20, 0),
      endDate: new Date(nextWeekWednesday.getFullYear(), nextWeekWednesday.getMonth(), nextWeekWednesday.getDate(), 22, 30),
      location: "Sphinx Cinema",
      address: "Sint-Michielshelling 3, 9000 Gent",
      imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
      category: "film" as EventCategory,
      price: "€11",
      source: "MANUAL" as const,
    },
  ];

  return dummyEvents;
}
