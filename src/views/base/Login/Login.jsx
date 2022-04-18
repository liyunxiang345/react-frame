import React, { Component } from 'react'
import { Layout, Input, Form, Button, Divider, message, notification } from 'antd'
import { Icon } from '@ant-design/compatible'
import { withRouter} from 'react-router-dom';
import '@/style/view-style/login.scss';
import Api from '@/api/login';

class Login extends Component {
    formRef = React.createRef();
    handleSubmit = async () => {
        try {
           const values =  await this.formRef.current.validateFields();
           await Api.adminLogin({...values})
            this.props.history.push('/');
        } catch (error) {
            console.log('Failed:', error);
        }
    }
    render() {
        return (
            <Layout className='login animated fadeIn'>
                <div className='model'>
                    <div className="login-form">
                        <h3>云翔blog后台管理</h3>
                        <Divider />
                        <Form onFinish={this.handleSubmit} ref={this.formRef}>
                            <Form.Item 
                                name="username" 
                                rules={[{ required: true, message: '请输入用户名' }]}
                            >
                                <Input placeholder='用户名' prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} />
                            </Form.Item>
                            <Form.Item 
                                name="password" 
                                rules={[{ required: true, message: '请输入密码' }]}
                            >
                                <Input.Password placeholder='密码' prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType='submit' type='primary' className='login-form-button'>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(Login)