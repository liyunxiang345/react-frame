import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

class Index extends Component {
    render() {
        return (
            <Layout className='index animated fadeIn'>
                <Row gutter={24} className='index-header'>
                    <Col span={6}>
                        <div className='base-style wechat'>
                           首页
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Index
