import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
return (
<div className="home">
  <img className="home_img"
       src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
       alt="prime video banner" 
   />
 { /* product id, title, price, rating , image */  }
          <div className="home_row">
          <Product
            id="12321341"
            title="CrossBeats EVOLVE 2020 Dual Dynamic Drivers True Wireless Earbuds, Bluetooth 5.0 in-Ear Earphones Audio CVC Noise Cancellation Built in Mic, Charging Case, 24 Hours Playtime (Black)"
            price={700.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61WstNh4jlL._AC_UY218_.jpg"
          />
          <Product
             id="49538094"
             title="Fujifilm instax mini 8 instant film camera (grape)"
             price={250.0}
             rating={4}
             image="https://m.media-amazon.com/images/I/41jBvcFUfoL._AC_UY218_.jpg"
          />
          </div>
          <div className="home_row">
          <Product
           id="4903850"
           title="Noise ColorFit 2-Smart Fitness Band with Coloured Display, Activity Tracker Steps Counter, Heart Rate Sensor, Calories Burnt Count, Menstrual Cycle Tracking for Women (Midnight Black)"
           price={199.99}
           rating={3}
           image="https://m.media-amazon.com/images/I/61VUObUpZLL._AC_UL320_.jpg"
          />
           <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image=""
            image="https://m.media-amazon.com/images/I/51WzcEP+TVL._AC_UY218_.jpg"
           />
          <Product
           id="3254354345"
           title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
           price={598.99}
           rating={4}
           image="https://m.media-amazon.com/images/I/81oFAZ9N6bL._AC_UY218_.jpg"
          />
          </div>
          <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          </div>
          <div className="home_row">
          <Product
            id="4567890"
            title="Think Like a Monk
            by Jay Shetty  | 8 September 2020"
            price={10.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY218_.jpg"
          />
           <Product
            id="3456213"
            title="Envias Women's Sling Bag (Blue)"
            price={15.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/71uMUyTBggL._AC_UL320_.jpg"
          />

          </div>
          <div className="home_row">
          <Product
           id="4098712"
           title="Fastrack reflex 2.0 Watches"
           price={19.99}
           rating={4}
           image="https://m.media-amazon.com/images/I/814d7DPCPfL._AC_UL320_.jpg"
          />
           <Product
            id="2344765"
            title="CloudX Women Woolen V-Neck Cardigan Printed Heavy Front Kadai Daffodil Fabric Cardigan Winter Wear Pure Wool Cardigan for Women Free Size Long Cotty Fully Warm Cardigans (medium 34)"
            price={15.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/41oFLWU3kXL._AC_UL320_.jpg"
           />
          <Product
           id="3214345"
           title="AVITA Essential NE14A2INC433-MB 14-inch Laptop (Celeron N4000/4GB/128GB SSD/Window 10 Home in S Mode/Integrated Graphics), Matt Black"
           price={800.99}
           rating={4}
           image="https://m.media-amazon.com/images/I/61FWSA8BcDL._AC_UY218_.jpg"
          />
          </div>
          <div className="home_row">
          <Product
            id="1237890"
            title="Focusrite Scarlett Solo Studio (3rd Gen) USB Audio Interface and Recording Bundle with Pro Tools, First
            by Focusrite"
            price={100.98}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/413r7QDca1L._AC_US160_FMwebp_QL70_.jpg"
          />
           <Product
            id="3987213"
            title="Lenovo Tab M10 HD Tablet (10.1-inch, 2GB, 32GB, Wi-Fi + 4G LTE, Volte Calling), Slate Black"
            price={150.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/81Xjef5HFZL._AC_UY218_.jpg"
          />

          </div>
          <div className="home_row">
          <Product
           id="4123450"
           title="Dymatize Nutrition ISO 100 - 5 Lbs (FUDGE BROWNIE Flavour)"
           price={11.99}
           rating={3}
           image="data:image/webp;base64,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"
          />
           <Product
            id="23897630"
            title="WZATCO 100W Mini Portable Android 1080P Home Projector Multimedia HDMI USB"
            price={198.99}
            rating={5}
            image=""
            image="https://m.media-amazon.com/images/I/5168PYre3CL._AC_UY218_.jpg"
           />
          <Product
           id="325123345"
           title="Nikon D5600 Digital Camera 18-55mm VR Kit (Black)"
           price={589.99}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/51DE4FICRGL.jpg"
          />
          </div>
</div>
  );
}

export default Home;
