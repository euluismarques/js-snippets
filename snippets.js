/**
 * Returns a random number with optional decimal cases
 * @param {Number} `min` minimum value
 * @param {Number} `max` maximum value
 * @param {Number} [`decimalPlaces`] number of decimal places
 */
genRand = (min, max, decimalPlaces = 0) =>
	(Math.random() * (max - min) + min).toFixed(decimalPlaces) * 1;

/**
 * Checks if a value a number
 * @param {String} `n` the value to check
 */
isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

/**
 * Creates a deep copy an object
 * @link http://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object#728694
 * @param {Object} `obj` an object to copy
 */
copyObject = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

/**
 * Shuffles the array `a` without moving the element which are set to true in `f`
 * @link https://codereview.stackexchange.com/questions/196493/shuffling-an-array-keeping-some-elements-fixed
 *
 * fixedShuffleIndex(
 * 	[1, 'A', 'A', 3, 'B'],  // different with multiplicity
 *  [false, true, true, false, true]
 * );
 *
 * @param {Array} `a` an array containing the items' value
 * @param {Object} `f` an array containing the items' state
 */
var fixedShuffleIndex = function fixedShuffleIndex(a, f) {
	list = a.reduce(
		function (acc, e, i) {
			if (!f[i]) {
				acc.pos.push(i);
				acc.unfixed.push(e);
			}

			return acc;
		},
		{
			pos: [],
			unfixed: [],
		}
	);
	list.pos = shuffle(list.pos);
	return a.map(function (e, i) {
		return f[i] ? e : list.unfixed[list.pos.indexOf(i)];
	});
};
