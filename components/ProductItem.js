import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  CardActions,
  Button,
} from '@material-ui/core'
import React from 'react'
import NextLink from 'next/link'

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <Card>
      <NextLink>
        <CardActionArea>
          <CardMedia
            component='img'
            image={product.image}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Rating value={product.rating} readOnly />
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>{product.price}</Typography>
        <Button
          size='small'
          color='primary'
          onClick={() => addToCartHandler(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductItem
