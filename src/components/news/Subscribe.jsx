import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title  text-center mb-6">
            Subscribe <i class="bi bi-envelope"></i>
          </h5>

          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" className="sr-only">
                Enter Your Email
              </label>
              <input
                className="form-control"
                id="inputPassword2"
                placeholder="Email Address"
              ></input>
            </div>

            <button type="submit" className="btn btn-primary mb-2">
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
