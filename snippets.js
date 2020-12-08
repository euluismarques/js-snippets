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
 * Original Fisher–Yates forward shuffle algorithm
 * Shuffles the given array
 * @param {Array} `a` an array containing items
 */
shuffle = (a) => {
	return a.reduce((_l, _e, i) => {
		var j = Math.floor(Math.random() * (a.length - i) + i); // j is in [i, a.length[

		var _ref = [a[j], a[i]];
		a[i] = _ref[0];
		a[j] = _ref[1];
		return a;
	}, a);
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
fixedShuffleIndex = (a, f) => {
	list = a.reduce(
		(acc, e, i) => {
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
	return a.map((e, i) => (f[i] ? e : list.unfixed[list.pos.indexOf(i)]));
};

/**
 * Format bytes to readable string
 * @link https://stackoverflow.com/a/18650828
 * @param {Number} bytes
 * @param {Number} decimals
 * @param {String} space
 */
formatBytes = (bytes, decimals = 2, space = " ") => {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + space + sizes[i];
};
