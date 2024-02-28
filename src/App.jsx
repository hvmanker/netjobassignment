import trophie from './assets/1.png'
import presenting from './assets/2.png'
import hardware from './assets/3.png'
import logo from './assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './App.css'

function App() {
  

  return (
    <>
      <nav id="logo">
        <img src={logo} alt="4failed" id="logopic"/>
      </nav>
      <div id="section1">
        <img src={trophie} alt="1failed" id="trophie"/>
        <div>
          
        <p><strong> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong></p>
          <div id="para">
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          </div>
          
        <img src={presenting} alt="2failed" id="present"/>
        <p>	Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
        
      </div>
      
      <div id="section2">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      </div>
      <div id="section3">
      <img src={hardware} alt="3failed" id="hardware"/>
      <p id='products'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
      </div>
      <hr
        style={{
          background: 'red',
          color: 'red',
          borderColor: 'red',
          height: '1px',
          margin:'10px'
        }}
      />
      <div id="section4" >
        <p style={{display:'flex',justifyContent:"center"}}><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <p style={{ textAlign: 'center', margin: 0 }}>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>CHEMICALS & PROCESS</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>POWER</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>WATER & WASTE</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>WATER</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>OILS & GAS</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>PHARMA</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>SUGARS & DISTILLERIES</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>PAPER & PULP</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>MARINE & DEFENCE</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>METAL & MINING</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>FOOD & BEVERAGE</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>PETROCHEMICAL & REFINERIES</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>SOLAR</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>BUILDING</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>HVAC</span>
    <span style={{ borderRight: '1px solid red', padding: '0 10px' }}>FIRE FIGHTING</span>
    <span style={{ padding: '0 10px' }}>AGRICULTURE & RESIDENTIAL</span>
  </p>
</div>

      </div>
      <footer style={{ backgroundColor: 'red', color: 'white', padding: '20px' }}>
      <div>
        <FontAwesomeIcon icon={faPhone} style={{backgroundColor:'red' ,color:'#fcfcfc'}}/> Toll-Free: 1-800-123-4567
      </div>
      <div>
      {/* <FontAwesomeIcon icon={faFacebook} />  */}
      <a href="https://www.facebook.com/cripumps" style={{backgroundColor:'red', color:'white'}}>www.facebook.com/cripumps</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faGlobe} style={{backgroundColor:'red' ,color:'#fcfcfc'}} /> <a href="https://www.crigroups.com"style={{backgroundColor:'red', color:'white'}}>www.crigroups.com</a>
      </div>
    </footer>
      
    </>
  )
}

export default App
