import React, { Component } from 'react'
import { Card, Row, Col,Modal} from 'antd';
import './ui.less';
export default class Gallery extends Component {
    state={
        visible:false
    }
    handlClick=(imgSrc)=>{
           this.setState({
            visible:true,
            currImg:'/gallery/'+imgSrc
           })
    }
    render() {
        let imgs=[
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png']
        ]
        let imgList=imgs.map((list)=>list.map((item)=>
             <Card 
             style={{marginBottom:10}}
             cover={<img  src={'/gallery/'+item} onClick={()=>this.handlClick(item)}/>}>
                 <Card.Meta
                  title="农夫山泉-钟声"
                  description="github.com/183008935"
    />
             </Card>
    ))
        return (
            <div className="card-wrap">
               
                  <Row gutter={10}>
                     < Col md={4}>
                     {imgList[0]}
                     </Col>
                     < Col md={4}>
                  {imgList[1]}
                     </Col>
                     < Col md={4}>
                  {imgList[2]}
                     </Col>
                     < Col md={4}>
                  {imgList[3]}
                     </Col>
                     < Col md={4}>
                  {imgList[4]}
                     </Col>
                  </Row>
                  <Modal
                  width={380}
                  height={380}
                  visible={this.state.visible}
                  title="图片画廊--钟声"
                  onCancel={()=>{
                      this.setState({
                          visible:false
                      })
                  }}
                  footer={null}
                  >
                      {<img src={this.state.currImg}
                        style={{width:'100%'}}
                      alt=""/>}
                  </Modal>
            </div>
        )
    }
}
