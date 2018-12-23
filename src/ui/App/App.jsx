import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import FlexBox from 'ui/FlexBox'

const App = ({ classes }) => {
  return (
    <div className={classes.app}>
      <FlexBox />
    </div>
  )
}

const styles = theme => ({
  app: {
    backgroundColor: 'rgba(25, 25, 25)',
    height: '100vh',
    paddingTop: 50,
    paddingRight: '15%',
    paddingLeft: '15%',
  },
})

export default withStyles(styles)(App)