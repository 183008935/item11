import React, { Component } from 'react';
import { Card, Form, Button, Input, message, Icon, Checkbox } from 'antd';
let FormItem = Form.Item;
class FormLogin extends Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields(
            (err, values) => {
                if (!err) {
                    message.success(`恭喜${userInfo.userName}登录,您的密码是${userInfo.userPwd}`)
                }
            }
        )
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Card title="登陆行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 15 }}>
                    <Form layout="horizontal" style={{ width: 230 }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '用户名不能为空'
                                    }, {
                                        min: 5, max: 15,
                                        message: '用户名长度不在范围'
                                    }, {
                                        pattern: new RegExp('/^\\w+$', 'g'),
                                        message: '用户名必须为字母或数字'
                                    }
                                    ]
                                })(
                                    <Input prefix={<Icon type='user' />} placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: []
                                })(
                                    <Input prefix={<Icon type='lock' />} type="password" placeholder="请输入密码" />
                                )
                            }

                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,

                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a style={{ float: 'right' }}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
                        </FormItem>

                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);
