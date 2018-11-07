new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		isRunning: false,
	},

	methods: {
		start: function() {
			this.isRunning = !this.isRunning;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		calcDamage: function(max, min) {
			return Math.floor(Math.random() * max) + min;
		},

		// giveUp: function() {
		// 	this.isRunning = false;
		// 	this.playerHealth = 100;
		// 	this.monsterHealth = 100;
		// },
		attack: function(max, min) {
			this.playerHealth -= this.calcDamage(10, 3);
			this.monsterHealth -= this.calcDamage(max, min);
		},
		// special: function() {
		// 	this.playerHealth -= this.calcDamage(10, 3);
		// 	this.monsterHealth -= this.calcDamage(13, 5);
		// },
		heal: function() {
			this.playerHealth += this.calcDamage(16, 10);
			this.playerHealth -= this.calcDamage(18, 6);
		},
	}
})