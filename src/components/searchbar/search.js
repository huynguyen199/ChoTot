import {View, Dimensions, TextInput} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"
const {width} = Dimensions.get("window")

const SearchBar = ({text, onChangeText}) => {
  return (
    <View
      style={{
        width: width / 1.2,
        height: 46,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "white",
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Icon
          name="search-outline"
          type="ionicon"
          color="#517fa4"
          size={23}
          style={{marginLeft: 10}}
        />
        <TextInput
          style={{width: width / 1.5, left: 4, bottom: -1}}
          onChangeText={onChangeText}
          value={text}
          placeholder={"Tìm kiếm trên chợ tốt"}
        />
      </View>
    </View>
  )
}

export default SearchBar
