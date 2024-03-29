import React, { useContext } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  const windowHeight = useWindowDimensions().height;

  return (
    <View
      style={[{ minHeight: Math.round(windowHeight) }]}
    >
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={clearErrorMessage}
        />
        <AuthForm
          headerText="Sign Up for Tracker"
          errorMessage={state.errorMessage}
          submitButtonText="Sign Up"
          onSubmit={signup}
        />
        <NavLink
          routeName="Signin"
          text="Already have an account? Sign in instead!"
        />
      </View>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 180
  }
});

export default SignupScreen;