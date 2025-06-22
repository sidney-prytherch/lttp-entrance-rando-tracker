import type { PageLoad } from './$types';
export const prerender = true;
export const load: PageLoad = ({ params }) => {
	let regions: {
		[key: string]: {
			isInLightWorld: boolean,
			regionName: string,
			fullyAccessible: string[],
			exitToRegionButCantEnterWithoutReq: { [key: string]: string[][] },
			connectsToRegionWithReq: { [key: string]: string[][] },
			coords?: number[],
			isWarpSpot?: boolean,
			isFluteDrop?: boolean,
			isMajorRegion?: boolean,
			mirrorCoords?: {[key: string]: number[]}
		}
	} = {
		"I'm flyin' Jack": {
			isInLightWorld: false,
			regionName: "I'm flyin' Jack",
			fullyAccessible: [
			],
			connectsToRegionWithReq: {
				'Flute Drop - Death Mountain': [[]],
				'Flute Drop - Potion Shop': [[]],
				'Flute Drop - Kakariko': [[]],
				'Flute Drop - Links House': [[]],
				'Flute Drop - East Region': [[]],
				'Flute Drop - Desert': [[]],
				'Flute Drop - Dam Region': [[]],
				'Flute Drop - Lake Hylia': [[]]
			},
			coords: [],
			exitToRegionButCantEnterWithoutReq: {}
		},
		'Flute Drop - Death Mountain': {
			isInLightWorld: true,
			regionName: "Flute Drop - Death Mountain",
			fullyAccessible: [],
			connectsToRegionWithReq: { "Death Mountain Lower West": [[]] },
			coords: [803, 444],
			exitToRegionButCantEnterWithoutReq: {},
			isFluteDrop: true
		},
		'Flute Drop - Potion Shop': {
			isInLightWorld: true,
			regionName: "Flute Drop - Potion Shop",
			fullyAccessible: [],
			connectsToRegionWithReq: { "Potion Shop Region": [[]] },
			coords: [1642, 734],
			exitToRegionButCantEnterWithoutReq: {},
			isFluteDrop: true
		},
		'Flute Drop - Kakariko': {
			isInLightWorld: true,
			regionName: "Flute Drop - Kakariko",
			fullyAccessible: [],
			connectsToRegionWithReq: { "Kakariko": [[]] },
			coords: [259, 999],
			exitToRegionButCantEnterWithoutReq: {},
			isFluteDrop: true
		},
		'Flute Drop - Links House': {
			isInLightWorld: true,
			regionName: "Flute Drop - Links House",
			fullyAccessible: [],
			connectsToRegionWithReq: { "Links House Area": [[]] },
			coords: [1067, 1435],
			exitToRegionButCantEnterWithoutReq: {},
			isFluteDrop: true
		},
		'Flute Drop - East Region': {
			isInLightWorld: true,
			regionName: "Flute Drop - East Region",
			fullyAccessible: [],
			connectsToRegionWithReq: { "East Ruins": [[]] },
			coords: [1927, 1477],
			exitToRegionButCantEnterWithoutReq: {},
			isFluteDrop: true
		},
		'Flute Drop - Desert': {
			isInLightWorld: true,
			regionName: "Flute Drop - Desert",
			fullyAccessible: [],
			connectsToRegionWithReq: { "Desert Region": [[]] },
			coords: [31, 2012],
			exitToRegionButCantEnterWithoutReq: {},
			isFluteDrop: true
		},
		'Flute Drop - Dam Region': {
			isInLightWorld: true,
			regionName: "Flute Drop - Dam Region",
			fullyAccessible: [],
			connectsToRegionWithReq: { "Near the Dam": [[]] },
			coords: [957, 1985],
			exitToRegionButCantEnterWithoutReq: {},
			isFluteDrop: true
		},
		'Flute Drop - Lake Hylia': {
			isInLightWorld: true,
			regionName: "Flute Drop - Lake Hylia",
			fullyAccessible: [],
			connectsToRegionWithReq: { "Lake Hylia Region": [[]] },
			coords: [1951, 1978],
			exitToRegionButCantEnterWithoutReq: {},
			isFluteDrop: true
		},
		'Desert Warp Ledge': {
			isInLightWorld: true,
			regionName: "Desert Warp Ledge",
			fullyAccessible: [],
			connectsToRegionWithReq: { "Desert Region": [[]], 'Warp Tile - Desert': [["progressive glove~2"]] },
			coords: [],
			exitToRegionButCantEnterWithoutReq: {}
		},
		'Warp Tile - Desert': {
			isInLightWorld: true,
			regionName: "Warp Tile - Desert",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Warp Tile - Desert - Dark World': [[]] },
			coords: [84, 2012],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - Death Mountain Lower West': {
			isInLightWorld: true,
			regionName: "Warp Tile - Death Mountain Lower West",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Warp Tile - Death Mountain Lower West - Dark World': [[]] },
			coords: [1156, 220],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - Paradox Cave (Top) Region': {
			isInLightWorld: true,
			regionName: "Warp Tile - Paradox Cave (Top) Region",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Warp Tile - Paradox Cave (Top) Region - Dark World': [[]] },
			coords: [1926, 119],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - Kakariko': {
			isInLightWorld: true,
			regionName: "Warp Tile - Kakariko",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Warp Tile - Kakariko - Dark World': [[]] },
			coords: [188, 692],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Spot - Hyrule Castle': {
			isInLightWorld: true,
			regionName: "Warp Spot - Hyrule Castle",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Warp Spot - Hyrule Castle - Dark World': [[]] },
			coords: [1024, 1089],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - Dam Area': {
			isInLightWorld: true,
			regionName: "Warp Tile - Dam Area",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Warp Tile - Dam Area - Dark World': [[]] },
			coords: [932, 1581],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - East Area': {
			isInLightWorld: true,
			regionName: "Warp Tile - East Area",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Warp Tile - East Area - Dark World': [[]] },
			coords: [1996, 1468],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - Desert - Dark World': {
			isInLightWorld: false,
			regionName: "Warp Tile - Desert - Dark World",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Swamp': [[]] },
			coords: [2149, 2012],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - Death Mountain Lower West - Dark World': {
			isInLightWorld: false,
			regionName: "Warp Tile - Death Mountain Lower West - Dark World",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Dark Death Mountain Lower West': [[]] },
			coords: [3221, 220],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - Paradox Cave (Top) Region - Dark World': {
			isInLightWorld: false,
			regionName: "Warp Tile - Paradox Cave (Top) Region - Dark World",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Dark Death Mountain Upper': [[]] },
			coords: [3991, 119],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - Kakariko - Dark World': {
			isInLightWorld: false,
			regionName: "Warp Tile - Kakariko - Dark World",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Dark World North West': [["moon pearl"]] },
			coords: [2253, 692],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Spot - Hyrule Castle - Dark World': {
			isInLightWorld: false,
			regionName: "Warp Spot - Hyrule Castle - Dark World",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Dark World East': [[]] },
			coords: [3089, 1089],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - Dam Area - Dark World': {
			isInLightWorld: false,
			regionName: "Warp Tile - Dam Area - Dark World",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Dark World South': [["moon pearl", "magic hammer"]] },
			coords: [2997, 1581],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Warp Tile - East Area - Dark World': {
			isInLightWorld: false,
			regionName: "Warp Tile - East Area - Dark World",
			fullyAccessible: [],
			connectsToRegionWithReq: { 'Dark World East': [["moon pearl", "magic hammer"]] },
			coords: [4061, 1468],
			exitToRegionButCantEnterWithoutReq: {},
			isWarpSpot: true
		},
		'Links House Area': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Links House Area",
			"fullyAccessible": [
				"Links House",
				"Lake Hylia Fortune Teller",
				"Cave Shop (Lake Hylia)",
			],
			"exitToRegionButCantEnterWithoutReq": {
				"Bonk Fairy (Light)": [["pegasus boots"]],
			},
			"connectsToRegionWithReq": {
				'Kakariko': [[]],
				'Near the Dam': [[]],
				'Lake Hylia Region': [[]],
				'East Ruins': [[]],
				'Hyrule Castle': [[]],
			}
		},
		'Lost Woods': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Lost Woods",
			connectsToRegionWithReq: {
				'Kakariko': [[]],
				"Old Man Cave (West) Region": [["progressive glove~1"]],
				"Near the Sanctuary": [[]]
			},
			fullyAccessible: [
				"Lost Woods Gamble",
				"Lumberjack Tree Cave",
				"Lumberjack House",
				"Lost Woods Hideout Stump",
				"Lost Woods Hideout Drop"],
			exitToRegionButCantEnterWithoutReq: {
				"Lumberjack Tree Tree": [["agahnim~1", "pegasus boots"]],
			}
		},
		'Kakariko': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Kakariko",
			connectsToRegionWithReq: {
				'Links House Area': [[]],
				'Lost Woods': [[]],
				'Near the Sanctuary': [[]],
				'Hyrule Castle': [[]],
				'Warp Tile - Kakariko': [["magic hammer", "progressive glove~1"], ["progressive glove~2"]],
			},
			fullyAccessible: [
				"Fortune Teller (Light)",
				"Light World Bomb Hut",
				"Kakariko Well Drop",
				"Kakariko Well Cave",
				"Blinds Hideout",
				"Elder House (West)",
				"Elder House (East)",
				"Snitch Lady (West)",
				"Snitch Lady (East)",
				"Chicken House",
				"Sick Kids House",
				"Bush Covered House",
				"Tavern North",
				"Blacksmiths Hut",
				"Bat Cave Cave",
				"Library",
				"Kakariko Gamble Game",
				"Two Brothers House (East)",
				"Kakariko Shop",
				"Tavern (Front)"
			],
			exitToRegionButCantEnterWithoutReq: {
				"Bat Cave Drop": [["magic hammer"]],
			}
		},
		'Desert Region': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Desert Region",
			connectsToRegionWithReq: {
				"Desert Palace Entrance (South) Region": [["book of mudora"]],
				'Near the Dam': [[]],
			},
			fullyAccessible: [
				"Aginahs Cave",
				"Desert Fairy",
			],
			exitToRegionButCantEnterWithoutReq: {
				
			}
		},
		'Near the Dam': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Near the Dam",
			connectsToRegionWithReq: {
				'Links House Area': [[]],
				'Desert Region': [[]],
				'Lake Hylia Region': [[]],
				'Warp Tile - Dam Area': [["magic hammer", "progressive glove~1"]],
			},
			fullyAccessible: [
				"Dam",
			],
			exitToRegionButCantEnterWithoutReq: {
				"Light Hype Fairy": [["bombs"]],
				"Mini Moldorm Cave": [["bombs"]],
				"50 Rupee Cave": [["progressive glove~1"]],
			}
		},
		'Near the Sanctuary': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Near the Sanctuary",
			connectsToRegionWithReq: {
				'Kakariko': [[]],
				'Potion Shop Region': [[]],
				"Kings Grave Region": [["pegasus boots", "progressive glove~2"]],
			},
			fullyAccessible: [
				"Sanctuary",
				"North Fairy Cave Drop",
				"North Fairy Cave",
			],
			exitToRegionButCantEnterWithoutReq: {
				"Bonk Rock Cave": [["pegasus boots"]],
				"Sanctuary Grave": [["progressive glove~1"]],
			}
		},
		'Lake Hylia Region': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Lake Hylia Region",
			connectsToRegionWithReq: {
				"Waterfall of Wishing Region": [["flippers"]],
				"Capacity Upgrade Region": [["flippers"]],
				'Links House Area': [[]],
				'Near the Dam': [[]],
				'East Ruins': [[]],
			},
			fullyAccessible: [
				"Good Bee Cave",
			],
			exitToRegionButCantEnterWithoutReq: {
				"20 Rupee Cave": [["progressive glove~1"]],
				"Ice Rod Cave": [["bombs"]],
			},
		},
		'East Ruins': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "East Ruins",
			connectsToRegionWithReq: {
				'Warp Tile - East Area': [["magic hammer", "progressive glove~1"]],
				'Links House Area': [[]],
				'Lake Hylia Region': [[]],
				'Potion Shop Region': [[]],
				'Hyrule Castle': [[]],
			},
			fullyAccessible: [
				"Sahasrahlas Hut",
				"Eastern Palace",
				"Long Fairy Cave",
				"Lake Hylia Fairy",
			],
			exitToRegionButCantEnterWithoutReq: {
			}
		},
		'Potion Shop Region': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Potion Shop",
			connectsToRegionWithReq: {
				'Near the Sanctuary': [[]],
				'East Ruins': [[]],
				"Waterfall of Wishing Region": [["flippers", "progressive glove~1"]],
			},
			fullyAccessible: [
				"Potion Shop",
			],
			exitToRegionButCantEnterWithoutReq: {
			}
		},
		'Hyrule Castle': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Hyrule Castle",
			connectsToRegionWithReq: {
				'Warp Spot - Hyrule Castle': [["agahnim~1"]],
				'Links House Area': [[]],
				'Kakariko': [[]],
				'East Ruins': [[]],
			},
			fullyAccessible: [
				"Hyrule Castle Secret Entrance Drop",
				"Hyrule Castle Secret Entrance Stairs",
				"Hyrule Castle Entrance (South)"
			],
			exitToRegionButCantEnterWithoutReq: {
			}
		},
		'Capacity Upgrade Region': {
			isInLightWorld: true,
			"regionName": "Capacity Upgrade Region",
			"fullyAccessible": ["Capacity Upgrade"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Lake Hylia Region": [["flippers"]], "Ice Palace Region": [["progressive glove~2"]] }
		},
		'Cave 45 Region': {
			isInLightWorld: true,
			"regionName": "Cave 45 Region",
			"fullyAccessible": ["Cave 45"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Links House Area": [[]] }
		},
		'Graveyard Cave Region': {
			isInLightWorld: true,
			"regionName": "Graveyard Cave Region",
			"fullyAccessible": ["Graveyard Cave"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Near the Sanctuary": [[]] }
		},
		'Two Brothers House (West) Region': {
			isInLightWorld: true,
			"regionName": "Two Brothers House (West) Region",
			"fullyAccessible": ["Two Brothers House (West)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Kakariko": [[]] }
		},
		'Old Man Cave (West) Region': {
			isInLightWorld: true,
			"regionName": "Old Man Cave (West) Region",
			"fullyAccessible": ["Old Man Cave (West)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Lost Woods": [[]] }
		},
		'Return from Death Mountain Ledge': {
			isInLightWorld: true,
			"regionName": "Return from Death Mountain Ledge",
			"fullyAccessible": ["Death Mountain Return Cave (West)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Lost Woods": [[]] }
		},
		'Death Mountain Lower West': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Death Mountain Lower West",
			"fullyAccessible": ["Old Man Cave (East)", "Old Man House (Bottom)", "Old Man House (Top)", "Spectacle Rock Cave", "Spectacle Rock Cave (Bottom)", "Death Mountain Return Cave (East)", "Spectacle Rock Cave Peak"],
			"connectsToRegionWithReq": { 'Warp Tile - Death Mountain Lower West': [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Death Mountain Lower East': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Death Mountain Lower East",
			"fullyAccessible": ["Spiral Cave (Bottom)", "Hookshot Fairy", "Paradox Cave (Bottom)", "Paradox Cave (Middle)"],
			"connectsToRegionWithReq": {},
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Hyrule Castle Ledge': {
			isInLightWorld: true,
			"regionName": "Hyrule Castle Ledge",
			"fullyAccessible": ["Hyrule Castle Entrance (West)", "Hyrule Castle Entrance (East)"],
			"exitToRegionButCantEnterWithoutReq": { "Agahnims Tower": [["progressive sword~2"], ["magic cape"]] },
			"connectsToRegionWithReq": { "Hyrule Castle": [[]] }
		},
		'Tower of Hera Region': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Tower of Hera Region",
			"fullyAccessible": ["Tower of Hera"],
			"connectsToRegionWithReq": { "Death Mountain Lower West": [[]], "Paradox Cave (Top) Region": [["magic hammer"]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Waterfall of Wishing Region': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Waterfall of Wishing Region",
			"fullyAccessible": ["Waterfall of Wishing"],
			"connectsToRegionWithReq": { "Lake Hylia Region": [["flippers"]], 'Potion Shop Region': [["flippers", "progressive glove~1"]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Kings Grave Region': {
			isInLightWorld: true,
			"regionName": "Kings Grave Region",
			"fullyAccessible": [],
			"exitToRegionButCantEnterWithoutReq": { "Kings Grave": [["pegasus boots"]] },
			"connectsToRegionWithReq": { "Near the Sanctuary": [["progressive glove~2"]] }
		},
		'Paradox Cave (Top) Region': {
			isInLightWorld: true,
			isMajorRegion: true,
			"regionName": "Paradox Cave (Top) Region",
			"fullyAccessible": ["Paradox Cave (Top)"],
			"connectsToRegionWithReq": { "Tower of Hera Region": [["magic hammer"]], "Fairy Ascension Cave (Top) Region": [[]], "Spiral Cave Region": [[]], "Death Mountain Lower East": [[]], "Warp Tile - Paradox Cave (Top) Region": [["progressive glove~2", "magic hammer"]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		// 'Turtle Rock Shell': {
		// 	"regionName": "Turtle Rock Shell",
		// 	"fullyAccessible": [],
		// 	"connectsToRegionWithReq": { "Dark Death Mountain Upper": [[]] },
		// 	"exitToRegionButCantEnterWithoutReq": { "Turtle Rock": [["turtle rock logic~true"]] }
		// },
		'Mimic Cave Region': {
			isInLightWorld: true,
			"regionName": "Mimic Cave Region",
			"fullyAccessible": ["Mimic Cave"],
			"connectsToRegionWithReq": {},
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Spiral Cave Region': {
			isInLightWorld: true,
			"regionName": "Spiral Cave Region",
			"fullyAccessible": ["Spiral Cave"],
			"connectsToRegionWithReq": { "Death Mountain Lower East": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Fairy Ascension Cave (Top) Region': {
			isInLightWorld: true,
			"regionName": "Fairy Ascension Cave (Top) Region",
			"fullyAccessible": ["Fairy Ascension Cave (Top)"],
			"connectsToRegionWithReq": { "Fairy Ascension Cave (Bottom) Region": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Fairy Ascension Cave (Bottom) Region': {
			isInLightWorld: true,
			"regionName": "Fairy Ascension Cave (Bottom) Region",
			"fullyAccessible": ["Fairy Ascension Cave (Bottom)"],
			"connectsToRegionWithReq": { "Death Mountain Lower East": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Desert Palace Entrance (East) Region': {
			isInLightWorld: true,
			"regionName": "Desert Palace Entrance (East) Region",
			"fullyAccessible": ["Desert Palace Entrance (East)"],
			"connectsToRegionWithReq": { "Desert Region": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Desert Palace Entrance (South) Region': {
			isInLightWorld: true,
			"regionName": "Desert Palace Entrance (South) Region",
			"fullyAccessible": ["Desert Palace Entrance (South)"],
			"connectsToRegionWithReq": {},
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Desert Palace Entrance (West) Region': {
			isInLightWorld: true,
			"regionName": "Desert Palace Entrance (West) Region",
			"fullyAccessible": ["Desert Palace Entrance (West)"],
			"connectsToRegionWithReq": { "Desert Region": [[]], "Desert Palace Entrance (North) Region": [["progressive glove~1"]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Desert Palace Entrance (North) Region': {
			isInLightWorld: true,
			"regionName": "Desert Palace Entrance (North) Region",
			"fullyAccessible": ["Desert Palace Entrance (North)"],
			"connectsToRegionWithReq": { "Desert Palace Entrance (West) Region": [["progressive glove~1"]], "Desert Region": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Checkerboard Cave Region': {
			isInLightWorld: true,
			"regionName": "Checkerboard Cave Region",
			"fullyAccessible": [],
			"connectsToRegionWithReq": { "Desert Region": [[]] },
			"exitToRegionButCantEnterWithoutReq": { "Checkerboard Cave": [["progressive glove~1"]] }
		},
		'Skull Woods Final Area': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Skull Woods Final Area",
			"fullyAccessible": ["Skull Woods Second Section Door (West)"],
			"exitToRegionButCantEnterWithoutReq": { "Skull Woods Second Section Hole": [["moon pearl"]], "Skull Woods Final Section": [["moon pearl", "fire rod"]] },
			"connectsToRegionWithReq": { "Lost Woods": [["mirror"]] },
			mirrorCoords: {
				"Lost Woods": [2208, 147]
			}
		},
		'Dark World North West': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Dark World North West",
			"fullyAccessible": ["Skull Woods Second Section Door (East)", "Skull Woods First Section Hole (West)", "Skull Woods First Section Hole (East)", "Skull Woods First Section Door", "Dark World Lumberjack Shop", "Fortune Teller (Dark)", "Dark Sanctuary Hint", "Red Shield Shop", "Chest Game", "C-Shaped House"],
			"exitToRegionButCantEnterWithoutReq": { "Skull Woods First Section Hole (North)": [["moon pearl"]], "Thieves Town": [["moon pearl"]], "Brewery": [["moon pearl", "bombs"]] },
			"connectsToRegionWithReq": { "Village of Outcasts Shop Region": [["magic hammer", "moon pearl"]], "Dark World Potion Shop Region": [["moon pearl", "flippers"]], "Bumper Cave (Bottom) Region": [["moon pearl", "progressive glove~1"]], "Graveyard Cave Region": [["moon pearl", "mirror"]], "Kings Grave Region": [["moon pearl", "mirror"]], "Dark World South": [[]], "Dark World Hammer Peg Cave Region": [["progressive glove~2", "moon pearl"]], "Kakariko": [["mirror"]] },
			mirrorCoords: {
				"Graveyard Cave Region": [3218, 573],
				"Kings Grave Region": [3308, 623],
				"Kakariko": [2470, 826],
			}
		},
		'Village of Outcasts Shop Region': {
			isInLightWorld: false,
			"regionName": "Village of Outcasts Shop Region",
			"fullyAccessible": ["Village of Outcasts Shop"],
			"connectsToRegionWithReq": { "Dark World North West": [["magic hammer", "moon pearl"]], "Kakariko": [["mirror"]] },
			"exitToRegionButCantEnterWithoutReq": {},
			mirrorCoords: {
				"Kakariko": [2502, 1111],
			}
		},
		'Dark World South': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Dark World South",
			"fullyAccessible": ["Archery Game", "Big Bomb Shop", "Swamp Palace", "Dark Lake Hylia Shop"],
			"exitToRegionButCantEnterWithoutReq": { "Bonk Fairy (Dark)": [["pegasus boots", "moon pearl"]], "Hype Cave": [["moon pearl", "bombs"]] },
			"connectsToRegionWithReq": { "Dark World North West": [["progressive glove~2"]], "Dark Lake Hylia Ledge": [["moon pearl", "flippers"]], "Dark World East": [["moon pearl", "flippers"], ["moon pearl", "magic hammer"]], "Cave 45 Region": [["mirror"]], "Two Brothers House (West) Region": [["mirror", "progressive glove~2", "moon pearl"]], "Links House Area": [["mirror"]] },
			mirrorCoords: {
				"Cave 45 Region": [2662, 1732],
				"Two Brothers House (West) Region": [2255, 1467],
				"Links House Area": [2859, 1655],
			}
		},
		'Swamp': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Swamp",
			"fullyAccessible": ["Mire Shed", "Dark Desert Fairy", "Dark Desert Hint"],
			"exitToRegionButCantEnterWithoutReq": { "Misery Mire": [["misery mire logic~true", "moon pearl"]] },
			"connectsToRegionWithReq": { "Desert Palace Entrance (East) Region": [["mirror"]], "Desert Palace Entrance (North) Region": [["mirror"]], "Desert Palace Entrance (South) Region": [["mirror"]], "Desert Palace Entrance (West) Region": [["mirror"]], "Checkerboard Cave Region": [["mirror"]], "Desert Region": [["mirror"]] },
			mirrorCoords: {
				"Desert Palace Entrance (East) Region": [2288, 1649],
				"Desert Palace Entrance (North) Region": [2213, 1583],
				"Desert Palace Entrance (South) Region": [2216, 1673],
				"Desert Palace Entrance (West) Region": [2124, 1673],
				"Checkerboard Cave Region": [2381, 1590],
				"Desert Region": [2282, 1814],
			}
		},
		'Dark World East': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Dark World East",
			"fullyAccessible": ["Dark Lake Hylia Fairy", "Palace of Darkness Hint", "East Dark World Hint"],
			"exitToRegionButCantEnterWithoutReq": { "Pyramid Fairy": [["special crystals~2"]], "Pyramid Hole": [["pyramid hole"]], "Palace of Darkness": [["moon pearl"]] },
			"connectsToRegionWithReq": { "Dark World South": [["moon pearl", "magic hammer"]], "Dark World Potion Shop Region": [["moon pearl", "flippers"], ["moon pearl", "progressive glove~1"], ["moon pearl", "magic hammer"]], "Dark Lake Hylia Ledge": [["moon pearl", "flippers"]], "Hyrule Castle Ledge": [["mirror"]], "Hyrule Castle": [["mirror"]], "East Ruins": [["mirror"]] },
			mirrorCoords: {
				"Hyrule Castle Ledge": [3084, 852],
				"East Ruins": [3466, 1106],
				"Hyrule Castle": [3088, 1055]
			}
		},
		'Dark World Potion Shop Region': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Dark World Potion Shop Region",
			"fullyAccessible": ["Dark World Potion Shop"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark World East": [["moon pearl", "progressive glove~1"], ["moon pearl", "magic hammer"]], "Dark World North West": [["moon pearl", "hookshot"]], "Potion Shop Region": [["mirror"]] },
			mirrorCoords: {
				"Potion Shop Region": [3610, 704],
			}
		},
		'Bumper Cave (Top) Region': {
			isInLightWorld: false,
			"regionName": "Bumper Cave (Top) Region",
			"fullyAccessible": ["Bumper Cave (Top)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark World North West": [[]], "Return from Death Mountain Ledge": [["mirror"]] },
			mirrorCoords: {
				"Return from Death Mountain Ledge": [2762, 306],
			}
		},
		'Bumper Cave (Bottom) Region': {
			isInLightWorld: false,
			"regionName": "Bumper Cave (Bottom) Region",
			"fullyAccessible": ["Bumper Cave (Bottom)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark World North West": [[]], "Old Man Cave (West) Region": [["mirror"]] },
			mirrorCoords: {
				"Old Man Cave (West) Region": [2800, 384],
			}
		},
		'Pyramid Entrance Region': {
			isInLightWorld: false,
			"regionName": "Pyramid Entrance Region",
			"fullyAccessible": ["Pyramid Entrance"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark World East": [[]] }
		},
		'Dark Lake Hylia Ledge': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Dark Lake Hylia Ledge",
			"fullyAccessible": ["Dark Lake Hylia Ledge Hint"],
			"exitToRegionButCantEnterWithoutReq": { "Dark Lake Hylia Ledge Fairy": [["moon pearl", "bombs"]], "Dark Lake Hylia Ledge Spike Cave": [["moon pearl", "progressive glove~1"]] },
			"connectsToRegionWithReq": { "Dark World East": [["moon pearl", "flippers"]], "Lake Hylia Region": [["mirror"]] },
			mirrorCoords: {
				"Lake Hylia Region": [4048, 1788],
			}
		},
		'Ice Palace Region': {
			isInLightWorld: false,
			"regionName": "Ice Palace Region",
			"fullyAccessible": ["Ice Palace"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Capacity Upgrade Region": [["mirror"]] },
			mirrorCoords: {
				"Capacity Upgrade Region": [3664, 1784],
			}
		},
		'Dark World Hammer Peg Cave Region': {
			isInLightWorld: false,
			"regionName": "Dark World Hammer Peg Cave Region",
			"fullyAccessible": [],
			"exitToRegionButCantEnterWithoutReq": {
				"Dark World Hammer Peg Cave": [["moon pearl", "magic hammer"]],
				// "Bat Cave Drop": [["mirror"]], // technically not accurate, but because you can't exit from here, it doesn't matter
			},
			"connectsToRegionWithReq": { "Dark World North West": [["moon pearl", "progressive glove~2"]], "Kakariko": [["mirror"]] },
			mirrorCoords: {
				"Kakariko": [2752, 1176],
			}
		},
		'Dark Death Mountain Lower West': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Dark Death Mountain Lower West",
			"fullyAccessible": ["Dark Death Mountain Fairy", "Spike Cave"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Death Mountain Lower West": [["mirror"]], "Tower of Hera Region": [["mirror"]] },
			mirrorCoords: {
				"Death Mountain Lower West": [3032, 194],
				"Tower of Hera Region": [3032, 180],
			}
		},
		'Dark Death Mountain Upper': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Dark Death Mountain Upper",
			"fullyAccessible": ["Superbunny Cave (Top)"],
			"exitToRegionButCantEnterWithoutReq": { 'Turtle Rock': [["turtle rock logic~true", "moon pearl", 'progressive sword~1']], "Hookshot Cave": [["moon pearl", "progressive glove~1"]], "Ganons Tower": [["ganon tower logic~true"]] },
			"connectsToRegionWithReq": { "Dark Death Mountain Lower West": [[]], "Dark Death Mountain Lower East": [[]], "Tower of Hera Region": [["mirror"]], "Paradox Cave (Top) Region": [["mirror"]] },
			mirrorCoords: {
				"Tower of Hera Region": [3402, 100],
				"Paradox Cave (Top) Region": [3610, 104],
			}
		},
		'Dark Death Mountain Lower East': {
			isInLightWorld: false,
			isMajorRegion: true,
			"regionName": "Dark Death Mountain Lower East",
			"fullyAccessible": ["Superbunny Cave (Bottom)", "Cave Shop (Dark Death Mountain)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Death Mountain Lower East": [["mirror"]], "Fairy Ascension Cave (Bottom) Region": [["mirror", "moon pearl"]] },
			mirrorCoords: {
				"Death Mountain Lower East": [3688, 416],
				"Fairy Ascension Cave (Bottom) Region": [3724, 330],
			}
		},
		'Turtle Rock Montain Ledge Region': {
			isInLightWorld: false,
			"regionName": "Turtle Rock Montain Ledge Region",
			"fullyAccessible": ["Dark Death Mountain Ledge (East)", "Dark Death Mountain Ledge (West)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Mimic Cave Region": [["mirror"]], "Spiral Cave Region": [["mirror"]] },
			mirrorCoords: {
				"Mimic Cave Region": [3780, 194],
				"Spiral Cave Region": [3696, 198],
			}
		},
		'Turtle Rock Isolated Ledge Region': {
			isInLightWorld: false,
			"regionName": "Turtle Rock Isolated Ledge Region",
			"fullyAccessible": ["Turtle Rock Isolated Ledge Entrance"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Fairy Ascension Cave (Top) Region": [["mirror"]] },
			mirrorCoords: {
				"Fairy Ascension Cave (Top) Region": [3746, 246],
			}
		},
		'Dark Death Mountain Island': {
			isInLightWorld: false,
			"regionName": "Dark Death Mountain Island",
			"fullyAccessible": ["Hookshot Cave Back Entrance"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark Death Mountain Upper": [[]] }
		}
	}
	let entranceToRegionMap: {
		[key: string]: string
	} = {
		'Links House': 'Links House Area',
		'Bonk Fairy (Light)': 'Links House Area',
		'Lake Hylia Fortune Teller': 'Links House Area',
		'Cave Shop (Lake Hylia)': 'Links House Area',

		'Lost Woods Gamble': 'Lost Woods',
		'Lumberjack Tree Cave': 'Lost Woods',
		'Lumberjack House': 'Lost Woods',
		'Lost Woods Hideout Stump': 'Lost Woods',
		'Lost Woods Hideout Drop': 'Lost Woods',
		'Lumberjack Tree Tree': 'Lost Woods',

		'Potion Shop': 'Potion Shop Region',

		'Fortune Teller (Light)': 'Kakariko',
		'North Fairy Cave Drop': 'Kakariko',
		'North Fairy Cave': 'Kakariko',
		'Kakariko Shop': 'Kakariko',
		'Tavern (Front)': 'Kakariko',
		'Light World Bomb Hut': 'Kakariko',
		'Kakariko Well Drop': 'Kakariko',
		'Kakariko Well Cave': 'Kakariko',
		'Blinds Hideout': 'Kakariko',
		'Elder House (West)': 'Kakariko',
		'Elder House (East)': 'Kakariko',
		'Snitch Lady (West)': 'Kakariko',
		'Snitch Lady (East)': 'Kakariko',
		'Chicken House': 'Kakariko',
		'Sick Kids House': 'Kakariko',
		'Bush Covered House': 'Kakariko',
		'Tavern North': 'Kakariko',
		'Blacksmiths Hut': 'Kakariko',
		'Bat Cave Cave': 'Kakariko',
		'Library': 'Kakariko',
		'Kakariko Gamble Game': 'Kakariko',
		'Two Brothers House (East)': 'Kakariko',
		'Bat Cave Drop': 'Kakariko',

		'Aginahs Cave': 'Desert Region',
		'Desert Fairy': 'Desert Region',

		'Dam': 'Near the Dam',
		'50 Rupee Cave': 'Near the Dam',
		'Light Hype Fairy': 'Near the Dam',
		'Mini Moldorm Cave': 'Near the Dam',

		'Sanctuary': 'Near the Sanctuary',
		'Bonk Rock Cave': 'Near the Sanctuary',
		'Sanctuary Grave': 'Near the Sanctuary',

		'Good Bee Cave': 'Lake Hylia Region',
		'20 Rupee Cave': 'Lake Hylia Region',
		'Ice Rod Cave': 'Lake Hylia Region',

		'Long Fairy Cave': 'East Ruins',
		'Sahasrahlas Hut': 'East Ruins',
		'Eastern Palace': 'East Ruins',
		'Lake Hylia Fairy': 'East Ruins',

		'Hyrule Castle Secret Entrance Drop': 'Hyrule Castle',
		'Hyrule Castle Secret Entrance Stairs': 'Hyrule Castle',
		'Hyrule Castle Entrance (South)': 'Hyrule Castle',

		'Capacity Upgrade': 'Capacity Upgrade Region',
		'Cave 45': 'Cave 45 Region',
		'Graveyard Cave': 'Graveyard Cave Region',
		'Two Brothers House (West)': 'Two Brothers House (West) Region',
		'Old Man Cave (West)': 'Old Man Cave (West) Region',
		'Death Mountain Return Cave (West)': 'Return from Death Mountain Ledge',
		'Old Man Cave (East)': 'Death Mountain Lower West',
		'Old Man House (Bottom)': 'Death Mountain Lower West',
		'Old Man House (Top)': 'Death Mountain Lower West',
		'Spectacle Rock Cave': 'Death Mountain Lower West',
		'Spectacle Rock Cave (Bottom)': 'Death Mountain Lower West',
		'Death Mountain Return Cave (East)': 'Death Mountain Lower West',
		'Spectacle Rock Cave Peak': 'Death Mountain Lower West',
		'Spiral Cave (Bottom)': 'Death Mountain Lower East',
		'Hookshot Fairy': 'Death Mountain Lower East',
		'Paradox Cave (Bottom)': 'Death Mountain Lower East',
		'Paradox Cave (Middle)': 'Death Mountain Lower East',
		'Hyrule Castle Entrance (West)': 'Hyrule Castle Ledge',
		'Hyrule Castle Entrance (East)': 'Hyrule Castle Ledge',
		'Agahnims Tower': 'Hyrule Castle Ledge',
		'Tower of Hera': 'Tower of Hera Region',
		'Waterfall of Wishing': 'Waterfall of Wishing Region',
		'Kings Grave': 'Kings Grave Region',
		'Paradox Cave (Top)': 'Paradox Cave (Top) Region',
		'Turtle Rock': 'Dark Death Mountain Upper',
		'Mimic Cave': 'Mimic Cave Region',
		'Spiral Cave': 'Spiral Cave Region',
		'Fairy Ascension Cave (Top)': 'Fairy Ascension Cave (Top) Region',
		'Fairy Ascension Cave (Bottom)': 'Fairy Ascension Cave (Bottom) Region',
		'Desert Palace Entrance (East)': 'Desert Palace Entrance (East) Region',
		'Desert Palace Entrance (South)': 'Desert Palace Entrance (South) Region',
		'Desert Palace Entrance (West)': 'Desert Palace Entrance (West) Region',
		'Desert Palace Entrance (North)': 'Desert Palace Entrance (North) Region',
		'Checkerboard Cave': 'Checkerboard Cave Region',
		'Skull Woods Second Section Door (West)': 'Skull Woods Final Area',
		'Skull Woods Second Section Hole': 'Skull Woods Final Area',
		'Skull Woods Final Section': 'Skull Woods Final Area',
		'Skull Woods Second Section Door (East)': 'Dark World North West',
		'Skull Woods First Section Hole (West)': 'Dark World North West',
		'Skull Woods First Section Hole (East)': 'Dark World North West',
		'Skull Woods First Section Door': 'Dark World North West',
		'Dark World Lumberjack Shop': 'Dark World North West',
		'Fortune Teller (Dark)': 'Dark World North West',
		'Dark Sanctuary Hint': 'Dark World North West',
		'Red Shield Shop': 'Dark World North West',
		'Chest Game': 'Dark World North West',
		'C-Shaped House': 'Dark World North West',
		'Skull Woods First Section Hole (North)': 'Dark World North West',
		'Thieves Town': 'Dark World North West',
		'Brewery': 'Dark World North West',
		'Village of Outcasts Shop': 'Village of Outcasts Shop Region',
		'Archery Game': 'Dark World South',
		'Big Bomb Shop': 'Dark World South',
		'Swamp Palace': 'Dark World South',
		'Dark Lake Hylia Shop': 'Dark World South',
		'Bonk Fairy (Dark)': 'Dark World South',
		'Hype Cave': 'Dark World South',
		'Mire Shed': 'Swamp',
		'Dark Desert Fairy': 'Swamp',
		'Dark Desert Hint': 'Swamp',
		'Misery Mire': 'Swamp',
		'Dark Lake Hylia Fairy': 'Dark World East',
		'Palace of Darkness Hint': 'Dark World East',
		'East Dark World Hint': 'Dark World East',
		'Pyramid Fairy': 'Dark World East',
		'Pyramid Hole': 'Dark World East',
		'Palace of Darkness': 'Dark World East',
		'Dark World Potion Shop': 'Dark World Potion Shop Region',
		'Bumper Cave (Top)': 'Bumper Cave (Top) Region',
		'Bumper Cave (Bottom)': 'Bumper Cave (Bottom) Region',
		'Pyramid Entrance': 'Pyramid Entrance Region',
		'Dark Lake Hylia Ledge Hint': 'Dark Lake Hylia Ledge',
		'Dark Lake Hylia Ledge Fairy': 'Dark Lake Hylia Ledge',
		'Dark Lake Hylia Ledge Spike Cave': 'Dark Lake Hylia Ledge',
		'Ice Palace': 'Ice Palace Region',
		'Dark World Hammer Peg Cave': 'Dark World Hammer Peg Cave Region',
		'Dark Death Mountain Fairy': 'Dark Death Mountain Lower West',
		'Spike Cave': 'Dark Death Mountain Lower West',
		'Ganons Tower': 'Dark Death Mountain Upper',
		'Superbunny Cave (Top)': 'Dark Death Mountain Upper',
		'Hookshot Cave': 'Dark Death Mountain Upper',
		'Superbunny Cave (Bottom)': 'Dark Death Mountain Lower East',
		'Cave Shop (Dark Death Mountain)': 'Dark Death Mountain Lower East',
		'Dark Death Mountain Ledge (East)': 'Turtle Rock Montain Ledge Region',
		'Dark Death Mountain Ledge (West)': 'Turtle Rock Montain Ledge Region',
		'Turtle Rock Isolated Ledge Entrance': 'Turtle Rock Isolated Ledge Region',
		'Hookshot Cave Back Entrance': 'Dark Death Mountain Island',
	};
	let dungeonCodes: { [key: string]: string } = {
		'Hyrule Castle': 'HC',
		'Agahnims Tower': 'AT',
		'Eastern Palace': 'EP',
		'Desert Palace': 'DP',
		'Tower of Hera': 'ToH',
		'Palace of Darkness': 'PoD',
		'Swamp Palace': 'SP',
		'Skull Woods': 'SW',
		'Thieves Town': 'TT',
		'Ice Palace': 'IP',
		'Misery Mire': 'MM',
		'Turtle Rock': 'TR',
		'Ganons Tower': 'GT'
	}
	let entranceCoords: {
		[key: string]: {
			containsUncollectedChecks: boolean,
			image: string,
			requires: { [key: string]: boolean },
			requiresCount: { [key: string]: number },
			goesTo: string,
			specialComesFrom: Set<string>,
			goesToSelectedOption: string | null,
			coords: number[]
		}
	} = {
		'Master Sword Pedestal': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [-100, -100]
		},
		'Lost Woods Gamble': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [381, 33]
		},
		'Lumberjack Tree Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [681, 68]
		},
		'Lumberjack House': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [689, 124]
		},
		'Lumberjack Tree Tree': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [617, 152]
		},
		'Death Mountain Return Cave (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [736, 312]
		},
		'Old Man Cave (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [729, 363]
		},
		'Potion Shop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1640, 688]
		},
		'Waterfall of Wishing': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1847, 290]
		},
		'Zora River': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [-100, -100]
		},
		'Lost Woods Hideout Stump': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [375, 307]
		},
		'Lost Woods Hideout Drop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [389, 270]
		},
		'Fortune Teller (Light)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [385, 661]
		},
		'Bonk Rock Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [800, 602]
		},
		'Sanctuary': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [944, 551]
		},
		'Sanctuary Grave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1064, 602]
		},
		'Graveyard Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1167, 562]
		},
		'Kings Grave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1234, 610]
		},
		'North Fairy Cave Drop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1316, 637]
		},
		'North Fairy Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1370, 564]
		},
		'Old Man Cave (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [833, 383]
		},
		'Old Man House (Bottom)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [921, 481]
		},
		'Old Man House (Top)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1097, 331]
		},
		'Spectacle Rock Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1000, 302]
		},
		'Spectacle Rock Cave (Bottom)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [938, 282]
		},
		'Death Mountain Return Cave (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [808, 281]
		},
		'Spectacle Rock Cave Peak': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1002, 209]
		},
		'Tower of Hera': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1150, 71]
		},
		'Kakariko Shop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [227, 1198]
		},
		'Tavern (Front)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [330, 1219]
		},
		'Paradox Cave (Top)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1760, 130]
		},
		'Mimic Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1730, 186]
		},
		'Spiral Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1633, 187]
		},
		'Fairy Ascension Cave (Top)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1682, 233]
		},
		'Spiral Cave (Bottom)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1641, 267]
		},
		'Fairy Ascension Cave (Bottom)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1681, 282]
		},
		'Hookshot Fairy': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1724, 298]
		},
		'Paradox Cave (Bottom)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1765, 298]
		},
		'Paradox Cave (Middle)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1766, 442]
		},
		'Light World Bomb Hut': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [57, 1223]
		},
		'Kakariko Well Drop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [49, 874]
		},
		'Kakariko Well Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [97, 874]
		},
		'Blinds Hideout': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [264, 861]
		},
		'Elder House (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [311, 861]
		},
		'Elder House (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [353, 861]
		},
		'Snitch Lady (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [105, 957]
		},
		'Snitch Lady (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [424, 988]
		},
		'Chicken House': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [200, 1109]
		},
		'Sick Kids House': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [321, 1102]
		},
		'Bush Covered House': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [417, 1095]
		},
		'Tavern North': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [330, 1166]
		},
		'Blacksmiths Hut': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [623, 1093]
		},
		'Bat Cave Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [638, 1133]
		},
		'Bat Cave Drop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [674, 1156]
		},
		'Library': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [322, 1351]
		},
		'Kakariko Gamble Game': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [440, 1439]
		},
		'Two Brothers House (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [290, 1470]
		},
		'Two Brothers House (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [225, 1471]
		},
		'Cave 45': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [544, 1690]
		},
		'Aginahs Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [409, 1691]
		},
		'Desert Palace Entrance (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [235, 1630]
		},
		'Desert Palace Entrance (South)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [154, 1633]
		},
		'Desert Palace Entrance (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [72, 1627]
		},
		'Desert Palace Entrance (North)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [153, 1573]
		},
		'Desert Fairy': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [570, 1827]
		},
		'50 Rupee Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [641, 1961]
		},
		'Dam': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [959, 1917]
		},
		'Light Hype Fairy': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1224, 1599]
		},
		'Links House': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1122, 1415]
		},
		'Bonk Fairy (Light)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [968, 1337]
		},
		'Mini Moldorm Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1336, 1925]
		},
		'Lake Hylia Fortune Teller': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1330, 1647]
		},
		'Cave Shop (Lake Hylia)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1488, 1568]
		},
		'Capacity Upgrade': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1626, 1746]
		},
		'Good Bee Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1877, 1576]
		},
		'Ice Rod Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1831, 1576]
		},
		'20 Rupee Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1849, 1614]
		},
		'Long Fairy Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2007, 1435]
		},
		'Sahasrahlas Hut': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1660, 928]
		},
		'Eastern Palace': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1964, 801]
		},
		'Lake Hylia Fairy': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1689, 1322]
		},
		'Hyrule Castle Secret Entrance Drop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1221, 854]
		},
		'Hyrule Castle Secret Entrance Stairs': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1128, 881]
		},
		'Hyrule Castle Entrance (South)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1025, 900]
		},
		'Agahnims Tower': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1024, 822]
		},
		'Hyrule Castle Entrance (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [921, 796]
		},
		'Hyrule Castle Entrance (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [1128, 798]
		},
		'Checkerboard Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [361, 1594]
		},
		'Superbunny Cave (Bottom)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3788, 296]
		},
		'Cave Shop (Dark Death Mountain)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3828, 296]
		},
		'Skull Woods Final Section': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2145, 106]
		},
		'Skull Woods Second Section Door (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2186, 264]
		},
		'Skull Woods Second Section Hole': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2313, 186]
		},
		'Skull Woods Second Section Door (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2361, 296]
		},
		'Skull Woods First Section Hole (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2386, 361]
		},
		'Skull Woods First Section Hole (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2464, 346]
		},
		'Skull Woods First Section Door': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2440, 306]
		},
		'Skull Woods First Section Hole (North)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2452, 270]
		},
		'Dark World Lumberjack Shop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2754, 117]
		},
		'Bumper Cave (Top)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2801, 314]
		},
		'Bumper Cave (Bottom)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2793, 362]
		},
		'Fortune Teller (Dark)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2449, 658]
		},
		'Dark Sanctuary Hint': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3008, 564]
		},
		'Dark World Potion Shop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3713, 692]
		},
		'Pyramid Hole': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3086, 834]
		},
		'Pyramid Entrance': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2953, 996]
		},
		'Pyramid Fairy': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3022, 996]
		},
		'Palace of Darkness Hint': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3804, 1032]
		},
		'Palace of Darkness': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [4027, 810]
		},
		'East Dark World Hint': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [4072, 1434]
		},
		'Dark Lake Hylia Fairy': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3753, 1323]
		},
		'Dark Lake Hylia Ledge Fairy': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3896, 1577]
		},
		'Dark Lake Hylia Ledge Hint': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3941, 1577]
		},
		'Dark Lake Hylia Ledge Spike Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3912, 1616]
		},
		'Ice Palace': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3695, 1767]
		},
		'Dark Lake Hylia Shop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3392, 1645]
		},
		'Hype Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3288, 1598]
		},
		'Big Bomb Shop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3188, 1412]
		},
		'Bonk Fairy (Dark)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3033, 1338]
		},
		'Dark World Hammer Peg Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2714, 1244]
		},
		'Red Shield Shop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2746, 942]
		},
		'Chest Game': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2170, 958]
		},
		'Thieves Town': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2323, 992]
		},
		'C-Shaped House': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2489, 992]
		},
		'Village of Outcasts Shop': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2481, 1094]
		},
		'Brewery': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2290, 1193]
		},
		'Archery Game': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2504, 1439]
		},
		'Mire Shed': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2144, 1638]
		},
		'Misery Mire': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2216, 1648]
		},
		'Dark Desert Fairy': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2288, 1639]
		},
		'Dark Desert Hint': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2472, 1689]
		},
		'Swamp Palace': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3025, 1915]
		},
		'Dark Death Mountain Fairy': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [2897, 387]
		},
		'Spike Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3241, 298]
		},
		'Ganons Tower': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3217, 64]
		},
		'Hookshot Cave Back Entrance': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3705, 33]
		},
		'Hookshot Cave': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3768, 138]
		},
		'Superbunny Cave (Top)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3825, 129]
		},
		'Turtle Rock': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3993, 167]
		},
		'Dark Death Mountain Ledge (East)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3793, 185]
		},
		'Dark Death Mountain Ledge (West)': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3697, 187]
		},
		'Turtle Rock Isolated Ledge Entrance': {
			containsUncollectedChecks: true,
			image: '', goesToSelectedOption: null,
			requires: {},
			requiresCount: {},
			goesTo: '...',
			specialComesFrom: new Set<string>(),
			coords: [3744, 233]
		},
	};
	let connectorCoords: {
		[key: string]: {
			reachableExits: { [key: string]: string[] },
			comesFrom: string,
			goesTo: string | null,
			coords: number[]
		}
	} = {
		'Links House Exit': {
			reachableExits: { 'Links House': [] }, comesFrom: '', goesTo: '', coords: [2623, 1826]
		},
		'Sanctuary Exit': {
			reachableExits: { 'Sanctuary': [] }, comesFrom: '', goesTo: '', coords: [2981, 894]
		},
		'Elder House Exit (East)': {
			reachableExits: { 'Elder House Exit (East)': [], 'Elder House Exit (West)': [] }, comesFrom: '', goesTo: '', coords: [2110, 1830]
		},
		'Elder House Exit (West)': {
			reachableExits: { 'Elder House Exit (West)': [], 'Elder House Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [1646, 1830]
		},
		'Two Brothers House Exit (East)': {
			reachableExits: { 'Two Brothers House Exit (East)': [], 'Two Brothers House Exit (West)': ['bombs'] }, comesFrom: '', goesTo: '', coords: [1174, 1830]
		},
		'Two Brothers House Exit (West)': {
			reachableExits: { 'Two Brothers House Exit (West)': [], 'Two Brothers House Exit (East)': ['bombs'] }, comesFrom: '', goesTo: '', coords: [710, 1830]
		},
		'Old Man Cave Exit (West)': {
			reachableExits: { 'Old Man Cave Exit (West)': [], 'Old Man Cave Exit (East)': ['lamp'] }, comesFrom: '', goesTo: '', coords: [1957, 913]
		},
		'Old Man Cave Exit (East)': {
			reachableExits: { 'Old Man Cave Exit (East)': [], 'Old Man Cave Exit (West)': ['lamp'] }, comesFrom: '', goesTo: '', coords: [2701, 892]
		},
		'Old Man House Exit (bottom)': {
			reachableExits: { 'Old Man House Exit (bottom)': [], 'Old Man House Exit (top)': ['lamp'] }, comesFrom: '', goesTo: '', coords: [990, 894]
		},
		'Old Man House Exit (top)': {
			reachableExits: { 'Old Man House Exit (top)': [], 'Old Man House Exit (bottom)': ['lamp'] }, comesFrom: '', goesTo: '', coords: [1582, 916]
		},
		'Death Mountain Return Cave Exit (West)': {
			reachableExits: { 'Death Mountain Return Cave Exit (West)': [], 'Death Mountain Return Cave Exit (East)': ['lamp'] }, comesFrom: '', goesTo: '', coords: [46, 894]
		},
		'Death Mountain Return Cave Exit (East)': {
			reachableExits: { 'Death Mountain Return Cave Exit (East)': [], 'Death Mountain Return Cave Exit (West)': ['lamp'] }, comesFrom: '', goesTo: '', coords: [790, 894]
		},
		'Spectacle Rock Cave Exit': {
			reachableExits: { 'Spectacle Rock Cave Exit': [] }, comesFrom: '', goesTo: '', coords: [2010, 426]
		},
		'Spectacle Rock Cave Exit (top)': {
			reachableExits: { 'Spectacle Rock Cave Exit (top)': [], 'Spectacle Rock Cave Exit': [] }, comesFrom: '', goesTo: '', coords: [2522, 406]
		},
		'Spectacle Rock Cave Exit (Peak)': {
			reachableExits: { 'Spectacle Rock Cave Exit (Peak)': [], 'Spectacle Rock Cave Exit': [] }, comesFrom: '', goesTo: '', coords: [2940, 430]
		},
		'Paradox Cave Exit (bottom)': {
			reachableExits: { 'Paradox Cave Exit (bottom)': [] }, comesFrom: '', goesTo: '', coords: [2074, 1405]
		},
		'Paradox Cave Exit (Middle)': {
			reachableExits: { 'Paradox Cave Exit (Middle)': [], 'Paradox Cave Exit (bottom)': [], 'Paradox Cave Exit (top)': [] }, comesFrom: '', goesTo: '', coords: [2380, 1405]
		},
		'Paradox Cave Exit (top)': {
			reachableExits: { 'Paradox Cave Exit (top)': [], 'Paradox Cave Exit (bottom)': [], 'Paradox Cave Exit (Middle)': [] }, comesFrom: '', goesTo: '', coords: [2830, 1405]
		},
		'Fairy Ascension Cave Exit (bottom)': {
			reachableExits: { 'Fairy Ascension Cave Exit (bottom)': [], 'Fairy Ascension Cave Exit (top)': [] }, comesFrom: '', goesTo: '', coords: [222, 406]
		},
		'Fairy Ascension Cave Exit (top)': {
			reachableExits: { 'Fairy Ascension Cave Exit (top)': [], 'Fairy Ascension Cave Exit (bottom)': [] }, comesFrom: '', goesTo: '', coords: [840, 430]
		},
		'Spiral Cave Exit': {
			reachableExits: { 'Spiral Cave Exit': [] }, comesFrom: '', goesTo: '', coords: [614, 1383]
		},
		'Spiral Cave Exit (top)': {
			reachableExits: { 'Spiral Cave Exit (top)': [], 'Spiral Cave Exit': [] }, comesFrom: '', goesTo: '', coords: [1112, 1406]
		},
		'Bumper Cave Exit (top)': {
			reachableExits: { 'Bumper Cave Exit (top)': [], 'Bumper Cave Exit (bottom)': ['magic cape'] }, comesFrom: '', goesTo: '', coords: [1634, 1406]
		},
		'Bumper Cave Exit (bottom)': {
			reachableExits: { 'Bumper Cave Exit (bottom)': [], 'Bumper Cave Exit (top)': ['magic cape'] }, comesFrom: '', goesTo: '', coords: [1296, 1406]
		},
		'Superbunny Cave Exit (top)': {
			reachableExits: { 'Superbunny Cave Exit (top)': [] }, comesFrom: '', goesTo: '', coords: [1826, 426]
		},
		'Superbunny Cave Exit (bottom)': {
			reachableExits: { 'Superbunny Cave Exit (bottom)': [], 'Superbunny Cave Exit (top)': [] }, comesFrom: '', goesTo: '', coords: [1200, 430]
		},
		'Hookshot Cave Exit (South)': {
			reachableExits: { 'Hookshot Cave Exit (South)': [], 'Hookshot Cave Exit (North)': ['bombs'] }, comesFrom: '', goesTo: '', coords: [350, 1838]
		},
		'Hookshot Cave Exit (North)': {
			reachableExits: { 'Hookshot Cave Exit (North)': [], 'Hookshot Cave Exit (South)': ['bombs'] }, comesFrom: '', goesTo: '', coords: [118, 1366]
		}
	};
	let maxInventory: { [key: string]: number } = {
		'bow': 2,
		'arrow capacity': 8,
		'bombs': 10,
		'red boomerang': 1,
		'hookshot': 1,
		'magic powder': 1,
		'fire rod': 1,
		'ice rod': 1,
		'bombos': 1,
		'ether': 1,
		'quake': 1,
		'lamp': 1,
		'magic hammer': 1,
		'flute': 1,
		'bug-catching net': 1,
		'book of mudora': 1,
		'cane of somaria': 1,
		'cane of byrna': 1,
		'magic cape': 1,
		'mirror': 1,
		'pegasus boots': 1,
		'progressive glove': 2,
		'flippers': 1,
		'moon pearl': 1,
		'shovel': 1,
		'mushroom': 1,
		'bottle': 4,
		'progressive sword': 4,
		'progressive shield': 3,
		'health capacity': 20,
		'pendant of courage': 1,
		'boring pendants': 2,
		'special crystals': 2,
		'boring crystals': 5,
		'agahnim': 2,
		'turtle rock medallion': 3,
		'misery mire medallion': 3,
		'ganon crystals': 7,
		'dark room': 2, //  needs lamp
		"progressive glove~2": 0,
		'bow~1': 0,
		'bow~2': 0,
		'progressive shield~2': 0,
		'progressive shield~3': 0,
		'agahnim~1': 0,
		'agahnim~2': 0,
		'pyramid hole': 1,
		'pyramid hole~1': 0,
		'dark room~1': 0,
		'dark room~2': 0,
		'turtle rock medallion~1': 0,
		'turtle rock medallion~2': 0,
		'turtle rock medallion~3': 0,
		'misery mire medallion~1': 0,
		'misery mire medallion~2': 0,
		'misery mire medallion~3': 0,
		// 'entrance shuffle': 
	}
	let dungeonCoords: {
		[key: string]: {
			reachableExits: { [key: string]: string[] },
			comesFrom: string,
			goesTo: string | null,
			coords: number[]
		}
	} = {
		'Hyrule Castle Exit (West)': { reachableExits: { 'Hyrule Castle Exit (West)': [], 'Hyrule Castle Exit (South)': [], 'Hyrule Castle Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [0, 0] },
		'Hyrule Castle Exit (South)': { reachableExits: { 'Hyrule Castle Exit (West)': [], 'Hyrule Castle Exit (South)': [], 'Hyrule Castle Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [266, 0] },
		'Hyrule Castle Exit (East)': { reachableExits: { 'Hyrule Castle Exit (West)': [], 'Hyrule Castle Exit (South)': [], 'Hyrule Castle Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [532, 0] },
		'Agahnims Tower Exit': { reachableExits: { 'Agahnims Tower Exit': [] }, comesFrom: '', goesTo: '', coords: [798, 0] },
		'Eastern Palace Exit': { reachableExits: { 'Eastern Palace Exit': [] }, comesFrom: '', goesTo: '', coords: [1064, 0] },
		'Desert Palace Exit (North)': { reachableExits: { 'Desert Palace Exit (North)': [] }, comesFrom: '', goesTo: '', coords: [1330, 0] },
		'Tower of Hera Exit': { reachableExits: { 'Tower of Hera Exit': [] }, comesFrom: '', goesTo: '', coords: [1596, 0] },
		'Palace of Darkness Exit': { reachableExits: { 'Palace of Darkness Exit': [] }, comesFrom: '', goesTo: '', coords: [0, 266] },
		'Swamp Palace Exit': { reachableExits: { 'Swamp Palace Exit': [] }, comesFrom: '', goesTo: '', coords: [266, 266] },
		'Skull Woods Final Section Exit': { reachableExits: { 'Skull Woods Final Section Exit': [] }, comesFrom: '', goesTo: '', coords: [532, 266] },
		'Thieves Town Exit': { reachableExits: { 'Thieves Town Exit': [] }, comesFrom: '', goesTo: '', coords: [798, 266] },
		'Desert Palace Exit (West)': { reachableExits: { 'Desert Palace Exit (West)': [], 'Desert Palace Exit (South)': [], 'Desert Palace Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [1064, 266] },
		'Desert Palace Exit (South)': { reachableExits: { 'Desert Palace Exit (West)': [], 'Desert Palace Exit (South)': [], 'Desert Palace Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [1330, 266] },
		'Desert Palace Exit (East)': { reachableExits: { 'Desert Palace Exit (West)': [], 'Desert Palace Exit (South)': [], 'Desert Palace Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [1596, 266] },
		'Skull Woods Second Section Exit (West)': { reachableExits: { 'Skull Woods Second Section Exit (West)': [], 'Skull Woods Second Section Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [0, 532] },
		'Skull Woods Second Section Hole': { reachableExits: { 'Skull Woods Second Section Exit (West)': [], 'Skull Woods Second Section Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [266, 532] },
		'Skull Woods Second Section Exit (East)': { reachableExits: { 'Skull Woods Second Section Exit (West)': [], 'Skull Woods Second Section Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [532, 532] },
		'Skull Woods First Section Exit': { reachableExits: { 'Skull Woods First Section Exit': [] }, comesFrom: '', goesTo: '', coords: [798, 532] },
		'Skull Woods First Section Hole (East)': { reachableExits: { 'Skull Woods First Section Exit': [] }, comesFrom: '', goesTo: '', coords: [1064, 532] },
		'Skull Woods First Section Hole (North)': { reachableExits: { 'Skull Woods First Section Exit': [] }, comesFrom: '', goesTo: '', coords: [1330, 532] },
		'Skull Woods First Section Hole (West)': { reachableExits: { 'Skull Woods First Section Exit': [] }, comesFrom: '', goesTo: '', coords: [1596, 532] },
		'Ice Palace Exit': { reachableExits: { 'Ice Palace Exit': [] }, comesFrom: '', goesTo: '', coords: [0, 798] },
		'Misery Mire Exit': { reachableExits: { 'Misery Mire Exit': [] }, comesFrom: '', goesTo: '', coords: [266, 798] },
		'Turtle Rock Exit (Front)': { reachableExits: { 'Turtle Rock Ledge Exit (West)': [], 'Turtle Rock Exit (Front)': [], 'Turtle Rock Isolated Ledge Exit': [] }, comesFrom: '', goesTo: '', coords: [532, 798] },
		'Turtle Rock Ledge Exit (West)': { reachableExits: { 'Turtle Rock Ledge Exit (West)': [], 'Turtle Rock Exit (Front)': [], 'Turtle Rock Isolated Ledge Exit': [] }, comesFrom: '', goesTo: '', coords: [798, 798] },
		'Turtle Rock Ledge Exit (East)': { reachableExits: { 'Turtle Rock Ledge Exit (West)': [], 'Turtle Rock Ledge Exit (East)': [], 'Turtle Rock Exit (Front)': [], 'Turtle Rock Isolated Ledge Exit': [] }, comesFrom: '', goesTo: '', coords: [1064, 798] },
		'Turtle Rock Isolated Ledge Exit': { reachableExits: { 'Turtle Rock Ledge Exit (West)': ['lamp', 'cane of somaria'], 'Turtle Rock Exit (Front)': ['lamp', 'cane of somaria'], 'Turtle Rock Isolated Ledge Exit': [] }, comesFrom: '', goesTo: '', coords: [1330, 798] },
		'Ganons Tower Exit': { reachableExits: { 'Ganons Tower Exit': [] }, comesFrom: '', goesTo: '', coords: [1596, 798] }
	};
	return {
		maxInventory,
		entranceCoords,
		connectorCoords,
		dungeonCoords,
		dungeonCodes,
		entranceToRegionMap,
		regions,
		itemNames: [
			'bow',
			'red boomerang',
			'hookshot',
			'bombs',
			'magic powder',
			'health capacity',
			'fire rod',
			'ice rod',
			'bombos',
			'ether',
			'quake',
			'magic capacity',
			'lamp',
			'magic hammer',
			'flute',
			'bug-catching net',
			'book of mudora',
			'arrow capacity',
			'bottle',
			'cane of somaria',
			'cane of byrna',
			'magic cape',
			'mirror',
			'small key',
			'pegasus boots',
			'progressive glove',
			"progressive glove~2",
			'flippers',
			'moon pearl',
			'boss key',
			'shovel',
			'mushroom',
			'progressive shield~3',
			'special crystals',
			'pendant of courage',
			'boring crystals',
			'bow~1',
			'bow~2',
			'progressive sword',
			'progressive sword~2',
			'progressive sword~3',
			'progressive sword~4',
			'progressive shield',
			'progressive shield~2',
			'boring pendants',
			'agahnim',
			'agahnim~1',
			'agahnim~2',
			'pyramid hole',
			'pyramid hole~1',
			'ganon crystals',
			'dark room',
			'dark room~1',
			'dark room~2',
			'turtle rock medallion',
			'turtle rock medallion~1',
			'turtle rock medallion~2',
			'turtle rock medallion~3',
			'misery mire medallion',
			'misery mire medallion~1',
			'misery mire medallion~2',
			'misery mire medallion~3',
		],
		dungeonExits: [
			['Desert Palace Entrance (South)', 'Desert Palace Main (Inner)'],
			['Desert Palace Entrance (West)', 'Desert Palace Main (Outer)'],
			['Desert Palace Entrance (North)', 'Desert Palace North'],
			['Desert Palace Entrance (East)', 'Desert Palace Main (Outer)'],
			['Desert Palace Exit (South)', 'Desert Palace Stairs'],
			['Desert Palace Exit (West)', 'Desert Ledge'],
			['Desert Palace Exit (East)', 'Desert Palace Lone Stairs'],
			['Desert Palace Exit (North)', 'Desert Palace Entrance (North) Spot'],
			['Eastern Palace', 'Eastern Palace'],
			['Eastern Palace Exit', 'Light World'],
			['Tower of Hera', 'Tower of Hera (Bottom)'],
			['Tower of Hera Exit', 'Death Mountain (Top)'],
			['Hyrule Castle Entrance (South)', 'Hyrule Castle'],
			['Hyrule Castle Entrance (West)', 'Hyrule Castle'],
			['Hyrule Castle Entrance (East)', 'Hyrule Castle'],
			['Hyrule Castle Exit (South)', 'Hyrule Castle Courtyard'],
			['Hyrule Castle Exit (West)', 'Hyrule Castle Ledge'],
			['Hyrule Castle Exit (East)', 'Hyrule Castle Ledge'],
			['Agahnims Tower', 'Agahnims Tower'],
			['Agahnims Tower Exit', 'Hyrule Castle Ledge'],
			['Thieves Town', 'Thieves Town (Entrance)'],
			['Thieves Town Exit', 'West Dark World'],
			['Skull Woods First Section Hole (East)', 'Skull Woods First Section (Right)'],
			['Skull Woods First Section Hole (West)', 'Skull Woods First Section (Left)'],
			['Skull Woods First Section Hole (North)', 'Skull Woods First Section (Top)'],
			['Skull Woods First Section Door', 'Skull Woods First Section'],
			['Skull Woods First Section Exit', 'Skull Woods Forest'],
			['Skull Woods Second Section Hole', 'Skull Woods Second Section (Drop)'],
			['Skull Woods Second Section Door (East)', 'Skull Woods Second Section'],
			['Skull Woods Second Section Door (West)', 'Skull Woods Second Section'],
			['Skull Woods Second Section Exit (East)', 'Skull Woods Forest'],
			['Skull Woods Second Section Exit (West)', 'Skull Woods Forest (West)'],
			['Skull Woods Final Section', 'Skull Woods Final Section (Entrance)'],
			['Skull Woods Final Section Exit', 'Skull Woods Forest (West)'],
			['Ice Palace', 'Ice Palace (Entrance)'],
			['Ice Palace Exit', 'Dark Lake Hylia Central Island'],
			['Misery Mire', 'Misery Mire (Entrance)'],
			['Misery Mire Exit', 'Dark Desert'],
			['Palace of Darkness', 'Palace of Darkness (Entrance)'],
			['Palace of Darkness Exit', 'East Dark World'],
			['Swamp Palace', 'Swamp Palace (Entrance)'],
			['Swamp Palace Exit', 'South Dark World'],
			['Turtle Rock', 'Turtle Rock (Entrance)'],
			['Turtle Rock Exit (Front)', 'Dark Death Mountain (Top)'],
			['Turtle Rock Ledge Exit (West)', 'Dark Death Mountain Ledge'],
			['Turtle Rock Ledge Exit (East)', 'Dark Death Mountain Ledge'],
			['Dark Death Mountain Ledge (West)', 'Turtle Rock (Second Section)'],
			['Dark Death Mountain Ledge (East)', 'Turtle Rock (Big Chest)'],
			['Turtle Rock Isolated Ledge Exit', 'Dark Death Mountain Isolated Ledge'],
			['Turtle Rock Isolated Ledge Entrance', 'Turtle Rock (Eye Bridge)'],
			['Ganons Tower', 'Ganons Tower (Entrance)'],
			['Ganons Tower Exit', 'Dark Death Mountain (Top)'],
		],
		specialExits: [
			['Tavern North', 'Tavern'],
			['Light Hype Fairy', 'Swamp Healer Fairy'],
			['Desert Fairy', 'Desert Healer Fairy'],
			['Lake Hylia Fairy', 'Lake Hylia Healer Fairy'],
			['Dark Lake Hylia Fairy', 'Dark Lake Hylia Healer Fairy'],
			['Dark Lake Hylia Ledge Fairy', 'Dark Lake Hylia Ledge Healer Fairy'],
			['Dark Desert Fairy', 'Dark Desert Healer Fairy'],
			['Dark Death Mountain Fairy', 'Dark Death Mountain Healer Fairy'],
			['Kakariko Well Drop', 'Kakariko Well (top)'],
			['Kakariko Well Cave', 'Kakariko Well (bottom)'],
			['Kakariko Well Exit', 'Light World'],
			['Bat Cave Drop', 'Bat Cave (right)'],
			['Bat Cave Cave', 'Bat Cave (left)'],
			['Bat Cave Exit', 'Light World'],
			['North Fairy Cave Drop', 'North Fairy Cave'],
			['North Fairy Cave Exit', 'Light World'],
			['Lost Woods Hideout Drop', 'Lost Woods Hideout (top)'],
			['Lost Woods Hideout Stump', 'Lost Woods Hideout (bottom)'],
			['Lost Woods Hideout Exit', 'Light World'],
			['Lumberjack Tree Tree', 'Lumberjack Tree (top)'],
			['Lumberjack Tree Cave', 'Lumberjack Tree (bottom)'],
			['Lumberjack Tree Exit', 'Light World'],
			['Sanctuary Grave', 'Sewer Drop'],
			['Sanctuary Exit', 'Light World'],
			['Pyramid Hole', 'Pyramid'],
			['Pyramid Exit', 'Pyramid Ledge'],
			['Pyramid Entrance', 'Bottom of Pyramid'],
			['Hyrule Castle Secret Entrance Drop', 'Hyrule Castle Secret Entrance'],
			['Hyrule Castle Secret Entrance Stairs', 'Hyrule Castle Secret Entrance'],
			['Hyrule Castle Secret Entrance Exit', 'Hyrule Castle Courtyard'],
			['Elder House (East)', 'Elder House'],
			['Elder House (West)', 'Elder House'],
			['Elder House Exit (East)', 'Light World'],
			['Elder House Exit (West)', 'Light World'],
			['Two Brothers House (East)', 'Two Brothers House'],
			['Two Brothers House (West)', 'Two Brothers House'],
			['Two Brothers House Exit (East)', 'Light World'],
			['Two Brothers House Exit (West)', 'Maze Race Ledge'],
			['Old Man Cave (West)', 'Old Man Cave'],
			['Old Man Cave (East)', 'Old Man Cave'],
			['Old Man Cave Exit (West)', 'Light World'],
			['Old Man Cave Exit (East)', 'Death Mountain'],
			['Old Man House (bottom)', 'Old Man House'],
			['Old Man House Exit (bottom)', 'Death Mountain'],
			['Old Man House (top)', 'Old Man House Back'],
			['Old Man House Exit (top)', 'Death Mountain'],
			['Death Mountain Return Cave (East)', 'Death Mountain Return Cave'],
			['Death Mountain Return Cave (West)', 'Death Mountain Return Cave'],
			['Death Mountain Return Cave Exit (West)', 'Death Mountain Return Ledge'],
			['Death Mountain Return Cave Exit (East)', 'Death Mountain'],
			['Spectacle Rock Cave Peak', 'Spectacle Rock Cave (Peak)'],
			['Spectacle Rock Cave', 'Spectacle Rock Cave (top)'],
			['Spectacle Rock Cave Exit', 'Death Mountain'],
			['Spectacle Rock Cave Exit (top)', 'Death Mountain'],
			['Spectacle Rock Cave Exit (Peak)', 'Death Mountain'],
			['Paradox Cave (bottom)', 'Paradox Cave Front'],
			['Paradox Cave (Middle)', 'Paradox Cave'],
			['Paradox Cave (top)', 'Paradox Cave'],
			['Paradox Cave Exit (bottom)', 'East Death Mountain (bottom)'],
			['Paradox Cave Exit (Middle)', 'East Death Mountain (bottom)'],
			['Paradox Cave Exit (top)', 'East Death Mountain (top)'],
			['Fairy Ascension Cave Exit (bottom)', 'Fairy Ascension Plateau'],
			['Fairy Ascension Cave Exit (top)', 'Fairy Ascension Ledge'],
			['Spiral Cave', 'Spiral Cave (top)'],
			['Spiral Cave Exit', 'East Death Mountain (bottom)'],
			['Spiral Cave Exit (top)', 'Spiral Cave Ledge'],
			['Bumper Cave (bottom)', 'Bumper Cave'],
			['Bumper Cave (top)', 'Bumper Cave'],
			['Bumper Cave Exit (top)', 'Bumper Cave Ledge'],
			['Bumper Cave Exit (bottom)', 'West Dark World'],
			['Superbunny Cave Exit (top)', 'Dark Death Mountain (top)'],
			['Superbunny Cave Exit (bottom)', 'Dark Death Mountain (East Bottom)'],
			['Hookshot Cave Exit (South)', 'Dark Death Mountain (top)'],
			['Hookshot Cave Exit (North)', 'Death Mountain Floating Island (Dark World)'],
			['Hookshot Cave Back Entrance', 'Hookshot Cave (Upper)'],
		]
	};
};
