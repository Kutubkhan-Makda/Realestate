import { Box, Flex,Icon } from '@chakra-ui/react'
import Image from 'next/image'
import {useContext} from 'react'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const LeftArrow = ()=>{
  const {scrollPrev} = useContext(VisibilityContext)
  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon as={FaArrowAltCircleLeft} onClick={() => scrollPrev()} fontSize='2xl' cursor='pointer'/>
    </Flex>
  )
}

const RightArrow = ()=>{
  const {scrollNext} = useContext(VisibilityContext)
  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon as={FaArrowAltCircleRight} onClick={() => scrollNext()} fontSize='2xl' cursor='pointer'/>
    </Flex>
  )
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY > 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY < 0) {
    apiObj.scrollPrev();
  }
}

function ImageScrollbar({Data}:any) {
  return (
    <ScrollMenu onWheel={onWheel} LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {Data.map((item:any)=>(
        <Box width='910px' key={item.id} itemID={item.id} overflow='hidden' p='1'>
          <Image alt='property' placeholder='blur' blurDataURL={item.url} src={item.url} width={1000} height={500} sizes='(max-width:500px) 100px,(max-width):1023px 400px, 1000px'/>
        </Box> 
      ))}
    </ScrollMenu>
  )
}

export default ImageScrollbar