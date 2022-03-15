import {View, Text, StyleSheet, ScrollView} from "react-native"
import React from "react"
import QuestionItem from "./questionItem"

const QuestionList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Hỏi người bán qua chat</Text>
      <View style={styles.containerList}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <QuestionItem />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 5,
  },
  containerList: {
    flex: 1,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
})

export default QuestionList
