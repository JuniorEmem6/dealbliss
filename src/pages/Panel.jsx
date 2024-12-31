import React from "react";
import AdminPage from "./Admin";
import Footer from "../components/Footer";
import styled from "styled-components";
import Logo from "../assets/logo.png";

const Panel = () => {
  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <>
      <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
        <img
          src={Logo}
          alt="coupon codes and affiliate links"
          className="h-[50px] w-[50px] ml-[140px] bg-white"
        />
        <header className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#00a046] to-[#00c853] text-white p-6 rounded-lg mt-[14px]">
          <h1 className="text-[20px] font-bold leading-[10px]">
            &#x1f3f7;&#xfe0f; Oraimo Deals & Coupons
          </h1>
          <p className="text-sm mt-2 md:mt-0">Save big on Oraimo products!</p>
        </header>
        {isAuth ? <AdminPanel /> : <AuthInterface isAuth={setIsAuth} />}
        <Footer />
      </div>
    </>
  );
};

const AuthInterface = ({ isAuth }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://dealblissback-production.up.railway.app/auth/sign-in",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    if (response.status === 200) {
      isAuth(true);
      alert(response.statusText);
    } else {
      alert("An error occured!");
    }
  };
  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit} className="form">
        <span className="input-span">
          <label htmlFor="email" className="label">
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
          />
        </span>
        <span className="input-span">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
          />
        </span>

        <input className="submit" type="submit" defaultValue="Log in" />
      </form>
    </StyledWrapper>
  );
};

const AdminPanel = () => {
  const [coupons, setCoupons] = React.useState([]);

  React.useEffect(() => {
    // Fetch coupons and links from backend
    fetch("https://dealblissback-production.up.railway.app/admin/coupons")
      .then((res) => res.json())
      .then((data) => {
        setCoupons(data);
      });
  }, []);

  return (
    <>
      <main className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {coupons.length > 0 ? (
          coupons.map((coupon, index) => (
            <CouponCard key={index} coupon={coupon} />
          ))
        ) : (
          <p className="text-gray-800 flex justify-center items-center h-[300px] text-[20px]">
            No available deals now
          </p>
        )}
      </main>

      <AdminPage
        url={"https://dealblissback-production.up.railway.app/admin/coupons"}
      />
    </>
  );
};

const CouponCard = ({ coupon }) => {
  const approveCoupon = async () => {
    const response = await fetch(
      "https://dealblissback-production.up.railway.app/admin/coupons",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          discount: coupon.discount,
          description: coupon.description,
          code: coupon.code,
          expiry: coupon.expiry,
          link: coupon.link,
          total: coupon.total,
          today: coupon.today,
        }),
      }
    );

    if (response.status === 201) {
      alert("Coupon added successfully!");
    } else {
      alert("An Error occured!!");
    }
  };
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border hover:scale-105 transition-transform">
      <div className="flex items-center mb-4">
        <img src={Logo} alt="Oraimo Nigeria Logo" className="h-8 mr-2" />
      </div>
      <div className="text-2xl font-bold text-green-600">{coupon.discount}</div>
      <p className="mt-2 text-red-600">{coupon.description}</p>
      <div className="bg-gray-100 rounded-lg p-4 my-4 flex justify-between items-center">
        <span className="font-mono text-lg">{coupon.code}</span>
      </div>

      <div className="text-sm text-gray-600 mt-[6px]">
        Valid until {coupon.expiry}
      </div>
      <button
        onClick={approveCoupon}
        className="block bg-green-600 text-white mt-4 text-center px-4 py-2 rounded hover:bg-green-700"
      >
        Approve
      </button>
    </div>
  );
};

const StyledWrapper = styled.div`
  .form {
    --bg-light: #efefef;
    --bg-dark: #707070;
    --clr: #58bc82;
    --clr-alpha: #9c9c9c60;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-top: 70px;
    margin-bottom: 70px;
  }

  .form .input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form input[type="text"],
  .form input[type="password"] {
    border-radius: 0.5rem;
    padding: 1rem 0.75rem;
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--clr-alpha);
    outline: 2px solid var(--bg-dark);
  }

  .form input[type="text"]:focus,
  .form input[type="password"]:focus {
    outline: 2px solid var(--clr);
  }

  .label {
    align-self: flex-start;
    color: var(--clr);
    font-weight: 600;
  }

  .form .submit {
    padding: 1rem 0.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 3rem;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    border: none;
    cursor: pointer;
    transition: all 300ms;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .form .submit:hover {
    background-color: var(--clr);
    color: var(--bg-dark);
  }

  .span {
    text-decoration: none;
    color: var(--bg-dark);
  }

  .span a {
    color: var(--clr);
  }
`;

export default Panel;
