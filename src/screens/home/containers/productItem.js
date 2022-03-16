import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"

import Color from "@common/Color"
import formatCurrency from "@utils/formatCurrency"
import {format} from "@utils/timeAgo"

const ProductItem = ({item}) => {
  const onMoveDetail = () => {
    // navigation.navigate(homeDrawer.detail, {
    //   productId: item._id,
    // })
  }

  return (
    <TouchableOpacity onPress={onMoveDetail} style={styles.container}>
      <ImageBackground
        style={styles.mainImage}
        source={{
          uri: item.imageUrl,
        }}>
        <View style={styles.boxTopIcon}>
          <Icon name="camera-outline" type="ionicon" color="black" size={20} />
        </View>
        <View style={styles.viewBox}>
          <View style={styles.boxBottomIcon}>
            <Icon name="heart-outline" type="ionicon" color="red" size={20} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.boxRowTitle}>
        <View style={styles.boxLeft}>
          <Text style={styles.textTitle}>{item.name}</Text>
        </View>
        <View style={styles.boxRight}>
          <Icon
            name="ellipsis-vertical-outline"
            type="ionicon"
            color={Color.black}
            size={23}
          />
        </View>
      </View>
      <Text style={styles.textPrice}>{formatCurrency(item.price)}</Text>
      <Text style={styles.textDate}>{format(item.createdAt)}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: Color.white,
  },
  mainImage: {
    height: 160,
    width: 180,
  },
  boxTopIcon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  viewBox: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  boxBottomIcon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  boxRowTitle: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  boxLeft: {flex: 0.8},
  textTitle: {alignSelf: "flex-start", color: "black"},
  boxRight: {flex: 0.1},
  textPrice: {
    alignSelf: "flex-start",
    fontSize: 17,
    fontWeight: "bold",
    color: "red",
  },
  textDate: {alignSelf: "flex-start"},
})

export default ProductItem
