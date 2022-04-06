import {View, Image, Dimensions, StyleSheet} from "react-native"
import React, {useRef} from "react"
import {SwiperFlatList} from "react-native-swiper-flatlist"
import Colors from "@common/Color"
const colors = ["tomato", "thistle", "skyblue", "teal"]
const {width} = Dimensions.get("window")

const Banner = () => {
  const ref = useRef(null)

  const delay = (ms) => new Promise((res) => setTimeout(res, ms))

  const onChangeIndex = ({index}) => {
    if (index === colors.length - 1) {
      // setTimeout(() => {
      delay(1000).then(() => {
        if (ref !== null) ref.current.goToFirstIndex()
      })
      // wait(1000).then(() => ref.current.goToFirstIndex())
      // }, 2000)
    }
  }

  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        ref={ref}
        autoplayDelay={2}
        autoplayLoop
        index={2}
        showPagination
        data={colors}
        paginationStyleItemInactive={styles.paginationStyleItemInactive}
        paginationStyleItemActive={styles.paginationStyleItemActive}
        onChangeIndex={onChangeIndex}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/03/SSA-850x350.png",
              }}
            />
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  paginationStyleItemActive: {
    width: 8,
    height: 8,
    marginLeft: 0,
    backgroundColor: Colors.orange,
  },
  paginationStyleItemInactive: {
    width: 8,
    height: 8,
    marginLeft: 0,
    backgroundColor: Colors.ghostWhite,
  },
  container: {flex: 1},
  imageStyle: {width: width, height: 200},
})

export default Banner
