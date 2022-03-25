import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles'


const Container = ({style,children}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <ScrollView>
        <StatusBar style='auto' />
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Container