import React, { useState } from 'react';
import SettingsScreenView from './SettingsScreenView';

const SettingsScreenPresenter = () => {
  const [matchingSports, setMatchingSports] = useState(true);
  const [allSports, setAllSports] = useState(false);
  const [customSports, setCustomSports] = useState(false);
  const [customSportsInput, setCustomSportsInput] = useState('');
  const [distance, setDistance] = useState(0);
  const [ageInterval, setAgeInterval] = useState(0);
  const [gender, setGender] = useState('all');

  const handleMatchingSportsPress = () => {
    setMatchingSports(true);
    setAllSports(false);
    setCustomSports(false);
  };

  const handleAllSportsPress = () => {
    setMatchingSports(false);
    setAllSports(true);
    setCustomSports(false);
  };

  const handleCustomSportsPress = () => {
    setMatchingSports(false);
    setAllSports(false);
    setCustomSports(true);
  };

  const handleCustomSportsInputChange = (text) => {
    setCustomSportsInput(text);
  };

  const handleDistanceValueChange = (value) => {
    setDistance(value);
  };

  const handleAgeIntervalValueChange = (value) => {
    setAgeInterval(value);
  };

  const handleMenPress = () => {
    setGender('men');
  };

  const handleWomenPress = () => {
    setGender('women');
  };

  const handleAllPress = () => {
    setGender('all');
  };

  return (
    <SettingsScreenView
      matchingSports={matchingSports}
      allSports={allSports}
      customSports={customSports}
      customSportsInput={customSportsInput}
      distance={distance}
      ageInterval={ageInterval}
      gender={gender}
      handleMatchingSportsPress={handleMatchingSportsPress}
      handleAllSportsPress={handleAllSportsPress}
      handleCustomSportsPress={handleCustomSportsPress}
      handleCustomSportsInputChange={handleCustomSportsInputChange}
      handleDistanceValueChange={handleDistanceValueChange}
      handleAgeIntervalValueChange={handleAgeIntervalValueChange}
      handleMenPress={handleMenPress}
      handleWomenPress={handleWomenPress}
      handleAllPress={handleAllPress}
    />
  );
};

export default SettingsScreenPresenter;
