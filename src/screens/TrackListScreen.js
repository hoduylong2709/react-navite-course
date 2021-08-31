import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  console.log(state);

  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;