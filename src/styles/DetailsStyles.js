import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF4FA',
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEF4FA',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  back: {
    fontSize: 40,
    color: '#111',
    fontWeight: '600',
  },

  cityName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },

  star: {
    width: 30,
    height: 30,
    tintColor: '#000',
  },

  weatherCard: {
    marginTop: 24,
    backgroundColor: '#4f87bcff',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#4f87bcff',
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 8,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingBottom: 20,
  },

  weatherInfo: {
    marginLeft: 20,
  },

  mainIcon: {
    width: 80,
    height: 80,
    marginTop: -30,
  },

  temperature: {
    marginTop: 12,
    fontSize: 44,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  weatherText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 6,
  },

  feelsLike: {
    marginTop: 10,
    color: '#EAF4FF',
    fontSize: 17,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 22,
  },

  infoCard: {
    width: '33%',
    alignItems: 'center',
  },

  infoIcon: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
    tintColor: '#000',
  },

  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },

  infoValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  tabsContainer: {
    flexDirection: 'row',
    marginTop: 32,
    borderBottomColor: '#4B5563',
    borderBottomWidth: 1,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },

  activeTabButton: {
    borderBottomColor: '#4f87bcff',
    borderBottomWidth: 3,
  },

  tabText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4B5563',
  },

  hourlyTabText: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: '#4B5563',
    borderRightColor: '#4B5563',
    paddingHorizontal: 28,
  },

  activeTabText: {
    color: '#4f87bcff',
  },

  todayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },

  todayCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    alignItems: 'center',
    paddingVertical: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  },

  todayIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#F5B942',
  },

  todayLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },

  todayValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },

  overview: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 22,
    marginBottom: 70,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  },

  overviewTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },

  overviewText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#4B5563',
  },

  hourlyCard: {
    width: 95,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    alignItems: 'center',
    paddingVertical: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  },

  hourlyTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B5563',
  },

  hourlyIcon: {
    width: 42,
    height: 42,
    marginVertical: 5,
    tintColor: '#F5B942',
  },

  hourlyTemp: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },

  dailyContainer: {
    marginTop: 24,
    marginBottom: 50,
  },

  dailyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  },

  dailyDay: {
    width: 55,
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  dailyIcon: {
    width: 40,
    height: 40,
    tintColor: '#F5B942',
  },

  dailyTemp: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
});

export default styles;
