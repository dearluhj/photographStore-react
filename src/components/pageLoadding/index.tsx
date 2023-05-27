import React from 'react'
import loadding from "./index.module.scss"

export default function PageLoadding() {
  return (
    <div className={loadding.maincontainer}>
      <div className={loadding.loadcomponent}></div>
    </div>
  )
}
