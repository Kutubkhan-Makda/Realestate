import { Flex } from '@chakra-ui/react'
import {useContext} from 'react'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'

const LeftArrow = ()=>{
  const {scrollPrev} = useContext(VisibilityContext)
  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      
    </Flex>
  )
}

function ImageScrollbar() {
  return (
    <ScrollMenu style={{overflow:'hidden'}} LeftArrow={LeftArrow} RightArrow={RightArrow}>

    </ScrollMenu>
  )
}

export default ImageScrollbar