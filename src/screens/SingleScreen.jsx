import { View, Text, StyleSheet, TextInput, Button, Alert, FlatList, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const SingleScreen = ({navigation}) => {
    const [valueInput, setValueInput] = useState("");
    const [modelVisible, setModelVisible] = useState(false);

    const[list, setList] = useState([])

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!valueInput ) {
        Alert.alert('Regis Error', 'Please fill all fields', [
          { text: 'OK' },
        ]);
      } else {
          const id = new Date().toString()
          const newList = { id: id, valueInput }
          setList([...list,newList])
          console.log("New Text", newList)

          setValueInput("")
      }
    }

    function handleDelete(id) {
      for(let i=0;i<list.length; i++) {
        if (id == list[i].id) {
          setList(list.filter((item) => item.id != id))
        }
      }
      
    }

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Input Text</Text>
          <View>
            <TextInput style={styles.input} 
              placeholder='input something'
              autoCapitalize='none'
              keyboardType='default'
              value={valueInput}
              onChangeText={setValueInput}
            />
            <Button title='Submit' onPress={handleSubmit}/>
            { list.length > 0 ? (
              <View style={{alignSelf: 'center', width: '100%'}}>
                <FlatList 
                  data = {list}
                  keyExtractor = {(item) => item.valueInput}
                  renderItem={ ({item}) => (
                    <View style={styles.listText}>
                    <View style={{}}>
                      <Text style={{color: '#000', textAlign: 'center', width: '100%'}}>{item.valueInput}</Text>
                    </View>
                    <TouchableOpacity onPress={() => handleDelete(item.id)}>
                      <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
                  )}
                  contentContainerStyle={{ paddingVertical: 16}}
                />
              </View>
            ) : null}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      paddingHorizontal: 8,
      paddingVertical: 12,
      fontSize: 16,
      marginBottom: 8,
      borderRadius: 5,
    },
    label: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    listText: {
      marginTop: 10,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      borderWidth: 1,
      marginRight: 8,
      padding: 10,
      width: '70%'
    }
});

export default SingleScreen