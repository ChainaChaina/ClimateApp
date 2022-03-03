import React, { useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";
import { useWeatherContext } from "../../context/WeatherContext";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

const SmallCard = (props) => {
  const { favorites, setFavorites } = useWeatherContext();
  const navigation = useNavigation();

  function handleNext(props) {
    console.log(props);
    if (favorites == undefined) {
      setFavorites(props);
    } else {
      setFavorites([...favorites, props]);
    }
    navigation.navigate("home");
  }

  return (
    <View style={styles.cardBody}>
      <View>
        <Text style={styles.name}>
          {props.name} - {props.country}{" "}
        </Text>
        <Text>{props.state}</Text>
        <Text style={styles.subs}>lat: {props.lat}</Text>
        <Text style={styles.subs}>lon: {props.lon}</Text>
      </View>

      <Icon
        onPress={() => handleNext(props)}
        size={30}
        name="heart"
        type="evilicon"
        color="#e74c3c"
      />
    </View>
  );
};

export default SmallCard;
