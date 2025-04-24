import React from "react";
import { Link } from "react-router-dom";
const Login = () => {



return (
  <div className="container-login">
    <form className="formulario-login">
      <div class="login-card row">
        <div className="col-lg-12">
          <div class="card-header">
            <h1>Login</h1>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required=""/>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required=""/>
              </div>
              <div class="form-group">
                <button type="submit" class="login-button">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </form>
  </div>
)
}
export default Login;