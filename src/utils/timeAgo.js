import TimeAgo from "javascript-time-ago"
import vi from "javascript-time-ago/locale/vi.json"

export const formatDateAgo = (date) => {
  TimeAgo.addLocale(vi)
  const timeAgo = new TimeAgo("vi-VN")
  const dateAgo = timeAgo.format(new Date(date))
  return dateAgo
}
