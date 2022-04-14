import {View} from "react-native"
import React from "react"
import Color from "@common/Color"
import UtilityButton from "./utilityButton"
import {Divider} from "react-native-elements"

const UtilityList = () => {
  return (
    <View>
      <UtilityButton
        title={"Đơn bán"}
        uri={
          "https://static.chotot.com/storage/chotot-icons/svg/escrow-orders.svg"
        }
      />
      <UtilityButton
        title={"Đơn mua"}
        uri={
          "https://static.chotot.com/storage/chotot-icons/svg/escrow_buy_orders.svg"
        }
      />
      <UtilityButton
        title={"Tin Đăng đã mua"}
        uri={
          "https://static.chotot.com/storage/chotot-icons/svg/menu-saved-ad.svg"
        }
      />
      <UtilityButton
        title={"Tìm kiếm đã mua"}
        uri={
          "https://static.chotot.com/storage/chotot-icons/svg/menu-saved-search.svg"
        }
      />
      <UtilityButton
        title={"Bạn bè"}
        uri={
          "https://static.chotot.com/storage/chotot-icons/svg/menu-friends.svg"
        }
      />
      <Divider width={2} color={Color.ghostWhite} />

      <UtilityButton
        title={"Tài khoản đồng tốt"}
        uri={"https://st.chotot.com/storage/chotot-icons/svg/ct-coin.svg"}
      />
      <UtilityButton
        title={"Lịch sử giao dịch"}
        uri={"https://st.chotot.com/storage/chotot-icons/svg/circle-list.svg"}
      />
      <UtilityButton
        title={"Thẻ của tôi"}
        uri={"https://st.chotot.com/storage/chotot-icons/svg/circle-card.svg"}
      />
      <UtilityButton
        title={"Tạo cửa hàng/Chuyên trang"}
        uri={"https://st.chotot.com/storage/chotot-icons/svg/circle-plus.svg"}
      />
      <Divider width={2} color={Color.ghostWhite} />

      <UtilityButton
        title={"Chợ tốt ưu đãi"}
        uri={"https://st.chotot.com/storage/chotot-icons/svg/reward.svg"}
      />
      <UtilityButton
        title={"Vòng quay may mắn"}
        uri={"https://st.chotot.com/storage/chotot-icons/svg/green-wheel.svg"}
      />
      <UtilityButton
        title={"Trợ giúp"}
        uri={"https://st.chotot.com/storage/chotot-icons/svg/float.svg"}
      />
      <UtilityButton
        title={"Đăng xuất"}
        uri={"https://st.chotot.com/storage/chotot-icons/svg/sign-out.svg"}
      />
    </View>
  )
}

export default UtilityList
