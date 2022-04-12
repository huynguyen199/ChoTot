import {
  View,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"
const {width} = Dimensions.get("window")
import {useTranslation} from "react-i18next"

const SearchBar = ({
  text,
  onChangeText,
  containerStyle,
  onFocus,
  onSubmitEditing,
  onBlur,
  autoFocus,
  textInputRef,
  onPress,
  editable,
}) => {
  const {t} = useTranslation()

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.boxItemRow}>
          <Icon
            name="search-outline"
            type="ionicon"
            color="#517fa4"
            size={23}
            style={styles.iconSeach}
          />
          <TextInput
            ref={textInputRef}
            onFocus={onFocus}
            onBlur={onBlur}
            style={styles.inputSearch}
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChangeText}
            value={text}
            autoFocus={autoFocus}
            placeholder={t("home:search")}
            editable={editable}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: 46,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  iconSeach: {marginLeft: 10},
  boxItemRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputSearch: {width: width / 1.5, left: 4, bottom: -1},
})
export default SearchBar
