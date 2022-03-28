import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import Color from "@common/Color"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"

const HeaderModal = ({onClose, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxRow}>
        <TouchableOpacity onPress={onClose}>
          <Icon
            name={Icons.Ionicons.close}
            type="ionicon"
            color={Color.black}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxCenter}>
        <Text style={styles.txtCategory}>{title}</Text>
      </View>
      <View style={styles.leftStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.ghostWhite,
    height: 40,
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  boxRow: {
    flex: 0.2,
    justifyContent: "center",
  },
  boxCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txtCategory: {
    color: Color.black,
    fontWeight: "bold",
  },
  leftStyle: {flex: 0.2},
})

export default HeaderModal
