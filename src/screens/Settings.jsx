import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTemperatureUnit, setWindSpeedUnit } from '../redux/weatherSlice';
import styles from '../styles/SettingsStyles';

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();
  const { temperatureUnit, windSpeedUnit } = useSelector(
    state => state.weather,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Units</Text>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Temperature</Text>

          <View style={styles.innerSection}>
            <TouchableOpacity
              style={[
                styles.optionCard,
                temperatureUnit === 'C' && styles.activeCard,
              ]}
              onPress={() => dispatch(setTemperatureUnit('C'))}
            >
              <Text
                style={[
                  styles.unitText,
                  temperatureUnit === 'C' && styles.activeText,
                ]}
              >
                °C
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionCard,
                temperatureUnit === 'F' && styles.activeCard,
              ]}
              onPress={() => dispatch(setTemperatureUnit('F'))}
            >
              <Text
                style={[
                  styles.unitText,
                  temperatureUnit === 'F' && styles.activeText,
                ]}
              >
                °F
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Wind speed</Text>

          <View style={styles.innerSection}>
            <TouchableOpacity
              style={[
                styles.optionCard,
                windSpeedUnit === 'km/h' && styles.activeCard,
              ]}
              onPress={() => dispatch(setWindSpeedUnit('km/h'))}
            >
              <Text
                style={[
                  styles.unitText,
                  windSpeedUnit === 'km/h' && styles.activeText,
                ]}
              >
                km/h
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionCard,
                windSpeedUnit === 'mph' && styles.activeCard,
              ]}
              onPress={() => dispatch(setWindSpeedUnit('mph'))}
            >
              <Text
                style={[
                  styles.unitText,
                  windSpeedUnit === 'mph' && styles.activeText,
                ]}
              >
                mph
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.title}>App</Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>About SkyCast</Text>
        <Text style={styles.infoText}>A simple and accurate weather app.</Text>
      </View>
    </View>
  );
};

export default Settings;
