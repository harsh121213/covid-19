import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../axios'
import {Line,Bar} from 'react-chartjs-2'
import styles from './chart.module.css'

const Chart=({data:{confirmed,deaths,recovered},country})=>{
    const [dailyData,setdailydata]=useState([]);
    useEffect(() => {
        const fetchAPI=async()=>{
setdailydata(await fetchDailyData())
        }
       // console.log(dailyData);
        fetchAPI();
        
    }, []);


    const barchart=(
        confirmed
        ?(
            <Bar
            data={{
                labels:['Infected','recovered','deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:[
                     'rgba(0,0,255,.5)',
                     'rgba(0,255,.5)',
                     'rgba(255,0,0,.5)'  
                    ],
                    data:[confirmed.value,recovered.value,deaths.value],
                }]
    
            }}
            option={{
                legent:{display:false},
                title:{display:true,text:`current state in ${country}`},
            }}
            />
        ):null
    )

    const linechart=(
        dailyData.length
        ? (
            <Line
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
data:dailyData.map(({confirmed})=>confirmed),
label:'Infected',
borderColor:'#3333ff',
fill:true,
                },
{
    data:dailyData.map(({deaths})=>deaths),
label:'Deaths',
borderColor:'red',
backgroundColor:'rgba(255,0,0,.5)',
fill:true,
},


                ],
            }}
            />
        ):null
    );
   


  return (
    <div className={styles.container}>
       { country? barchart:linechart}
    </div>
  );
};


export default Chart;