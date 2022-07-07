import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Child0to15, SEO, Navbar, Footer } from '../components'

const Home: NextPage = () => {
  return (<Box bgColor={`#fefefe`} overflowX={`hidden`}>
    <SEO title="Home" />
    <Navbar />
    <Child0to15 />
    <Footer />
  </Box>
  )
}

export default Home
