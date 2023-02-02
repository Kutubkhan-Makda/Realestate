import { Box, Flex } from '@chakra-ui/react';
import {useState} from 'react';
import {MdCancel} from 'react-icons/md'
import {filterData} from '@/utils/filterData'

function SearchFilters() {
    const [filters, setFilters] = useState(filterData);

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
        {filters.map((filter)=>(
            <Box key={filter.queryName}>

            </Box>
        ))}
    </Flex>
  )
}

export default SearchFilters