import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './Logo'

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Logo></Logo>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0271BB",
        height: 100,
        display: "flex",
        justifyContent: "center",
    },
    
})