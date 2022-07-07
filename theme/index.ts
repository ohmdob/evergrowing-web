import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Prompt',
    heading: 'Prompt',
  },
  colors: {
    rose_gold: '#dcae9b',
    footer_bg: '#223344',
  },
  shadows: {
    largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;',
  },
  styles: {
    global: {
      'html, #__next': {
        height: '100%',
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
      },
      '.body': {
        overflowY: 'scroll',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      '#nprogress': {
        pointerEvents: 'none',
      },
      '#nprogress .bar': {
        background: 'green.200',
        position: 'fixed',
        zIndex: '1031',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
      },
    },
  },
  components: {
    Button: {
      variants: {
        btn01: {
          color: `white`,
          bg: `#473383`,
          _hover: {
            bg: `#805ad5`,
            _disabled: {
              bg: `#473383`
            }
          },
        },
        btn02: {
          color: `white`,
          bg: `linear-gradient(120.3deg, #A36A53 28.42%, #E5AC99 99.54%)`,
          _hover: {
            bg: `#E5AC99`,
            _disabled: {
              bg: `linear-gradient(120.3deg, #A36A53 28.42%, #E5AC99 99.54%)`
            }
          },
        },
      }
    },
  },
});