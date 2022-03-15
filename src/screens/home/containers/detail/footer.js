import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import Color from "@common/Color"

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boxLeft}>
        <Icon
          name={Icons.Ionicons.heartoutline}
          type="ionicon"
          color={Color.white}
          size={35}
          style={styles.iconStyle}
        />
        <Text style={styles.txtLeftTitle}>Gọi điện</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxCenter}>
        <Icon
          name={Icons.Ionicons.heartoutline}
          type="ionicon"
          color={Color.green}
          size={35}
          style={styles.iconStyle}
        />
        <Text style={styles.txtCenterTitle}>Gửi SMS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxRight}>
        <Icon
          name={Icons.Ionicons.chatBubbles}
          type="ionicon"
          color={Color.green}
          size={35}
          style={styles.iconStyle}
        />
        <Text style={styles.txtCenterTitle}>Chat</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {height: 70, flexDirection: "row"},
  boxLeft: {
    flex: 1,
    backgroundColor: Color.greenYellow,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  boxCenter: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  boxRight: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconStyle: {marginRight: 5},
  txtLeftTitle: {fontWeight: "bold", fontSize: 16, color: Color.white},
  txtCenterTitle: {fontWeight: "bold", fontSize: 16, color: Color.green},
  txtRightTitle: {fontWeight: "bold", fontSize: 16, color: Color.green},
})

export default Footer
