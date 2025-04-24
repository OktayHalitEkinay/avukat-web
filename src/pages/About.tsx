import { Row, Col, Typography, Image, Card } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
      {/* Başlık kutu dışında */}
      <Title
        level={2}
        style={{ color: "#1f3b73", textAlign: "center", marginBottom: 32 }}
      >
        Hakkımda
      </Title>

      {/* Beyaz Kutu: Fotoğraf + Yazı */}
      <Card
        bordered={false}
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: 12,
          padding: "2rem",
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
        }}
      >
        <Row gutter={[32, 32]} align="middle">
          {/* FOTOĞRAF */}
          <Col xs={24} md={10}>
            <Image
              src="/images/lawyer2.jpg"
              alt="Av. Ahmet Yılmaz"
              width="100%"
              style={{
                borderRadius: 12,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          {/* BİYOGRAFİ */}
          <Col xs={24} md={14}>
            <Title level={4} style={{ color: "#1f3b73" }}>
              Av. Ahmet Yılmaz
            </Title>
            <Paragraph style={{ fontSize: "1.1rem", color: "#555" }}>
              2012 yılında İstanbul Üniversitesi Hukuk Fakültesi'nden mezun
              oldum. 10 yılı aşkın süredir ceza hukuku, aile hukuku ve iş hukuku
              alanlarında müvekkillerime danışmanlık ve dava takibi hizmetleri
              sunmaktayım. Adaletin sağlanmasında etik ve şeffaf yaklaşımla
              hareket etmeyi ilke ediniyorum.
            </Paragraph>
            <Paragraph style={{ fontSize: "1.05rem", color: "#666" }}>
              Her dava bir hayattır. Sizi dinliyor, anlıyor ve hukuki çözümlerle
              yanınızda oluyorum.
            </Paragraph>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default About;
