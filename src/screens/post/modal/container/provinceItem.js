import {View, Text, TouchableOpacity} from "react-native"
import React from "react"
import {StyleSheet} from "react-native"
import Color from "@common/Color"
import {CheckBox, Divider, Icon} from "react-native-elements"
import {useNavigation} from "@react-navigation/native"
import {mainStack} from "@common/navigator"

const ProvinceItem = ({item, code, setCode}) => {
  const navigation = useNavigation()

  const onMoveModal = () => {
    setCode(item.code)
    navigation.navigate(mainStack.district, {codeCity: item.code})
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
            onPress={() => onMoveModal(item.id)}
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

export default ProvinceItem
