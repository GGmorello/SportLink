import React, { useState , useEffect} from 'react';
import SettingsScreenView from './SettingsScreenView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'SETTINGS';


const SettingsScreenPresenter = () => {
  const [customSportsInput, setCustomSportsInput] = useState('');
  const [distance, setDistance] = useState(0);
  const [age, setAge] = useState(0);
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

  useEffect(() => {
    // Retrieve stored settings when the component mounts
    AsyncStorage.getItem(STORAGE_KEY).then((settings) => {
      if (settings) {
        const parsedSettings = JSON.parse(settings);
        setDistance(parsedSettings.distance || 0);
        setAge(parsedSettings.age || 0);
        setGender(parsedSettings.gender || 'all');
        setSelectedSportsOption(parsedSettings.selectedSportsOption || '');
        setCustomSports(parsedSettings.customSports || []);
      }
    });
  }, []);

  useEffect(() => {
    // Store settings whenever they change
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({
      distance,
      age,
      gender,
      selectedSportsOption,
      customSports
    }));
  }, [distance, age, gender, selectedSportsOption, customSports]);

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


  const handleDistanceChange = (value) => {
    setDistance(value);
  };

  const handleAgeChange = (value) => {
    setAge(value);
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
      gender={gender}
      selectedSportsOption={selectedSportsOption}
      age={age}
      handleMatchingSportsPress={handleMatchingSportsPress}
      handleAllSportsPress={handleAllSportsPress}
      handleCustomSportsPress={handleCustomSportsPress}
      handleMenPress={handleMenPress}
      handleWomenPress={handleWomenPress}
      handleAllPress={handleAllPress}
      handleCustomSportsInputChange={handleCustomSportsInputChange}
      handleDistanceChange={handleDistanceChange}
      handleAgeChange={handleAgeChange}
      handleCustomSportsInputSubmit={handleCustomSportsInputSubmit}
      customSports={customSports}
      handleCustomSportPress={handleCustomSportPress}
    />
  );
};

export default SettingsScreenPresenter;
