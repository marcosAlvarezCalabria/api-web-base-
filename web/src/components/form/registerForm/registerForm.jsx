import { useForm } from "react-hook-form";
import "./register.css";
import axios from "axios";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      const response = await axios.post("http://localhost:3000/api/user", data);
      console.log(response);
      alert("LOGIN SUCESSFULLY")
      // Reset the form on successful submission
      reset();
    } catch (error) {
      console.error(error);
      // Handle the error and possibly display an error message to the user
    }
  }

  return (
    <div className="container register-div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Entered value does not match email format"
              }
            })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters"
              }
            })}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
