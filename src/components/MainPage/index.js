import React, { Fragment } from "react";
import { useHistory } from "react-router";
import product_img from "../../assets/images/product.PNG";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const MainPage = () => {
  let history = useHistory();

  return (
    <Fragment>
      <Header />
      <section>
        <div class="container">
          <div class="row mt-5">
            <div class="col-sm-12 col-md-4 text-center mb-4 align-img-center">
              <img src={product_img} />
            </div>
            <div class="col-sm-12 col-md-8 mb-4">
              <div class="container">
                <div class="text-center mb-5">
                  <h3>ON GS PRE-WORKOUT</h3>
                  <h3> 300G GREEN APPLE 30 SERVINGS</h3>
                </div>{" "}
                <div>
                  <p class="price">
                    <b>Price: $300</b>
                  </p>
                  <p>SKU: $300</p>
                  <p>UPC: $300</p>
                  <p>
                    <label>QTY: </label>
                    <select class="select-quantity">
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="1">5</option>
                    </select>
                  </p>
                  <p>
                    <button
                      class="btn cart-btn"
                      onClick={(e) =>
                        history.push({ pathname: "/add-to-cart" })
                      }
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-sm-12 col-md-8 text-center">
              <p>VITAMIN D Provides Immune Support</p>
              <p>
                PACKAGING MAY VERY - New look, with the same trusted Quality!
              </p>
              <p>
                175MG OF CAFFEINE - help fuel your mind and body to train at the
                highest level
              </p>
              <p>3G CREATIVE - help support overall performance</p>
              <p>1.5G BETA-ALANINE - help support enhance endurance</p>
              <p>1.5G CITRULLINE MALATE - a precursor to nitric oxide</p>
              <p>375MG ACETYL-L-CARNITINE HCL and 250MG N-ACETYL-L-TYROSINE</p>
              <p>
                BANNED SUBSTANCE TESTED - helps ensure you can trust what you
                are putting in your body
              </p>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default MainPage;
