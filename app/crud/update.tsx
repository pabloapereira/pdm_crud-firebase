import { Button, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import useCollection from "../../firebase/hooks/useCollection";
import { TextInput } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

import globalStyles from "../../styles/globalStyles";

type Pet = {
  id?: string;
  type: string;
  name: string;
  age: string;
};

export default function update() {
  const { update } = useCollection<Pet>("pets");
  const router = useRouter()

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState('');

  const redefinirPet = async () => {
    try {
      await update(id, {
        name,
        type,
        age,
      });
      
      router.push("/home")
    } catch(error) {
      console.log(error);
      
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', padding: 16 }}>

    <View>
      <TextInput
              value={id}
              onChangeText={setId}
              placeholder="id"
              placeholderTextColor="#999"
              style={globalStyles.input}
            />
       <TextInput
              value={name}
              onChangeText={setName}
              placeholder="nome"
              placeholderTextColor="#999"
              style={globalStyles.input}
            />
       <TextInput
              value={type}
              onChangeText={setType}
              placeholder="tipo"
              placeholderTextColor="#999"
              style={globalStyles.input}
            />
       <TextInput
              value={age}
              onChangeText={setAge}
              placeholder="idade"
              placeholderTextColor="#999"
              style={globalStyles.input}
            />

        <Button title="redefinir" onPress={redefinirPet}/>
    </View>
    </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
  list: {
    color: "#fff",
  },
  view: {
    margin: 25,
  },
});
