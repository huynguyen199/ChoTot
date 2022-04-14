import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native"
import React from "react"
import {Header, Avatar} from "react-native-elements"
import Color from "@common/Color"
import UtilityList from "./utilityList"
import {useNavigation} from "@react-navigation/native"
import {rootSwitch} from "@common/navigator"

const WithoutAccount = ({userInfo}) => {
  const navigation = useNavigation()
  const onMoveAuth = () => {
    navigation.navigate(rootSwitch.auth)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          leftComponent={{
            text: "Thêm",
            style: {color: Color.black, fontSize: 16, fontWeight: "bold"},
          }}
          backgroundColor={"orange"}
        />

        <View>
          <TouchableOpacity onPress={onMoveAuth} style={styles.profileBar}>
            <View>
              <Avatar
                size={90}
                rounded
                source={{
                  uri: "",
                }}
              />
            </View>
            <View style={styles.boxProfile}>
              <Text style={styles.txtName}>Đăng nhập/Đăng ký</Text>
              <Text>Xem trang cá nhân của bạn</Text>
            </View>
          </TouchableOpacity>
          {/* profile top */}
          <UtilityList userInfo={userInfo} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  txtName: {color: Color.black, fontWeight: "bold", fontSize: 18},
  boxProfile: {
    marginLeft: 10,
    justifyContent: "center",
  },
  profileBar: {
    backgroundColor: Color.white,
    flexDirection: "row",
    padding: 15,
  },
  container: {flex: 1, backgroundColor: Color.ghostWhite},
})

export default WithoutAccount
