import React, { useContext } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from './../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const windowHeight = useWindowDimensions().height;

  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View
      style={[{ minHeight: Math.round(windowHeight) }]}
    >
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={clearErrorMessage}
        />
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sign In"

        />
        <NavLink
          text="Don't have an account? Sign up instead!"
          routeName="Signup"
        />
      </View>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 180
  }
});

export default SigninScreen;