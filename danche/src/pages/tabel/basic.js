import React, { Component } from 'react'
import {Card,Table,Modal, message,Button,Pagination} from 'antd';
import axios from './../../axios/index';
import  Util  from './../../utils/util'
export default class BasicTable extends Component {
    state={
        dataSource2:[]
    }
    params={
        page:1
    }
    componentWillMount(){
        const data=[
            {
                id:'0',
                userName:'田家豪',
                sex:'男',
                state:'1',
                interest:'1',
                address:'河北省邯郸市',
                birthday:'1992-12-30',
                time:'09:00'
            },
            {
                id:'1',
                userName:'吴彦祖',
                sex:'男',
                state:'1',
                interest:'2',
                address:'西湖区湖底公园1号',
                birthday:'1992-12-30',
                time:'09:00'
            },
            {
                id:'2',
                userName:'胡彦斌',
                sex:'男',
                state:'1',
                interest:'3',
                address:'西湖区湖底公园',
                birthday:'1992-12-30',
                time:'09:00'
            }
        ]
        data.map((item,index)=>{
            item.key=index;
        })
        this.setState({
            dataSource:data
        })
        this.request();
    }
    //动态获取MOCK数据
    // request=()=>{
    //     let baseUrl='https://www.easy-mock.com/mock/5b9db849cea0cb6b8af5de2b/mocks'
    //       axios.get(baseUrl+'/tatle/list')
    //       .then(res=>{ 
    //          if(res.status=='200' && res.data.code==0){
    //             this.setState({
    //                 dataSource2:res.data.result.list
    //             })
    //          }
              
    //       })
    // }
    request=()=>{
        let _this=this;
        axios.ajax({
            url:'/tatle/list',
            data:{
                params:{
                    page:this.params.page
                },
                // isShowLoading:false
            }

        }).then(res=>{
            if(res.code===0){
                res.result.list.map((item,index)=>{
                    item.key=index;
                })
                this.setState({
                     dataSource2:res.result.list,
                     selectedRowKeys:[],
                        selectedRows:null,
                        pagination:Util.pagination(res,(current)=>{
                            _this.params.page=current; 
                            this.request();
                        })
                      })
            }
        })
    }
    onRowClick=(record,index)=>{
        let selectKey=[index];
        Modal.info({
            title:'信息',
            content:`用户名:${record.userName}`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    }
   //多选执行删除动作
   handleDelet=(()=>{
       let rows=this.state.selectedRows;
       let ids=[];
       rows.map((item)=>{
           ids.push(item.id)
       })
       Modal.confirm({
           title:'删除提示',
           content:`你确定要删除这些数据么？${ids.join(',')}`,
           onOk:()=>{
               message.success('删除成功');
               this.request();
           }
       })
   })
    render() {
        const columns=[
            {
                title:'id',
                dataIndex:'id',
            },
            {
                title:'用户名',
                dataIndex:'userName',
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                      return sex===1?'男':'女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config={
                        '1':'创业者',
                        '2':'风华浪子',
                        '3':'职业码农',
                        '4':'北大才子',
                        '5':'职业大神'
                    }
                    return config[state];
              }
            },
            {
                title:'爱好',
                dataIndex:'interest',
                render(interest){
                    let config={
                        '1':'慢跑',
                        '2':'爬山',
                        '3':'游泳',
                        '4':'打篮球',
                        '5':'踢足球',
                        '6':'打台球',
                        '7':'桌球',
                        '8':'麦霸'
                    }
                    return config[interest];
              }
            },
            {
                title:'地址',
                dataIndex:'address',
            },
            {
                title:'生日',
                dataIndex:'birthday',
            },
            {
                title:'早起时间',
                dataIndex:'time', 
            }
        ]
        const {selectedRowKeys}=this.state;
        const rowSelection={
            type:'radio',
            selectedRowKeys

        }
        const rowCheckSelection={
            type:"checkbox",
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                // let ids=[]
                //     selectedRows.map((item)=>{
                //         ids.push(item.id)
                //     })
                    this.setState({
                        selectedRowKeys,
                        selectedRows
                    })
            }
        }
        return (
            <div>
                <Card title='基础表格'>
                      <Table 
                      bordered
                      dataSource={this.state.dataSource} 
                      columns={columns} 
                      pagination={false}//分页
                      />
                </Card>
                <Card title='动态数据渲染表格-Mock' style={{margin:'10px 0'}}>
                      <Table 
                      bordered
                      dataSource={this.state.dataSource2} 
                      columns={columns} 
                      pagination={false}//分页
                      />
                </Card>
                <Card title='Mock-单选' style={{margin:'10px 0'}}>
                      <Table 
                      bordered
                      rowSelection={rowSelection}
                      onRow={(record,index) => {
                        return {
                          onClick: () => {
                              this.onRowClick(record,index);
                          },       // 点击行
                     
                        };
                      }}
                      dataSource={this.state.dataSource2} 
                      columns={columns} 
                      pagination={false}//分页
                      />
                </Card>
                <Card title='Mock-复选' style={{margin:'10px 0'}}>
                        <div style={{marginBottom:10}}>
                            <Button onClick={this.handleDelet}>删除</Button>
                        </div>
                      <Table 
                      bordered
                      rowSelection={rowCheckSelection}
                      dataSource={this.state.dataSource2} 
                      columns={columns} 
                      pagination={false}//分页
                      />
                </Card>
                <Card title='Mock-表格分页' >
                      <Table 
                      bordered                      
                      dataSource={this.state.dataSource2} 
                      columns={columns} 
                      pagination={this.state.pagination}//分页
                      />
                </Card>
            </div>
        )
    }
}
