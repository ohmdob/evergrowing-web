import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Image,
    AvatarGroup,
    Avatar,
    Button,
  } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={700} fontSize={'xl'} mb={4}>
        {children}
      </Text>
    );
  };

  interface FooterProps {
    logo?: string
  }
  
  export const Footer = function Footer({ logo = '/logo.png' }: FooterProps) {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [ref, inView, entry] = useInView({
      threshold: 0.3,
      triggerOnce: false
    });
    
    const variantsWindow = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 1,
        }
    };

    return (
      <Box id="footer"  bgColor={`#7a4720`} bgRepeat={`no-repeat`} bgSize={`cover`}
        color={`whiteAlpha.900`}>
          {scrollPosition > 400 && (<Link href='#top'>
            <Box position='fixed'
                bottom='20px'
                right={{ base: '24px', md: '64px'}}
                zIndex={1000}
            >
              <Avatar bg={`brown`} color={"white"} icon={ <FaChevronUp />} />
            </Box>
        </Link>)}
        <Container as={Stack} maxW={`6xl`} py={10}>
          <SimpleGrid
            templateColumns={{ base: '1fr', md: '1fr 1fr 2fr' }}
            spacing={4}>

            <Stack align={{ base: 'flex-end', md: 'flex-start'}}>
              <ListHeader>Solution</ListHeader>
              <Link href={'/intervention'}>Basic Intervention</Link>
              <Link href={'/library'}>library</Link>
              <Link href={'/DIY'}>DIY</Link>
            </Stack>

            <Stack align={{ base: 'flex-end', md: 'flex-start'}}>
              <ListHeader>Company</ListHeader>
              <Link href={'/news'}>News</Link>
              <Link href={'/about-us'}>About us</Link>
              <Link href={'/contact-us'}>Contact us</Link>
              <Link href={'/privacy-policy'}>Privacy policy</Link>
              <Link href={'/terms-of-use'}>Terms of use</Link>
            </Stack>

            <Stack align={{ base: 'flex-end', md: 'flex-start'}}>
              <ListHeader>Services</ListHeader>
              <Link href={'/ads'}>ติดต่อประชาสัมพันธ์</Link>
              <Link href={'/center'}>ศุนย์พัฒนาเด็กในเครือ</Link>
              <Link href={'/data'}>บริการข้อมูล</Link>
              <Box
                _after={{
                    content: `" info\\40 evergrowing.io"`,
                }}
              >Email: 
              </Box>
              <motion.div
                animate={inView? 'visible' : 'hidden'}
                variants={variantsWindow}
                transition={{ duration: 1.2, ease: `backOut` }}
                ref={ref}
              >
                <Image h={16} src={logo} alt="logo" />
              </motion.div>
              <Text>
                “The more understanding you are, the happieness you got”
              </Text>
              <Text>
                © 2022 All rights reserved
              </Text>
            </Stack>

          </SimpleGrid>
        </Container>
      </Box>
    );
  }