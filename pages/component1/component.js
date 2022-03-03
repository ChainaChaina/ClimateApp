import axios from "axios";
import React, { useEffect } from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import SmallCard from "../../components/smallCard/smallCard";
import { useWeatherContext } from "../../context/WeatherContext";

import styles from "./style";

const Component1 = () => {
  const [text, onChangeText] = React.useState("");
  const [cities, setCities] = React.useState([]);
  const { favorites, setFavorites } = useWeatherContext();

  async function searchCity(text) {
    text = text.replace(/ +/g, "-");
    console.log(text);
    try {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=5f41e26a0978d401092639812f90c5e8`,
          {
            headers: {
              "Content-Type": `multipart/form-data;`,
            },
          }
        )
        .then((response) => {
          setCities([]);
          setCities(response.data.map(getData));
          for (var i = 0; i < response.data.length; i++) {
            getData(response.data[i]);
          }
          console.log(cities);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getData(data) {
    return [data.name, data.country, data.state, data.lat, data.lon];
  }

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Procure uma cidade"
        value={text}
        onSubmitEditing={() => {
          searchCity(text);
        }}
      />

      {cities.length == 0 ? (
        <View>
          <Text style={styles.emptyList}>Nenhuma cidade encontrada</Text>
          <Text style={styles.emptyListSub}>confira o nome da cidade.</Text>
        </View>
      ) : (
        cities.map((city) => (
          <SmallCard
            name={city[0]}
            country={city[1]}
            state={city[2]}
            lat={city[3]}
            lon={city[4]}
            key={city[3]}
          ></SmallCard>
        ))
      )}
    </ScrollView>
  );
};
export default Component1;
