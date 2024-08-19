// 用户登录页面
import "../style/login/index.scss";
import logo from "@/asset/image/logo.png";
import text from "@/asset/image/text.png";
import Code from "./code";
import LoginPart from "./login";
const login = () => {
  return (
    <div className="loginIndex">
      <div className="logo">
        <div className="logoTop">
          <img src={logo} alt="logo" className="logoImage" />
          <p>薯条问卷</p>
        </div>
        <div className="QRcode">
          <img src={text} alt="文本" />
          <Code />
        </div>
      </div>
      <b></b>
      <div className="loginMain">
        <LoginPart />
      </div>
      <div className="loginFoot">
      <p>注册登录即表示同意 <span>用户协议</span> 和 <span>隐私政策</span></p>
    </div>
    </div>
  );
};

export default login;
