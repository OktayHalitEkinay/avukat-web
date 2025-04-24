import { Row, Col, Typography, Space, Card } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;

const Contact = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
      {/* Sayfa Başlığı */}
      <Title level={2} style={{ color: "#1f3b73", textAlign: "center" }}>
        İletişim
      </Title>

      {/* İçerik Kutusu */}
      <Card
        bordered={false}
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: 12,
          padding: "1.5rem",
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
          marginTop: 32,
          overflow: "hidden",
        }}
      >
        {/* Açıklama */}
        <Paragraph
          style={{
            textAlign: "center",
            marginBottom: 40,
            fontSize: "1.05rem",
            color: "#555",
          }}
        >
          Size yardımcı olmaktan memnuniyet duyarız. Aşağıdaki iletişim
          bilgilerimizden bize ulaşabilirsiniz.
        </Paragraph>

        {/* Bilgi + Harita Satırı */}
        <Row gutter={[32, 32]}>
          {/* Sol: İletişim Bilgileri */}
          <Col xs={24} md={12}>
            <Space direction="vertical" size="middle" style={{ fontSize: 16 }}>
              <Text>
                <MailOutlined /> info@ahmetyilmaz.av.tr
              </Text>
              <Text>
                <PhoneOutlined /> +90 (212) 555 55 55
              </Text>
              <Text>
                <EnvironmentOutlined /> İstanbul, Türkiye
              </Text>

              <Title level={5} style={{ marginTop: 24, color: "#1f3b73" }}>
                Sosyal Medya
              </Title>
              <Space size="large">
                <Link href="https://wa.me/905555555555" target="_blank">
                  <WhatsAppOutlined
                    style={{ fontSize: 24, color: "#25D366" }}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ahmetyilmaz"
                  target="_blank"
                >
                  <LinkedinOutlined
                    style={{ fontSize: 24, color: "#0A66C2" }}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/ahmetyilmaz"
                  target="_blank"
                >
                  <InstagramOutlined
                    style={{ fontSize: 24, color: "#E1306C" }}
                  />
                </Link>
              </Space>
            </Space>
          </Col>

          {/* Sağ: Harita */}
          <Col xs={24} md={12}>
            <iframe
              title="Adres Harita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12045.927872681984!2d28.978359!3d41.008237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab99e3614a671%3A0x37f5e8a8f7b7f69f!2sİstanbul%2C%20Türkiye!5e0!3m2!1str!2str!4v1713878713855!5m2!1str!2str"
              width="100%"
              height="240"
              style={{
                border: 0,
                borderRadius: 12,
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Contact;
