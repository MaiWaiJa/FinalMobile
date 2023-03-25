import { View, Text, StyleSheet, TextInput, Button, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'

const ContentScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const[users, setUsers] = useState([]);

    const handleRegistration = (e) => {
        e.preventDefault()
        if (!name || !email ) {
          Alert.alert('Regis Error', 'Please fill all fields', [
            { text: 'OK' },
          ]);
        } else {
            const newUsers = { name, email }
            setUsers([...users,newUsers])
            console.log("New User", newUsers)

            // Alert.alert("Registration successful", "add new customer!!")

            setName("")
            setEmail("")
        }
    }

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Contact</Text>
          <View style={styles.inputContainer}>
              <TextInput style={styles.input} 
                  placeholder='ชื่อ - นามสกุล' 
                  autoCapitalize='words'
                  value={name}
                  onChangeText={setName}
              />
              <TextInput style={styles.input} 
                  placeholder='อีเมล'
                  autoCapitalize='none'
                  inputMode='email'
                  keyboardType='email-address'
                  value={email}
                  onChangeText={setEmail}
              />
              <Button title='Submit' onPress={handleRegistration}/>
              { users.length > 0 ? (
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 10, textAlign: 'center'}}>List of Contact</Text>
                  <FlatList 
                    data = {users}
                    keyExtractor = {(item) => item.name}
                    renderItem={({item}) => (
                      <View style={{marginBottom: 8, alignSelf: 'center'}}>
                        <Text style={styles.textStyle}>ชื่อ-นามสกุล: {item.name}</Text>
                        <Text style={styles.textStyle}>อีเมล: {item.email}</Text>
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
    textStyle: {
      fontSize: 16,
      color: '#000'
    }
});

export default ContentScreen