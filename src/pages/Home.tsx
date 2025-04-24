import { Button, Card, Col, Row, Typography } from "antd";
import {
  SolutionOutlined,
  FileTextOutlined,
  SmileOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const services = [
  {
    icon: <SolutionOutlined style={{ fontSize: 42, color: "#1f3b73" }} />,
    title: "Aile Hukuku",
    description:
      "Boşanma, velayet, mal paylaşımı gibi duygusal süreçlerde yanınızdayız.",
  },
  {
    icon: <FileTextOutlined style={{ fontSize: 42, color: "#1f3b73" }} />,
    title: "Ceza Hukuku",
    description:
      "Ceza davalarında adaletin sağlanması için titiz ve kararlı bir savunma sunuyoruz.",
  },
  {
    icon: <SmileOutlined style={{ fontSize: 42, color: "#1f3b73" }} />,
    title: "İş Hukuku",
    description:
      "Çalışan ve işveren ilişkilerinde haklarınızı etkin şekilde koruyoruz.",
  },
  {
    icon: <FileTextOutlined style={{ fontSize: 42, color: "#1f3b73" }} />,
    title: "Gayrimenkul Hukuku",
    description:
      "Tapu işlemleri, kira sözleşmeleri ve taşınmaz ihtilaflarında yanınızdayız.",
  },
  {
    icon: <SolutionOutlined style={{ fontSize: 42, color: "#1f3b73" }} />,
    title: "Miras Hukuku",
    description:
      "Veraset ilamı, miras paylaşımı ve vasiyet düzenlemelerinde uzman desteği sunuyoruz.",
  },
  {
    icon: <SmileOutlined style={{ fontSize: 42, color: "#1f3b73" }} />,
    title: "Ticaret Hukuku",
    description:
      "Şirketler hukuku, sözleşmeler ve ticari ihtilaflarda stratejik çözümler sağlıyoruz.",
  },
];

const Home = () => {
  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "2rem 1rem",
      }}
    >
      {/* HERO ALANI */}
      <section
        style={{
          background: "#1f3b73",
          color: "white",
          borderRadius: 12,
          padding: "4rem 1rem",
          marginBottom: 48,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[32, 32]} align="middle">
            {/* SAĞDAKİ YAZIYI ÖNE ALIYORDUK – ŞİMDİ FOTOĞRAFI ÖNE ALIYORUZ */}

            {/* GÖRSEL - SOLDA */}
            <Col xs={24} md={10}>
              <img
                src="/images/lawyer2.jpg"
                alt="Av. Ahmet Yılmaz"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              />
            </Col>

            {/* YAZI - SAĞDA */}
            <Col xs={24} md={14}>
              <Title
                style={{ color: "#fff", fontSize: "2.8rem", marginBottom: 12 }}
              >
                Avukat Ahmet Yılmaz
              </Title>
              <Paragraph style={{ fontSize: "1.2rem", color: "#e0e0e0" }}>
                Güvenilir, etkin ve çözüm odaklı hukuki danışmanlık hizmeti
              </Paragraph>
              <Button
                type="default"
                size="large"
                icon={<RightCircleOutlined />}
                style={{ marginTop: 20 }}
                href="/contact"
              >
                Bizimle İletişime Geçin
              </Button>
            </Col>
          </Row>
        </div>
      </section>

      {/* HİZMETLER */}
      <section style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title
          level={3}
          style={{ textAlign: "center", color: "#1f3b73", marginBottom: 40 }}
        >
          Uzmanlık Alanlarımız
        </Title>
        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  textAlign: "center",
                  minHeight: 280,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                bodyStyle={{ padding: "2rem" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{ marginBottom: 16, transition: "all 0.3s ease" }}>
                  {service.icon}
                </div>
                <Title
                  level={4}
                  style={{ color: "#1f3b73", transition: "color 0.3s ease" }}
                >
                  {service.title}
                </Title>
                <Paragraph
                  style={{ color: "#555", transition: "color 0.3s ease" }}
                >
                  {service.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Home;
