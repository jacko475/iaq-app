const express = require('express');
const router = express.Router();

const db = require('../utils/database');

router.get('/', (req, res) => {
	db.query(
		'SELECT HOUR(time), TVOC, PM10, `PM2.5` from senso8_data WHERE sn = "70B3D58C900007A5" AND TVOC IS NOT NULL AND PM10 IS NOT NULL AND `PM2.5` IS NOT NULL ORDER BY time DESC LIMIT 1',
		(error, results) => {
			if (error) throw error;
			res.json(results[0]);
		}
	);
});

module.exports = router;
