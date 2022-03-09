/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';

const WeatherData = ({data}) => {
  const [historyData, setHistoryData] = useState([]);
  useEffect(() => {
    console.log(data);
  }, []);
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2); //to convert in farenheit
  const celsius = (data.main.temp - 273.15).toFixed(2); //to convert in celsius

  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <ScrollView style={styles.containerInner}>
        <Text style={styles.title}>
          {data.name} - {data.sys.country}
        </Text>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>{data.weather[0].description}</Text>
          <Image
            style={styles.image}
            source={{
              uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            }}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Temprature</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.boxText}>{data.main.temp}</Text>
            <Text style={styles.boxText}>{data.main.temp_max}</Text>
            <Text style={styles.boxText}>{fahrenheit}&#8457;</Text>
            <Text style={styles.boxText}>{celsius}&#8451;</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Humidity</Text>
          <Text style={styles.boxText}>{data.main.humidity}%</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>feels_like</Text>
          <Text style={styles.boxText}>{data.main.feels_like}unit</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Pressure</Text>
          <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Wind</Text>
          <Text style={styles.boxText}>{data.wind.speed} m/s</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>latitude</Text>
          <Text style={styles.boxText}>{data.coord.lat} unit</Text>
          <Text style={styles.boxLabel}>longitude</Text>
          <Text style={styles.boxText}>{data.coord.lon} unit</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInner: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  boxLabel: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 40,
    alignContent: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
});

export default WeatherData;
