

import { fromJS } from  'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    tuijianList: []

});

export default (state = defaultState, action) => {
   
    switch(action.type){
       default:
       return state;
    }
};