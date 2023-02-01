import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import defaultImage from '@/assets/house.jpg'

export const Property = ({property:{coverPhoto,price,rentFrequency,rooms,title,baths,area,agency,isVerified,externalId}}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
        <Box>
          <Image src={coverPhoto?coverPhoto.url:defaultImage} width={400} height={260} alt='house'/>
        </Box>
        <Box>
          
        </Box>
      </Flex>
    </Link>
  )
}
