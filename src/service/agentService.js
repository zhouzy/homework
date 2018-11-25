/**
 * Created by zhouzhongyu on 2018/11/25.
 */

import api from "./api.js";

let getAgents = function(){
    return api.get("/agents");
};

let getAgent = function(id){
    return api.get(`/agents/${id}`);
};

let updateAgent = function(id, putData){
    return api.put(`/agents/${id}`,qs.stringify(putData));
};

export default {
    getAgent,
    getAgents,
    updateAgent
}
