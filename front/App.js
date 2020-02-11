import React from 'react'
import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Container,
  Link
} from '@material-ui/core'

import { Home } from './pages/Home'
import { Content } from './pages/Content'

import { makeStyles } from '@material-ui/core/styles'

import { Router } from '@reach/router'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}))

export const App = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar />
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Elecciones LATAM 2020
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Listado con las elecciones que se llevarán a cabo en el año 2020
              en los países de América Latina.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Link
                    style={{ textDecoration: 'none' }}
                    color='inherit'
                    href='https://github.com/SirNahe/calendario-electoral-latam2020'
                  >
                    <Button variant='contained' color='primary'>
                      Ir al repositorio
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    style={{ textDecoration: 'none' }}
                    color='inherit'
                    href='/'
                  >
                    <Button variant='outlined' color='primary'>
                      Volver a inicio
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}
        <Router>
          <Home path='/' />
          <Content path='/:country' />
        </Router>
      </main>
    </>
  )
}
