import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import Color from "@common/Color"
import {useNavigation} from "@react-navigation/native"
import {useTranslation} from "react-i18next"
import {authStack} from "@common/navigator"

const TouchWithoutAccount = () => {
  const navigation = useNavigation()
  const {t} = useTranslation()

  const onSwitcheScreen = () => navigation.navigate(authStack.register)
  return (
    <View style={styles.container}>
      <Text>{t("auth:noAccount")}</Text>
      <TouchableOpacity onPress={onSwitcheScreen}>
        <Text style={styles.txtRegister}> {t("auth:registerNow")}</Text>
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
