import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";

export default function home() {
    const router = useRouter();

    const goToCreate = () => {
        router.navigate("/crud/create");
    }

    const goToDelete = () => {
        router.navigate("/crud/deletePet");
    }

    const goToList = () => {
        router.navigate("/crud/list");
    }

    const goToEdit = () => {
        router.navigate("/crud/update");
    }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Button title='Criar Pet' onPress={goToCreate}></Button>
      <Button title='Deletar Pet' onPress={goToDelete}></Button>
      <Button title='Listar Pet' onPress={goToList}></Button>
      <Button title='Editar Pet' onPress={goToEdit}></Button>
    </View>
  )
}
