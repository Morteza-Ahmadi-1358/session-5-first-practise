import React, {useEffect, useState} from 'react'
import Loading from './Loading'
import {getProducts} from '../database/Products'
import styles from './ProductsList.module.scss'

const ProductsList = () => {
  const [productList, setProductList] = useState([])
  const [refresh, setRefresh] = useState(true)
  useEffect(() => {
      setTimeout(() => { setProductList(getProducts()) }, 2000)
      return () => {
          setProductList([])
      }
  }, [refresh])
  if (productList.length === 0) {
      return <Loading />
  }
  return (
      <div>
          {
              productList.map(product => {
                  return (
                    <div className={`${styles.dv_main_content}`}>
                      <span>{product.productName}</span>
                      <span>{product.price}</span>
                    </div>
                  )
              })
          }
          <button className={`${styles.btn_refresh}`} onClick={() => setRefresh(!refresh)}>بارگذاری مجدد</button>
      </div>
  )
}

export default ProductsList