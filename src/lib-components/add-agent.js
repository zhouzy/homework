/**
 * Created by zhouzhongyu on 2018/11/25.
 */

import AgentAddPopoverC from "./agent-add-popover.vue";

let AddAgent = {};

AddAgent.install = function(Vue, option){
    let Comp = Vue.extend(AgentAddPopoverC);
    let $comp;

    Vue.prototype.$addAgent = function(target,agentData,cb){
        if($comp){
            $comp.$props.visible = false;
            $comp = undefined;
        }
        let $el = document.createElement("div");
        $comp = new Comp({
            propsData: {
                agentData: agentData,
                visible: true
            }
        }).$mount($el);
        $comp.$on("add-success", () => {
            cb && cb();
        });

        target.appendChild($comp.$el);
    }
};

export default AddAgent;