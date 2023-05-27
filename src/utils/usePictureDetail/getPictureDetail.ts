import request from "../request";

export default function getPictureDetail(pid: string) {
  const result = request({ url: "/detail", params: { pid }})
  return result
}