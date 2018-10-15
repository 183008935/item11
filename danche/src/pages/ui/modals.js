import React, { Component } from 'react'
import {Card,Button,Modal} from 'antd';
import './ui.less';
export default class Modals extends Component {
   state={
    showModall:false,
    showModal2:false,
    showModal3:false,
    showModal4:false
   }

    handleOpen=(type)=>{
        this.setState({
            [type]:true
        })
    }
    handleOk = (type) => {
        
        this.setState({
            [type]:false,
        });
      }
      handleFirm=(type)=>{
          Modal[type]({
              title:'确认？',
              content:'你确定你学会react了？',
              onOk(){   
              },
              onCancel(){      
              } 
          })
      }
  render() {
    return (
      <div>
          <Card title='基础模态框' className='card-wrap'>
              <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open Modal</Button>
              <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
              <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
              <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
          </Card>
          <Card title='信息确认框' className='card-wrap'>
              <Button type="primary" onClick={()=>this.handleFirm('confirm')}>Confirm</Button>
              <Button type="primary" onClick={()=>this.handleFirm('info')}>Info</Button>
              <Button type="primary" onClick={()=>this.handleFirm('success')}>Success</Button>
              <Button type="primary" onClick={()=>this.handleFirm('warning')}>Warning</Button>
          </Card>
          <Modal
          title="Basic Modal"
          visible={this.state.showModal1}
          onOk={()=>this.handleOk('showModal1')}
          onCancel={()=>{
              this.setState({
                showModal1:false
              })
          }}
        >
          <p>这是田家豪瞎写的，你满意么？？？？？Open Modal</p>
        </Modal>
        <Modal
          title="Basic Modal"
          visible={this.state.showModal2}
          onOk={()=>this.handleOk('showModal2')}
          okText='好的'
          cancelText="算了"
          onCancel={()=>{
              this.setState({
                showModal2:false
              })
          }}
        >
          <p>这也是田家豪瞎写的！！okText='好的'
          cancelText="算了"！！！！！！！自定义页脚</p>
        </Modal>
        <Modal
          title="Basic Modal"
          style={{top:20}}
          visible={this.state.showModal3}
          onOk={()=>this.handleOk('showModal3')}
          onCancel={()=>{
              this.setState({
                showModal3:false
              })
          }}
        >
          <p>这是田家豪瞎写的，你满意么？？？？？顶部距离20px弹框</p>
        </Modal>
        <Modal
          title="Basic Modal"
          wrapClassName="vertical-center-modal"
          visible={this.state.showModal4}
          onOk={()=>this.handleOk('showModal4')}
          onCancel={()=>{
              this.setState({
                showModal4:false
              })
          }}
        >
          <p>这是田家豪瞎写的，你满意么？？？？？水平垂直居中 相当难受</p>
        </Modal>
      </div>
    )
  }
}
