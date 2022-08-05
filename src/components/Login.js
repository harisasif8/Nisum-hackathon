import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Space, Typography } from 'antd';

const Login = () => {
    const { Title } = Typography;


    return (
        <>
            <Row
                justify='center'
                className="form-row"
            >
                <Col
                    span={6}
                    sm={6}
                    xs={12}
                >
                    <Form
                        name="normal_login"
                        initialValues={{
                            remember: true,
                        }}
                        className='form'
                        wrapperCol={{ span: 21 }}

                    // onFinish={onFinish}
                    // size={'small'}

                    >
                        <Title align='center' >Sign In</Title>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                            className="login-input"
                            align='center'
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                            align='center'
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 2 }}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox >Remember me</Checkbox>
                            </Form.Item >
                            <Button type="link" >Forget Password</Button>
                        </Form.Item>
                        <Form.Item align='center' wrapperCol={{ span: 12 }} >
                            <Button type="primary" block htmlType="submit" className="login-form-button login-btn-margin">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>);
};

export default Login;