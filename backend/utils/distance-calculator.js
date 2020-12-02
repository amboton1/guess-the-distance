function distance(lat1, lon1, lat2, lon2) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}

	if (lat1 === null || lon1 === null || lat2 === null || lon2 === null) {
		throw new Error('Value of latitude or longitude must not be null');
	}

	if (lat1 === undefined || lon1 === undefined || lat2 === undefined || lon2 === undefined) {
		throw new Error('Value of latitude or longitude must not be undefined');
	}

	if (typeof lat1 !== 'number' || typeof lon1 !== 'number' || typeof lat2 !== 'number' || typeof lon2 !== 'number') {
		throw new Error('Some of the values provided are not numbers');
	}
    
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		dist = Math.round(dist * 1.609344);
		return dist;
	}
}

module.exports = {distance};