<script lang="ts">
	import world from '$lib/overworld.png';
	import entrances from '$lib/sprites/entrances.png';
	import itemSprites from '$lib/sprites/itemSprites.png';
	import connectors from '$lib/sprites/connectors.png';
	import dungeons from '$lib/sprites/dungeons.png';
	import { onMount } from 'svelte';
	import ItemMenu from './itemMenu.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let overworldCanvas: HTMLCanvasElement | undefined = $state();
	let overworldImageCanvas: HTMLCanvasElement | undefined = $state();
	let connectorCanvas: HTMLCanvasElement | undefined = $state();
	let dungeonCanvas: HTMLCanvasElement | undefined = $state();
	let connectorImageCanvas: HTMLCanvasElement | undefined = $state();
	let dungeonImageCanvas: HTMLCanvasElement | undefined = $state();
	let overworldCtx: CanvasRenderingContext2D | null = $state(null);
	let overworldImageCtx: CanvasRenderingContext2D | null = $state(null);
	let connectorCtx: CanvasRenderingContext2D | null = $state(null);
	let dungeonCtx: CanvasRenderingContext2D | null = $state(null);
	let connectorImageCtx: CanvasRenderingContext2D | null = $state(null);
	let dungeonImageCtx: CanvasRenderingContext2D | null = $state(null);
	let overworld: HTMLImageElement | null = $state(null);
	let overworldImage: HTMLImageElement | null = $state(null);
	let connector: HTMLImageElement | null = $state(null);
	let dungeon: HTMLImageElement | null = $state(null);
	let connectorImage: HTMLImageElement | null = $state(null);
	let dungeonImage: HTMLImageElement | null = $state(null);
	let itemNames = $derived(data.itemNames);
	let inventory: { [key: string]: number } = $state({});
	let selectedPath: PathNew = $state([]);

	let checkpointE: number = 0;
	let showArrows = $state(false);
	// let destinationGuide: { [key: string]: Path[] } = $state({});
	// let routeArray: Path[] | undefined = $state();
	// let destinationGuide: { [key: string]: PathNew[] } = $state({});
	let doorsB: { [key: string]: Door } = $state({});
	// let routeArray: PathNew[] | undefined = $state();
	// let routeIndex: number = $state(0);

	const borderDefaultColor = '#000';

	const borderUnexploredExits = '#f19b2e';
	const borderSingleExitToElsewhereColor = '#985500';

	const borderUnexploredExitsConnector = '#c087ff';
	const borderColorConnected = '#3c007f';

	const borderUnexploredExitsConnectorDungeon = '#66a6fe';
	const borderColorConnectedDungeon = '#00357f';


	const borderUnreachableColor = '#ff0000';
	const borderHoveringColor = '#0000ff';

	let entranceSpan: HTMLSpanElement | undefined = $state();
	let connectorSpan: HTMLSpanElement | undefined = $state();
	let dungeonSpan: HTMLSpanElement | undefined = $state();
	let miniEntranceSpan: HTMLSpanElement | undefined = $state();
	let entranceSpanImage: HTMLImageElement | undefined = $state();
	let entranceSpanMiniImage: HTMLImageElement | undefined = $state();
	let selectedEntranceName = $state('');
	let selectedConnectorExitName = $state('');
	let selectedDungeonExitName = $state('');
	let entranceImages: string[] = $state([]);
	let itemSpriteMap: { [key: string]: string } = $state({});
	let itemImageMap: { [key: string]: HTMLImageElement } = $state({});
	let hoveredEntranceName: string = $state('');
	let canvasHeight = $derived(30 + (overworldImageCanvas ? overworldImageCanvas.clientHeight : 0));
	let hoveredExitName: string = $state('');
	let hoveredConnectedExitName: string = $state('');
	// let selectedEntrance = $derived(data.entranceCoords[hoveredEntranceName]);
	let entranceZoomSpanVisible = $state(false);
	let connectorExitIsHovered = $state(false);
	let dungeonExitIsHovered = $state(false);
	let entranceMiniZoomSpanVisible = $state(false);
	let selectingConnector = $state(false);
	let selectingDungeon = $state(false);
	let selectingDungeonComesFrom = $state(false);
	let selectingConnectorComesFrom = $state(false);
	let entranceZoomSpanCheckBox = $state(false);
	let isCrossed = $state(false);
	let canNavigateDarkness = $derived(
		inventory['dark room'] === 2 ||
			inventory['lamp'] === 1 ||
			(inventory['dark room'] === 1 && inventory['fire rod'] === 1)
	);

	let isDisplayingRoute = $state(true);

	let entranceZoomSpanGoesTo = $state('...');
	let searchBarText: string = $state('');
	let entranceHasSpecialComesFrom = $derived(
		hoveredEntranceName != '' && data.entranceCoords[hoveredEntranceName].specialComesFrom.size > 0
	);
	let entranceZoomSpanComesFrom = $derived(
		data.entranceCoords[hoveredEntranceName]
			? data.entranceCoords[hoveredEntranceName].specialComesFrom.values()
			: ['']
	);
	// 	// .reduce((prevVal, currentVal) => `${prevVal}, ${currentVal}`)
	// 	// : data.entranceCoords[hoveredEntranceName].comesFrom
	// );
	let entranceRequiredItems = $derived(
		data.entranceCoords[hoveredEntranceName]
			? Object.entries(data.entranceCoords[hoveredEntranceName].requires).filter((it) => it[1])
			: []
	);
	let entranceRequiredCountItems = $derived(
		data.entranceCoords[hoveredEntranceName]
			? Object.entries(data.entranceCoords[hoveredEntranceName].requiresCount).filter(
					(it) => it[1] > 0
				)
			: []
	);
	let selectedEntranceSelectedOption = $derived(
		data.entranceCoords[hoveredEntranceName]
			? data.entranceCoords[hoveredEntranceName].goesToSelectedOption
			: null
	);
	let spanTop = $state(0);
	let spanLeft = $state(0);
	let sizeSetting = $state(350);
	let sizeSettingMini = $state(200);
	let showGoToOptionButtons = $state(false);
	let showComeFromRadios = $state(false);
	let showItemMenu = $state(false);
	let selectedGoTo = $state('');
	let selectingExitInOverworld = $state(false);
	let fileInput: HTMLInputElement | undefined = $state();

	const changeArrows = () => {
		showArrows = !showArrows;
	};

	const downloadSaveFile = () => {
		const link = document.createElement('a');
		const saveData: SaveData = {
			inventory: JSON.parse(JSON.stringify(inventory)),
			isCrossed,
			entranceCoordsSaveData: Object.keys(data.entranceCoords).map((entranceName) => {
				let entrance = data.entranceCoords[entranceName];
				return {
					name: entranceName,
					containsUncollectedChecks: entrance.containsUncollectedChecks,
					goesTo: entrance.goesTo,
					goesToSelectedOption: entrance.goesToSelectedOption,
					requires: JSON.parse(JSON.stringify(entrance.requires)),
					requiresCount: JSON.parse(JSON.stringify(entrance.requiresCount)),
					specialComesFromAsArray: entrance.specialComesFrom.values().toArray()
				};
			}),
			connectorCoordsSaveData: Object.keys(data.connectorCoords).map((connectorName) => {
				let connector = data.connectorCoords[connectorName];
				return {
					name: connectorName,
					comesFrom: connector.comesFrom,
					goesTo: connector.goesTo
				};
			}),
			dungeonCoordsSaveData: Object.keys(data.dungeonCoords).map((dungeonName) => {
				let dungeon = data.dungeonCoords[dungeonName];
				return {
					name: dungeonName,
					comesFrom: dungeon.comesFrom,
					goesTo: dungeon.goesTo
				};
			})
		};
		const content = JSON.stringify(saveData);
		const file = new Blob([content], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = 'lttp entrance tracking save data.txt';
		link.click();
		URL.revokeObjectURL(link.href);
	};

	const loadSaveFile = () => {
		if (fileInput && fileInput.files) {
			const selectedFile = fileInput.files[0];
			const reader = new FileReader();
			reader.onload = (event) => {
				if (event && event.target && event.target.result) {
					const newData = JSON.parse(event.target.result.toString());
					// console.log(newData);
					inventory = newData.inventory;
					isCrossed = newData.isCrossed;
					for (let entranceSave of newData.entranceCoordsSaveData) {
						let entrance = data.entranceCoords[entranceSave.name];
						if (!entrance) continue;
						entrance.containsUncollectedChecks = entranceSave.containsUncollectedChecks;
						entrance.requires = entranceSave.requires;
						entrance.requiresCount = entranceSave.requiresCount;
						entrance.goesTo = entranceSave.goesTo;
						entrance.specialComesFrom = new Set(entranceSave.specialComesFromAsArray);
						entrance.goesToSelectedOption = entranceSave.goesToSelectedOption;
					}
					for (let connectorSave of newData.connectorCoordsSaveData) {
						let connector = data.connectorCoords[connectorSave.name];
						if (!connector) continue;
						connector.goesTo = connectorSave.goesTo;
						connector.comesFrom = connectorSave.comesFrom;
					}
					for (let dungeonSave of newData.dungeonCoordsSaveData) {
						let dungeon = data.dungeonCoords[dungeonSave.name];
						if (!dungeon) continue;
						dungeon.goesTo = dungeonSave.goesTo;
						dungeon.comesFrom = dungeonSave.comesFrom;
					}

					// let entranceData = Object.entries(data.entranceCoords);
					// let connectorData = Object.entries(data.connectorCoords);
					// let dungeonData = Object.entries(data.dungeonCoords);

					// for (let i = 0; i < entranceData.length; i++) {
					// 	let entrance = entranceData[i][1];
					// 	let entranceSave = newData.entranceCoordsSaveData[i];
					// 	if (!entrance) continue;
					// 	entrance.containsUncollectedChecks = entranceSave.containsUncollectedChecks;
					// 	entrance.requires = entranceSave.requires;
					// 	entrance.requiresCount = entranceSave.requiresCount;
					// 	entrance.goesTo = entranceSave.goesTo;
					// 	entrance.specialComesFrom = new Set(entranceSave.specialComesFromAsArray);
					// 	entrance.goesToSelectedOption = entranceSave.goesToSelectedOption;
					// }
					// for (let i = 0; i < connectorData.length; i++) {
					// 	let connector = connectorData[i][1];
					// 	let connectorSave = newData.connectorCoordsSaveData[i];
					// 	if (!connector) continue;
					// 	connector.goesTo = connectorSave.goesTo;
					// 	connector.comesFrom = connectorSave.comesFrom;
					// }
					// for (let i = 0; i < dungeonData.length; i++) {
					// 	let dungeon = dungeonData[i][1];
					// 	let dungeonSave = newData.dungeonCoordsSaveData[i];
					// 	if (!connector) continue;
					// 	dungeon.goesTo = dungeonSave.goesTo;
					// 	dungeon.comesFrom = dungeonSave.comesFrom;
					// }

					// for (let entranceSave of newData.entranceCoordsSaveData) {
					// 	let entrance = data.entranceCoords[entranceSave.name];
					// 	if (!entrance) continue;
					// 	entrance.containsUncollectedChecks = entranceSave.containsUncollectedChecks;
					// 	entrance.requires = entranceSave.requires;
					// 	entrance.requiresCount = entranceSave.requiresCount;
					// 	entrance.goesTo = entranceSave.goesTo;
					// 	entrance.specialComesFrom = new Set(entranceSave.specialComesFromAsArray);
					// 	entrance.goesToSelectedOption = entranceSave.goesToSelectedOption;
					// }
					// for (let connectorSave of newData.connectorCoordsSaveData) {
					// 	let connector = data.connectorCoords[connectorSave.name];
					// 	if (!connector) continue;
					// 	connector.goesTo = connectorSave.goesTo;
					// 	connector.comesFrom = connectorSave.comesFrom;
					// }
					// for (let dungeonSave of newData.dungeonCoordsSaveData) {
					// 	let dungeon = data.dungeonCoords[dungeonSave.name];
					// 	if (!connector) continue;
					// 	dungeon.goesTo = dungeonSave.goesTo;
					// 	dungeon.comesFrom = dungeonSave.comesFrom;
					// }

					// for (let i = 0; i < data.entranceCoords.length; i++) {
					// 	let newDataEntranceCoords = newData.entranceCoords.find((it: { name: string; }) => it.name === data.entranceCoords[i].name)
					// 	if (newDataEntranceCoords) {
					// 		data.entranceCoords[i].containsUncollectedChecks = newDataEntranceCoords.containsUncollectedChecks || data.entranceCoords[i].containsUncollectedChecks;
					// 		data.entranceCoords[i].requires = newDataEntranceCoords.requires || data.entranceCoords[i].requires;
					// 		data.entranceCoords[i].requiresCount = newDataEntranceCoords.requiresCount || data.entranceCoords[i].requiresCount;
					// 		data.entranceCoords[i].goesTo = newDataEntranceCoords.goesTo || data.entranceCoords[i].goesTo;
					// 		data.entranceCoords[i].specialComesFrom = new Set(newDataEntranceCoords.specialComesFromAsArray) || data.entranceCoords[i].specialComesFrom;
					// 		data.entranceCoords[i].goesToSelectedOption = newDataEntranceCoords.goesToSelectedOption || data.entranceCoords[i].goesToSelectedOption;
					// 	}
					// }
					// for (let i = 0; i < data.connectorCoords.length; i++) {
					// 	let newDataConnectorCoords = newData.connectorCoords.find((it: { name: string; }) => it.name === data.connectorCoords[i].name)
					// 	if (newDataConnectorCoords) {
					// 		data.connectorCoords[i].goesTo = newDataConnectorCoords.goesTo || data.connectorCoords[i].goesTo;
					// 		data.connectorCoords[i].comesFrom = newDataConnectorCoords.comesFrom || data.connectorCoords[i].comesFrom;
					// 	}
					// }
					// for (let i = 0; i < data.dungeonCoords.length; i++) {
					// 	let newDataConnectorCoords = newData.dungeonCoords.find((it: { name: string; }) => it.name === data.connectorCoords[i].name)
					// 	if (newDataConnectorCoords) {
					// 		data.dungeonCoords[i].goesTo = newData.dungeonCoords[i].goesTo || data.dungeonCoords[i].goesTo;
					// 		data.dungeonCoords[i].comesFrom = newData.dungeonCoords[i].comesFrom || data.dungeonCoords[i].comesFrom;
					// 	}
					// }
				}
				recalculateRoutes();
				// updateUI();
				// redrawEntrances();
			};
			reader.readAsText(selectedFile);
		}
	};

	const selectGoToOption = (option: string) => {
		// goToOptionMap[option]();
		if (option === goToOptions[0]) {
			selectingExitInOverworld = true;
			entranceZoomSpanVisible = false;
		} else if (option === goToOptions[1]) {
			selectingDungeon = true;
			entranceZoomSpanVisible = false;
		} else if (option === goToOptions[2]) {
			selectingConnector = true;
			entranceZoomSpanVisible = false;
		}
	};
	const selectComeFromOption = (option: string) => {
		// goToOptionMap[option]();
		if (option === comeFromOptions[1]) {
			selectingConnectorComesFrom = true;
			entranceZoomSpanVisible = false;
		} else if (option === comeFromOptions[0]) {
			selectingDungeonComesFrom = true;
			entranceZoomSpanVisible = false;
		}
	};

	const finalizeConnectorExitSelection = () => {
		if (selectingConnector) {
			let connectorExit = data.connectorCoords[hoveredConnectedExitName];
			let overworldEntrance = data.entranceCoords[hoveredEntranceName];
			overworldEntrance.goesTo = hoveredConnectedExitName;
			connectorExit.comesFrom = hoveredEntranceName;
			selectingConnector = false;
		}
		if (selectingConnectorComesFrom || isCrossed) {
			let connectorExit = data.connectorCoords[hoveredConnectedExitName];
			let overworldEntrance = data.entranceCoords[hoveredEntranceName];
			for (let entranceName in data.entranceCoords) {
				let entrance = data.entranceCoords[entranceName];
				// if (entrance.specialComesFrom.has(hoveredConnectedExitName)) {
				entrance.specialComesFrom.delete(hoveredConnectedExitName);
				// }
			}
			overworldEntrance.specialComesFrom.add(hoveredConnectedExitName);
			connectorExit.goesTo = hoveredEntranceName;
			selectingConnectorComesFrom = false;
		}
		connectorExitIsHovered = false;
		recalculateRoutes();
		updateUI();
		redrawEntrances();
	};

	const finalizeDungeonExitSelection = () => {
		if (selectingDungeon) {
			let dungeonExit = data.dungeonCoords[hoveredConnectedExitName];
			let overworldEntrance = data.entranceCoords[hoveredEntranceName];
			overworldEntrance.goesTo = hoveredConnectedExitName;
			dungeonExit.comesFrom = hoveredEntranceName;
			selectingDungeon = false;
		}
		if (selectingDungeonComesFrom || isCrossed) {
			let dungeonExit = data.dungeonCoords[hoveredConnectedExitName];
			let overworldEntrance = data.entranceCoords[hoveredEntranceName];
			for (let entranceName in data.entranceCoords) {
				let entrance = data.entranceCoords[entranceName];
				// if (entrance.specialComesFrom.has(dungeonExit.name)) {
				entrance.specialComesFrom.delete(hoveredConnectedExitName);
				// }
			}
			overworldEntrance.specialComesFrom.add(hoveredConnectedExitName);
			dungeonExit.goesTo = hoveredEntranceName;
			selectingDungeonComesFrom = false;
		}
		dungeonExitIsHovered = false;
		recalculateRoutes();
		updateUI();
		redrawEntrances();
	};

	const finalizeExitSelection = () => {
		let entrance = data.entranceCoords[hoveredEntranceName];
		if (entrance.goesTo !== '' && entrance.goesTo !== '...') {
			let previousExit = data.entranceCoords[entrance.goesTo];
			previousExit?.specialComesFrom.delete(hoveredEntranceName);
		}
		entrance.goesTo = selectedEntranceName;
		data.entranceCoords[hoveredExitName].specialComesFrom.add(hoveredEntranceName);
		selectingExitInOverworld = false;
		entranceMiniZoomSpanVisible = false;
		recalculateRoutes();
		updateUI();
		redrawEntrances();
	};

	const setGoesToSelf = () => {
		let entrance = data.entranceCoords[selectedEntranceName];
		if (entrance.goesTo !== '' && entrance.goesTo !== '...') {
			let previousExit = data.entranceCoords[entrance.goesTo];
			previousExit?.specialComesFrom.delete(selectedEntranceName);
		}
		entrance.goesTo = selectedEntranceName;
		data.entranceCoords[hoveredExitName].specialComesFrom.add(selectedEntranceName);
		selectingExitInOverworld = false;
		entranceMiniZoomSpanVisible = false;
		recalculateRoutes();
		updateUI();
		redrawEntrances();
	}

	const handleClick = () => {
		if (entranceMiniZoomSpanVisible) {
			finalizeExitSelection();
		}
	};

	const handleClickConnector = () => {
		if (connectorExitIsHovered) {
			finalizeConnectorExitSelection();
		}
	};

	const handleClickDungeon = () => {
		if (dungeonExitIsHovered) {
			finalizeDungeonExitSelection();
		}
	};

	const clickGoToOnMap = () => {
		const entrance = data.entranceCoords[hoveredEntranceName];
		if (entrance.goesToSelectedOption === goToOptions[0]) {
			entrance.goesToSelectedOption = null;
		} else {
			data.entranceCoords[hoveredEntranceName].goesToSelectedOption = goToOptions[0];
		}
		updateUI();
	};
	const clickDungeon = () => {
		const entrance = data.entranceCoords[hoveredEntranceName];
		if (entrance.goesToSelectedOption === goToOptions[1]) {
			entrance.goesToSelectedOption = null;
		} else {
			data.entranceCoords[hoveredEntranceName].goesToSelectedOption = goToOptions[1];
		}
		updateUI();
	};
	const clickConnector = () => {
		const entrance = data.entranceCoords[hoveredEntranceName];
		if (entrance.goesToSelectedOption === goToOptions[2]) {
			entrance.goesToSelectedOption = null;
		} else {
			data.entranceCoords[hoveredEntranceName].goesToSelectedOption = goToOptions[2];
		}
		updateUI();
	};

	const goToOptionMap: { [key: string]: () => void } = {
		'an area with a single exit': clickGoToOnMap,
		'a dungeon': clickDungeon,
		'a connector': clickConnector
	};

	const goToOptions = Object.keys(goToOptionMap);
	const comeFromOptions = ['a dungeon', 'a connector'];

	const updateUI = () => {
		let temp = hoveredEntranceName;
		hoveredEntranceName = '';
		hoveredEntranceName = temp;
	};

	const addOrRemoveItemFromSet = (itemName: string) => {
		let entrance = data.entranceCoords[hoveredEntranceName];
		if (!entrance) {
			return;
		}
		if (itemName === 'bombs' || itemName === 'arrow capacity' || itemName === 'health capacity') {
			entrance.requiresCount[itemName] =
				(entrance.requiresCount[itemName] + 1) % (data.maxInventory[itemName] + 1);
		} else if (entrance.requires[itemName]) {
			entrance.requires[itemName] = false;
		} else {
			entrance.requires[itemName] = true;
		}
		updateUI();
		redrawEntrances();
	};

	const redrawEntrances = () => {
		if (overworldCanvas) {
			overworldCtx?.clearRect(0, 0, overworldCanvas.width, overworldCanvas.height);
		}
		const arrowsToDraw: Entrance[][] = [];
		const dungeonsToLabel: Entrance[] = [];
		const spawnsToLabel: { entrance: Entrance; label: string }[] = [];
		for (let entranceName in data.entranceCoords) {
			let entranceCoord = data.entranceCoords[entranceName];
			let borderColor = borderDefaultColor;

			// add spawn label later:

			// if (entranceCoord.specialComesFrom.has('Links House')) {
			// 	spawnsToLabel.push({entrance: entranceCoord, label: "LH"})
			// } else if (entranceCoord.specialComesFrom.has('Old Man House Exit (bottom)')) {
			// 	spawnsToLabel.push({entrance: entranceCoord, label: "OMH"})
			// } else if (entranceCoord.specialComesFrom.has('Sanctuary')) {
			// 	spawnsToLabel.push({entrance: entranceCoord, label: "S"})
			// }

			// draw arrows between areas and label dungeons:

			if (entranceCoord.goesToSelectedOption === goToOptions[0] && entranceCoord.goesTo !== '...') {
				const otherEntrance = data.entranceCoords[entranceCoord.goesTo];
				if (
					otherEntrance &&
					(showArrows ||
						selectedEntranceName === entranceName
						//  ||
						// entranceCoord.goesTo === selectedEntranceName
					)
				) {
					arrowsToDraw.push([entranceCoord, otherEntrance]);
				}
				if (otherEntrance && entranceName !== entranceCoord.goesTo) {
					borderColor = borderSingleExitToElsewhereColor;
				}
			} else if (
				entranceCoord.goesToSelectedOption === goToOptions[2] &&
				entranceCoord.goesTo !== '...'
			) {
				const connectorExit = data.connectorCoords[entranceCoord.goesTo];
				if (connectorExit) {
					borderColor = borderColorConnected;
					for (let exitName in connectorExit.reachableExits) {
						const exit = data.connectorCoords[exitName];
						if (exit) {
							if (exit.goesTo && exit.goesTo !== '' && exit.goesTo !== '...') {
								const otherEntrance = data.entranceCoords[exit.goesTo];
								if (
									otherEntrance &&
									(showArrows ||
										selectedEntranceName === entranceName
										//  ||
										// exit.goesTo === selectedEntranceName
									)
								) {
									arrowsToDraw.push([entranceCoord, otherEntrance]);
								}
							} else {
								borderColor = borderUnexploredExitsConnector;
							}
						}
					}
				}
			} else if (
				entranceCoord.goesToSelectedOption === goToOptions[1] &&
				entranceCoord.goesTo !== '...'
			) {
				const dungeonExit = data.dungeonCoords[entranceCoord.goesTo];
				if (dungeonExit) {
					borderColor = borderColorConnectedDungeon;
					dungeonsToLabel.push(entranceCoord);
					for (let exitName in dungeonExit.reachableExits) {
						const exit = data.dungeonCoords[exitName];
						if (exit) {
							if (exit.goesTo && exit.goesTo !== '' && exit.goesTo !== '...') {
								const otherEntrance = data.entranceCoords[exit.goesTo];
								if (
									otherEntrance &&
									(showArrows ||
										selectedEntranceName === entranceName
										//  ||
										// exit.goesTo === selectedEntranceName
									)
								) {
									arrowsToDraw.push([entranceCoord, otherEntrance]);
								}
							} else {
								borderColor = borderUnexploredExitsConnectorDungeon;
							}
						}
					}
				}
			} else {
				borderColor = borderUnexploredExits;
			}

			if (
				!doorsB[entranceName] ||
				!doorsB[entranceName].enterable ||
				doorsB[entranceName].pathFromSpawn.length === 0
			) {
				borderColor = borderUnreachableColor;
			}
			if (entranceZoomSpanVisible && entranceName === selectedEntranceName) {
				borderColor = borderHoveringColor;
			}

			// get required items:
			let itemBoolRequirements: string[] = Object.entries(entranceCoord.requires)
				.filter((it) => it[1])
				.map((it) => it[0]);
			let itemCountRequirements: string[] = Object.entries(entranceCoord.requiresCount)
				.filter((it) => it[1] > 0)
				.map((it) => it[0]);

			let itemRequirements = [...itemBoolRequirements, ...itemCountRequirements];

			//draw entrances:
			// if searching, don't draw entrances whose names don't match
			if (
				searchBarText.length === 0 ||
				entranceName.toLowerCase().indexOf(searchBarText.toLowerCase()) > -1
			) {
				let anyMatch = false;
				let allMatch = true;
				for (let req of itemCountRequirements) {
					if (inventory[req] < entranceCoord.requiresCount[req]) {
						allMatch = false;
					} else {
						anyMatch = true;
					}
				}
				for (let req of itemBoolRequirements) {
					let specialFailCase = req === 'special crystals' && inventory['special crystals'] < 2;
					let specialPassCase =
						req === 'small key' ||
						req === 'boss key' ||
						(req === 'progressive shield~3' && inventory['progressive shield'] === 3) ||
						(req === 'progressive glove~2' && inventory['progressive glove'] === 2);
					if (specialPassCase || (inventory[req] >= 1 && !specialFailCase)) {
						anyMatch = true;
					} else {
						allMatch = false;
					}
				}
				let squareColor = allMatch ? '#00ff00' : anyMatch ? '#0000ff' : borderUnreachableColor;
				if (!entranceCoord.containsUncollectedChecks) {
					drawBorderedSquare(borderColor, '#ffffff', entranceCoord);
				} else if (itemRequirements.length === 1) {
					drawBorderedSquare(borderColor, squareColor, entranceCoord);
					drawImage(entranceCoord, itemImageMap[itemRequirements[0]]);
				} else if (itemRequirements.length < 5) {
					drawBorderedSquare(borderColor, squareColor, entranceCoord);
					for (let i = 0; i < itemRequirements.length; i++) {
						drawSmallImage(entranceCoord, itemImageMap[itemRequirements[i]], i);
					}
				} else if (itemRequirements.length > 4) {
					drawRainbowSquare(borderColor, entranceCoord);
				} else {
					drawBorderedSquare(borderColor, squareColor, entranceCoord);
				}
			} else {
				drawEmptyBorderedSquare(borderDefaultColor, entranceCoord);
			}
		}

		if (overworldCtx) {
			overworldCtx.shadowColor = 'black';
			for (let entrancePair of arrowsToDraw) {
				// if (!isDisplayingRoute)
					drawOneWayArrow(entrancePair[0].coords, entrancePair[1].coords, LineStyle.STRAIGHT);
			}

			overworldCtx.font = 'bold 60px Arial';
			overworldCtx.fillStyle = '#FFF';
			overworldCtx.strokeStyle = '#000';
			overworldCtx.lineWidth = 4;
			for (let entrance of dungeonsToLabel) {
				for (let dungeonName in data.dungeonCodes) {
					if (entrance.goesTo.indexOf(dungeonName) > -1) {
						overworldCtx.fillText(
							data.dungeonCodes[dungeonName],
							entrance.coords[0] - 36,
							entrance.coords[1] + 78
						);
						overworldCtx.strokeText(
							data.dungeonCodes[dungeonName],
							entrance.coords[0] - 36,
							entrance.coords[1] + 78
						);
						break;
					}
				}
			}
			overworldCtx.fillStyle = '#0F0';
			overworldCtx.strokeStyle = '#F0F';
			for (let entrance of spawnsToLabel) {
				overworldCtx.fillText(
					entrance.label,
					entrance.entrance.coords[0] - 36,
					entrance.entrance.coords[1] + 78
				);
				overworldCtx.strokeText(
					entrance.label,
					entrance.entrance.coords[0] - 36,
					entrance.entrance.coords[1] + 78
				);
			}
			repaintRoute();
			// paintRoute();
		}
	};

	const drawOneWayArrow = (
		entranceDataTo: number[],
		entranceDataFrom: number[],
		lineStyle: string,
	) => {
		if (overworldCtx) {
			overworldCtx.shadowBlur = 8;
			if (lineStyle === LineStyle.DASHED) {
				overworldCtx.setLineDash([20, 15]);
			} else if (lineStyle === LineStyle.DOTTED) {
				overworldCtx.setLineDash([5, 8]);
			} else {
				overworldCtx.setLineDash([]);
			}
			const radius = 40;
			const arrowHeadLength = 40;
			const [a, b] = entranceDataTo;
			overworldCtx.strokeStyle =
				'#' + (Math.pow(a * b, 2) % 16777215).toString(16).padStart(6, '0');
			overworldCtx.lineWidth = 4;
			const [c, d] = entranceDataFrom;

			const distanceBetweenEntrances = Math.sqrt(Math.pow(d - b, 2) + Math.pow(c - a, 2));
			if (distanceBetweenEntrances < radius) {
				//remove temporarily
				drawVeryCircularArrow(overworldCtx, a, b, c, d, radius);
			} else if (distanceBetweenEntrances < 3 * radius) {
				drawCircularArrow(overworldCtx, a, b, c, d);
			} else {
				const [newX1, newY1, newX2, newY2] = shortenBothSidesOfCoords(a, b, c, d, radius);
				const opp = d - b;
				const adj = c - a;
				const angle = Math.atan2(opp, adj);
				overworldCtx.beginPath();
				const arrowHeadAngle1 = angle + Math.PI * 1.2;
				const arrowHeadAngle2 = angle - Math.PI * 1.2;
				const drawArrowHead = (context: CanvasRenderingContext2D, angle: number) => {
					const height = Math.sin(angle) * arrowHeadLength;
					const width = Math.cos(angle) * arrowHeadLength;
					// context.strokeStyle = '#000';
					// context.beginPath();
					context.moveTo(newX1 + width, newY1 + height);
					context.lineTo(newX1, newY1);
					// context.stroke();
				};
				drawArrowHead(overworldCtx, arrowHeadAngle1);
				drawArrowHead(overworldCtx, arrowHeadAngle2);
				// overworldCtx.strokeStyle = '#000';
				// overworldCtx.lineWidth = 5;
				overworldCtx.moveTo(newX1, newY1);
				overworldCtx.lineTo(newX2, newY2);
				shadowStroke(overworldCtx);
			}
			overworldCtx.setLineDash([]);
			overworldCtx.shadowBlur = 0;
			overworldCtx.shadowOffsetX = 0;
			overworldCtx.shadowOffsetY = 0;
		}
	};

	// const drawOneWayArrow = (
	// 	entranceDataTo: Entrance,
	// 	entranceDataFrom: Entrance,
	// 	dashed?: boolean
	// ) => {
	// 	if (overworldCtx) {
	// 		overworldCtx.shadowBlur = 8;
	// 		if (dashed) {
	// 			overworldCtx.setLineDash([10, 10]);
	// 		}
	// 		const radius = 40;
	// 		const arrowHeadLength = 40;
	// 		const [a, b] = entranceDataTo.coords;
	// 		overworldCtx.strokeStyle =
	// 			'#' + (Math.pow(a * b, 2) % 16777215).toString(16).padStart(6, '0');
	// 		overworldCtx.lineWidth = 4;
	// 		const [c, d] = entranceDataFrom.coords;

	// 		const distanceBetweenEntrances = Math.sqrt(Math.pow(d - b, 2) + Math.pow(c - a, 2));
	// 		if (distanceBetweenEntrances < radius) {
	// 			//remove temporarily
	// 			drawVeryCircularArrow(overworldCtx, a, b, c, d, radius);
	// 		} else if (distanceBetweenEntrances < 3 * radius) {
	// 			drawCircularArrow(overworldCtx, a, b, c, d);
	// 		} else {
	// 			const [newX1, newY1, newX2, newY2] = shortenBothSidesOfCoords(a, b, c, d, radius);
	// 			const opp = d - b;
	// 			const adj = c - a;
	// 			const angle = Math.atan2(opp, adj);
	// 			overworldCtx.beginPath();
	// 			const arrowHeadAngle1 = angle + Math.PI * 1.2;
	// 			const arrowHeadAngle2 = angle - Math.PI * 1.2;
	// 			const drawArrowHead = (context: CanvasRenderingContext2D, angle: number) => {
	// 				const height = Math.sin(angle) * arrowHeadLength;
	// 				const width = Math.cos(angle) * arrowHeadLength;
	// 				// context.strokeStyle = '#000';
	// 				// context.beginPath();
	// 				context.moveTo(newX1 + width, newY1 + height);
	// 				context.lineTo(newX1, newY1);
	// 				// context.stroke();
	// 			};
	// 			drawArrowHead(overworldCtx, arrowHeadAngle1);
	// 			drawArrowHead(overworldCtx, arrowHeadAngle2);
	// 			// overworldCtx.strokeStyle = '#000';
	// 			// overworldCtx.lineWidth = 5;
	// 			overworldCtx.moveTo(newX1, newY1);
	// 			overworldCtx.lineTo(newX2, newY2);
	// 			shadowStroke(overworldCtx);
	// 		}
	// 		overworldCtx.setLineDash([]);
	// 		overworldCtx.shadowBlur = 0;
	// 		overworldCtx.shadowOffsetX = 0;
	// 		overworldCtx.shadowOffsetY = 0;
	// 	}
	// };

	const shadowStroke = (context: CanvasRenderingContext2D) => {
		context.shadowOffsetX = 2;
		context.shadowOffsetY = 2;
		context.stroke();
		context.shadowOffsetX = -2;
		context.shadowOffsetY = 2;
		context.stroke();
		context.shadowOffsetX = 2;
		context.shadowOffsetY = -2;
		context.stroke();
		context.shadowOffsetX = -2;
		context.shadowOffsetY = -2;
		context.stroke();
	};

	const drawVeryCircularArrow = (
		context: CanvasRenderingContext2D,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		size: number
	) => {
		drawThreeQuarterCircle(context, x1 - 32, y1, x2, y2 - 32);

		// x1 = x1 - 1
		// y1 = y1 - 1
		// const midPointX = (x1 + x2) / 2;
		// const midPointY = (y1 + y2) / 2;
		// const angle = Math.atan2(y2 - y1, x2 - x1);
		// const perpendicularBisectorAngle = Math.max(angle - Math.PI / 2, angle + Math.PI / 2);
		// const circleX = midPointX + size * Math.cos(perpendicularBisectorAngle);
		// const circleY = midPointY + size * Math.sin(perpendicularBisectorAngle);
		// const circleRadius = Math.sqrt(Math.pow(circleX - x1, 2) + Math.pow(circleY - y1, 2));
		// const theta1 = Math.atan2(y1 - circleY, x1 - circleX);
		// const theta2 = Math.atan2(y2 - circleY, x2 - circleX);

		// context.beginPath();
		// context.strokeStyle = 'pink';
		// context.lineWidth = 5;
		// context.arc(circleX, circleY, circleRadius, theta2, theta1);
		// context.stroke();
	};

	const drawThreeQuarterCircle = (
		context: CanvasRenderingContext2D,
		x1: number,
		y1: number,
		x2: number,
		y2: number
	) => {
		// context.strokeStyle = 'green';
		// context.lineWidth = 5;
		context.beginPath();
		context.arc(x1, y2, 32, 0, Math.PI / 2, true);
		context.moveTo(x2, y2);
		context.lineTo(x2 - 16, y2 - 16);
		context.moveTo(x2, y2);
		context.lineTo(x2 + 16, y2 - 16);
		shadowStroke(context);
	};

	const drawCircularArrow = (
		context: CanvasRenderingContext2D,
		x1: number,
		y1: number,
		x2: number,
		y2: number
	) => {
		if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
			y1 = y1 - 32;
			y2 = y2 - 32;
			const circleX = (x1 + x2) / 2;
			const circleY = Math.min(y1, y2);
			const radius = Math.abs(circleX - x2);
			const [a, b, d] = y2 < y1 ? [x1, y1, y2] : [x2, y2, y1];
			// context.strokeStyle = 'green';
			// context.lineWidth = 5;
			context.beginPath();
			context.arc(circleX, circleY, radius, Math.PI, 0);
			context.moveTo(a, b);
			context.lineTo(a, d);
			context.moveTo(x2, y2);
			context.lineTo(x2 - 16, y2 - 16);
			context.moveTo(x2, y2);
			context.lineTo(x2 + 16, y2 - 16);
			shadowStroke(context);
		} else {
			x1 = x1 - 32;
			x2 = x2 - 32;
			const circleX = Math.min(x1, x2);
			const circleY = (y1 + y2) / 2;
			const radius = Math.abs(circleY - y2);
			const [a, b, c] = x2 < x1 ? [x1, y1, x2] : [x2, y2, x1];
			// context.strokeStyle = 'green';
			// context.lineWidth = 5;
			context.beginPath();
			context.arc(circleX, circleY, radius, Math.PI / 2, (3 * Math.PI) / 2);
			context.moveTo(a, b);
			context.lineTo(c, b);
			context.moveTo(x2, y2);
			context.lineTo(x2 - 16, y2 - 16);
			context.moveTo(x2, y2);
			context.lineTo(x2 - 16, y2 + 16);
			shadowStroke(context);
		}
	};

	const shortenBothSidesOfCoords = (
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		shortenDistance: number
	) => {
		const [a, b] = oneWayShorten(x1, y1, x2, y2, shortenDistance);
		const [c, d] = oneWayShorten(x2, y2, x1, y1, shortenDistance);
		return [a, b, c, d];
	};

	const oneWayShorten = (a: number, b: number, c: number, d: number, shortenDistance: number) => {
		const distanceBetweenEntrances = Math.sqrt(Math.pow(d - b, 2) + Math.pow(c - a, 2));
		const correctDistance = distanceBetweenEntrances - shortenDistance;
		const ratio = correctDistance / distanceBetweenEntrances;
		const x1 = a + (c - a) * ratio;
		const y1 = b + (d - b) * ratio;
		return [x1, y1];
	};

	const clearRect = (entranceData: Entrance) => {
		overworldCtx?.clearRect(entranceData.coords[0] - 24, entranceData.coords[1] - 25, 48, 48);
	};

	const drawImage = (entranceData: Entrance, image: HTMLImageElement) => {
		if (overworldCtx && image) {
			overworldCtx?.drawImage(
				image,
				entranceData.coords[0] - 18,
				entranceData.coords[1] - 18,
				36,
				36
			);
		}
	};

	const drawSmallImage = (entranceData: Entrance, image: HTMLImageElement, placement: number) => {
		overworldCtx?.drawImage(
			image,
			entranceData.coords[0] + (placement % 2) * -18,
			entranceData.coords[1] + Math.floor(placement / 2) * -18,
			18,
			18
		);
	};

	const drawEmptyBorderedSquare = (color1: string, entranceData: Entrance) => {
		if (overworldCtx) {
			overworldCtx.strokeStyle = color1;
			overworldCtx.lineWidth = 7;
			overworldCtx.beginPath();
			overworldCtx.rect(entranceData.coords[0] - 20, entranceData.coords[1] - 20, 40, 40);
			overworldCtx.stroke();
		}
	};

	const drawBorderedSquare = (color1: string, color2: string, entranceData: Entrance) => {
		if (overworldCtx) {
			// overworldCtx.fillStyle = color2;
			// overworldCtx.fillRect(entranceData.coords[0] - 33, entranceData.coords[1] - 33, 66, 66);
			// if (
			// 	!entranceZoomSpanVisible ||
			// 	hoveredEntranceIndex < 1 ||
			// 	entranceData.name != selectedEntrance.name
			// ) {
			overworldCtx.fillStyle = color1;
			// } else {
			// 	overworldCtx.fillStyle = '#ff0000';
			// }
			overworldCtx.fillRect(entranceData.coords[0] - 32, entranceData.coords[1] - 32, 64, 64);
			overworldCtx.fillStyle = color2;
			overworldCtx.fillRect(entranceData.coords[0] - 18, entranceData.coords[1] - 18, 36, 36);
		}
	};

	// $inspect(selectedEntrance)

	const drawRainbowSquare = (color1: string, entranceData: Entrance) => {
		if (overworldCtx) {
			overworldCtx.fillStyle = color1;
			overworldCtx.fillRect(entranceData.coords[0] - 32, entranceData.coords[1] - 32, 64, 64);

			let squareSize = 18;
			overworldCtx.fillStyle = 'red';
			overworldCtx.fillRect(
				entranceData.coords[0] - squareSize,
				entranceData.coords[1] - squareSize,
				squareSize * 2,
				squareSize * 2
			);
			squareSize -= 3;
			overworldCtx.fillStyle = 'orange';
			overworldCtx.fillRect(
				entranceData.coords[0] - squareSize,
				entranceData.coords[1] - squareSize,
				squareSize * 2,
				squareSize * 2
			);
			squareSize -= 3;
			overworldCtx.fillStyle = 'yellow';
			overworldCtx.fillRect(
				entranceData.coords[0] - squareSize,
				entranceData.coords[1] - squareSize,
				squareSize * 2,
				squareSize * 2
			);
			squareSize -= 3;
			overworldCtx.fillStyle = 'green';
			overworldCtx.fillRect(
				entranceData.coords[0] - squareSize,
				entranceData.coords[1] - squareSize,
				squareSize * 2,
				squareSize * 2
			);
			squareSize -= 3;
			overworldCtx.fillStyle = 'blue';
			overworldCtx.fillRect(
				entranceData.coords[0] - squareSize,
				entranceData.coords[1] - squareSize,
				squareSize * 2,
				squareSize * 2
			);
			squareSize -= 3;
			overworldCtx.fillStyle = 'purple';
			overworldCtx.fillRect(
				entranceData.coords[0] - squareSize,
				entranceData.coords[1] - squareSize,
				squareSize * 2,
				squareSize * 2
			);
		}
	};

	const requiresButtonPress = () => {
		showItemMenu = true;
	};

	const doneButtonPress = () => {
		showItemMenu = false;
	};

	const resetItems = () => {
		let entranceCoord = data.entranceCoords[hoveredEntranceName];
		for (let itemName in entranceCoord.requires) {
			entranceCoord.requires[itemName] = false;
		}
		for (let itemName in entranceCoord.requiresCount) {
			entranceCoord.requiresCount[itemName] = 0;
		}
		updateUI();
		redrawEntrances();
	};

	const goToClick = () => {
		showGoToOptionButtons = true;
		// let entrance = data.entranceCoords[selectedEntranceName];
	};

	const comeFromClick = () => {};

	$effect(() => {
		// console.log('in effect:', $effect.tracking()); // true
		if (entranceZoomSpanVisible) {
			if (hoveredEntranceName != '') {
				data.entranceCoords[selectedEntranceName].containsUncollectedChecks =
					entranceZoomSpanCheckBox;
				redrawEntrances();
			}
		} else {
			redrawEntrances();
		}
	});

	// type Entrance = {
	// 	name: string;
	// 	image: string;
	// 	goesTo: string;
	// 	requires: { [key: string]: boolean };
	// 	containsUncollectedChecks: boolean;
	// 	coords: number[];
	// };

	type SaveData = {
		inventory: any;
		isCrossed: boolean;
		entranceCoordsSaveData: {
			containsUncollectedChecks: boolean;
			goesTo: string;
			goesToSelectedOption: string | null;
			requires: any;
			requiresCount: any;
			specialComesFromAsArray: string[];
		}[];
		connectorCoordsSaveData: {
			comesFrom: string;
			goesTo: string | null;
		}[];
		dungeonCoordsSaveData: {
			comesFrom: string;
			goesTo: string | null;
		}[];
	};

	type Entrance = {
		containsUncollectedChecks: boolean;
		image: string;
		requires: { [key: string]: boolean };
		goesTo: string;
		specialComesFrom: Set<string>;
		goesToSelectedOption: string | null;
		coords: number[];
	};

	type Connector = {
		// name: string;
		reachableExits: { [key: string]: string[] };
		comesFrom: string;
		goesTo: string | null;
		coords: number[];
	};

	// let data.entranceCoords: Entrance[];

	onMount(() => {
		if (Object.keys(inventory).length === 0) {
			inventory = JSON.parse(JSON.stringify(data.maxInventory));
			for (let item in inventory) {
				inventory[item] = 0;
			}
		}

		let spawnEntrance = data.entranceCoords['Links House'];
		let connectorExit = data.connectorCoords['Links House Exit'];
		if (spawnEntrance && connectorExit) {
			spawnEntrance.goesToSelectedOption = goToOptions[0];
			spawnEntrance.specialComesFrom.add('Links House Exit');
			spawnEntrance.goesTo = 'Links House';
			connectorExit.goesTo = 'Links House';
		}

		const overworldEntrances = new Image();
		overworldEntrances.src = entrances;
		overworldEntrances.addEventListener('load', () =>
			splitImage(overworldEntrances, entranceImages)
		);

		const itemSpritesImage = new Image();
		itemSpritesImage.src = itemSprites;
		itemSpritesImage.addEventListener('load', () => splitSprites(itemSpritesImage));

		overworldImage = new Image();
		overworldImage.src = world;
		overworldImage.addEventListener('load', () => {
			if (overworldImageCanvas) {
				overworldImageCtx = overworldImageCanvas.getContext('2d');
				onResize();
				if (data.entranceCoords) {
					redrawEntrances();
				}
			}
		});

		connectorImage = new Image();
		connectorImage.src = connectors;
		connectorImage.addEventListener('load', () => {
			if (connectorImageCanvas) {
				connectorImageCtx = connectorImageCanvas.getContext('2d');
				onResize();
			}
		});

		dungeonImage = new Image();
		dungeonImage.src = dungeons;
		dungeonImage.addEventListener('load', () => {
			if (dungeonImageCanvas) {
				dungeonImageCtx = dungeonImageCanvas.getContext('2d');
				onResize();
			}
		});

		if (overworldCanvas) {
			overworldCtx = overworldCanvas.getContext('2d');
		}
		if (connectorCanvas) {
			connectorCtx = connectorCanvas.getContext('2d');
		}
		if (dungeonCanvas) {
			dungeonCtx = dungeonCanvas.getContext('2d');
		}

		window.addEventListener('resize', onResize);
		itemNames.forEach((item) => {
			if (item === 'health capacity' || item === 'arrow capacity' || item === 'bombs') {
				for (let entranceName in data.entranceCoords) {
					data.entranceCoords[entranceName].requiresCount[item] = 0;
				}
			} else {
				for (let entranceName in data.entranceCoords) {
					data.entranceCoords[entranceName].requires[item] = false;
				}
			}
		});

		recalculateRoutes();
	});

	function onResize() {
		if (overworldImageCanvas && overworldImage) {
			overworldImageCtx?.drawImage(
				overworldImage,
				0,
				0,
				overworldImageCanvas.width,
				overworldImageCanvas.height
			);
			redrawEntrances();
		}
		if (connectorImageCanvas && connectorImage) {
			connectorImageCtx?.drawImage(
				connectorImage,
				0,
				0,
				connectorImageCanvas.width,
				connectorImageCanvas.height
			);
			redrawEntrances();
		}
		if (dungeonImageCanvas && dungeonImage) {
			dungeonImageCtx?.drawImage(
				dungeonImage,
				0,
				0,
				dungeonImageCanvas.width,
				dungeonImageCanvas.height
			);
			redrawEntrances();
		}
	}

	function splitImage(img: HTMLImageElement, images: string[]) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const chunkSize = 200;
		const imgWidth = img.width;
		const imgHeight = img.height;

		if (ctx) {
			let index = 0;
			let entrances = Object.values(data.entranceCoords);
			imageSplitLoop: for (let y = 0; y < imgHeight; y += chunkSize) {
				for (let x = 0; x < imgWidth; x += chunkSize) {
					canvas.width = chunkSize;
					canvas.height = chunkSize;
					ctx.drawImage(img, x, y, chunkSize, chunkSize, 0, 0, chunkSize, chunkSize);
					const chunkSrc = canvas.toDataURL('image/png');
					images.push(chunkSrc);
					// console.log(chunkSrc);
					entrances[index].image = chunkSrc;
					index++;
					if (index >= entrances.length) {
						break imageSplitLoop;
					}
					// }
				}
			}
		}
	}

	function splitSprites(img: HTMLImageElement) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const chunkSize = 96;
		const imgWidth = img.width;
		const imgHeight = img.height;

		if (ctx) {
			let index = 0;
			let entrances = Object.values(data.entranceCoords);
			imageSplitLoop: for (let y = 0; y < imgHeight; y += chunkSize) {
				for (let x = 0; x < imgWidth; x += chunkSize) {
					canvas.width = chunkSize;
					canvas.height = chunkSize;
					ctx.drawImage(img, x, y, chunkSize, chunkSize, 0, 0, chunkSize, chunkSize);
					const chunkSrc = canvas.toDataURL('image/png');
					itemSpriteMap[itemNames[index]] = chunkSrc;
					itemImageMap[itemNames[index]] = new Image();
					itemImageMap[itemNames[index]].src = chunkSrc;
					index++;
					if (index >= entrances.length) {
						break imageSplitLoop;
					}
					// }
				}
			}
		}
	}

	const displayConnector = (connectorName: string) => {
		let connector = data.connectorCoords[connectorName];
		if (connectorExitIsHovered && connectorCanvas) {
			selectedConnectorExitName = connectorName;
			spanTop = Math.max(
				0,
				(connectorCanvas.clientHeight * connector.coords[1]) / connectorCanvas.height - 60
			);
			spanLeft = Math.max(
				0,
				Math.min(
					connectorCanvas.clientWidth - sizeSetting - 5,
					(connectorCanvas.clientWidth * (connector.coords[0] + 68)) / connectorCanvas.width -
						sizeSetting / 2
				)
			);
		}
	};

	const displayDungeon = (dungeonName: string) => {
		if (dungeonExitIsHovered && dungeonCanvas) {
			let dungeon = data.dungeonCoords[dungeonName];
			selectedDungeonExitName = dungeonName;
			spanTop = Math.max(
				0,
				(dungeonCanvas.clientHeight * (dungeon.coords[1] + 170)) / dungeonCanvas.height
			);
			spanLeft = Math.max(
				0,
				Math.min(
					dungeonCanvas.clientWidth - sizeSetting - 5,
					(dungeonCanvas.clientWidth * dungeon.coords[0]) / dungeonCanvas.width
				)
			);
		}
	};

	const displayEntrance = (entranceName: string) => {
		let entrance = data.entranceCoords[entranceName];
		if (entranceSpanImage && overworldCanvas) {
			entranceSpanImage.src = entrance.image;
			selectedEntranceName = entranceName;
			paintRoute();
			// entranceZoomSpanComesFrom = entrance.comesFrom;
			entranceZoomSpanGoesTo = entrance.goesTo;
			entranceZoomSpanCheckBox = entrance.containsUncollectedChecks;
			spanLeft = Math.max(
				0,
				Math.min(
					overworldCanvas.clientWidth - sizeSetting - 5,
					(overworldCanvas.clientWidth * (entrance.coords[0] - 24.0)) / overworldCanvas.width
				)
			);
			spanTop = Math.max(
				0,
				(overworldCanvas.clientHeight * (entrance.coords[1] - 24.0)) / overworldCanvas.height
			);
		}
		entranceZoomSpanVisible = true;
	};

	const displayMiniEntrance = (entranceName: string) => {
		let entrance = data.entranceCoords[entranceName];
		if (entranceSpanMiniImage && overworldCanvas) {
			entranceSpanMiniImage.src = entrance.image;
			selectedEntranceName = entranceName;
			spanLeft = Math.max(
				0,
				Math.min(
					overworldCanvas.clientWidth - sizeSetting - 5,
					(overworldCanvas.clientWidth * (entrance.coords[0] - 24.0)) / overworldCanvas.width
				)
			);
			spanTop = Math.max(
				0,
				(overworldCanvas.clientHeight * (entrance.coords[1] - 24.0)) / overworldCanvas.height
			);
		}
		entranceMiniZoomSpanVisible = true;
	};

	const handleStart = ({ offsetX: x, offsetY: y }: { offsetX: number; offsetY: number }) => {
		if (overworldCanvas && !showItemMenu) {
			const imageXCoord = (1.0 * x * overworldCanvas.width) / overworldCanvas.clientWidth;
			const imageYCoord = (1.0 * y * overworldCanvas.height) / overworldCanvas.clientHeight;
			let foundEntrance = false;

			for (let entranceName in data.entranceCoords) {
				let entrance = data.entranceCoords[entranceName];
				if (Math.abs(imageXCoord - entrance.coords[0]) < 24) {
					if (Math.abs(imageYCoord - entrance.coords[1]) < 24) {
						if (selectingExitInOverworld) {
							hoveredExitName = entranceName;
							foundEntrance = true;
							displayMiniEntrance(entranceName);
							// console.log(entrance.name);
							break;
						} else {
							hoveredEntranceName = entranceName;
							foundEntrance = true;
							displayEntrance(entranceName);
							// console.log(entrance.name);
							break;
						}
					}
				}
			}

			// for (let entranceName in data.entranceCoords) {
			// 	let entrance = data.entranceCoords[entranceName];
			// 	if (Math.abs(imageXCoord - entrance.coords[0]) < 24) {
			// 		if (Math.abs(imageYCoord - entrance.coords[1]) < 24) {
			// 			if (selectingExitInOverworld) {
			// 				hoveredExitIndex = entranceIndex;
			// 				foundEntrance = true;
			// 				displayMiniEntrance(entrance);
			// 				// console.log(entrance.name);
			// 				break;
			// 			} else {
			// 				hoveredEntranceIndex = entranceIndex;
			// 				foundEntrance = true;
			// 				displayEntrance(entranceName);
			// 				// console.log(entrance.name);
			// 				break;
			// 			}
			// 		}
			// 	}
			// }
			if (!foundEntrance) {
				entranceZoomSpanVisible = false;
				entranceMiniZoomSpanVisible = false;
			}
			// console.log(`coords: (${imageXCoord}, ${imageYCoord})`);
		}
	};

	const handleStartConnector = ({
		offsetX: x,
		offsetY: y
	}: {
		offsetX: number;
		offsetY: number;
	}) => {
		if (connectorCanvas && (selectingConnector || selectingConnectorComesFrom)) {
			const imageXCoord = (1.0 * x * connectorCanvas.width) / connectorCanvas.clientWidth;
			const imageYCoord = (1.0 * y * connectorCanvas.height) / connectorCanvas.clientHeight;
			let foundExit = false;
			for (let connectorName in data.connectorCoords) {
				let exit = data.connectorCoords[connectorName];
				if (Math.abs(imageXCoord - (exit.coords[0] + 34)) < 34) {
					if (Math.abs(imageYCoord - (exit.coords[1] + 34)) < 34) {
						hoveredConnectedExitName = connectorName;
						foundExit = true;
						connectorExitIsHovered = true;
						displayConnector(connectorName);
						// displayMiniEntrance(exit);
						// console.log(entrance.name);
						break;
					}
				}
			}
			// for (let connectorIndex = 0; connectorIndex < data.connectorCoords.length; connectorIndex++) {
			// 	let exit = data.connectorCoords[connectorIndex];
			// 	if (Math.abs(imageXCoord - (exit.coords[0] + 34)) < 34) {
			// 		if (Math.abs(imageYCoord - (exit.coords[1] + 34)) < 34) {
			// 			hoveredConnectedExitIndex = connectorIndex;
			// 			foundExit = true;
			// 			connectorExitIsHovered = true;
			// 			displayConnector(exit);
			// 			// displayMiniEntrance(exit);
			// 			// console.log(entrance.name);
			// 			break;
			// 		}
			// 	}
			// }
			if (!foundExit) {
				connectorExitIsHovered = false;
			}
			// console.log(`coords: (${imageXCoord}, ${imageYCoord})`);
		}
	};

	const handleStartDungeon = ({ offsetX: x, offsetY: y }: { offsetX: number; offsetY: number }) => {
		if (dungeonCanvas && (selectingDungeon || selectingDungeonComesFrom)) {
			const imageXCoord = (1.0 * x * dungeonCanvas.width) / dungeonCanvas.clientWidth;
			const imageYCoord = (1.0 * y * dungeonCanvas.height) / dungeonCanvas.clientHeight;
			let foundExit = false;
			for (let dungeonName in data.dungeonCoords) {
				let exit = data.dungeonCoords[dungeonName];
				if (Math.abs(imageXCoord - (exit.coords[0] + 133)) < 133) {
					if (Math.abs(imageYCoord - (exit.coords[1] + 133)) < 133) {
						hoveredConnectedExitName = dungeonName;
						foundExit = true;
						dungeonExitIsHovered = true;
						displayDungeon(dungeonName);
						// displayMiniEntrance(exit);
						// console.log(entrance.name);
						break;
					}
				}
			}
			if (!foundExit) {
				dungeonExitIsHovered = false;
			}
			// console.log(`coords: (${imageXCoord}, ${imageYCoord})`);
		}
	};

	type PathPiece = { e1: Entrance; e2: Entrance; internalExit: string | null } | string;
	type Path = PathPiece[];

	type PathPieceNew = { e1: number[]; e2: number[]; lineStyle: LineStyle } | string;
	type PathNew = PathPieceNew[];

	let dontAddToRoutes = true;

	// const paintRoute = () => {
	// 	// console.log(selectedEntranceName);
	// 	if (
	// 		isDisplayingRoute &&
	// 		!selectingExitInOverworld &&
	// 		destinationGuide &&
	// 		destinationGuide[selectedEntranceName] &&
	// 		destinationGuide[selectedEntranceName].length > 0
	// 	) {
	// 		routeArray = destinationGuide[selectedEntranceName];
	// 		routeIndex = 0;
	// 		// routeInstructions = [];
	// 		// console.log('RESET HERE');
	// 		let selectedPath = routeArray[routeIndex];
	// 		selectedPath
	// 			.filter((it) => typeof it !== 'string')
	// 			.forEach((pathPiece) => {
	// 				drawOneWayArrow(pathPiece.e1, pathPiece.e2, !!pathPiece.internalExit);
	// 			});
	// 	} else {
	// 		routeArray = undefined;
	// 		redrawEntrances();
	// 	}
	// };

	const paintRoute = () => {
		// console.log(selectedEntranceName);
		if (
			isDisplayingRoute &&
			!selectingExitInOverworld &&
			doorsB[selectedEntranceName] &&
			doorsB[selectedEntranceName].enterable
		) {
			selectedPath = doorsB[selectedEntranceName].pathFromSpawn;
			selectedPath
				.filter((it) => typeof it !== 'string')
				.forEach((pathPiece) => {
					drawOneWayArrow(pathPiece.e1, pathPiece.e2, pathPiece.lineStyle);
				});
		} else {
			selectedPath = [];
			redrawEntrances();
		}
	};

	const repaintRoute = () => {
		// console.log(selectedEntranceName);
		// routeInstructions = [];
		selectedPath
			.filter((it) => typeof it !== 'string')
			.forEach((pathPiece) => {
				drawOneWayArrow(pathPiece.e1, pathPiece.e2, pathPiece.lineStyle);
			});
	};

	// const repaintRoute = () => {
	// 	// console.log(selectedEntranceName);
	// 	if (routeArray && routeArray.length > 0) {
	// 		let selectedPath = routeArray[routeIndex];
	// 		// routeInstructions = [];
	// 		selectedPath
	// 			.filter((it) => typeof it !== 'string')
	// 			.forEach((pathPiece) => {
	// 				drawOneWayArrow(pathPiece.e1, pathPiece.e2, pathPiece.lineStyle);
	// 			});
	// 	} else {
	// 		routeArray = undefined;
	// 	}
	// };

	type LineStyle = 'Straight' | 'Dashed' | 'Dotted' | 'Null';

	const LineStyle: { [key: string]: LineStyle } = {
		STRAIGHT: 'Straight',
		DASHED: 'Dashed',
		DOTTED: 'Dotted',
		NULL: 'Null'
	};

	type SpawnPoint =
		| 'Links House S&Q'
		| 'Sanctuary S&Q'
		| 'Old Man House S&Q (Left exit)'
		| 'Old Man House S&Q (Right exit)';

	const SpawnPoint: { [key: string]: SpawnPoint } = {
		LINK_SPAWN: 'Links House S&Q',
		SANCTUARY_SPAWN: 'Sanctuary S&Q',
		CAVE_LEFT_SPAWN: 'Old Man House S&Q (Left exit)',
		CAVE_RIGHT_SPAWN: 'Old Man House S&Q (Right exit)'
	};

	type Door = {
		coords: number[];
		name: string;
		distanceFromSpawn: number;
		shortestPathVia: string;
		pathFromSpawn: PathNew;
		enterable: boolean;
		previousCoordsInPath: number[];
		shortestPathUsedMirrorToArrive: boolean;
		mirrorCoordinates: number[];
		connections: {
			[key: string]: {
				fromDoor: Door;
				toDoor: Door;
				distance: number;
				mirrorUsed: boolean;
				mirrorCoords: number[];
				connectionExplanation: string;
				lineStyle: LineStyle;
				internalExit: string | null;
			};
		};
	};

	const recalculateRoutes = () => {
		let doors: { [key: string]: Door } = {};
		// destinationGuide = {};

		for (let regionName in data.regions) {
			doors[regionName] = {
				coords: data.regions[regionName].coords || [],
				pathFromSpawn: [],
				shortestPathVia: '',
				distanceFromSpawn: 0,
				shortestPathUsedMirrorToArrive: false,
				mirrorCoordinates: [],
				name: regionName,
				connections: {},
				enterable: true,
				previousCoordsInPath: []
			};
		}
		for (let entranceName in data.entranceCoords) {
			doors[entranceName] = {
				coords: data.entranceCoords[entranceName].coords,
				enterable: true,
				shortestPathUsedMirrorToArrive: false,
				mirrorCoordinates: [],
				pathFromSpawn: [],
				shortestPathVia: '',
				distanceFromSpawn: 0,
				name: entranceName,
				connections: {},
				previousCoordsInPath: []
			};
		}

		// let fluteDrops = Object.values(data.regions).filter(it => it.isFluteDrop)
		let warpSpots = Object.values(data.regions).filter(it => it.isWarpSpot)
		let warpSpotLightWorldRegionNames = warpSpots.filter(it => it.isInLightWorld)
		let warpSpotDarkWorldRegionNames = warpSpots.filter(it => !it.isInLightWorld)

		for (let regionName in data.regions) {
			let door = doors[regionName];
			if (!door) continue;


			if (data.regions[regionName].isInLightWorld && inventory && inventory.flute === 1) {
				let skyRegionName = "I'm flyin' Jack"
				let skyDoor = doors[skyRegionName]
				door.connections[skyRegionName] = {
					connectionExplanation: ``,// via the overworld`,
					lineStyle: LineStyle.DOTTED,
					distance: 0,
					mirrorUsed: false,
					mirrorCoords: [],
					fromDoor: door,
					toDoor: skyDoor,
					internalExit: null
				};
			}

			for (let entranceName of data.regions[regionName].fullyAccessible) {
				let toEntrance = data.entranceCoords[entranceName];
				if (!toEntrance) continue;
				let toDoor = doors[entranceName];
				if (!toDoor) continue;
				door.connections[entranceName] = {
					connectionExplanation: `Go to '${entranceName}'`,// via the overworld`,
					lineStyle: LineStyle.STRAIGHT,
					distance: -1,
					mirrorUsed: false,
					mirrorCoords: [],
					fromDoor: door,
					toDoor,
					internalExit: null
				};
			}

			for (let entranceName in data.regions[regionName].exitToRegionButCantEnterWithoutReq) {
				let requirementToEnterEntrance =
					data.regions[regionName].exitToRegionButCantEnterWithoutReq[entranceName];
				let canEnter = requirementToEnterEntrance.some((reqGroup) => {
					return reqGroup.every((item) => {
						let itemNameAndNum = item.split('~');
						if (itemNameAndNum.length === 1) {
							return inventory[itemNameAndNum[0]];
						} else {
							if (itemNameAndNum[0] === 'turtle rock logic') {
								// console.log(itemNameAndNum);
								return (
									(doorsB && doorsB['Warp Tile - Paradox Cave (Top) Region - Dark World'] && doorsB['Warp Tile - Paradox Cave (Top) Region - Dark World'].distanceFromSpawn < 999999) && 
									((inventory['turtle rock medallion'] === 1 && inventory['bombos'] === 1) ||
									(inventory['turtle rock medallion'] === 2 && inventory['ether'] === 1) ||
									(inventory['turtle rock medallion'] === 3 && inventory['quake'] === 1))
								);
							}
							if (itemNameAndNum[0] === 'misery mire logic') {
								return (
									(inventory['misery mire medallion'] === 1 && inventory['bombos'] === 1) ||
									(inventory['misery mire medallion'] === 2 && inventory['ether'] === 1) ||
									(inventory['misery mire medallion'] === 3 && inventory['quake'] === 1)
								);
							}
							if (itemNameAndNum[0] === 'ganon tower logic') {
								return (
									inventory['ganon crystals'] <=
									inventory['special crystals'] + inventory['boring crystals']
								);
							}

							return inventory[itemNameAndNum[0]] >= Number.parseInt(itemNameAndNum[1]);
						}
					});
				});
				let toDoor = doors[entranceName];
				if (!toDoor) continue;
				if (!canEnter) {
					doors[entranceName].enterable = false;
					continue;
				}
				let toEntrance = data.entranceCoords[entranceName];
				if (!toEntrance) continue;
				door.connections[entranceName] = {
					connectionExplanation: `Go to '${entranceName}'`,//`In the overworld region '${regionName}' go to '${entranceName}'`,
					lineStyle: LineStyle.STRAIGHT,
					distance: -1,
					mirrorUsed: false,
					mirrorCoords: [],
					fromDoor: door,
					toDoor,
					internalExit: null
				};
			}

			for (let connectedRegionName in data.regions[regionName].connectsToRegionWithReq) {
				let connectedRegion = data.regions[connectedRegionName]
				let newEntrancesRegionReqs =
					data.regions[regionName].connectsToRegionWithReq[connectedRegionName];

				let canEnter = newEntrancesRegionReqs.some((reqGroup) => {
					return reqGroup.every((item) => {
						let itemNameAndNum = item.split('~');
						if (itemNameAndNum.length === 1) {
							return inventory[itemNameAndNum[0]];
						} else {
							return inventory[itemNameAndNum[0]] >= Number.parseInt(itemNameAndNum[1]);
						}
					});
				});

				if (!canEnter) continue;

				let optionalPathString = '';
				if (regionName === 'Light World') {
					if (connectedRegionName === 'Swamp') {
						optionalPathString =
							optionalPathString + ' (via Dark World warp spot near Desert Flute drop)';
					} else if (connectedRegionName === 'Flute Drop - Death Mountain') {
						optionalPathString = optionalPathString + ' (using the flute)';
					} else if (
						connectedRegionName === 'Waterfall of Wishing Region' &&
						inventory['progressive strength'] === 0
					) {
						optionalPathString = optionalPathString + ' (via Lake Hylia water teleport spot)';
					} else if (connectedRegionName === 'Dark World South') {
						optionalPathString = optionalPathString + ' (via Dark World warp spot near the Dam)';
					} else if (connectedRegionName === 'Dark World East') {
						if (inventory['agahnim'] === 0) {
							optionalPathString =
								optionalPathString +
								' (via Dark World warp spot in the east area below Eastern Palace)';
						} else {
							optionalPathString = optionalPathString + ' (via Dark World warp at Hyrule Castle)';
						}
					} else if (connectedRegionName === 'Dark World North West') {
						optionalPathString = optionalPathString + ' (via Dark World warp spot near Kakariko)';
					}
				} else if (connectedRegionName === 'Ice Palace Region') {
					optionalPathString =
						optionalPathString + ' (via Dark World warp spot near Capacity Upgrade Fairy)';
				} else if (
					regionName === 'Death Mountain Lower West' &&
					connectedRegionName === 'Dark Death Mountain Lower West'
				) {
					optionalPathString =
						optionalPathString + ' (via Dark World warp spot near Spectacle Rock)';
				} else if (connectedRegionName === 'Turtle Rock Shell') {
					optionalPathString =
						optionalPathString + ' (via Dark World warp that goes to Turtle Rock)';
				} else if (
					connectedRegionName === 'Two Brothers House (West) Region' ||
					connectedRegionName === 'Hyrule Castle Ledge' ||
					regionName === 'Swamp' ||
					regionName === 'Dark Death Mountain Lower East' ||
					regionName === 'Turtle Rock Montain Ledge Region' ||
					regionName === 'Turtle Rock Isolated Ledge Region' ||
					connectedRegionName === 'Return from Death Mountain Ledge' ||
					connectedRegionName === 'Old Man Cave (West) Region'
				) {
					optionalPathString = optionalPathString + ' (by using the mirror)';
				}

				let toDoor = doors[connectedRegionName];
				if (!toDoor) continue;

				let mirrorNecessary = (!data.regions[regionName].isInLightWorld && connectedRegion.isInLightWorld && !connectedRegion.isFluteDrop)
				let allMirrorCoordsFromRegion = data.regions[regionName].mirrorCoords;
				let mirrorCoords = allMirrorCoordsFromRegion ? allMirrorCoordsFromRegion[connectedRegionName] || [0, 0] : [0, 0]

				let isFlying = connectedRegion.isFluteDrop
				let isFlute = data.regions[regionName].isFluteDrop
				let isWarp =  data.regions[regionName].isWarpSpot && !data.regions[regionName].isInLightWorld
				let isVeryShortDistance = isFlying || isFlute || isWarp || mirrorNecessary;
				let isShortDistance = isVeryShortDistance || !data.regions[regionName].isMajorRegion
				let lineStyle = isVeryShortDistance ? LineStyle.DOTTED : LineStyle.STRAIGHT;
				let distance = isShortDistance ? 0 : 800;
				let connectionExplanation = isFlute ? `Use the flute to go to '${connectedRegionName}'` : 
					isWarp ? `Warp to the Dark World at '${regionName}'` :
					mirrorNecessary ? `Use the mirror to go from the Dark World to '${connectedRegionName}' in the light world` : ''



				door.connections[connectedRegionName] = {
					connectionExplanation: connectionExplanation,//`In the overworld region '${regionName}' go to connected region '${connectedRegionName}'${optionalPathString}`,
					lineStyle,
					mirrorUsed: mirrorNecessary,
					mirrorCoords: mirrorCoords,
					distance: distance,
					fromDoor: door,
					toDoor,
					internalExit: null
				};
			}
		}

		for (let entranceName in data.entranceCoords) {
			let entranceData = data.entranceCoords[entranceName];
			let door = doors[entranceName];
			if (!door) continue;
			let regionDoor = doors[data.entranceToRegionMap[entranceName]];
			if (!regionDoor) continue;
			door.connections[data.entranceToRegionMap[entranceName]] = {
				connectionExplanation: ``, //`ignore: enter region '${data.entranceToRegionMap[entranceName]}' from '${entranceName}'`,
				lineStyle: LineStyle.STRAIGHT,
				mirrorUsed: false,
				mirrorCoords: [],
				distance: 0,
				fromDoor: door,
				toDoor: regionDoor,
				internalExit: ''
			};
			if (entranceData.goesToSelectedOption == goToOptions[0]) {
				let toDoor = doors[entranceData.goesTo];
				if (!toDoor) continue;
				door.connections[entranceData.goesTo] = {
					connectionExplanation: `Enter '${entranceName}' and exit to get to overworld location '${entranceData.goesTo}'`,// in region '${data.entranceToRegionMap[entranceData.goesTo]}'`,
					lineStyle: LineStyle.DASHED,
					mirrorUsed: false,
					mirrorCoords: [],
					distance: .0001,
					fromDoor: door,
					toDoor,
					internalExit: 'only exit inside'
				};
			} else if (entranceData.goesToSelectedOption == goToOptions[1]) {
				let dungeonExit = data.dungeonCoords[entranceData.goesTo];
				if (!dungeonExit) continue;
				for (let reachableExitName in dungeonExit.reachableExits) {
					let requirements = dungeonExit.reachableExits[reachableExitName];
					if (requirements.length > 0 && !inventory[requirements[0]]) continue;
					let reachableExit = data.dungeonCoords[reachableExitName];
					if (
						!reachableExit ||
						!reachableExit.goesTo ||
						reachableExit.goesTo === '' ||
						reachableExit.goesTo === '...'
					)
						continue;
					let toDoor = doors[reachableExit.goesTo];
					if (!toDoor) continue;
					door.connections[reachableExit.goesTo] = {
						connectionExplanation: `Enter '${entranceName}' and exit at '${reachableExitName}' to get to overworld location '${reachableExit.goesTo}'`,// in region '${data.entranceToRegionMap[reachableExit.goesTo]}'${reachableExitName.indexOf('urtle') > -1 ? ' *TURTLE ROCK LOGIC NOT IMPLEMENTED - THIS STEP MAY BE IMPOSSIBLE - SORRY' : ''}`,
						fromDoor: door,
						lineStyle: LineStyle.DASHED,
						mirrorUsed: false,
						mirrorCoords: [],
						distance: reachableExitName.indexOf("urtle") === -1 ? 100 : 99999,
						toDoor,
						internalExit: reachableExitName
					};
				}
			} else if (entranceData.goesToSelectedOption == goToOptions[2]) {
				let connectorExit = data.connectorCoords[entranceData.goesTo];
				if (!connectorExit) continue;
				for (let reachableExitName in connectorExit.reachableExits) {
					let requirements = connectorExit.reachableExits[reachableExitName];
					let canNavigateConnector = requirements.indexOf('lamp') === -1 || canNavigateDarkness;
					let canBombIfNecessary = requirements.indexOf('bombs') === -1 || inventory['bombs'] > 0;
					let cannotNavigateConnector =
						!canNavigateConnector ||
						!canBombIfNecessary ||
						(inventory['moon pearl'] === 0 &&
							entranceData.coords[0] > 2040 &&
							requirements.length > 0);
					if (cannotNavigateConnector) continue;
					let reachableExit = data.connectorCoords[reachableExitName];
					if (
						!reachableExit ||
						!reachableExit.goesTo ||
						reachableExit.goesTo === '' ||
						reachableExit.goesTo === '...'
					)
						continue;
					let toDoor = doors[reachableExit.goesTo];
					if (!toDoor) continue;
					door.connections[reachableExit.goesTo] = {
						connectionExplanation: `Enter '${entranceName}' and exit at '${reachableExitName}' to get to overworld location '${reachableExit.goesTo}'`,// in region '${data.entranceToRegionMap[reachableExit.goesTo]}'`,
						fromDoor: door,
						lineStyle: LineStyle.DASHED,
						mirrorUsed: false,
						mirrorCoords: [],
						distance: 100,
						toDoor,
						internalExit: reachableExitName
					};
				}
			}
		}

		if (!isDisplayingRoute) {
			return;
		}

		// destinationGuide = {};

		let spawnEntrances: { [key: string]: null | Connector } = {
			'Links House S&Q': data.connectorCoords['Links House Exit'],
			'Sanctuary S&Q': data.connectorCoords['Sanctuary Exit'],
			'Old Man House S&Q (Left exit)': data.connectorCoords['Old Man House Exit (bottom)'],
			'Old Man House S&Q (Right exit)': canNavigateDarkness
				? data.connectorCoords['Old Man House Exit (top)']
				: null
		};

		let validSpawns = [];

		doorsB = doors;

		for (let spawnName in spawnEntrances) {
			let spawnPoint = spawnEntrances[spawnName];
			if (
				!spawnPoint ||
				!spawnPoint.goesTo ||
				spawnPoint.goesTo === '' ||
				spawnPoint.goesTo === '...'
			)
				continue;
			let spawnPointEntranceInOverworld = spawnPoint.goesTo;
			if (!spawnPointEntranceInOverworld) continue;
			validSpawns.push(spawnPointEntranceInOverworld);
			let regionName = data.entranceToRegionMap[spawnPointEntranceInOverworld];
			if (!regionName) continue;
			let path: PathNew = [
				`Spawn at '${spawnPointEntranceInOverworld}' and exit ${ spawnName === 'Old Man House Exit (top)' ? `at the exit through the cave ` : ''}to arrive at '${spawnPointEntranceInOverworld}'`,
				// `Exit at '${spawnName}' to get to overworld location '${spawnPointEntranceInOverworld}' in region '${regionName}'`
			];
			if (!doorsB[spawnPointEntranceInOverworld]) continue;
			doorsB[spawnPointEntranceInOverworld].pathFromSpawn = path;
		}


		getShortestRoute(validSpawns);

		// for (let spawnName in spawnEntrances) {
		// 	let spawnPoint = spawnEntrances[spawnName];
		// 	if (!spawnPoint || !spawnPoint.goesTo || spawnPoint.goesTo === '' || spawnPoint.goesTo === '...') continue;
		// 	let doorsVisited = new Set<string>();
		// 	let spawnPointEntranceInOverworld = spawnPoint.goesTo;
		// 	if (!spawnPointEntranceInOverworld) continue;
		// 	let fromEntrance = data.entranceCoords[spawnPointEntranceInOverworld];
		// 	if (!spawnPointEntranceInOverworld || !fromEntrance) continue;
		// 	let regionName = data.entranceToRegionMap[spawnPointEntranceInOverworld];
		// 	let path: PathNew = [
		// 		`Spawn at '${spawnName}'`,
		// 		`Exit at '${spawnName}' to get to overworld location '${spawnPointEntranceInOverworld}' in region '${regionName}'`
		// 	];
		// 	let previousCoords = doors[spawnPointEntranceInOverworld].coords;
		// 	let currentDoor = doors[regionName];
		// 	doorsVisited.add(regionName)
		// 	let depth = navigateDoor(previousCoords, currentDoor, path, doorsVisited, spawnName, 0);
		// 	console.log({depth});
		// }
		console.log(doors);
		// doorsB = doors;

		// console.log("routes from spawn complete")
		// checkpointE = new Date().getMilliseconds();
		// let checkpointETime = checkpointE - checkpointD
		// console.log({checkpointBTime, checkpointCTime, checkpointDTime, checkpointETime})
	};

	const getShortestRoute = (startNodeNames: string[]) => {
		let unvisitedNodes = new Set(Object.values(doorsB));
		for (let doorName in doorsB) {
			if (startNodeNames.indexOf(doorName) === -1) {
				doorsB[doorName].distanceFromSpawn = 99999999;
				doorsB[doorName].pathFromSpawn = [];
				doorsB[doorName].previousCoordsInPath = [];
			} else {
				doorsB[doorName].distanceFromSpawn = 0;
			}
		}

		while (unvisitedNodes.size > 0) {
			let currentNode = unvisitedNodes
				.values()
				.reduce((previousValue, currentValue) =>
					previousValue.distanceFromSpawn < currentValue.distanceFromSpawn
						? previousValue
						: currentValue
				);
			for (let connectedNodeName in currentNode.connections) {
				let connectedNode = doorsB[connectedNodeName];
				if (!unvisitedNodes.has(connectedNode)) {
					continue;
				}
				let connection = currentNode.connections[connectedNodeName];


				
				let e1Coords = currentNode.coords.length > 0 ? currentNode.coords : currentNode.previousCoordsInPath;
				
				let connectionDistance = connection.distance === -1 ? distanceBetween(e1Coords, connectedNode.coords) : connection.distance;
				let pathLength = currentNode.distanceFromSpawn + connectionDistance;

				if (pathLength < connectedNode.distanceFromSpawn) {
					connectedNode.shortestPathUsedMirrorToArrive = connection.mirrorUsed
					connectedNode.mirrorCoordinates = connection.mirrorCoords;
					// console.log(`${currentNode.name} -> ${connectedNode.name}`);
					connectedNode.distanceFromSpawn = pathLength;
					connectedNode.shortestPathVia = currentNode.name;
					connectedNode.pathFromSpawn = JSON.parse(JSON.stringify(currentNode.pathFromSpawn));
					connectedNode.pathFromSpawn.push(connectionDistance + " ~ " + pathLength + " ~ " + connection.connectionExplanation);
					if (connection.connectionExplanation !== '') {
					}
					if (connectedNode.coords.length > 0) {

						let e2Coords = connectedNode.coords
						let lineStyle = connection.lineStyle

						if (currentNode.shortestPathUsedMirrorToArrive) {
							let mirrorCoords = currentNode.mirrorCoordinates;
							let lightWorldMirrorCoords = [mirrorCoords[0] - 2064, mirrorCoords[1]];
							connectedNode.pathFromSpawn.push({
								e1: e1Coords,
								e2: mirrorCoords,
								lineStyle: LineStyle.STRAIGHT
							});
							connectedNode.pathFromSpawn.push({
								e1: mirrorCoords,
								e2: lightWorldMirrorCoords,
								lineStyle: LineStyle.DOTTED
							});
							e1Coords = lightWorldMirrorCoords;
							lineStyle = LineStyle.STRAIGHT;
						}

						connectedNode.pathFromSpawn.push({
							e1: e1Coords,
							e2: e2Coords,
							lineStyle: lineStyle
						});
					} else {
						let previousCoords = currentNode.coords.length > 0
							? currentNode.coords
							: currentNode.previousCoordsInPath
						if (currentNode.name === "Lake Hylia Region" && connectedNodeName === "Waterfall of Wishing Region") {
							// this shouldn't be hard coded - fix this later
							connectedNode.pathFromSpawn.push("Use the water warp in Lake Hylia to get to the area near the Waterfall of Wishing")
							connectedNode.pathFromSpawn.push({
								e1: e1Coords,
								e2: [1617, 1883],
								lineStyle: LineStyle.STRAIGHT
							});
							connectedNode.pathFromSpawn.push({
								e1: [1617, 1883],
								e2: [1861, 406],
								lineStyle: LineStyle.DOTTED
							});
							previousCoords =  [1861, 406]
						}
						connectedNode.previousCoordsInPath = previousCoords
					}
					// console.log({connectedNode: connectedNodeName, replacedBy: connectedNode.pathFromSpawn})
				}
			}
			unvisitedNodes.delete(currentNode);
		}
	};

	const distanceBetween = (coords1: number[], coords2: number[]) => {
		if (coords1.length !== 2 ||coords2.length !== 2) {
			return 1
		}
		return Math.sqrt(Math.pow(coords1[0] - coords2[0], 2) + Math.pow(coords1[1] - coords2[1], 2))
	}

	// const navigateDoor = (
	// 	previousCoords: number[],
	// 	currentDoor: Door,
	// 	path: PathNew,
	// 	doorsVisited: Set<string>,
	// 	spawnName: string,
	// 	depth: number
	// ): number => {
	// 	if (currentDoor.coords.length > 0) {
	// 		currentDoor.routes[spawnName][path.length.toString()] = path;
	// 		currentDoor.reachable = true;
	// 	}
	// 	let newDepth = depth;
	// 	if (depth > 70) {
	// 		return depth;
	// 	}

	// 	for (let doorName in currentDoor.connections) {
	// 		let nextConnectionPreviousCoords = previousCoords;
	// 		if (doorsVisited.has(doorName)) continue;
	// 		let connection = currentDoor.connections[doorName];
	// 		if (!connection) continue;
	// 		let newPath = JSON.parse(JSON.stringify(path));
	// 		let newDoorsVisited = new Set(doorsVisited);
	// 		newDoorsVisited.add(doorName);
	// 		let lineStyle = connection.lineStyle;
	// 		if (connection.connectionSpecialCoords.length > 0) {
	// 		}
	// 		newPath.push(connection.connectionExplanation);
	// 		if (connection.toDoor.coords.length > 0) {
	// 			newPath.push({
	// 				e1: nextConnectionPreviousCoords,
	// 				e2: connection.toDoor.coords,
	// 				lineStyle: lineStyle
	// 			});
	// 			nextConnectionPreviousCoords = connection.toDoor.coords;
	// 		}
	// 		newDepth = navigateDoor(
	// 			nextConnectionPreviousCoords,
	// 			connection.toDoor,
	// 			newPath,
	// 			newDoorsVisited,
	// 			spawnName,
	// 			depth + 1
	// 		);
	// 	}
	// 	return newDepth;
	// };

	// const recalculateRoutes = () => {
	// 	if (!isDisplayingRoute) {
	// 		return;
	// 	}

	// 	destinationGuide = {
	// 		// "Links House": [
	// 		// 	["Links House Spawn", "Light World"]
	// 		// ]
	// 	};

	// 	// let spawnEntrances = data.connectorCoords.filter(
	// 	// 	(it) =>
	// 	// 		(it.name === 'Links House Exit' ||
	// 	// 			it.name === 'Sanctuary Exit' ||
	// 	// 			it.name === 'Old Man House Exit (bottom)' ||
	// 	// 			(it.name === 'Old Man House Exit (top)' && canNavigateDarkness)) &&
	// 	// 		it.goesTo &&
	// 	// 		it.goesTo !== '' &&
	// 	// 		it.goesTo !== '...'
	// 	// );

	// 	let spawnEntrances = [
	// 		data.connectorCoords['Links House Exit'],
	// 		data.connectorCoords['Sanctuary Exit'],
	// 		data.connectorCoords['Old Man House Exit (bottom)'],
	// 		canNavigateDarkness ? data.connectorCoords['Old Man House Exit (top)'] : null
	// 	]
	// 		.filter((it) => it !== null)
	// 		.filter((it) => it.goesTo && it.goesTo !== '' && it.goesTo !== '...');

	// 	// console.log(spawnEntrances);

	// 	for (let spawnPoint of spawnEntrances) {
	// 		let regionsVisited = new Set<string>();
	// 		let spawnName =
	// 			spawnPoint.coords[0] === 2623
	// 				? 'Links house'
	// 				: spawnPoint.coords[0] === 2981
	// 					? 'Sanctuary'
	// 					: 'Old Man House';
	// 		let spawnPointEntranceInOverworld = spawnPoint.goesTo;
	// 		if (!spawnPointEntranceInOverworld) {
	// 			continue;
	// 		}
	// 		let fromEntrance = data.entranceCoords[spawnPointEntranceInOverworld];
	// 		if (!spawnPointEntranceInOverworld || !fromEntrance) {
	// 			continue;
	// 		}
	// 		let regionName = data.entranceToRegionMap[spawnPointEntranceInOverworld];
	// 		regionsVisited.add(regionName);
	// 		let path: Path = [
	// 			`Spawn at '${spawnName}'`,
	// 			`Exit at '${spawnName}' to get to overworld location '${spawnPointEntranceInOverworld}' in region '${regionName}'`
	// 		]; //[spawnPoint.name]
	// 		let spawnsRegionName = data.entranceToRegionMap[spawnPointEntranceInOverworld];
	// 		// let spawnsRegionRequirements = data.entranceToRegionMap[spawnPointEntranceInOverworld].requirementsToGetInFromRegion;
	// 		investigateRegionOld(spawnsRegionName, regionsVisited, path, fromEntrance, destinationGuide);
	// 	}

	// 	for (let entrance in destinationGuide) {
	// 		destinationGuide[entrance].sort();
	// 	}

	// 	// for (let entrance in destinationGuide) {
	// 	// 	destinationGuide[entrance].forEach((path) => {
	// 	// 		// console.log(
	// 	// 		// 	`${entrance}: ${path.map((pathPiece) => `${pathPiece.e1.name} ${pathPiece.internalExit ? '- - -' : '-----'}> ${pathPiece.e2.name} ${pathPiece.internalExit ? `(from ${pathPiece.internalExit})` : ''}`).join(', ')}`
	// 	// 		// );
	// 	// 	});
	// 	// }
	// 	paintRoute();
	// 	recalculateRoutesTest();
	// };

	// const investigateRegionOld = (
	// 	regionName: string,
	// 	regionsVisited: Set<string>,
	// 	path: Path,
	// 	fromEntrance: Entrance,
	// 	destinationGuide: { [key: string]: Path[] }
	// ) => {
	// 	// console.log('now investigating ' + regionName);

	// 	for (let entranceName of data.regions[regionName].fullyAccessible) {
	// 		let toEntrance = data.entranceCoords[entranceName];
	// 		if (toEntrance) {
	// 			let newPath: Path = JSON.parse(JSON.stringify(path));
	// 			// if (fromEntrance !== toEntrance) {
	// 			newPath.push(`go to '${entranceName}' via the overworld`);
	// 			newPath.push({ e1: fromEntrance, e2: toEntrance, internalExit: null });
	// 			// }
	// 			addPathToGuideAndInvestigateEntrancesRegionOld(
	// 				toEntrance,
	// 				entranceName,
	// 				regionsVisited,
	// 				newPath,
	// 				destinationGuide
	// 			);
	// 		}
	// 	}
	// 	for (let entranceName in data.regions[regionName].exitToRegionButCantEnterWithoutReq) {
	// 		let requirementToEnterEntrance =
	// 			data.regions[regionName].exitToRegionButCantEnterWithoutReq[entranceName];

	// 		let canEnter = requirementToEnterEntrance.some((reqGroup) => {
	// 			return reqGroup.every((item) => {
	// 				let itemNameAndNum = item.split('~');
	// 				if (itemNameAndNum.length === 1) {
	// 					return inventory[itemNameAndNum[0]];
	// 				} else {
	// 					if (itemNameAndNum[0] === 'turtle rock logic') {
	// 						// console.log(itemNameAndNum);
	// 						return (
	// 							(inventory['turtle rock medallion'] === 1 && inventory['bombos'] === 1) ||
	// 							(inventory['turtle rock medallion'] === 2 && inventory['ether'] === 1) ||
	// 							(inventory['turtle rock medallion'] === 3 && inventory['quake'] === 1)
	// 						);
	// 					}
	// 					if (itemNameAndNum[0] === 'misery mire logic') {
	// 						return (
	// 							(inventory['misery mire medallion'] === 1 && inventory['bombos'] === 1) ||
	// 							(inventory['misery mire medallion'] === 2 && inventory['ether'] === 1) ||
	// 							(inventory['misery mire medallion'] === 3 && inventory['quake'] === 1)
	// 						);
	// 					}
	// 					if (itemNameAndNum[0] === 'ganon tower logic') {
	// 						return (
	// 							inventory['ganon crystals'] <=
	// 							inventory['special crystals'] + inventory['boring crystals']
	// 						);
	// 					}

	// 					return inventory[itemNameAndNum[0]] >= Number.parseInt(itemNameAndNum[1]);
	// 				}
	// 			});
	// 		});
	// 		if (canEnter) {
	// 			let toEntrance = data.entranceCoords[entranceName];
	// 			if (toEntrance) {
	// 				let newPath: Path = JSON.parse(JSON.stringify(path));
	// 				// if (fromEntrance !== toEntrance) {
	// 				// CHECK THIS HERE
	// 				newPath.push(`In the overworld region '${regionName}' go to '${entranceName}'`);
	// 				newPath.push({ e1: fromEntrance, e2: toEntrance, internalExit: null });
	// 				// }
	// 				addPathToGuideAndInvestigateEntrancesRegionOld(
	// 					toEntrance,
	// 					entranceName,
	// 					regionsVisited,
	// 					newPath,
	// 					destinationGuide
	// 				);
	// 			}
	// 		}
	// 	}
	// 	for (let connectedRegionName in data.regions[regionName].connectsToRegionWithReq) {
	// 		// console.log("here's a connecting region from " + regionName + ': ' + connectedRegionName);
	// 		let newEntrancesRegionReqs =
	// 			data.regions[regionName].connectsToRegionWithReq[connectedRegionName];

	// 		// console.log(newEntrancesRegionReqs)
	// 		let canEnter = newEntrancesRegionReqs.some((reqGroup) => {
	// 			// console.log(reqGroup)
	// 			return reqGroup.every((item) => {
	// 				let itemNameAndNum = item.split('~');
	// 				// console.log(itemNameAndNum)
	// 				if (itemNameAndNum.length === 1) {
	// 					return inventory[itemNameAndNum[0]];
	// 				} else {
	// 					return inventory[itemNameAndNum[0]] >= Number.parseInt(itemNameAndNum[1]);
	// 				}
	// 			});
	// 		});
	// 		// console.log(canEnter)

	// 		if (regionsVisited.has(connectedRegionName) || !canEnter) {
	// 			continue;
	// 		}
	// 		// let newPath = JSON.parse(JSON.stringify(path))
	// 		// newPath.push(connectedRegionName)
	// 		let newPath: Path = JSON.parse(JSON.stringify(path));
	// 		let optionalPathString = '';
	// 		if (regionName === 'Light World') {
	// 			if (connectedRegionName === 'Swamp') {
	// 				optionalPathString =
	// 					optionalPathString + ' (via Dark World warp spot near Desert Flute drop)';
	// 			} else if (connectedRegionName === 'Death Mountain Lower West') {
	// 				optionalPathString = optionalPathString + ' (via Mountain Flute drop)';
	// 			} else if (
	// 				connectedRegionName === 'Waterfall of Wishing Region' &&
	// 				inventory['progressive strength'] === 0
	// 			) {
	// 				optionalPathString = optionalPathString + ' (via Lake Hylia water teleport spot)';
	// 			} else if (connectedRegionName === 'Dark World South') {
	// 				optionalPathString = optionalPathString + ' (via Dark World warp spot near the Dam)';
	// 			} else if (connectedRegionName === 'Dark World East') {
	// 				if (inventory['agahnim'] === 0) {
	// 					optionalPathString =
	// 						optionalPathString +
	// 						' (via Dark World warp spot in the east area below Eastern Palace)';
	// 				} else {
	// 					optionalPathString = optionalPathString + ' (via Dark World warp at Hyrule Castle)';
	// 				}
	// 			} else if (connectedRegionName === 'Dark World North West') {
	// 				optionalPathString = optionalPathString + ' (via Dark World warp spot near Kakariko)';
	// 			}
	// 		} else if (connectedRegionName === 'Ice Palace Region') {
	// 			optionalPathString =
	// 				optionalPathString + ' (via Dark World warp spot near Capacity Upgrade Fairy)';
	// 		} else if (
	// 			regionName === 'Death Mountain Lower West' &&
	// 			connectedRegionName === 'Dark Death Mountain Lower West'
	// 		) {
	// 			optionalPathString = optionalPathString + ' (via Dark World warp spot near Spectacle Rock)';
	// 		} else if (connectedRegionName === 'Turtle Rock Shell') {
	// 			optionalPathString = optionalPathString + ' (via Dark World warp that goes to Turtle Rock)';
	// 		} else if (
	// 			connectedRegionName === 'Two Brothers House (West) Region' ||
	// 			connectedRegionName === 'Hyrule Castle Ledge' ||
	// 			regionName === 'Swamp' ||
	// 			regionName === 'Dark Death Mountain Lower East' ||
	// 			regionName === 'Turtle Rock Montain Ledge Region' ||
	// 			regionName === 'Turtle Rock Isolated Ledge Region' ||
	// 			connectedRegionName === 'Return from Death Mountain Ledge' ||
	// 			connectedRegionName === 'Old Man Cave (West) Region'
	// 		) {
	// 			optionalPathString = optionalPathString + ' (by using the mirror)';
	// 		}
	// 		newPath.push(
	// 			`In the overworld region '${regionName}' go to connected region '${connectedRegionName}'${optionalPathString}`
	// 		);

	// 		// newPath.push({e1: fromEntrance, e2: toEntrance, isInternalRoute: false});
	// 		let newRegionsVisistedSet = new Set(regionsVisited);
	// 		newRegionsVisistedSet.add(connectedRegionName);
	// 		investigateRegionOld(
	// 			connectedRegionName,
	// 			newRegionsVisistedSet,
	// 			newPath,
	// 			fromEntrance,
	// 			destinationGuide
	// 		);
	// 	}
	// };

	// const addPathToGuideAndInvestigateEntrancesRegionOld = (
	// 	fromEntrance: Entrance,
	// 	fromEntranceName: string,
	// 	regionsVisited: Set<string>,
	// 	path: Path,
	// 	destinationGuide: { [key: string]: Path[] }
	// ) => {
	// 	const entranceName = fromEntranceName;
	// 	if (!!destinationGuide[entranceName]) {
	// 		if (path.length < destinationGuide[entranceName].length)
	// 			destinationGuide[entranceName] = [path];
	// 		// destinationGuide[entranceName].push(path);
	// 	} else {
	// 		destinationGuide[entranceName] = [path];
	// 	}

	// 	if (path.length > 6) {
	// 		return;
	// 	}

	// 	let entranceData = fromEntrance;
	// 	// console.log(entranceName);
	// 	if (
	// 		!entranceData ||
	// 		!entranceData.goesTo ||
	// 		entranceData.goesTo == '' ||
	// 		entranceData.goesTo === '...'
	// 	) {
	// 		return;
	// 	}
	// 	if (entranceData.goesToSelectedOption == goToOptions[0]) {
	// 		let newEntranceToInvestigate = entranceData.goesTo;
	// 		let newEntrancesRegion = data.entranceToRegionMap[newEntranceToInvestigate];
	// 		// let newEntrancesRegionReqs = data.entranceToRegionMap[newEntranceToInvestigate].requirementsToGetInFromRegion
	// 		// console.log('found new region to investigate: ' + newEntrancesRegion);
	// 		// console.log("~~~~~" + newEntrancesRegionReqs)
	// 		if (regionsVisited.has(newEntrancesRegion)) {
	// 			return;
	// 		}
	// 		// console.log(newEntrancesRegion + ' has not been visited yet');
	// 		let newPath: Path = JSON.parse(JSON.stringify(path));
	// 		// newPath.push(entranceName)
	// 		// newPath.push("interior with single exit")
	// 		// newPath.push(entranceData.goesTo)
	// 		let newRegionsVisistedSet = new Set(regionsVisited);
	// 		newRegionsVisistedSet.add(newEntrancesRegion);
	// 		// newPath.push(newEntrancesRegion)
	// 		let toEntrance = data.entranceCoords[entranceData.goesTo];
	// 		if (toEntrance) {
	// 			newPath.push(
	// 				`Enter '${fromEntranceName}' and exit to get to overworld location '${entranceData.goesTo}' in region '${data.entranceToRegionMap[entranceData.goesTo]}'`
	// 			); //Exit at '${spawnPoint.name}'
	// 			newPath.push({ e1: fromEntrance, e2: toEntrance, internalExit: 'only exit inside' });
	// 			investigateRegionOld(
	// 				newEntrancesRegion,
	// 				newRegionsVisistedSet,
	// 				newPath,
	// 				toEntrance,
	// 				destinationGuide
	// 			);
	// 		}
	// 	} else if (entranceData.goesToSelectedOption == goToOptions[1]) {
	// 		//dungeon
	// 		let dungeonExit = data.dungeonCoords[entranceData.goesTo];
	// 		// console.log("~investigating " + entranceData.goesTo)
	// 		if (!dungeonExit) {
	// 			// console.log("!dungeonExit")
	// 			return;
	// 		}
	// 		for (let reachableExitName in dungeonExit.reachableExits) {
	// 			// console.log("~found reachable exit in " + entranceData.goesTo + " called " + reachableExitName)
	// 			let requirements = dungeonExit.reachableExits[reachableExitName];
	// 			if (requirements.length > 0 && !inventory[requirements[0]]) {
	// 				// only 1 - either lamp or bombs or cape
	// 				// console.log("oh... requirements.length > 0")
	// 				continue;
	// 			}
	// 			let reachableExit = data.dungeonCoords[reachableExitName];
	// 			if (
	// 				!reachableExit ||
	// 				!reachableExit.goesTo ||
	// 				reachableExit.goesTo === '' ||
	// 				reachableExit.goesTo === '...'
	// 			) {
	// 				// console.log("oh... !reachableExit || !reachableExit.goesTo || reachableExit.goesTo === '' || reachableExit.goesTo === '...'")
	// 				// console.log({reachableExitName})
	// 				continue;
	// 			}
	// 			let toEntrance = data.entranceCoords[reachableExit.goesTo];
	// 			if (!toEntrance) {
	// 				// console.log("oh... !toEntrance")
	// 				// console.log("entranceData.goesTo: " + entranceData.goesTo)
	// 				continue;
	// 			}
	// 			let newlyAccessibleRegionName = data.entranceToRegionMap[reachableExit.goesTo];
	// 			if (regionsVisited.has(newlyAccessibleRegionName)) {
	// 				// console.log("oh... regionsVisited.has(newlyAccessibleRegionName)")
	// 				continue;
	// 			}
	// 			let newRegionsVisitedSet = new Set(regionsVisited);
	// 			newRegionsVisitedSet.add(newlyAccessibleRegionName);
	// 			let newPath: Path = JSON.parse(JSON.stringify(path));
	// 			newPath.push(
	// 				`Enter '${fromEntranceName}' and exit at '${reachableExitName}' to get to overworld location '${reachableExit.goesTo}' in region '${data.entranceToRegionMap[reachableExit.goesTo]}'${reachableExitName.indexOf('urtle') > -1 ? ' *TURTLE ROCK LOGIC NOT IMPLEMENTED - THIS STEP MAY BE IMPOSSIBLE - SORRY' : ''}`
	// 			); //Exit at '${spawnPoint.name}'
	// 			newPath.push({ e1: fromEntrance, e2: toEntrance, internalExit: reachableExitName });
	// 			investigateRegionOld(
	// 				newlyAccessibleRegionName,
	// 				newRegionsVisitedSet,
	// 				newPath,
	// 				toEntrance,
	// 				destinationGuide
	// 			);
	// 		}
	// 	} else if (entranceData.goesToSelectedOption == goToOptions[2]) {
	// 		let connectorExit = data.connectorCoords[entranceData.goesTo];
	// 		// console.log("~investigating " + entranceData.goesTo)
	// 		if (!connectorExit) {
	// 			// console.log("!connectorExit")
	// 			return;
	// 		}
	// 		for (let reachableExitName in connectorExit.reachableExits) {
	// 			// console.log("~found reachable exit in " + entranceData.goesTo + " called " + reachableExitName)
	// 			let requirements = connectorExit.reachableExits[reachableExitName];
	// 			let canNavigateConnector = requirements.indexOf('lamp') === -1 || canNavigateDarkness;
	// 			// console.log('lamp: ' + canNavigateConnector);
	// 			let canBombIfNecessary = requirements.indexOf('bombs') === -1 || inventory['bombs'] > 0;
	// 			// console.log('bomb: ' + canBombIfNecessary);
	// 			if (
	// 				!canNavigateConnector ||
	// 				!canBombIfNecessary ||
	// 				(inventory['moon pearl'] === 0 && entranceData.coords[0] > 2007)
	// 			) {
	// 				continue;
	// 			}
	// 			let reachableExit = data.connectorCoords[reachableExitName];
	// 			if (
	// 				!reachableExit ||
	// 				!reachableExit.goesTo ||
	// 				reachableExit.goesTo === '' ||
	// 				reachableExit.goesTo === '...'
	// 			) {
	// 				// console.log("oh... !reachableExit || !reachableExit.goesTo || reachableExit.goesTo === '' || reachableExit.goesTo === '...'")
	// 				// console.log({reachableExitName})
	// 				continue;
	// 			}
	// 			let toEntrance = data.entranceCoords[reachableExit.goesTo];
	// 			if (!toEntrance) {
	// 				// console.log("oh... !toEntrance")
	// 				// console.log("entranceData.goesTo: " + entranceData.goesTo)
	// 				continue;
	// 			}
	// 			let newlyAccessibleRegionName = data.entranceToRegionMap[reachableExit.goesTo];
	// 			if (regionsVisited.has(newlyAccessibleRegionName)) {
	// 				// console.log("oh... regionsVisited.has(newlyAccessibleRegionName)")
	// 				continue;
	// 			}
	// 			let newRegionsVisitedSet = new Set(regionsVisited);
	// 			newRegionsVisitedSet.add(newlyAccessibleRegionName);
	// 			let newPath: Path = JSON.parse(JSON.stringify(path));
	// 			newPath.push(
	// 				`Enter '${fromEntranceName}' and exit at '${reachableExitName}' to get to overworld location '${reachableExit.goesTo}' in region '${data.entranceToRegionMap[reachableExit.goesTo]}'`
	// 			); //Exit at '${spawnPoint.name}'
	// 			newPath.push({ e1: fromEntrance, e2: toEntrance, internalExit: reachableExitName });
	// 			investigateRegionOld(
	// 				newlyAccessibleRegionName,
	// 				newRegionsVisitedSet,
	// 				newPath,
	// 				toEntrance,
	// 				destinationGuide
	// 			);
	// 		}
	// 	}
	// };

	const updateInventory = (item: string) => {
		inventory[item] = (inventory[item] + 1) % (data.maxInventory[item] + 1);
		recalculateRoutes();
	};
