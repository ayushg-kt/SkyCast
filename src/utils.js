const getWeatherIcon = weatherCode => {
  if (weatherCode === 0) return require('../assets/sun.png');
  if (weatherCode >= 1 && weatherCode <= 3)
    return require('../assets/cloudSun.png');
  return require('../assets/cloud.png');
};

const getWeatherText = code => {
  if (code === 0) return 'Clear Sky';
  if (code >= 1 && code <= 3) return 'Partly Cloudy';
  return 'Cloudy';
};

const formatTemperature = (temp, unit) => {
  if (unit === 'C') return `${temp}°${unit}`;
  return `${(temp * 9) / 5 + 32}°${unit}`;
};

const formatSpeed = (speed, unit) => {
  if (unit === 'km/h') return `${speed} ${unit}`;
  return `${(speed * 0.621371).toFixed(1)} ${unit}`;
};

const Tabs = {
  1: 'Today',
  2: 'Hourly',
  3: 'Daily',
};

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export {
  getWeatherIcon,
  getWeatherText,
  formatTemperature,
  formatSpeed,
  Tabs,
  debounce,
};
