import { View, Text, StatusBar, Button } from "react-native";
import React from "react";
import useCollection from "../../firebase/hooks/useCollection";
import { FlatList } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import DeletePet from "./deletePet";
import { router, useRouter } from "expo-router";

type Pet = {
  id?: string;
  name: string;
  type: string;
  age: string;
};

export default function list() {
  const { data } = useCollection<Pet>("pets");
  const router = useRouter();

  const voltarHome = () => {
    router.navigate("/home");
  };
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 16,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View>
        <Button title={"Voltar Home"} onPress={voltarHome}></Button>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>ID: {item.id} </Text>
              <Text>ID: {item.name} </Text>
              <Text>ID: {item.type} </Text>
              <Text>ID: {item.age} </Text>
            </View>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}
