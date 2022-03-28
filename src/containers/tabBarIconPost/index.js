import {View, ScrollView} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"
import {Portal} from "react-native-portalize"
import {Modalize} from "react-native-modalize"
import CategoryItem from "./categoryItem"
import Icons from "@common/Icon"
import HeaderModal from "@components/headerModal"

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

const TabBarIconPost = ({color, modalizeRef}) => {
  const onClose = () => {
    modalizeRef.current.close()
  }
  return (
    <View>
      <Portal>
        <Modalize modalHeight={780} withHandle={false} ref={modalizeRef}>
          <View>
            <HeaderModal title={"Chọn danh mục"} onClose={onClose} />
            <ScrollView>
              {data.map((item, index) => (
                <CategoryItem key={item.id} item={item} />
              ))}
            </ScrollView>
          </View>
        </Modalize>
      </Portal>
      <Icon name={Icons.Ionicons.post} type="ionicon" color={color} />
    </View>
  )
}

export default TabBarIconPost
