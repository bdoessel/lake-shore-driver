// LAKE SHORE DRIVE - Real Building Data (CORRECTED COORDINATES)
// Coordinate system: z ranges from ~7900 (Hollywood Beach, north) to ~-7000 (Soldier Field, south)
// x is west-east (negative x = west/city side, positive x = east/lake side)

const BUILDINGS = [
    // ====================================
    // EDGEWATER/ROGERS PARK (North - z: 6000 to 8000)
    // ====================================
    {
        name: "Edgewater Beach Apartments",
        x: -80,  // West side of LSD
        z: 7500,
        width: 45,
        height: 70,
        depth: 35,
        color: 0xf5b5a0,  // Pink Spanish Revival
        emissive: 0x4a2a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Hollywood Towers",
        x: -100,
        z: 7800,
        width: 35,
        height: 95,
        depth: 28,
        color: 0x5a5a5a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Malibu East",
        x: -90,
        z: 6800,
        width: 40,
        height: 102,
        depth: 30,
        color: 0x6a5a4a,
        emissive: 0x2a1a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Park Tower Edgewater",
        x: -85,
        z: 6500,
        width: 38,
        height: 88,
        depth: 32,
        color: 0x4a4a5a,
        emissive: 0x1a1a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Sheridan Shores",
        x: -95,
        z: 6200,
        width: 32,
        height: 75,
        depth: 26,
        color: 0x5a4a3a,
        emissive: 0x2a1a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Horizon House",
        x: -88,
        z: 6900,
        width: 36,
        height: 92,
        depth: 30,
        color: 0x6a6a7a,
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },

    // ====================================
    // UPTOWN / LAKEVIEW (z: 3000 to 6000)
    // ====================================
    {
        name: "Lawrence House",
        x: -90,
        z: 5800,
        width: 30,
        height: 72,
        depth: 26,
        color: 0x7a6a6a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "The Claridge",
        x: -85,
        z: 5500,
        width: 32,
        height: 78,
        depth: 28,
        color: 0x6a5a4a,
        emissive: 0x2a1a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Castilian Plaza",
        x: -92,
        z: 5200,
        width: 34,
        height: 82,
        depth: 29,
        color: 0x5a5a6a,
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Pensacola Place",
        x: -88,
        z: 4500,
        width: 36,
        height: 85,
        depth: 30,
        color: 0x4a4a5a,
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Addison on the Lake",
        x: -90,
        z: 4000,
        width: 34,
        height: 88,
        depth: 28,
        color: 0x5a6a7a,
        emissive: 0x2a3a4a,
        shape: "box",
        type: "lakefront"
    },

    // ====================================
    // LINCOLN PARK (z: 1000 to 3000)
    // ====================================
    {
        name: "Belmont Harbor Condos",
        x: -85,
        z: 3500,
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
        x: -90,
        z: 2800,
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
        x: -88,
        z: 2200,
        width: 34,
        height: 78,
        depth: 28,
        color: 0x7a6a5a,
        emissive: 0x3a2a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "North Avenue Beach Towers",
        x: -92,
        z: 1500,
        width: 36,
        height: 82,
        depth: 30,
        color: 0x5a5a6a,
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },

    // ====================================
    // GOLD COAST / STREETERVILLE (z: -600 to 1000)
    // ====================================
    {
        name: "Oak Street Beach Residences",
        x: -85,
        z: 800,
        width: 38,
        height: 95,
        depth: 32,
        color: 0x6a6a6a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "The Drake Hotel",
        x: -95,
        z: 600,
        width: 40,
        height: 48,
        depth: 30,
        color: 0xc8b896,
        emissive: 0x4a3a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "John Hancock Center",
        x: -200,  // Further west - on Michigan Ave
        z: 400,
        width: 50,
        height: 344,
        depth: 50,
        color: 0x1a1a1a,
        emissive: 0x0a0a0a,
        shape: "tapered",
        type: "landmark"
    },
    {
        name: "860 Lake Shore Drive (North Tower)",
        x: -75,
        z: 200,
        width: 30,
        height: 82,
        depth: 22,
        color: 0x1a1a1a,
        emissive: 0x0a0a0a,
        shape: "mies-glass-box",
        type: "lakefront"
    },
    {
        name: "880 Lake Shore Drive (South Tower)",
        x: -75,
        z: 180,
        width: 30,
        height: 82,
        depth: 22,
        color: 0x1a1a1a,
        emissive: 0x0a0a0a,
        shape: "mies-glass-box",
        type: "lakefront"
    },
    {
        name: "Lake Point Tower",
        x: 120,  // EAST of LSD - only building on lake side
        z: 50,
        width: 45,
        height: 197,
        depth: 45,
        color: 0x2a3a4a,
        emissive: 0x1a2a3a,
        shape: "curved-clover",
        type: "lakefront"
    },
    {
        name: "Navy Pier Ferris Wheel",
        x: 300,  // Far east - out on the pier
        z: -600,
        width: 60,
        height: 65,
        depth: 60,
        color: 0x4a4a6a,
        emissive: 0x2a2a4a,
        shape: "ferris-wheel",
        type: "landmark"
    },
    {
        name: "999 Lake Shore Plaza",
        x: -80,
        z: 500,
        width: 38,
        height: 98,
        depth: 32,
        color: 0x4a4a4a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1000 Lake Shore Plaza",
        x: -82,
        z: 450,
        width: 36,
        height: 95,
        depth: 30,
        color: 0x5a5a6a,
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1100 Lake Shore Drive",
        x: -78,
        z: 350,
        width: 40,
        height: 105,
        depth: 34,
        color: 0x3a3a3a,
        emissive: 0x1a1a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1120 Lake Shore Drive",
        x: -80,
        z: 300,
        width: 35,
        height: 88,
        depth: 28,
        color: 0x5a5a5a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1130 Lake Shore Drive",
        x: -82,
        z: 250,
        width: 38,
        height: 92,
        depth: 32,
        color: 0x4a4a5a,
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1200 Lake Shore Drive",
        x: -76,
        z: 100,
        width: 42,
        height: 108,
        depth: 35,
        color: 0x6a6a6a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "1250 Lake Shore Drive",
        x: -78,
        z: 50,
        width: 40,
        height: 100,
        depth: 33,
        color: 0x5a5a6a,
        emissive: 0x2a2a3a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Gold Coast Plaza",
        x: -88,
        z: 550,
        width: 36,
        height: 85,
        depth: 30,
        color: 0x7a6a5a,
        emissive: 0x3a2a1a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Outer Drive East",
        x: -70,
        z: -200,
        width: 50,
        height: 120,
        depth: 40,
        color: 0x4a4a4a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "McClurg Court Center",
        x: -85,
        z: -100,
        width: 45,
        height: 110,
        depth: 38,
        color: 0x5a5a5a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "lakefront"
    },

    // ====================================
    // DOWNTOWN SKYLINE (z: -1500 to 500)
    // ====================================
    {
        name: "Trump Tower Chicago",
        x: -250,
        z: -400,
        width: 45,
        height: 423,
        depth: 45,
        color: 0xb8c5d0,
        emissive: 0x3a4a5a,
        shape: "setback",
        type: "landmark"
    },
    {
        name: "Willis Tower",
        x: -800,  // Far west - in the Loop
        z: -800,
        width: 68,
        height: 442,
        depth: 68,
        color: 0x0d0d0d,
        emissive: 0x050505,
        shape: "bundled-tube",
        type: "landmark"
    },
    {
        name: "Aon Center",
        x: -350,
        z: -600,
        width: 55,
        height: 346,
        depth: 55,
        color: 0xe8e8e8,
        emissive: 0x4a4a4a,
        shape: "box",
        type: "landmark"
    },
    {
        name: "Aqua Tower",
        x: -300,
        z: -700,
        width: 40,
        height: 262,
        depth: 40,
        color: 0x6a8a9a,
        emissive: 0x2a3a4a,
        shape: "wavy",
        type: "landmark"
    },
    {
        name: "Two Prudential Plaza",
        x: -320,
        z: -650,
        width: 42,
        height: 303,
        depth: 42,
        color: 0x3a3a3a,
        emissive: 0x1a1a1a,
        shape: "pyramid-top",
        type: "landmark"
    },
    {
        name: "One Prudential Plaza",
        x: -310,
        z: -620,
        width: 36,
        height: 198,
        depth: 30,
        color: 0x5a5a5a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "skyline"
    },
    {
        name: "Blue Cross Blue Shield Tower",
        x: -340,
        z: -680,
        width: 38,
        height: 241,
        depth: 38,
        color: 0x4a6a8a,
        emissive: 0x1a2a3a,
        shape: "box",
        type: "landmark"
    },
    {
        name: "Three Illinois Center",
        x: -280,
        z: -550,
        width: 38,
        height: 133,
        depth: 32,
        color: 0x4a4a4a,
        emissive: 0x2a2a2a,
        shape: "box",
        type: "skyline"
    },
    {
        name: "Olympia Centre",
        x: -220,
        z: 100,
        width: 34,
        height: 195,
        depth: 28,
        color: 0x6a5a4a,
        emissive: 0x2a1a1a,
        shape: "box",
        type: "skyline"
    },

    // ====================================
    // SOUTH LOOP / MUSEUM CAMPUS (z: -1500 to -6500)
    // ====================================
    {
        name: "340 on the Park",
        x: -90,
        z: -1800,
        width: 40,
        height: 125,
        depth: 35,
        color: 0x4a5a6a,
        emissive: 0x2a3a4a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "One Museum Park",
        x: -95,
        z: -3500,
        width: 38,
        height: 115,
        depth: 32,
        color: 0x5a6a7a,
        emissive: 0x2a3a4a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Museum Park Tower",
        x: -88,
        z: -3200,
        width: 35,
        height: 105,
        depth: 30,
        color: 0x6a7a8a,
        emissive: 0x2a3a4a,
        shape: "box",
        type: "lakefront"
    },
    {
        name: "Field Museum",
        x: 100,  // East side near lake
        z: -4500,
        width: 80,
        height: 25,
        depth: 50,
        color: 0xe8e8d8,
        emissive: 0x4a4a3a,
        shape: "neoclassical",
        type: "landmark"
    },
    {
        name: "Shedd Aquarium",
        x: 150,
        z: -4300,
        width: 60,
        height: 20,
        depth: 60,
        color: 0xd8d8c8,
        emissive: 0x3a3a2a,
        shape: "neoclassical",
        type: "landmark"
    },
    {
        name: "Adler Planetarium",
        x: 250,  // Far east on peninsula
        z: -4600,
        width: 40,
        height: 18,
        depth: 40,
        color: 0xc8c8b8,
        emissive: 0x3a3a2a,
        shape: "dome",
        type: "landmark"
    },
    {
        name: "Soldier Field",
        x: 50,
        z: -6800,
        width: 120,
        height: 35,
        depth: 90,
        color: 0x3a3a3a,
        emissive: 0x1a1a1a,
        shape: "stadium",
        type: "landmark"
    }
];

// Total: 48 buildings
// Coordinate range: z from 7800 (Hollywood Beach) to -6800 (Soldier Field)
// This matches the LSD_CENTERLINE coordinate system!
