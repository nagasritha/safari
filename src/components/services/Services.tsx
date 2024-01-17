import './index.css'

function Services() {
  return (
    <div className='services-container'>  

      <h1 className='service-heading'>Services</h1>
      <p className='service-para'>Little text about services </p>
      <div className='services-items'>
        
      <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-purple-500">
          <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./public/images/service1.png" alt="dummy-image"/>
          <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
          <button className="services-item-btn">View More..</button>
      </div>

      <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-purple-500">
          <img className=" h-[300px] w-auto rounded-[25px] p-2 service-image" src="./public/images/service2.png" alt="dummy-image"/>
          <a href="" className='absolute top-1 ml-2 text-2xl font-semibold uppercase text-neutral-50 pt-6 pl-4'></a>
        <button className="services-item-btn">View More..</button>
      </div>
      
      <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-purple-500">
          <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./public/images/service3.png" alt="dummy-image"/>
          <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
          <button className="services-item-btn">View More..</button>
      </div>
      

      </div>
    </div>
  )
}

export default Services