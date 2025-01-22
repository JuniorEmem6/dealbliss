import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Logo from "../assets/oraimoLogo.png";
import CouponCarousel from "../components/Banner";
import AdminPage from "./Admin";
import InfoSection from "../components/Infosection";
import Navbar from "../components/Navbar";

const Home = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    // Fetch coupons and links from backend
    fetch("https://dealblissngbackkend-production.up.railway.app/api/coupons")
      .then((res) => res.json())
      .then((data) => {
        setCoupons(data);
      });
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <Navbar />

      <div className="text-center mt-[40px]" id="home">
        <h1 className="leading-[25px] font-medium text-[26px]">
          Oraimo Discount Code: Up to 30% + Extra 5% Code{" "}
        </h1>
        <p className="mt-[10px]">The hub for the best Oraimo Discount Code</p>
      </div>

      <CouponCarousel />

      <main
        className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        id="deals"
      >
        {coupons.length > 0
          ? coupons.map((coupon, index) => (
              <CouponCard key={index} {...coupon} />
            ))
          : ""}
      </main>
      <AdminPage
        url={
          "https://dealblissngbackkend-production.up.railway.app/api/coupons"
        }
      />
      <InfoSection />
      <Footer />
    </div>
  );
};

const CouponCard = ({ _id, discount, description, code, link, used }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg border hover:scale-105 transition-transform">
    <div className="flex items-center mb-4">
      <img src={Logo} alt="Oraimo Nigeria Logo" className="h-8 mr-2" />
    </div>
    <div className="text-2xl font-bold text-green-600">{discount}</div>
    <p className="mt-2 text-red-600">{description}</p>
    <div className="bg-gray-100 rounded-lg p-4 my-4 flex justify-between items-center">
      <span className="font-mono text-lg">{code}</span>
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Copy Code
      </button>
    </div>
    <div className="flex bg-gray-100 items-center justify-between p-[5px]">
      <span className="text-[11px]">
        Total Uses: <span class="total-count">{used}</span>
      </span>
    </div>
    <button
      className="block bg-green-600 text-white mt-4 text-center px-4 py-2 rounded hover:bg-green-700"
      onClick={() => {
        fetch(
          `https://dealblissngbackkend-production.up.railway.app/api/coupons/${_id}/click`,
          {
            method: "POST",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }}
    >
      <a href={link}>Shop Now</a>
    </button>
  </div>
);

export default Home;
