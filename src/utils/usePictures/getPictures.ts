import request from "../request";

type Params = {
  gid: string,
  page: number
}
export default function getPictures(params: Params) {
  const result = request({ url: "/styles", data: params,method:"post" })
  return result
}