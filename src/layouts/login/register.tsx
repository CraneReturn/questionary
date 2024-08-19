// 用户注册页面
import '../style/login/code.scss'
const register = () => {
  return (
    <div className="loginCode">
      <p className="title">验证码注册</p>
      <div className="inputCode">
        <div className="count">
          <input
            type="text"
            className="countNumber"
            v-model="count"
            placeholder="请输入用户邮箱"
          />
        </div>
        <div className="code">
          <label>
            <button className="getCode">获取验证码</button>
          </label>
          <input
            type="text"
            className="authCode"
            id="authCode"
            placeholder="请输入验证码"
            v-model="code"
          />
        </div>
        <div className="password">
          <input
            type="password"
            className="password"
            v-model="password"
            placeholder="请输入用户密码"
          />
        </div>
      </div>
      <div>
        <button className="countLogin">注 册</button>
        <span className="changeLogin">密码登录</span>
      </div>
    </div>
  );
};

export default register;
