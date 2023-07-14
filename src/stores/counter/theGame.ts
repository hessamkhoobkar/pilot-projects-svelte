import { writable } from 'svelte/store';

interface gameStoreType {
	point: {
		home: number;
		away: number;
	};
	gameSet: {
		home: number;
		away: number;
	};
}

const gameStoreBlueprint: gameStoreType = {
	point: {
		home: 0,
		away: 0
	},
	gameSet: {
		home: 0,
		away: 0
	}
};

function createGameStore() {
	const { subscribe, set, update } = writable(gameStoreBlueprint);

	function updateScore(side: 'home' | 'away', type: 'add' | 'sub') {
		update((previous: gameStoreType) => {
			const updateType = type === 'add' ? 1 : -1;
			const updatedValue = Math.max(previous.point[side] + updateType, 0);
			let nextState = {
				point: {
					home: 0,
					away: 0
				},
				gameSet: {
					home: 0,
					away: 0
				}
			};

			const twoUp =
				side === 'home'
					? previous.point.home - previous.point.away >= 1
					: previous.point.away - previous.point.home >= 1;

			if (updatedValue >= 11 && twoUp) {
				nextState = {
					point: {
						home: 0,
						away: 0
					},
					gameSet: {
						...previous.gameSet,
						[side]: previous.gameSet[side] + 1
					}
				};
			} else {
				nextState = {
					...previous,
					point: {
						...previous.point,
						[side]: updatedValue
					}
				};
			}

			return nextState;
		});
	}

	function restRound() {
		update((previous) => ({
			...previous,
			point: {
				home: 0,
				away: 0
			}
		}));
	}
	function restGame() {
		set({
			point: {
				home: 0,
				away: 0
			},
			gameSet: {
				home: 0,
				away: 0
			}
		});
	}

	return {
		subscribe,
		updateScore,
		restRound,
		restGame
	};
}

export const gameStore = createGameStore();
