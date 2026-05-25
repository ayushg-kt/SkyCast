import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF4FA',
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
  },

  back: {
    fontSize: 30,
    color: '#111827',
    fontWeight: '600',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
  },

  section: {
    marginBottom: 35,
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 20,
    gap: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  innerSection: {
    flexDirection: 'row',
    borderRadius: 14,
    overflow: 'hidden',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },

  optionCard: {
    width: 72,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E7EB',
  },

  activeCard: {
    backgroundColor: '#4f87bcff',
  },

  unitText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  activeText: {
    color: '#FFFFFF',
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },

  infoText: {
    fontSize: 18,
    lineHeight: 26,
    color: '#191a1bff',
  },
});

export default styles;
