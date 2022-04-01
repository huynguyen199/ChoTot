const address = require("../assets/data/nestedDivisions.json")

let data = [...address]

export const getAllAddress = () => {
  const listAddress = [...data]
  return listAddress
}

export const getAllDistrictByCode = (codeCity) => {
  const result = data.find((item) => item.code === codeCity)
  return result.districts
}

export const getAllWardByCode = (codeCity, codeDistrict) => {
  const listDistrict = getAllDistrictByCode(codeCity)
  const districts = listDistrict.find(
    (district) => district.code === codeDistrict,
  )
  return districts.wards
}

export const findByCodeCity = (codeCity) => {
  const listAddress = getAllAddress()
  const result = listAddress.find((item) => item.code === codeCity)
  return result
}

export const findByCodeDistrict = (codeCity, codeDistrict) => {
  const listAddress = getAllDistrictByCode(codeCity)
  const result = listAddress.find((item) => item.code === codeDistrict)
  return result
}

export const findByCodeWard = (codeCity, codeDistrict, codeWard) => {
  const listAddress = getAllWardByCode(codeCity, codeDistrict)
  const result = listAddress.find((item) => item.code === codeWard)
  return result
}
