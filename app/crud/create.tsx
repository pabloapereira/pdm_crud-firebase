import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import useCollection from "../../firebase/hooks/useCollection";
import { TextInput } from "react-native-gesture-handler";
import globalStyles from "../../styles/globalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Pet = {
  id?: string;
  name: string;
  type: string;
  age: string;
};

export default function Create() {
  const { create } = useCollection<Pet>("pets");
  const router = useRouter();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");

  const submitForm = async () => {
    const generatedId = await create({
      name: name,
      type: type,
      age: age,
    });
    router.push("/home")
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <View style={{ marginBottom: 16 }}>
        <Text>Nome</Text>
        <TextInput
          style={globalStyles.input}
          value={name}
          onChangeText={setName}
        />
        <Text>Tipo</Text>
        <TextInput
          style={globalStyles.input}
          value={type}
          onChangeText={setType}
        />
        <Text>Idade</Text>
        <TextInput
          style={globalStyles.input}
          value={age}
          onChangeText={setAge}
        />
      </View>
      <View>
        <Button onPress={submitForm} title="Enviar" />
      </View>
    </GestureHandlerRootView>
  );
}
