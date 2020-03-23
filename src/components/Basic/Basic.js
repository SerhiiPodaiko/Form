import React from "react";

const Basic = ({ type, active, firstname, lastname, password, repeatPassword, gender, onChange, nextStep, errors }) => {

    const saveAndContinue = (event) => {
        event.preventDefault();
    };

    return (
      <div className="form-container card">
          <form className="form card-body">
                <div className="d-flex justify-content-around steps mb-4">
                    <div className="step">
                        <div className={`step__marker${active}`}>1</div>
                        <div className="step__title mt-3">Basic</div>
                    </div>
                    <div className="step">
                        <div className="step__marker">2</div>
                        <div className="step__title mt-3">Contacts</div>
                    </div>
                    <div className="step">
                        <div className="step__marker">3</div>
                        <div className="step__title mt-3">Avatar</div>
                    </div>
                    <div className="step">
                        <div className="step__marker">4</div>
                        <div className="step__title mt-3">Finish</div>
                    </div>
                </div>

              <div className="form-group">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                      id="firstname"
                      type={type}
                      className="form-control"
                      placeholder="Enter firstname"
                      value={firstname}
                      name="firstname"
                      onChange={onChange} />
                  { firstname ?
                      <div className="invalid-feedback">
                          {firstname}
                      </div> : null }
              </div>
              <div className="form-group">
                  <label htmlFor="lastname">Lastname</label>
                  <input
                      id="lastname"
                      type={type}
                      className="form-control"
                      placeholder="Enter lastname"
                      value={lastname}
                      name="lastname"
                      onChange={onChange} />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                      id="password"
                      type={type}
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      name="password"
                      onChange={onChange} />
              </div>
              <div className="form-group">
                  <label htmlFor="repeatPassword">Repeat password</label>
                  <input
                      id="repeatPassword"
                      type={type}
                      className="form-control"
                      placeholder="Enter repeat password"
                      value={repeatPassword}
                      name="repeatPassword"
                      onChange={onChange} />
              </div>
              <fieldset className="form-group mb-2">
                  <div>Gender</div>
                  <div className="form-check">
                      <input id="female" type="radio" name="gender" value={gender} className="form-check-input" onChange={onChange}/>
                      <label className="form-check-label" htmlFor="female">Female</label>
                  </div>
                  <div className="form-check">
                      <input id="male" type="radio" name="gender" value={gender} className="form-check-input" onChange={onChange}/>
                      <label className="form-check-label" htmlFor="male">Male</label>
                  </div>
              </fieldset>
              <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-secondary mr-4 disabled">Previous</button>
                    <button onClick={saveAndContinue} type="button" className="btn btn-secondary mr-4 disabled">Next</button>
              </div>
          </form>
      </div>
  );
};

export default Basic;