import { useEffect, useTransition } from "react";
import { useParams } from "react-router-dom";
import { Sindel_data } from "../Api/CountryApi";
import  { useState } from 'react';

export const Singel = () => {
  const {id}=useParams()
  const [pending,startTransition]=useTransition()
    const [singledata, Singstat] = useState([]);
  useEffect(()=>{
    startTransition(
      async () => {
          const response = await Sindel_data(id);
          Singstat(response.data)
      }
    )
  },[])
  return (
    <>
    <section>
      <div className="container single-conatiner">
        {
          singledata.map((item,index) => {
         return <div className="singel-grid" key={index}>
          <div className="img-con">
            <img src={item.flags.svg} alt="jhfjhf" />
          </div>
          <div className="img-content">
            <h1>{item.name.common}</h1>
            <p>Native name: <span>{item.name?.official}</span> </p>
            <p>Native name: <span>{item?.population}</span> </p>
            <p>Region: <span>{item?.region}</span></p> 
            <p>SubRegion: <span>{item?.subregion}</span></p> 
            <p>Capital: <span>{item?.capital}</span></p> 
            <p>Currencies: <span>{Object.values(item.currencies)[0]?.name}</span></p> 
            <p> Languages:<span>{Object.values(item.languages || {}).sort((a, b) => (a === "Hindi" ? -1 : 1))
      .join(", ")}
  </span>
</p>
          </div>
        </div>
          })
        }
      </div>
    </section>
    </>
  );
};
