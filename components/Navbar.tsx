import React from 'react'
import {
    Box,
    Image,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Input,
  } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { FaBars, FaChevronDown, FaChevronLeft, FaTimes } from 'react-icons/fa';
React.useLayoutEffect = React.useEffect 

interface NavbarProps {
    bgGradient?: string
    logo?: string
}
  
export const Navbar: FunctionComponent<NavbarProps> = ({ logo='/logo.png', bgGradient='linear(to-t, #009f46, #2F8A53)' }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bgGradient={bgGradient}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.300', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            color={`white`}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              fontSize={`2xl`}
              onClick={onToggle}
              icon={
                isOpen ? <FaTimes /> : <FaBars />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }}  justify={{ base: 'center', md: 'start' }} align="center">
            <Box as={Link} href={`/`}><Image objectFit={`contain`} h={12} src={logo} alt="logo" /></Box>
            <Text color={`white`} p={2} fontWeight={700}>Ever Growing</Text>
          </Flex>
  
          <Stack pl={1}
            flex={{ base: 1, md: 1 }}
            justify={'flex-end'}
            direction={'row'}
          >
            <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
            </Flex>
          </Stack>
 
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = 'white'
    const linkHoverColor = useColorModeValue('gray.500', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.500');
  
    return (
      <Stack direction={'row'} align="center" spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'lg'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: 'teal.300' }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'blue_600' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text _groupHover={{ color: 'blue_600' }} fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)', color: 'blue_600' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
             <FaChevronLeft />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={``}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          color={'blue_600'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontSize={`lg`}
            fontWeight={600}>
            {label}
          </Text>
          {children && (
          <Box transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''}>
            <FaChevronDown />
          </Box>
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href} color={'blue_600'}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: `Home`,
      href: '/',
    },
    {
      label: `News`,
      href: '/news',
    },
    {
      label: `About us`,
      href: '/about-us',
    },

  ];