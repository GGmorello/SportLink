import React, { useState } from 'react';
import SettingsScreenView from './SettingsScreenView';

const SettingsScreenPresenter = () => {
  const [customSportsInput, setCustomSportsInput] = useState('');
  const [distance, setDistance] = useState(0);
  const [ageInterval, setAgeInterval] = useState(0);
  const [gender, setGender] = useState('all');
  const [selectedSportsOption, setSelectedSportsOption] = useState('');

  const handleCustomSportsInputChange = (text) => {
    setCustomSportsInput(text);
  };

  const handleDistanceValueChange = (value) => {
    setDistance(value);
  };

  const handleAgeIntervalValueChange = (value) => {
    setAgeInterval(value);
  };

  const handleMatchingSportsPressWithSelection = () => {
    setSelectedSportsOption('matching');
  };

  const handleAllSportsPressWithSelection = () => {
    setSelectedSportsOption('all');
  };

  const handleCustomSportsPressWithSelection = () => {
    setSelectedSportsOption('custom');
  };

  const handleMenPressWithSelection = () => {
    setGender('men');
  };

  const handleWomenPressWithSelection = () => {
    setGender('women');
  };

  const handleAllPressWithSelection = () => {
    setGender('all');
  };

  return (
    <SettingsScreenView
      customSportsInput={customSportsInput}
      distance={distance}
      ageInterval={ageInterval}
      gender={gender}
      selectedSportsOption={selectedSportsOption}
      handleMatchingSportsPressWithSelection={handleMatchingSportsPressWithSelection}
      handleAllSportsPressWithSelection={handleAllSportsPressWithSelection}
      handleCustomSportsPressWithSelection={handleCustomSportsPressWithSelection}
      handleMenPressWithSelection={handleMenPressWithSelection}
      handleWomenPressWithSelection={handleWomenPressWithSelection}
      handleAllPressWithSelection={handleAllPressWithSelection}
      handleCustomSportsInputChange={handleCustomSportsInputChange}
      handleDistanceValueChange={handleDistanceValueChange}
      handleAgeIntervalValueChange={handleAgeIntervalValueChange}

    />
  );
};

export default SettingsScreenPresenter;
