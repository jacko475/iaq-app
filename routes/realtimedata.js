const express = require('express');
const router = express.Router();

const db = require('../utils/database');

router.get('/', (req, res) => {
	db.query(
		'SELECT HOUR(time), CO2, temp, humidity, gas1 from senso8_data WHERE sn = "70B3D58C900007A5" AND CO2 IS NOT NULL AND temp IS NOT NULL AND humidity IS NOT NULL AND gas1 IS NOT NULL ORDER BY time DESC LIMIT 1',
		(error, results) => {
			if (error) throw error;
			res.json(results[0]);
		}
	);
});

module.exports = router;
