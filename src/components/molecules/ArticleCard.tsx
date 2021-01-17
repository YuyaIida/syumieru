import React from 'react'
import Link from 'next/link'
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
      margin: 30,
      maxWidth: 600,
      maxHeight: 400
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

type Props = {
  articleTitle: string
  articleBody: string
  headerUrl: string
  postedDate: string
}

const ArticleCard: React.FC<Props> = ({ articleTitle, articleBody, headerUrl, postedDate }) => {
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
        title={articleTitle}
        subheader={postedDate}
      />
      <CardMedia className={classes.media} image={headerUrl} title="bike" />
      <Link href="/articleDetail">
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {articleBody}
          </Typography>
        </CardContent>
      </Link>
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
