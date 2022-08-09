import {

    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Select,
    Typography,
    Space
} from 'antd';
import React, { useState } from 'react';
const { Option } = Select;
const { Title } = Typography;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const SignUp = () => {
    const [form] = Form.useForm();
    const [user, setUser] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        phoneNumber: '',
        gender: ''
    });

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const handleChange = (event) => {

    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="92">+92</Option>
            </Select>
        </Form.Item>
    );
    return (
        <Row
            className="form-row"
            align='center'
        >
            <Col
                className='form-col'
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '92',
                    }}
                    className='form'
                    scrollToFirstError
                    wrapperCol={{ span: 12 }}
                >
                    <Title align='center'>Sign Up</Title>
                    <Space
                    >
                        <Form.Item
                            name="fName"
                            // label="First Name"
                            rules={[
                                {
                                    type: 'name',
                                },
                                {
                                    required: true,
                                    message: 'Please input your First Name!',
                                },
                            ]}
                            wrapperCol={{ span: 21 }}
                            align='center'

                        >
                            <Input
                                placeholder='First Name'
                                

                            />
                        </Form.Item>
                        <Form.Item
                            name="LName"
                            // label="Last Name"
                            rules={[
                                {
                                    type: 'name',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your Last name!',
                                },
                            ]}
                            wrapperCol={{ span: 21 }}
                            align='center'

                        >
                            <Input
                                placeholder='Last Name'

                            />
                        </Form.Item>
                    </Space>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            {
                                required: true,
                                message: 'Please select gender!',
                            },
                        ]}
                    >
                        <Select placeholder="select your gender">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                        {...tailFormItemLayout}
                      
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default SignUp;