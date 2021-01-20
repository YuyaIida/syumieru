import React from 'react'
import Header from 'src/components/molecules/Header'
import { useQuery } from 'react-query'
import { client } from 'src/constants/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown')

const ArticleDetail: React.FC<any> = ({ article }) => {
  console.log('--------------')
  console.log(article)
  console.log('--------------')
  const { data: document, isLoading } = useQuery('article', async () => await richTextFromMarkdown(article.fields.body))
  return (
    <>
      <Header />
      {!isLoading && documentToReactComponents(document)}
    </>
  )
}

export const getStaticPaths = async () => {
  const articles = await client.getEntries()
  const paths = articles.items.map((item) => ({
    params: { entryId: item.sys.id }
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const article = await client.getEntry(params.entryId)
  return {
    props: {
      article
    }
  }
}

export default ArticleDetail
