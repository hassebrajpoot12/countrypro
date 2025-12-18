import { FaArrowRightLong } from "react-icons/fa6";
import { About } from "./About";
export const Home = () => {
  return (
    <>
    <main>
      <div className="container">
        <div className="her-grid">
          <div className="hero-content">
            <h1>Explore The World One Country at a time</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime maiores aperiam, error consequatur molestiae culpa ipsa? Unde consequuntur harum autem nemo maiores?</p>
            <button>start Explore <FaArrowRightLong /></button>
          </div>
          <div className="hero-img">
            <img src="./image/world.png" alt="" />
          </div>
        </div>
      </div>
    </main>
    <About/>
    </>
  );
};
