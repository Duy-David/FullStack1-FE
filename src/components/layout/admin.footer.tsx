'use client'
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
               Phương Duy©{new Date().getFullYear()} Created by @phuongduy
            </Footer>
        </>
    )
}

export default AdminFooter;