</script>

<div id="canvasContainer">
	<canvas
		id="connectorImageCanvas"
		bind:this={connectorImageCanvas}
		width={3182}
		height={1912}
		class:bringToFront={selectingConnector || selectingConnectorComesFrom}
		class:displayNone={!selectingConnector && !selectingConnectorComesFrom}
	></canvas>
	<canvas
		id="connectorCanvas"
		onmousemove={handleStartConnector}
		onclick={handleClickConnector}
		bind:this={connectorCanvas}
		width={3182}
		height={1912}
		class:bringToFront={selectingConnector || selectingConnectorComesFrom}
		class:displayNone={!selectingConnector && !selectingConnectorComesFrom}
	></canvas>
	<canvas
		id="dungeonImageCanvas"
		bind:this={dungeonImageCanvas}
		width={1862}
		height={1064}
		class:bringToFront={selectingDungeon || selectingDungeonComesFrom}
		class:displayNone={!selectingDungeon && !selectingDungeonComesFrom}
	></canvas>
	<canvas
		id="dungeonCanvas"
		onmousemove={handleStartDungeon}
		onclick={handleClickDungeon}
		bind:this={dungeonCanvas}
		width={1862}
		height={1064}
		class:bringToFront={selectingDungeon || selectingDungeonComesFrom}
		class:displayNone={!selectingDungeon && !selectingDungeonComesFrom}
	></canvas>
	<canvas id="overworldImageCanvas" bind:this={overworldImageCanvas} width={4112} height={2048}
	></canvas>
	<canvas
		id="overworldCanvas"
		onmousemove={handleStart}
		bind:this={overworldCanvas}
		width={4112}
		height={2048}
		onclick={handleClick}
	></canvas>
