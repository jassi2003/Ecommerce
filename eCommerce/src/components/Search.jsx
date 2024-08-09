import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const Search = () => {
  const {term}=useParams();
 const [filterSearch, setfilterSearch] = useState([])

  useEffect(()=>{
const filterData=()=>{
      const data=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      setfilterSearch(data);
    }

    filterData();

     
  },[term])

 



  return (
    <div>
      {filterSearch.length > 0 ? (
        <Product items={filterSearch} />
      ) : (
        <p style={{fontSize:"4rem",color:"red"}}>No results</p>
      )}
    </div>
  );
};

export default Search