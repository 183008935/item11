import React, { Component } from 'react';
import moment from 'moment';
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Icon, message, InputNumber, Upload } from 'antd'
class Register extends Component {
    state = {}
    handleClick1 = () => {
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`恭喜${userInfo.userName}登录,您的密码是${userInfo.userPwd}`)
    }

    handleClick2 = () => {

        this.props.form.resetFields();
        message.success('重置成功！！')
    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false,
            }));
        }
    }

    render() {
        let FormItem = Form.Item;
        let RadioGroup = Radio.Group;
        let Option = Select.Option;
        let TextArea = Input.TextArea;
        let { getFieldDecorator } = this.props.form;
        let fromItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        let rewObject = { minRows: 3, maxRows: 6 }


        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...fromItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '用户名不能为空'
                                    }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码"  {...fromItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                })(
                                    <Input type="password" placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别"  {...fromItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='2'>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄"  {...fromItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 26,
                                })(
                                    <InputNumber label="年龄" />
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态"  {...fromItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: ['1'],
                                })(
                                    <Select>
                                        < Option value="1">咸鱼一条</Option>
                                        < Option value="2">风华浪子</Option>
                                        < Option value="3">北大才子</Option>
                                        < Option value="4">创业者</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好"  {...fromItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['2', '6'],
                                })(
                                    <Select mode='multiple'>
                                        < Option value="1">爬山</Option>
                                        < Option value="2">打游戏</Option>
                                        < Option value="3">跑步</Option>
                                        < Option value="4">飙车</Option>
                                        < Option value="5">打篮球</Option>
                                        < Option value="6">打台球</Option>
                                        < Option value="7">骑行</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚"  {...fromItemLayout}>
                            {
                                getFieldDecorator('inyihun', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日"  {...fromItemLayout}>
                            {
                                getFieldDecorator('birthday', {

                                    initialValue: moment('1992-12-30'),
                                })(
                                    <DatePicker
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址"  {...fromItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '邯郸市永年县临名关镇海龙湾小区'

                                })(
                                    <TextArea
                                        autosize={
                                            rewObject
                                        }
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间"  {...fromItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像"  {...fromItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg ? <img src={this.state.userImg} /> : <Icon type="plus" />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem   {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Checkbox>我已经阅读<a>协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem   {...offsetLayout}>
                            <Button type="primary" onClick={this.handleClick1} style={{ marginRight: 20 }}>注册</Button>
                            <Button type="primary" onClick={this.handleClick2}>重置</Button>
                        </FormItem>

                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Register);