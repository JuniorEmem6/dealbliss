import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Logo from "../assets/oraimoLogo.png";
import Funded from "../assets/funded.jpeg";
import CouponCarousel from "../components/Banner";
import AdminPage from "./Admin";
import InfoSection from "../components/Infosection";
import InfoSectionFunded from "../components/FundedInfo";
import Navbar from "../components/Navbar";

const Home = () => {
  const [OraimoCoupons, setOraimoCoupons] = useState([]);
  const [fundedNextCoupons, setFundedNextCoupons] = useState([]);

  const [store, setStore] = useState("FundedNext");

  useEffect(() => {
    // Fetch coupons and links from backend
    const Ora = [];
    const fun = [];
    fetch("https://dealblissngbackkend-production.up.railway.app/api/coupons")
      .then((res) => res.json())
      .then((data) => {
        data.map((coupon) => {
          if (!coupon.link.includes("aniekan61")) {
            Ora.push(coupon);
          } else {
            fun.push(coupon);
          }
        });
      });
    setOraimoCoupons(Ora);
    setFundedNextCoupons(fun);
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <Navbar FundedNext={store} />

      <div className="text-center mt-[40px]" id="home">
        <h1 className="leading-[25px] font-medium text-[26px]">
        {store === "Oraimo" ? "Oraimo Discount Code: Up to 30% + Extra 5% Code" : "120% Refund + FundedNext Coupons | April 2025"} {" "}
        </h1>
        <p className="mt-[10px]">
          The hub for the best {store === "Oraimo" ? "Oraimo" : "FundedNext"}{" "}
          Discount Code
        </p>
      </div>

      <CouponCarousel
        platforms={
          store == "Oraimo"
            ? [
                {
                  name: "Oraimo Deals",
                  img: Logo,
                  link: "https://ng.oraimo.com?affiliate_code=gQU41bWUcc"
                },
              ]
            : [
                {
                  name: "FundedNext Deals",
                  img: Funded,
                  link: "https://fundednext.com/?fpr=aniekan61"
                },
              ]
        }
      />

      {/* <div className="flex justify-around bg-[lightgreen] rounded-[15px] w-[330px] p-[15px] lg:ml-[750px]">
        <a onClick={() => setStore("Oraimo")}>Oraimo Deals</a>
        <p>|</p>
        <a onClick={() => setStore("Funded")}>FundedNext Deals</a>
      </div> */}

      {store === "Oraimo" ? (
        <>
          <main
            className="mt-7 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            id="dealsoraimo"
          >
            {OraimoCoupons.length > 0
              ? OraimoCoupons.map((coupon, index) => (
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
        </>
      ) : (
        <>
        <main
          className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          id="dealsfunded"
        >
          {fundedNextCoupons.length > 0
            ? fundedNextCoupons.map((coupon, index) => (
                <CouponCard key={index} {...coupon} />
              ))
            : ""}
          
        </main>
        <AdminPage
        url={
          "https://dealblissngbackkend-production.up.railway.app/api/coupons"
        }
      />
      <InfoSectionFunded />
        </>
      )}

      <Footer />
    </div>
  );
};

const CouponCard = ({ _id, discount, description, code, link, used }) => {
  let mainLogo = link.includes("oraimo");
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border hover:scale-105 transition-transform">
      <div className="flex items-center mb-4">
        <img
          src={mainLogo ? Logo : Funded}
          alt={mainLogo ? "Oraimo Nigeria Logo" : "FundeNext Logo"}
          className="h-8 mr-2"
        />
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
        {/* <span className="text-[11px]">
          Total Uses: <span class="total-count">{used}</span>
        </span> */}
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
        <a href={link}>{mainLogo ? "Shop Now" : "Sign Up"}</a>
      </button>
    </div>
  );
};

export default Home;