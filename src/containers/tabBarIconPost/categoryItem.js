import {Image, View, Text, StyleSheet} from "react-native"
import React from "react"
import {Icon, Divider} from "react-native-elements"
import {TouchableOpacity} from "react-native-gesture-handler"
import {useNavigation} from "@react-navigation/native"
import {mainStack} from "@common/navigator"
import Icons from "@common/Icon"
import Color from "@common/Color"
const CategoryItem = ({item, onPress}) => {
  const navigation = useNavigation()

  const onMovePost = () => {
    navigation.navigate(mainStack.post, {
      category: item,
      address: {},
      productId: null,
    })
  }

  return (
    <TouchableOpacity onPress={onPress || onMovePost}>
      <View style={styles.container}>
        <View style={styles.boxLeft}>
          <Image
            style={styles.image}
            source={{
              uri: item.imageUrl,
            }}
          />
        </View>
        <View style={styles.boxCenter}>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.boxRight}>
          <Icon
            name={Icons.Ionicons.chevronFoward}
            type="ionicon"
            color={Color.black}
            size={20}
          />
        </View>
      </View>
      {/* <View style={{backgroundColor: "red", width: 10, height: 10}} /> */}

      <Divider width={2} color={Color.ghostWhite} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  boxRight: {
    flex: 0.1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boxCenter: {
    flex: 0.6,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boxLeft: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  container: {
    flexDirection: "row",
  },
  image: {width: 70, height: 70},
})
export default CategoryItem
