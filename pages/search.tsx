import {BsFilter} from 'react-icons/bs';
import {useState} from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import SearchFilters from '@/components/SearchFilters';
import Property from '@/components/Property';
import Image from 'next/image';
import noresult from '@/assets/noresult.svg'

function search({properties}) {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex 
      cursor='pointer' 
      bg='gray.100' 
      borderBottom='1px' 
      borderColor='gray.200' 
      p='2' fontWeight='black' 
      fontSize='lg' 
      justifyContent='center' 
      alignItems='center'
      onClick={()=>setSearchFilters((prevFilters)=>!prevFilters)}>
        <Text>Search Property by Filter</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter}/>
      </Flex>
      {searchFilters && <SearchFilters/>}
      <Text fontSize='2xl' p='4' fontWeight='bold'>
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap='wrap'>
        {[].map((property) => <Property property={property} key={property.id}/>)}
      </Flex>
      {[].length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDirection='column' marginBottom='5' marginTop='5'>
          <Image alt='no result' src={noresult}/>
          <Text fontSize='2xl' marginTop='3'>No Results Found</Text>
        </Flex>
      )}
    </Box>
  )
}

export default search

export async function getStaticProps({query}) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  
  return{
    props:{
      propertyForSale:propertyForSale?.hits,
      propertyForRent:propertyForRent?.hits
    }
  }
}