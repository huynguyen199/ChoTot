import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"
import {Divider, Icon} from "react-native-elements"
import Icons from "@common/Icon"
import ButtonPost from "@components/button/index"

const InfoArea = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Khu vực</Text>
      <Divider width={0.5} color={Color.grey} />

      <View style={styles.boxRow}>
        <Icon
          name={Icons.Ionicons.location}
          type="ionicon"
          color={Color.black}
        />
        <Text style={styles.txtArea}>Phường 4 quận 12 ,Tphcm</Text>
      </View>
      <Divider width={0.5} color={Color.grey} />

      <ButtonPost
        title={"Đăng tin tương tự"}
        style={styles.btnStyle}
        color={Color.orange}
        titleStyle={styles.btnTitleStyle}
      />
      {/* <View style={styles.containerList}></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    marginTop: 5,
  },
  boxRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  containerList: {
    flex: 1,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  txtArea: {
    fontSize: 18,
    color: Color.black,
    marginLeft: 10,
  },
  btnTitleStyle: {fontSize: 14, fontWeight: "bold", color: "white"},
  btnStyle: {height: 40, marginTop: 5},
})

export default InfoArea
