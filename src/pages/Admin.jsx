import React, { useState } from "react";

const AdminPage = ({ url }) => {
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  let [coupon, setCoupon] = useState("");
  let [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!coupon) {
      coupon = "7HJQ440D3JPK";
    }

    if (!link) {
      link = "https://ng.oraimo.com?affiliate_code=gQU41bWUcc";
    }
    let newCoupon = {
      discount,
      code,
      description,
      link,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCoupon),
    });

    if (response.status === 201) {
      alert("Coupon added successfully!");
    } else {
      alert("An error occured!");
    }
  };

  return (
    <div className="p-4 mt-[15px] md:p-8">
      <h1 className="text-[20px] font-bold">Submit Your Discount Code</h1>
      <p className="text-gray-400 mt-[6px]">
        Have a discount code to share? Submit it below!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 mt-[10px]">
        <div>
          <label htmlFor="" className="text-gray-800 text-[15px] ml-[3px]">
            Discount Code
          </label>
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className=" p-2 w-full rounded"
          />
        </div>
        <div>
          <label htmlFor="" className="text-gray-800 text-[15px] ml-[3px]">
            Discount Amount
          </label>
          <input
            type="text"
            placeholder="e.g 40% OFF"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="p-2 w-full rounded ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="" className="text-gray-800 text-[15px] ml-[3px]">
            Store Link
          </label>
          <input
            type="url"
            value={link}
            placeholder="https://"
            onChange={(e) => setLink(e.target.value)}
            className="p-2 w-full rounded ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="" className="text-gray-800 text-[15px] ml-[3px]">
            Description
          </label>
          <textarea
            placeholder="Describe what products the code works for"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 w-full rounded ring-blue-300 h-[100px]"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded w-[300px]"
        >
          Submit Code
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
