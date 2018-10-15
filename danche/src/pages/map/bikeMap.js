import React from 'react';
import axios from './../../axios';
import BeasForm from './../../components/BeasForm'
import {Card,Form} from 'antd';
// import { width } from 'window-size';

export default class Order extends React.Component{
    state = {}
    map = ''
    // 表单封装，通过构建表单对象，在BaseForm中进行统一渲染
    formList = [
        {
            type: '城市'
        }, {
            type: '时间查询'
        }, {
            type: 'SELECT',
            label: '订单状态',
            field: 'order_status',
            placeholder: '全部',
            initialValue: '0',
            width: 150,
            list: [{id: '0', name: '全部'}, {id: '1', name: '进行中'}, {id: '3', name: '行程结束'}]
        }
    ]
    
    // 列表请求
    requestList = ()=>{
        axios.ajax({
            url:'/map/bike/list',
            data:{
                params:this.params
            }
        }).then((res)=>{
            if(res){
                this.setState({
                    total_count:res.result.total_count
                })
                this.renderMap(res.result);
            }
        })
    }
    // 查询表单
    handleFilterSubmit = (filterParams) => {
        this.params = filterParams;
        this.requestList();
    };
    componentWillMount(){
        this.requestList();
    }
    // 渲染地图
    renderMap = (res) => {
        let list = res.route_list;
        this.map = new window.BMap.Map("container", {enableMapClick: false});
        let gps1 = list[0].split(',');
        let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
        let gps2 = list[list.length - 1].split(',');
        let endPoint = new window.BMap.Point(gps2[0], gps2[1]);
        this.map.centerAndZoom(endPoint, 11);
        // map.clearOverlays();

        let startPointIcon = new window.BMap.Icon("/assets/start_point.png", new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor:new window.BMap.Size(18,42)
            
        });
        let  bikeMarkerStart = new window.BMap.Marker(startPoint, { icon: startPointIcon });
        this.map.addOverlay(bikeMarkerStart);

        let endPointIcon = new window.BMap.Icon("/assets/end_point.png", new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor:new window.BMap.Size(18,42)
            
        });
        let  bikeMarkerEnd = new window.BMap.Marker(endPoint, { icon: endPointIcon });
        this.map.addOverlay(bikeMarkerEnd);

        //绘制车辆行驶路线  
        let routeList=[];
        list.forEach((item)=>{
            let p=item.split(",");
            routeList.push(new window.BMap.Point(p[0],p[1]))
        })

        let polyLine = new window.BMap.Polyline(routeList,{
            strokeColor:'#f00',
            strokeWeight:2,
            strokeOpacity:1
        })
        this.map.addOverlay(polyLine);   
          //绘制服务区
          let serviceList = res.service_list;
          let servicePointist = [];
          serviceList.forEach((item) => {
              let point = new window.BMap.Point(item.lon, item.lat);
              servicePointist.push(point);
          })
          let  polyServiceLine = new window.BMap.Polyline(servicePointist, {
            strokeColor: "#f00",
            strokeWeight: 2,
            strokeOpacity: 1
        });
        this.map.addOverlay(polyServiceLine); 

        //添加地图中的自行车图标
        let bikeList=res.bike_list;
        let bikeIcon = new window.BMap.Icon("/assets/bike.jpg", new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        });
        bikeList.forEach((item) => {
            let p = item.split(",");
            let point = new window.BMap.Point(p[0], p[1]);
            var bikeMarker = new window.BMap.Marker(point, { icon: bikeIcon });
            this.map.addOverlay(bikeMarker);
        })
        
    };
   
  
     
    
    render(){
        return (
            <div>
               <Card>
                    <BeasForm formList={this.formList} filterSubmit={this.handleFilterSubmit}/>
                </Card>
                <Card style={{marginTop:10}}>
                    <div>共{this.state.total_count}辆车</div>
                    <div id="container" style={{height:500}}></div>
                </Card>
            </div>
        );
    }
}
// export default class BikeMap extends React.Component{
//      state={};
//      map="";
//     formList=[
//         {
//             type:'城市'
//         },
//         {
//             type:'时间查询'
//         },
//         {
//             type:'SELECT',
//             label:'订单详情',
//             field:'order_status',
//             placeholder:'全部',
//             initialValue:'0',
//             list:[{id:'0',name:'全部'},
//             {id:'1',name:'进行中'},
//             {id:'2',name:'行程结束'} ],
//             width:80
//         }
//     ]
    
   
//     handlefilterSubmit=(filterParams)=>{
//         this.params=filterParams;
//         this.requestList();            
//     }
//     requestList=()=>{
//         axios.ajax({
//             url:'/map/bike/list',
//             data:{
//                 params:this.params
//             }
//         }).then((res)=>{
//             if(res.code==0){
//                 this.setState({
//                     total_count:res.result.total_count
//                 })
//                 this.renderMap(res)
//             }
//         })
//     }
//    componentDidMount(){
//    this.requestList();
//    }
//     renderMap=(res)=>{
//          let list = res.result.route_list;
         
//          this.map=new window.BMap.Map('container');
//          let gps1=list[0].split(',');
//          let startPoint=new window.BMap.Point(gps1[0],gps1[1]);
//          let gps2=list[list.length-1].split(',');
//          let endPoint=new window.BMap.Point(gps2[0],gps2[1]);
//          this.map.centerAndZoom(endPoint,11);
//     }
//      render(){
//          return (
//              <div>
//                  <Card>
//                        <BeasForm formList={this.formList} 
//                        filterSubmit={this.handleFilterSubmit} />
//                  </Card>
//                  <Card style={{marginTop:10}}>
//                      <div >共{this.state.total_count}辆车</div>
//                      <div className="container" style={{height:500}}></div>
//                  </Card>
//              </div>
//          )
//      }
// }