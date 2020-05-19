import axios from 'axios';
const url= 'https://covid19.mathdro.id/api';


export const FetchData=async(country)=>{
    let changeurl=url;
    if(country){
        changeurl=`${url}/countries/${country}`
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeurl);
       const modified={
           confirmed,
           recovered,
           deaths,
           lastUpdate
       }
       
        return modified;
    } catch(error){

    }
}
export const fetchDailyData=async()=>{
try{
    const {data}=await axios.get(`${url}/daily`);
//console.log(data);
const modifiedData=data.map((dailyData)=>({
confirmed:dailyData.confirmed.total,
deaths:dailyData.deaths.total,
date:dailyData.reportDate,

}))
return modifiedData;
} catch(error){

}
}
export const countries=async ()=>{
try{
    const {data:{countries}} =await axios.get(`${url}/countries`);
    return countries.map((country)=>country.name);
   // console.log(data);
} catch (error) {
    console.log(error);
}
}




