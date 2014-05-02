/* Atk calculating scripts for the JS-TACG.
 * @author Son Gohan (son.gohan.mt2@gmail.com)
 * @license GNU GPL v3
 */

if(!tacgCalculator)
	var tacgCalculator = {
		calculateAtk: function () {
			var weaponName = $('#weapon_name').val();
			var weapon = tacgGlobals.weapons[weaponName];
			var up = +$('#weapon_up').val();
			var atkmin = (weapon && weapon.atkmin[up]) || 0;
			var atkmax = (weapon && weapon.atkmax[up]) || 0;
			var baseTheoAtk = this.calcTheoAtk(null, null);
			var finalTheoAtk = atkmin ? this.calcTheoAtk(weapon, up) : baseTheoAtk;
			var finalEffAtk = this.calcEffAtk(weapon, up); 
			var finalEffAtkBonus = this.calcEffAtkBonus(weapon, up, false);
			var piercingDamage = this.calcEffAtkBonus(weapon, up, true);
			var totalAtkSpeed = Math.floor(100 + 
					((weapon && weapon.atkspeed[up]) || 0) +
					(+$('#bonusva').val()) + 
					($('input[name=quest][value=quest_cursebook]').prop('checked') ? 5 : 0) +
					($('#frenzy_td').prop('visibility') !== 'hidden' && 
						tacgGlobals.skills['frenzy']({}, tacgUtils.toIntLv($('#frenzylv').val()))));
			var dps = this.calcDPS(weapon, up, finalEffAtkBonus, totalAtkSpeed);

			$('#totalva').val(totalAtkSpeed);
			$('#res_base_atk').html(baseTheoAtk[0]);	
			$('#res_weapon_atk').html(atkmin + ' - ' + atkmax);
			$('#res_final_theo_atk').html(finalTheoAtk[0] + " - " + finalTheoAtk[1]);
			$('#res_final_eff_atk').html(finalEffAtk[0] + " - " + finalEffAtk[1]);
			$('#res_eff_atk_bonus_pg').html(finalEffAtkBonus['pg'][0] + " - " + finalEffAtkBonus['pg'][1]);
			$('#res_eff_atk_bonus_mob').html(finalEffAtkBonus['mob'][0] + " - " + finalEffAtkBonus['mob'][1]);
			$('#res_dps_feet_pg').html(dps['pg']['feet']);
			$('#res_dps_feet_mob').html(dps['mob']['feet']);
			$('#res_dps_horse_pg').html(dps['pg']['horse']);
			$('#res_dps_horse_mob').html(dps['mob']['horse']);
			$('#res_pierce_pg').html(piercingDamage['pg'][0] + " - " + piercingDamage['pg'][1]);
			$('#res_pierce_mob').html(piercingDamage['mob'][0] + " - " + piercingDamage['mob'][1]);
		},
		/**
		 * Calculate base theoretical attack with the 1st Mystikal-Gohan Law
		 * @param weapon The equipped weapon, or null
		 * @param up The weapon's up
		 * @return [atkmin, atkmax]
		 */
		calcTheoAtk: function (weapon, up) {
			var level = +$('#levelpg').val();
			var dex = +$('#dex').val() || 1;
			var str = +$('#str').val() || 1;
			var iq = +$('#int').val() || 1;
			var atkmin = (weapon && weapon.atkmin && weapon.atkmin[up]) || 0;
			var atkmax = (weapon && weapon.atkmax && weapon.atkmax[up]) || 0;
			var stat;

			switch($('#classpg_select').val()) {

			case 'warrior':
			case 'sura':
				stat = str;
				break;
			case 'ninja':
				stat = dex;
				break;
			case 'shaman':
				stat = iq;
				break;
			}

			return [Math.floor(2 * level + 1/75. * (70 + Math.floor((level + 2 * dex) / 9.)) * ((str + atkmin) + (stat + atkmin) / 2.)),
				Math.floor(2 * level + 1/75. * (70 + Math.floor((level + 2 * dex) / 9.)) * ((str + atkmax) + (stat + atkmax) / 2.))];
				
		},
		/**
		 * Calculate effective attack with the 2nd Mystikal-Gohan Law
		 * @param weapon The equipped weapon, or null
		 * @param up The weapon's up
		 * @return [atkmin, atkmax]
		 */
		calcEffAtk: function (weapon, up) {
			var level = +$('#levelpg').val();
			var dex = +$('#dex').val() || 1;
			var str = +$('#str').val() || 1;
			var iq = +$('#int').val() || 1;
			var baseatkmin = (weapon && weapon.atkmin && weapon.atkmin[0]) || 0;
			var baseatkmax = (weapon && weapon.atkmax && weapon.atkmax[0]) || 0;
			var growth = tacgGlobals.weapons.growth;
			var stat;

			switch($('#classpg_select').val()) {

			case 'warrior':
			case 'sura':
				stat = str;
				break;
			case 'ninja':
				stat = dex;
				break;
			case 'shaman':
				stat = iq;
				break;
			}

			return [Math.floor(2 * (level + growth(weapon, up)) + 1/75. * (70 + Math.floor((2 * dex - 0.6 * level) / 9.)) * (str + (3 * baseatkmin + stat) / 2.)),
				Math.floor(2 * (level + growth(weapon, up)) + 1/75. * (70 + Math.floor((2 * dex - 0.6 * level) / 9.)) * (str + (3 * baseatkmax + stat) / 2.))];
		},
		calcEffAtkBonus: function (weapon, up, piercing) {
			var effAtk = this.calcEffAtk(weapon, up);
			var enemyDefense = +$('#enemydef').val() || 0;
			var powerups = this.powerups();
			var bonus = this.bonus();
			//console.log("enDef = "+enemyDefense+"\npow = "+powerups);
			//console.log("bonus = { I : ["+bonus.I['pg']+", "+bonus.I['mob']+"] },"+
			//		"\n{ II : ["+bonus.II['pg']+", "+bonus.II['mob']+"] },"+
			//		"\n{ III : ["+bonus.III['pg']+", "+bonus.III['mob']+"] }");
			//console.log("enDef * bonus II  = "+(enemyDefense*bonus.II['pg']));
			return {
				pg: [
					Math.floor(Math.max(0,(effAtk[0] + powerups) * bonus.I['pg'] - enemyDefense) * bonus.II['pg'] + 
						(piercing ? enemyDefense : 0) * bonus.III['pg']),
					Math.floor(Math.max(0,(effAtk[1] + powerups) * bonus.I['pg'] - enemyDefense) * bonus.II['pg'] + 
						(piercing ? enemyDefense : 0) * bonus.III['pg'])
				],
				mob: [
					Math.floor(Math.max(0,(effAtk[0] + powerups) * bonus.I['mob'] - enemyDefense) * bonus.II['mob'] + 
						(piercing ? enemyDefense : 0) * bonus.III['mob']),
					Math.floor(Math.max(0,(effAtk[1] + powerups) * bonus.I['mob'] - enemyDefense) * bonus.II['mob'] + 
						(piercing ? enemyDefense : 0) * bonus.III['mob'])
				]
			};
		},
		powerups: function () {
			var pow = 0;
			var pgStats = {
				level: +$('#levelpg').val(),
				iq: +$('#enemyint').val(),	// this is the ENEMY's iq
				str: +$('#str').val(),
				dex: +$('#dex').val()
			};
			var jobpg = $('#jobpg').val();

			switch($('#classpg').val()) {

			case 'warrior':
				if(jobpg === 'body')
					pow += tacgGlobals.skills['aura'](pgStats, +$('#auralv').val());
				break;
			case 'sura':
				if(jobpg === 'mirage') 
					pow += tacgGlobals.skills['enchantedblade'](pgStats, +$('#auralv').val());
				break;
			case 'shaman':
				if(jobpg === 'healing')
					pow += tacgGlobals.skills['attackup'](pgStats, +$('#auralv').val());
				break;
			}
			
			if($('input[name=quest][value=quest_icemarble]').prop('checked'))
				pow += 50;
			if($('input[name=quest][value=quest_resentment]').prop('checked'))
				pow += 51;
			if($('input[name=quest][value=quest_wisdom]').prop('checked'))
				pow += 60;
			if($('#bonusatk').val())
				pow += (+$('#bonusatk').val());

			return pow;
		},
		/**
		 * Calculate bonuses.
		 * @return { I: { pg, mob }, II: ... }
		 */
		bonus: function () {
			var pgStats = {
				level: +$('#levelpg').val(),
				iq: +$('#enemyint').val(),	// this is the ENEMY's iq
				str: +$('#str').val(),
				dex: +$('#dex').val()
			};
			var tugyiDone = !!$('input[name=quest][value=quest_tugyi]').prop('checked');
			var leadersDone = !!$('input[name=quest][value=quest_leader]').prop('checked');
			var blessing = ($('input[name=enemy_skill][value=blessing]').prop('checked') && 
						tacgGlobals.skills['blessing'](pgStats, tacgUtils.toIntLv($('input[name=blessing_lv]').val()))) || 0;
			var fear = ($('input[name=enemy_skill][value=fear]').prop('checked') &&
						tacgGlobals.skills['fear'](pgStats, tacgUtils.toIntLv($('input[name=fear_lv]').val()))) || 0;
			var frenzy = ($('input[name=enemy_skill][value=frenzy]').prop('checked') &&
						tacgGlobals.skills['frenzy'](pgStats, tacgUtils.toIntLv($('input[name=frenzy_lv]').val()))) || 0;
			var average = parseInt($('#averagedmg').val(), 10) || 0;
			var darkProtect = !!$('input[name=enemy_skill][value=darkprotection]').prop('checked');
			var vspgclass = parseInt($('#vspgclass').val(),10) || 0;
			var vspg = parseInt($('#vspg').val(),10) || 0;
			var vsmobtype = parseInt($('#vsmobtype').val(),10) || 0;
			var vsmob = parseInt($('#vsmob').val(),10) || 0;
			var enemyspdef = parseInt($('#enemyspdef').val(),10) || 0;
			
			//console.log("pgclass = "+vspgclass+", pg = "+vspg+", leadersDone = "+leadersDone+", tugyi: "+tugyiDone+
			//		"\nfrenzy: "+frenzy+", fear: "+fear+", blessing: "+blessing+", average: "+average);
			//console.log("skills lv: blessing = "+tacgUtils.toIntLv($('input[name=blessing_lv]').val()));
			return {
				I: {
					pg: (1 + vspgclass / 100.) * (1 + vspg / 100.) * (leadersDone ? 1.08 : 1) * (tugyiDone ? 1.1 : 1),
					mob: (1 + vsmobtype / 100.) * (1 + vsmob / 100.) * (tugyiDone ? 1.1 : 1),
				},
				II: {
					pg: (1 - enemyspdef / 100.) * (1 - blessing / 100.) * (1 - fear / 100.) * (1 + frenzy / 200.),
					mob: 1.,
				},
				III: {
					pg: (1 + average / 100.) * (darkProtect ? 0.66 : 1),
					mob: (1 + average / 100.),
				}
			};
		},
		/**
		 * Calculate hits per second
		 * @param weapon
		 * @param up
		 */
		calcAtkSpeed: function (params) {
			var 	weapon = params.weapon,
				up = params.up,
				atkspeed = params.atkspeed,
				onFeet = params.onFeet,
				pgSex = params.pgSex;

			if(!weapon) return atkspeed / 100.;
			if(atkspeed > 165) return '?';

			if(onFeet) 
				switch(weapon.type) {

				case 'twohanded':
					return 0.009 * atkspeed + 0.1;
				case 'sword':
				case 'bell':
				case 'fan':
					return 0.014 * atkspeed;
				case 'dagger':
					return 0.021 * atkspeed;
				case 'bow':
					if(pgSex === 'female' || pgSex === 'f')
						return 0.009 * atkspeed;
					else
						return 0.006 * atkspeed;
				default:
					return '?';
				}
			else
				switch(weapon.type) {

				case 'twohanded':
					return 0.0175 * atkspeed + 0.2;
				case 'sword':
				case 'dagger':
					return 0.018 * atkspeed;
				case 'bell':
					if(atkspeed < 145)
						return 0.0215 * atkspeed;
					else if(atkspeed > 155)
						return 0.014 * atkspeed;
					else return '?';
				default:
					return '?';
				}
		},
		/**
		 * Calculate Damage Per Second
		 * @param weapon Equipped weapon or null
		 * @param up Weapon up
		 * @param damage The effective damage in form { pg: [min, max], mob: [min, max] }
		 * @return { pg: { feet, horse }, mob: { feet, horse } }
		 */
		calcDPS: function (weapon, up, damage, atkspeed) {
			var params = {
				weapon: weapon,
				up: up,
				atkspeed: atkspeed,
				pgSex: $('input[type=radio][name=sex]').val(),
				onFeet: true
			};
			//console.log('atkspeed = '+params.atkspeed);
			//console.log('frenzy: '+ ($('#frenzy_td').prop('visibility') !== 'hidden' && 
			//	tacgGlobals.skills['frenzy']({},tacgUtils.toIntLv(($('#frenzylv').val())))));
			//console.log("bonusva: "+(+$('#bonusva').val()));
			var hitsPerSecondFeet = this.calcAtkSpeed(params);
			var hitsPerSecondHorse;
			params.onFeet = false;
			hitsPerSecondHorse = this.calcAtkSpeed(params);
			//console.log("hps = "+hitsPerSecondFeet+", "+hitsPerSecondHorse);
			return {
				pg: {
					feet: 	hitsPerSecondFeet === '?' ? '?' :
						Math.round((damage['pg'][0] + damage['pg'][1]) / 2. * hitsPerSecondFeet),
					horse: 	hitsPerSecondHorse === '?' ? '?' :
						Math.round((damage['pg'][0] + damage['pg'][1]) / 2. * hitsPerSecondHorse),
				},
				mob: {
					feet: 	hitsPerSecondFeet === '?' ? '?' :
						Math.round((damage['mob'][0] + damage['mob'][1]) / 2. * hitsPerSecondFeet),
					horse: 	hitsPerSecondHorse === '?' ? '?' :
						Math.round((damage['mob'][0] + damage['mob'][1]) / 2. * hitsPerSecondHorse),
				}
			};
		}
	};
