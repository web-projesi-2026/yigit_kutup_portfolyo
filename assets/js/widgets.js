document.addEventListener('DOMContentLoaded', () => {

  // WMO Weather interpretation codes -> emoji & Turkish descriptions
  const wmoWeather = {
    0:  { icon: '☀️', desc: 'Açık' },
    1:  { icon: '🌤️', desc: 'Çoğunlukla açık' },
    2:  { icon: '⛅', desc: 'Parçalı bulutlu' },
    3:  { icon: '☁️', desc: 'Kapalı' },
    45: { icon: '🌫️', desc: 'Sisli' },
    48: { icon: '🌫️', desc: 'Kırağılı sis' },
    51: { icon: '🌦️', desc: 'Hafif çisenti' },
    53: { icon: '🌦️', desc: 'Orta çisenti' },
    55: { icon: '🌦️', desc: 'Yoğun çisenti' },
    56: { icon: '🌧️', desc: 'Dondurucu çisenti' },
    57: { icon: '🌧️', desc: 'Yoğun dondurucu çisenti' },
    61: { icon: '🌧️', desc: 'Hafif yağmur' },
    63: { icon: '🌧️', desc: 'Orta yağmur' },
    65: { icon: '🌧️', desc: 'Şiddetli yağmur' },
    66: { icon: '🌧️', desc: 'Dondurucu yağmur' },
    67: { icon: '🌧️', desc: 'Şiddetli dondurucu yağmur' },
    71: { icon: '🌨️', desc: 'Hafif kar yağışı' },
    73: { icon: '🌨️', desc: 'Orta kar yağışı' },
    75: { icon: '❄️', desc: 'Yoğun kar yağışı' },
    77: { icon: '🌨️', desc: 'Kar taneleri' },
    80: { icon: '🌦️', desc: 'Hafif sağanak' },
    81: { icon: '🌧️', desc: 'Orta sağanak' },
    82: { icon: '🌧️', desc: 'Şiddetli sağanak' },
    85: { icon: '🌨️', desc: 'Hafif kar sağanağı' },
    86: { icon: '❄️', desc: 'Yoğun kar sağanağı' },
    95: { icon: '⛈️', desc: 'Gök gürültülü fırtına' },
    96: { icon: '⛈️', desc: 'Dolu ile fırtına' },
    99: { icon: '⛈️', desc: 'Şiddetli dolu fırtınası' }
  };

  function getWeatherInfo(code) {
    return wmoWeather[code] || { icon: '🌤️', desc: 'Bilinmiyor' };
  }

  // City coordinates (lat, lon)
  const cities = {
    kirsehir: { name: 'Kırşehir', lat: 39.1425, lon: 34.1709 },
    istanbul: { name: 'İstanbul', lat: 41.0082, lon: 28.9784 }
  };

  async function fetchCityWeather(cityKey) {
    const city = cities[cityKey];
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Europe%2FIstanbul`;
      
      const response = await fetch(url);
      
      if (!response.ok) throw new Error('API Hatası');
      
      const data = await response.json();
      const current = data.current;
      
      const temp = Math.round(current.temperature_2m);
      const humidity = current.relative_humidity_2m;
      const windSpeed = Math.round(current.wind_speed_10m);
      const weatherCode = current.weather_code;
      const weatherInfo = getWeatherInfo(weatherCode);

      // Update UI elements
      document.getElementById(`weather-${cityKey}-temp`).textContent = `${temp}°C`;
      document.getElementById(`weather-${cityKey}-desc`).textContent = weatherInfo.desc;
      document.getElementById(`weather-${cityKey}-humidity`).textContent = `${humidity}%`;
      document.getElementById(`weather-${cityKey}-wind`).textContent = `${windSpeed} km/s`;
      document.getElementById(`weather-${cityKey}-icon`).textContent = weatherInfo.icon;
      
    } catch (error) {
      console.error(`${city.name} hava durumu alınamadı:`, error);
      document.getElementById(`weather-${cityKey}-desc`).textContent = 'Veri alınamadı';
      document.getElementById(`weather-${cityKey}-temp`).textContent = '--°C';
      document.getElementById(`weather-${cityKey}-icon`).textContent = '⚠️';
    }
  }

  async function updateAllWeather() {
    // Fetch both cities in parallel
    await Promise.all([
      fetchCityWeather('kirsehir'),
      fetchCityWeather('istanbul')
    ]);
    
    // Update timestamp
    const now = new Date();
    const timeString = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('weather-update-time').textContent = `Son güncelleme: ${timeString}`;
  }

  // Initial fetch
  updateAllWeather();

  // Refresh every 30 minutes (1800000 ms)
  setInterval(updateAllWeather, 1800000);
});
