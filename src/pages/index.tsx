import React from 'react'
import ArticleArea from 'src/components/molecules/ArticleArea'
import Header from 'src/components/molecules/Header'
const contentful = require('contentful')

const Home: React.FC<any> = ({ articles }) => {
  return (
    <>
      <Header />
      <ArticleArea articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })
  const articles = await client.getEntries()
  return {
    props: {
      articles
    }
  }
}

export default Home
