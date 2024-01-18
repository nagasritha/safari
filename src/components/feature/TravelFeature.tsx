import { GiTakeMyMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import './index.css'

function TravelFeature() {
  return (
    <>
    <div className='services-container'>
        <div className='service-heading'> Travel kar lo guys please ,ek baar kar lo</div>
        <div className='service-para'>Travel karna chahiye chahe man kare ya na kare per karna chahiye  </div>
        <div className="aco">
          <div className="stats-item">
              <div className='align-center'>
              <GiTakeMyMoney style={{color: "#00aff5",}} className='image' />
              </div>
              <h2 className="heading">Maje hi maje hein  dekhlo</h2> 
              <h6 className="text-[#6B7280] para">Time is money. Save both when you book with us.</h6>           
          </div>

          <div className="stats-item">
              <div className='align-center'>
              <TbZoomMoney style={{color: "#00aff5",}} className='image' />
              </div>
              <h2 className="heading">apko samosa bhi denge  </h2> 
              <h6 className="text-[#6B7280] para">Find a lower price and we'll match it. No questions asked. .</h6>           
          </div>

          <div className="stats-item">
              <div className='align-center'>
              <Ri24HoursLine  style={{color: "#00aff5",}} className='image' />
              </div>
              <h2 className="heading">24x7 Assistance</h2> 
              <h6 className="text-[#6B7280] para">If you have a doubt or a query, we’re always a call away.</h6>           
          </div>

          <div className="stats-item">
              <div className="align-center">
              <MdOutlineVerifiedUser style={{color: "#00aff5",}} className='image' />
              </div>
              <h2 className="heading">100% Verified samosa </h2> 
              <h6 className="text-[#6B7280] para">We promise to deliver what you see on the website.</h6>           
          </div>                 

  </div>



    </div>

  </>
  )
}

export default TravelFeature