function RegisteScreen() {
  return (
    <>
      <div>
        <div className="d-flex justify-content-center ">
          <div className="col-lg-6 m-3 p-3 border border-dark rounded">
            <form>
              <h4>Create New Account</h4>
              <hr />
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input type="email" class="form-control" />
                <div class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input type="text" class="form-control" />
              </div>
              <button type="submit" class="btn btn-primary align-self-end">
                Register
              </button>
              <a className="nav-link my-auto" href="/">
                Login to existing account?
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisteScreen;
