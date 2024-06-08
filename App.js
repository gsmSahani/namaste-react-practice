import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">CutrateTraveller</div>
        <div className="nav-menu">
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Destinations</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="hero-section">
        <div className="circle-globe">
          <img alt="no image found" src="https://picsum.photos/200/300" />
        </div>
        <div className="hero-content">
          <div className="hero-title">Explore the Globe With CRT..</div>
          <p className="hero-descc">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <button>Explore More....</button>
        </div>
      </div>
    </div>
  );
};
const TravelCard = () => {
  return (
    <div className="card">
      <img src="https://images.pexels.com/photos/4430314/pexels-photo-4430314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <h2>Goa</h2>
      <p>Hello arambol lorem 49 fsdakljoater
        kasdjfouerrrrrrrrrrh
        gw erubfho;ds weoufergffo fewfewfs pfuewnkjfnwf0 8ewunmfhgewpf 
      </p>
      <button>Explore..</button>
    </div>
  );
};
const Body = () => {
  return (
    <>
      <TravelCard />
      <TravelCard />
      <TravelCard />
    </>
  );
};
const Footer = () => {
  return <h2>FOoter</h2>;
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
