import React, { useState } from "react";

const InfoSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.status === 201) {
      alert("Email added successfully!");
    } else {
      alert("Error occured!!");
    }
  };
  return (
    <>
      <div className="bg-white rounded-[10px] p-[13px] mb-[10px] border shadow-lg mt-[20px]">
        <h2 className="text-center text-black font-bold">Never Miss a Deal!</h2>
        <p className="text-[14px] text-center">
          Sign up for exclusive discounts and deals.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-[100%] border rounded-lg mt-[5px] h-[40px] text-center"
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-[3px] mt-[10px] ml-[100px] lg:ml-[850px] rounded-[20px] w-[110px]"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="lg:flex lg:items-start lg:justify-space-between lg:w-[100%] lg:mt-[50px]">
        <div className="mt-[35px] lg:w-[900px]">
          <h1 className="text-left lg:text-center text-[19px] font-bold">
            How to use Oraimo Discount Code
          </h1>
          <p className="text-gray-600 text-left lg:text-center text-[14px]">
            Save big on your favorite Oraimo Product with our exclusive discount
            codes.
          </p>
          <p className="text-gray-600 text-left lg:text-center text-[14px] mt-[14px] lg:mt-0">
            Follow this simple steps to redeem your code
          </p>

          <ul className="mt-[10px] list-disc ml-[15px] lg:ml-[250px]">
            <li className="text-gray-800">
              Visit the Oraimo Store{" "}
              <a href="https://ng.oraimo.com?affiliate_code=gQU41bWUcc">
                <span className="text-red-500">here</span>
              </a>
            </li>
            <li className="text-gray-800 mt-[5px]">
              Sign in or Sign up if you are new
            </li>
            <li className="text-gray-800 mt-[5px]">
              Browse through a wide range of accessories like Powerbank, earbud
              etc.
            </li>
            <li className="text-gray-800 mt-[5px]">
              Add your favorite item to the shopping cart.
            </li>
            <li className="text-gray-800 mt-[5px]">
              Go to checkout, once you 're ready, proceed to the checkout page
              by clicking the cart icon.
            </li>

            <li className="text-gray-800 mt-[5px]">
              Look for the field labeled "enter your discount Code".
            </li>
            <li className="text-gray-800 mt-[5px]">
              Enter the relevant discount code from Deal Bliss..
            </li>
            <li className="text-gray-800 mt-[5px]">
              Click "Apply" to validate the coupon.
            </li>
            <li className="text-gray-800 mt-[5px]">
              The discount should be reflected in your order total.
            </li>
            <li className="text-gray-800 mt-[5px]">
              Proceed to payment online or at delivery and complete your
              purchase.
            </li>
          </ul>

          <p
            className="text-gray-600 
          text-[14px] mt-[14px] text-center"
          >
            Congratulations! You have successfully used an Oraimo discount code
            .
          </p>
        </div>

        <div className="lg:w-[600px]">
          <div>
            <h1 className="text-left lg:text-center text-[19px] font-bold mt-[15px]">
              Tips for Getting the Best Oraimo Deals
            </h1>

            <ul className="mt-[10px] list-disc ml-[15px] lg:ml-[100px]">
              <li className="text-gray-800 mt-[5px]">
                Sign up for an Oraimo account to earn 100 reward points
                instantly and up to 500 points with purchases. Redeem these
                points for discounts on future orders.
              </li>
              <li className="text-gray-800 mt-[5px]">
                Use the Deal Bliss Coupon code to enjoy a 5% discount on any
                Oraimo product you purchase and take advantage of Daily Deals
                offering up to 59% off on selected items.
              </li>
              <li className="text-gray-800 mt-[5px]">
                Combine rewards points, coupon codes and daily deals for maximum
                savings.
              </li>
            </ul>

            <p
              className="text-gray-600 
          text-[14px] mt-[14px] ml-[50px]"
            >
              Start saving today and enjoy top quality Oraimo accessories at
              unbeatable prices.
            </p>
          </div>
        </div>
      </div>

      <div className="shadow-lg bg-white rounded-[10px] p-[15px] mb-[15px] mt-[20px] lg:mt-[50px] lg:ml-[400px] lg:w-[1000px]">
        <h2 className="text-center font-bold text-[18px]">
          Contact Oraimo Customer Care
        </h2>
        <div className="">
          <div className="mt-[20px] lg:flex lg:items-center lg:justify-around">
            <p className="text-[14px] mt-[5px]">
              &#x1f4de; Phone: 0818 135 3103, 0809 604 0753
            </p>
            <p className="text-[14px] mt-[5px]">
              &#x1f4f1; WhatsApp: 0701 761 8320, 090 162 79193
            </p>
            <p className="mt-[5px] text-[14px]">
              &#x1f4e8; Email: care.ng@oraimo.com
            </p>
          </div>
          <div className="flex gap-9 justify-start lg:justify-center mt-[25px]">
            <a
              href="https://facebook.com/oraimoNigeria"
              className="bg-[#00a046] text-white p-[5px]"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/oraimoNigeria"
              className="bg-[#00a046] text-white p-[5px]"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/oraimoNigeria"
              className="bg-[#00a046] text-white p-[5px]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
