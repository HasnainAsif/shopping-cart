import React from "react";

const Footer = () => {
  return (
    <section>
      <div class="end-detail container-fluid">
        <div class="container-fluid mb-5">
          <h5>FAST DELIVERY:</h5>
          <p class="end-text">1-3 days after payment is verified</p>
        </div>
        <hr style={{ height: "2px", backgroundColor: "white" }} />
        <div class="text-center footer">
          <a>Contact Us </a>
          <a>Privacy Notice </a>
          <a style={{ display: "inline-block" }}>Conditions of Use </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
