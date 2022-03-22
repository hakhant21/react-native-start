import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN, REGISTER } from '../constants/routeName';
import Login from './../screens/Login/index';
import Register from './../screens/Register/index';

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
