import {View, StyleSheet} from "react-native"
import React from "react"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import {useNavigation} from "@react-navigation/native"
import Colors from "@common/Color"

const HeaderLeft = () => {
  const navigation = useNavigation()

  const onBackHome = () => {
    navigation.goBack()
  }

  return (
    <View onPress={onBackHome} style={styles.container}>
      <Icon
        onPress={onBackHome}
        name={Icons.Ionicons.back}
        type="ionicon"
        color={Colors.black}
        size={30}
        containerStyle={styles.iconContainerStyle}
      />
    </View>
  )
}

export default HeaderLeft

const styles = StyleSheet.create({
  iconContainerStyle: {marginLeft: -5},
  container: {
    flex: 1,
    justifyContent: "center",
  },
})
