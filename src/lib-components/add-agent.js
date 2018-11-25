/**
 * Created by zhouzhongyu on 2018/11/25.
 */

import AgentAddPopoverC from "./agent-add-popover.vue";

let AddAgent = {};

let getXY = function(target){
    let rect = target.getBoundingClientRect();
    let w = target.clientWidth;
    let h = target.clientHeight;

    let x = rect.x + Math.floor(w/2);
    let y = rect.y + h;

    return [x,y];
};

AddAgent.install = function(Vue, option){
    let Comp = Vue.extend(AgentAddPopoverC);
    let $comp;

    Vue.prototype.$addAgent = function(target,id){
        if($comp){
            $comp.$props.visible = false;
            $comp = undefined;
        }
        let $el = document.createElement("div");
        $comp = new Comp({
            propsData: {
                id: id,
                visible: true
            }
        }).$mount($el);

        target.appendChild($comp.$el);
    }
};

export default AddAgent;