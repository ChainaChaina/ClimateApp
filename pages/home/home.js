import { Pressable, Text, ScrollView, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useWeatherContext } from "../../context/WeatherContext";
import WeatherCard from "../../components/weatherCard/weatherCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./style";
import { useEffect } from "react";

const HomeApp = () => {
  const navigation = useNavigation();
  const { favorites, setFavorites } = useWeatherContext();

  function goThere() {
    navigation.navigate("Pesquisar");
  }

  useEffect(() => {
    if (favorites[0] != null) {
      storeData(favorites);
    }
    if (favorites[0] == null) {
      getData();
    }
    return function cleanup() {};
  });

  const storeData = async (value) => {
    aux = JSON.stringify(value);
    try {
      await AsyncStorage.setItem("favorited", aux);
    } catch (e) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("favorited");
      let aux = jsonValue != null ? JSON.parse(jsonValue) : null;
      setFavorites(aux);
    } catch (e) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          goThere();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>

      <ScrollView>
        {favorites.length == 0 ? (
          <View>
            <Text style={styles.emptyList}>Nenhuma cidade encontrada</Text>
            <Text style={styles.emptyListSub}>
              Use o botão abaixo para adicionar uma cidade.
            </Text>
          </View>
        ) : (
          favorites.map((city, index) => (
            <WeatherCard
              name={city.name}
              country={city.country}
              state={city.state}
              lat={city.lat}
              lon={city.lon}
              index={index}
              key={index}
            ></WeatherCard>
          ))
        )}
        <View style={styles.spacer}></View>
      </ScrollView>
    </View>
  );
};
export default HomeApp;
