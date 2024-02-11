import React, { useEffect, useState } from 'react'
import axios from 'axios'
const NutritionLink = ({data}) => {
  const [nutrition,setNutrition]=useState()
  const [isResponse,setResponse]=useState(false)
  let val=-1
  const download= async ()=>{
    try{ 
        val++
        const response=await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=55aa94e6&app_key=b21055dedbcec7a9cdfbd34c230086f0&nutrition-type=cooking&ingr=${data}`) 
        const {calories,totalDaily,totalNutrients,totalWeight}=response.data
        const res = { cal: calories, daily:totalDaily,weight:totalWeight,nutrient:totalNutrients}
        setNutrition(res)
        // console.log(nutrition);
    } 
    catch(error){
        console.log(error);
        console.log("MAI NAHI CHALEGA");
    }
   
}
  console.log(nutrition);
  useEffect(()=>{
      download()
  },[data])
  return (
    <div>
      {/* <p>Ayush Mishra</p> */}
      <p>{data}</p>
      {/* {isResponse?"ayush":"loading-"}   */}
     </div>
  )
}

export default NutritionLink
