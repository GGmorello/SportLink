import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { debounce } from 'lodash';

import styles from './SettingsScreenStyle';

const SettingsScreenView = ({
  customSports,
  gender,
  selectedSportsOption,
  customSportsInput,
  distance,
  age,
  handleMatchingSportsPress,
  handleAllSportsPress,
  handleCustomSportsPress,
  handleCustomSportsInputChange,
  handleDistanceChange,
  handleAgeChange,
  handleMenPress,
  handleWomenPress,
  handleAllPress,
  handleCustomSportsInputSubmit,
  handleCustomSportPress
}) => {

  const debouncedHandleDistanceChange = debounce(handleDistanceChange, 50);
  const debouncedHandleAgeChange = debounce(handleAgeChange, 50);

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
        <Text style={styles.subtitle}>Age: {Math.trunc(age)}</Text>
          <Slider
            value={age}
            onValueChange={debouncedHandleAgeChange}
            minimumValue={18}
            maximumValue={100}
            style={styles.slider}
          />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.subtitle}>Distance: {Math.trunc(distance)} km</Text>

        <Slider
          value={distance}
          onValueChange={debouncedHandleDistanceChange}
          minimumValue={0}
          maximumValue={150}
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
