import React from 'react'
import '../style.css'


export const SearchElement = ({
    onChange,
  }: {
    onChange: React.ChangeEventHandler;
  }) => {
 return (
    <div className="search">
        <form>
        <input 
            type="text" 
            onChange={onChange}
            placeholder="Search" />
        </form>
    </div>
 )   
} 