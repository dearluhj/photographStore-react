import axios from "axios";
import { apiProxyhost } from "./config";

const BASE_URL = apiProxyhost;
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

type Config = {
  url?: string,
  data?: {},
  params?: {},
  timeout?: number,
  headers?: {},
  method?: string
}
export default function request(config: Config) {

  return new Promise(resolveroot => {
    new Promise((reslove, reject) => {
      instance(config).then(res => {
        reslove(res.data)
      }).catch(err => {
        reject(err)
      })
    }).then(val => {
      resolveroot(val)
    }).catch(err => {
      console.error(err);
    })
  })
}