import ParticlesBg from "particles-bg";
import './App.css';
import { BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

import { RiWhatsappFill } from 'react-icons/ri';
import { ImEarth } from 'react-icons/im';

import { FaShoppingCart } from "react-icons/fa";

import logo from './Logo/logo raftech stamp.png';
import bg from './Bg.png';


function App() {
  return (
    <div >
      <div className="bg"></div>
      <div className="card">
        <div className="card_body">
          <div className="profile text-center">
            <img src={logo} className="avatar"/>



            <div className="bg_content rd_12 p_8">
            <h1>RAF TECH STORE</h1>
            </div>
            
            <div className="bg_content rd_12 p_8">
            <h4>Kalau Sudah Produktif Lupa Nyantai</h4>
            </div>
          </div>
          <div className="sosial">
            <a className="btn_actiton bg_content" href="https://www.instagram.com/raftech.store/">
            <BsInstagram/>
            <span>Instagram</span>
              
            </a>
          </div>
          

          <div className="sosial">
            <a className="btn_actiton bg_content" href="https://api.whatsapp.com/send?phone=+6282338911212&text=">
            <RiWhatsappFill/>
            <span>Whatsapp</span>
              
            </a>
          </div>
          <div className="sosial">
            <a className="btn_actiton bg_content" href="https://www.tiktok.com/@raf.tech.store">
            < FaTiktok/>
            <span>Tiktok</span>
              
            </a>
          </div>
          <div className="sosial">
            <a className="btn_actiton bg_content" href="#">
            <ImEarth/>
            <span>Website</span>
              
            </a>
          </div>

          <div className="sosial">
            <a className="btn_actiton bg_content" href="https://www.tokopedia.com/raf-tech-store">
            <FaShoppingCart />
            <span>Tokopedia</span>
            </a>
          </div>

          <div className="sosial">
            <a className="btn_actiton bg_content" href="https://shopee.co.id/raf_tech_store">
            <FaShoppingCart />
            <span>Shoppe</span>
            </a>
          </div>


        </div>
      </div>
      
      <ParticlesBg type="cobweb" bg={true} color="#07daf4"/>
      {/*<ParticlesBg type="color" bg={true} /> */}
    </div>
    
  
  
  );
}

export default App;
