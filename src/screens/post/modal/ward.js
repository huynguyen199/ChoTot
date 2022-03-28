import {View} from "react-native"
import React, {useState} from "react"
import {StyleSheet} from "react-native"
import HeaderModal from "@components/headerModal/index"
import SearchBar from "@components/searchbar"
import {ScrollView} from "react-native"
import WardItem from "./container/ward/provinceItem"

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
]

const District = () => {
  const [id, setId] = useState(null)

  return (
    <View style={styles.container}>
      <HeaderModal title={"Chọn phường, xã thị trấn"} />
      <SearchBar containerStyle={styles.containerStyle} />
      <ScrollView>
        {data.map((item, index) => (
          <WardItem id={id} setId={setId} item={item} key={item.id} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
  },
  containerStyle: {width: "100%"},
})
export default District
