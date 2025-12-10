# Lake Shore Driver - Real Buildings Update

A Three.js driving game featuring **48 real GPS-positioned buildings** along Chicago's Lake Shore Drive, from Hollywood Beach to Soldier Field.

## What's New

This update replaces the random building generator with **real Chicago buildings** featuring:
- ✅ **GPS-accurate positions** using real latitude/longitude coordinates
- ✅ **Real building colors** researched from actual structures
- ✅ **Iconic shapes** for landmarks (John Hancock, Willis Tower, Navy Pier, etc.)
- ✅ **Random lit windows** on all tall buildings
- ✅ **48 total buildings** including major landmarks and lakefront high-rises

## Files

### Core Files
- **`lsd_game_updated.html`** - Main game with real buildings integrated
- **`buildings_data.js`** - Building database with GPS coordinates, colors, and dimensions
- **`preview_map.html`** - Visual map showing building positions

### Original Files (Reference)
- `LSD_FASTER (16).html` - Original game with random buildings
- `lake_shore_driver_mile22_extension__11_ (1).html` - GPS reference implementation

## Building Categories

### Major Landmarks (13 buildings)
Tall, iconic Chicago structures visible from the drive:
- **John Hancock Center** - 344m, black tapered tower with cross-bracing
- **Willis Tower** - 442m (tallest), dark bundled-tube design
- **Aon Center** - 346m, white/cream granite
- **Trump Tower** - 423m, stainless steel blue-silver with setbacks
- **Aqua Tower** - 262m, blue-green with distinctive wavy balconies
- **Two Prudential Plaza** - 303m, gray with 45° rotated pyramid peak
- **Blue Cross Blue Shield Tower** - 241m, blue glass
- **Navy Pier Ferris Wheel** - Colorful LED-lit rotating wheel
- **Soldier Field** - Historic stadium with neoclassical colonnades
- **Field Museum** - White/cream neoclassical building
- **Shedd Aquarium** - Circular cream building
- **Adler Planetarium** - Dome on peninsula
- Plus additional skyline towers

### Lakefront Buildings (32 buildings)
High-rises directly along or near Lake Shore Drive:

**North (Edgewater/Rogers Park):**
- Edgewater Beach Apartments (pink landmark, 1928)
- Malibu East, Hollywood Towers
- Park Tower Edgewater, Sheridan Shores
- Horizon House

**Central (Gold Coast/Streeterville):**
- 860-880 Lake Shore Drive (Mies van der Rohe glass towers, 1951)
- The Drake Hotel (historic 1920 cream building)
- Lake Point Tower (only building east of LSD, curved Y-shape)
- 999-1250 Lake Shore Drive residential towers
- Outer Drive East, McClurg Court Center

**Uptown/Lakeview:**
- The Claridge, Castilian Plaza
- Lawrence House, Pensacola Place
- Addison on the Lake, Belmont Harbor Condos

**South Loop/Museum Campus:**
- 340 on the Park, One Museum Park
- Museum Park Tower

### Skyline Fill (3 buildings)
Additional downtown towers for complete skyline:
- Three Illinois Center
- One Prudential Plaza
- Olympia Centre

## GPS Coordinate System

Buildings use real GPS coordinates converted to Three.js coordinate system:

```javascript
GPS_ORIGIN = { lat: 42.0552, lon: -87.6707 }
METERS_PER_DEG_LAT = 111132
METERS_PER_DEG_LON = 82955

// Conversion formulas:
x = (lon - GPS_ORIGIN.lon) * METERS_PER_DEG_LON
z = (GPS_ORIGIN.lat - lat) * METERS_PER_DEG_LAT
```

### Example Building Data

```javascript
{
    name: "John Hancock Center",
    lat: 41.8987,
    lon: -87.6230,
    x: 3957,      // Three.js X coordinate
    z: 17392,     // Three.js Z coordinate
    width: 50,
    height: 344,  // meters
    depth: 50,
    color: 0x1a1a1a,      // Black
    emissive: 0x0a0a0a,
    shape: "tapered",
    type: "landmark"
}
```

## Building Shapes

The game uses different geometries for iconic buildings:
- **`tapered`** - Cone geometry for John Hancock's distinctive tapering
- **`pyramid-top`** - Box with conceptual pyramid top for Two Prudential Plaza
- **`wavy`** / **`curved-clover`** - Cylinders for Aqua Tower and Lake Point Tower
- **`ferris-wheel`** - Custom torus + spokes + LED lights for Navy Pier
- **`stadium`** - Low, wide box for Soldier Field
- **`dome`** - Hemisphere for Adler Planetarium
- **`neoclassical`** - Low boxes for museums
- **`box`** - Standard geometry for most buildings

## How to Run

1. **Open `lsd_game_updated.html`** in a web browser
2. **Click "START GAME"** on the start screen
3. **Drive** using arrow keys or WASD
4. **Look for landmarks** - real Chicago buildings!

## Preview Map

Open **`preview_map.html`** to see a 2D visualization of all building positions:
- Red dots = Landmarks
- Blue dots = Lakefront buildings
- Yellow dots = Skyline fill
- Gray line = Lake Shore Drive path

## Controls

- **Arrow Keys / WASD** - Steer and accelerate
- **Space** - Brake / Reverse
- **Shift** - Boost (builds up while driving)
- **M** - Toggle music
- **R** - Restart race

## Technical Details

### Building Materials
Each building has custom materials with:
- Real building colors (researched)
- Emissive lighting for nighttime glow
- Metalness and roughness for realistic rendering

### Window Lights
Tall buildings (>50m) automatically get random lit windows:
- 30% of windows are lit (random distribution)
- Warm yellow-white color (0xffeeaa)
- Positioned on building facades at 4m intervals (floors)

### Performance
- 48 buildings total (down from 200 random buildings)
- Each landmark building with custom geometry
- All buildings use GPU-accelerated rendering

## Sources & Research

Building GPS coordinates sourced from:
- [GPS Coordinates Database](https://latitude.to)
- [Chicago Architecture Center](https://www.architecture.org)
- Wikipedia articles for major landmarks
- Google Maps for verification

Building colors and details researched from:
- [ArchDaily](https://www.archdaily.com)
- [SkyscraperPage](https://skyscraperpage.com)
- [Chicago Architecture Center](https://www.architecture.org)
- Historic building documentation

## Future Enhancements

Potential additions:
- More residential buildings along the full route
- Building-specific window patterns
- Architectural details (antennas, spires)
- Landmark proximity notifications during gameplay
- Photo mode to view buildings up close

## Credits

**Game Design & Development:** Lake Shore Driver Team
**Building Research:** GPS databases, Chicago Architecture Center, Wikipedia
**Three.js:** https://threejs.org
**Google Maps API:** Used in reference implementation for GPS overlay

---

**Total Buildings:** 48
**Route:** Hollywood Beach → Soldier Field
**Distance:** ~15 miles of Lake Shore Drive
**Coordinate System:** GPS → Three.js conversion
**Night Mode:** All buildings feature nighttime aesthetic with lit windows
