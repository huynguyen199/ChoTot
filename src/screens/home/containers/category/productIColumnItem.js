import {View, Text, ImageBackground, StyleSheet} from "react-native"
import React from "react"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import Color from "@common/Color"
import {formatDateAgo} from "@utils/timeAgo"
import formatCurrency from "@utils/formatCurrency"

const ProductColumnItem = ({item}) => {
  return (
    <View style={styles.containers}>
      <View style={styles.boxRow}>
        <View style={styles.leftImage}>
          <ImageBackground
            source={{uri: item.imageUrl}}
            resizeMode="cover"
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.contentCenter}>
          <Text style={styles.txtTitle}>{item.name}</Text>
          <Text style={styles.txtPrice}>{formatCurrency(item.price)}</Text>

          <Text style={styles.txtDate}>{formatDateAgo(item.createdAt)}</Text>
        </View>
        <View style={styles.rightIcon}>
          <Icon
            name={Icons.Ionicons.ellipsisVerticalFilled}
            type="ionicon"
            color={Color.black}
            size={24}
            style={styles.styleRightIcon}
          />
        </View>
      </View>
    </View>
  )
}

export default ProductColumnItem

const styles = StyleSheet.create({
  txtDate: {marginTop: 20},
  imageStyle: {width: 100, height: 100},
  styleRightIcon: {marginTop: 10},
  txtPrice: {color: Color.red, fontSize: 16, fontWeight: "bold"},
  txtTitle: {color: "black", fontSize: 18},
  rightIcon: {
    backgroundColor: "white",
    flex: 0.1,
  },
  contentCenter: {
    backgroundColor: Color.white,
    flex: 0.6,
    padding: 10,
  },
  leftImage: {
    backgroundColor: Color.white,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  boxRow: {flexDirection: "row"},
  containers: {backgroundColor: Color.white, marginTop: 5},
})
