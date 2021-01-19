import React from 'react'
import Header from 'src/components/molecules/Header'
import { useQuery } from 'react-query'
import { client } from 'src/constants/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown')

const ArticleDetail: React.FC = () => {
  const { data: document, isLoading } = useQuery('article', async () => {
    const article = await client.getEntry(process.env.NEXT_PUBLIC_TEST_ENTRY)
    return await richTextFromMarkdown(article.fields.body)
  })
  return (
    <>
      <Header />
      {!isLoading && documentToReactComponents(document)}
    </>
  )
}

export default ArticleDetail
