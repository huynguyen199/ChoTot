import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import React from "react"
import {Avatar, Header} from "react-native-elements"
import Color from "@common/Color"
import UtilityList from "./containers/utilityList"
import {useNavigation} from "@react-navigation/native"
import {mainStack} from "@common/navigator"

const Profile = () => {
  const navigation = useNavigation()

  const onMoveSettingProfile = () => {
    navigation.navigate(mainStack.settingProfile)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          leftComponent={{
            text: "Thêm",
            style: {color: Color.black, fontSize: 16, fontWeight: "bold"},
          }}
          // leftComponent={<SearchBar />}
          backgroundColor={"orange"}
        />
        <View>
          <TouchableOpacity
            onPress={onMoveSettingProfile}
            style={styles.profileBar}>
            <View>
              <Avatar
                size={90}
                rounded
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU",
                }}
                // containerStyle={{margin: 20}}
              />
            </View>
            <View style={styles.boxProfile}>
              <Text style={styles.txtName}>Bồ Câu Nguyễn</Text>
              <Text>Xem trang cá nhân của bạn</Text>
            </View>
          </TouchableOpacity>
          {/* profile top */}
          <UtilityList />
        </View>
      </View>
    </ScrollView>
  )
}

export default Profile

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
