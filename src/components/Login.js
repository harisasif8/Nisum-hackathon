import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Space } from 'antd';

const Login = () => {


    return (
        <>
            <Row
                justify='center'
                className="login-form"

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
                        className='a'

                    // onFinish={onFinish}
                    // size={'small'}

                    >
                        <h1 align='center' >Sign In</h1>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                            className="login-input"
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
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Space size={[0, 16]}><Checkbox>Remember me</Checkbox><Checkbox>Remember me</Checkbox></Space>
                            </Form.Item >
                            <Button type="link" align='end'>Forget Password</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button block={true} type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            <Button type="link" align='end'>Sign Up</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>);
};

export default Login;