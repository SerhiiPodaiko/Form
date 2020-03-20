import React from "react";

import countries from "../data/countries";
import Field from "./Field";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            country: '',
            gender: '',
            agree: false,
            avatar: '',
            age: 18,
            errors: {
                username: false,
                password: false,
                repeatPassword: false
            }
        }
    }


    onSubmit = (event) => {
        const {username, password, repeatPassword} = this.state;
        event.preventDefault();

        const newErrors = {};
        if (username.length < 5) {
            newErrors.username = `Must be 5 characters or more`
        }

        if (password.length < 3) {
            newErrors.password = `Required`
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

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.name, event.target.value);
    };

    getOptionsItems = (countries) => {
        return (
            countries.map(country => (
                <option key={country.id} value={country.id}>{country.name}</option>
            ))
        )
    };

    onChangeAgree = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    };

    onChangeAvatar = (event) => {
        const reader = new FileReader();
        reader.onload = event => {
            this.setState({
                avatar: event.target.result
            })
        };
        reader.readAsDataURL(event.target.files[0])
    };

    decrementAge = () => {
        this.setState((prevSate) => {
            return {
                age: prevSate.age - 1
            }
        }, () => {
            this.setState({
                errors: {
                    age: this.state.age > 17 ? false : `Must be more 18`
                }
            })
        })
    };

    incrementAge = () => {
        this.setState((prevSate) => {
            return {
                age: prevSate.age + 1
            }
        }, () => {
            this.setState({
                errors: {
                    age: this.state.age > 17 ? false : `Must be more 18`
                }
            })
        })
    };

    render() {

        const {
            username, password, repeatPassword,
            country, gender, agree, age
        } = this.state;

        return (
            <div className="form-container card">
                <form className="form card-body">
                    <Field
                        id="username"
                        labelText="Username"
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        error={this.state.errors.username}/>

                    <Field
                        id="password"
                        labelText="Password"
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        error={this.state.errors.password}/>

                    <div className="form-group">
                        <label>Repeat password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter repeat password"
                            ref={node => this.repeatPassword = node}
                            value={repeatPassword}
                            name="repeatPassword"
                            onChange={this.onChange}
                        />
                        {this.state.errors.repeatPassword ?
                            <div className="invalid-feedback">
                                {this.state.errors.repeatPassword}
                            </div> : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            className="form-control"
                            id="country"
                            value={country}
                            name="country"
                            onChange={this.onChange}>
                            {this.getOptionsItems(countries)}
                        </select>
                    </div>

                    <fieldset className="form-group">
                        <div>Gender</div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                id="male"
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={this.onChange}
                            />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                id="female"
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={this.onChange}
                            />
                            <label className="form-check-label " htmlFor="female">Female</label>
                        </div>
                    </fieldset>

                    <div className="form-group">
                        <label htmlFor="avatar">Avatar</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="avatar"
                            name="avatar"
                            onChange={this.onChangeAvatar}/>
                    </div>

                    <div className="form-group">
                        <div><label>Age</label></div>
                        <div className="btn-group">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={this.decrementAge}>
                                -
                            </button>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Enter Age"
                                   name="age"
                                   value={age}
                                   onChange={this.onChange}/>
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={this.incrementAge}>
                                +
                            </button>
                            <br/>
                            {this.state.errors.age ?
                                <div className="invalid-feedback">
                                    {this.state.errors.age}
                                </div> :
                                null}
                        </div>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="agree"
                            value={agree}
                            name="agree"
                            onChange={this.onChangeAgree}
                            checked={agree}/>
                        <label className="form-check-label" htmlFor="agree">
                            Confirm the processing of data
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        onClick={this.onSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
