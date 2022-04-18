import {StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import {TextInput} from "react-native-paper"
import Icons from "@common/Icon"
import Color from "@common/Color"
import {Icon} from "react-native-elements"
const AutoComplete = ({
  style,
  panel,
  value,
  onChangeText,
  onPress,
  disabled,
  onChange,
  onEndEditing,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextInput
        disabled={disabled}
        label={panel}
        showSoftInputOnFocus={false}
        onPressOut={onPress}
        onEndEditing={onEndEditing}
        value={value}
        onChange={onChange}
        onChangeText={onChangeText}
        underlineColor="transparent"
        theme={{colors: "transparent"}}
        style={[styles.inputStyle, style]}
        right={
          <TextInput.Icon
            name={() => (
              <Icon
                name={Icons.Ionicons.caretDown}
                type="ionicon"
                color={Color.grey}
                size={20}
              />
            )}
          />
        }
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderRadius: 10,
    borderColor: Color.orange,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
})
export default AutoComplete
