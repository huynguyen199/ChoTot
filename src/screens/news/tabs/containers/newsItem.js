import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import React from "react"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import {mainStack} from "@common/navigator"
import Color from "@common/Color"
import {formatDateAgo} from "@utils/timeAgo"
import formatCurrency from "@utils/formatCurrency"
import {useNavigation} from "@react-navigation/native"

const NewsItem = ({item}) => {
  const navigation = useNavigation()

  const onMoveDetail = () => {
    navigation.navigate(mainStack.detail, {
      productId: item._id,
    })
  }

  return (
    <TouchableOpacity onPress={onMoveDetail} style={styles.containers}>
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

          <Text>{formatDateAgo(item.createdAt)}</Text>
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
    </TouchableOpacity>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  imageStyle: {width: 100, height: 100},
  styleRightIcon: {marginTop: 10},
  txtPrice: {color: Color.red, fontSize: 16, fontWeight: "bold"},
  txtTitle: {color: Color.black, fontSize: 18},
  rightIcon: {
    backgroundColor: Color.white,
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
