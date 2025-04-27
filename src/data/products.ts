import scytherCase from '../assets/images/products/Pokemon_Scyther_iPhone_Case.webp'
import kabutoCase from '../assets/images/products/Pokemon_Kabuto_Shock_iPhone_Case.webp'
import kakunaCase from '../assets/images/products/Pokemon_Kakuna_Shock_iPhone_Case.webp'
import articunoCase from '../assets/images/products/Pokemon_Articuno_Shock_iPhone_Case.webp'
import machampCase from '../assets/images/products/Machamp_Shiva_iPhone_Tough_Case.webp'
import lucarioCase from '../assets/images/products/LUCARIZARD_iPhone_Tough_Case.webp'
import primeapeCase from '../assets/images/products/Pokemon_Primeape_Android.webp'
import abraCase from '../assets/images/products/Pokemon_Abra_Android_Case.webp'
import slowpokeCase from '../assets/images/products/Pokemon_Slowpoke_Android_Case.webp'
import dratiniCase from '../assets/images/products/Pokemon_Dratini_iPhone_Case.webp'
import hypnoCase from '../assets/images/products/Pokemon_Hypno_Shock_iPhone_Case.webp'
import darkraiCase from '../assets/images/products/Darkrai_Graphic_T-Shirt_iPhone_Tough_Case.webp'
import haunterCase from '../assets/images/products/haunter.webp'
import eeveeCase from '../assets/images/products/Ghost_Eeveelution_iPhone_Tough.webp'
import omanyteCase from '../assets/images/products/Pokemon_Omanyte_Android_Case.webp'
import aerodactylCase from '../assets/images/products/Pokemon_Aerodactyl_Shock_iPhone_Case.webp'
import giratinaCase from '../assets/images/products/Giratina_iPhone_Tough_Case.webp'
import koraidonCase from '../assets/images/products/Koraidons_iPhone_Tough_Case.webp'
import pikachuCase from '../assets/images/products/Minimalist_Electric_Pikachu_Design.webp'
import growlitheCase from '../assets/images/products/Growlithe_iPhone_Tough_Case.webp'
import kingdraCase from '../assets/images/products/kingdra.webp'
import squirtleCase from '../assets/images/products/squirtle.webp'
import meganiumCase from '../assets/images/products/majestic_meganium_iPhone_Case.webp'
import bulbasaurCase from '../assets/images/products/Tropical_Plant_Bulb_Dinosaur.webp'
import leafeonCase from '../assets/images/products/Leafeon_with_background_iPhone_Case.webp'
import gengarCase from '../assets/images/products/gengar.webp'
import legendary1Case from '../assets/images/products/legendary_pokemon_1.webp'
import legendary2Case from '../assets/images/products/legendary_pokemon_2.webp'
import legendary3Case from '../assets/images/products/legendary_pokemon_3.webp'
import dragoniteCase from '../assets/images/products/Dragonite_Imagisnap.webp'
import charmanderCase from '../assets/images/products/Charmander_Imagisnap.webp'
import pichuCase from '../assets/images/products/Pichu_Imagisnap.webp'

export interface Product {
  id: string
  name: string
  pokemon: string
  type: ('fire' | 'water' | 'electric' | 'grass' | 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'dark' | 'fairy' | 'ice' | 'psychic' | 'dragon' | 'steel')[]
  price: number
  image: string
  description: string
  compatibility: 'iPhone' | 'Android'
  caseType: 'Tough' | 'Shock' | 'Standard'
  rating: {
    stars: number
    count: number
    reviews: {
      user: string
      rating: number
      comment: string
      date: string
    }[]
  }
  specifications: {
    material: string
    dimensions: string
    weight: string
    protection: string[]
  }
}

// Convert USD to PKR (1 USD = 278.50 PKR)
const USD_TO_PKR = 278.50

