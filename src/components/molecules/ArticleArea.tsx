import React from 'react'
import ArticleCard from 'src/components/molecules/ArticleCard'
import { Grid } from '@material-ui/core'
import { useQuery } from 'react-query'
import { shapeDate } from 'src/util/date'
const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

const ArticleArea: React.FC = () => {
  const { isLoading, data: articles } = useQuery('articles', async () => {
    return await client.getEntries()
  })
  return (
    <div>
      {!isLoading && (
        <Grid container spacing={1} justify="center" alignItems="center">
          {articles.items.map((article) => (
            <Grid container item xs={4}>
              <ArticleCard
                articleTitle={article.fields.title}
                articleBody={article.fields.body}
                headerUrl={article.fields.headerImage.fields.file.url}
                postedDate={shapeDate(article.sys.createdAt)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default ArticleArea
