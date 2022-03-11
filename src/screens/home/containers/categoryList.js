import {View, Text, ScrollView, StyleSheet} from "react-native"
import React from "react"
import CategoryItem from "./categoryItem"

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Khám phá danh mục</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal>
        <View style={styles.boxRow}>
          <CategoryItem title={"dsa"} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {marginTop: 10, backgroundColor: "white"},
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
    color: "black",
  },
  boxRow: {
    flexDirection: "row",
    width: 800,
    flexWrap: "wrap",
  },
})

export default CategoryList
