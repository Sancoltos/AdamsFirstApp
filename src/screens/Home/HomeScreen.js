import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/common/Header';
import AppConfig from '../../services/config';
const HomeScreen = () => {
  console.log('App Config:', AppConfig);
  console.log('HomeScreen component is rendering');
  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to CPAN 2213!</Text>
        <Text style={styles.description}>
          This is your properly structured React Native application.
        </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 24,
  },
});
export default HomeScreen;
