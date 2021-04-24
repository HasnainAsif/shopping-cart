import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const CartPage = () => {
  return (
    <Fragment>
      <Header />
      <section>
        <div class="container mb-5 ">
          <div class="row">
            <div class="col-sm-12 col-md-8 mt-5">
              {/* <div class="container mt-5"> */}
              <div class="card">
                <h5 class="card-header">Customer Information</h5>
                <div class="card-body">
                  <form role="form" data-toggle="validator">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="email"
                            placeholder="Enter Email Address*"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="phoneNo"
                            placeholder="Enter Phone Number*"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card mt-3">
                <h5 class="card-header">Shipping Address</h5>
                <div class="card-body">
                  <form role="form" data-toggle="validator">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Company Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="name"
                            placeholder="Name or Company Name*"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="address"
                            placeholder="Enter Address*"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Apt / Suite</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="apt"
                            placeholder="Apt, Suite etc (optional)"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="city"
                            placeholder="Enter City*"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="country"
                            placeholder="Enter Country*"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="state"
                            placeholder="Enter State*"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Postal Code</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="postalCode"
                            placeholder="Enter Postal Code*"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* </div> */}
              <div class="d-flex justify-content-between mt-2">
                <Link to="/">
                  <i class="fas fa-chevron-left"></i> Return to Cart
                </Link>
                <button class="btn cart-btn">Submit Order</button>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 mt-5 pt-3 cart-detail">
              <div class="d-flex justify-content-between">
                <p>1 - 16*20 Vintage Pet Portrait (Vertical)</p>
                <p>$99</p>
              </div>
              <hr />
              <form class="form-inline">
                <div class="input-group w-100">
                  <input
                    type="text"
                    class="form-control"
                    name="discountCode"
                    placeholder="Discount Code"
                  />
                  <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">
                      Apply
                    </button>
                  </div>
                </div>
              </form>
              <hr />
              <div class="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>$99</p>
              </div>
              <div class="d-flex justify-content-between">
                <p>Tax</p>
                <p>$6</p>
              </div>
              <div class="d-flex justify-content-between">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <p>Total</p>
                <p>$105.34</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default CartPage;
