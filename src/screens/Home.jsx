import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { searchCities } from '../api';
import styles from '../styles/HomeStyles';
import { getWeatherIcon, formatTemperature } from '../utils';

const Home = ({ navigation }) => {
  const { favorites, temperatureUnit } = useSelector(state => state.weather);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchedCities, setSearchedCities] = useState([]);

  const handleSearch = async text => {
    setSearchText(text);
    if (text.trim().length <= 1) {
      setSearchedCities([]);
      return;
    }
    setLoading(true);
    const cities = await searchCities(text);
    setSearchedCities(cities);
    setLoading(false);
  };

  const handleCityPress = city =>
    navigation.navigate('Details', {
      city,
    });

  const renderSearchItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cityCard}
        onPress={() => handleCityPress(item)}
      >
        <View>
          <Text style={styles.cityName}>
            {item.name}, {item.country_code}
          </Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>
    );
  };

  const renderFavoriteItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.favoriteCard}
        onPress={() => handleCityPress(item)}
      >
        <Text style={styles.favoriteCity}>
          {item.name},{'\n'}
          {item.country_code}
        </Text>
        <Text style={styles.favoriteTemp}>
          {formatTemperature(item.temperature, temperatureUnit)}
        </Text>
        <Image
          source={getWeatherIcon(item.weatherCode)}
          style={styles.weatherIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>SkyCast</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            source={require('../../assets/settings.png')}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search city or place..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={handleSearch}
          style={styles.input}
        />
      </View>
      {loading && <ActivityIndicator size="large" style={styles.loader} />}
      {!loading && searchedCities.length > 0 && (
        <FlatList
          data={searchedCities}
          keyExtractor={item => item.id.toString()}
          renderItem={renderSearchItem}
          scrollEnabled={false}
          style={styles.searchItem}
        />
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.favoriteTitle}>Favorites</Text>
      </TouchableOpacity>
      {favorites.length !== 0 && (
        <FlatList
          data={favorites}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderFavoriteItem}
        />
      )}
      {searchedCities.length === 0 && (
        <Text style={styles.emptyText}>Type a city name to search</Text>
      )}
    </ScrollView>
  );
};

export default Home;
