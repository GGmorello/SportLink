import React, { useState } from 'react';
import SettingsScreenView from './SettingsScreenView';

const SettingsScreenPresenter = () => {
  const [customSportsInput, setCustomSportsInput] = useState('');
  const [distance, setDistance] = useState(0);
  const [ageInterval, setAgeInterval] = useState(0);
  const [gender, setGender] = useState('all');
  const [selectedSportsOption, setSelectedSportsOption] = useState('');  
  const [customSports, setCustomSports] = useState([
    { name: 'Padel', selected: true },
    { name: 'Football', selected: true },
    { name: 'Gym', selected: true },
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
      setDistance={setDistance}
      handleAgeIntervalValueChange={handleAgeIntervalValueChange}
      handleCustomSportsInputSubmit={handleCustomSportsInputSubmit}
      customSports={customSports}
      handleCustomSportPress={handleCustomSportPress}
    />
  );
};

export default SettingsScreenPresenter;
