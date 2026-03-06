import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Footerdata from "./../Api/footer_api.json"
export const Footer = () => { 
  const footericon={
    FaLocationDot:<FaLocationDot/>,
    IoCall:<IoCallSharp/>,
    MdMarkEmailUnread:<MdMarkEmailUnread/>
  }
  return (
    <>
    <footer>  
      <div className="container">
        <div className="footer-grid">
            {
              Footerdata.map((item,index) => {
               return <div className="footer-icon-head" key={index} >
                <div className="footer-icon">{footericon[item.icon]}</div>
             <div className="footerhead">
               <h1>{item.title}</h1>
               <p>{item.description}</p>
             </div>
             </div>
              })
            }
        </div>
      </div>
    </footer>
    </>
  );
};  
