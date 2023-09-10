import "./LoginCard.css"
const LoginCard = ({ isShowLogin }) => {
  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Sign In</h1>
            <label htmlFor="login-input">Username</label>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label htmlFor="login-input">Password</label>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginCard
