import {View, Text, Image, StyleSheet} from "react-native"
import React from "react"

const CategoryItem = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        source={{
          uri: "https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_asus-rog-phone-5-pro.jpg",
        }}
      />
      <Text style={styles.textTitle}>Phone</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textTitle: {textAlign: "center"},
  mainImage: {height: 80, width: 80, borderRadius: 30},
})
export default CategoryItem
