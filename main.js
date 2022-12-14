const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '05da035697msh65f8c7bd587204bp1f3f61jsn610953ee82c9',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

function mencari() {
    let negara = document.getElementById("negara").value;
  
    fetch(
      "https://covid-193.p.rapidapi.com/statistics?country=" + negara,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let total = response.response[0].cases.total;
        let country = response.response[0].country;
        let active = response.response[0].cases.active;
        let baru = response.response[0].cases.new;
        let recovered = response.response[0].cases.recovered;
        let tested = response.response[0].tests.total;
        let death = response.response[0].deaths.total;
        document.getElementById("region").innerHTML = country;
        document.getElementById("total").innerHTML = total;
        document.getElementById("active").innerHTML = active;
        document.getElementById("baru").innerHTML = baru;
        document.getElementById("recovered").innerHTML = recovered;
        document.getElementById("tested").innerHTML = tested;
        document.getElementById("death").innerHTML = death;
        console.log(country);
      })
      .catch((err) => console.error(err));
  }