"use strict";

exports.BattleMovedex = {
	//Oran Berry
	oranberry: {
		accuracy: true,
		category: "Status",
		id: "oranberry",
		isNonstandard: true,
		name: "Oran Berry",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 4],
		target: "self",
		type: "Normal",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},
	},
	//Apple
	apple: {
		accuracy: true,
		category: "Status",
		id: "apple",
		isNonstandard: true,
		name: "Apple",
		pp: 0.625,
		priority: 0,
		flags: {
			snatch: 1,
		},
		boosts: {
			spe: 2,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		type: "Normal",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Blast Seed
	blastseed: {
		accuracy: 100,
		basePower: 250,
		category: "Special",
		id: "blastseed",
		isNonstandard: true,
		name: "Blast Seed",
		pp: 0.625,
		priority: 0,
		flags: {
			protect: 1,
			bullet: 1,
		},
		secondary: false,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bullet Seed", target);
		},
		target: "normal",
		type: "Normal",
	},
	//Gravelrock
	gravelrock: {
		accuracy: 100,
		category: "Special",
		basePower: 20,
		id: "gravelrock",
		isNonstandard: true,
		name: "Gravelrock",
		pp: 0.625,
		priority: 0,
		flags: {
			protect: 1,
			distance: 1,
			gravity: 1,
		},
		multihit: [4, 7],
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Rock Blast", target);
		},
		secondary: false,
		target: "normal",
		type: "Rock",
	},
	//Heal Seed
	healseed: {
		accuracy: true,
		category: "Status",
		id: "healseed",
		isNonstandard: true,
		name: "Heal Seed",
		pp: 0.625,
		priority: 0,
		flags: {
			snatch: 1,
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Refresh", target);
		},
		onHit: function (pokemon) {
			pokemon.cureStatus();
		},
		secondary: false,
		target: "self",
		type: "Normal",
	},
	//Trap Orb
	traporb: {
		accuracy: true,
		//basePower: 0,
		category: "Status",
		id: "traporb",
		isNonstandard: true,
		name: "Trap Orb",
		pp: 0.625,
		priority: 0,
		flags: {
			reflectable: 1,
			nonsky: 1,
		},
		sideCondition: 'stealthrock',
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Stealth Rock", target);
		},
		secondary: false,
		target: "foeSide",
		type: "Ground",
	},
	//TrapBust Orb
	trapbustorb: {
		accuracy: true,
		//basePower: 0,
		category: "Status",
		id: "trapbustorb",
		isNonstandard: true,
		name: "TrapBust Orb",
		pp: 0.625,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Defog", target);
		},
		onHit: function (target, source) {
			let removeAll = {
				spikes: 1,
				toxicspikes: 1,
				stealthrock: 1,
				stickyweb: 1,
			};
			for (let sideCondition in removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.getEffect(sideCondition).name, '[from] move: TrapBust Orb', '[of] ' + source);
				}
			}
		},
		secondary: false,
		target: "normal",
		type: "Normal",
	},
	//Stun Seed
	stunseed: {
		accuracy: true,
		category: "Status",
		id: "stunseed",
		isNonstandard: true,
		name: "Stun Seed",
		pp: 0.625,
		priority: 0,
		flags: {
			authentic: 1,
			bullet: 1,
			snatch: 1,
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bullet Seed", target);
		},
		status: 'par',
		ignoreImmunity: true,
		target: "normal",
		type: "Normal",
	},
	//Totter Seed
	totterseed: {
		accuracy: true,
		category: "Status",
		id: "totterseed",
		isNonstandard: true,
		name: "Totter Seed",
		pp: 0.625,
		priority: 0,
		flags: {
			authentic: 1,
			bullet: 1,
			snatch: 1,
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bullet Seed", target);
		},
		volatileStatus: 'confusion',
		secondary: false,
		target: "normal",
		type: "Normal",
	},
	//Vile Seed
	vileseed: {
		accuracy: true,
		category: "Status",
		id: "vileseed",
		isNonstandard: true,
		name: "Vile Seed",
		pp: 0.625,
		priority: 0,
		flags: {
			authentic: 1,
			bullet: 1,
			snatch: 1,
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bullet Seed", target);
		},
		boosts: {
			def: -1,
			spd: -1,
		},
		target: "normal",
		type: "Normal",
	},
	//Violent Seed
	violentseed: {
		accuracy: true,
		category: "Status",
		id: "violentseed",
		isNonstandard: true,
		name: "Violent Seed",
		pp: 0.625,
		priority: 0,
		flags: {
			authentic: 1,
			bullet: 1,
			snatch: 1,
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bullet Seed", target);
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		target: "self",
		type: "Normal",
	},
	//Rainy Orb
	rainyorb: {
		accuracy: true,
		category: "Status",
		id: "rainyorb",
		isNonstandard: true,
		name: "Rainy Orb",
		pp: 0.625,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Rain Dance", target);
		},
		weather: 'Rain Dance',
		secondary: false,
		target: "all",
		type: "Water",
	},
	//Sunny Orb
	sunnyorb: {
		accuracy: true,
		category: "Status",
		id: "sunnyorb",
		isNonstandard: true,
		name: "Sunny Orb",
		pp: 0.625,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sunny Day", target);
		},
		weather: 'Sunny Day',
		secondary: false,
		target: "all",
		type: "Fire",
	},
	//Sandy Orb
	sandyorb: {
		accuracy: true,
		category: "Status",
		id: "sandyorb",
		isNonstandard: true,
		name: "Sandy Orb",
		pp: 0.625,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sandstorm", target);
		},
		weather: 'Sandstorm',
		secondary: false,
		target: "all",
		type: "Ground",
	},
	//Hail Orb
	hailorb: {
		accuracy: true,
		category: "Status",
		id: "hailorb",
		isNonstandard: true,
		name: "Hail Orb",
		pp: 0.625,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hail", target);
		},
		weather: 'Hail',
		secondary: false,
		target: "all",
		type: "Ice",
	},
	//One Shot Orb
	oneshotorb: {
		accuracy: 30,
		category: "Physical",
		basePower: 10000,
		id: "oneshotorb",
		isNonstandard: true,
		name: "One Shot Orb",
		pp: 0.625,
		priority: 0,
		flags: {
			protect: 1,
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Water Spout", target);
		},
		ignoreImmunity: true,
		secondary: false,
		target: "normal",
		type: "Normal",
	},
	//Warp Orb
	warporb: {
		accuracy: true,
		category: "Status",
		id: "warporb",
		isNonstandard: true,
		name: "Warp Orb",
		pp: 0.625,
		priority: -6,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Defog", target);
		},
		forceSwitch: true,
		ignoreImmunity: true,
		secondary: false,
		target: "normal",
		type: "Psychic",
	},
	//Escape Orb
	escapeorb: {
		accuracy: true,
		category: "Status",
		id: "escapeorb",
		isNonstandard: true,
		name: "Escape Orb",
		pp: 0.625,
		priority: 1,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Teleport", target);
		},
		selfSwitch: 'copyvolatile',
		ignoreImmunity: true,
		secondary: false,
		target: "self",
		type: "Psychic",
	},
	//Stick
	stick: {
		accuracy: 100,
		category: "Special",
		basePower: 15,
		id: "stick",
		isNonstandard: true,
		name: "Stick",
		pp: 0.625,
		priority: 0,
		flags: {
			protect: 1,
			gravity: 1,
		},
		multihit: [5, 10],
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Pin Missle", target);
		},
		secondary: false,
		target: "normal",
		type: "Normal",
	},
	//Iron Thorn
	ironthorn: {
		accuracy: 100,
		category: "Special",
		basePower: 25,
		id: "ironthorn",
		isNonstandard: true,
		name: "Iron Thorn",
		pp: 0.625,
		priority: 0,
		flags: {
			protect: 1,
			gravity: 1,
		},
		multihit: [4, 7],
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Flash Cannon", target);
		},
		secondary: false,
		target: "normal",
		type: "Steel",
	},
	//Evasion Orb
	evasionorb: {
		accuracy: true,
		category: "Status",
		id: "evasionorb",
		isNonstandard: true,
		name: "Evasion Orb",
		pp: 0.625,
		priority: 0,
		flags: {
			snatch: 1,
		},
		boosts: {
			evasion: 1,
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Calm Mind", target);
		},
		secondary: false,
		target: "self",
		type: "Psychic",
	},
	//Mug Orb
	mugorb: {
		accuracy: 100,
		category: "Status",
		id: "mugorb",
		isNonstandard: true,
		name: "Mug Orb",
		pp: 0.625,
		priority: 4,
		flags: {
			authentic: 1,
		},
		volatileStatus: 'snatch',
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Snatch", target);
		},
		effect: {
			duration: 1,
			onStart: function (pokemon) {
				this.add('-singleturn', pokemon, 'Snatch');
			},
			onAnyTryMove: function (source, target, move) {
				if (move && move.flags['snatch'] && move.sourceEffect !== 'snatch') {
					let snatchUser = this.effectData.source;
					snatchUser.removeVolatile('snatch');
					this.add('-activate', snatchUser, 'Snatch', '[of] ' + source);
					this.useMove(move.id, snatchUser);
					return null;
				}
			},
		},
		secondary: false,
		pressureTarget: "foeSide",
		target: "self",
		type: "Dark",
	},
	//Wonder Orb
	wonderorb: {
		accuracy: true,
		category: "Status",
		id: "wonderorb",
		isNonstandard: true,
		name: "Wonder Orb",
		pp: 0.625,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Defog", target);
		},
		onHit: function (target, source) {
			let moves = ['Oran Berry', 'Apple', 'Blast Seed', 'Gravelrock', 'Heal Seed', 'Trap Orb', 'TrapBust Orb', 'Stun Seed', 'Totter Seed', 'Vile Seed', 'Violent Seed', 'Rainy Orb', 'Sunny Orb', 'Sandy Orb', 'Hail Orb', 'One Shot Orb', 'Warp Orb', 'Escape Orb', 'Stick', 'Iron Thorn', 'Mug Orb'];
			let toUse = moves[Math.floor(Math.random() * moves.length)];
			this.add('message', source.name + '\'s wonder orb let it use a ' + toUse + '!');
			this.useMove(toUse, target);
		},
		secondary: false,
		target: "self",
		type: "Fairy",
	},
	//Awakening
	awakening: {
		accuracy: true,
		category: "status",
		id: "awakening",
		isNonstandard: true,
		name: "Awakening",
		pp: 0.625,
		priority: 6,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Calm Mind", source);
			this.add('-anim', source, "Geomancy", source);
		},
		/*onHit: function (target, source, move) {
			this.add('message', source.name + '\'s full potential has awoken!');
			if (source.maxhp / 3 < source.hp) {
				this.directDamage(source.maxhp / 3, source, source);
			} else if(source.hp !== 1) {
				this.directDamage(source.hp - 1, source, source);
			}
		},*/
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
		},
		secondary: false,
		target: "self",
		type: "Fairy",
	},
	//Sleep Seed
	sleepseed: {
		accuracy: true,
		category: "Status",
		id: "sleepseed",
		isNonstandard: true,
		name: "Sleep Seed",
		basePower: 0,
		pp: 0.625,
		priority: 0,
		flags: {authentic: 1, bullet: 1, snatch: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bullet Seed", target);
			this.add('-anim', target, "Rest", target);
		},
		status: 'slp',
		target: "normal",
		type: "Normal",
	},
	//Quick Seed
	quickseed: {
		id: "quickseed",
		name: "Quick Seed",
		accuracy: true,
		category: "Status",
		isNonstandard: true,
		pp: 0.625,
		flags: {snatch: 1},
		onPrepareHit: function (source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Agility", source);
		},
		boosts: {spe: 2},
		basePower: 0,
		priority: 0,
		secondary: false,
		target: "self",
		type: "Grass",
	},
	//Blinker Seed
	blinkerseed: {
		id: "blinkerseed",
		name: "Blinker Seed",
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: true,
		pp: 0.625,
		flags: {snatch: 1},
		onPrepareHit: function (source, target) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Smokescreen", target);
		},
		boosts: {accuracy: -1},
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Grass",
	},
	//X-Eye Seed
	xeyeseed: {
		id: "xeyeseed",
		name: "X-Eye Seed",
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: true,
		pp: 0.625,
		priority: 0,
		secondary: false,
		flags: {snatch: 1},
		onPrepareHit: function (source, target) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Confuse Ray", target);
			this.add('-anim', source, "Substitute", source);
		},
		self: {
			volatileStatus: "substitute",
		},
		volatileStatus: "confusion",
		target: "normal",
		type: "Grass",
	},
	//Slip Seed
	slipseed: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes self to become a Water type.",
		shortDesc: "Changes the self's type to Water.",
		id: "slipseed",
		name: "Slip Seed",
		pp: 0.625,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onHit: function (target) {
			if (!target.setType('Water')) return false;
			this.add('-start', target, 'typechange', 'Water');
		},
		onPrepareHit: function (source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Soak", source);
		},
		secondary: false,
		target: "self",
		type: "Water",
	},
	//Decoy Orb
	decoyorb: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		pp: 0.625,
		id: "decoyorb",
		name: "Decoy Orb",
		priority: 0,
		//Substitute
		volatileStatus: 'Substitute',
		secondary: false,
		flags: {snatch: 1},
		onPrepareHit: function (source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Substitute", source);
		},
		target: "self",
		type: "Normal",
	},
	//Pounce Orb
	pounceorb: {
		accuracy: true,
		basePower: 60,
		pp: 0.625,
		category: "Special",
		id: "pounceorb",
		name: "Pounce Orb",
		priority: 0,
		secondary: false,
		flags: {protect: 1},
		//Makes the target switch out
		forceSwitch: true,
		onPrepareHit: function (source, target) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Roar", target);
			this.add('-anim', source, "Dragon Tail", target);
		},
		target: "normal",
		type: "Normal",
	},
	//Sizebust Orb
	sizebustorb: {
		id: "sizebustorb",
		name: "Sizebust Orb",
		pp: 0.625,
		basePower: 0,
		//Grass Knot (More damage heavier it is)
		basePowerCallback: function (pokemon, target) {
			let targetWeight = target.getWeight();
			if (targetWeight >= 200) {
				this.debug('120 bp');
				return 120;
			}
			if (targetWeight >= 100) {
				this.debug('100 bp');
				return 100;
			}
			if (targetWeight >= 50) {
				this.debug('80 bp');
				return 80;
			}
			if (targetWeight >= 25) {
				this.debug('60 bp');
				return 60;
			}
			if (targetWeight >= 10) {
				this.debug('40 bp');
				return 40;
			}
			this.debug('20 bp');
			return 20;
		},
		category: "Special",
		priority: 0,
		accuracy: true,
		flags: {protect: 1},
		target: "normal",
		type: "Grass",
	},
	//Transfer Orb
	transferorb: {
		id: "transferorb",
		name: "Transfer Orb",
		pp: 0.625,
		basePower: 0,
		//Makes target transfer into user
		onHit: function (target, pokemon) {
			if (!target.transformInto(pokemon, target)) {
				return false;
			}
		},
		accuracy: true,
		flags: {snatch: 1},
		priority: 0,
		category: "Status",
		target: "normal",
		type: "Normal",
	},
};
