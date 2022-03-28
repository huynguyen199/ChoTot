import {View, ScrollView, StyleSheet} from "react-native"
import React from "react"
import PictureItem from "./pictureItem"

const PictureList = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.row}>
        <PictureItem />
        <PictureItem />
        <PictureItem />
        <PictureItem />
        <PictureItem />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
})

export default PictureList
