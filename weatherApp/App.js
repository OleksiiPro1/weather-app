import axios from 'axios';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';

const API_KEY = '36534d3dbf4da1a8bf1cabf1635529f3';

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=36534d3dbf4da1a8bf1cabf1635529f3`,
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: latitude, longitude } =
        await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });

      // console.log(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
