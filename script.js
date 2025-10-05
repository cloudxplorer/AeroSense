const API_TOKEN = "5976abc0bb7f3b3f4528d331759b6aa5c101a050";
let pollutantChart;

function aqiCategory(aqi){
  if(aqi <= 50) return {label:'Good', color:'#00e400'};
  if(aqi <= 100) return {label:'Moderate', color:'#ffff00'};
  if(aqi <= 150) return {label:'Unhealthy for Sensitive', color:'#ff7e00'};
  if(aqi <= 200) return {label:'Unhealthy', color:'#ff0000'};
  if(aqi <= 300) return {label:'Very Unhealthy', color:'#8f3f97'};
  return {label:'Hazardous', color:'#7e0023'};
}

async function fetchCityData(city){
  try{
    const url = `https://api.waqi.info/feed/${encodeURIComponent(city)}/?token=${API_TOKEN}`;
    const res = await fetch(url);
    const data = await res.json();
    if(data.status !== 'ok'){ 
      alert('City data not found or API limit reached'); 
      return; 
    }
    showAQIData(data.data);
  }catch(e){ 
    alert('Error fetching data. Please try again.'); 
  }
}

function showAQIData(data){
  document.getElementById('aqiCard').classList.remove('hidden');
  document.getElementById('cityName').textContent = data.city.name;
  document.getElementById('lastUpdated').textContent = `Last Updated: ${new Date(data.time.v * 1000).toLocaleString()}`;
  const aqi = data.aqi;
  const cat = aqiCategory(aqi);
  const aqiValueEl = document.getElementById('aqiValue');
  aqiValueEl.textContent = aqi;
  document.getElementById('aqiCategory').textContent = cat.label;
  document.getElementById('aqiCategory').style.color = cat.color;

  const pollutants = data.iaqi;
  const labels = Object.keys(pollutants).filter(key => ['pm25', 'pm10', 'o3', 'no2', 'so2', 'co'].includes(key));
  const values = labels.map(l => pollutants[l].v);
  const colors = labels.map(l => {
    switch(l) {
      case 'pm25': return '#ff0000';
      case 'pm10': return '#ff6b6b';
      case 'o3': return '#4ecdc4';
      case 'no2': return '#45b7d1';
      case 'so2': return '#96ceb4';
      case 'co': return '#feca57';
      default: return '#60a5fa';
    }
  });

  if(pollutantChart) pollutantChart.destroy();
  const ctx = document.getElementById('pollutantChart').getContext('2d');
  pollutantChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels.map(l => l.toUpperCase()),
      datasets: [{
        label: 'Concentration (µg/m³)',
        data: values,
        backgroundColor: colors,
        borderRadius: 4,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(255,255,255,0.1)' },
          ticks: { color: '#94a3b8' }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#94a3b8' }
        }
      }
    }
  });
}

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if(!city){
    alert('Please enter a city name');
    return;
  }
  fetchCityData(city);
});

document.getElementById('cityInput').addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    document.getElementById('searchBtn').click();
  }
});

document.getElementById('aqiCard').classList.add('hidden');
