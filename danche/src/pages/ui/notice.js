import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';
import './ui.less';


export default class Notice extends Component {
    openClick = (type, direction) => {
        if (direction) {
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: '农夫山泉',
            description: '欢迎来到农夫山泉！！想加入请等待。。。。'
        });
    }
    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type='primary' onClick={() => this.openClick('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.openClick('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.openClick('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => this.openClick('error')}>Error</Button>
                </Card>
                <Card title='通知提醒框-方向设置' className='card-wrap'>
                    <Button type='primary' onClick={() => this.openClick('success', 'topLeft')}>Success topLeft</Button>
                    <Button type='primary' onClick={() => this.openClick('info', 'topRight')}>Info topRight</Button>
                    <Button type='primary' onClick={() => this.openClick('warning', 'bottomLeft')}>Warning bottomLeft</Button>
                    <Button type='primary' onClick={() => this.openClick('error', 'bottomRight')}>Error bottomRight</Button>
                </Card>
            </div>
        )
    }
}
