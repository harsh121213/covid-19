import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl } from '@material-ui/core'
import {countries} from '../../axios';
import styles from './country.module.css';
//import {countries} from '../../axios';

const Country=({handlecountrychange})=>{
    const [fetchcountries,setfetchcountries]= useState([]);
    useEffect(() => {
        const fetchAPI=async ()=>{
            setfetchcountries(await countries());
        }
        fetchAPI();
            
        
    }, [setfetchcountries]);
    //console.log(fetchcountries);
    return(
        <FormControl className={styles.FormControl}>
          
            <NativeSelect defaultValue='' onChange={(e)=>handlecountrychange(e.target.value)}>
              <option value="global">global</option>  
              {fetchcountries.map((country,i)=><option key={i} value={country}>{country}</option>
            )};
            </NativeSelect>
        </FormControl>
    )
}
export default Country;