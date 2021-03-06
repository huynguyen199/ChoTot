import {View, StyleSheet} from "react-native"
import React from "react"
import {Icon, Header} from "react-native-elements"
import Color from "@common/Color"
import Icons from "@common/Icon"
// import WelcomeTop from "./components/welcomeTop"
import WelcomeTop from "./components/welcomeTop"

import FormLogin from "./components/formLogin"
import TouchWithoutAccount from "./components/touchWithoutAccount"
import {useTranslation} from "react-i18next"
import {useNavigation} from "@react-navigation/native"

const Login = () => {
  const {t} = useTranslation()
  const navigation = useNavigation()

  const onGoBackHome = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerStyle}
        leftComponent={
          <Icon
            onPress={onGoBackHome}
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
