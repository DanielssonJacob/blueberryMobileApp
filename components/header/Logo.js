import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Logo() {
    const [title, setTitle]=React.useState("blueberry")
    return (
        <View onTouchStart={()=>setTitle("Support!")} onTouchEnd={()=>setTitle("blueberry")} style={styles.logoBody}>
            <Text style={styles.logoText}>{title}</Text>
            <Text style={styles.logoSlogan}>Help others</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoBody:{
        borderRadius: 10,
        borderColor: "black",
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 7,
        width: "40%",
        margin: 10,
        
    
    },
    logoText: {
        color: "white",
        fontSize: 25,
    },
    logoSlogan:{
        color: "white",
        fontSize: 15,
    }
})