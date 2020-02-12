import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
  Link
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}))

export const Flags = ({ flags = [] } = {}) => {
  const classes = useStyles()

  return flags.map(flag => (
    <Grid item key={flag.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={flag.src}
          title={flag.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            {flag.month}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ textDecoration: 'none' }}
            color='inherit'
            href={`${flag.path}.html`}
          >
            <Button size='small' color='primary'>
              Ver más
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  ))
}
