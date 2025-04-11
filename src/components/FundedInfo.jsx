import React, { useState } from "react";

const InfoSectionFunded = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://dealblissngbackkend-production.up.railway.app/api/email",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    if (response.status === 201) {
      alert("Email added successfully!");
    } else {
      alert("Error occured!!");
    }
  };
  return (
    <>
      <div
        className="bg-white rounded-[10px] p-[13px] mb-[10px] border shadow-lg mt-[20px]"
        id="contact"
      >
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
      <div
        className="lg:flex lg:items-start lg:justify-space-between lg:w-[100%] lg:mt-[50px]"
        id="use"
      >
        <div className="mt-[35px] lg:w-[900px]">
          <h1 className="text-left lg:text-center text-[19px] font-bold">
            How to use your FundedNext Discount Code
          </h1>
          <p className="text-gray-600 text-left lg:text-center text-[14px]">
            Save big on your FundedNext account with our exclusive discount
            codes.
          </p>
          <p className="text-gray-600 text-left lg:text-center text-[14px] mt-[14px] lg:mt-0">
            Follow this simple steps to redeem your code
          </p>

          <ul className="mt-[10px] list-disc ml-[15px] lg:ml-[250px]">
            <li className="text-gray-800">
              Visit the FundedNext Website – Go to the FundedNext website to
              explore their funding options and challenges.{" "}
              
            </li>
            <li className="text-gray-800 mt-[5px]">
              Sign In or Sign Up – If you're new,{" "}
              <a href="https://fundednext.com/?fpr=aniekan61">
                <span className="text-red-500">create an account</span>
              </a>
              ; if you already have one, just{" "}
              <a href="https://fundednext.com/?fpr=aniekan61">
                <span className="text-red-500">sign in</span>
              </a>
              .
            </li>
            <li className="text-gray-800 mt-[5px]">
              Browse Account Options – Choose from a variety of funded accounts
              and evaluation accounts that fit your trading goals.
            </li>
            <li className="text-gray-800 mt-[5px]">
              Add to Cart – Once you've selected your desired account, add it to
              your shopping cart.
            </li>
            <li className="text-gray-800 mt-[5px]">
              Proceed to Checkout – When you’re ready, click on the cart icon
              and proceed to checkout.
            </li>

            <li className="text-gray-800 mt-[5px]">
              Enter Discount Code – Look for the "Enter your discount code"
              field and enter the code from Deal Bliss.
            </li>
            <li className="text-gray-800 mt-[5px]">
              Apply Code – Click "Apply" to validate your discount Deal.
            </li>
            <li className="text-gray-800 mt-[5px]">
              Check Discount – Your discount should be reflected in the order
              total.
            </li>
            <li className="text-gray-800 mt-[5px]">
              Complete Your Purchase – Finish up by making your payment and
              getting started with FundedNext.
            </li>
          </ul>

          <p
            className="text-gray-600 
          text-[14px] mt-[14px] text-center"
          >
            Congratulations! You have successfully used your FundedNext discount code and saved your account.
            .
          </p>
        </div>

        <div className="lg:w-[600px]">
          <div>
            <h1 className="text-left lg:text-center text-[19px] font-bold mt-[15px]">
              Tips for Getting the Best FundedNext Deals
            </h1>

            <ul className="mt-[10px] list-disc ml-[15px] lg:ml-[100px]">
              <li className="text-gray-800 mt-[5px]">
                Sign Up and Get Started: When you sign up for FundedNext, you’ll
                unlock exclusive deals and promotions to make your trading
                journey even better.
              </li>
              <li className="text-gray-800 mt-[5px]">
                Use the Deal Bliss Coupon Code: Don’t forget to use the discount
                code at Deal Bliss to get a discount when purchasing an account
                on FundedNext.
              </li>
              <li className="text-gray-800 mt-[5px]">
                Start Your Trading Journey Today: Ready to trade with
                professional capital? FundedNext makes it easy to get started
                and scale your trading career.
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div className="shadow-lg bg-white rounded-[10px] p-[15px] mb-[15px] mt-[20px] lg:mt-[50px] lg:ml-[400px] lg:w-[1000px]">
        <h2 className="text-center font-bold text-[18px]">
          FundedNext Customer Service
        </h2>
        <div className="">
          <div className="mt-[20px] lg:flex lg:items-center lg:justify-around">
            <p className="mt-[5px] text-[14px]">
              &#x1f4e8; Email: support@fundednext.com
            </p>
          </div>
          <div className="flex gap-3 justify-start lg:justify-center mt-[25px]">
            <a
              href="https://www.facebook.com/fundednext"
              className="bg-[#00a046] text-white p-[5px]"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/fundednext"
              className="bg-[#00a046] text-white p-[5px]"
            >
              Instagram
            </a>
            <a
              href="https://x.com/FundedNext"
              className="bg-[#00a046] text-white p-[5px]"
            >
              X
            </a>
            <a
              href="https://x.com/FundedNext"
              className="bg-[#00a046] text-white p-[5px]"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSectionFunded;
