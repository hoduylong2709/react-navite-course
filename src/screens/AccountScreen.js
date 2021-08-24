import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { SafeAreaView } from 'react-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button
          title="Sign Out"
          onPress={signout}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;