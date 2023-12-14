fetch('/realtimedata')
	.then((response) => response.json())
	.then((data) => {
		const pElement = document.getElementById('co2data');
		pElement.innerText = data.CO2;
		if (data.CO2 > 799) {
			pElement.style.color = '#f17c37';
		} else if (data.CO2 > 1199) {
			pElement.style.color = '#df1b1b';
		} else {
			pElement.style.color = 'green';
		}

		const pElement2 = document.getElementById('tempdata');
		pElement2.innerText = data.temp;
		if (data.temp > 24.1 && data.temp < 28) {
			pElement2.style.color = '#f17c37';
		} else if (data.temp > 28) {
			pElement2.style.color = '#df1b1b';
		} else {
			pElement2.style.color = 'green';
		}

		const pElement3 = document.getElementById('humiditydata');
		pElement3.innerText = data.humidity;
		if (data.humidity > 65 && data.humidity < 79.9) {
			pElement3.style.color = '#f17c37';
		} else if (data.humidity > 79.9) {
			pElement3.style.color = '#df1b1b';
		} else {
			pElement3.style.color = 'green';
		}

		const pElement4 = document.getElementById('gas1data');
		pElement4.innerText = data.gas1;
		if (data.gas1 > 25.1 && data.gas1 < 249.9) {
			pElement4.style.color = '#f17c37';
		} else if (data.gas1 > 250) {
			pElement4.style.color = '#df1b1b';
		} else {
			pElement4.style.color = 'green';
		}

		// const pElement5 = document.getElementById('pm10data');
		// pElement5.innerText = data.pm10;
	})

	.catch((error) => console.error(error));

fetch('/message2data')
	.then((response) => response.json())
	.then((data) => {
		const pElement5 = document.getElementById('tvocdata');
		pElement5.innerText = data.TVOC;
		if (data.TVOC > 220.1 && data.TVOC < 660) {
			pElement5.style.color = '#f17c37';
		} else if (data.TVOC > 661) {
			pElement5.style.color = '#df1b1b';
		} else {
			pElement5.style.color = 'green';
		}

		const pElement6 = document.getElementById('pm10data');
		pElement6.innerText = data.PM10;
		if (data.PM10 > 30.1 && data.PM10 < 60) {
			pElement6.style.color = '#f17c37';
		} else if (data.PM10 > 60.1) {
			pElement6.style.color = '#df1b1b';
		} else {
			pElement6.style.color = 'green';
		}

		const pElement7 = document.getElementById('pm25data');
		pElement7.innerText = data['PM2.5'];

		if (data.PM10 > 12.5 && data['PM2.5'] < 34.9) {
			pElement7.style.color = '#f17c37';
		} else if (data['PM2.5'] > 35) {
			pElement7.style.color = '#df1b1b';
		} else {
			pElement7.style.color = 'green';
		}
	})
	.catch((error) => console.error(error));
