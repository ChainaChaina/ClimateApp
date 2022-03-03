import { Pressable, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useWeatherContext } from "../../context/WeatherContext";
import WeatherCard from "../../components/weatherCard/weatherCard";

import styles from "./style";

const HomeApp = () => {
  const navigation = useNavigation();
  const { favorites, setFavorites } = useWeatherContext();

  function goThere() {
    navigation.navigate("Component1");
  }

  return (
    <ScrollView style={styles.container}>
      <Pressable
        onPress={() => {
          goThere();
        }}
      >
        <Text>Pronto</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          console.log(favorites);
        }}
      >
        <Text>AQUI PRINTAS</Text>
      </Pressable>

      {favorites.length == 0 ? (
        <Text>Nenhuma cidade encontrada</Text>
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
  );
};
export default HomeApp;
