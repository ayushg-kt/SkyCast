import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../redux/weatherSlice';
import styles from '../styles/FavoritesStyles';
import { formatTemperature, getWeatherIcon, getWeatherText } from '../utils';

const Favorites = ({ navigation }) => {
  const dispatch = useDispatch();
  const { favorites, temperatureUnit } = useSelector(state => state.weather);

  const handleRemove = item => {
    Alert.alert('Remove Favorite', `Remove ${item.name} from favorites?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => dispatch(removeFavorite(item.id)),
      },
    ]);
  };

  const renderFavoriteItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Details', {
            city: item,
          })
        }
        onLongPress={() => handleRemove(item)}
      >
        <View style={styles.leftSection}>
          <Text style={styles.textStyle}>
            {item.name}, {item.country_code}
          </Text>
          <Text style={styles.textStyle}>
            {formatTemperature(item.temperature, temperatureUnit)}
          </Text>
          <Text style={styles.description}>
            {getWeatherText(item.weatherCode)}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <Image
            source={getWeatherIcon(item.weatherCode)}
            style={styles.weatherIcon}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No Favorites Yet</Text>
          <Text style={styles.emptyText}>
            Add cities from details screen to see them here.
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={favorites}
            keyExtractor={item => item.id.toString()}
            renderItem={renderFavoriteItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
            ListFooterComponent={
              <Text style={styles.helperText}>Long press a card to remove</Text>
            }
          />
        </>
      )}
    </View>
  );
};

export default Favorites;
