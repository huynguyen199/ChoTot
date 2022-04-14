import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import React, {useEffect, useState} from "react"
import {Avatar, Header} from "react-native-elements"
import Color from "@common/Color"
import UtilityList from "./containers/utilityList"
import {useNavigation} from "@react-navigation/native"
import {mainStack} from "@common/navigator"
import {useDispatch, useSelector} from "react-redux"
import {getProfileInfo} from "@redux/slices/auth"
import {selectProfileInfo} from "@redux/selector/auth"
import Loading from "@components/loading"

const Profile = () => {
  const navigation = useNavigation()
  const userInfo = useSelector(selectProfileInfo)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileInfo())
      .unwrap()
      .then((data) => {
        if (data) {
          setLoading(false)
        }
      })
  }, [dispatch])

  const onMoveSettingProfile = () => {
    navigation.navigate(mainStack.settingProfile)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{
            text: "Thêm",
            style: {color: Color.black, fontSize: 16, fontWeight: "bold"},
          }}
          // leftComponent={<SearchBar />}
          backgroundColor={"orange"}
        />
        <Loading />
      </View>
    )
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
          <TouchableOpacity
            onPress={onMoveSettingProfile}
            style={styles.profileBar}>
            <View>
              <Avatar
                size={90}
                rounded
                source={{
                  uri: userInfo.avatarUrl,
                }}
              />
            </View>
            <View style={styles.boxProfile}>
              <Text style={styles.txtName}>{userInfo.name}</Text>
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
