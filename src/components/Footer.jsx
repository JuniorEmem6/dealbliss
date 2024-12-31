import React from "react";
import Modal from "./Modal";

const Footer = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [type, setType] = React.useState(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-[25px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-blue-500 text-[20px]">
            Deal Bliss
          </h2>
          <p className="text-[12px]">Bringing you the best deals, always!</p>
        </div>

        {/* Footer Links */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Deal Bliss. All Rights Reserved.
          </p>
          <button
            onClick={openModal}
            className="text-blue-500 hover:text-blue-300 text-sm"
          >
            Privacy Policy
          </button>{" "}
          |{" "}
          <button
            onClick={openModal}
            className="text-blue-500 hover:text-blue-300 text-sm"
          >
            Terms of Service
          </button>{" "}
          |{" "}
          <button
            onClick={openModal}
            className="text-blue-500 hover:text-blue-300 text-sm"
          >
            About us
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* <div>
          <h1 className="text-black font-bold">About us</h1>
          <p>
            Welcome to Deal Bliss, your one-stop shop for finding great coupon
            codes and saving money on your favourite tech gear! At Deal Bliss,
            we're dedicated to helping you find the best offers on genuine
            Oraimo products such as power banks, headphones, and smartwatches.
            We know that everyone enjoys a good deal, so we've made it our duty
            to link you with exclusive deals that make high-quality products
            more inexpensive than ever.
          </p>

          <h1> Why Should You Choose Deal Bliss? </h1>

          <ul>
            <li>* Get verified Oraimo coupon codes.</li>{" "}
            <li>
              * ⁠When purchasing real products, you can save significantly.{" "}
            </li>{" "}
            <li>* ⁠ All Oraimo products come with a 12-month warranty. </li>{" "}
            <li>* ⁠Codes are often updated to keep your savings flowing.</li>
          </ul>

          <p>
            Our Mission: To make your shopping experience easier by providing
            trustworthy discount coupons that allow you to save while enjoying
            high-quality products. At Deal Bliss, we strive to make every
            transaction enjoyable.{" "}
          </p>

          <p>
            Start saving with us today and enjoy the benefits of smart
            purchasing!
          </p>
        </div>

        <div>
          <h1 className="text-black font-bold">Term of Service</h1>
        </div> */}

        <div className="mt-[40px]">
          <h1 className="text-black font-bold"> Affiliate Policy</h1>
          <p>
            At Deal Bliss, our purpose is to provide you with the best discounts
            and deals available. We may earn a compensation if you click on one
            of our affiliate links and make a purchase. This commission is paid
            by the brand or merchant and is at no additional cost to you. The
            commissions we earn help us maintain and enhance our website,
            allowing us to continue delivering useful information and excellent
            bargains. Rest assured that the income we get has no bearing on the
            integrity of our content, evaluations, or recommendations. We take
            pride in being upfront and honest. We only advocate items and
            services that we firmly believe in.
          </p>

          <p>
            Furthermore, the discount codes and discounts we share with you are
            always valid and do not expire, so you can take advantage of the
            savings whenever you want to shop. Deal Bliss collaborates with a
            variety of reputable brands, including Oraimo and others. When you
            make a purchase using one of our affiliate links, we may receive a
            commission at no additional cost to you. Thank you for your support
            of Deal Bliss!
          </p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
