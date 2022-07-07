import { Box, Container, Link, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SEO, Navbar, Footer } from '../components'

const Home: NextPage = () => {
  return (<Box bgColor={`#fefefe`} overflowX={`hidden`}>
    <SEO title="Home" />
    <Navbar />
    <Container p={16}>
      <SimpleGrid spacing={8}>
        <Box p={8} bgColor={`#85F4CC`} rounded={`xl`} _hover={{ shadow: `xl`, textDecoration: 'none'}} as={Link} href={`/forms`}>
          <Text>แบบบันทึกการเผ้าระวังและส่งเสริมพัฒนาการเด็กปฐมวัย (DSPM) ตามช่วงอายุ แรกเกิด - 15 เดือน</Text>
        </Box>
        <Box p={8} bgColor={`#AB8FE9`} rounded={`xl`} _hover={{ shadow: `xl`, textDecoration: 'none'}} >
          <Text>แบบบันทึกการเผ้าระวังและส่งเสริมพัฒนาการเด็กปฐมวัย (DSPM) ตามช่วงอายุ 16 - 60 เดือน</Text>
        </Box>
      </SimpleGrid>
    </Container>
    <Footer />
  </Box>
  )
}

export default Home
