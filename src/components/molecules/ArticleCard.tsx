import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 500
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
)

const ArticleCard: React.FC = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Y
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="バイク納車！！"
        subheader="2020/11/28"
      />
      <CardMedia className={classes.media} image="../../static/bike.jpg" title="bike" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          ついにバイク納車！！
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
export default ArticleCard
