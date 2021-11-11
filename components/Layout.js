import React, { useContext, useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import useStyles from '../utils/styles'
import { Store } from '../utils/Store'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import {
  AppBar,
  Badge,
  Button,
  Container,
  createTheme,
  CssBaseline,
  InputBase,
  Link,
  Menu,
  MenuItem,
  MuiThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core'

const Layout = ({ title, description, children }) => {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const { cart, userInfo } = state
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
  })
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const [query, setQuery] = useState('')

  const queryChangeHandler = (e) => {
    setQuery(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    router.push(`/search?query=${query}`)
  }

  const loginHandler = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null)
    if (redirect) {
      router.push(redirect)
    }
  }

  const logoutHandler = () => {
    setAnchorEl(null)
    dispatch({ type: 'USER_LOGOUT' })
    Cookies.remove('userInfo')
    Cookies.remove('cartItems')
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Chow` : `Chow`}</title>
        {description && <meta name='description' content={description} />}
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='sticky' className={classes.navbar}>
          <Toolbar>
            <NextLink href='/'>
              <Link>
                <Typography className={classes.brand}>choW</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div className={classes.searchSection}>
              <form>
                <InputBase
                  name='query'
                  className={classes.searchInput}
                  placeholder='Search products'
                  onChange={queryChangeHandler}
                />
              </form>
            </div>
            <div>
              <NextLink href='/cart' passHref>
                <Link>
                  {cart.cartItems.length > 0 ? <Badge>Cart</Badge> : 'Cart'}
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <Button>Hi, {userInfo.name}</Button>
                  <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                    className={classes.top}
                  >
                    <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profile
                    </MenuItem>
                    {!userInfo.isAdmin && (
                      <MenuItem
                        onClick={(e) =>
                          loginMenuCloseHandler(e, '/order-history')
                        }
                      >
                        Order History
                      </MenuItem>
                    )}
                    {userInfo.isAdmin && (
                      <MenuItem
                        onClick={(e) =>
                          loginMenuCloseHandler(e, '/admin/dashboarc')
                        }
                      >
                        Admin Dashboard
                      </MenuItem>
                    )}
                    <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <NextLink href='/register' passHref>
                    <Link>Sign up</Link>
                  </NextLink>
                  <NextLink href='/login' passHref>
                    <Link>Sign in</Link>
                  </NextLink>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer>&copy; 2021 choW</footer>
      </MuiThemeProvider>
    </div>
  )
}

export default Layout
