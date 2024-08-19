// 用户注册页面
import '../style/login/login.scss'
const loginPart = () => {
    return   <div className="loginPassword">
    <p className="title">密码登录</p>
    <div className="inputPassword">
      <div className="count">
        <input
          type="text"
          className="countNumber"
          v-model="count"
          placeholder="请输入账号"
        />
      </div>
      <div className="password">
        <input
          type="password"
          className="authPassword"
          v-model="password"
          placeholder="请输入密码"
        />
        <button className="forget" >忘记密码</button>
      </div>
    </div>
    <div>
      <div className="loginBtn">
        <button className="signIn" >注册</button>
        <button className="loginIt" >登录</button>
      </div>
      <span className="changeLogin">验证码注册</span>
    </div>
  </div>;
  };
  
  export default loginPart;
  