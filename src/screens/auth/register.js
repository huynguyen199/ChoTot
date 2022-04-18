import {View, StyleSheet} from "react-native"
import React from "react"
import {Icon, Header} from "react-native-elements"
import Color from "@common/Color"
import Icons from "@common/Icon"
import WelcomeTop from "./components/welcomeTop"
import FormRegister from "./components/formRegister"
import {useTranslation} from "react-i18next"
import {useNavigation} from "@react-navigation/native"

const Register = () => {
  const {t} = useTranslation()
  const navigation = useNavigation()

  const onBackSignIn = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Header
        componentstyle={styles.headerStyle}
        leftComponent={
          <Icon
            onPress={onBackSignIn}
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
          title={t("auth:signUp")}
          description={t("auth:createAccount")}
        />
        <FormRegister />
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

export default Register
