import {View, StyleSheet} from "react-native"
import React from "react"
import {Icon, Header} from "react-native-elements"
import Color from "@common/Color"
import Icons from "@common/Icon"
import WelcomeTop from "./containers/welcomeTop"
import FormLogin from "./containers/formLogin"
import TouchWithoutAccount from "./containers/touchWithoutAccount"
import {useTranslation} from "react-i18next"

const Login = () => {
  const {t} = useTranslation()

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerStyle}
        leftComponent={
          <Icon
            name={Icons.Ionicons.back}
            type="ionicon"
            color="black"
            size={36}
          />
        }
        backgroundColor={Color.white}
      />
      {/* Body */}
      <View style={styles.body}>
        <WelcomeTop
          title={t("auth:signIn")}
          description={t("auth:welcomeBack")}
        />
        <FormLogin />
        <TouchWithoutAccount />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
  },
  headerStyle: {borderBottomWidth: 0},
})

export default Login
