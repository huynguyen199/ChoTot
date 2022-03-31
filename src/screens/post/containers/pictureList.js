import {View, ScrollView, StyleSheet} from "react-native"
import React from "react"
import PictureItem from "./pictureItem"

const PictureList = ({images, changeImages}) => {
  const onDeleteImages = (id) => {
    const data = [...images]
    const result = data.filter((item) => item.id !== id)

    changeImages(result)
  }
  return (
    <ScrollView horizontal>
      <View style={styles.row}>
        {images.map((item, index) => {
          return (
            <PictureItem
              onDelete={onDeleteImages}
              item={item}
              uri={item.uri}
              key={item.id}
            />
          )
        })}
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
