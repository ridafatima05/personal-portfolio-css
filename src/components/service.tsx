import React from 'react';
import '../style/service.css'; 

const Service = () => {
  return (
    <div className="main">
      <div className="service-container">
        
        <div className="top-div-service">
          <h1 className="heading-service">My Services</h1>
        </div>

      
        <div className="boxes-container">
          
          <div className="box">
            <div className="service-icon">🌐</div>
            <h3>Web Development</h3>
            <p>Building responsive and user-friendly websites that deliver results.</p>
          </div>

          <div className="box">
            <div className="service-icon">🎨</div>
            <h3>Graphic Design</h3>
            <p>Creating stunning visual designs that leave a lasting impression.</p>
          </div>

          <div className="box">
            <div className="service-icon">📊</div>
            <h3>Logo Design</h3>
            <p>Designing unique logos that reflect your brand's identity.</p>
          </div>

          <div className="box">
            <div className="service-icon">📈</div>
            <h3>Presentation Design</h3>
            <p>Crafting professional and engaging presentations for your audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
