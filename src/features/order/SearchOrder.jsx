import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function SearchOrder() {
    
    const [query, setQuery] = useState(''); 
    const navigate = useNavigate(); 
    const handleSubmit= (e) => {
        e.preventDefault(); 
        if(!query) return; 
        navigate(`/order/${query}`)
        console.log(query); 
        setQuery(''); 
    }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}
