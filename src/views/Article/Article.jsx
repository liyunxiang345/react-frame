import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

class Article extends Component {
    render() {
        return (
            <Layout className='index animated fadeIn'>
                <Row gutter={24} className='index-header'>
                    <Col span={24}>
                        <div className='base-style wechat'>
                           文章博文
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Article
