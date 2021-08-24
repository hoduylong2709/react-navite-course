import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);
  const { addLocation } = useContext(LocationContext);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        addLocation(location);
      });
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;