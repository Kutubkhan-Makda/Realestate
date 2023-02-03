import {GoVerified} from 'react-icons/go'
import {FaBath,FaBed} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import { Box } from '@chakra-ui/react'
import {fetchApi,BaseUrl} from '@/utils/fetchApi'

function PropertyDetails({PropertyDetails:{price,rentFrequency,rooms,title,baths,area,agency,isVerified,description,type,purpose,furnishingStatus,amenities,photos}}) {
  return (
    <Box maxWidth='1000px' margin='auto' p='4'>
        {photos && <ImageScrollbar data={photos}/>}
    </Box>
  )
}

export default PropertyDetails

export async function getServerSideProps({params:{id}}){
    const data = await fetchApi(`${BaseUrl}/properties/detail?externalID=${id}`);
    return{
        props:{
            PropertyDetails:data
        }
    }
}