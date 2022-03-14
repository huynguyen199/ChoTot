import {View, StyleSheet} from "react-native"
import React from "react"
import {Icon, Header} from "react-native-elements"
import Color from "@common/Color"
import Icons from "@common/Icon"
import WelcomeTop from "./containers/welcomeTop"
import FormRegister from "./containers/formRegister"
import TouchWithoutAccount from "./containers/touchWithoutAccount"

const Register = () => {
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
          title={"Đăng ký"}
          description={"Tạo tài khoản Chợ Tốt ngay"}
        />
        <FormRegister />
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

export default Register
