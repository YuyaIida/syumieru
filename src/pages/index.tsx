import React from 'react'
import ArticleArea from 'src/components/molecules/ArticleArea'
import Header from 'src/components/molecules/Header'
import { client } from 'src/constants/contentful'

const Home: React.FC<any> = ({ articles }) => {
  return (
    <>
      <Header />
      <ArticleArea articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  const articles = await client.getEntries()
  return {
    props: {
      articles
    }
  }
}

export default Home
