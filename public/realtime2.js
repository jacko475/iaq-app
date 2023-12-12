fetch('/message2data')
	.then((response) => response.json())
	.then((data) => {
		const pElement5 = document.getElementById('tvocdata');
		pElement5.innerText = data.TVOC;

		const pElement6 = document.getElementById('pm10data');
		pElement6.innerText = data.pm10;

		// const pElement2 = document.getElementById('tempdata');
		// pElement2.innerText = temperatureData;
	})
	.catch((error) => console.error(error));
