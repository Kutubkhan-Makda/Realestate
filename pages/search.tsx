import {BsFilter} from 'react-icons/bs';
import {useState} from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text } from '@chakra-ui/react';

function search() {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex cursor='pointer' bg='gray.100' borderBottom='1px' borderColor='gray.200' p='2' fontWeight='black'>
        <Text>Search Property by Filter</Text>
      </Flex>
    </Box>
  )
}

export default search