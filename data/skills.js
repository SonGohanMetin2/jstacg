/* Metin2 skills data
 * @author Son Gohan (son.gohan.mt2@gmail.com)
 * @license GNU GPL v3
 */
 
if(!tacgGlobals)
	var tacgGlobals = {};

if(!tacgGlobals.skills)
	tacgGlobals.skills = {
		k: [	0.00,
			0.05,0.06,0.08,0.10,0.12,0.14,0.16,0.18,0.20,0.22,
			0.24,0.26,0.28,0.30,0.32,0.34,0.36,0.38,0.40,0.50,
			0.52,0.54,0.56,0.58,0.60,0.63,0.66,0.69,0.72,0.82,
			0.85,0.88,0.91,0.94,0.98,1.02,1.06,1.10,1.15,1.25
		],
		aura: function (pg, level) {
			if(level == 0) return 0;
			return Math.floor((100 + 3 * pg.level + pg.str) * this.k[level]) || 0;
		},
		enchantedblade: function (pg, level) {
			if(level == 0) return 0;
			return Math.floor((3 * pg.iq + 2 * pg.level) * this.k[level]) || 0;
		},
		attackup: function (pg, level) {
			if(level == 0) return 0;
			return Math.floor(5 + (15 + pg.iq / 5) * this.k[level]) || 0;
		},
		frenzy: function (pg, level) {
			if(level == 0) return 0;
			return (50 * this.k[level]) || 0;
		},
		fear: function (pg, level) {
			if(level == 0) return 0;
			return (1 + 29 * this.k[level]) || 0;
		},
		blessing: function (pg, level) {
			if(level == 0) return 0;
			return ((4 * this.k[level] + 1) / (2 * this.k[level] + 3) * (0.3 * pg.iq + 5)) || 0;
		},
	};
		
