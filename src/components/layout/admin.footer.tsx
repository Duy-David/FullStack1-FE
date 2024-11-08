import React from 'react'
import { Layout } from "antd";
const AdminFooter = () => {
    const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: "center" }}>
    Phuong Duy{new Date().getFullYear()} @PhuongDuy
  </Footer>
  )
}

export default AdminFooter