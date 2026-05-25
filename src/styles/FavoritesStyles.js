import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF4FA',
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 10,
  },

  helperText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 22,
    marginTop: 4,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 22,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  },

  leftSection: {
    flex: 1,
  },

  textStyle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },

  description: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },

  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },

  weatherIcon: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    tintColor: '#000',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 120,
  },

  emptyTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },

  emptyText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 25,
    paddingHorizontal: 20,
  },
});

export default styles;
