import JsonP from 'jsonp';
// import { resolve,reject } from 'url';
import axios from 'axios';
import Utils from './../utils/util';
import { Modal } from 'antd'
export default class Axios {
    static requestList(_this,url,params,isMock){
            var data={
                params:params,
                isMock
            }
            this.ajax({url,data}).then((data)=>{
                if(data && data.result){
                    let list = data.result.item_list.map((item, index) => {
                        item.key = index;
                        return item;
                    });
                    _this.setState({
                        list,
                        pagination: Utils.pagination(data, (current) => {
        
                            _this.params.page = current;
                            
                            _this.requestList();
                        })
                    })
                }
            })
    }
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                // debugger;
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.message)
                }
            })
        })
    }
    static ajax(options) {
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseApi=''
        if(options.isMock){
             baseApi = 'https://www.easy-mock.com/mock/5b9db849cea0cb6b8af5de2b/mocks'
        }else{
             baseApi = 'https://www.easy-mock.com/mock/5b9db849cea0cb6b8af5de2b/mocks'
        }
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then(response => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status === 200) {
                    const res = response.data;
                    if (res.code == 0) {
                        resolve(res)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.msg
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        })
    }
}
