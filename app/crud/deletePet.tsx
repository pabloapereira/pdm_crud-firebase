import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import useCollection from "../../firebase/hooks/useCollection";
import { TextInput } from "react-native-gesture-handler";
import { router } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import globalStyles from "../../styles/globalStyles";

type Pet = {
  id?: string;
  name: string;
  type: string;
  age: string;
};

export default function DeletePet() {
  const { remove, refreshData } = useCollection<Pet>("pets");

  const [id, setId] = useState("");

  const deletarPet = async () => {
    await remove(id!);
    router.push("/home");
  };

  return (
    <GestureHandlerRootView
      style={{ flex: 1, justifyContent: "center", padding: 16 }}
    >
      <View>
        <TextInput
          style={globalStyles.input}
          placeholder="ID do pet"
          value={id}
          onChangeText={setId}
        />
        <Button onPress={deletarPet} title="Deletar" />
      </View>
    </GestureHandlerRootView>
  );
}
