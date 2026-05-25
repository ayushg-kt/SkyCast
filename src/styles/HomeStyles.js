import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8edf2dc',
    paddingHorizontal: 20,
    paddingVertical: 55,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#111',
  },

  settingsIcon: {
    width: 30,
    height: 30,
    tintColor: '#000',
  },

  searchContainer: {
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    height: 52,
  },

  searchIcon: {
    width: 24,
    height: 24,
    tintColor: '#888',
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },

  input: {
    flex: 1,
    fontSize: 20,
    color: '#111',
  },

  loader: {
    marginTop: 20,
  },

  searchItem: {
    marginTop: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 6,
  },

  cityCard: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#000',
  },

  cityName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },

  arrow: {
    fontSize: 26,
    color: '#999',
  },

  favoriteTitle: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    marginBottom: 15,
  },

  favoriteCard: {
    width: 120,
    height: 160,
    backgroundColor: '#4f87bcff',
    borderRadius: 18,
    marginRight: 15,
    padding: 15,
    justifyContent: 'space-between',
  },

  favoriteCity: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    maxHeight: 60,
    ellipsizeMode: 'tail',
  },

  favoriteTemp: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },

  weatherIcon: {
    width: 38,
    height: 38,
    alignSelf: 'center',
  },

  emptyText: {
    color: '#888',
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
