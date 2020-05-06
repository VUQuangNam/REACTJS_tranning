import React, { Component } from 'react';
import { useForm } from "react-hook-form";

const FormSubmit = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <form className="dunnio-form validated" onSubmit={handleSubmit(onSubmit)}>
            <div className="dunnio-portlet__body">
                <div className="form-group row">
                    <div className="col-12">
                        <label>* Email:</label>
                        <input
                            name="email"
                            className="form-control"
                            ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Email không hợp lệ"
                                }
                            })}
                        />
                        <div className="invalid-feedback">{errors.email && errors.email.message}</div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-12">
                        <label>* Tên hiển thị: </label>
                        <input
                            className="form-control"
                            required="Tối thiểu 10 ký tự"
                            minLength={10}
                            name="username"
                            ref={register({
                                validate: value => value !== "admin" || "Nice try!"
                            })}
                        />
                        {errors.username && errors.username.message}
                    </div>
                </div>
            </div>
            <button type="submit">button</button>
        </form >
    );
};
class Settings extends Component {
    render() {
        return (
            <div className=" dunnio-portlet__body">
                <FormSubmit />
            </div>
        );
    }
}

export default Settings;
