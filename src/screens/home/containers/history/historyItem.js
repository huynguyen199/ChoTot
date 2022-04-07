import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import React from "react"

const HistoryItem = ({title}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HistoryItem

const styles = StyleSheet.create({
  container: {margin: 10},
})
