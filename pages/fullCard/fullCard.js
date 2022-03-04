import React from "react";
import { Pressable, Image, Text, ScrollView, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useWeatherContext } from "../../context/WeatherContext";
import axios from "axios";

import styles from "./style";
import { useEffect, useState } from "react";

const FullCard = (props) => {
  const navigation = useNavigation();
  const [list, setList] = React.useState([]);
  const [turn, setTurn] = React.useState(false);
  const { favorites, setFavorites } = useWeatherContext();

  if (turn == false) {
    getWeather5Days();
    setTurn(true);
  }

  function getDateFormat(date) {
    day = date.getDate();
    month = date.getMonth();
    date = day + "/" + (month + 1);
    return date;
  }

  async function getWeather5Days() {
    try {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/onecall?lat=${props.route.params.props.lat}&lon=${props.route.params.props.lon}&lang=pt_br&exclude=hourly,minutely,alerts&units=metric&appid=e85ed5d12a794fbb6b280b11782b21f9`,
          {
            headers: {
              "Content-Type": `multipart/form-data;`,
            },
          }
        )
        .then((response) => {
          setList(response.data.daily);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{props.route.params.props.name}</Text>
      {list.length == 0 ? (
        <View>
          <Image
            style={styles.icon}
            source={{
              uri: `https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif`,
            }}
          />
        </View>
      ) : (
        list.map((each, index) => (
          <View style={styles.card} key={index}>
            <View>
              <Text style={styles.subtitle}>Dia:</Text>
              <Text style={styles.data}>
                {getDateFormat(new Date(each.dt * 1000))}
              </Text>
            </View>
            <View>
              <Text style={styles.subtitle}>Clima:</Text>
              <Text>{each.weather[0].description}</Text>
            </View>
            <View>
              <Text style={styles.subtitle}>Temp:</Text>
              <Text style={styles.data}>{each.temp.day}ºC</Text>
            </View>

            <Image
              style={styles.icon}
              source={{
                uri: `https://openweathermap.org/img/w/${each.weather[0].icon}.png`,
              }}
            />
          </View>
        ))
      )}
    </ScrollView>
  );
};
export default FullCard;
