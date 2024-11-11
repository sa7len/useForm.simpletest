import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';


const schema = yup.object({
    username: yup.string().required("username is requred"),
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    password: yup.string().min(6, "The password must be at least 6 characters long").required("Password is rewuired"),
}).required();

function MyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username:</label>
            <input type="text" {...register("username")} />
            <p>{errors.username?.message}</p>

            <label htmlFor="email">Email:</label>
            <input type="text" {...register("email")} />
            <p>{errors.email?.message}</p>

            <label htmlFor="password">Password:</label>
            <input type="password" {...register("password")} />
            <p>{errors.password?.message}</p>

            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;
