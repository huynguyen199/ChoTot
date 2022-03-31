import {Dimensions} from "react-native"
import React, {useEffect} from "react"
import {Icon} from "react-native-elements"
import {Portal} from "react-native-portalize"
import {Modalize} from "react-native-modalize"
import CategoryItem from "./categoryItem"
import Icons from "@common/Icon"
import HeaderModal from "@components/headerModal"
import {useDispatch, useSelector} from "react-redux"
import {getCategories} from "@redux/slices/category"

const {height} = Dimensions.get("window")

const TabBarIconPost = ({color, modalizeRef}) => {
  const onClose = () => {
    modalizeRef.current.close()
  }
  const dispatch = useDispatch()
  const data = useSelector((state) => state.category.data)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <>
      <Portal>
        <Modalize
          HeaderComponent={
            <>
              <HeaderModal title={"Chọn danh mục"} onClose={onClose} />
            </>
          }
          modalHeight={height - 40}
          withHandle={false}
          ref={modalizeRef}>
          {data.map((item, index) => (
            <CategoryItem key={item._id} item={item} />
          ))}
        </Modalize>
      </Portal>
      <Icon name={Icons.Ionicons.post} type="ionicon" color={color} />
    </>
  )
}

export default TabBarIconPost
