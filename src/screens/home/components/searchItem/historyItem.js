import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import React from "react"
import {homePage} from "@common/navigator"
import {useNavigation} from "@react-navigation/native"

const SearchItem = ({item}) => {
  const navigation = useNavigation()
  const onMoveSearch = () => {
    navigation.navigate(homePage.foundProduct, {wordSearch: item.name})
  }
  return (
    <TouchableOpacity onPress={onMoveSearch}>
      <View style={styles.container}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SearchItem

const styles = StyleSheet.create({
  container: {margin: 10},
})
