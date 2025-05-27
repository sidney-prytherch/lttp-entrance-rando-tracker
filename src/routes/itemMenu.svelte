<script lang="ts">
	import items from '$lib/sprites/items.png';
	import { onMount } from 'svelte';
	let { size, done, resetItems, addOrRemoveItemFromSet, itemSet, itemSetCount, itemNames } = $props<{
		size: number;
		done: () => void;
		resetItems: () => void;
		addOrRemoveItemFromSet: (itemName: string) => void;
		itemSet: { [key: string]: boolean };
		itemSetCount: { [key: string]: number };
		itemNames: string[];
	}>();
	let itemCanvas: HTMLCanvasElement | undefined = $state();
	let itemMenuCtx: CanvasRenderingContext2D | null = $state(null);
	let itemMenu: HTMLImageElement | null = $state(null);
	let itemMenuImg: HTMLImageElement | undefined = $state();

	$effect(() => {
		if (itemSet) {
			// console.log('update');
			circleItems();
		}
	});

	// first item at (57, 24)
	// each item has height of 48 and width of 54
	// there are 6 rows and 5 columns
	const itemCoords = (function () {
		let itemCoordinates = [];
		let itemIndex = 0;
		for (let y = 24; y < 24 + 6 * 48; y += 48) {
			for (let x = 18; x < 18 + 6 * 54; x += 54) {
				if (itemIndex === 0 && x === 18) {
					continue;
				}
				itemCoordinates.push({
					name: itemNames[itemIndex++],
					x1: x,
					x2: x + 54,
					y1: y,
					y2: y + 48
				});
			}
		}
		itemCoordinates.push({
			name: 'reset',
			x1: 60,
			x2: 168,
			y1: 315,
			y2: 342
		});
		itemCoordinates.push({
			name: 'done',
			x1: 231,
			x2: 321,
			y1: 315,
			y2: 342
		});
		return itemCoordinates;
	})();

	const scaleSize = () => {
		//original size of sprite is 360
		for (let itemCoord of itemCoords) {
			itemCoord.x1 = (size * itemCoord.x1) / 360.0;
			itemCoord.x2 = (size * itemCoord.x2) / 360.0;
			itemCoord.y1 = (size * itemCoord.y1) / 360.0;
			itemCoord.y2 = (size * itemCoord.y2) / 360.0;
		}
	};

	scaleSize();

	const handleClick = (e: MouseEvent) => {
		if (itemCanvas) {
			const { top, left } = itemCanvas.getBoundingClientRect();
			const x = e.x - left;
			const y = e.y - top;
			for (let itemCoord of itemCoords) {
				if (x > itemCoord.x1 && x < itemCoord.x2) {
					if (y > itemCoord.y1 && y < itemCoord.y2) {
						if (itemCoord.name === 'done') {
							done();
						} else if (itemCoord.name === 'reset') {
							resetItems();
						} else {
							addOrRemoveItemFromSet(itemCoord.name);
							circleItems();
						}
						break;
					}
				}
			}
			circleItems();
		}
	};

	onMount(() => {
		// itemMenuImg = new Image();
		// itemMenuImg.src = items;
		// itemMenuImg.addEventListener('load', () => {

		// });
		if (itemCanvas) {
			itemMenuCtx = itemCanvas.getContext('2d');
			circleItems();
		}
	});

	const clearImage = () => {
		if (itemMenuCtx) {
			itemMenuCtx.clearRect(0, 0, 360, 360);
		}
	};

	const circleItems = () => {
		clearImage();
		const itemWidth = 54;
		const itemHeight = 48;

		for (let item of itemCoords) {
			if (itemSet[item.name]) {
				// console.log(itemSet, item.name, itemSet[item.name]);
				if (itemMenuCtx) {
					itemMenuCtx.strokeStyle = 'white';
					itemMenuCtx.lineWidth = 5;
					itemMenuCtx.beginPath();
					itemMenuCtx.rect(
						(item.x1 * 360.0) / size,
						(item.y1 * 360.0) / size,
						itemWidth,
						itemHeight
					);
					itemMenuCtx.stroke();
				}
			}
			else if (itemSetCount[item.name] > 0) {
				if (itemMenuCtx) {
					itemMenuCtx.font = 'bold 20px Arial';
					itemMenuCtx.fillStyle = 'white';
					itemMenuCtx.strokeStyle = 'white';
					itemMenuCtx.lineWidth = 5;
					let number = item.name === "bombs" ? itemSetCount[item.name] * 5 : item.name === "arrow capacity" ? itemSetCount[item.name] * 5 + 30  : itemSetCount[item.name];
					itemMenuCtx.beginPath();
					itemMenuCtx.rect(
						(item.x1 * 360.0) / size,
						(item.y1 * 360.0) / size,
						itemWidth,
						itemHeight
					);
					itemMenuCtx.fillText(
						number,
						((item.x1 + 15) * 360.0) / size,
						((item.y1 + 32) * 360.0) / size,
					);
					itemMenuCtx.stroke();
				}
			}
		}
	};
</script>

<div>
	<img
		id="entranceSpanImage"
		style="width: {size}px;"
		bind:this={itemMenuImg}
		alt="chunk"
		src={items}
	/>
	<canvas
		id="itemCanvas"
		onclick={(e) => {
			handleClick(e);
		}}
		bind:this={itemCanvas}
		width={360}
		height={360}
		style="width:{size}px;"
	></canvas>
</div>

<style>
	img,
	canvas {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
