  import { useState,useEffect } from "react";
  import { FaArrowRightLong } from "react-icons/fa6";
  import { NavLink } from "react-router-dom";
  export const Country_card = ({countrydata}) => {
    const [search,Stsear]=useState("")
    const [cousort, setCou] = useState([]);
    const [region, setRegion] = useState("All");
    useEffect(() => {
    setCou(countrydata);
  }, [countrydata]);

  // ============ Asscending =================
  function Ascending() {
    const sorted = [...cousort].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setCou(sorted);
  }
  // =============== Descending ==================
  function Descending() {
    const sorted = [...cousort].sort((a, b) =>
      b.name.common.localeCompare(a.name.common)
    );
    setCou(sorted);
  }
  // ================= searching ===================
    function Handel(e) {
      Stsear(e.target.value)
    }

      const filtered = cousort.filter((item) => {
  const matchSearch = item.name.common.toLowerCase().includes(search.toLowerCase());
  const matchRegion = region === "All" || item.region === region;
  return matchSearch && matchRegion;
});
    // ============= Region ==================
     function handleRegionChange(e) {
    setRegion(e.target.value);
  }
    return (
    <>

    <section>
      <div className="container country-container">
        <div className="countery-filter">
          <input className="inp-cou" type="text" value={search} onChange={Handel} placeholder="search the country" />
          <button onClick={Ascending}>Asc</button>
          <button onClick={Descending}>Des</button>
          <select value={region} onChange={handleRegionChange} className="selec">
             <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="card-grid">
          {
            filtered.map((item,index) => {
        return <div className="card" key={index}>
            <div className="card-img">
              <img src={item.flags.svg} alt="" />
            </div>
            <div className="card-data">
              <h4>{item.name.common.length>10? item.name.common.slice(0,11):item.name.common}</h4>
              
            <p>Capital :  <span>{item.capital}</span></p>
            <p>Population : <span>{item.population}</span></p>
            <p>Region : <span>{item.region}</span></p>
            </div>
            <div className="btn">
              <NavLink to={`/singel/${item.name.common}`}>
            <button className="card-btn">Read more <FaArrowRightLong /></button>
              </NavLink>
            </div>
          </div>
            })
          }
        </div>
      </div>
    </section>
    </>
    );
  };
