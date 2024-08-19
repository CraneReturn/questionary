// 用户登录页面
import "../style/login/index.scss";
import logo from "@/asset/image/logo.png";
import text from "@/asset/image/text.png";
import Code from "./register";
import LoginPart from "./login";
import QR from "./code";
const login = () => {
  return (
    <div className="login">
      <div className="loginTop">
        <div className="title">
          <img src={logo} alt="logo" className="logoIt" />
          <h1>薯条问卷</h1>
        </div>
        <button className="cancelLogin">
          <i className="iconfont icon-cuohao"></i>
        </button>
      </div>
      <div className="loginTable">
        <div className="logo">
          <img src={text} alt="文本logo" className="logoText" />
          <div className="loginQR">
            <QR />
          </div>
        </div>

        <div className="loginMain">
          <Code />
        </div>
      </div>
      <div className="loginFoot">
        <p>
          注册登录即表示同意 <span>用户协议</span> 和 <span>隐私政策</span>
        </p>
      </div>
    </div>
  );
};

export default login;
