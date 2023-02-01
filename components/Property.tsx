import { Box, Flex } from "@chakra-ui/react"
import Link from "next/link"

export const Property = ({property:{coverPhoto,price,rentFrequency,rooms,title,baths,area,agency,isVerified,externalId}}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
        <Box>
          
        </Box>
      </Flex>
    </Link>
  )
}
