// 用户注册页面
import "../style/login/code.scss";
import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
const register = () => {
  return (
    <div className="loginCode">
      <p className="title">验证码注册</p>
      <div className="inputCode">
        <div className="count">
          <Input size="large" placeholder="Filled" variant="filled" />
        </div>
        <div className="code">
          <label>
            <Button type="primary" className="getCode">
              获取验证码
            </Button>
          </label>
          <Input size="large" placeholder="Filled" variant="filled" />
        </div>
        <div className="password">
          <Input.Password
            size="large"
            style={{ borderRadius: 4 }}
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
      </div>
      <div>
        <Button className="countLogin" type="primary">
          注 册
        </Button>
        <span className="changeLogin">密码登录</span>
      </div>
    </div>
  );
};

export default register;
