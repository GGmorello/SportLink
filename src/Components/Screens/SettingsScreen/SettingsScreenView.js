import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Slider } from 'react-native';
import styles from './SettingsScreenStyle';

const SettingsScreenView = ({
  gender,
  selectedSportsOption,
  customSportsInput,
  distance,
  ageInterval,
  handleMatchingSportsPressWithSelection,
  handleAllSportsPressWithSelection,
  handleCustomSportsPressWithSelection,
  handleCustomSportsInputChange,
  handleDistanceValueChange,
  handleAgeIntervalValueChange,
  handleMenPressWithSelection,
  handleWomenPressWithSelection,
  handleAllPressWithSelection,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Sports Selection:</Text>
        <TouchableOpacity
          style={[
            styles.button,
            selectedSportsOption === 'matching' && styles.selectedButton,
          ]}
          onPress={handleMatchingSportsPressWithSelection}
        >
          <Text style={styles.buttonText}>Matching my sports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedSportsOption === 'all' && styles.selectedButton,
          ]}
          onPress={handleAllSportsPressWithSelection}
        >
          <Text style={styles.buttonText}>All sports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedSportsOption === 'custom' && styles.selectedButton,
          ]}
          onPress={handleCustomSportsPressWithSelection}
        >
          <Text style={styles.buttonText}>Custom</Text>
        </TouchableOpacity>
        {selectedSportsOption === 'custom' && (
          <View style={styles.customSportsInputContainer}>
            <TextInput
              value={customSportsInput}
              onChangeText={handleCustomSportsInputChange}
              style={styles.customSportsInput}
            />
          </View>
        )}
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.subtitle}>Distance: {distance} km</Text>
        <Slider
          value={distance}
          onValueChange={handleDistanceValueChange}
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
        <Text style={styles.genderButtonText}>Gender:</Text>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'men' && styles.selectedButton,
          ]}
          onPress={handleMenPressWithSelection}
        >
          <Text style={styles.genderButtonText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'women' && styles.selectedButton,
          ]}
          onPress={handleWomenPressWithSelection}
        >
          <Text style={styles.genderButtonText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'all' && styles.selectedButton,
          ]}
          onPress={handleAllPressWithSelection}
        >
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreenView;
