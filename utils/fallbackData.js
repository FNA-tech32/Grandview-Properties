// Fallback data for Grandview-Properties when external RapidAPI endpoints are unavailable, rate-limited, or return errors.

export const mockProperties = [
    {
        id: 101,
        externalID: 'gp-sale-101',
        title: 'Ultra-Luxury 4-Bedroom Penthouse with Full Marina & Palm Views',
        price: 4850000,
        rentFrequency: null,
        rooms: 4,
        baths: 5,
        area: 3850,
        isVerified: true,
        purpose: 'for-sale',
        type: 'Penthouse',
        furnishingStatus: 'Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000' },
            { id: 3, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000' },
            { id: 4, url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000' }
        ],
        description: 'Presented by Grandview-Properties, this iconic residence in the sky offers 360-degree panoramic views of the Arabian Gulf and Dubai Marina. Features high ceilings, custom Italian kitchen with Miele appliances, private elevator access, and a wrap-around terrace.',
        amenities: [
            { amenities: [{ text: 'Central A/C' }, { text: 'Private Pool' }, { text: 'Balcony' }, { text: 'Private Gym' }] },
            { amenities: [{ text: 'Concierge Service' }, { text: 'Security 24/7' }, { text: 'Covered Parking' }, { text: 'Maid Room' }] }
        ]
    },
    {
        id: 102,
        externalID: 'gp-sale-102',
        title: 'Contemporary 5-Bed Villa with Private Infinity Pool & Landscaped Garden',
        price: 7200000,
        rentFrequency: null,
        rooms: 5,
        baths: 6,
        area: 6100,
        isVerified: true,
        purpose: 'for-sale',
        type: 'Villa',
        furnishingStatus: 'Semi-Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000' },
            { id: 3, url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000' }
        ],
        description: 'An architectural masterpiece by Grandview-Properties, offering resort-style living with floor-to-ceiling glass, smart lighting, infinity pool, outdoor BBQ pavilion, and private landscaped courtyard.',
        amenities: [
            { amenities: [{ text: 'Private Garden' }, { text: 'Private Pool' }, { text: 'Barbecue Area' }, { text: 'Smart Home' }] },
            { amenities: [{ text: 'Maids Room' }, { text: 'Study Room' }, { text: 'Walk-in Closet' }, { text: 'Double Garage' }] }
        ]
    },
    {
        id: 103,
        externalID: 'gp-sale-103',
        title: 'Modern 2-Bedroom Designer Apartment in Downtown Boulevard',
        price: 1950000,
        rentFrequency: null,
        rooms: 2,
        baths: 2,
        area: 1450,
        isVerified: true,
        purpose: 'for-sale',
        type: 'Apartment',
        furnishingStatus: 'Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000' }
        ],
        description: 'Chic urban living in prime Downtown. Walking distance to world-class retail and fine dining. Features designer lighting, open kitchen layout, and views of the city skyline.',
        amenities: [
            { amenities: [{ text: 'Shared Pool' }, { text: 'Fitness Gym' }, { text: 'Children Play Area' }] },
            { amenities: [{ text: '24/7 Security' }, { text: 'Covered Parking' }, { text: 'High Speed Elevators' }] }
        ]
    },
    {
        id: 104,
        externalID: 'gp-sale-104',
        title: 'Spacious 3-Bedroom Waterfront Townhouse with Private Berth',
        price: 3400000,
        rentFrequency: null,
        rooms: 3,
        baths: 4,
        area: 2900,
        isVerified: true,
        purpose: 'for-sale',
        type: 'Townhouse',
        furnishingStatus: 'Semi-Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000' }
        ],
        description: 'Premier waterfront townhouse offering tranquil living with direct canal access, rooftop terrace, and private boat mooring facilities.',
        amenities: [
            { amenities: [{ text: 'Waterfront Access' }, { text: 'Rooftop Terrace' }, { text: 'Private Garden' }] },
            { amenities: [{ text: 'Covered Parking' }, { text: 'Pet Friendly' }, { text: '24/7 Security' }] }
        ]
    },
    {
        id: 105,
        externalID: 'gp-sale-105',
        title: 'Modern High-Rise 1-Bedroom Executive Suite in Financial District',
        price: 1100000,
        rentFrequency: null,
        rooms: 1,
        baths: 2,
        area: 920,
        isVerified: true,
        purpose: 'for-sale',
        type: 'Apartment',
        furnishingStatus: 'Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000' }
        ],
        description: 'Ideal high-yield investment or executive pied-à-terre in the heart of the business hub. High ROI potential with turnkey furnishings.',
        amenities: [
            { amenities: [{ text: 'Central AC' }, { text: 'Concierge' }, { text: 'Gym' }] },
            { amenities: [{ text: 'Conference Room' }, { text: 'Covered Parking' }, { text: 'Security' }] }
        ]
    },
    {
        id: 106,
        externalID: 'gp-sale-106',
        title: 'Opulent 6-Bed Signature Beachfront Mansion with Private Shoreline',
        price: 18900000,
        rentFrequency: null,
        rooms: 6,
        baths: 7,
        area: 9500,
        isVerified: true,
        purpose: 'for-sale',
        type: 'Villa',
        furnishingStatus: 'Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000' }
        ],
        description: 'The pinnacle of luxury beachfront living. Private beach access, Olympic-size infinity pool, cinema room, wine cellar, and subterranean parking.',
        amenities: [
            { amenities: [{ text: 'Private Beach' }, { text: 'Private Cinema' }, { text: 'Wine Cellar' }] },
            { amenities: [{ text: 'Infinity Pool' }, { text: 'Staff Quarters' }, { text: 'Smart Security' }] }
        ]
    },
    // RENT PROPERTIES
    {
        id: 201,
        externalID: 'gp-rent-201',
        title: 'Elegantly Furnished 2-Bedroom Apartment with Sea Views',
        price: 135000,
        rentFrequency: 'yearly',
        rooms: 2,
        baths: 3,
        area: 1650,
        isVerified: true,
        purpose: 'for-rent',
        type: 'Apartment',
        furnishingStatus: 'Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        },
        photos: [
            { id: 1, url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4' },
            { id: 2, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000' },
            { id: 3, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000' }
        ],
        description: 'Impeccably furnished 2-bed apartment managed exclusively by Grandview-Properties. Features modern Scandinavian decor, open-plan living, and panoramic sea views.',
        amenities: [
            { amenities: [{ text: 'Central AC' }, { text: 'Fully Furnished' }, { text: 'Sea View' }, { text: 'Balcony' }] },
            { amenities: [{ text: 'Shared Pool' }, { text: 'Gymnasium' }, { text: '24/7 Security' }, { text: 'Parking' }] }
        ]
    },
    {
        id: 202,
        externalID: 'gp-rent-202',
        title: 'Charming 4-Bedroom Family Villa with Private Garden & Pool',
        price: 240000,
        rentFrequency: 'yearly',
        rooms: 4,
        baths: 5,
        area: 4400,
        isVerified: true,
        purpose: 'for-rent',
        type: 'Villa',
        furnishingStatus: 'Unfurnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        },
        photos: [
            { id: 1, url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008' },
            { id: 2, url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000' }
        ],
        description: 'Spacious family sanctuary in a serene gated community. Features large private garden, temperature-controlled pool, upgraded modern kitchen, and maids room.',
        amenities: [
            { amenities: [{ text: 'Private Garden' }, { text: 'Private Pool' }, { text: 'Maids Room' }, { text: 'Covered Parking' }] },
            { amenities: [{ text: 'Community Park' }, { text: 'Pet Friendly' }, { text: '24/7 Gated Security' }] }
        ]
    },
    {
        id: 203,
        externalID: 'gp-rent-203',
        title: 'Cozy 1-Bedroom Loft in Urban Marina Walk',
        price: 85000,
        rentFrequency: 'yearly',
        rooms: 1,
        baths: 1,
        area: 880,
        isVerified: true,
        purpose: 'for-rent',
        type: 'Apartment',
        furnishingStatus: 'Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000' }
        ],
        description: 'Prime urban lifestyle located right on the Marina Promenade. Close to metro, grocery stores, cafes, and waterfront dining.',
        amenities: [
            { amenities: [{ text: 'Central AC' }, { text: 'Furnished' }, { text: 'Gym' }] },
            { amenities: [{ text: 'Shared Pool' }, { text: 'High Speed Elevators' }, { text: 'Security' }] }
        ]
    },
    {
        id: 204,
        externalID: 'gp-rent-204',
        title: 'Spectacular 3-Bedroom Duplex with Sky Terrace & Jacuzzi',
        price: 310000,
        rentFrequency: 'yearly',
        rooms: 3,
        baths: 4,
        area: 3200,
        isVerified: true,
        purpose: 'for-rent',
        type: 'Penthouse',
        furnishingStatus: 'Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000' }
        ],
        description: 'Two-story penthouse duplex boasting private sky deck, outdoor jacuzzi, floor-to-ceiling double-height glass windows, and designer furnishings.',
        amenities: [
            { amenities: [{ text: 'Private Jacuzzi' }, { text: 'Sky Terrace' }, { text: 'Furnished' }] },
            { amenities: [{ text: 'Valet Parking' }, { text: 'Concierge' }, { text: 'Infinity Pool Access' }] }
        ]
    },
    {
        id: 205,
        externalID: 'gp-rent-205',
        title: 'Modern 3-Bedroom Townhouse in Peaceful Green Sanctuary',
        price: 175000,
        rentFrequency: 'yearly',
        rooms: 3,
        baths: 3,
        area: 2450,
        isVerified: true,
        purpose: 'for-rent',
        type: 'Townhouse',
        furnishingStatus: 'Semi-Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000' }
        ],
        description: 'Immaculately maintained family townhouse offering light-filled interiors, private rear garden, and direct access to community swimming pool and green parks.',
        amenities: [
            { amenities: [{ text: 'Private Garden' }, { text: 'Central AC' }, { text: 'Built-in Wardrobes' }] },
            { amenities: [{ text: 'Community Pool' }, { text: 'Children Play Area' }, { text: '24/7 Security' }] }
        ]
    },
    {
        id: 206,
        externalID: 'gp-rent-206',
        title: 'Luxury 4-Bedroom Waterfront Villa with Private Beach Access',
        price: 490000,
        rentFrequency: 'yearly',
        rooms: 4,
        baths: 5,
        area: 5200,
        isVerified: true,
        purpose: 'for-rent',
        type: 'Villa',
        furnishingStatus: 'Furnished',
        agency: {
            name: 'Grandview-Properties',
            logo: {
                url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200'
            }
        },
        coverPhoto: {
            url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800'
        },
        photos: [
            { id: 1, url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1000' },
            { id: 2, url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000' }
        ],
        description: 'Exclusive beachfront residence managed by Grandview-Properties. Step directly from your private infinity pool onto golden sand beaches.',
        amenities: [
            { amenities: [{ text: 'Private Beach' }, { text: 'Private Pool' }, { text: 'Fully Furnished' }] },
            { amenities: [{ text: 'Maid Room' }, { text: 'Drivers Room' }, { text: 'Smart Automation' }] }
        ]
    }
];

export const fallbackLocations = [
    { id: 5001, name: 'Downtown Dubai', externalID: '5001' },
    { id: 5002, name: 'Dubai Marina', externalID: '5002' },
    { id: 5003, name: 'Palm Jumeirah', externalID: '5003' },
    { id: 5004, name: 'Business Bay', externalID: '5004' },
    { id: 5005, name: 'Emirates Hills', externalID: '5005' },
    { id: 5006, name: 'Jumeirah Beach Residence', externalID: '5006' },
    { id: 5007, name: 'Dubai Hills Estate', externalID: '5007' },
    { id: 5008, name: 'Arabian Ranches', externalID: '5008' }
];

export const getFallbackData = (url) => {
    try {
        const parsedUrl = new URL(url, 'https://dummy.local');
        const pathname = parsedUrl.pathname;
        const searchParams = parsedUrl.searchParams;

        // 1. Property Details Endpoint
        if (pathname.includes('/properties/detail')) {
            const externalID = searchParams.get('externalID') || '';
            const match = mockProperties.find(
                (p) => String(p.externalID).toLowerCase() === String(externalID).toLowerCase() || String(p.id) === String(externalID)
            );

            if (match) {
                return match;
            }

            // Fallback default detailed property
            const fallback = { ...mockProperties[0], externalID: externalID || mockProperties[0].externalID };
            return fallback;
        }

        // 2. Auto-complete Location Endpoint
        if (pathname.includes('/auto-complete')) {
            const query = (searchParams.get('query') || '').toLowerCase();
            const hits = fallbackLocations.filter((loc) =>
                loc.name.toLowerCase().includes(query)
            );
            return { hits: hits.length ? hits : fallbackLocations };
        }

        // 3. Properties List Endpoint
        if (pathname.includes('/properties/list')) {
            const purpose = searchParams.get('purpose');
            const minPrice = Number(searchParams.get('priceMin')) || 0;
            const maxPrice = Number(searchParams.get('priceMax')) || Infinity;
            const roomsMin = Number(searchParams.get('roomsMin')) || 0;
            const bathsMin = Number(searchParams.get('bathsMin')) || 0;
            const sort = searchParams.get('sort');
            const hitsPerPage = Number(searchParams.get('hitsPerPage')) || mockProperties.length;

            let filtered = mockProperties.filter((item) => {
                if (purpose && item.purpose !== purpose) return false;
                if (item.price < minPrice || item.price > maxPrice) return false;
                if (item.rooms < roomsMin) return false;
                if (item.baths < bathsMin) return false;
                return true;
            });

            // If filtered list is empty due to strict filters, return matching purpose
            if (filtered.length === 0 && purpose) {
                filtered = mockProperties.filter((item) => item.purpose === purpose);
            }

            if (sort === 'price-asc') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sort === 'price-desc') {
                filtered.sort((a, b) => b.price - a.price);
            }

            return {
                hits: filtered.slice(0, hitsPerPage)
            };
        }

        // Default response
        return { hits: mockProperties };
    } catch {
        return { hits: mockProperties };
    }
};

