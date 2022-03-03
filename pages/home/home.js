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
    navigation.navigate("Component1");
  }

  useEffect(() => {
    console.log(favorites);
    storeData(favorites);
    let teste = getData();
    console.log(teste.then((res) => console.log(res)));
  });

  const storeData = async (favorites) => {
    try {
      console.log("salvo");
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("FavoriteKey", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("FavoriteKey");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
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
      </ScrollView>
    </View>
  );
};
export default HomeApp;
