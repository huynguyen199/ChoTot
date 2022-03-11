import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import Color from "@common/Color"

const TouchWithoutAccount = () => {
  return (
    <View style={styles.container}>
      <Text>Chưa có tài khoản?</Text>
      <TouchableOpacity>
        <Text style={styles.txtRegister}> Đăng ký ngay</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  txtRegister: {
    fontWeight: "bold",
    color: Color.blue,
  },
})

export default TouchWithoutAccount
