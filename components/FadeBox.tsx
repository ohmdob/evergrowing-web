import React, { ReactNode } from 'react'
import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack, Wrap } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FadeBoxProps {
  children: ReactNode
  from?: string
}

export const FadeBox = (props: FadeBoxProps) => {

    const { from } = props

    let x = 0;
    if(from === 'left'){
      x = 200
    }
    else if(from === 'right'){
      x = -200

    }
    const y = (from === `left` || from === 'right') ? 0 : 16;

    const [ref, inView, entry] = useInView({
        threshold: 0.3,
        triggerOnce: true
      });
      
      const variantsWindow = {
          visible: { opacity: 1, scale: 1, x: 0,  y  },
          hidden: {
              opacity: 0,
              scale: 1,
              y: -y
          }
      };
      
    return (<motion.div 
        initial={{ opacity: 0, y: -y, x: -x }}
        animate={inView? 'visible' : 'hidden'}
        variants={variantsWindow}
        transition={{ delay: 0.3, duration: 1.1, ease: `easeOut` }}
        ref={ref}
      >
        {props.children}
      </motion.div>
    )
}