</div>

<div class="flex-col after-map" style="margin-top: {canvasHeight}px;">
	<!-- <p>{inventory.size}</p> -->
	<div class="flex-row wrap">
		{#each Object.keys(inventory) as itemName}
			{#if data.maxInventory[itemName] > 0}
				<button class="inventoryButton" onclick={() => updateInventory(itemName)}>
					{#if itemName === 'bombs'}
						<span>
							{5 * inventory[itemName]}/50
						</span>
					{:else if itemName === 'arrow capacity'}
						<span>
							{30 + 5 * inventory[itemName]}/70
						</span>
					{:else if itemName === 'boring pendants' || itemName === 'pendant of courage' || itemName === 'boring crystals' || itemName === 'special crystals' || itemName === 'health capacity'}
						<span>
							{inventory[itemName]} / {data.maxInventory[itemName]}
						</span>
					{:else if itemName === 'ganon crystals'}
						<span>
							GT:{inventory[itemName]}
						</span>
					{:else if itemName === 'bottle'}
						<span>
							{inventory[itemName]}
						</span>
					{/if}
					<img
						src={itemSpriteMap[`${itemName}~${inventory[itemName]}`] || itemSpriteMap[itemName]}
						class:darkened={inventory[itemName] === 0 &&
							itemName != 'dark room' &&
							itemName != 'turtle rock medallion' &&
							itemName != 'misery mire medallion' &&
							itemName != 'arrow capacity'}
						alt={itemName}
						style="width: 64px"
					/>
				</button>
			{/if}
		{/each}
	</div>
	<div>
		<!-- <button
			class="fileButton"
			class:displayNone={!routeArray || routeArray.length <= 1}
			onclick={() => {
				let newRouteIndex = (routeIndex + 1) % (routeArray?.length || 1);
				if (newRouteIndex !== routeIndex) {
					routeIndex = newRouteIndex;
					repaintRoute();
				}
			}}>View different Route ({routeIndex + 1} / {routeArray?.length})</button
		> -->
		<!-- {#if selectedPath} -->
		<ul class="route">
			{#each selectedPath.filter((it) => typeof it === 'string') as instruction}
				<li>{instruction}</li>
			{/each}
		</ul>
		<!-- {/if} -->
	</div>
	<div class="flex-row">
		<label for="searchBarLocation">Search Locations:</label>
		<input id="searchBarLocation" name="searchBarLocation" type="text" bind:value={searchBarText} />
	</div>
	<!-- <button onclick={changeArrows}>Hide/Show Arrows</button> -->
	<!-- <div class="flex-Row bordered"> -->
	<!-- <button
			onclick={() => {
				isDisplayingRoute = !isDisplayingRoute;
				recalculateRoutes();
			}}>{isDisplayingRoute ? 'Hide' : 'Show'} Route</button
		> -->
	<!-- </div> -->
	<div class="flex-Row bordered">
		<p>Current Mode: {isCrossed ? 'crossed' : 'insanity'}</p>
		<button
			class="fileButton"
			onclick={() => {
				isCrossed = !isCrossed;
			}}>Switch to {!isCrossed ? 'crossed' : 'insanity'} mode</button
		>
	</div>
	<div class="flex-col bordered">
		<button class="fileButton" onclick={downloadSaveFile}>Download Save File</button>
		<div class="flex-row bordered">
			<input type="file" bind:this={fileInput} name="fileInput" accept="text/plain" />
			<button class="fileButton" onclick={loadSaveFile}>Load Save File</button>
		</div>
	</div>
</div>
<!-- <div class="flex-row after-map" style="top: {canvasHeight}px"> -->

<span
	id="connectorSpan"
	class:invisible={!connectorExitIsHovered}
	style="top: {spanTop}px; left: {spanLeft}px; height: min-content; width: {sizeSetting}px;"
	bind:this={connectorSpan}
>
	<div class="flip-card" class:rotate={showItemMenu}>
		<div class="front-card">
			<div class="connectorSpanContainer">
				<span class="name">{selectedConnectorExitName}</span>
			</div>
		</div>
	</div>
</span>

<span
	id="dungeonSpan"
	class:invisible={!dungeonExitIsHovered}
	style="top: {spanTop}px; left: {spanLeft}px; height: min-content; width: {sizeSetting}px;"
	bind:this={dungeonSpan}
>
	<div class="flip-card" class:rotate={showItemMenu}>
		<div class="front-card">
			<div class="dungeonSpanContainer">
				<span class="name">{selectedDungeonExitName}</span>
			</div>
		</div>
	</div>
</span>

<span
	id="entranceSpan"
	class:invisible={!entranceZoomSpanVisible}
	style="top: {spanTop}px; left: {spanLeft}px; height: {sizeSetting}px; width: {sizeSetting}px;"
	bind:this={entranceSpan}
>
	<div class="flip-card" class:rotate={showItemMenu}>
		<div class="front-card">
			<div class="entranceSpanContainer">
				<p class="name">{selectedEntranceName}</p>
				<div class="flex-row">
					<input
						type="checkbox"
						id="uncollectedChecks"
						name="uncollectedChecks"
						bind:checked={entranceZoomSpanCheckBox}
					/>
					<label id="uncollectedChecksLabel" for="uncollectedChecks"
						>Contains uncollected checks{entranceRequiredItems.length +
							entranceRequiredCountItems.length >
							0 && entranceZoomSpanCheckBox
							? ' requiring:'
							: ''}</label
					><br />
				</div>
				<div class="flex-row">
					{#if hoveredEntranceName !== '' && entranceZoomSpanCheckBox}
						{#each entranceRequiredItems as str}
							{#if data.entranceCoords[hoveredEntranceName].requires[str[0]]}
								<img src={itemSpriteMap[str[0]]} alt={str[0]} style="width: 32px" />
							{/if}
						{/each}
						{#each entranceRequiredCountItems as str}
							{#if data.entranceCoords[hoveredEntranceName].requiresCount[str[0]]}
								<div>
									<span class="itemCountDisplay"
										>{str[0] === 'bombs'
											? 5 * data.entranceCoords[hoveredEntranceName].requiresCount[str[0]]
											: str[0] === 'arrow capacity'
												? 30 + 5 * data.entranceCoords[hoveredEntranceName].requiresCount[str[0]]
												: data.entranceCoords[hoveredEntranceName].requiresCount[str[0]]}</span
									>
									<img src={itemSpriteMap[str[0]]} alt={str[0]} style="width: 32px" />
								</div>
							{/if}
						{/each}
					{/if}
				</div>
				<div class="flex-col">
					<button onclick={requiresButtonPress}>Update Item Requirement</button>
				</div>
				<div class="divSection">
					<button onclick={goToClick}>Goes to...</button>
					<!-- <div class="flex-col"> -->
					{#each goToOptions as option}
						<div>
							<button
								class="option-button"
								class:invisible={selectedEntranceSelectedOption !== null &&
									selectedEntranceSelectedOption !== option}
								class:selected={selectedEntranceSelectedOption == option}
								onclick={goToOptionMap[option]}
							>
								{option}
							</button>
							<button
								class="option-select-button"
								class:invisible={selectedEntranceSelectedOption != option}
								onclick={() => {
									selectGoToOption(option);
								}}
								>{option === goToOptions[0]
									? `which exits at "${entranceZoomSpanGoesTo}"`
									: `at exit "${entranceZoomSpanGoesTo}"`}</button
							>
						</div>
					{/each}
				</div>
				<!-- </div> -->
				<div class="divSection" class:displayNone={isCrossed}>
					<button
						class:disabled={entranceHasSpecialComesFrom}
						disabled={entranceHasSpecialComesFrom}
						onclick={comeFromClick}>Comes from:</button
					>
					<!-- <div class="flex-col"> -->
					<ul class="exitList">
						{#each entranceZoomSpanComesFrom as exit}
							<li>{exit}</li>
						{/each}
					</ul>
					<div class="flex-row">
						<p>Add exit from...</p>
						{#each comeFromOptions as option}
							<div>
								<button
									onclick={() => {
										selectComeFromOption(option);
									}}
								>
									{option}
								</button>
							</div>
						{/each}
					</div>
				</div>
				<div>
					<button onclick={setGoesToSelf}>Goes to self only</button>
				</div>
			</div>
			<!-- 6 pixel border * 2 = 12 -->
			<img
				id="entranceSpanImage"
				style="width: {sizeSetting - 8}px;"
				bind:this={entranceSpanImage}
				alt="chunk"
			/>
		</div>
		<div class="back-card">
			<ItemMenu
				size={sizeSetting}
				done={doneButtonPress}
				{resetItems}
				{addOrRemoveItemFromSet}
				itemSet={data.entranceCoords[hoveredEntranceName]
					? data.entranceCoords[hoveredEntranceName].requires
					: {}}
				itemSetCount={data.entranceCoords[hoveredEntranceName]
					? data.entranceCoords[hoveredEntranceName].requiresCount
					: {}}
				{itemNames}
			></ItemMenu>
		</div>
	</div>
</span>

<span
	id="miniEntranceSpan"
	class:invisible={!entranceMiniZoomSpanVisible}
	style="top: {spanTop}px; left: {spanLeft}px; height: {sizeSettingMini}px; width: {sizeSettingMini}px;"
	bind:this={miniEntranceSpan}
>
	<button
		class="miniEntranceButton"
		onclick={finalizeExitSelection}
		aria-label={selectedEntranceName}
	></button>
	<div class="flip-card" class:rotate={showItemMenu}>
		<div class="front-card">
			<div class="entranceSpanContainer">
				<p class="name">{selectedEntranceName}</p>
			</div>
			<img
				id="entranceSpanMiniImage"
				style="width: {sizeSettingMini - 8}px;"
				bind:this={entranceSpanMiniImage}
				alt="chunk"
			/>
		</div>
	</div>
</span>

<style>
	.bordered {
		padding: 10px;
		margin: 10px;
		border-radius: 6px;
		border: solid black 5px;
	}

	.fileButton {
		border: black solid 3px;
		background-color: rgb(9, 132, 0);
	}

	.front-card,
	.back-card {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.displayNone {
		display: none;
	}

	.displayNone * {
		display: none;
	}

	.rotate {
		transform: rotateY(180deg);
	}

	.flip-card {
		transition: transform 0.6s;
		transform-style: preserve-3d;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}

	.back-card {
		transform: rotateY(180deg);
	}

	img {
		height: auto;
	}

	#entranceSpanImage,
	#entranceSpanMiniImage {
		border-radius: 6%;
		border: black solid 4px;
	}

	#canvasContainer canvas {
		position: absolute;
		top: 0;
		left: 0;
	}

	#connectorImageCanvas,
	#dungeonImageCanvas {
		background-color: white;
	}

	#connectorCanvas,
	#connectorImageCanvas,
	#dungeonCanvas,
	#dungeonImageCanvas,
	#overworldCanvas,
	#overworldImageCanvas {
		width: 100%;
	}

	.bringToFront {
		z-index: 1;
	}

	#overworldCanvas {
		z-index: 0;
	}

	.invisible {
		display: none;
	}

	.miniEntranceButton {
		position: absolute;
		height: 105%;
		width: 105%;
		background-color: transparent;
		border: none;
		z-index: 2;
		left: -8px;
		top: -8px;
	}

	.itemCountDisplay {
		color: white;
	}

	span {
		perspective: 1000px;
		position: absolute;
		background-color: transparent;
		padding-left: 1vw;
	}

	.divSection {
		background: #00000099;
		margin: 0 6px 6px 6px;
		border-radius: 10px;
	}

	p,
	.itemCountDisplay,
	#entranceSpan label,
	button,
	.name {
		text-align: center;
		text-shadow:
			-1px 0 black,
			0 1px black,
			1px 0 black,
			0 -1px black;
	}

	ul,
	li {
		margin: 0;
	}

	.exitList * {
		color: aliceblue;
		font-size: smaller;
		text-shadow:
			-1px 0 black,
			0 1px black,
			1px 0 black,
			0 -1px black;
	}

	p,
	.name {
		font-size: large;
		color: aliceblue;
		margin-bottom: 0;
	}
	#connectorSpan,
	#dungeonSpan {
		z-index: 3;
	}

	.route * {
		color: black;
		font-size: medium;
	}

	#entranceSpan label {
		font-size: small;
		color: rgb(177, 217, 177);
	}

	.entranceSpanContainer,
	.connectorSpanContainer,
	.dungeonSpanContainer {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.connectorSpanContainer,
	.dungeonSpanContainer {
		background-color: #00000099;
		border-radius: 50%;
	}

	.flex-col {
		flex-direction: column;
	}

	.flex-row,
	.flex-col {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
	}

	.inventoryButton {
		padding: 0;
		background-color: white;
		border: none;
	}

	.wrap {
		flex-wrap: wrap;
	}

	button {
		width: fit-content;
		background-color: #00000055;
		color: azure;
		margin: 2px 6px 2px 6px;
		border-radius: 4px;
		border: solid azure 3px;
	}

	.option-button,
	.option-select-button {
		margin-left: 5%;
		background-color: rgba(196, 231, 196, 0.382);
		border: none;
	}

	.option-button {
		border-radius: 50%;
		border: solid transparent 6px;
		background-color: transparent;
	}

	.option-button:hover {
		background-color: #000000aa;
	}

	.selected {
		border: solid red 6px;
	}

	.disabled {
		border: none;
	}

	.darkened {
		filter: brightness(60%);
		background-color: gray;
	}
</style>
