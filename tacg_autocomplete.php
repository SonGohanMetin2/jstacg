<?php
	/* Server-side JQuery script. Accepts a 'term' parameter and returns names
	 * starting with that string.
	 * @author Son Gohan
	 * @license GNU GPL v3
	 */
	$names = file('weapons.db') or die('Cannot open weapons.db');
	
	// get parameter 'q' from request
	$q = $_REQUEST['term'];
	$hint = array();

	if($q !== '') {
		$q = strtolower($q);
		$len = strlen($q);
		foreach($names as $name) {
			/* Check if q matches the substring $name[0:$len] */
			if(stristr($q, substr($name, 0, $len))) {
				array_push($hint, $name);
			}
		}
	}
	
	echo json_encode($hint);
?>
