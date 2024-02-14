import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NutritionDesign from '../NutritionDesign/NutritionDesign'
import NutritionCalDesign from '../NutritionCalDesign/NutritionCalDesign'
const NutritionLink = ({data}) => {
  const [nutrition, setNutrition] = useState()
  const [calories,setCalories]=useState(0)
  let val=0
  let response
  function Ayush(){
    console.log("kya mai chala");
    const hex='0123456789abcedf'
    let col='#'
    for(let i=0;i<6;i++){
      col+=hex[Math.floor(Math.random()*16)]
    }
    return(col)
  }
    const nutritionFetch = async () => {
        try {
         //   const response = await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=55aa94e6&app_key=b21055dedbcec7a9cdfbd34c230086f0&nutrition-type=cooking&ingr=${data}`)
         response=await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=c55021e2&app_key=%203c10767493120bb03f471fc66748f586%09&nutrition-type=cooking&ingr=${data}`)
            console.log(response);
              setNutrition(
                [
                   {0:
                    response.data.totalDaily.FAT,
                    "next": response.data.totalNutrients.FAT
                   },
                   {1:response.data.totalDaily.NA,
                    "next":response.data.totalNutrients.FAT
                  },
                   {2:response.data.totalDaily.K,
                    "next":response.data.totalNutrients.K
                  },
                  {3:response.data.totalDaily.PROCNT,
                    "next":response.data.totalNutrients.PROCNT
                  },
                   {4:response.data.totalDaily.CA,
                    "next":response.data.totalNutrients.CA
                  },
                   {5:response.data.totalDaily.CHOLE, 
                    "next":response.data.totalNutrients.CHOLE},
                   {6:response.data.totalDaily.VITD, 
                    "next":response.data.totalNutrients.VITD},
                   {7:response.data.totalDaily.FE, 
                    "next":response.data.totalNutrients.FE},
                ]
            )
            console.log(response.data.calories);
            // val=response.data.calories  
            setCalories(response.data.calories)
        } catch (e) {
            console.log(e)
            console.log("Mai nhi chalunga")
        }
    }
    console.log(nutrition);
     useEffect(() => {
        nutritionFetch()
    }, [data])
  return(
   <div className='flex flex-col items-center  border-[0.1rem] border-[#000000] w-[25rem] rounded-lg shadow-[10px_10px_10px_#3d40ba]  p-[0.4rem]'>
    {nutrition===undefined || nutrition[0].next===undefined?"loading":<NutritionCalDesign cal={calories}/>}
      <div className='flex flex-col text-start border'>
     {nutrition===undefined || nutrition[0].next===undefined?"":  
       nutrition.map((data,index)=><NutritionDesign key={index+1} obj={data} id={val++} color={"72d767"}/>)
     }   
      </div>
    </div>  
   )
}

export default NutritionLink
