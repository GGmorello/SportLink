import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Slider, ScrollView } from 'react-native';
import styles from './SettingsScreenStyle';

const SettingsScreenView = ({
  customSports,
  gender,
  selectedSportsOption,
  customSportsInput,
  distance,
  ageInterval,
  handleMatchingSportsPress,
  handleAllSportsPress,
  handleCustomSportsPress,
  handleCustomSportsInputChange,
  setDistance,
  handleAgeIntervalValueChange,
  handleMenPress,
  handleWomenPress,
  handleAllPress,
  handleCustomSportsInputSubmit,
  handleCustomSportPress
}) => {

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Sports Selection:</Text>
        <TouchableOpacity
          style={[
            styles.button,
            selectedSportsOption === 'matching' && styles.selectedButton,
          ]}
          onPress={handleMatchingSportsPress}
        >
          <Text style={styles.buttonText}>Matching my sports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedSportsOption === 'all' && styles.selectedButton,
          ]}
          onPress={handleAllSportsPress}
        >
          <Text style={styles.buttonText}>All sports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedSportsOption === 'custom' && styles.selectedButton,
          ]}
          onPress={handleCustomSportsPress}
        >
          <Text style={styles.buttonText}>Custom</Text>
        </TouchableOpacity>
        {selectedSportsOption === 'custom' && (
          <View style={styles.customSportsInputContainer}>
            <TextInput
              value={customSportsInput}
              onChangeText={handleCustomSportsInputChange}
              onSubmitEditing={handleCustomSportsInputSubmit}
              style={styles.customSportsInput}
              placeholder="Create your list of sports"
              placeholderTextColor="#999"
            />
            <View style={styles.customSportsList}>
              {customSports.map((sport, index) => (
                <Text
                  key={index}
                  style={[
                    styles.customSport,
                    sport.selected && styles.selectedCustomSport,
                  ]}
                  onPress={() => handleCustomSportPress(sport)}
                >
                  {sport.name}
                </Text>
              ))}
            </View>
          </View>
        )}
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.subtitle}>Distance: {distance} km</Text>
        <Slider
          value={distance}
          onValueChange={distance => setDistance(value)}
          minimumValue={0}
          maximumValue={150}
          style={styles.slider}
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.subtitle}>Age Interval: {ageInterval}</Text>
          <Slider
            values={ageInterval}
            onValuesChange={handleAgeIntervalValueChange}
            minimumValue={18}
            maximumValue={60}
            step={1}
            style={styles.slider}
          />
      </View>
      <View style={styles.genderButtonContainer}>
        <Text style={styles.subtitle}>Show me:</Text>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'men' && styles.selectedButton,
          ]}
          onPress={handleMenPress}
        >
          <Text style={styles.genderButtonText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'women' && styles.selectedButton,
          ]}
          onPress={handleWomenPress}
        >
          <Text style={styles.genderButtonText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'all' && styles.selectedButton,
          ]}
          onPress={handleAllPress}
        >
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreenView;
