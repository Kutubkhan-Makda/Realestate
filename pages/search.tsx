import {BsFilter} from 'react-icons/bs';
import {useState} from 'react';
import { useRouter } from 'next/router';

function search() {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <div>search</div>
  )
}

export default search