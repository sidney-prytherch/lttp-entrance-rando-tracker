<script lang="ts">
	import lightworld from '$lib/sprites/lightworld.png';
	import darkworld from '$lib/sprites/darkworld.png';
	import { onMount } from 'svelte';
	let lightWorldEntranceImages: string[] = $state([]);
	let darkWorldEntranceImages: string[] = $state([]);
	const importantLocations = [
		"Link's House",
		'Sanctuary',
		"Old Man's Cave",

		'Hyrule Castle - Main',
		'Hyrule Castle - West',
		'Hyrule Castle - East',
		'Castle Tower',
		'Eastern Palace',
		'Desert Palace - Main',
		'Desert Palace - East',
		'Desert Palace - West',
		'Desert Palace - North',
		'Tower of Hera',

		'Palace of Darkness',
		'Swamp Palace',
		'Skull Woods',
		'Skull Woods - Back',
		"Thieves' Town",
		'Ice Palace',
		'Misery Mire',
		'Turtle Rock - Main',
		'Turtle Rock - West',
		'Turtle Rock - East',
		'Turtle Rock - Back',
		"Ganon's Tower",
		'Ganon',

		'Magic Shop',
		'Sick Kid',
		'Blacksmith',
		'Magic Bat',
		'Library',
		"Sahasrahla's Hut",
		'Mimic Cave',
		'Dam',
		'Fairies',
		'Blue-Bottle-Filling Fairy',

		'Bomb Shop',
		'Bumper Cave',
		'Spike Cave',
		'Hookshot Cave',

		'Shop',
		'Rupee Cave',
		'Dark Cave',
		'Room/Cave w/ Chest'
	];

	const lightWorldLocationNames = [
		'0 - Master Sword Pedestal',
		'1 - Lost Woods Gamble',
		'2 - Lumberjack Tree Cave',
		'3 - Lumberjack House',
		'4 - Lumberjack Tree Tree',
		'5 - Death Mountain Return Cave (West)',
		'6 - Old Man Cave (West)',
		'7 - Potion Shop',
		'8 - Waterfall of Wishing',
		'9 - Zora River',
		'10 - Lost Woods Hideout Stump',
		'11 - Lost Woods Hideout Drop',
		'12 - Fortune Teller (Light)',
		'13 - Bonk Rock Cave',
		'14 - Sanctuary',
		'15 - Sanctuary Grave',
		'16 - Graveyard Cave',
		'17 - Kings Grave',
		'18 - North Fairy Cave Drop',
		'19 - North Fairy Cave',
		'20 - Old Man Cave (East)',
		'21 - Old Man House (Bottom)',
		'22 - Old Man House (Top)',
		'23 - Spectacle Rock Cave (Bottom)',
		'24 - Spectacle Rock Cave Peak',
		'25 - Death Mountain Return Cave (East)',
		'26 - Spectacle Rock Cave',
		'27 - Tower of Hera',
		'28 - Kakariko Shop',
		'29 - Tavern (Front)',
		'30 - Paradox Cave (Top)',
		'31 - Mimic Cave',
		'32 - Spiral Cave',
		'33 - Fairy Ascension Cave (Top)',
		'34 - Spiral Cave (Bottom)',
		'35 - Fairy Ascension Cave (Bottom)',
		'36 - Hookshot Fairy',
		'37 - Paradox Cave (Bottom)',
		'38 - Paradox Cave (Middle)',
		'39 - Light World Bomb Hut',
		'40 - Kakariko Well Drop',
		'41 - Kakariko Well Cave',
		'42 - Blinds Hideout',
		'43 - Elder House (West)',
		'44 - Elder House (East)',
		'45 - Snitch Lady (West)',
		'46 - Snitch Lady (East)',
		'47 - Chicken House',
		'48 - Sick Kids House',
		'49 - Bush Covered House',
		'50 - Tavern North',
		'51 - Blacksmiths Hut',
		'52 - Bat Cave Cave',
		'53 - Bat Cave Drop',
		'54 - Library',
		'55 - Kakariko Gamble Game',
		'56 - Two Brothers House (East)',
		'57 - Two Brothers House (West)',
		'58 - Cave 45',
		'59 - Aginahs Cave',
		'60 - Desert Palace Entrance (East)',
		'61 - Desert Palace Entrance (South)',
		'62 - Desert Palace Entrance (West)',
		'63 - Desert Palace Entrance (North)',
		'64 - Desert Fairy',
		'65 - 50 Rupee Cave',
		'66 - Dam',
		'67 - Light Hype Fairy',
		'68 - Links House',
		'69 - Bonk Fairy (Light)',
		'70 - Mini Moldorm Cave',
		'71 - Lake Hylia Fortune Teller',
		'72 - Cave Shop (Lake Hylia)',
		'73 - Capacity Upgrade',
		'74 - Good Bee Cave',
		'75 - Ice Rod Cave',
		'76 - 20 Rupee Cave',
		'77 - Long Fairy Cave',
		'78 - Sahasrahlas Hut',
		'79 - Eastern Palace',
		'80 - Lake Hylia Fairy',
		'81 - Hyrule Castle Secret Entrance Drop',
		'82 - Hyrule Castle Secret Entrance Stairs',
		'83 - Hyrule Castle Entrance (South)',
		'84 - Agahnims Tower',
		'85 - Hyrule Castle Entrance (West)',
		'86 - Hyrule Castle Entrance (East)',
		'87 - Checkerboard Cave'
	];

	const darkWorldLocationNames = [
		'0 - Skull Woods Final Section',
		'1 - Skull Woods Second Section Door (West)',
		'2 - Skull Woods Second Section Hole',
		'3 - Skull Woods Second Section Door (East)',
		'4 - Skull Woods First Section Hole (West)',
		'5 - Skull Woods First Section Hole (East)',
		'6 - Skull Woods First Section Door',
		'7 - Skull Woods First Section Hole (North)',
		'8 - Dark World Lumberjack Shop',
		'9 - Bumper Cave (Top)',
		'10 - Bumper Cave (Bottom)',
		'11 - Fortune Teller (Dark)',
		'12 - Dark Sanctuary Hint',
		'13 - Dark World Potion Shop',
		'14 - Pyramid Hole',
		'15 - Pyramid Entrance',
		'16 - Pyramid Fairy',
		'17 - Palace of Darkness Hint',
		'18 - Palace of Darkness',
		'19 - East Dark World Hint',
		'20 - Dark Lake Hylia Fairy',
		'21 - Dark Lake Hylia Ledge Fairy',
		'22 - Dark Lake Hylia Ledge Hint',
		'23 - Dark Lake Hylia Ledge Spike Cave',
		'24 - Ice Palace',
		'25 - Dark Lake Hylia Shop',
		'26 - Hype Cave',
		'27 - Big Bomb Shop',
		'28 - Bonk Fairy (Dark)',
		'29 - Dark World Hammer Peg Cave',
		'30 - Red Shield Shop',
		'31 - Chest Game',
		'32 - Thieves Town',
		'33 - C-Shaped House',
		'34 - Village of Outcasts Shop',
		'35 - Brewery',
		'36 - Archery Game',
		'37 - Mire Shed',
		'38 - Misery Mire',
		'39 - Dark Desert Fairy',
		'40 - Dark Desert Hint',
		'41 - Swamp Palace',
		'42 - Dark Death Mountain Fairy',
		'43 - Spike Cave',
		'44 - Ganons Tower',
		'45 - Hookshot Cave Back Entrance',
		'46 - Hookshot Cave',
		'47 - Superbunny Cave (Top)',
		'48 - Turtle Rock',
		'49 - Dark Death Mountain Ledge (East)',
		'50 - Dark Death Mountain Ledge (West)',
		'51 - Turtle Rock Isolated Ledge Entrance',
		'52 - Superbunny Cave (Bottom)',
		'53 - Cave Shop (Dark Death Mountain)'
	];

	const lightWorldEntranceNames = [
		'Master Sword Pedestal',
		'Lost Woods Gamble',
		'Lumberjack Tree Cave',
		'Lumberjack House',
		'Lumberjack Tree Tree',
		'Death Mountain Return Cave (West)',
		'Old Man Cave (West)',
		'Potion Shop',
		'Waterfall of Wishing',
		'Zora River',
		'Lost Woods Hideout Stump',
		'Lost Woods Hideout Drop',
		'Fortune Teller (Light)',
		'Bonk Rock Cave',
		'Sanctuary',
		'Sanctuary Grave',
		'Graveyard Cave',
		'Kings Grave',
		'North Fairy Cave Drop',
		'North Fairy Cave',
		'Old Man Cave (East)',
		'Old Man House (Bottom)',
		'Old Man House (Top)',
		'Spectacle Rock Cave (Bottom)',
		'Spectacle Rock Cave Peak',
		'Death Mountain Return Cave (East)',
		'Spectacle Rock Cave',
		'Tower of Hera',
		'Kakariko Shop',
		'Tavern (Front)',
		'Paradox Cave (Top)',
		'Mimic Cave',
		'Spiral Cave',
		'Fairy Ascension Cave (Top)',
		'Spiral Cave (Bottom)',
		'Fairy Ascension Cave (Bottom)',
		'Hookshot Fairy',
		'Paradox Cave (Bottom)',
		'Paradox Cave (Middle)',
		'Light World Bomb Hut',
		'Kakariko Well Drop',
		'Kakariko Well Cave',
		'Blinds Hideout',
		'Elder House (West)',
		'Elder House (East)',
		'Snitch Lady (West)',
		'Snitch Lady (East)',
		'Chicken House',
		'Sick Kids House',
		'Bush Covered House',
		'Tavern North',
		'Blacksmiths Hut',
		'Bat Cave Cave',
		'Bat Cave Drop',
		'Library',
		'Kakariko Gamble Game',
		'Two Brothers House (East)',
		'Two Brothers House (West)',
		'Cave 45',
		'Aginahs Cave',
		'Desert Palace Entrance (East)',
		'Desert Palace Entrance (South)',
		'Desert Palace Entrance (West)',
		'Desert Palace Entrance (North)',
		'Desert Fairy',
		'50 Rupee Cave',
		'Dam',
		'Light Hype Fairy',
		'Links House',
		'Bonk Fairy (Light)',
		'Mini Moldorm Cave',
		'Lake Hylia Fortune Teller',
		'Cave Shop (Lake Hylia)',
		'Capacity Upgrade',
		'Good Bee Cave',
		'Ice Rod Cave',
		'20 Rupee Cave',
		'Long Fairy Cave',
		'Sahasrahlas Hut',
		'Eastern Palace',
		'Lake Hylia Fairy',
		'Hyrule Castle Secret Entrance Drop',
		'Hyrule Castle Secret Entrance Stairs',
		'Hyrule Castle Entrance (South)',
		'Agahnims Tower',
		'Hyrule Castle Entrance (West)',
		'Hyrule Castle Entrance (East)',
		'Checkerboard Cave'
	];

	const darkWorldEntranceNames = [
		'Skull Woods Final Section',
		'Skull Woods Second Section Door (West)',
		'Skull Woods Second Section Hole',
		'Skull Woods Second Section Door (East)',
		'Skull Woods First Section Hole (West)',
		'Skull Woods First Section Hole (East)',
		'Skull Woods First Section Door',
		'Skull Woods First Section Hole (North)',
		'Dark World Lumberjack Shop',
		'Bumper Cave (Top)',
		'Bumper Cave (Bottom)',
		'Fortune Teller (Dark)',
		'Dark Sanctuary Hint',
		'Dark World Potion Shop',
		'Pyramid Hole',
		'Pyramid Entrance',
		'Pyramid Fairy',
		'Palace of Darkness Hint',
		'Palace of Darkness',
		'East Dark World Hint',
		'Dark Lake Hylia Fairy',
		'Dark Lake Hylia Ledge Fairy',
		'Dark Lake Hylia Ledge Hint',
		'Dark Lake Hylia Ledge Spike Cave',
		'Ice Palace',
		'Dark Lake Hylia Shop',
		'Hype Cave',
		'Big Bomb Shop',
		'Bonk Fairy (Dark)',
		'Dark World Hammer Peg Cave',
		'Red Shield Shop',
		'Chest Game',
		'Thieves Town',
		'C-Shaped House',
		'Village of Outcasts Shop',
		'Brewery',
		'Archery Game',
		'Mire Shed',
		'Misery Mire',
		'Dark Desert Fairy',
		'Dark Desert Hint',
		'Swamp Palace',
		'Dark Death Mountain Fairy',
		'Spike Cave',
		'Ganons Tower',
		'Hookshot Cave Back Entrance',
		'Hookshot Cave',
		'Superbunny Cave (Top)',
		'Turtle Rock',
		'Dark Death Mountain Ledge (East)',
		'Dark Death Mountain Ledge (West)',
		'Turtle Rock Isolated Ledge Entrance',
		'Superbunny Cave (Bottom)',
		'Cave Shop (Dark Death Mountain)'
	];

	const lightWorldExitNames = [
		'Master Sword Pedestal Exit',
		'Lost Woods Gamble Exit',
		'Lumberjack Tree Cave Exit',
		'Lumberjack House Exit',
		'Lumberjack Tree Tree Exit',
		'Death Mountain Return Cave (West) Exit',
		'Old Man Cave (West) Exit',
		'Potion Shop Exit',
		'Waterfall of Wishing Exit',
		'Zora River Exit',
		'Lost Woods Hideout Stump Exit',
		'Lost Woods Hideout Drop Exit',
		'Fortune Teller (Light) Exit',
		'Bonk Rock Cave Exit',
		'Sanctuary Exit',
		'Sanctuary Grave Exit',
		'Graveyard Cave Exit',
		'Kings Grave Exit',
		'North Fairy Cave Drop Exit',
		'North Fairy Cave Exit',
		'Old Man Cave (East) Exit',
		'Old Man House (Bottom) Exit',
		'Old Man House (Top) Exit',
		'Spectacle Rock Cave (Bottom) Exit',
		'Spectacle Rock Cave Peak Exit',
		'Death Mountain Return Cave (East) Exit',
		'Spectacle Rock Cave Exit',
		'Tower of Hera Exit',
		'Kakariko Shop Exit',
		'Tavern (Front) Exit',
		'Paradox Cave (Top) Exit',
		'Mimic Cave Exit',
		'Spiral Cave Exit',
		'Fairy Ascension Cave (Top) Exit',
		'Spiral Cave (Bottom) Exit',
		'Fairy Ascension Cave (Bottom) Exit',
		'Hookshot Fairy Exit',
		'Paradox Cave (Bottom) Exit',
		'Paradox Cave (Middle) Exit',
		'Light World Bomb Hut Exit',
		'Kakariko Well Drop Exit',
		'Kakariko Well Cave Exit',
		'Blinds Hideout Exit',
		'Elder House (West) Exit',
		'Elder House (East) Exit',
		'Snitch Lady (West) Exit',
		'Snitch Lady (East) Exit',
		'Chicken House Exit',
		'Sick Kids House Exit',
		'Bush Covered House Exit',
		'Tavern North Exit',
		'Blacksmiths Hut Exit',
		'Bat Cave Cave Exit',
		'Bat Cave Drop Exit',
		'Library Exit',
		'Kakariko Gamble Game Exit',
		'Two Brothers House (East) Exit',
		'Two Brothers House (West) Exit',
		'Cave 45 Exit',
		'Aginahs Cave Exit',
		'Desert Palace Entrance (East) Exit',
		'Desert Palace Entrance (South) Exit',
		'Desert Palace Entrance (West) Exit',
		'Desert Palace Entrance (North) Exit',
		'Desert Fairy Exit',
		'50 Rupee Cave Exit',
		'Dam Exit',
		'Light Hype Fairy Exit',
		'Links House Exit',
		'Bonk Fairy (Light) Exit',
		'Mini Moldorm Cave Exit',
		'Lake Hylia Fortune Teller Exit',
		'Cave Shop (Lake Hylia) Exit',
		'Capacity Upgrade Exit',
		'Good Bee Cave Exit',
		'Ice Rod Cave Exit',
		'20 Rupee Cave Exit',
		'Long Fairy Cave Exit',
		'Sahasrahlas Hut Exit',
		'Eastern Palace Exit',
		'Lake Hylia Fairy Exit',
		'Hyrule Castle Secret Entrance Drop Exit',
		'Hyrule Castle Secret Entrance Stairs Exit',
		'Hyrule Castle Entrance (South) Exit',
		'Agahnims Tower Exit',
		'Hyrule Castle Entrance (West) Exit',
		'Hyrule Castle Entrance (East) Exit',
		'Checkerboard Cave Exit'
	];

	const darkWorldExitNames = [
		'Skull Woods Final Section Exit',
		'Skull Woods Second Section Door (West) Exit',
		'Skull Woods Second Section Hole Exit',
		'Skull Woods Second Section Door (East) Exit',
		'Skull Woods First Section Hole (West) Exit',
		'Skull Woods First Section Hole (East) Exit',
		'Skull Woods First Section Door Exit',
		'Skull Woods First Section Hole (North) Exit',
		'Dark World Lumberjack Shop Exit',
		'Bumper Cave (Top) Exit',
		'Bumper Cave (Bottom) Exit',
		'Fortune Teller (Dark) Exit',
		'Dark Sanctuary Hint Exit',
		'Dark World Potion Shop Exit',
		'Pyramid Hole Exit',
		'Pyramid Entrance Exit',
		'Pyramid Fairy Exit',
		'Palace of Darkness Hint Exit',
		'Palace of Darkness Exit',
		'East Dark World Hint Exit',
		'Dark Lake Hylia Fairy Exit',
		'Dark Lake Hylia Ledge Fairy Exit',
		'Dark Lake Hylia Ledge Hint Exit',
		'Dark Lake Hylia Ledge Spike Cave Exit',
		'Ice Palace Exit',
		'Dark Lake Hylia Shop Exit',
		'Hype Cave Exit',
		'Big Bomb Shop Exit',
		'Bonk Fairy (Dark) Exit',
		'Dark World Hammer Peg Cave Exit',
		'Red Shield Shop Exit',
		'Chest Game Exit',
		'Thieves Town Exit',
		'C-Shaped House Exit',
		'Village of Outcasts Shop Exit',
		'Brewery Exit',
		'Archery Game Exit',
		'Mire Shed Exit',
		'Misery Mire Exit',
		'Dark Desert Fairy Exit',
		'Dark Desert Hint Exit',
		'Swamp Palace Exit',
		'Dark Death Mountain Fairy Exit',
		'Spike Cave Exit',
		'Ganons Tower Exit',
		'Hookshot Cave Back Entrance Exit',
		'Hookshot Cave Exit',
		'Superbunny Cave (Top) Exit',
		'Turtle Rock Exit',
		'Dark Death Mountain Ledge (East) Exit',
		'Dark Death Mountain Ledge (West) Exit',
		'Turtle Rock Isolated Ledge Entrance Exit',
		'Superbunny Cave (Bottom) Exit',
		'Cave Shop (Dark Death Mountain) Exit'
	];

	let standardLogic = {
		'Light World Bomb Hut': { requirement: ['bombs'] },
		'Light Hype Fairy': { requirement: ['bombs'] },
		'Mini Moldorm Cave': { requirement: ['bombs'] },
		'Ice Rod Cave': { requirement: ['bombs'] },

		'Kings Grave': { requirement: ['Pegasus Boots'] },
		'Kings Grave Outer Rocks': { requirement: ['Mitt 2'] },
		'Kings Grave Inner Rocks': { requirement: ['Mitt 2'] },
		'Kings Grave Mirror Spot': { requirement: ['Moon Pearl', 'Magic Mirror'] },

		'Bonk Fairy (Light)': { requirement: ['Pegasus Boots'] },
		'Lumberjack Tree Tree': { requirement: ['Pegasus Boots', 'Beat Agahnim 1'] },
		'Bonk Rock Cave': { requirement: ['Pegasus Boots'] },
		'Desert Palace Stairs': { requirement: ['Book of Mudora'] },
		'Sanctuary Grave': { requirement: ['Mitt 1+'] },
		'20 Rupee Cave': { requirement: ['Mitt 1+'] },
		'50 Rupee Cave': { requirement: ['Mitt 1+'] },
		'Death Mountain Entrance Rock': { requirement: ['Mitt 1+'] },
		'Bumper Cave Entrance Mirror Spot': { requirement: ['Magic Mirror'] },
		'Flute Spot 1': { requirement: ['Flute'] },
		'Lake Hylia Central Island Teleporter': { requirement: ['Mitt 2'] },
		'Dark Desert Teleporter': { requirement: ['Flute', 'Mitt 2'] },
		'East Hyrule Teleporter': { requirement: ['Hammer', 'Mitt 1+', 'Moon Pearl'] },
		'South Hyrule Teleporter': { requirement: ['Hammer', 'Mitt 1+', 'Moon Pearl'] },
		'Kakariko Teleporter': {
			requirement: [
				['Moon Pearl', 'Hammer', 'Mitt 1+'],
				['Moon Pearl', 'Mitt 2']
			]
		},
		'Bat Cave Drop Ledge': { requirement: ['Hammer'] },

		'Waterfall of Wishing': { requirement: ['Flippers'] },
		'Desert Palace Entrance (North) Rocks': { requirement: ['Mitt 1+'] },
		'Desert Ledge Return Rocks': { requirement: ['Mitt 1+'] },
		'Checkerboard Cave': { requirement: ['Mitt 1+'] },
		'Agahnims Tower': { requirement: [['Cape'], ['Sword 2+'], ['Beat Agahnim 1']] },
		'Top of Pyramid': { requirement: ['Beat Agahnim 1'] },
		'Old Man Cave Exit (West)': { requirement: [] },
		'Broken Bridge (West)': { requirement: ['Hookshot'] },
		'Broken Bridge (East)': { requirement: ['Hookshot'] },
		'East Death Mountain Teleporter': { requirement: ['Mitt 2'] },
		'Fairy Ascension Rocks': { requirement: ['Mitt 2'] },
		'Paradox Cave Push Block Reverse': { requirement: ['Magic Mirror'] },
		'Death Mountain (Top)': { requirement: ['Hammer'] },
		'Turtle Rock Teleporter': { requirement: ['Mitt 2', 'Hammer'] },
		'East Death Mountain (Top)': { requirement: ['Hammer'] },

		'Catfish Exit Rock': { requirement: ['Mitt 1+'] },
		'Catfish Entrance Rock': { requirement: ['Mitt 1+'] },
		'Northeast Dark World Broken Bridge Pass': {
			requirement: [
				['Moon Pearl', 'Mitt 1+'],
				['Moon Pearl', 'Hammer'],
				['Moon Pearl', 'Flippers']
			]
		},
		'East Dark World Broken Bridge Pass': {
			requirement: [
				['Moon Pearl', 'Mitt 1+'],
				['Moon Pearl', 'Hammer']
			]
		},
		'South Dark World Bridge': { requirement: ['Hammer', 'Moon Pearl'] },
		'Bonk Fairy (Dark)': { requirement: ['Moon Pearl', 'Pegasus Boots'] },
		'West Dark World Gap': { requirement: ['Moon Pearl', 'Hookshot'] },
		'Palace of Darkness': { requirement: ['Moon Pearl'] },
		'Hyrule Castle Ledge Mirror Spot': { requirement: ['Magic Mirror'] },
		'Hyrule Castle Main Gate': { requirement: ['Magic Mirror'] },
		'Dark Lake Hylia Drop (East)': { requirement: [['Moon Pearl', 'Flippers'], ['Magic Mirror']] },
		'Dark Lake Hylia Drop (South)': { requirement: ['Moon Pearl', 'Flippers'] },
		'Dark Lake Hylia Ledge Fairy': { requirement: ['Moon Pearl', 'bombs'] },
		'Dark Lake Hylia Ledge Spike Cave': { requirement: ['Mitt 1+', 'Moon Pearl'] },
		'Dark Lake Hylia Teleporter': { requirement: ['Moon Pearl'] },
		'Village of Outcasts Heavy Rock': { requirement: ['Moon Pearl', 'Mitt 2'] },
		'Hype Cave': { requirement: ['Moon Pearl', 'bombs'] },
		Brewery: { requirement: ['Moon Pearl', 'bombs'] },
		'Thieves Town': { requirement: ['Moon Pearl'] },
		'Skull Woods First Section Hole (North)': { requirement: ['Moon Pearl'] },
		'Skull Woods Second Section Hole': { requirement: ['Moon Pearl'] },
		'Maze Race Mirror Spot': { requirement: ['Magic Mirror'] },
		'Cave 45 Mirror Spot': { requirement: ['Magic Mirror'] },
		'Bombos Tablet Mirror Spot': { requirement: ['Magic Mirror'] },
		'East Dark World Bridge': { requirement: ['Moon Pearl', 'Hammer'] },
		'Lake Hylia Island Mirror Spot': { requirement: ['Moon Pearl', 'Magic Mirror', 'Flippers'] },
		'Lake Hylia Central Island Mirror Spot': { requirement: ['Magic Mirror'] },
		'East Dark World River Pier': { requirement: ['Moon Pearl', 'Flippers'] },
		'Graveyard Ledge Mirror Spot': { requirement: ['Moon Pearl', 'Magic Mirror'] },
		'Bumper Cave Entrance Rock': { requirement: ['Moon Pearl', 'Mitt 1+'] },
		'Bumper Cave Ledge Mirror Spot': { requirement: ['Magic Mirror'] },
		'Bat Cave Drop Ledge Mirror Spot': { requirement: ['Magic Mirror'] },
		'Dark World Hammer Peg Cave': { requirement: ['Moon Pearl', 'Hammer'] },
		'Village of Outcasts Eastern Rocks': { requirement: ['Moon Pearl', 'Mitt 2'] },
		'Peg Area Rocks': { requirement: ['Moon Pearl', 'Mitt 2'] },
		'Village of Outcasts Pegs': { requirement: ['Moon Pearl', 'Hammer'] },
		'Grassy Lawn Pegs': { requirement: ['Moon Pearl', 'Hammer'] },
		'Bumper Cave Exit (Top)': { requirement: ['Cape'] },
		'Bumper Cave Exit (Bottom)': { requirement: [['Cape'], ['Hookshot']] },

		'Skull Woods Final Section': { requirement: ['Fire Rod', 'Moon Pearl'] },
		'Misery Mire': { requirement: ['Moon Pearl', 'Sword 1+', 'Misery Mire Medallion'] },
		'Desert Ledge (Northeast) Mirror Spot': { requirement: ['Magic Mirror'] },

		'Desert Ledge Mirror Spot': { requirement: ['Magic Mirror'] },
		'Desert Palace Stairs Mirror Spot': { requirement: ['Magic Mirror'] },
		'Desert Palace Entrance (North) Mirror Spot': { requirement: ['Magic Mirror'] },
		'Spectacle Rock Mirror Spot': { requirement: ['Magic Mirror'] },
		'Hookshot Cave': { requirement: ['Mitt 1+', 'Moon Pearl'] },

		'East Death Mountain (Top) Mirror Spot': { requirement: ['Magic Mirror'] },
		'Mimic Cave Mirror Spot': { requirement: ['Magic Mirror'] },
		'Spiral Cave Mirror Spot': { requirement: ['Magic Mirror'] },
		'Fairy Ascension Mirror Spot': { requirement: ['Magic Mirror', 'Moon Pearl'] },
		'Isolated Ledge Mirror Spot': { requirement: ['Magic Mirror'] },
		'Superbunny Cave Exit (Bottom)': { requirement: [] },
		'Floating Island Mirror Spot': { requirement: ['Magic Mirror'] },
		'Turtle Rock': { requirement: ['Moon Pearl', 'Sword 1+', 'Turtle Rock Medallion'] },

		'Pyramid Hole': { requirement: ['Beat Agahnim 2'] }
	};

    let lightWorldLogic = lightWorldEntranceNames.map(it => {return {[it]: ''}})
    let darkWorldLogic = darkWorldEntranceNames.map(it => {return {[it]: ''}})

    function printLogic() {
        console.log(lightWorldLogic)

        console.log(darkWorldLogic)
    }

	onMount(() => {
		const lightWorldEntrances = new Image();
		lightWorldEntrances.src = lightworld;
		lightWorldEntrances.onload = () => splitImage(lightWorldEntrances, lightWorldEntranceImages);

		const darkWorldEntrances = new Image();
		darkWorldEntrances.src = darkworld;
		darkWorldEntrances.onload = () => splitImage(darkWorldEntrances, darkWorldEntranceImages);
	});

	function splitImage(img: HTMLImageElement, images: string[]) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const chunkSize = 200;
		const imgWidth = img.width;
		const imgHeight = img.height;

		if (ctx) {
			for (let y = 0; y < imgHeight; y += chunkSize) {
				for (let x = 0; x < imgWidth; x += chunkSize) {
					canvas.width = chunkSize;
					canvas.height = chunkSize;
					ctx.drawImage(img, x, y, chunkSize, chunkSize, 0, 0, chunkSize, chunkSize);
					const chunkSrc = canvas.toDataURL('image/png');
					images.push(chunkSrc);
				}
			}
		}
	}
</script>

{#if lightWorldEntranceImages.length > 0}
	<div class="entrances">
		{#each lightWorldEntranceNames as name, num}
			<div class="entrance-image-with-info">
				<img class="image-chunk" src={lightWorldEntranceImages[num]} alt="chunk" />
				<p>{name}</p>
				<input type="text" bind:value={lightWorldLogic[num][name]}/>
			</div>
		{/each}
	</div>
{/if}

{#if darkWorldEntranceImages.length > 0}
	<div class="entrances">
		{#each darkWorldEntranceNames as name, num}
			<div class="entrance-image-with-info">
				<img class="image-chunk" src={darkWorldEntranceImages[num]} alt="chunk" />
				<p>{name}</p>
				<!-- <input type="text" bind:value={darkWorldLogic[num][name]}/> -->
			</div>
		{/each}
	</div>
{/if}

<style>
	.image-chunk {
		width: 200px;
		height: 200px;
		margin: 5px;
	}

	.entrance-image-with-info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.entrances {
		display: flex;
		flex-wrap: wrap;
	}
</style>
