/**
 * @author zhangyi
 * @date 2018/4/1
 */
import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import './index.less'
const FormItem = Form.Item

class LoginForm extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = (e) => {
        const { onSubmit } = this.props;
        this.props.form.validateFields(
            (err, values) => {
                if (!err) {
                    onSubmit(e, values)
                }
            },
        )
        e.preventDefault()
    }

    render() {
        const { form: {getFieldDecorator} } = this.props;

        return (
            <Form onSubmit={this.onSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{
                            required: true,
                            message: '请输入用户名',
                        }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="用户名"
                               size="large"
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: '请输入密码',
                        }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password"
                               placeholder="密码"
                               size="large"
                        />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                        登 录
                        <Icon type="arrow-right"/>
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create({})(LoginForm)