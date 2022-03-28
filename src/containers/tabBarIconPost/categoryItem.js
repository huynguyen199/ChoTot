import {Image, TouchableOpacity} from "react-native"
import React from "react"
import {ListItem} from "react-native-elements"
import {useNavigation} from "@react-navigation/native"
import {mainStack} from "../../common/navigator"
import {StyleSheet} from "react-native"

const CategoryItem = ({item}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(mainStack.post)
      }}>
      <ListItem bottomDivider>
        <Image
          style={styles.image}
          source={{
            uri: "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95",
          }}
        />
        <ListItem.Content>
          <ListItem.Title>Điện thoại</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {width: 80, height: 80},
})
export default CategoryItem
