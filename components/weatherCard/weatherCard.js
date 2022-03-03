import React, { useEffect } from "react";
import { Text, TextInput, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useWeatherContext } from "../../context/WeatherContext";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import styles from "./style";

const WeatherCard = (props) => {
  const { favorites, setFavorites } = useWeatherContext();
  const [clima, setClima] = React.useState();
  const [temp, setTemp] = React.useState();
  const [tempMax, setTempMax] = React.useState();
  const [tempMin, setTempMin] = React.useState();
  const [icon, setIcon] = React.useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getWeather();
  });

  function deleteMe() {
    favorites.splice(props.index, 1);
    let aux = [...favorites];
    setFavorites(aux);

    // setFavorites(
    //   favorites.filter((city) => {
    //     city.name != props.name && city.lat != props.lat;
    //   })
    // );
    // console.log(favorites.slice(props.index - 1, 1));
    // setFavorites(favorites.slice(props.index - 1, 1));
  }

  async function getWeather() {
    try {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&id=524901&units=metric&lang=pt_br&appid=5f41e26a0978d401092639812f90c5e8`,
          {
            headers: {
              "Content-Type": `multipart/form-data;`,
            },
          }
        )
        .then((response) => {
          setClima(response.data.weather[0].description);
          setTemp(response.data.main.temp);
          setTempMin(response.data.main.temp_min);
          setTempMax(response.data.main.temp_max);
          setIcon(response.data.weather[0].icon);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.cardBody}>
      <View>
        <View style={styles.title}>
          <Text style={styles.name}>{props.name} </Text>
          <Image
            style={styles.icon}
            source={{
              uri: `https://openweathermap.org/img/w/${icon}.png`,
            }}
          />
          <Text style={styles.temp}>{temp}ºC</Text>
        </View>

        <Text>{clima}</Text>
        <Text style={styles.subs}>Temperatura Maxima: {tempMax}</Text>
        <Text style={styles.subs}>Temperatura Minima: {tempMin}</Text>
      </View>

      <Icon
        onPress={() => deleteMe()}
        size={30}
        name="close"
        type="evilicon"
        color="#e74c3c"
      />
    </View>
  );
};

export default WeatherCard;
