// @ts-nocheck
import type { PageLoad } from './$types';

export const prerender = true;

export const load = ({ params }: Parameters<PageLoad>[0]) => {
	let regions: {
		[key: string]: {
			regionName: string,
			fullyAccessible: string[],
			exitToRegionButCantEnterWithoutReq: { [key: string]: string[][] },
			connectsToRegionWithReq: { [key: string]: string[][] },
		}
	} = {
		'Light World': {
			"regionName": "Light World",
			"fullyAccessible": ["Lost Woods Gamble", "Lumberjack Tree Cave", "Lumberjack House", "Potion Shop", "Lost Woods Hideout Stump", "Lost Woods Hideout Drop", "Fortune Teller (Light)", "Sanctuary", "North Fairy Cave Drop", "North Fairy Cave", "Kakariko Shop", "Tavern (Front)", "Light World Bomb Hut", "Kakariko Well Drop", "Kakariko Well Cave", "Blinds Hideout", "Elder House (West)", "Elder House (East)", "Snitch Lady (West)", "Snitch Lady (East)", "Chicken House", "Sick Kids House", "Bush Covered House", "Tavern North", "Blacksmiths Hut", "Bat Cave Cave", "Library", "Kakariko Gamble Game", "Two Brothers House (East)", "Aginahs Cave", "Desert Fairy", "Dam", "Links House", "Lake Hylia Fortune Teller", "Cave Shop (Lake Hylia)", "Good Bee Cave", "Long Fairy Cave", "Sahasrahlas Hut", "Eastern Palace", "Lake Hylia Fairy", "Hyrule Castle Secret Entrance Drop", "Hyrule Castle Secret Entrance Stairs", "Hyrule Castle Entrance (South)"],
			"exitToRegionButCantEnterWithoutReq": { "Bonk Rock Cave": [["pegasus boots"]], "Light Hype Fairy": [["bombs"]], "Bonk Fairy (Light)": [["pegasus boots"]], "Mini Moldorm Cave": [["bombs"]], "Ice Rod Cave": [["bombs"]], "20 Rupee Cave": [["progressive glove~1"]], "Sanctuary Grave": [["progressive glove~1"]], "Bat Cave Drop": [["magic hammer"]], "50 Rupee Cave": [["progressive glove~1"]], "Lumberjack Tree Tree": [["agahnim~1", "pegasus boots"]] },
			"connectsToRegionWithReq": { "Swamp": [["flute", "progressive glove~2"]], "Death Mountain Lower West": [["flute"]], "Waterfall of Wishing Region": [["flippers"]], "Kings Grave Region": [["pegasus boots", "progressive glove~2"]], "Desert Palace Entrance (South) Region": [["book of mudora"]], "Old Man Cave (West) Region": [["progressive glove~1"]], "Capacity Upgrade Region": [["flippers"]], "Dark World South": [["magic hammer", "progressive glove~1", "moon pearl"]], "Dark World East": [["magic hammer", "progressive glove~1", "moon pearl"], ["agahnim~1"]], "Dark World North West": [["moon pearl", "progressive glove~2"], ["moon pearl", "progressive glove~1", "magic hammer"]] }
		},
		'Capacity Upgrade Region': {
			"regionName": "Capacity Upgrade Region",
			"fullyAccessible": ["Capacity Upgrade"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Light World": [["flippers"]], "Ice Palace Region": [["progressive glove~2"]] }
		},
		'Cave 45 Region': {
			"regionName": "Cave 45 Region",
			"fullyAccessible": ["Cave 45"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Light World": [[]] }
		},
		'Graveyard Cave Region': {
			"regionName": "Graveyard Cave Region",
			"fullyAccessible": ["Graveyard Cave"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Light World": [[]] }
		},
		'Two Brothers House (West) Region': {
			"regionName": "Two Brothers House (West) Region",
			"fullyAccessible": ["Two Brothers House (West)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Light World": [[]] }
		},
		'Old Man Cave (West) Region': {
			"regionName": "Old Man Cave (West) Region",
			"fullyAccessible": ["Old Man Cave (West)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Light World": [[]] }
		},
		'Return from Death Mountain Ledge': {
			"regionName": "Return from Death Mountain Ledge",
			"fullyAccessible": ["Death Mountain Return Cave (West)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Light World": [[]] }
		},
		'Death Mountain Lower West': {
			"regionName": "Death Mountain Lower West",
			"fullyAccessible": ["Old Man Cave (East)", "Old Man House (Bottom)", "Old Man House (Top)", "Spectacle Rock Cave", "Spectacle Rock Cave (Bottom)", "Death Mountain Return Cave (East)", "Spectacle Rock Cave Peak"],
			"connectsToRegionWithReq": { "Dark Death Mountain Lower West": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Death Mountain Lower East': {
			"regionName": "Death Mountain Lower East",
			"fullyAccessible": ["Spiral Cave (Bottom)", "Hookshot Fairy", "Paradox Cave (Bottom)", "Paradox Cave (Middle)"],
			"connectsToRegionWithReq": {},
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Hyrule Castle Ledge': {
			"regionName": "Hyrule Castle Ledge",
			"fullyAccessible": ["Hyrule Castle Entrance (West)", "Hyrule Castle Entrance (East)"],
			"exitToRegionButCantEnterWithoutReq": { "Agahnims Tower": [["progressive sword~2"]] },
			"connectsToRegionWithReq": { "Light World": [[]] }
		},
		'Tower of Hera Region': {
			"regionName": "Tower of Hera Region",
			"fullyAccessible": ["Tower of Hera"],
			"connectsToRegionWithReq": { "Death Mountain Lower West": [[]], "Paradox Cave (Top) Region": [["magic hammer"]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Waterfall of Wishing Region': {
			"regionName": "Waterfall of Wishing Region",
			"fullyAccessible": ["Waterfall of Wishing"],
			"connectsToRegionWithReq": { "Light World": [["flippers"]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Kings Grave Region': {
			"regionName": "Kings Grave Region",
			"fullyAccessible": [],
			"exitToRegionButCantEnterWithoutReq": { "Kings Grave": [["pegasus boots"]] },
			"connectsToRegionWithReq": { "Light World": [["progressive glove~2"]] }
		},
		'Paradox Cave (Top) Region': {
			"regionName": "Paradox Cave (Top) Region",
			"fullyAccessible": ["Paradox Cave (Top)"],
			"connectsToRegionWithReq": { "Tower of Hera Region": [["magic hammer"]], "Fairy Ascension Cave (Top) Region": [[]], "Spiral Cave Region": [[]], "Death Mountain Lower East": [[]], "Turtle Rock Shell": [["progressive glove~2", "magic hammer"]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Turtle Rock Shell': {
			"regionName": "Turtle Rock Shell",
			"fullyAccessible": [],
			"connectsToRegionWithReq": { "Dark Death Mountain Upper": [[]] },
			"exitToRegionButCantEnterWithoutReq": { "Turtle Rock": [["turtle rock logic~true"]] }
		},
		'Mimic Cave Region': {
			"regionName": "Mimic Cave Region",
			"fullyAccessible": ["Mimic Cave"],
			"connectsToRegionWithReq": {},
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Spiral Cave Region': {
			"regionName": "Spiral Cave Region",
			"fullyAccessible": ["Spiral Cave"],
			"connectsToRegionWithReq": { "Death Mountain Lower East": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Fairy Ascension Cave (Top) Region': {
			"regionName": "Fairy Ascension Cave (Top) Region",
			"fullyAccessible": ["Fairy Ascension Cave (Top)"],
			"connectsToRegionWithReq": { "Fairy Ascension Cave (Bottom) Region": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Fairy Ascension Cave (Bottom) Region': {
			"regionName": "Fairy Ascension Cave (Bottom) Region",
			"fullyAccessible": ["Fairy Ascension Cave (Bottom)"],
			"connectsToRegionWithReq": { "Death Mountain Lower East": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Desert Palace Entrance (East) Region': {
			"regionName": "Desert Palace Entrance (East) Region",
			"fullyAccessible": ["Desert Palace Entrance (East)"],
			"connectsToRegionWithReq": { "Light World": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Desert Palace Entrance (South) Region': {
			"regionName": "Desert Palace Entrance (South) Region",
			"fullyAccessible": ["Desert Palace Entrance (South)"],
			"connectsToRegionWithReq": {},
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Desert Palace Entrance (West) Region': {
			"regionName": "Desert Palace Entrance (West) Region",
			"fullyAccessible": ["Desert Palace Entrance (West)"],
			"connectsToRegionWithReq": { "Light World": [[]], "Desert Palace Entrance (North) Region": [["progressive glove~1"]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Desert Palace Entrance (North) Region': {
			"regionName": "Desert Palace Entrance (North) Region",
			"fullyAccessible": ["Desert Palace Entrance (North)"],
			"connectsToRegionWithReq": { "Desert Palace Entrance (West) Region": [["progressive glove~1"]], "Light World": [[]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Checkerboard Cave Region': {
			"regionName": "Checkerboard Cave Region",
			"fullyAccessible": [],
			"connectsToRegionWithReq": { "Light World": [[]] },
			"exitToRegionButCantEnterWithoutReq": { "Checkerboard Cave": [["progressive glove~1"]] }
		},
		'Skull Woods Final Area': {
			"regionName": "Skull Woods Final Area",
			"fullyAccessible": ["Skull Woods Second Section Door (West)"],
			"exitToRegionButCantEnterWithoutReq": { "Skull Woods Second Section Hole": [["moon pearl"]], "Skull Woods Final Section": [["moon pearl", "fire rod"]] },
			"connectsToRegionWithReq": { "Light World": [["mirror"]] }
		},
		'Dark World North West': {
			"regionName": "Dark World North West",
			"fullyAccessible": ["Skull Woods Second Section Door (East)", "Skull Woods First Section Hole (West)", "Skull Woods First Section Hole (East)", "Skull Woods First Section Door", "Dark World Lumberjack Shop", "Fortune Teller (Dark)", "Dark Sanctuary Hint", "Red Shield Shop", "Chest Game", "C-Shaped House"],
			"exitToRegionButCantEnterWithoutReq": { "Skull Woods First Section Hole (North)": [["moon pearl"]], "Thieves Town": [["moon pearl"]], "Brewery": [["moon pearl", "bombs"]] },
			"connectsToRegionWithReq": { "Village of Outcasts Shop Region": [["magic hammer", "moon pearl"]], "Dark World Potion Shop Region": [["moon pearl", "flippers"]], "Bumper Cave (Bottom) Region": [["moon pearl", "progressive glove~1"]], "Graveyard Cave Region": [["moon pearl", "mirror"]], "Kings Grave Region": [["moon pearl", "mirror"]], "Dark World South": [[]], "Dark World Hammer Peg Cave Region": [["progressive glove~2", "moon pearl"]], "Light World": [["mirror"]] }
		},
		'Village of Outcasts Shop Region': {
			"regionName": "Village of Outcasts Shop Region",
			"fullyAccessible": ["Village of Outcasts Shop"],
			"connectsToRegionWithReq": { "Dark World North West": [["magic hammer", "moon pearl"]] },
			"exitToRegionButCantEnterWithoutReq": {}
		},
		'Dark World South': {
			"regionName": "Dark World South",
			"fullyAccessible": ["Archery Game", "Big Bomb Shop", "Swamp Palace", "Dark Lake Hylia Shop"],
			"exitToRegionButCantEnterWithoutReq": { "Bonk Fairy (Dark)": [["pegasus boots", "moon pearl"]], "Hype Cave": [["moon pearl", "bombs"]] },
			"connectsToRegionWithReq": { "Dark World North West": [["progressive glove~2"]], "Dark Lake Hylia Ledge": [["moon pearl", "flippers"]], "Dark World East": [["moon pearl", "flippers"], ["moon pearl", "magic hammer"]], "Cave 45 Region": [["mirror"]], "Two Brothers House (West) Region": [["mirror"]], "Light World": [["mirror"]] }
		},
		'Swamp': {
			"regionName": "Swamp",
			"fullyAccessible": ["Mire Shed", "Dark Desert Fairy", "Dark Desert Hint"],
			"exitToRegionButCantEnterWithoutReq": { "Misery Mire": [["misery mire logic~true"]] },
			"connectsToRegionWithReq": { "Desert Palace Entrance (East) Region": [["mirror"]], "Desert Palace Entrance (North) Region": [["mirror"]], "Desert Palace Entrance (South) Region": [["mirror"]], "Desert Palace Entrance (West) Region": [["mirror"]], "Checkerboard Cave Region": [["mirror"]], "Light World": [["mirror"]] }
		},
		'Dark World East': {
			"regionName": "Dark World East",
			"fullyAccessible": ["Dark Lake Hylia Fairy", "Palace of Darkness Hint", "East Dark World Hint"],
			"exitToRegionButCantEnterWithoutReq": { "Pyramid Fairy": [["special crystals~2"]], "Pyramid Hole": [["pyramid hole"]], "Palace of Darkness": [["moon pearl"]] },
			"connectsToRegionWithReq": { "Dark World South": [["moon pearl", "magic hammer"]], "Dark World Potion Shop Region": [["moon pearl", "flippers"], ["moon pearl", "progressive glove~1"], ["moon pearl", "magic hammer"]], "Dark Lake Hylia Ledge": [["moon pearl", "flippers"]], "Hyrule Castle Ledge": [["mirror"]], "Light World": [["mirror"]] }
		},
		'Dark World Potion Shop Region': {
			"regionName": "Dark World Potion Shop Region",
			"fullyAccessible": ["Dark World Potion Shop"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark World East": [["moon pearl", "progressive glove~1"], ["moon pearl", "magic hammer"]], "Dark World North West": [["moon pearl", "hookshot"]], "Light World": [["mirror"]] }
		},
		'Bumper Cave (Top) Region': {
			"regionName": "Bumper Cave (Top) Region",
			"fullyAccessible": ["Bumper Cave (Top)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark World North West": [[]], "Return from Death Mountain Ledge": [["mirror"]] }
		},
		'Bumper Cave (Bottom) Region': {
			"regionName": "Bumper Cave (Bottom) Region",
			"fullyAccessible": ["Bumper Cave (Bottom)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark World North West": [[]], "Old Man Cave (West) Region": [["mirror"]] }
		},
		'Pyramid Entrance Region': {
			"regionName": "Pyramid Entrance Region",
			"fullyAccessible": ["Pyramid Entrance"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark World East": [[]], "Light World": [["mirror"]] }
		},
		'Dark Lake Hylia Ledge': {
			"regionName": "Dark Lake Hylia Ledge",
			"fullyAccessible": ["Dark Lake Hylia Ledge Hint"],
			"exitToRegionButCantEnterWithoutReq": { "Dark Lake Hylia Ledge Fairy": [["moon pearl", "bombs"]], "Dark Lake Hylia Ledge Spike Cave": [["moon pearl", "progressive glove~1"]] },
			"connectsToRegionWithReq": { "Dark World East": [["moon pearl", "flippers"]], "Light World": [["mirror"]] }
		},
		'Ice Palace Region': {
			"regionName": "Ice Palace Region",
			"fullyAccessible": ["Ice Palace"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Capacity Upgrade Region": [["mirror"]] }
		},
		'Dark World Hammer Peg Cave Region': {
			"regionName": "Dark World Hammer Peg Cave Region",
			"fullyAccessible": [],
			"exitToRegionButCantEnterWithoutReq": { "Dark World Hammer Peg Cave": [["moon pearl", "magic hammer"]] },
			"connectsToRegionWithReq": { "Dark World North West": [["moon pearl", "progressive glove~2"]], "Light World": [["mirror"]] }
		},
		'Dark Death Mountain Lower West': {
			"regionName": "Dark Death Mountain Lower West",
			"fullyAccessible": ["Dark Death Mountain Fairy", "Spike Cave"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Death Mountain Lower West": [["mirror"]], "Tower of Hera Region": [["mirror"]] }
		},
		'Dark Death Mountain Upper': {
			"regionName": "Dark Death Mountain Upper",
			"fullyAccessible": ["Ganons Tower", "Superbunny Cave (Top)"],
			"exitToRegionButCantEnterWithoutReq": { "Hookshot Cave": [["moon pearl", "progressive glove~1"]] },
			"connectsToRegionWithReq": { "Dark Death Mountain Lower West": [[]], "Dark Death Mountain Lower East": [[]], "Tower of Hera Region": [["mirror"]], "Paradox Cave (Top) Region": [["mirror"]] }
		},
		'Dark Death Mountain Lower East': {
			"regionName": "Dark Death Mountain Lower East",
			"fullyAccessible": ["Superbunny Cave (Bottom)", "Cave Shop (Dark Death Mountain)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Death Mountain Lower East": [["mirror"]], "Fairy Ascension Cave (Bottom) Region": [["mirror", "moon pearl"]] }
		},
		'Turtle Rock Montain Ledge Region': {
			"regionName": "Turtle Rock Montain Ledge Region",
			"fullyAccessible": ["Dark Death Mountain Ledge (East)", "Dark Death Mountain Ledge (West)"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Mimic Cave Region": [["mirror"]], "Spiral Cave Region": [["mirror"]] }
		},
		'Turtle Rock Isolated Ledge Region': {
			"regionName": "Turtle Rock Isolated Ledge Region",
			"fullyAccessible": ["Turtle Rock Isolated Ledge Entrance"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Fairy Ascension Cave (Top) Region": [["mirror"]] }
		},
		'Dark Death Mountain Island': {
			"regionName": "Dark Death Mountain Island",
			"fullyAccessible": ["Hookshot Cave Back Entrance"],
			"exitToRegionButCantEnterWithoutReq": {},
			"connectsToRegionWithReq": { "Dark Death Mountain Upper": [[]] }
		}
	}
	let entranceToRegionMap: {
		[key: string]: { regionName: string, requirementsToGetInFromRegion: string[][] }
	} = {
		'Lost Woods Gamble': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Lumberjack Tree Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Lumberjack House': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Potion Shop': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Lost Woods Hideout Stump': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Lost Woods Hideout Drop': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Fortune Teller (Light)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Sanctuary': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'North Fairy Cave Drop': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'North Fairy Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Kakariko Shop': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Tavern (Front)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Light World Bomb Hut': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Kakariko Well Drop': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Kakariko Well Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Blinds Hideout': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Elder House (West)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Elder House (East)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Snitch Lady (West)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Snitch Lady (East)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Chicken House': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Sick Kids House': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Bush Covered House': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Tavern North': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Blacksmiths Hut': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Bat Cave Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Library': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Kakariko Gamble Game': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Two Brothers House (East)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Aginahs Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Desert Fairy': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Dam': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Links House': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Lake Hylia Fortune Teller': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Cave Shop (Lake Hylia)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Good Bee Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Long Fairy Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Sahasrahlas Hut': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Eastern Palace': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Lake Hylia Fairy': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Hyrule Castle Secret Entrance Drop': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Hyrule Castle Secret Entrance Stairs': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Hyrule Castle Entrance (South)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [[]] },
		'Bonk Rock Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["pegasus boots"]] },
		'Light Hype Fairy': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["bombs"]] },
		'Bonk Fairy (Light)': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["pegasus boots"]] },
		'Mini Moldorm Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["bombs"]] },
		'Ice Rod Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["bombs"]] },
		'20 Rupee Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["progressive glove~1"]] },
		'Sanctuary Grave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["progressive glove~1"]] },
		'Bat Cave Drop': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["magic hammer"]] },
		'50 Rupee Cave': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["progressive glove~1"]] },
		'Lumberjack Tree Tree': { 'regionName': 'Light World', requirementsToGetInFromRegion: [["agahnim~1", "pegasus boots"]] },
		'Capacity Upgrade': { 'regionName': 'Capacity Upgrade Region', requirementsToGetInFromRegion: [[]] },
		'Cave 45': { 'regionName': 'Cave 45 Region', requirementsToGetInFromRegion: [[]] },
		'Graveyard Cave': { 'regionName': 'Graveyard Cave Region', requirementsToGetInFromRegion: [[]] },
		'Two Brothers House (West)': { 'regionName': 'Two Brothers House (West) Region', requirementsToGetInFromRegion: [[]] },
		'Old Man Cave (West)': { 'regionName': 'Old Man Cave (West) Region', requirementsToGetInFromRegion: [[]] },
		'Death Mountain Return Cave (West)': { 'regionName': 'Return from Death Mountain Ledge', requirementsToGetInFromRegion: [[]] },
		'Old Man Cave (East)': { 'regionName': 'Death Mountain Lower West', requirementsToGetInFromRegion: [[]] },
		'Old Man House (Bottom)': { 'regionName': 'Death Mountain Lower West', requirementsToGetInFromRegion: [[]] },
		'Old Man House (Top)': { 'regionName': 'Death Mountain Lower West', requirementsToGetInFromRegion: [[]] },
		'Spectacle Rock Cave': { 'regionName': 'Death Mountain Lower West', requirementsToGetInFromRegion: [[]] },
		'Spectacle Rock Cave (Bottom)': { 'regionName': 'Death Mountain Lower West', requirementsToGetInFromRegion: [[]] },
		'Death Mountain Return Cave (East)': { 'regionName': 'Death Mountain Lower West', requirementsToGetInFromRegion: [[]] },
		'Spectacle Rock Cave Peak': { 'regionName': 'Death Mountain Lower West', requirementsToGetInFromRegion: [[]] },
		'Spiral Cave (Bottom)': { 'regionName': 'Death Mountain Lower East', requirementsToGetInFromRegion: [[]] },
		'Hookshot Fairy': { 'regionName': 'Death Mountain Lower East', requirementsToGetInFromRegion: [[]] },
		'Paradox Cave (Bottom)': { 'regionName': 'Death Mountain Lower East', requirementsToGetInFromRegion: [[]] },
		'Paradox Cave (Middle)': { 'regionName': 'Death Mountain Lower East', requirementsToGetInFromRegion: [[]] },
		'Hyrule Castle Entrance (West)': { 'regionName': 'Hyrule Castle Ledge', requirementsToGetInFromRegion: [[]] },
		'Hyrule Castle Entrance (East)': { 'regionName': 'Hyrule Castle Ledge', requirementsToGetInFromRegion: [[]] },
		'Agahnims Tower': { 'regionName': 'Hyrule Castle Ledge', requirementsToGetInFromRegion: [["progressive sword~2"]] },
		'Tower of Hera': { 'regionName': 'Tower of Hera Region', requirementsToGetInFromRegion: [[]] },
		'Waterfall of Wishing': { 'regionName': 'Waterfall of Wishing Region', requirementsToGetInFromRegion: [[]] },
		'Kings Grave': { 'regionName': 'Kings Grave Region', requirementsToGetInFromRegion: [["pegasus boots"]] },
		'Paradox Cave (Top)': { 'regionName': 'Paradox Cave (Top) Region', requirementsToGetInFromRegion: [[]] },
		'Turtle Rock': { 'regionName': 'Turtle Rock Shell', requirementsToGetInFromRegion: [["progressive glove~2", "magic hammer", "turtle rock logic~true"]] },
		'Mimic Cave': { 'regionName': 'Mimic Cave Region', requirementsToGetInFromRegion: [[]] },
		'Spiral Cave': { 'regionName': 'Spiral Cave Region', requirementsToGetInFromRegion: [[]] },
		'Fairy Ascension Cave (Top)': { 'regionName': 'Fairy Ascension Cave (Top) Region', requirementsToGetInFromRegion: [[]] },
		'Fairy Ascension Cave (Bottom)': { 'regionName': 'Fairy Ascension Cave (Bottom) Region', requirementsToGetInFromRegion: [[]] },
		'Desert Palace Entrance (East)': { 'regionName': 'Desert Palace Entrance (East) Region', requirementsToGetInFromRegion: [[]] },
		'Desert Palace Entrance (South)': { 'regionName': 'Desert Palace Entrance (South) Region', requirementsToGetInFromRegion: [[]] },
		'Desert Palace Entrance (West)': { 'regionName': 'Desert Palace Entrance (West) Region', requirementsToGetInFromRegion: [[]] },
		'Desert Palace Entrance (North)': { 'regionName': 'Desert Palace Entrance (North) Region', requirementsToGetInFromRegion: [[]] },
		'Checkerboard Cave': { 'regionName': 'Checkerboard Cave Region', requirementsToGetInFromRegion: [["progressive glove~1"]] },
		'Skull Woods Second Section Door (West)': { 'regionName': 'Skull Woods Final Area', requirementsToGetInFromRegion: [[]] },
		'Skull Woods Second Section Hole': { 'regionName': 'Skull Woods Final Area', requirementsToGetInFromRegion: [["moon pearl"]] },
		'Skull Woods Final Section': { 'regionName': 'Skull Woods Final Area', requirementsToGetInFromRegion: [["moon pearl", "fire rod"]] },
		'Skull Woods Second Section Door (East)': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'Skull Woods First Section Hole (West)': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'Skull Woods First Section Hole (East)': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'Skull Woods First Section Door': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'Dark World Lumberjack Shop': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'Fortune Teller (Dark)': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'Dark Sanctuary Hint': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'Red Shield Shop': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'Chest Game': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'C-Shaped House': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [[]] },
		'Skull Woods First Section Hole (North)': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [["moon pearl"]] },
		'Thieves Town': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [["moon pearl"]] },
		'Brewery': { 'regionName': 'Dark World North West', requirementsToGetInFromRegion: [["moon pearl", "bombs"]] },
		'Village of Outcasts Shop': { 'regionName': 'Village of Outcasts Shop Region', requirementsToGetInFromRegion: [[]] },
		'Archery Game': { 'regionName': 'Dark World South', requirementsToGetInFromRegion: [[]] },
		'Big Bomb Shop': { 'regionName': 'Dark World South', requirementsToGetInFromRegion: [[]] },
		'Swamp Palace': { 'regionName': 'Dark World South', requirementsToGetInFromRegion: [[]] },
		'Dark Lake Hylia Shop': { 'regionName': 'Dark World South', requirementsToGetInFromRegion: [[]] },
		'Bonk Fairy (Dark)': { 'regionName': 'Dark World South', requirementsToGetInFromRegion: [["pegasus boots", "moon pearl"]] },
		'Hype Cave': { 'regionName': 'Dark World South', requirementsToGetInFromRegion: [["moon pearl", "bombs"]] },
		'Mire Shed': { 'regionName': 'Swamp', requirementsToGetInFromRegion: [[]] },
		'Dark Desert Fairy': { 'regionName': 'Swamp', requirementsToGetInFromRegion: [[]] },
		'Dark Desert Hint': { 'regionName': 'Swamp', requirementsToGetInFromRegion: [[]] },
		'Misery Mire': { 'regionName': 'Swamp', requirementsToGetInFromRegion: [["misery mire logic"]] },
		'Dark Lake Hylia Fairy': { 'regionName': 'Dark World East', requirementsToGetInFromRegion: [[]] },
		'Palace of Darkness Hint': { 'regionName': 'Dark World East', requirementsToGetInFromRegion: [[]] },
		'East Dark World Hint': { 'regionName': 'Dark World East', requirementsToGetInFromRegion: [[]] },
		'Pyramid Fairy': { 'regionName': 'Dark World East', requirementsToGetInFromRegion: [["Special Crystals"]] },
		'Pyramid Hole': { 'regionName': 'Dark World East', requirementsToGetInFromRegion: [["Open Pyramid Hole"]] },
		'Palace of Darkness': { 'regionName': 'Dark World East', requirementsToGetInFromRegion: [["moon pearl"]] },
		'Dark World Potion Shop': { 'regionName': 'Dark World Potion Shop Region', requirementsToGetInFromRegion: [[]] },
		'Bumper Cave (Top)': { 'regionName': 'Bumper Cave (Top) Region', requirementsToGetInFromRegion: [[]] },
		'Bumper Cave (Bottom)': { 'regionName': 'Bumper Cave (Bottom) Region', requirementsToGetInFromRegion: [[]] },
		'Pyramid Entrance': { 'regionName': 'Pyramid Entrance Region', requirementsToGetInFromRegion: [[]] },
		'Dark Lake Hylia Ledge Hint': { 'regionName': 'Dark Lake Hylia Ledge', requirementsToGetInFromRegion: [[]] },
		'Dark Lake Hylia Ledge Fairy': { 'regionName': 'Dark Lake Hylia Ledge', requirementsToGetInFromRegion: [["moon pearl", "bombs"]] },
		'Dark Lake Hylia Ledge Spike Cave': { 'regionName': 'Dark Lake Hylia Ledge', requirementsToGetInFromRegion: [["moon pearl", "progressive glove~1"]] },
		'Ice Palace': { 'regionName': 'Ice Palace Region', requirementsToGetInFromRegion: [[]] },
		'Dark World Hammer Peg Cave': { 'regionName': 'Dark World Hammer Peg Cave Region', requirementsToGetInFromRegion: [["moon pearl", "magic hammer"]] },
		'Dark Death Mountain Fairy': { 'regionName': 'Dark Death Mountain Lower West', requirementsToGetInFromRegion: [[]] },
		'Spike Cave': { 'regionName': 'Dark Death Mountain Lower West', requirementsToGetInFromRegion: [[]] },
		'Ganons Tower': { 'regionName': 'Dark Death Mountain Upper', requirementsToGetInFromRegion: [[]] },
		'Superbunny Cave (Top)': { 'regionName': 'Dark Death Mountain Upper', requirementsToGetInFromRegion: [[]] },
		'Hookshot Cave': { 'regionName': 'Dark Death Mountain Upper', requirementsToGetInFromRegion: [["moon pearl", "progressive glove~1"]] },
		'Superbunny Cave (Bottom)': { 'regionName': 'Dark Death Mountain Lower East', requirementsToGetInFromRegion: [[]] },
		'Cave Shop (Dark Death Mountain)': { 'regionName': 'Dark Death Mountain Lower East', requirementsToGetInFromRegion: [[]] },
		'Dark Death Mountain Ledge (East)': { 'regionName': 'Turtle Rock Montain Ledge Region', requirementsToGetInFromRegion: [[]] },
		'Dark Death Mountain Ledge (West)': { 'regionName': 'Turtle Rock Montain Ledge Region', requirementsToGetInFromRegion: [[]] },
		'Turtle Rock Isolated Ledge Entrance': { 'regionName': 'Turtle Rock Isolated Ledge Region', requirementsToGetInFromRegion: [[]] },
		'Hookshot Cave Back Entrance': { 'regionName': 'Dark Death Mountain Island', requirementsToGetInFromRegion: [[]] },
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
	let entranceCoords:
		{
			name: string,
			containsUncollectedChecks: boolean,
			image: string,
			requires: { [key: string]: boolean },
			requiresCount: { [key: string]: number },
			goesTo: string,
			specialComesFrom: Set<string>,
			goesToSelectedOption: string | null,
			coords: number[]
		}[] = [
			{
				name: 'Master Sword Pedestal',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [-100, -100]
			},
			{
				name: 'Lost Woods Gamble',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [381, 33]
			},
			{
				name: 'Lumberjack Tree Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [681, 68]
			},
			{
				name: 'Lumberjack House',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [689, 124]
			},
			{
				name: 'Lumberjack Tree Tree',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [617, 152]
			},
			{
				name: 'Death Mountain Return Cave (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [736, 312]
			},
			{
				name: 'Old Man Cave (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [729, 363]
			},
			{
				name: 'Potion Shop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1640, 688]
			},
			{
				name: 'Waterfall of Wishing',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1847, 290]
			},
			{
				name: 'Zora River',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [-100, -100]
			},
			{
				name: 'Lost Woods Hideout Stump',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [375, 307]
			},
			{
				name: 'Lost Woods Hideout Drop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [389, 270]
			},
			{
				name: 'Fortune Teller (Light)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [385, 661]
			},
			{
				name: 'Bonk Rock Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [800, 602]
			},
			{
				name: 'Sanctuary',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [944, 551]
			},
			{
				name: 'Sanctuary Grave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1064, 602]
			},
			{
				name: 'Graveyard Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1167, 562]
			},
			{
				name: 'Kings Grave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1234, 610]
			},
			{
				name: 'North Fairy Cave Drop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1316, 637]
			},
			{
				name: 'North Fairy Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1370, 564]
			},
			{
				name: 'Old Man Cave (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [833, 383]
			},
			{
				name: 'Old Man House (Bottom)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [921, 481]
			},
			{
				name: 'Old Man House (Top)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1097, 331]
			},
			{
				name: 'Spectacle Rock Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1000, 302]
			},
			{
				name: 'Spectacle Rock Cave (Bottom)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [938, 282]
			},
			{
				name: 'Death Mountain Return Cave (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [808, 281]
			},
			{
				name: 'Spectacle Rock Cave Peak',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1002, 209]
			},
			{
				name: 'Tower of Hera',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1150, 71]
			},
			{
				name: 'Kakariko Shop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [227, 1198]
			},
			{
				name: 'Tavern (Front)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [330, 1219]
			},
			{
				name: 'Paradox Cave (Top)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1760, 130]
			},
			{
				name: 'Mimic Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1730, 186]
			},
			{
				name: 'Spiral Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1633, 187]
			},
			{
				name: 'Fairy Ascension Cave (Top)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1682, 233]
			},
			{
				name: 'Spiral Cave (Bottom)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1641, 267]
			},
			{
				name: 'Fairy Ascension Cave (Bottom)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1681, 282]
			},
			{
				name: 'Hookshot Fairy',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1724, 298]
			},
			{
				name: 'Paradox Cave (Bottom)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1765, 298]
			},
			{
				name: 'Paradox Cave (Middle)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1766, 442]
			},
			{
				name: 'Light World Bomb Hut',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [57, 1223]
			},
			{
				name: 'Kakariko Well Drop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [49, 874]
			},
			{
				name: 'Kakariko Well Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [97, 874]
			},
			{
				name: 'Blinds Hideout',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [264, 861]
			},
			{
				name: 'Elder House (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [311, 861]
			},
			{
				name: 'Elder House (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [353, 861]
			},
			{
				name: 'Snitch Lady (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [105, 957]
			},
			{
				name: 'Snitch Lady (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [424, 988]
			},
			{
				name: 'Chicken House',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [200, 1109]
			},
			{
				name: 'Sick Kids House',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [321, 1102]
			},
			{
				name: 'Bush Covered House',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [417, 1095]
			},
			{
				name: 'Tavern North',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [330, 1166]
			},
			{
				name: 'Blacksmiths Hut',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [623, 1093]
			},
			{
				name: 'Bat Cave Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [638, 1133]
			},
			{
				name: 'Bat Cave Drop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [674, 1156]
			},
			{
				name: 'Library',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [322, 1351]
			},
			{
				name: 'Kakariko Gamble Game',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [440, 1439]
			},
			{
				name: 'Two Brothers House (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [290, 1470]
			},
			{
				name: 'Two Brothers House (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [225, 1471]
			},
			{
				name: 'Cave 45',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [544, 1690]
			},
			{
				name: 'Aginahs Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [409, 1691]
			},
			{
				name: 'Desert Palace Entrance (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [235, 1630]
			},
			{
				name: 'Desert Palace Entrance (South)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [154, 1633]
			},
			{
				name: 'Desert Palace Entrance (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [72, 1627]
			},
			{
				name: 'Desert Palace Entrance (North)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [153, 1573]
			},
			{
				name: 'Desert Fairy',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [570, 1827]
			},
			{
				name: '50 Rupee Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [641, 1961]
			},
			{
				name: 'Dam',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [959, 1917]
			},
			{
				name: 'Light Hype Fairy',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1224, 1599]
			},
			{
				name: 'Links House',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1122, 1415]
			},
			{
				name: 'Bonk Fairy (Light)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [968, 1337]
			},
			{
				name: 'Mini Moldorm Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1336, 1925]
			},
			{
				name: 'Lake Hylia Fortune Teller',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1330, 1647]
			},
			{
				name: 'Cave Shop (Lake Hylia)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1488, 1568]
			},
			{
				name: 'Capacity Upgrade',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1626, 1746]
			},
			{
				name: 'Good Bee Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1877, 1576]
			},
			{
				name: 'Ice Rod Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1831, 1576]
			},
			{
				name: '20 Rupee Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1849, 1614]
			},
			{
				name: 'Long Fairy Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2007, 1435]
			},
			{
				name: 'Sahasrahlas Hut',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1660, 928]
			},
			{
				name: 'Eastern Palace',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1964, 801]
			},
			{
				name: 'Lake Hylia Fairy',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1689, 1322]
			},
			{
				name: 'Hyrule Castle Secret Entrance Drop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1221, 854]
			},
			{
				name: 'Hyrule Castle Secret Entrance Stairs',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1128, 881]
			},
			{
				name: 'Hyrule Castle Entrance (South)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1025, 900]
			},
			{
				name: 'Agahnims Tower',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1024, 822]
			},
			{
				name: 'Hyrule Castle Entrance (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [921, 796]
			},
			{
				name: 'Hyrule Castle Entrance (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [1128, 798]
			},
			{
				name: 'Checkerboard Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [361, 1594]
			},
			{
				name: 'Superbunny Cave (Bottom)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3788, 296]
			},
			{
				name: 'Cave Shop (Dark Death Mountain)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3828, 296]
			},
			{
				name: 'Skull Woods Final Section',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2145, 106]
			},
			{
				name: 'Skull Woods Second Section Door (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2186, 264]
			},
			{
				name: 'Skull Woods Second Section Hole',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2313, 186]
			},
			{
				name: 'Skull Woods Second Section Door (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2361, 296]
			},
			{
				name: 'Skull Woods First Section Hole (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2386, 361]
			},
			{
				name: 'Skull Woods First Section Hole (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2464, 346]
			},
			{
				name: 'Skull Woods First Section Door',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2440, 306]
			},
			{
				name: 'Skull Woods First Section Hole (North)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2452, 270]
			},
			{
				name: 'Dark World Lumberjack Shop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2754, 117]
			},
			{
				name: 'Bumper Cave (Top)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2801, 314]
			},
			{
				name: 'Bumper Cave (Bottom)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2793, 362]
			},
			{
				name: 'Fortune Teller (Dark)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2449, 658]
			},
			{
				name: 'Dark Sanctuary Hint',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3008, 564]
			},
			{
				name: 'Dark World Potion Shop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3713, 692]
			},
			{
				name: 'Pyramid Hole',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3086, 834]
			},
			{
				name: 'Pyramid Entrance',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2953, 996]
			},
			{
				name: 'Pyramid Fairy',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3022, 996]
			},
			{
				name: 'Palace of Darkness Hint',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3804, 1032]
			},
			{
				name: 'Palace of Darkness',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [4027, 810]
			},
			{
				name: 'East Dark World Hint',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [4072, 1434]
			},
			{
				name: 'Dark Lake Hylia Fairy',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3753, 1323]
			},
			{
				name: 'Dark Lake Hylia Ledge Fairy',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3896, 1577]
			},
			{
				name: 'Dark Lake Hylia Ledge Hint',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3941, 1577]
			},
			{
				name: 'Dark Lake Hylia Ledge Spike Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3912, 1616]
			},
			{
				name: 'Ice Palace',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3695, 1767]
			},
			{
				name: 'Dark Lake Hylia Shop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3392, 1645]
			},
			{
				name: 'Hype Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3288, 1598]
			},
			{
				name: 'Big Bomb Shop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3188, 1412]
			},
			{
				name: 'Bonk Fairy (Dark)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3033, 1338]
			},
			{
				name: 'Dark World Hammer Peg Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2714, 1244]
			},
			{
				name: 'Red Shield Shop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2746, 942]
			},
			{
				name: 'Chest Game',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2170, 958]
			},
			{
				name: 'Thieves Town',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2323, 992]
			},
			{
				name: 'C-Shaped House',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2489, 992]
			},
			{
				name: 'Village of Outcasts Shop',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2481, 1094]
			},
			{
				name: 'Brewery',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2290, 1193]
			},
			{
				name: 'Archery Game',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2504, 1439]
			},
			{
				name: 'Mire Shed',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2144, 1638]
			},
			{
				name: 'Misery Mire',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2216, 1648]
			},
			{
				name: 'Dark Desert Fairy',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2288, 1639]
			},
			{
				name: 'Dark Desert Hint',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2472, 1689]
			},
			{
				name: 'Swamp Palace',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3025, 1915]
			},
			{
				name: 'Dark Death Mountain Fairy',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [2897, 387]
			},
			{
				name: 'Spike Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3241, 298]
			},
			{
				name: 'Ganons Tower',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3217, 64]
			},
			{
				name: 'Hookshot Cave Back Entrance',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3705, 33]
			},
			{
				name: 'Hookshot Cave',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3768, 138]
			},
			{
				name: 'Superbunny Cave (Top)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3825, 129]
			},
			{
				name: 'Turtle Rock',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3993, 167]
			},
			{
				name: 'Dark Death Mountain Ledge (East)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3793, 185]
			},
			{
				name: 'Dark Death Mountain Ledge (West)',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3697, 187]
			},
			{
				name: 'Turtle Rock Isolated Ledge Entrance',
				containsUncollectedChecks: true,
				image: '', goesToSelectedOption: null,
				requires: {},
				requiresCount: {},
				goesTo: '...',
				specialComesFrom: new Set<string>(),
				coords: [3744, 233]
			},
			// {
			// 	name: 'Flute Spot Mountain',
			// 	containsUncollectedChecks: false,
			// 	image: '',
			// 	goesToSelectedOption: null,
			// 	requires: {},
			// 	requiresCount: {},
			// 	goesTo: '...',
			// 	specialComesFrom: new Set<string>(),
			// 	coords: [830, 406]
			// },{
			// 	name: 'Flute Spot Kak',
			// 	containsUncollectedChecks: false,
			// 	image: '',
			// 	goesToSelectedOption: null,
			// 	requires: {},
			// 	requiresCount: {},
			// 	goesTo: '...',
			// 	specialComesFrom: new Set<string>(),
			// 	coords: [260, 996]
			// },{
			// 	name: 'Flute Spot Potion Shop',
			// 	containsUncollectedChecks: false,
			// 	image: '',
			// 	goesToSelectedOption: null,
			// 	requires: {},
			// 	requiresCount: {},
			// 	goesTo: '...',
			// 	specialComesFrom: new Set<string>(),
			// 	coords: [1640, 718]
			// },{
			// 	name: 'Flute Spot Links House',
			// 	containsUncollectedChecks: false,
			// 	image: '',
			// 	goesToSelectedOption: null,
			// 	requires: {},
			// 	requiresCount: {},
			// 	goesTo: '...',
			// 	specialComesFrom: new Set<string>(),
			// 	coords: [1120, 1448]
			// },{
			// 	name: 'Flute Spot Desert',
			// 	containsUncollectedChecks: false,
			// 	image: '',
			// 	goesToSelectedOption: null,
			// 	requires: {},
			// 	requiresCount: {},
			// 	goesTo: '...',
			// 	specialComesFrom: new Set<string>(),
			// 	coords: [260, 996]
			// },{
			// 	name: 'Flute Spot Lake Hylia',
			// 	containsUncollectedChecks: false,
			// 	image: '',
			// 	goesToSelectedOption: null,
			// 	requires: {},
			// 	requiresCount: {},
			// 	goesTo: '...',
			// 	specialComesFrom: new Set<string>(),
			// 	coords: [260, 996]
			// },{
			// 	name: 'Flute Spot East',
			// 	containsUncollectedChecks: false,
			// 	image: '',
			// 	goesToSelectedOption: null,
			// 	requires: {},
			// 	requiresCount: {},
			// 	goesTo: '...',
			// 	specialComesFrom: new Set<string>(),
			// 	coords: [260, 996]
			// },{
			// 	name: 'Flute Spot Dam',
			// 	containsUncollectedChecks: false,
			// 	image: '',
			// 	goesToSelectedOption: null,
			// 	requires: {},
			// 	requiresCount: {},
			// 	goesTo: '...',
			// 	specialComesFrom: new Set<string>(),
			// 	coords: [260, 996]
			// }
		];
	let connectorCoords: {
		name: string,
		reachableExits: { [key: string]: string[] },
		comesFrom: string,
		goesTo: string | null,
		coords: number[]
	}[] = [
			{
				name: 'Links House Exit', reachableExits: { 'Links House': [] }, comesFrom: '', goesTo: '',
				coords: [2623, 1826]
			},
			{
				name: 'Sanctuary Exit', reachableExits: { 'Sanctuary': [] }, comesFrom: '', goesTo: '',
				coords: [2981, 894]
			},
			{
				name: 'Elder House Exit (East)', reachableExits: { 'Elder House Exit (East)': [], 'Elder House Exit (West)': [] }, comesFrom: '', goesTo: '',
				coords: [2110, 1830]
			},
			{
				name: 'Elder House Exit (West)', reachableExits: { 'Elder House Exit (West)': [], 'Elder House Exit (East)': [] }, comesFrom: '', goesTo: '',
				coords: [1646, 1830]
			},
			{
				name: 'Two Brothers House Exit (East)', reachableExits: { 'Two Brothers House Exit (East)': [], 'Two Brothers House Exit (West)': ['bombs'] }, comesFrom: '', goesTo: '',
				coords: [1174, 1830]
			},
			{
				name: 'Two Brothers House Exit (West)', reachableExits: { 'Two Brothers House Exit (West)': [], 'Two Brothers House Exit (East)': ['bombs'] }, comesFrom: '', goesTo: '',
				coords: [710, 1830]
			},
			{
				name: 'Old Man Cave Exit (West)', reachableExits: { 'Old Man Cave Exit (West)': [], 'Old Man Cave Exit (East)': ['lamp'] }, comesFrom: '', goesTo: '',
				coords: [1957, 913]
			},
			{
				name: 'Old Man Cave Exit (East)', reachableExits: { 'Old Man Cave Exit (East)': [], 'Old Man Cave Exit (West)': ['lamp'] }, comesFrom: '', goesTo: '',
				coords: [2701, 892]
			},
			{
				name: 'Old Man House Exit (bottom)', reachableExits: { 'Old Man House Exit (bottom)': [], 'Old Man House Exit (top)': ['lamp'] }, comesFrom: '', goesTo: '',
				coords: [990, 894]
			},
			{
				name: 'Old Man House Exit (top)', reachableExits: { 'Old Man House Exit (top)': [], 'Old Man House Exit (bottom)': ['lamp'] }, comesFrom: '', goesTo: '',
				coords: [1582, 916]
			},
			{
				name: 'Death Mountain Return Cave Exit (West)', reachableExits: { 'Death Mountain Return Cave Exit (West)': [], 'Death Mountain Return Cave Exit (East)': ['lamp'] }, comesFrom: '', goesTo: '',
				coords: [46, 894]
			},
			{
				name: 'Death Mountain Return Cave Exit (East)', reachableExits: { 'Death Mountain Return Cave Exit (East)': [], 'Death Mountain Return Cave Exit (West)': ['lamp'] }, comesFrom: '', goesTo: '',
				coords: [790, 894]
			},
			{
				name: 'Spectacle Rock Cave Exit', reachableExits: { 'Spectacle Rock Cave Exit': [] }, comesFrom: '', goesTo: '',
				coords: [2010, 426]
			},
			{
				name: 'Spectacle Rock Cave Exit (top)', reachableExits: { 'Spectacle Rock Cave Exit (top)': [], 'Spectacle Rock Cave Exit': [] }, comesFrom: '', goesTo: '',
				coords: [2522, 406]
			},
			{
				name: 'Spectacle Rock Cave Exit (Peak)', reachableExits: { 'Spectacle Rock Cave Exit (Peak)': [], 'Spectacle Rock Cave Exit': [] }, comesFrom: '', goesTo: '',
				coords: [2940, 430]
			},
			{
				name: 'Paradox Cave Exit (bottom)', reachableExits: { 'Paradox Cave Exit (bottom)': [] }, comesFrom: '', goesTo: '',
				coords: [2074, 1405]
			},
			{
				name: 'Paradox Cave Exit (Middle)', reachableExits: { 'Paradox Cave Exit (Middle)': [], 'Paradox Cave Exit (bottom)': [], 'Paradox Cave Exit (top)': [] }, comesFrom: '', goesTo: '',
				coords: [2380, 1405]
			},
			{
				name: 'Paradox Cave Exit (top)', reachableExits: { 'Paradox Cave Exit (top)': [], 'Paradox Cave Exit (bottom)': [], 'Paradox Cave Exit (Middle)': [] }, comesFrom: '', goesTo: '',
				coords: [2830, 1405]
			},
			{
				name: 'Fairy Ascension Cave Exit (bottom)', reachableExits: { 'Fairy Ascension Cave Exit (bottom)': [], 'Fairy Ascension Cave Exit (top)': [] }, comesFrom: '', goesTo: '',
				coords: [222, 406]
			},
			{
				name: 'Fairy Ascension Cave Exit (top)', reachableExits: { 'Fairy Ascension Cave Exit (top)': [], 'Fairy Ascension Cave Exit (bottom)': [] }, comesFrom: '', goesTo: '',
				coords: [840, 430]
			},
			{
				name: 'Spiral Cave Exit', reachableExits: { 'Spiral Cave Exit': [], 'Spiral Cave Exit (top)': [] }, comesFrom: '', goesTo: '',
				coords: [614, 1383]
			},
			{
				name: 'Spiral Cave Exit (top)', reachableExits: { 'Spiral Cave Exit (top)': [], 'Spiral Cave Exit': [] }, comesFrom: '', goesTo: '',
				coords: [1112, 1406]
			},
			{
				name: 'Bumper Cave Exit (top)', reachableExits: { 'Bumper Cave Exit (top)': [], 'Bumper Cave Exit (bottom)': ['magic cape'] }, comesFrom: '', goesTo: '',
				coords: [1634, 1406]
			},
			{
				name: 'Bumper Cave Exit (bottom)', reachableExits: { 'Bumper Cave Exit (bottom)': [], 'Bumper Cave Exit (top)': ['magic cape'] }, comesFrom: '', goesTo: '',
				coords: [1296, 1406]
			},
			{
				name: 'Superbunny Cave Exit (top)', reachableExits: { 'Superbunny Cave Exit (top)': [], 'Superbunny Cave Exit (bottom)': [] }, comesFrom: '', goesTo: '',
				coords: [1826, 426]
			},
			{
				name: 'Superbunny Cave Exit (bottom)', reachableExits: { 'Superbunny Cave Exit (bottom)': [], 'Superbunny Cave Exit (top)': [] }, comesFrom: '', goesTo: '',
				coords: [1200, 430]
			},
			{
				name: 'Hookshot Cave Exit (South)', reachableExits: { 'Hookshot Cave Exit (South)': [], 'Hookshot Cave Exit (North)': ['bombs'] }, comesFrom: '', goesTo: '',
				coords: [350, 1838]
			},
			{
				name: 'Hookshot Cave Exit (North)', reachableExits: { 'Hookshot Cave Exit (North)': [], 'Hookshot Cave Exit (South)': ['bombs'] }, comesFrom: '', goesTo: '',
				coords: [118, 1366]
			},
		]
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
		name: string,
		reachableExits: { [key: string]: string[] },
		comesFrom: string,
		goesTo: string | null,
		coords: number[]
	}[] = [
			{ name: 'Hyrule Castle Exit (West)', reachableExits: { 'Hyrule Castle Exit (West)': [], 'Hyrule Castle Exit (South)': [], 'Hyrule Castle Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [0, 0] },
			{ name: 'Hyrule Castle Exit (South)', reachableExits: { 'Hyrule Castle Exit (West)': [], 'Hyrule Castle Exit (South)': [], 'Hyrule Castle Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [266, 0] },
			{ name: 'Hyrule Castle Exit (East)', reachableExits: { 'Hyrule Castle Exit (West)': [], 'Hyrule Castle Exit (South)': [], 'Hyrule Castle Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [532, 0] },
			{ name: 'Agahnims Tower Exit', reachableExits: { 'Agahnims Tower Exit': [] }, comesFrom: '', goesTo: '', coords: [798, 0] },
			{ name: 'Eastern Palace Exit', reachableExits: { 'Eastern Palace Exit': [] }, comesFrom: '', goesTo: '', coords: [1064, 0] },
			{ name: 'Desert Palace Exit (North)', reachableExits: { 'Desert Palace Exit (North)': [] }, comesFrom: '', goesTo: '', coords: [1330, 0] },
			{ name: 'Tower of Hera Exit', reachableExits: { 'Tower of Hera Exit': [] }, comesFrom: '', goesTo: '', coords: [1596, 0] },
			{ name: 'Palace of Darkness Exit', reachableExits: { 'Palace of Darkness Exit': [] }, comesFrom: '', goesTo: '', coords: [0, 266] },
			{ name: 'Swamp Palace Exit', reachableExits: { 'Swamp Palace Exit': [] }, comesFrom: '', goesTo: '', coords: [266, 266] },
			{ name: 'Skull Woods Final Section Exit', reachableExits: { 'Skull Woods Final Section Exit': [] }, comesFrom: '', goesTo: '', coords: [532, 266] },
			{ name: 'Thieves Town Exit', reachableExits: { 'Thieves Town Exit': [] }, comesFrom: '', goesTo: '', coords: [798, 266] },
			{ name: 'Desert Palace Exit (West)', reachableExits: { 'Desert Palace Exit (West)': [], 'Desert Palace Exit (South)': [], 'Desert Palace Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [1064, 266] },
			{ name: 'Desert Palace Exit (South)', reachableExits: { 'Desert Palace Exit (West)': [], 'Desert Palace Exit (South)': [], 'Desert Palace Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [1330, 266] },
			{ name: 'Desert Palace Exit (East)', reachableExits: { 'Desert Palace Exit (West)': [], 'Desert Palace Exit (South)': [], 'Desert Palace Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [1596, 266] },
			{ name: 'Skull Woods Second Section Exit (West)', reachableExits: { 'Skull Woods Second Section Exit (West)': [], 'Skull Woods Second Section Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [0, 532] },
			{ name: 'Skull Woods Second Section Hole', reachableExits: { 'Skull Woods Second Section Exit (West)': [], 'Skull Woods Second Section Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [266, 532] },
			{ name: 'Skull Woods Second Section Exit (East)', reachableExits: { 'Skull Woods Second Section Exit (West)': [], 'Skull Woods Second Section Exit (East)': [] }, comesFrom: '', goesTo: '', coords: [532, 532] },
			{ name: 'Skull Woods First Section Exit', reachableExits: { 'Skull Woods First Section Exit': [] }, comesFrom: '', goesTo: '', coords: [798, 532] },
			{ name: 'Skull Woods First Section Hole (East)', reachableExits: { 'Skull Woods First Section Exit': [] }, comesFrom: '', goesTo: '', coords: [1064, 532] },
			{ name: 'Skull Woods First Section Hole (North)', reachableExits: { 'Skull Woods First Section Exit': [] }, comesFrom: '', goesTo: '', coords: [1330, 532] },
			{ name: 'Skull Woods First Section Hole (West)', reachableExits: { 'Skull Woods First Section Exit': [] }, comesFrom: '', goesTo: '', coords: [1596, 532] },
			{ name: 'Ice Palace Exit', reachableExits: { 'Ice Palace Exit': [] }, comesFrom: '', goesTo: '', coords: [0, 798] },
			{ name: 'Misery Mire Exit', reachableExits: { 'Misery Mire Exit': [] }, comesFrom: '', goesTo: '', coords: [266, 798] },
			{ name: 'Turtle Rock Exit (Front)', reachableExits: { 'Turtle Rock Ledge Exit (West)': [], 'Turtle Rock Exit (Front)': [], 'Turtle Rock Isolated Ledge Exit': [] }, comesFrom: '', goesTo: '', coords: [532, 798] },
			{ name: 'Turtle Rock Ledge Exit (West)', reachableExits: { 'Turtle Rock Ledge Exit (West)': [], 'Turtle Rock Exit (Front)': [], 'Turtle Rock Isolated Ledge Exit': [] }, comesFrom: '', goesTo: '', coords: [798, 798] },
			{ name: 'Turtle Rock Ledge Exit (East)', reachableExits: { 'Turtle Rock Ledge Exit (West)': [], 'Turtle Rock Ledge Exit (East)': [], 'Turtle Rock Exit (Front)': [], 'Turtle Rock Isolated Ledge Exit': [] }, comesFrom: '', goesTo: '', coords: [1064, 798] },
			{ name: 'Turtle Rock Isolated Ledge Exit', reachableExits: { 'Turtle Rock Ledge Exit (West)': ['lamp', 'cane of somaria'], 'Turtle Rock Exit (Front)': ['lamp', 'cane of somaria'], 'Turtle Rock Isolated Ledge Exit': [] }, comesFrom: '', goesTo: '', coords: [1330, 798] },
			{ name: 'Ganons Tower Exit', reachableExits: { 'Ganons Tower Exit': [] }, comesFrom: '', goesTo: '', coords: [1596, 798] }]

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