import { Box, Flex,Icon } from '@chakra-ui/react'
import {useContext} from 'react'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'

const LeftArrow = ()=>{
  const {scrollPrev} = useContext(VisibilityContext)
  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon as={FaArrowAltCircleLeft} onClick={scrollPrev} fontSize='2xl' cursor='pointer'/>
    </Flex>
  )
}

const RightArrow = ()=>{
  const {scrollNext} = useContext(VisibilityContext)
  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon as={FaArrowAltCircleRight} onClick={scrollNext} fontSize='2xl' cursor='pointer'/>
    </Flex>
  )
}

function ImageScrollbar({data}) {
  return (
    <ScrollMenu style={{overflow:'hidden'}} LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((image)=>(
        <Box width='910px' itemID={item.id} overflow='hidden'>

        </Box>
      ))}
    </ScrollMenu>
  )
}

export default ImageScrollbar