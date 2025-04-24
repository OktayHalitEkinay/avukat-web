import React, { useState } from "react";
import { Layout, Menu, Drawer, Button, Grid, Space } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import {
  MenuOutlined,
  MailOutlined,
  WhatsAppOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const menuItems: MenuProps["items"] = [
  { label: "Anasayfa", key: "/" },
  { label: "Hakkımda", key: "/about" },
  { label: "İletişim", key: "/contact" },
];

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigate: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    setDrawerOpen(false);
  };

  return (
    <>
      <Header
        style={{
          backgroundColor: "#1f3b73",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* SOL: Logo + İsim */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ height: 36, width: "auto", objectFit: "contain" }}
          />
          <span
            style={{
              color: "#fff",
              fontSize: "1.3rem",
              fontWeight: 600,
              fontFamily: "'Segoe UI', sans-serif",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Av. Ahmet Yılmaz
          </span>
        </div>

        {/* ORTA: Menü (sadece md ve üstü) */}
        {screens.md && (
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              onClick={handleNavigate}
              items={menuItems}
              theme="dark"
              style={{
                backgroundColor: "transparent",
                borderBottom: "none",
              }}
              disabledOverflow
            />
          </div>
        )}

        {/* SAĞ: Sosyal İkonlar veya Menü Butonu */}
        {screens.md ? (
          <Space size="large">
            <a
              href="mailto:info@ahmetyilmaz.av.tr"
              target="_blank"
              rel="noreferrer"
            >
              <MailOutlined style={{ fontSize: 20, color: "#fff" }} />
            </a>
            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppOutlined style={{ fontSize: 20, color: "#fff" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmetyilmaz"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinOutlined style={{ fontSize: 20, color: "#fff" }} />
            </a>
            <a
              href="https://instagram.com/ahmetyilmaz"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramOutlined style={{ fontSize: 20, color: "#fff" }} />
            </a>
          </Space>
        ) : (
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 22, color: "#fff" }} />}
            onClick={() => setDrawerOpen(true)}
            aria-label="Menüyü aç"
          />
        )}
      </Header>

      {/* Mobil Drawer Menü */}
      <Drawer
        title="Menü"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          onClick={handleNavigate}
          items={menuItems}
        />

        <div style={{ padding: 16 }}>
          <Space size="large">
            <a
              href="mailto:info@ahmetyilmaz.av.tr"
              target="_blank"
              rel="noreferrer"
            >
              <MailOutlined style={{ fontSize: 20 }} />
            </a>
            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppOutlined style={{ fontSize: 20 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmetyilmaz"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinOutlined style={{ fontSize: 20 }} />
            </a>
            <a
              href="https://instagram.com/ahmetyilmaz"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramOutlined style={{ fontSize: 20 }} />
            </a>
          </Space>
        </div>
      </Drawer>
    </>
  );
};
