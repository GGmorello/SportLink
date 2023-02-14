import React, { useState } from 'react';
import SettingsScreenView from './SettingsScreenView';

const SettingsScreenPresenter = () => {
  const [customSportsInput, setCustomSportsInput] = useState('');
  const [distance, setDistance] = useState(0);
  const [ageInterval, setAgeInterval] = useState(0);
  const [gender, setGender] = useState('all');
  const [selectedSportsOption, setSelectedSportsOption] = useState('');  
  const [customSports, setCustomSports] = useState([
    { name: 'Padel', selected: false },
    { name: 'Football', selected: false },
    { name: 'Gym', selected: false },
    { name: 'Tennis', selected: false},
    { name: 'Run', selected: false},
    { name: 'Kayak', selected: false},
    { name: 'Bike', selected: false}
  ]);

  function handleCustomSportsInputChange(value) {
    setCustomSportsInput(value);
  }

  function handleCustomSportsInputSubmit() {
    setCustomSports(
      customSports.concat({
        name: customSportsInput,
        selected: false,
      })
    );
    setCustomSportsInput('');
  }

  const handleCustomSportPress = (sport) => {
    setCustomSports(customSports.map((s) =>
      s.name === sport.name ? { ...s, selected: !s.selected } : s
    ));
  };

  const handleAgeIntervalValueChange = (value) => {
    setAgeInterval(value);
  };

  const handleMatchingSportsPress = () => {
    setSelectedSportsOption('matching');
  };

  const handleAllSportsPress = () => {
    setSelectedSportsOption('all');
  };

  const handleCustomSportsPress = () => {
    setSelectedSportsOption('custom');
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
      customSportsInput={customSportsInput}
      distance={distance}
      ageInterval={ageInterval}
      gender={gender}
      selectedSportsOption={selectedSportsOption}
      handleMatchingSportsPress={handleMatchingSportsPress}
      handleAllSportsPress={handleAllSportsPress}
      handleCustomSportsPress={handleCustomSportsPress}
      handleMenPress={handleMenPress}
      handleWomenPress={handleWomenPress}
      handleAllPress={handleAllPress}
      handleCustomSportsInputChange={handleCustomSportsInputChange}
      setDistance={setDistance}
      handleAgeIntervalValueChange={handleAgeIntervalValueChange}
      handleCustomSportsInputSubmit={handleCustomSportsInputSubmit}
      customSports={customSports}
      handleCustomSportPress={handleCustomSportPress}
    />
  );
};

export default SettingsScreenPresenter;
