/**
 * Created by zhouzhongyu on 2018/11/25.
 */

import AgentAddPopoverC from "./agent-add-popover.vue";

let AddAgent = {};

AddAgent.install = function(Vue, option){
    let Comp = Vue.extend(AgentAddPopoverC);
    let $comp;

    Vue.prototype.$addAgent = function(target,id){
        let rect = target.getBoundingClientRect();
        let w = target.clientWidth;
        let h = target.clientHeight;

        let x = rect.x + Math.floor(w/2);
        let y = rect.y + h;

        if(!$comp){
            let $el = document.createElement("div");

            $comp = new Comp({
                propsData: {
                    x: rect.left,
                    y: rect.top,
                    id: id,

                }
            }).$mount($el);
            document.body.appendChild($comp.$el);
            $comp.open();
        }
        else{
            $comp.$props.x = x;
            $comp.$props.y = y;
            $comp.open();
        }
    }
};

export default AddAgent;