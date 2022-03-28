import {View, ScrollView} from "react-native"
import React, {useRef} from "react"
import {StyleSheet} from "react-native"
import {TouchableOpacity} from "react-native"
import {Header, Icon} from "react-native-elements"
import Icons from "@common/Icon"
import Color from "@common/Color"
import Category from "./containers/category"
import InfoDetail from "./containers/infoDetail"
import AddressModal from "./containers/addressModal"
import {useTranslation} from "react-i18next"

const Post = () => {
  const {t} = useTranslation()

  const ref = useRef(null)

  const onOpen = () => {
    ref.current?.open()
  }
  return (
    <View style={styles.container}>
      <Header
        backgroundColor={"orange"}
        centerComponent={{text: t("home:post"), style: styles.heading}}
        rightComponent={
          <TouchableOpacity
          // onPress={() => navigation.navigate(mainStack.authStack)}
          // style={styles.container}
          >
            <Icon
              name={Icons.Ionicons.close}
              type="ionicon"
              color="black"
              size={26}
            />
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <Category />
        <InfoDetail onOpen={onOpen} />
      </ScrollView>
      <AddressModal modalizeRef={ref} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  heading: {
    color: Color.black,
    fontSize: 22,
    fontWeight: "bold",
  },
})

export default Post
