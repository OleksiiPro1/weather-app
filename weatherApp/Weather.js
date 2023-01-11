import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import propTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const weatherOptions = {
  Rain: {
    iconName: 'rainy',
    gradient: ['#136a8a', '#267871'],
    subTitle: 'rainy',
  },
  Clear: {
    iconName: 'sunny',
    gradient: ['#004FF9', '#FFF94C'],
    subTitle: 'sunny',
  },
  Snow: {
    iconName: 'snow',
    gradient: ['#8e9eab', '#eef2f3'],
    subTitle: 'snow',
  },
  Clouds: {
    iconName: 'cloudy',
    gradient: ['#70e1f5', '#ffd194'],
    subTitle: 'cloudy',
  },
  Thunderstorm: {
    iconName: 'thunderstorm',
    gradient: ['#6441A5', '#2a0845'],
    subTitle: 'thunderstorm',
  },
  Drizzle: {
    iconName: 'rainy',
    gradient: ['#FFA17F', '#00223E'],
    subTitle: 'rainy',
  },
  Atmosphere: {
    iconName: 'rainy',
    gradient: ['#73C8A9', '#373B44'],
    subTitle: 'rainy',
  },
};
export default function Weather({ temp, condition }) {
  const temperature = temp - 273.15;
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <Ionicons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />

        <Text style={styles.temp}> +{Math.round(temperature)}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>Weather</Text>
          <Text style={styles.subTitle}>
            Austria, Vein - {weatherOptions[condition].subTitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 36,
    color: 'white',
  },
  subTitle: {
    fontSize: 24,
    color: 'white',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
