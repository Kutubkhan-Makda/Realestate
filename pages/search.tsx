import {BsFilter} from 'react-icons/bs';
import {useState} from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';

function search() {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex cursor='pointer' bg='gray.100' borderBottom='1px' borderColor='gray.200' p='2' fontWeight='black' fontSize='lg' justifyContent='center' alignItems='center'>
        <Text>Search Property by Filter</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter}></Icon>
      </Flex>
    </Box>
  )
}

export default search