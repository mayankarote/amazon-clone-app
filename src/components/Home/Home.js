import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import KMix from "../../assest/KMix-mixer.jpg";
import AmazonEcho from "../../assest/Amazon-Echo.jpg";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684229_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup"
            price={24.99}
            rating={3}
            image={`https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg`}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image={KMix}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={`https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg`}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa Charcol  Fabric"
            price={98.99}
            rating={5}
            image={AmazonEcho}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro {12.9-inch, wi-fi, 128GB} - Silver {4th Generation}"
            price={598.99}
            rating={4}
            image={`https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg`}
          />
        </div>
        <div className="home__row">
          <Product
            id="3254354345"
            title="Samsung LC4983764hJHJ 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x "
            price={598.99}
            rating={4}
            image={`https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg`}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
