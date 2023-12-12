const mysql = require('mysql');

const pool = mysql.createPool({
	host: 'main-airguard-db.cvgnzib4oqah.ap-east-1.rds.amazonaws.com',
	user: 'jack',
	password: 'oq$9c@ZpHKYH2?WXqwEAo$aQUWCIkrXAKSKhuM9X',
	database: 'airguard-main',
});

function query(queryString, callback) {
	pool.getConnection((error, connection) => {
		if (error) {
			console.error('Error establishing database connection:', error);
			callback(error, null);
			return;
		}

		connection.query(queryString, (err, results) => {
			connection.release();

			if (err) {
				console.error('Error executing database query:', err);
				callback(err, null);
				return;
			}

			callback(null, results);
		});
	});
}

module.exports = {
	query,
};
