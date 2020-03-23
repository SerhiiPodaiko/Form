import React from "react";
import avatar from '../../avatar.png';

const Avatar = ({ active, nextStep, prevStep }) => {

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
                    <div className="step">
                        <div className="step__marker is-completed">1</div>
                        <div className="step__title mt-3">Basic</div>
                    </div>
                    <div className="step">
                        <div className="step__marker is-completed">2</div>
                        <div className="step__title mt-3">Contacts</div>
                    </div>
                    <div className="step">
                        <div className={`step__marker${active}`}>3</div>
                        <div className="step__title mt-3">Avatar</div>
                    </div>
                    <div className="step">
                        <div className="step__marker">4</div>
                        <div className="step__title mt-3">Finish</div>
                    </div>
                </div>

                <img className="mb-4 w-100" src={avatar} alt=""/>
                <div className="mb-4">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile"/>
                        <label className="custom-file-label" htmlFor="customFile">
                            Choose avatar
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={back} type="button" className="btn btn-secondary mr-4 disabled">Previous</button>
                    <button onClick={next} type="button" className="btn btn-secondary mr-4 disabled">Next</button>
                </div>
            </form>
        </div>
    );
};

export default Avatar;