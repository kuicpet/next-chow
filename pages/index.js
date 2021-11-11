import { Grid } from '@material-ui/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import Product from '../models/Products'
import db from '../utils/db'
import { Store } from '../utils/Store'

export default function Home(props) {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const { products } = props

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItem.find((x) => x._id === product._id)
    const qty = existItem ? existItem.qty + 1 : 1
    const { data } = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock < qty) {
      alert('Sorry, Product is not Available')
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, qty } })
    router.push('/cart')
  }
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
              <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  db.connect()
  const products = await Product.find({}).lean()
  db.disconnect()
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  }
}
