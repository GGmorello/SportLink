import React, { useEffect, useState } from "react";
import SwipeScreenView from "./SwipeScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"
import styles from "./SwipeScreenStyle"
import Geolocation from "@react-native-community/geolocation";
import { db } from "../../../Utilities/firebase.config";
import { collection, getDocs, GeoPoint, where, query, onSnapshot} from "firebase/firestore";
import { getDistance } from 'geolib';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SwipeScreenPresenter({ navigation }) {
  const [users, setUsers] = useState([]);
  const [latitude, setLatitude] = useState(10);
  const [longitude, setLongitude] = useState(34);
  const [radius, setRadius] = useState(100000);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude; 
        setLatitude(lat);
        setLongitude(long);
        compareDistances(lat, long)
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  function compareDistances(currentLatitude, currentLongitude) {
    const tempUsers = [];
    const usersCollection = collection(db, "users");
    getDocs(usersCollection).then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        if (isCloseTo(documentSnapshot.data().location._lat, documentSnapshot.data().location._long, currentLatitude, currentLongitude)) {
          tempUsers.push(documentSnapshot.data());
        }
      });
    })
    setUsers(tempUsers);
  }

  function isCloseTo(targetLatitude, targetLongitude, currentLatitude, currentLongitude) {
    const distance = getDistance({latitude: currentLatitude, longitude: currentLongitude}, {latitude: targetLatitude, longitude: targetLongitude});
    //console.log("Dist: " + distance);
    return distance < radius;
  }

  useEffect(() => {
    async function fetchSettings() {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value !== null) {
          const settings = JSON.parse(value);
          const { distance } = settings;
          setRadius(distance * 1000); // Convert km to meters
        }
      } catch (e) {
        console.log(e);
      }
    }

    if (latitude !== null && longitude !== null) {
      fetchSettings(); // Fetch settings when location is available
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (latitude !== null && longitude !== null && radius !== null) {
      // Get users within 10km radius
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("location" , "near", {
        center: new GeoPoint(latitude, longitude),
        radius
      }));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const users = [];
        snapshot.forEach((doc) => {
          const user = doc.data();
          user.id = doc.id;
          users.push(user);
        });
        setUsers(users);
      });

      return unsubscribe;
    }
  }, [latitude, longitude, radius]);

  console.log(users)
  return (
    <View style={styles.screen}>
      <SwipeScreenView />
      <View style={styles.navigationBar}>
        <NavigationBarPresenter navigation={navigation} />
      </View>
    </View>)
}