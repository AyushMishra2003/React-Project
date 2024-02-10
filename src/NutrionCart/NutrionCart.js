import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import NeutrionDesign from '../NeutrionDesign/NeutrionDesign'
const NutrionCart = ({data}) => {
  let [neutrion,setNeutrion]=useState([])
  const  [isResponse,setIsResponse]=useState(false)
  const [value,setValue]=useState(0)
  async function downloadNutrion(){
    console.log({data});
    let response 
   setIsResponse(false)
    try{
    
      // setValue(value++)
      console.log(data);
       setNeutrion([])
       console.log(neutrion);
       response=await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=55aa94e6&app_key=b21055dedbcec7a9cdfbd34c230086f0&nutrition-type=cooking&ingr=${data}`)
       console.log(response);
      //  console.log(response);
      //  console.log(response.data.totalDaily.FAT);
        // console.log(response.data);
        // console.log("line-1");
        // setIsResponse(true)
        setNeutrion(
        [
          {"type 1":data},
           {"calories":response.data.calories},
           {"weight" :response.data.totalWeight},
           {"fat1":response.data.totalDaily.FAT},
           {"fat2":response.data.totalNutrients.FAT},
           {"sodium1":response.data.totalDaily.NA},
           {"potasium1":response.data.totalDaily.K},
           {"potasium2":response.data.totalNutrients.K},
           {"protein1":response.data.totalDaily.PROCNT},
           {"protein2":response.data.totalNutrients.PROCNT},
           {"calicum1":response.data.totalDaily.CA},
           {"calicum2":response.data.totalNutrients.CA},
           {"cholestrol1":response.data.totalDaily.CHOLE},
           {"cholestrol2":response.data.totalNutrients.CHOLE},
           {"vitD1":response.data.totalDaily.VITD},
           {"vitD2":response.data.totalNutrients.VITD},
           {"iron1":response.data.totalDaily.FE},
           {"iron2":response.data.totalNutrients.FE}
        ]
      //  )
      //  console.log("Ayush Mishra");
        )
      //  console.log("hello"); 
       setIsResponse(true)
      //  console.log("hi");
      //  console.log("line-2");
      //  console.log(response);
       console.log(neutrion) 
       console.log(isResponse);
    }
    catch(error){
      console.log("MAI NAHI CHALA");
    }
  
  }
  const btnResponse=()=>{
    downloadNutrion()
  }
  useEffect(()=>{
      btnResponse()
  },[])
  return (
    <div>
      <button className='border border-black p-[1rem]' onClick={()=>{
        downloadNutrion()
      }}>GO</button>
    <div className='flex flex-col items-center  border border-black p-[1rem]'>
      <h1>Ayush Mishra</h1>
      {/* <h1>{neutrion.calicum1.label}</h1>
      <h1>{neutrion.calicum1.quanity}</h1>
      <h1>{neutrion.calicum1.unit}</h1> */}
      {/* {/* {/* <NeutrionDesign name={neutrion.calories.label} unitValue={neutrion.calories.quantity} perValue={0} unit={"a"}/> */ } 
      {/* <NeutrionDesign name={neutrion.fat1.label} unitValue={neutrion.fat2.quantity} perValue={neutrion.fat1.quantity} unit={neutrion.fat2.unit} /> */}
       {/* <NeutrionDesign name={neutrion.cholestrol1.label} unitValue={neutrion.cholestrol2.quantity} perValue={neutrion.cholestrol1.quantity} unit={neutrion.cholestrol2.unit}/> */}
      {/* <NeutrionDesign name={neutrion.sodium1.label} unitValue={neutrion.sodium2.quantity} perValue={neutrion.sodium1.quantity} unit={neutrion.sodium2.unit}/> */}
      {/* <NeutrionDesign name={neutrion.protein1.label} unitValue={neutrion.protein2.quantity} perValue={neutrion.protein1.quantity} unit={neutrion.protein2.unit}/> */}
      {/* <NeutrionDesign name={neutrion.vitD1.label} unitValue={neutrion.vitD2.quantity} perValue={neutrion.vitD1.quantity} unit={neutrion.vitD2.unit}/> */}
      {/* <NeutrionDesign name={neutrion.calicum1.label} unitValue={neutrion.calicum2.quantity} perValue={neutrion.calicum1.quantity} unit={neutrion.calicum2.unit}/> */}
      {/* <NeutrionDesign name={neutrion.iron1.label} unitValue={neutrion.iron2.quantity} perValue={neutrion.iron1.quantity} unit={neutrion.iron2.unit}/> */}
      {/* <NeutrionDesign name={neutrion.potasium1.label} unitValue={neutrion.potasium2.quantity} perValue={neutrion.potasium1.quantity} unit={neutrion.potasium2.unit}/> */}
    </div>  
     </div>
    // <NeutrionDesign />
  )
}

export default NutrionCart
