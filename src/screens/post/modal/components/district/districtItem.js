import {View, Text, TouchableOpacity} from "react-native"
import React from "react"
import {StyleSheet} from "react-native"
import Color from "@common/Color"
import {CheckBox, Divider, Icon} from "react-native-elements"
import {mainStack} from "@common/navigator"
import {useNavigation} from "@react-navigation/native"

const DistrictItem = ({item, code, setCode, codeCity}) => {
  const navigation = useNavigation()

  const onMoveModal = () => {
    setCode(item.code)
    navigation.navigate(mainStack.ward, {
      codeDistrict: item.code,
      codeCity: codeCity,
    })
  }
  return (
    <TouchableOpacity onPress={onMoveModal}>
      <View>
        <View style={styles.container}>
          <Text style={styles.txtTitle}>{item.name}</Text>
          <CheckBox
            checkedIcon={
              <Icon
                name="radio-button-checked"
                type="material"
                color={Color.orange}
                size={25}
              />
            }
            uncheckedIcon={
              <Icon
                name="radio-button-unchecked"
                type="material"
                color={Color.grey}
                size={25}
              />
            }
            onPress={onMoveModal}
            checked={code === item.code}
          />
        </View>
        <Divider width={0.5} color={Color.grey} />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  txtTitle: {marginLeft: 10, color: Color.black},
})

export default DistrictItem
