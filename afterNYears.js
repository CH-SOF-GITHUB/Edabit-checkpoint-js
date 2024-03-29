function afterNYears(names, n) {
	
	for(var x in names){
	  names[x]+=n;
	}
		return names;
}

console.log(afterNYears({
	"Joel" : 32,
	"Fred" : 44,
	"Reginald" : 65,
	"Susan" : 33,
	"Julian" : 13
}, 1))

/*
{
	"Joel" : 33,
	"Fred" : 45,
	"Reginald" : 66,
	"Susan" : 34,
	"Julian" : 14
}
*/
console.log(afterNYears({
	"Baby" : 2,
	"Child" : 8,
	"Teenager" : 15,
	"Adult" : 25,
	"Elderly" : 71
}, 19))
/*
{
	"Baby" : 21,
	"Child" : 27,
	"Teenager" : 34,
	"Adult" : 44,
	"Elderly" : 90
}
*/

console.log(afterNYears({
	"Genie" : 1000,
	"Joe" : 40
}, 5))
/*
{
	"Genie" : 1005,
	"Joe" : 45
}
*/

console.log(afterNYears({
	"Adam" : 0,
	"Eve" : 0
}, 800))
/*
{
	"Adam" : 800,
	"Eve" : 800
}
*/

console.log(afterNYears({
	"Ambitious Old Scientist" : 87,
	"Ambitious Scientist" : 42,
	"Slightly Concerned Young Scientist" : 23
}, -35))
/*
{
	"Ambitious Old Scientist" : 122,
	"Ambitious Scientist" : 77,
	"Slightly Concerned Young Scientist" : 58
}
*/

console.log(afterNYears({
	"USA" : 243,
	"Person" : 27
}, 0))
/*
{
	"USA" : 243,
	"Person" : 27
}
*/
