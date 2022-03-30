import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'




export default function SearchComponent() {
    const [inputValue, setInputValue] = React.useState("")

    return (
        <View style={styles.field}>
        
            <Text>{inputValue}</Text>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Search"
                placeholderTextColor="black"
                autoCapitalize="none"
                value={inputValue}
                onChangeText={setInputValue}
            />
       
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        
        
    },
    field:{
        height:300,
        display: "flex",
        justifyContent:"center"
    }
})