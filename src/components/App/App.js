import React, { Component } from "react";

import Basic from "../Basic";
import Contacts from "../Contacts";
import Avatar from "../Avatar";
import Finish from "../Finish";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            step: 1,
            firstname: '',
            lastname: '',
            password: '',
            repeatPassword: '',
            gender: false,
            email: '',
            mobile: '',
            country: '',
            city: '',
            errors: {
                firstname: false,
                lastname: '',
                password: '',
                repeatPassword: '',
                email: '',
                mobile: '',
                city: ''
            }
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    nextStep = () => {
        const { step, firstname, lastname, password, repeatPassword } = this.state;
        this.setState({
            step: step + 1
        });
        const newErrors = {};
        if (firstname.length < 5) {
            newErrors.firstname = 'Must be 5 characters or more'
        }
        if (lastname.length < 5) {
            newErrors.lastname = 'Must be 5 characters or more'
        }
        if (password.length < 3) {
            newErrors.lastname = 'Required'
        }
        if (password !== repeatPassword) {
            newErrors.repeatPassword = `Must be equal password`
        }

        if (Object.keys(newErrors).length > 0) {
            this.setState({
                errors: newErrors
            })
        } else {
            this.setState({
                errors: {}
            })
        }
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
        this.setState({
            step: step + 1
        })
    };



    render() {
        const { step, firstname, lastname, password, repeatPassword, gender, email, mobile, errors } = this.state;
        let active = ` is-active`;
        switch (step) {
            case 1: {
                return <Basic
                            type="text"
                            active={active}
                            firstname={firstname}
                            lastname={lastname}
                            password={password}
                            repeatPassword={repeatPassword}
                            gender={gender}
                            onChange={this.onChange}
                            nextStep={this.nextStep}
                            errors={errors} />
            }
            case 2: {
                return <Contacts
                            type="email"
                            active={active}
                            email={email}
                            mobile={mobile}
                            onChange={this.onChange}
                            prevStep={this.prevStep}
                            nextStep={this.nextStep} />
            }
            case 3: {
                return <Avatar
                            active={active}
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}/>
            }
            case 4: {
                return <Finish />
            }
        }
    }
};