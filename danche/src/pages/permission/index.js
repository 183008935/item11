import React from 'react'
import {Button,Card,Modal} from 'antd'
import ETable from '../../components/ETable';
import Utils from './../../utils/util'
export default class Permission  extends React.Component{

    state = {
       
    };
    render(){
        const columns=[
            {
                title:'角色ID',
                dataIndex:'id'
            },
            {
                title:'角色名称',
                detaIndex:'role_time'
            },
            {
                title:'创建时间',
                detaIndex:'create_time'
            },
            {
                title:'使用状态',
                detaIndex:'status'
            },
            {
                title:'授权时间',
                detaIndex:'authorize_time',
                render:Utils.formateDate
            },


        ]
        const { editorContent, editorState } = this.state;
        return (
            <div>
                <Card >
                    <Button type="primary" onClick={this.handleClearContent} >创建角色</Button>
                    <Button type="primary" >设置权限</Button>
                    <Button type="primary" >用户授权</Button>
                </Card>
                <div className="centent-wrap">
                  <ETable
                  
                  
                  />
                </div>
            
            </div>
        );
    }
}