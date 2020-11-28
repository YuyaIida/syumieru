import React from 'react'
import ArticleCard from 'src/components/molecules/ArticleCard'
import Grid from '@material-ui/core/Grid'

const ArticleArea: React.FC = () => {
  return (
    <div>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid container item xs={4}>
          <ArticleCard />
        </Grid>
        <Grid container item xs={4}>
          <ArticleCard />
        </Grid>
        <Grid container item xs={4}>
          <ArticleCard />
        </Grid>
      </Grid>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid container item xs={4}>
          <ArticleCard />
        </Grid>
        <Grid container item xs={4}>
          <ArticleCard />
        </Grid>
        <Grid container item xs={4}>
          <ArticleCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default ArticleArea
