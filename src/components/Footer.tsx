import { Layout, Typography, Space } from "antd";
import {
  PhoneOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export const Footer = () => {
  return (
    <AntFooter
      style={{
        backgroundColor: "#1f3b73",
        color: "#fff",
        textAlign: "center",
        padding: "30px 16px",
      }}
    >
      {/* İletişim Bilgileri */}
      <div style={{ marginBottom: 12, fontSize: 14, lineHeight: 2 }}>
        <Text style={{ display: "block", color: "#ccc" }}>
          <PhoneOutlined /> +90 (212) 555 55 55
        </Text>
        <Text style={{ display: "block", color: "#ccc" }}>
          <EnvironmentOutlined /> İstanbul, Türkiye
        </Text>
      </div>

      {/* Sosyal Medya + Mail */}
      <Space size="middle" style={{ marginBottom: 16 }}>
        <a
          href="mailto:info@ahmetyilmaz.av.tr"
          target="_blank"
          rel="noreferrer"
        >
          <MailOutlined style={{ fontSize: 20, color: "#ccc" }} />
        </a>
        <a href="https://wa.me/905555555555" target="_blank" rel="noreferrer">
          <WhatsAppOutlined style={{ fontSize: 20, color: "#25D366" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmetyilmaz"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinOutlined style={{ fontSize: 20, color: "#0A66C2" }} />
        </a>
        <a
          href="https://instagram.com/ahmetyilmaz"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramOutlined style={{ fontSize: 20, color: "#E1306C" }} />
        </a>
      </Space>

      {/* Telif */}
      <div style={{ fontSize: 13, color: "#aaa" }}>
        © {new Date().getFullYear()} Av. Ahmet Yılmaz – Tüm Hakları Saklıdır
      </div>
    </AntFooter>
  );
};
