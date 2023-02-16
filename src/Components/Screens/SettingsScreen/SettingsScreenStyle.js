import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
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
    backgroundColor: '#ffffff',
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#f2f2f2',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B4B4B',
  },
  customSportsInputContainer: {
    marginBottom: 16,
  },
  customSportsInput: {
    height: 40,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff'
  },
  
  customSportsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  customSport: {
        flexDirection: 'row', 
        backgroundColor: '#f2f2f2',
        borderColor:'#B4CBF0',
        borderWidth: 1,
        marginRight: 10,
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 10
  },
  
  selectedCustomSport: {
    backgroundColor: '#B4CBF0',
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
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '27%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
  genderButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4B4B4B',
  },
  selectedButton: {
    backgroundColor: '#B4CBF0',
  }
});

export default styles;
