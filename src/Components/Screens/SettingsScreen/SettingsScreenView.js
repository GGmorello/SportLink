import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Slider } from 'react-native';

const SettingsScreenView = ({
  matchingSports,
  allSports,
  customSports,
  customSportsInput,
  distance,
  ageInterval,
  gender,
  handleMatchingSportsPress,
  handleAllSportsPress,
  handleCustomSportsPress,
  handleCustomSportsInputChange,
  handleDistanceValueChange,
  handleAgeIntervalValueChange,
  handleMenPress,
  handleWomenPress,
  handleAllPress,
}) => {
  return (
    <View>
      <Text>Settings</Text>
      <View>
        <Text>Sports Selection:</Text>
        <TouchableOpacity onPress={handleMatchingSportsPress}>
          <Text>Matching my sports</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAllSportsPress}>
          <Text>All sports</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCustomSportsPress}>
          <Text>Custom</Text>
        </TouchableOpacity>
        {customSports && (
          <View>
            <TextInput
              value={customSportsInput}
              onChangeText={handleCustomSportsInputChange}
            />
          </View>
        )}
      </View>
      <View>
        <Text>Distance: {distance} km</Text>
        <Slider
          value={distance}
          onValueChange={handleDistanceValueChange}
          minimumValue={0}
          maximumValue={150}
        />
      </View>
      <View>
        <Text>Age Interval: {ageInterval}</Text>
        <Slider
          value={ageInterval}
          onValueChange={handleAgeIntervalValueChange}
        />
      </View>
      <View>
        <Text>Gender:</Text>
        <TouchableOpacity onPress={handleMenPress}>
          <Text>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWomenPress}>
          <Text>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAllPress}>
          <Text>All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreenView;
