function showweatherDetails(event) {
      event.preventDefault();
      
      const city = document.getElementById('city').value;
      const apiKey = 'f573e4390a05f48558e22fab57aae3d3'; // Remplacez 'YOUR_API_KEY' par votre clé API réelle
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
      })                         
      .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Échec de la récupération de la météo. Veuillez réessayer.</p>`;
          });
        
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );