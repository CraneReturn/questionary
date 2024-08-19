// 二维码扫码登录
import { QRCode } from "antd";
const QR = () => {
  return (
    <div className="QR">
      <p>扫描二维码登录</p>
      <div className="code">
        <QRCode
          value={
            "https://github.com/ant-design/ant-design/edit/master/components/qr-code/demo/base.tsx"
          }
          size={200}
          errorLevel="H"
        />
      </div>
    </div>
  );
};

export default QR;
