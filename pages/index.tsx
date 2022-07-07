import { Box, Container, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SEO, Navbar, Footer } from '../components'

const Home: NextPage = () => {
  return (<Box bgColor={`#fefefe`} overflowX={`hidden`}>
    <SEO title="Home" />
    <Navbar />
    <Box p={8}>
      <Heading as="h1" fontWeight={600} fontSize={{ base: `xl`, md: `2xl`}}
        bg='linear-gradient(101.1deg, #674EB0 34%, #4FD1C5 71.87%)'
        bgClip='text'
      >
        “It is easier to build strong children than to repair broken adults”
      </Heading>
      <Text color={`gray.500`}>- Frederick Douglass</Text>
    </Box>
    <Container px={16}>
      <SimpleGrid spacing={8}>
        <Box p={8} bgColor={`#85F4CC`} rounded={`xl`} _hover={{ shadow: `xl`, textDecoration: 'none'}} as={Link} href={`/forms`}>
          <Text>แบบบันทึกการเผ้าระวังและส่งเสริมพัฒนาการเด็กปฐมวัย (DSPM) ตามช่วงอายุ แรกเกิด - 15 เดือน</Text>
        </Box>
        <Box p={8} bgColor={`#AB8FE9`} rounded={`xl`} _hover={{ shadow: `xl`, textDecoration: 'none'}} >
          <Text>แบบบันทึกการเผ้าระวังและส่งเสริมพัฒนาการเด็กปฐมวัย (DSPM) ตามช่วงอายุ 16 - 60 เดือน</Text>
        </Box>
      </SimpleGrid>
    </Container>
    <Box py={8} />
    <Footer />
  </Box>
  )
}

export default Home
