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
  handleMatchingSportsPressWithSelection,
  handleAllSportsPressWithSelection,
  handleCustomSportsPressWithSelection,
  handleCustomSportsInputChange,
  setDistance,
  handleAgeIntervalValueChange,
  handleMenPressWithSelection,
  handleWomenPressWithSelection,
  handleAllPressWithSelection,
  handleCustomSportsInputSubmit,
  handleCustomSportPress
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
              onSubmitEditing={handleCustomSportsInputSubmit}
              style={styles.customSportsInput}
              placeholder="Create your list of sports"
              placeholderTextColor="#999"
            />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
            </ScrollView>
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
