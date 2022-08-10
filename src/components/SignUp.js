import React, { useState } from 'react';
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
import { getItemFromLS } from '../helper/getLSitems';
import { axiosInstance } from '../utils/interceptor';
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
            span: 18,
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
    const [loading, setLoading] = useState(false);

    const onFinish = (user) => {
        console.log('user', user);

        const newUser = {
            email: user.email,
            Password: user.password
        }
        console.log('newUser', newUser);

        // const getUser = async () => {
        //     try {
        //         const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
        //         console.log(response.data);
        //         // console.log(response.data.data.employee_name);

        //     }
        //     catch (err) {
        //         console.log(err);
        //     }
        // }
        // getUser()



        // const postUser = async () => {
        //     try {
        //         setLoading(true);
        //         await axiosInstance({
        //             method: 'post',
        //             url: 'create',
        //             data: {
        //                 name: user.fName,
        //                 salary: '123123',
        //                 age: '123'
        //             },
        //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

        //         });

        //     }
        //     catch (err) {
        //         console.log(err.response, '=====');

        //     }
        //     finally {
        //         setLoading(false);
        //     }
        // }
        // postUser()

    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 100,
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
                        <Button type="primary" htmlType="submit" className='mb-3' loading={loading}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default SignUp;