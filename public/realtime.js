fetch('/realtimedata')
	.then((response) => response.json())
	.then((data) => {
		const pElement = document.getElementById('co2data');
		pElement.innerText = data.CO2;

		const pElement2 = document.getElementById('tempdata');
		pElement2.innerText = data.temp;

		const pElement3 = document.getElementById('humiditydata');
		pElement3.innerText = data.humidity;

		const pElement4 = document.getElementById('gas1data');
		pElement4.innerText = data.gas1;

		// const pElement5 = document.getElementById('pm10data');
		// pElement5.innerText = data.pm10;
	})

	.catch((error) => console.error(error));

fetch('/message2data')
	.then((response) => response.json())
	.then((data) => {
		const pElement5 = document.getElementById('tvocdata');
		pElement5.innerText = data.TVOC;

		const pElement6 = document.getElementById('pm10data');
		pElement6.innerText = data.PM10;

		// const pElement7 = document.getElementById('pm25data');
		// pElement7.innerText = data.;
	})
	.catch((error) => console.error(error));
