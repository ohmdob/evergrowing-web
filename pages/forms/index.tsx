import { Box, Container, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SEO, Navbar, Footer, Child0to15 } from '../../components'

const FormPage: NextPage = () => {
  return (<Box bgColor={`#fefefe`}>
    <SEO title="แบบประเมิน" />
    <Navbar />
    <Container w={{ base: `xl`, md: `4xl`}} p={{ base: 0, md: 8}}>
      <SimpleGrid spacing={8}>
        <Child0to15 />
      </SimpleGrid>
    </Container>
    <Footer />
  </Box>
  )
}

export default FormPage
