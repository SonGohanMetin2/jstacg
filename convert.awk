#!/usr/bin/awk -f
# script used to convert the jacg weapon database into
# a javascript object.
# @author Son Gohan
# @license GNU GPL v3

$0 !~ /^#.*/ {
	name = $1;
	split(name,a,"(");
	name = a[1];
	gsub("_"," ",name);
	gsub("'","\\'",name);
	name = substr(name,0,length(name)-1);
	if(length(name) == 0)
		next;

	level = a[2];
	gsub("_"," ",level);
	gsub("\\)","",level);
	sub("Liv ","",level);
	for(i = 0; i < 10; ++i) {
		atkmin[i] = $(2+i);
		atkmax[i] = $(12+i);
		atkspeed[i] = $(23+i);
	}
	type = $(NF);
	if(type == "SPADONE")
		type = "twohanded";
	else if(type == "SPADA")
		type = "sword";
	else if(type == "PUGNALE")
		type = "dagger";
	else if(type == "ARCO")
		type = "bow";
	else if(type == "CAMPANA")
		type = "bell";
	else if(type == "VENTAGLIO")
		type = "fan";
	else if(type == "SPADA_SURA")
		type = "sura-sword";

	print "\t'"name"': {";
	print "\t\tlevel: "level",";
	printf "\t\tatkmin: [";
	for(i = 0; i < 9; ++i)
		printf atkmin[i]", ";
	print atkmin[9]"],"
	printf "\t\tatkmax: [";
	for(i = 0; i < 9; ++i)
		printf atkmax[i]", ";
	print atkmax[9]"],"
	printf "\t\tatkspeed: [";
	for(i = 0; i < 9; ++i)
		printf atkspeed[i]", ";
	print atkspeed[9]"],"
	print "\t\ttype: '"type"'";
	print "\t},";
}
	
