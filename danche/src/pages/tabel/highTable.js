import React, { Component } from 'react'
import {Card,Table,Modal, message,Button,Pagination,Badge} from 'antd';
import axios from './../../axios/index';



export default class HighTable extends Component {
    state={};
    params={
        page:1
    }
    componentWillMount(){
        this.request();
        // const data=[
        //     {
        //         id:'0',
        //         userName:'田家豪',
        //         sex:'男',
        //         state:'1',
        //         interest:'1',
        //         address:'河北省邯郸市',
        //         birthday:'1992-12-30',
        //         time:'09:00'
        //     },
        //     {
        //         id:'1',
        //         userName:'吴彦祖',
        //         sex:'男',
        //         state:'1',
        //         interest:'2',
        //         address:'西湖区湖底公园1号',
        //         birthday:'1992-12-30',
        //         time:'09:00'
        //     },
        //     {
        //         id:'2',
        //         userName:'胡彦斌',
        //         sex:'男',
        //         state:'1',
        //         interest:'3',
        //         address:'西湖区湖底公园',
        //         birthday:'1992-12-30',
        //         time:'09:00'
        //     }
        // ]
        // data.map((item,index)=>{
        //     item.key=index;
        // })
        // this.setState({
        //     dataSource:data
        // })
        
    }
    request=()=>{
       
        axios.ajax({
            url:'/table/hig/list',
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
                     dataSource:res.result.list,
                     
                      })
            }
        })
    }
    handleChange=(pagination,filters,sorter)=>{
             this.setState({
                sortOrder: sorter.order
             })
    }
    //删除操作
    handleClick=(item)=>{
        let  id=item.id;
        Modal.confirm({
            title:'确认',
            content:'你确定要删除此数据么？',
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })

    }
    render() {
        const columns=[
            {
                title:'id',
                dataIndex:'id',
                width:80,
               
            },
            {
                title:'用户名',
                dataIndex:'userName',
                width:80, 
               
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                      return sex===1?'男':'女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                width:120,
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
                width:80,
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
                width:120
            },
            {
                title:'生日',
                dataIndex:'birthday',
                width:80
            },
            {
                title:'早起时间',
                dataIndex:'time', 
                width:80
            }
        ]
        columns.map((item,index)=>{
                item.key=index;
            })
        const columns2=[
            {
                title:'id',
                dataIndex:'id',
                width:80,
                fixed:'left'
            },
            {
                title:'用户名',
                dataIndex:'userName',
                width:80,
                 fixed:'left'
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                      return sex===1?'男':'女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                width:120,
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
                width:80,
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
                title:'爱好',
                dataIndex:'interest',
                width:80,
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
                title:'爱好',
                dataIndex:'interest',
                width:80,
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
                title:'爱好',
                dataIndex:'interest',
                width:80,
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
                title:'爱好',
                dataIndex:'interest',
                width:80,
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
                title:'爱好',
                dataIndex:'interest',
                width:80,
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
            }, {
                title:'爱好',
                dataIndex:'interest',
                width:80,
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
            }, {
                title:'爱好',
                dataIndex:'interest',
                width:80,
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
                width:120
            },
            {
                title:'生日',
                dataIndex:'birthday',
                width:80,
                fixed:'right'
            },
            {
                title:'早起时间',
                dataIndex:'time', 
                width:80,
                fixed:'right'
            }
        ]
        columns2.map((item,index)=>{
            item.key=index;
        })
        const columns3=[
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
                title:'年龄',
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age -b.age;
                },
                sortOrder:this.state.sortOrder

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
                        '1':<Badge status="success"  text="慢跑"/>,
                        '2':<Badge status="error"  text='爬山'/>,
                        '3':<Badge status="default"  text='游泳'/>,
                        '4':<Badge status="processing"  text='打篮球'/>,
                        '5':<Badge status="warning"  text='踢足球'/>,
                        '6':<Badge status="success"  text='打台球'/>,
                        '7':<Badge status="default"  text='桌球'/>,
                        '8':<Badge status="processing"  text='麦霸'/>
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
        columns3.map((item,index)=>{
            item.key=index;
        })
        const columns4=[
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
                title:'年龄',
                dataIndex:'age',
            

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
                        '1':<Badge status="success"  text="慢跑"/>,
                        '2':<Badge status="error"  text='爬山'/>,
                        '3':<Badge status="default"  text='游泳'/>,
                        '4':<Badge status="processing"  text='打篮球'/>,
                        '5':<Badge status="warning"  text='踢足球'/>,
                        '6':<Badge status="success"  text='打台球'/>,
                        '7':<Badge status="default"  text='桌球'/>,
                        '8':<Badge status="processing"  text='麦霸'/>
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
                title:'操作',
                render:(text,item)=>{
                    return <Button size="small" onClick={(item)=>{this.handleClick(item)}}>删除</Button>
                }
              
            }
        ]
        columns4.map((item,index)=>{
            item.key=index;
        })
        return (
            <div>
                 <Card title='头部固定'>
                      <Table 
                      bordered
                      dataSource={this.state.dataSource} 
                      columns={columns} 
                      pagination={false}//分页
                      scroll={{y:240}}
                      />
                </Card>
                <Card title='左侧固定' style={{margin:'10px 0'}}>
                      <Table 
                      bordered
                      dataSource={this.state.dataSource} 
                      columns={columns2} 
                      pagination={false}//分页
                      scroll={{x:1280}} 
                      />
                </Card>
                <Card title='表格排序' style={{margin:'10px 0'}}>
                      <Table 
                      bordered
                      dataSource={this.state.dataSource} 
                      columns={columns3} 
                      pagination={false}//分页
                      onChange={this.handleChange}
                      
                      />
                </Card>
                <Card title='操作按钮' style={{margin:'10px 0'}}>
                      <Table 
                      bordered
                      dataSource={this.state.dataSource} 
                      columns={columns4} 
                      pagination={false}//分页
                      
                      />
                </Card>
            </div>
        )
    }
}
