import {View, Text, Image} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"
import Icons from "@common/Icon"
import Color from "@common/Color"
import {StyleSheet} from "react-native"

const PictureItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.itemImage}
        source={{
          uri: "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95",
        }}
      />
      <View style={styles.btnClose}>
        <Icon
          name={Icons.Ionicons.close}
          type="ionicon"
          color={Color.white}
          size={20}
        />
      </View>
      <View style={styles.panelBottom}>
        <Text style={styles.titleBottom}>Ảnh bìa</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {marginLeft: 10},
  itemImage: {width: 90, height: 90},
  btnClose: {
    position: "absolute",
    backgroundColor: Color.orange,
    alignSelf: "flex-end",
    borderRadius: 20,
  },
  panelBottom: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.41)",
    alignSelf: "flex-end",
    bottom: 0,
    width: "100%",
  },
  titleBottom: {
    color: "white",
  },
})

export default PictureItem
