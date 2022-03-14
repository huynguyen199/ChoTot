import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import Color from "@common/Color"
import {useNavigation} from "@react-navigation/native"
import {authStack} from "@common/navigator"

const TouchWithoutAccount = () => {
  const navigation = useNavigation()

  const onSwitcheScreen = () => navigation.navigate(authStack.register)
  return (
    <View style={styles.container}>
      <Text>Chưa có tài khoản?</Text>
      <TouchableOpacity onPress={onSwitcheScreen}>
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