export const products: Product[] = [
  {
    id: 'scyther-case',
    name: 'Scyther iPhone Case',
    pokemon: 'Scyther',
    type: ['bug', 'flying'],
    price: 29.99 * USD_TO_PKR,
    image: scytherCase,
    description: 'Show off your love for the Bug/Flying type Pokemon with this sleek Scyther case.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.5,
      count: 128,
      reviews: [
        {
          user: 'Ash K.',
          rating: 5,
          comment: 'Perfect case for my iPhone! The Scyther design looks amazing.',
          date: '2024-03-15'
        },
        {
          user: 'Misty W.',
          rating: 4,
          comment: 'Great quality, but slightly expensive for a standard case.',
          date: '2024-03-10'
        }
      ]
    },
    specifications: {
      material: 'Premium TPU',
      dimensions: '6.2 x 3.1 x 0.4 inches',
      weight: '1.2 oz',
      protection: ['Scratch Resistant', 'Drop Protection']
    }
  },
  {
    id: 'kabuto-case',
    name: 'Kabuto Shock Case',
    pokemon: 'Kabuto',
    type: ['rock', 'water'],
    price: 34.99 * USD_TO_PKR,
    image: kabutoCase,
    description: 'Protect your device with this shock-resistant Kabuto case.',
    compatibility: 'iPhone',
    caseType: 'Shock',
    rating: {
      stars: 4.8,
      count: 256,
      reviews: [
        {
          user: 'Brock R.',
          rating: 5,
          comment: 'Best shock protection I\'ve ever had! Kabuto design is a bonus.',
          date: '2024-03-18'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU + Polycarbonate',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.5 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'kakuna-case',
    name: 'Kakuna Shock Case',
    pokemon: 'Kakuna',
    type: ['bug', 'poison'],
    price: 34.99 * USD_TO_PKR,
    image: kakunaCase,
    description: 'A durable Kakuna case that provides excellent protection.',
    compatibility: 'iPhone',
    caseType: 'Shock',
    rating: {
      stars: 4.7,
      count: 192,
      reviews: [
        {
          user: 'Gary O.',
          rating: 4,
          comment: 'Great protection, but the Kakuna design is a bit too subtle for my taste.',
          date: '2024-03-17'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'articuno-case',
    name: 'Articuno Shock Case',
    pokemon: 'Articuno',
    type: ['ice', 'flying'],
    price: 39.99 * USD_TO_PKR,
    image: articunoCase,
    description: 'Channel the power of the legendary ice bird with this Articuno case.',
    compatibility: 'iPhone',
    caseType: 'Shock',
    rating: {
      stars: 4.6,
      count: 160,
      reviews: [
        {
          user: 'Cynthia O.',
          rating: 5,
          comment: 'Absolutely love this case! The Articuno design is stunning.',
          date: '2024-03-16'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.5 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'machamp-case',
    name: 'Machamp Tough Case',
    pokemon: 'Machamp',
    type: ['fighting'],
    price: 34.99 * USD_TO_PKR,
    image: machampCase,
    description: 'Show off the power of Machamp with this tough case.',
    compatibility: 'iPhone',
    caseType: 'Tough',
    rating: {
      stars: 4.4,
      count: 128,
      reviews: [
        {
          user: 'Lt. Surge',
          rating: 5,
          comment: 'Best Tough case I\'ve ever had! Machamp design is awesome.',
          date: '2024-03-14'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'lucario-case',
    name: 'Lucario Tough Case',
    pokemon: 'Lucario',
    type: ['fighting', 'steel'],
    price: 34.99 * USD_TO_PKR,
    image: lucarioCase,
    description: 'A stylish Lucario case that provides maximum protection.',
    compatibility: 'iPhone',
    caseType: 'Tough',
    rating: {
      stars: 4.7,
      count: 192,
      reviews: [
        {
          user: 'Erika K.',
          rating: 5,
          comment: 'Great quality and protection! Lucario design is my favorite.',
          date: '2024-03-13'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.5 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'primeape-case',
    name: 'Primeape Android Case',
    pokemon: 'Primeape',
    type: ['fighting'],
    price: 29.99 * USD_TO_PKR,
    image: primeapeCase,
    description: 'Perfect for Android users who love Primeape.',
    compatibility: 'Android',
    caseType: 'Standard',
    rating: {
      stars: 4.3,
      count: 96,
      reviews: [
        {
          user: 'James K.',
          rating: 5,
          comment: 'Great case for my Android! Primeape design is awesome.',
          date: '2024-03-12'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'abra-case',
    name: 'Abra Android Case',
    pokemon: 'Abra',
    type: ['psychic'],
    price: 29.99 * USD_TO_PKR,
    image: abraCase,
    description: 'A mystical Abra case for your Android device.',
    compatibility: 'Android',
    caseType: 'Standard',
    rating: {
      stars: 4.2,
      count: 64,
      reviews: [
        {
          user: 'Gary O.',
          rating: 4,
          comment: 'Great case for my Android! Abra design is unique.',
          date: '2024-03-11'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'slowpoke-case',
    name: 'Slowpoke Android Case',
    pokemon: 'Slowpoke',
    type: ['water', 'psychic'],
    price: 29.99 * USD_TO_PKR,
    image: slowpokeCase,
    description: 'Take it slow with this adorable Slowpoke case.',
    compatibility: 'Android',
    caseType: 'Standard',
    rating: {
      stars: 4.1,
      count: 32,
      reviews: [
        {
          user: 'Ash K.',
          rating: 4,
          comment: 'Great case for my Android! Slowpoke design is cute.',
          date: '2024-03-10'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'dratini-case',
    name: 'Dratini iPhone Case',
    pokemon: 'Dratini',
    type: ['dragon'],
    price: 29.99 * USD_TO_PKR,
    image: dratiniCase,
    description: 'A cute Dratini case for your iPhone.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.0,
      count: 16,
      reviews: [
        {
          user: 'Brock R.',
          rating: 4,
          comment: 'Great case for my iPhone! Dratini design is adorable.',
          date: '2024-03-09'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'hypno-case',
    name: 'Hypno Shock Case',
    pokemon: 'Hypno',
    type: ['psychic'],
    price: 34.99 * USD_TO_PKR,
    image: hypnoCase,
    description: 'Protect your device with this hypnotic Hypno case.',
    compatibility: 'iPhone',
    caseType: 'Shock',
    rating: {
      stars: 4.3,
      count: 96,
      reviews: [
        {
          user: 'Cynthia O.',
          rating: 5,
          comment: 'Great protection and design! Hypno case is a must-have.',
          date: '2024-03-08'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.5 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'darkrai-case',
    name: 'Darkrai Tough Case',
    pokemon: 'Darkrai',
    type: ['dark'],
    price: 39.99 * USD_TO_PKR,
    image: darkraiCase,
    description: 'Embrace the darkness with this Darkrai case.',
    compatibility: 'iPhone',
    caseType: 'Tough',
    rating: {
      stars: 4.5,
      count: 128,
      reviews: [
        {
          user: 'Erika K.',
          rating: 5,
          comment: 'Best Tough case I\'ve ever had! Darkrai design is awesome.',
          date: '2024-03-07'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.5 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'haunter-case',
    name: 'Haunter Case',
    pokemon: 'Haunter',
    type: ['ghost', 'poison'],
    price: 29.99 * USD_TO_PKR,
    image: haunterCase,
    description: 'A spooky Haunter case for your device.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.2,
      count: 64,
      reviews: [
        {
          user: 'Gary O.',
          rating: 4,
          comment: 'Great case for my iPhone! Haunter design is unique.',
          date: '2024-03-06'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'eevee-case',
    name: 'Ghost Eevee Tough Case',
    pokemon: 'Eevee',
    type: ['normal'],
    price: 34.99 * USD_TO_PKR,
    image: eeveeCase,
    description: 'A unique ghost-themed Eevee case.',
    compatibility: 'iPhone',
    caseType: 'Tough',
    rating: {
      stars: 4.4,
      count: 96,
      reviews: [
        {
          user: 'Ash K.',
          rating: 5,
          comment: 'Great case for my iPhone! Eevee design is cute.',
          date: '2024-03-05'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'omanyte-case',
    name: 'Omanyte Android Case',
    pokemon: 'Omanyte',
    type: ['rock', 'water'],
    price: 29.99 * USD_TO_PKR,
    image: omanyteCase,
    description: 'A prehistoric Omanyte case for Android users.',
    compatibility: 'Android',
    caseType: 'Standard',
    rating: {
      stars: 4.1,
      count: 32,
      reviews: [
        {
          user: 'Gary O.',
          rating: 4,
          comment: 'Great case for my Android! Omanyte design is unique.',
          date: '2024-03-04'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'aerodactyl-case',
    name: 'Aerodactyl Shock Case',
    pokemon: 'Aerodactyl',
    type: ['rock', 'flying'],
    price: 39.99 * USD_TO_PKR,
    image: aerodactylCase,
    description: 'Soar high with this Aerodactyl case.',
    compatibility: 'iPhone',
    caseType: 'Shock',
    rating: {
      stars: 4.6,
      count: 160,
      reviews: [
        {
          user: 'Cynthia O.',
          rating: 5,
          comment: 'Absolutely love this case! The Aerodactyl design is stunning.',
          date: '2024-03-03'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.5 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'giratina-case',
    name: 'Giratina Tough Case',
    pokemon: 'Giratina',
    type: ['ghost', 'dragon'],
    price: 39.99 * USD_TO_PKR,
    image: giratinaCase,
    description: 'A legendary Giratina case for your device.',
    compatibility: 'iPhone',
    caseType: 'Tough',
    rating: {
      stars: 4.7,
      count: 192,
      reviews: [
        {
          user: 'Erika K.',
          rating: 5,
          comment: 'Great case for my iPhone! Giratina design is awesome.',
          date: '2024-03-02'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.5 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'koraidon-case',
    name: 'Koraidon Tough Case',
    pokemon: 'Koraidon',
    type: ['fighting', 'dragon'],
    price: 39.99 * USD_TO_PKR,
    image: koraidonCase,
    description: 'Show off the power of Koraidon with this case.',
    compatibility: 'iPhone',
    caseType: 'Tough',
    rating: {
      stars: 4.8,
      count: 256,
      reviews: [
        {
          user: 'Brock R.',
          rating: 5,
          comment: 'Best Tough case I\'ve ever had! Koraidon design is a bonus.',
          date: '2024-03-01'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.5 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'pikachu-case',
    name: 'Minimalist Pikachu Case',
    pokemon: 'Pikachu',
    type: ['electric'],
    price: 29.99 * USD_TO_PKR,
    image: pikachuCase,
    description: 'A clean, minimalist Pikachu design.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.9,
      count: 512,
      reviews: [
        {
          user: 'Pikachu Fan',
          rating: 5,
          comment: 'Absolutely love this case! The minimalist design is perfect.',
          date: '2024-03-20'
        },
        {
          user: 'Trainer Red',
          rating: 5,
          comment: 'Best Pikachu case ever! Great quality and design.',
          date: '2024-03-19'
        }
      ]
    },
    specifications: {
      material: 'Premium TPU',
      dimensions: '6.2 x 3.1 x 0.4 inches',
      weight: '1.2 oz',
      protection: ['Scratch Resistant', 'Drop Protection']
    }
  },
  {
    id: 'growlithe-case',
    name: 'Growlithe Tough Case',
    pokemon: 'Growlithe',
    type: ['fire'],
    price: 34.99 * USD_TO_PKR,
    image: growlitheCase,
    description: 'A loyal Growlithe case for your device.',
    compatibility: 'iPhone',
    caseType: 'Tough',
    rating: {
      stars: 4.3,
      count: 96,
      reviews: [
        {
          user: 'Ash K.',
          rating: 5,
          comment: 'Great case for my iPhone! Growlithe design is cute.',
          date: '2024-03-18'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'kingdra-case',
    name: 'Kingdra Case',
    pokemon: 'Kingdra',
    type: ['water', 'dragon'],
    price: 29.99 * USD_TO_PKR,
    image: kingdraCase,
    description: 'A majestic Kingdra case for your device.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.2,
      count: 64,
      reviews: [
        {
          user: 'Brock R.',
          rating: 4,
          comment: 'Great case for my iPhone! Kingdra design is adorable.',
          date: '2024-03-17'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'squirtle-case',
    name: 'Squirtle Case',
    pokemon: 'Squirtle',
    type: ['water'],
    price: 29.99 * USD_TO_PKR,
    image: squirtleCase,
    description: 'The perfect starter Pokemon case.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.0,
      count: 16,
      reviews: [
        {
          user: 'Gary O.',
          rating: 4,
          comment: 'Great case for my iPhone! Squirtle design is cute.',
          date: '2024-03-16'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'meganium-case',
    name: 'Majestic Meganium Case',
    pokemon: 'Meganium',
    type: ['grass'],
    price: 34.99 * USD_TO_PKR,
    image: meganiumCase,
    description: 'A beautiful Meganium case for your device.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.1,
      count: 32,
      reviews: [
        {
          user: 'Cynthia O.',
          rating: 4,
          comment: 'Great case for my iPhone! Meganium design is adorable.',
          date: '2024-03-15'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'bulbasaur-case',
    name: 'Bulbasaur Case',
    pokemon: 'Bulbasaur',
    type: ['grass', 'poison'],
    price: 29.99 * USD_TO_PKR,
    image: bulbasaurCase,
    description: 'A classic Bulbasaur case for your device.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.0,
      count: 16,
      reviews: [
        {
          user: 'Brock R.',
          rating: 4,
          comment: 'Great case for my iPhone! Bulbasaur design is cute.',
          date: '2024-03-14'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'leafeon-case',
    name: 'Leafeon Case',
    pokemon: 'Leafeon',
    type: ['grass'],
    price: 34.99 * USD_TO_PKR,
    image: leafeonCase,
    description: 'A natural Leafeon case for your device.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.3,
      count: 96,
      reviews: [
        {
          user: 'Gary O.',
          rating: 4,
          comment: 'Great case for my iPhone! Leafeon design is unique.',
          date: '2024-03-13'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'gengar-case',
    name: 'Gengar Case',
    pokemon: 'Gengar',
    type: ['ghost', 'poison'],
    price: 29.99 * USD_TO_PKR,
    image: gengarCase,
    description: 'A mischievous Gengar case for your device.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.2,
      count: 64,
      reviews: [
        {
          user: 'Cynthia O.',
          rating: 4,
          comment: 'Great case for my iPhone! Gengar design is unique.',
          date: '2024-03-12'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'legendary-1-case',
    name: 'Legendary Collection 1',
    pokemon: 'Legendary',
    type: ['normal'],
    price: 39.99 * USD_TO_PKR,
    image: legendary1Case,
    description: 'A collection of legendary Pokemon.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.5,
      count: 128,
      reviews: [
        {
          user: 'Erika K.',
          rating: 5,
          comment: 'Great case for my iPhone! Legendary Collection 1 design is awesome.',
          date: '2024-03-11'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.5 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'legendary-2-case',
    name: 'Legendary Collection 2',
    pokemon: 'Legendary',
    type: ['normal'],
    price: 39.99 * USD_TO_PKR,
    image: legendary2Case,
    description: 'Another collection of legendary Pokemon.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.4,
      count: 96,
      reviews: [
        {
          user: 'Brock R.',
          rating: 4,
          comment: 'Great case for my iPhone! Legendary Collection 2 design is unique.',
          date: '2024-03-10'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'legendary-3-case',
    name: 'Legendary Collection 3',
    pokemon: 'Legendary',
    type: ['normal'],
    price: 39.99 * USD_TO_PKR,
    image: legendary3Case,
    description: 'The final collection of legendary Pokemon.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.3,
      count: 64,
      reviews: [
        {
          user: 'Gary O.',
          rating: 4,
          comment: 'Great case for my iPhone! Legendary Collection 3 design is cute.',
          date: '2024-03-09'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'dragonite-case',
    name: 'Dragonite Case',
    pokemon: 'Dragonite',
    type: ['dragon', 'flying'],
    price: 34.99 * USD_TO_PKR,
    image: dragoniteCase,
    description: 'A powerful Dragonite case for your device.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.1,
      count: 32,
      reviews: [
        {
          user: 'Cynthia O.',
          rating: 4,
          comment: 'Great case for my iPhone! Dragonite design is adorable.',
          date: '2024-03-08'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'charmander-case',
    name: 'Charmander Case',
    pokemon: 'Charmander',
    type: ['fire'],
    price: 29.99 * USD_TO_PKR,
    image: charmanderCase,
    description: 'A fiery Charmander case for your device.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.0,
      count: 16,
      reviews: [
        {
          user: 'Brock R.',
          rating: 4,
          comment: 'Great case for my iPhone! Charmander design is cute.',
          date: '2024-03-07'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  },
  {
    id: 'pichu-case',
    name: 'Pichu Case',
    pokemon: 'Pichu',
    type: ['electric'],
    price: 29.99 * USD_TO_PKR,
    image: pichuCase,
    description: 'An adorable Pichu case for your device.',
    compatibility: 'iPhone',
    caseType: 'Standard',
    rating: {
      stars: 4.1,
      count: 32,
      reviews: [
        {
          user: 'Gary O.',
          rating: 4,
          comment: 'Great case for my iPhone! Pichu design is adorable.',
          date: '2024-03-06'
        }
      ]
    },
    specifications: {
      material: 'Military Grade TPU',
      dimensions: '6.2 x 3.1 x 0.5 inches',
      weight: '1.4 oz',
      protection: ['Military Drop Protection', 'Shock Absorption']
    }
  }
]
