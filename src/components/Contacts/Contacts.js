import React from "react";

import { countries, cities } from "../../data/data";

    const getCountries = (countries) => {
        return countries.map(country => (
           <option value={country.id} key={country.id}>{country.country}</option>
        ));
    };

    const getCities = (cities) => {
        return cities.map(city => (
            <option value={city.id} key={city.id}>{city.city}</option>
        ));
    };

const Contacts = ({ active, email, mobile, onChange, prevStep, nextStep }) => {

    const next = (event) => {
        event.preventDefault();
        nextStep();
    };

    const back = (event) => {
        event.preventDefault();
        prevStep();
    };

    return (
        <div className="form-container card">
            <form className="form card-body">
                <div className="d-flex justify-content-around steps mb-4">
                    <div className="step is-completed-before">
                        <div className="step__marker is-completed">1</div>
                        <div className="step__title mt-3">Basic</div>
                    </div>
                    <div className="step">
                        <div className={`step__marker${active}`}>2</div>
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
                    <label htmlFor="firstname">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        name="email"
                        onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="lastname"
                        type="text"
                        className="form-control"
                        placeholder="Enter mobile"
                        value={mobile}
                        name="mobile"
                        onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select className="form-control" name="country" id="country">
                        {getCountries(countries)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <select className="form-control" name="city" id="city">
                        {getCities(cities)}
                    </select>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={back} type="button" className="btn btn-secondary mr-4 disabled">Previous</button>
                    <button onClick={next} type="button" className="btn btn-secondary mr-4 disabled">Next</button>
                </div>
            </form>
        </div>
    );
};

export default Contacts;