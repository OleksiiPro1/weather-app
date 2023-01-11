import axios from 'axios';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';

const API_KEY = '36534d3dbf4da1a8bf1cabf1635529f3';

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      // `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
      `https://api.openweathermap.org/data/2.5/weather?lat=48.1982853&lon=16.3730728&appid=36534d3dbf4da1a8bf1cabf1635529f3`,
    );

    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
    });

    console.log(data);
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: latitude, longitude } =
        await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);

      // console.log(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
