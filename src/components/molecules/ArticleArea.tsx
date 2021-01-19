import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ArticleCard from 'src/components/molecules/ArticleCard'
import { Grid } from '@material-ui/core'
import { shapeDate } from 'src/util/date'

const ArticleArea: React.FC<any> = ({ articles }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: '#f9f4ef'
      }
    })
  )
  console.log('----------------------')
  console.log(articles)
  console.log('----------------------')

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="center">
        {articles.items.map((article) => (
          <Grid container item xs={4} key={article.fields.title}>
            <ArticleCard
              articleTitle={article.fields.title}
              articleBody={article.fields.body}
              headerUrl={article.fields.headerImage.fields.file.url}
              postedDate={shapeDate(article.sys.createdAt)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ArticleArea
