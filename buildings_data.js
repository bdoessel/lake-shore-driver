// LAKE SHORE DRIVE - Real Building Data
// GPS coordinates converted to Three.js coordinate system
//
// Conversion formulas:
// GPS_ORIGIN = { lat: 42.0552, lon: -87.6707 }
// METERS_PER_DEG_LAT = 111132
// METERS_PER_DEG_LON = 82955
//
// Three.js coordinates:
// x = (lon - GPS_ORIGIN.lon) * METERS_PER_DEG_LON
// z = (GPS_ORIGIN.lat - lat) * METERS_PER_DEG_LAT

const BUILDINGS = [
    // ====================================
    // MAJOR SKYLINE LANDMARKS (visible from LSD)
    // ====================================
    {
        name: "John Hancock Center",
        lat: 41.8987,
        lon: -87.6230,
        x: 3957,
        z: 17392,
        width: 50,
        height: 344,  // 1127 feet
        depth: 50,
        color: 0x1a1a1a,  // Black
        emissive: 0x0a0a0a,
        shape: "tapered",  // Distinctive tapered shape with cross-bracing
        type: "landmark"
    },
    {
        name: "Willis Tower",
        lat: 41.8789,
        lon: -87.6358,
        x: 2896,
        z: 19592,
        width: 68,
        height: 442,  // 1451 feet - tallest in dataset
        depth: 68,
        color: 0x0d0d0d,  // Very dark, almost black
        emissive: 0x050505,
        shape: "bundled-tube",  // Iconic bundled tube design
        type: "landmark"
    },
    {
        name: "Aon Center",
        lat: 41.8845,
        lon: -87.6195,
        x: 4247,
        z: 18751,
        width: 55,
        height: 346,  // 1136 feet
        depth: 55,
        color: 0xe8e8e8,  // White/cream granite
        emissive: 0x4a4a4a,
        shape: "box",
        type: "landmark"
    },
    {
        name: "Trump Tower Chicago",
        lat: 41.8891,
        lon: -87.6267,
        x: 3650,
        z: 17782,
        width: 45,
        height: 423,  // 1389 feet
        depth: 45,
        color: 0xb8c5d0,  // Stainless steel blue-silver
        emissive: 0x3a4a5a,
        shape: "setback",
        type: "landmark"
    },
    {
        name: "Aqua Tower",
        lat: 41.8865,
        lon: -87.6199,
        x: 4214,
        z: 18471,
        width: 40,
        height: 262,  // 859 feet
        depth: 40,
        color: 0x6a8a9a,  // Blue-green glass
        emissive: 0x2a3a4a,
        shape: "wavy",  // Distinctive wavy balconies
        type: "landmark"
    },
    {
        name: "Two Prudential Plaza",
        lat: 41.8856,
        lon: -87.6228,
        x: 3974,
        z: 18571,
        width: 42,
        height: 303,  // 995 feet
        depth: 42,
        color: 0x3a3a3a,  // Dark gray
        emissive: 0x1a1a1a,
        shape: "pyramid-top",  // 45-degree rotated pyramid peak
        type: "landmark"
    },
    {
        name: "Blue Cross Blue Shield Tower",
        lat: 41.8848,
        lon: -87.6199,
        x: 4214,
        z: 18660,
        width: 38,
        height: 241,  // 790 feet
        depth: 38,
        color: 0x4a6a8a,  // Blue glass
        emissive: 0x1a2a3a,
        shape: "box",
        type: "landmark"
    },

    // ====================================
    // BUILDINGS DIRECTLY ON/NEAR LSD
    // ====================================
    {
        name: "Lake Point Tower",
        lat: 41.8883,
        lon: -87.6073,
        x: 5259,
        z: 17871,
        width: 45,
        height: 197,  // 645 feet
        depth: 45,
        color: 0x2a3a4a,  // Dark blue-gray glass
        emissive: 0x1a2a3a,
        shape: "curved-clover",  // Y-shaped curved design
        type: "lakefront",
        special: "Only building east of LSD"
    },
    {
        name: "860 Lake Shore Drive (North Tower)",
        lat: 41.8987,
        lon: -87.6190,
        x: 4289,
        z: 17392,
        width: 30,
        height: 82,  // 26 stories
        depth: 22,
        color: 0x1a1a1a,  // Black steel frame
        emissive: 0x0a0a0a,
        shape: "mies-glass-box",  // Classic Mies van der Rohe
        type: "lakefront",
        special: "Mies van der Rohe 1951"
    },
    {
        name: "880 Lake Shore Drive (South Tower)",
        lat: 41.8985,
        lon: -87.6190,
        x: 4289,
        z: 17414,
        width: 30,
        height: 82,  // 26 stories
        depth: 22,
        color: 0x1a1a1a,  // Black steel frame
        emissive: 0x0a0a0a,
        shape: "mies-glass-box",
        type: "lakefront",
        special: "Mies van der Rohe 1951"
    },
    {
        name: "The Drake Hotel",
        lat: 41.8993,
        lon: -87.6243,
        x: 3849,
        z: 17325,
        width: 40,
        height: 48,  // 13 stories
        depth: 30,
        color: 0xc8b896,  // Cream/beige
        emissive: 0x4a3a2a,
        shape: "box",
        type: "lakefront",
        special: "Historic 1920 hotel"
    },

    // ====================================
    // EDGEWATER/ROGERS PARK HIGH-RISES (North LSD)
    // ====================================
    {
        name: "Edgewater Beach Apartments",
        lat: 41.9875,
        lon: -87.6550,
        x: 1302,
        z: 7523,
        width: 45,
        height: 70,  // 19 stories
        depth: 35,
        color: 0xf5b5a0,  // Pink Spanish Revival
        emissive: 0x4a2a1a,
        shape: "box",
        type: "lakefront",
        special: "Pink landmark 1928"
    },
    {
        name: "Malibu East",
        lat: 41.9810,
        lon: -87.6490,
        x: 1800,
        z: 8245,
        width: 40,
        height: 102,  // 32 stories
        depth: 30,
        color: 0x6a5a4a,  // Tan/brown
        emissive: 0x2a1a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Hollywood Towers",
        lat: 41.9880,
        lon: -87.6545,
        x: 1343,
        z: 7467,
        width: 35,
        height: 95,
        depth: 28,
        color: 0x5a5a5a,  // Gray
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Park Tower Edgewater",
        lat: 41.9750,
        lon: -87.6520,
        x: 1551,
        z: 8912,
        width: 38,
        height: 88,
        depth: 32,
        color: 0x4a4a5a,  // Blue-gray
        emissive: 0x1a1a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Sheridan Shores",
        lat: 41.9700,
        lon: -87.6510,
        x: 1634,
        z: 9467,
        width: 32,
        height: 75,
        depth: 26,
        color: 0x5a4a3a,  // Brown brick
        emissive: 0x2a1a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Horizon House",
        lat: 41.9820,
        lon: -87.6485,
        x: 1841,
        z: 8134,
        width: 36,
        height: 92,
        depth: 30,
        color: 0x6a6a7a,  // Blue-gray
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },

    // ====================================
    // GOLD COAST / STREETERVILLE LAKEFRONT
    // ====================================
    {
        name: "999 Lake Shore Plaza",
        lat: 41.9015,
        lon: -87.6230,
        x: 3957,
        z: 17081,
        width: 38,
        height: 98,
        depth: 32,
        color: 0x4a4a4a,  // Dark gray
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1000 Lake Shore Plaza",
        lat: 41.9020,
        lon: -87.6225,
        x: 3998,
        z: 17025,
        width: 36,
        height: 95,
        depth: 30,
        color: 0x5a5a6a,  // Blue-gray
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1100 Lake Shore Drive",
        lat: 41.9050,
        lon: -87.6215,
        x: 4081,
        z: 16692,
        width: 40,
        height: 105,
        depth: 34,
        color: 0x3a3a3a,  // Charcoal
        emissive: 0x1a1a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1120 Lake Shore Drive",
        lat: 41.9060,
        lon: -87.6210,
        x: 4122,
        z: 16581,
        width: 35,
        height: 88,
        depth: 28,
        color: 0x5a5a5a,  // Gray
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1130 Lake Shore Drive",
        lat: 41.9070,
        lon: -87.6205,
        x: 4164,
        z: 16470,
        width: 38,
        height: 92,
        depth: 32,
        color: 0x4a4a5a,  // Blue-gray
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1200 Lake Shore Drive",
        lat: 41.9100,
        lon: -87.6195,
        x: 4247,
        z: 16137,
        width: 42,
        height: 108,
        depth: 35,
        color: 0x6a6a6a,  // Medium gray
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1250 Lake Shore Drive",
        lat: 41.9120,
        lon: -87.6190,
        x: 4289,
        z: 15915,
        width: 40,
        height: 100,
        depth: 33,
        color: 0x5a5a6a,  // Blue-gray
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Gold Coast Plaza",
        lat: 41.9000,
        lon: -87.6240,
        x: 3874,
        z: 17248,
        width: 36,
        height: 85,
        depth: 30,
        color: 0x7a6a5a,  // Tan/beige
        emissive: 0x3a2a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Outer Drive East",
        lat: 41.8890,
        lon: -87.6105,
        x: 4995,
        z: 17793,
        width: 50,
        height: 120,  // 40 stories
        depth: 40,
        color: 0x4a4a4a,  // Dark gray
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "McClurg Court Center",
        lat: 41.8910,
        lon: -87.6130,
        x: 4788,
        z: 17571,
        width: 45,
        height: 110,
        depth: 38,
        color: 0x5a5a5a,  // Gray
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },

    // ====================================
    // UPTOWN / LAKEVIEW HIGH-RISES
    // ====================================
    {
        name: "The Claridge",
        lat: 41.9650,
        lon: -87.6500,
        x: 1717,
        z: 10023,
        width: 32,
        height: 78,
        depth: 28,
        color: 0x6a5a4a,  // Brown
        emissive: 0x2a1a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Castilian Plaza",
        lat: 41.9600,
        lon: -87.6490,
        x: 1800,
        z: 10578,
        width: 34,
        height: 82,
        depth: 29,
        color: 0x5a5a6a,  // Blue-gray
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Lawrence House",
        lat: 41.9680,
        lon: -87.6505,
        x: 1676,
        z: 9690,
        width: 30,
        height: 72,
        depth: 26,
        color: 0x7a6a6a,  // Gray-tan
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Pensacola Place",
        lat: 41.9300,
        lon: -87.6430,
        x: 2298,
        z: 13912,
        width: 36,
        height: 85,
        depth: 30,
        color: 0x4a4a5a,  // Blue-gray
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Addison on the Lake",
        lat: 41.9470,
        lon: -87.6465,
        x: 2008,
        z: 12023,
        width: 34,
        height: 88,
        depth: 28,
        color: 0x5a6a7a,  // Blue-gray
        emissive: 0x2a3a4a,
        shape: "box",
        type: "lakefront"
    },

    // ====================================
    // SOUTH LOOP / MUSEUM CAMPUS
    // ====================================
    {
        name: "340 on the Park",
        lat: 41.8750,
        lon: -87.6190,
        x: 4289,
        z: 20025,
        width: 40,
        height: 125,  // 42 stories
        depth: 35,
        color: 0x4a5a6a,  // Blue-gray glass
        emissive: 0x2a3a4a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "One Museum Park",
        lat: 41.8680,
        lon: -87.6180,
        x: 4372,
        z: 20802,
        width: 38,
        height: 115,  // 38 stories
        depth: 32,
        color: 0x5a6a7a,  // Blue glass
        emissive: 0x2a3a4a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Museum Park Tower",
        lat: 41.8700,
        lon: -87.6185,
        x: 4331,
        z: 20580,
        width: 35,
        height: 105,
        depth: 30,
        color: 0x6a7a8a,  // Light blue glass
        emissive: 0x2a3a4a,
        shape: "box",
        type: "lakefront"
    },

    // ====================================
    // SPECIAL FEATURES
    // ====================================
    {
        name: "Navy Pier Ferris Wheel",
        lat: 41.8914,
        lon: -87.5997,
        x: 5890,
        z: 17737,
        width: 60,
        height: 65,  // Ferris wheel
        depth: 60,
        color: 0x4a4a6a,
        emissive: 0x2a2a4a,
        shape: "ferris-wheel",
        type: "landmark",
        special: "Navy Pier - iconic ferris wheel"
    },
    {
        name: "Soldier Field",
        lat: 41.8624,
        lon: -87.6167,
        x: 4481,
        z: 21424,
        width: 120,
        height: 35,  // Stadium seating height
        depth: 90,
        color: 0x3a3a3a,  // Dark gray
        emissive: 0x1a1a1a,
        shape: "stadium",
        type: "landmark",
        special: "Historic stadium with neoclassical colonnades"
    },
    {
        name: "Field Museum",
        lat: 41.8665,
        lon: -87.6141,
        x: 4697,
        z: 20968,
        width: 80,
        height: 25,  // Low neoclassical building
        depth: 50,
        color: 0xe8e8d8,  // White/cream stone
        emissive: 0x4a4a3a,
        shape: "neoclassical",
        type: "landmark",
        special: "Museum Campus"
    },
    {
        name: "Shedd Aquarium",
        lat: 41.8676,
        lon: -87.6140,
        x: 4705,
        z: 20846,
        width: 60,
        height: 20,
        depth: 60,
        color: 0xd8d8c8,  // Cream/white
        emissive: 0x3a3a2a,
        shape: "neoclassical",
        type: "landmark",
        special: "Museum Campus - circular design"
    },
    {
        name: "Adler Planetarium",
        lat: 41.8663,
        lon: -87.6068,
        x: 5302,
        z: 20990,
        width: 40,
        height: 18,
        depth: 40,
        color: 0xc8c8b8,  // Stone
        emissive: 0x3a3a2a,
        shape: "dome",
        type: "landmark",
        special: "Museum Campus - on peninsula"
    },

    // ====================================
    // ADDITIONAL NORTH LAKEFRONT TOWERS
    // ====================================
    {
        name: "Belmont Harbor Condos",
        lat: 41.9380,
        lon: -87.6440,
        x: 2215,
        z: 13023,
        width: 35,
        height: 80,
        depth: 28,
        color: 0x5a5a5a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Diversey Harbor Tower",
        lat: 41.9320,
        lon: -87.6425,
        x: 2339,
        z: 13689,
        width: 32,
        height: 75,
        depth: 26,
        color: 0x6a6a7a,
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Fullerton Lofts",
        lat: 41.9260,
        lon: -87.6410,
        x: 2463,
        z: 14356,
        width: 34,
        height: 78,
        depth: 28,
        color: 0x7a6a5a,  // Reddish brick
        emissive: 0x3a2a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "North Avenue Beach Towers",
        lat: 41.9180,
        lon: -87.6350,
        x: 2961,
        z: 15245,
        width: 36,
        height: 82,
        depth: 30,
        color: 0x5a5a6a,
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Oak Street Beach Residences",
        lat: 41.9010,
        lon: -87.6235,
        x: 3915,
        z: 17137,
        width: 38,
        height: 95,
        depth: 32,
        color: 0x6a6a6a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },

    // ====================================
    // ADDITIONAL SKYLINE FILL
    // ====================================
    {
        name: "Three Illinois Center",
        lat: 41.8870,
        lon: -87.6210,
        x: 4122,
        z: 18693,
        width: 38,
        height: 133,  // 437 feet
        depth: 32,
        color: 0x4a4a4a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "skyline"
    },
    {
        name: "One Prudential Plaza",
        lat: 41.8855,
        lon: -87.6215,
        x: 4081,
        z: 18860,
        width: 36,
        height: 198,  // 649 feet
        depth: 30,
        color: 0x5a5a5a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "skyline"
    },
    {
        name: "Olympia Centre",
        lat: 41.8960,
        lon: -87.6220,
        x: 4039,
        z: 17692,
        width: 34,
        height: 195,  // 640 feet
        depth: 28,
        color: 0x6a5a4a,  // Brown
        emissive: 0x2a1a1a,
        shape: "box",
        type: "skyline"
    }
];

// Building type counts for reference:
// Landmarks: 13 (major skyline + special features)
// Lakefront residential: 32
// Skyline fill: 3
// Total: 48 buildings

// Export for use in game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BUILDINGS };
}
