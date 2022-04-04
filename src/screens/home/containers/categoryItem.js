import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import {useNavigation} from "@react-navigation/native"

const CategoryItem = ({item}) => {
  const navigation = useNavigation()

  const onMoveCategory = () => {
    // category
    navigation.navigate("category", {
      categoryId: item._id,
    })
  }

  return (
    <TouchableOpacity onPress={onMoveCategory}>
      <View style={styles.container}>
        <Image
          style={styles.mainImage}
          source={{
            uri: item.imageUrl,
          }}
        />
        <Text style={styles.textTitle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
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
