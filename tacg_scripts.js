/* Client-side scripts for AJAX-TACG framework.
 * @author Son Gohan 
 * @license GNU GPL v3
 */

if(!tacgtacgGlobals)
	var tacgtacgGlobals = {
		maxLevel: 105,
		serverScriptURL: 'foo.php',
		xmlhttp: {},	// the AJAX object
	};

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

		document.getElementById('jobpg_select').selectedIndex = 0;
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
			} else if(element.value.toLowerCase() !== 'p')
				element.value = 0;
		}
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
		switch($('input[name=enemy_skill]:checked').val()) {
	
		case 'blessing':
			$('input[name=blessing_lv]').removeAttr('disabled');
			$('input[name=fear_lv], input[name=frenzy_lv]').attr('disabled','disabled');
			break;
		case 'fear':
			$('input[name=fear_lv]').removeAttr('disabled');
			$('input[name=blessing_lv], input[name=frenzy_lv]').attr('disabled','disabled');
			break;
		case 'frenzy':
			$('input[name=frenzy_lv]').removeAttr('disabled');
			$('input[name=blessing_lv], input[name=fear_lv]').attr('disabled','disabled');
			break;
		default:
			$('input[name=blessing_lv], input[name=fear_lv], input[name=frenzy_lv]').attr('disabled','disabled');
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
	} 
}; // end tacgUtils

/////////////////////////////////// AJAX FUNCTIONS //////////////////////////////////
/* @param opts.str The string containing parameter of the GET request
 * @param opts.url The url of the server-side script (optional, default=tacgGlobals.serverScriptURL)
 * @param opts.func The function to call on ready state change
 */
/*function loadXML(opts) {
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //M$ = suckers.
	}

	xmlhttp.onreadystatechange = opts.func;
	
	xmlhttp.open(
		'GET',
		opts.url+'?'+opts.str || tacgGlobals.serverScriptURL+'?'+opts.str,
		opts.async || true
	);
	xmlhttp.send();
}

// big TODO: this function gets called whenever an UI component is changed.
function calculateAtk() {
	return;

	// compose parameter string
	var classpg = encodeURIComponent(document.getElementById('classpg_select').value);
	var jobpg = encodeURIComponent(document.getElementById('jobpg_select').value);
	var levelpg = encodeURIComponent(document.getElementById('levelpg').value);

	var parstr = 'classpg='+classpg+'&jobpg='+jobpg+'&levelpg='+levelpg;

	return loadXML({
		str: parstr,
		func: function () {
			// TODO
			//if(xmlhttp.readyState == 4 && xmlhttp.status == 200) 
		}
	});
}*/
