import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { FlagsContainer } from '../components/FlagsContainer'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}))

export const Home = () => {
  const classes = useStyles()
  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
        <FlagsContainer />
      </Grid>
    </Container>
  )
}
