/* Client-side scripts for JS-TACG framework.
 * @author Son Gohan (son.gohan.mt2@gmail.com) 
 * @license GNU GPL v3
 */
if(!tacgGlobals.maxLevel)
	tacgGlobals.maxLevel = 105;
if(!tacgGlobals.maxAtkSpeed)
	tacgGlobals.maxAtkSpeed = 165;

if(!tacgUtils)
	var tacgUtils = {
		setJobPG: function (classPG) {
			if(!classPG) return false;
			var job1 = document.getElementById('jobpg_1');
			var job2 = document.getElementById('jobpg_2');

			switch(classPG) {

			/* Change options values according to the PG class.
			 * Values are the job names in English (taken from
			 * metin2.us wiki)
			 */
			case 'warrior':
				job1.innerHTML = 'Corporale';
				job1.setAttribute('value','body');
				job2.innerHTML = 'Mentale';
				job2.setAttribute('value','mental');

				break;
			case 'sura':
				job1.innerHTML = 'Armi Magiche';
				job1.setAttribute('value','mirage');
				job2.innerHTML = 'Magia Nera';
				job2.setAttribute('value','blackmagic');
				break;
			case 'ninja':
				job1.innerHTML = 'Corpo a Corpo';
				job1.setAttribute('value','bladefight');
				job2.innerHTML = 'Arciere';
				job2.setAttribute('value','archery');
				break;
			case 'shaman':
				job1.innerHTML = 'Guarigione';
				job1.setAttribute('value','healing');
				job2.innerHTML = 'Drago';
				job2.setAttribute('value','dragon');
				break;
			default:
				job1.innerHTML = '';
				job1.setAttribute('value','none');
				job2.innerHTML = '';
				job1.setAttribute('value','none');
			}

			document.getElementById('jobpg').selectedIndex = 0;
			this.updateAuraAndFrenzy(classPG,job1.value);

			return true;
		},
		updateAuraAndFrenzy: function (classPG,jobPG) {
			var aurath = document.getElementById('aura_th');
			var auratd = document.getElementById('aura_td');
			var frenzyth = document.getElementById('frenzy_th');
			var frenzytd = document.getElementById('frenzy_td');

			switch(classPG) {

			case 'warrior':
				if(jobPG === 'body') {
					aurath.innerHTML = 'Lv Aura';
					aurath.style.visibility = 'visible';	
					auratd.style.visibility = 'visible';	
					frenzyth.innerHTML = 'Lv Estasi';
					frenzyth.style.visibility = 'visible';
					frenzytd.style.visibility = 'visible';
				} else {
					aurath.style.visibility = 'hidden';	
					auratd.style.visibility = 'hidden';	
					frenzyth.style.visibility = 'hidden';
					frenzytd.style.visibility = 'hidden';
				}
				break;
			case 'sura':
				if(jobPG === 'mirage') {
					aurath.innerHTML = 'Lv Lama';
					aurath.style.visibility = 'visible';	
					auratd.style.visibility = 'visible';	
				} else {
					aurath.style.visibility = 'hidden';	
					auratd.style.visibility = 'hidden';	
				}
				frenzyth.style.visibility = 'hidden';
				frenzytd.style.visibility = 'hidden';
				break;
			case 'shaman':
				if(jobPG === 'healing') {
					aurath.innerHTML = 'Lv Att+';
					aurath.style.visibility = 'visible';
					auratd.style.visibility = 'visible';
				} else {
					aurath.style.visibility = 'hidden';	
					auratd.style.visibility = 'hidden';	
				}
				frenzyth.style.visibility = 'hidden';
				frenzytd.style.visibility = 'hidden';
				break;
			default:
				aurath.style.visibility = 'hidden';
				auratd.style.visibility = 'hidden';
				frenzyth.style.visibility = 'hidden';
				frenzytd.style.visibility = 'hidden';
			}
		},
		checkLevel: function (element) {
			if(!element.value) return;
			if(element.value < 1)
				element.value = 1;
			else if(element.value > tacgGlobals.maxLevel)
				element.value = tacgGlobals.maxLevel;

		},
		checkStatus: function (element) {
			if(!element.value) return;
			if(element.value < 1)
				element.value = 1;
		},
		checkSkillLevel: function (element) {
			if(!element.value) return;
			if(!isNaN(element.value)) {
				if(element.value < 0)
					element.value = 0;
				else if(element.value > 19) {
					if(element.value < 30)
						element.value = 'M'+(element.value - 19);
					else if(element.value < 40)
						element.value = 'G'+(element.value - 29);
					else 
						element.value = 'P';
				}
			} else {
				if(
					element.value.toLowerCase().startsWith('m') ||
					element.value.toLowerCase().startsWith('g')
				) {
					var sublevel = element.value.substring(1);
					if(isNaN(sublevel) || sublevel < 1 || sublevel > 10)
						element.value = 0;
				} else if(element.value.toLowerCase() === 'p') {
					element.value = 'P';
				} else {
					element.value = 0;
				}
			}
		},
		toIntLv: function (level) {
			var sublevel;
			//console.log("level: "+level+" level? "+(!!level)+", parseInt(level,10) = "+parseInt(level,10));
			if(!level) return 0;
			if(parseInt(level, 10) === +level) return +level;
			if(level.toLowerCase().startsWith('m') || level.toLowerCase().startsWith('g')) {
				sublevel = level.substring(1);
				//console.log("sublevel = "+sublevel+", parseInt="+parseInt(sublevel,10));
				if(parseInt(sublevel, 10) === +sublevel) {
					if(level.charAt(0).toLowerCase() === 'm') return (+sublevel) + 20;
					else return (+sublevel) + 30;
				}
			} else if(level.toLowerCase() === 'p') return 40;

			return 0;
		},
		fixPerc: function (element) {
			if(!element.value) return;
			if(isNaN(element.value) && isNaN(element.value.substring(0,element.value.length-1))) {
				element.value = '0%';
				return;
			}
			element.value = Math.floor(element.value.replace('%',''))+'%';
		},
		updateEnemySkillInput: function () {
			switch($('input[type=radio][name=enemy_skill]:checked').val()) {
		
			case 'fear':
				$('input[name=fear_lv]').removeAttr('disabled');
				$('input[name=frenzy_lv]').attr('disabled','disabled');
				break;
			case 'frenzy':
				$('input[name=frenzy_lv]').removeAttr('disabled');
				$('input[name=fear_lv]').attr('disabled','disabled');
				break;
			default:
				$('input[name=fear_lv], input[name=frenzy_lv]').attr('disabled','disabled');
				break;
			}
		},
		updateQuests: function (quest) {
			var form = $('#quests_form');

			switch(quest.value) {

			case 'quest_cursebook':
				if(!quest.checked) {
					$("input[name=quest][value=quest_icemarble]").removeAttr('checked');
					$("input[name=quest][value=quest_tugyi]").removeAttr('checked');
					$("input[name=quest][value=quest_leader]").removeAttr('checked');
					$("input[name=quest][value=quest_resentment]").removeAttr('checked');
				}
				break;
			case 'quest_icemarble':
				if(!quest.checked) {
					$("input[name=quest][value=quest_tugyi]").removeAttr('checked');
					$("input[name=quest][value=quest_leader]").removeAttr('checked');
					$("input[name=quest][value=quest_resentment]").removeAttr('checked');
				} else {
					$("input[name=quest][value=quest_cursebook]").prop('checked','checked');
				}
				break;
			case 'quest_tugyi':
				if(!quest.checked) {
					$("input[name=quest][value=quest_leader]").removeAttr('checked');
					$("input[name=quest][value=quest_resentment]").removeAttr('checked');
				} else {
					$("input[name=quest][value=quest_cursebook]").prop('checked','checked');
					$("input[name=quest][value=quest_icemarble]").prop('checked','checked');
				}

				break;
			case 'quest_leader':
				if(!quest.checked) {
					$("input[name=quest][value=quest_resentment]").removeAttr('checked');
				} else {
					$("input[name=quest][value=quest_cursebook]").prop('checked','checked');
					$("input[name=quest][value=quest_icemarble]").prop('checked','checked');
					$("input[name=quest][value=quest_tugyi]").prop('checked','checked');
				}
				break;
			case 'quest_resentment':
				if(quest.checked) {
					$("input[name=quest][value=quest_cursebook]").prop('checked','checked');
					$("input[name=quest][value=quest_icemarble]").prop('checked','checked');
					$("input[name=quest][value=quest_tugyi]").prop('checked','checked');
					$("input[name=quest][value=quest_leader]").prop('checked','checked');
				}
				break;
			}
		},
		showWeaponHint: function (str) {
			$(function () {
				$('#weapon_name').autocomplete({
					//source: 'tacg_autocomplete.php',
					source: function (request, callback) {
						var searchParam = request.term;
						if(!searchParam) {
							callback(null);
							return;
						}
						var response = [];
						Object.keys(tacgGlobals.weapons).forEach(function (wea) {
							if(wea.toLowerCase().replace(/ /g,'').startsWith(searchParam.toLowerCase().replace(/ /g,'')))
								response[response.length] = { label: wea + ' (Lv ' + tacgGlobals.weapons[wea].level + ')', value: wea };
						});
						callback(response);
					},						
					minLength: 2,
				})
			});
        	},
	}; // end tacgUtils

