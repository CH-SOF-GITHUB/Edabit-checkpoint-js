function inkLevels(inks) {
	var arr = Object.values(inks);
	var min = Math.min(...arr);
	console.log(min);
}

console.log(inkLevels({
	"cyan": 23,
	"magenta": 12,
	"yellow": 10
}));

console.log(inkLevels({
	"cyan": 432,
	"magenta": 543,
	"yellow": 777
}));

console.log(inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 0
}));

console.log(inkLevels({
	"cyan": 70,
	"magenta": 700,
	"yellow": 1
}));

console.log(inkLevels({
	"cyan": 6543,
	"magenta": 74543,
	"yellow": 2345678
}));

console.log(inkLevels({
	"cyan": 1,
	"magenta": 1,
	"yellow": 1
}));

console.log(inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 700
}));