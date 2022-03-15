import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"

const QuestionItem = () => {
  return (
    <View style={styles.container}>
      <Text>Sản phẩm này còn không</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: 20,
    alignSelf: "flex-start",
    borderColor: Color.orange,
    borderWidth: 1,
  },
})
export default QuestionItem
