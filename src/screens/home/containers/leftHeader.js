import React from "react"
import SearchBar from "@components/searchbar"
import {useNavigation} from "@react-navigation/native"
import {homePage} from "@common/navigator"

const LeftHeader = ({search, setSearch, onSubmit}) => {
  const navigation = useNavigation()
  const onChangeSearch = (value) => {
    setSearch(value)
  }

  const onFocusSearch = () => {
    navigation.navigate(homePage.history)
  }

  return (
    <SearchBar
      onSubmitEditing={onSubmit}
      text={search}
      onFocus={onFocusSearch}
      onChangeText={onChangeSearch}
    />
  )
}

export default LeftHeader
