import "./Login.css";

function Login() {
  return (
    <div>
      <div className="Login-page">
        <table className="Login-container">
          <tbody className="Login-table">
            <tr>
              <td>
                <div className="Login-title">LOGIN</div>
              </td>
            </tr>
            <tr>
              <td>
                <input className="Username-input" placeholder="Username" />
                <input className="Password-input" placeholder="Password" />
                <div className="Remember-me-button">
                  <input type="checkbox" />
                  Remember me
                </div>
                <div className="Forgot-me-URL">
                  <a href="url">Forgot me?</a>
                </div>
                <div>
                  <input className="Login-button" type="button" value="Login" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Login;
