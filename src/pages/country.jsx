import { useEffect, useState, useTransition } from "react";
import { Country_card } from "../components/layout/Countrycard";
import { Getdata } from "../Api/CountryApi";
export const Country = () => {
  const [ispending,startTransition]=useTransition()
  const [data,Stdata]=useState([])
  useEffect(()=>{
    startTransition(
      async () => {
          const response = await Getdata();
          Stdata(response.data)
          }
    )
  },[])
  return (
    <>
    <Country_card countrydata={data}/>
    </>
  );
};
