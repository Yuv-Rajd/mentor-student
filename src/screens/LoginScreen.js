import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/home", { state: { data: formData } });
  };
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="col-lg-6 m-3 p-3 border border-dark rounded">
          <form onSubmit={handleSubmit}>
            <h4>Enter Your Detail</h4>
            <hr />
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={handleInputChange}
              />
              <div className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary align-self-end">
              Get Started
            </button>
            {/* <a className="nav-link my-auto" href="/register">
              create new account?
            </a> */}
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginScreen;
