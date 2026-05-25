import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/weatherSlice';
import { getWeather } from '../api';
import {
  formatTemperature,
  formatSpeed,
  getWeatherIcon,
  getWeatherText,
} from '../utils';
import { useEffect, useState } from 'react';
import styles from '../styles/DetailsStyles';

const Details = ({ route, navigation }) => {
  const { city } = route.params;
  const dispatch = useDispatch();
  const { favorites, temperatureUnit, windSpeedUnit } = useSelector(
    state => state.weather,
  );
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Today');
  const isFavorite = favorites.some(item => item.id === city.id);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const data = await getWeather(city.latitude, city.longitude);
      setWeatherData(data);
      setLoading(false);
    };
    fetchWeather();
  }, [city.latitude, city.longitude]);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(city.id));
    } else {
      dispatch(
        addFavorite({
          ...city,
          temperature: weatherData.current.temperature_2m,
          weatherCode: weatherData.current.weather_code,
        }),
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.cityName}>
          {city.name}, {city.country}
        </Text>
        <TouchableOpacity onPress={handleFavorite}>
          <Image
            source={
              isFavorite
                ? require('../../assets/starFilled.png')
                : require('../../assets/star.png')
            }
            style={styles.star}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.weatherCard}>
        <Image
          source={getWeatherIcon(weatherData.current.weather_code)}
          style={styles.mainIcon}
        />
        <View style={styles.weatherInfo}>
          <Text style={styles.temperature}>
            {formatTemperature(
              weatherData.current.temperature_2m,
              temperatureUnit,
            )}
          </Text>
          <Text style={styles.weatherText}>
            {getWeatherText(weatherData.current.weather_code)}
          </Text>
          <Text style={styles.feelsLike}>
            Feels like{' '}
            {formatTemperature(
              weatherData.current.apparent_temperature,
              temperatureUnit,
            )}
          </Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Image
            source={require('../../assets/wind.png')}
            style={styles.infoIcon}
          />
          <Text style={styles.infoLabel}>Wind</Text>
          <Text style={styles.infoValue}>
            {formatSpeed(weatherData.current.wind_speed_10m, windSpeedUnit)}
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Image
            source={require('../../assets/humidity.png')}
            style={styles.infoIcon}
          />
          <Text style={styles.infoLabel}>Humidity</Text>
          <Text style={styles.infoValue}>
            {weatherData.current.relative_humidity_2m}%
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Image
            source={require('../../assets/rain.png')}
            style={styles.infoIcon}
          />
          <Text style={styles.infoLabel}>Chance of rain</Text>
          <Text style={styles.infoValue}>
            {weatherData.daily.precipitation_probability_max[0]}%
          </Text>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Today' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('Today')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Today' && styles.activeTabText,
            ]}
          >
            Today
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Hourly' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('Hourly')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Hourly' && styles.activeTabText,
              styles.hourlyTabText,
            ]}
          >
            Hourly
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Daily' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('Daily')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Daily' && styles.activeTabText,
            ]}
          >
            Daily
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Today' && (
        <>
          <View style={styles.todayContainer}>
            <View style={styles.todayCard}>
              <Image
                source={require('../../assets/sunrise.png')}
                style={styles.todayIcon}
              />
              <Text style={styles.todayLabel}>Sunrise</Text>
              <Text style={styles.todayValue}>
                {weatherData.daily.sunrise[0].split('T')[1].slice(0, 5)}
              </Text>
            </View>
            <View style={styles.todayCard}>
              <Image
                source={require('../../assets/sunset.png')}
                style={styles.todayIcon}
              />
              <Text style={styles.todayLabel}>Sunset</Text>
              <Text style={styles.todayValue}>
                {weatherData.daily.sunset[0].split('T')[1].slice(0, 5)}
              </Text>
            </View>
          </View>

          <View style={styles.overview}>
            <Text style={styles.overviewTitle}>Today Overview</Text>
            <Text style={styles.overviewText}>
              Min{' '}
              {formatTemperature(
                weatherData.daily.temperature_2m_min[0],
                temperatureUnit,
              )}{' '}
              / Max{' '}
              {formatTemperature(
                weatherData.daily.temperature_2m_max[0],
                temperatureUnit,
              )}
              . Expect {getWeatherText(weatherData.daily.weather_code[0])}{' '}
              skies.
            </Text>
          </View>
        </>
      )}

      {activeTab === 'Hourly' && (
        <FlatList
          data={weatherData.hourly.time.slice(0, 12)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 24, paddingBottom: 50 }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.hourlyCard}>
              <Text style={styles.hourlyTime}>
                {item.split('T')[1].slice(0, 5)}
              </Text>
              <Image
                source={getWeatherIcon(weatherData.hourly.weather_code[index])}
                style={styles.hourlyIcon}
              />
              <Text style={styles.hourlyTemp}>
                {Math.round(weatherData.hourly.temperature_2m[index])}°
              </Text>
            </View>
          )}
        />
      )}

      {activeTab === 'Daily' && (
        <View style={styles.dailyContainer}>
          {weatherData.daily.time.slice(0, 7).map((day, index) => (
            <View key={index} style={styles.dailyCard}>
              <Text style={styles.dailyDay}>
                {new Date(day).toLocaleDateString('en-US', {
                  weekday: 'short',
                })}
              </Text>
              <Image
                source={getWeatherIcon(weatherData.daily.weather_code[index])}
                style={styles.dailyIcon}
              />
              <Text style={styles.dailyTemp}>
                {weatherData.daily.temperature_2m_max[index]}° /{' '}
                {weatherData.daily.temperature_2m_min[index]}°
              </Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Details;
