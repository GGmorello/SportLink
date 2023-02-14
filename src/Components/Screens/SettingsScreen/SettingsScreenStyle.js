import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    padding: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  customSportsInputContainer: {
    marginBottom: 16,
  },
  customSportsInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  customSportsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  customSport: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  
  selectedCustomSport: {
    color: 'white',
    backgroundColor: '#2596be',
  },

  sliderContainer: {
    marginBottom: 16,
  },
  sliderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  genderButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    padding: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    width: '27%',
    alignItems: 'center',
  },
  genderButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: '#ccc',
  }
});

export default styles;
