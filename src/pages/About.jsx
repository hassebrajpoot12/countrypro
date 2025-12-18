import Coutrdata from "../Api/country_data.json"
export const About = () => {
  return (
    <>
    <main>
    <div className="container">
      {
        Coutrdata.map((item) => {
          // code here
        })
      }
      <div className="country-grid">
        <div className="country-head">
          <h1>Here are the intresting Facts We are Proud of</h1>
        </div>
       <div className="country-box-grid">
         {
          Coutrdata.map((item) => {
       return <div className="country_box" key={item.id}>
          <h1>{item.country}</h1>
          <p>Capital :  <span>{item.capital}</span></p>
          <p>Population : <span>{item.population}</span></p>
          <p>Intrresting Fact : <span>{item.interesting_fact}</span></p>
        </div>
          })
        }
       </div>
      </div>
    </div>
    </main>
    </>
  );
};
