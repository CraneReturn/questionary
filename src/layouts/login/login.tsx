// 用户注册页面
import '../style/login/login.scss'
import { Button } from 'antd';
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
        <Button className="forget" >忘记密码</Button>
      </div>
    </div>
    <div>
      <div className="loginBtn">
        <Button className="signIn" >注册</Button>
        <Button className="loginIt" >登录</Button>
      </div>
      <span className="changeLogin">验证码注册</span>
    </div>
  </div>;
  };
  
  export default loginPart;
  