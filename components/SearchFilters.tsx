import { Box, Flex, Select } from '@chakra-ui/react';
import {useState} from 'react';
import {MdCancel} from 'react-icons/md'
import {filterData} from '@/utils/filterData'

function SearchFilters() {
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues)=>{

    }

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
        {filters.map((filter)=>(
            <Box key={filter.queryName}>
                <Select placeholder={filter.placeholder} onChange={(e)=>searchProperties({[filter.queryName]:e.target.value})} w='fit-content' p='2'>
                    {filter?.items?.map((item)=>(
                        <option value={item.value} key={item.value}>{item.name}</option>
                    ))}
                </Select>
            </Box>
        ))}
    </Flex>
  )
}

export default SearchFilters