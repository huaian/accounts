import * as React from "react";//util
import * as ReactDOM from "react-dom";
import { Hello } from "./template/Hello";
//let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
//let search = {...defaults, food: "rich" };
export const renderReact = function(Comp,props,node){
  return ReactDOM.render(//渲染页面
    <Comp {...props}/>,
    node
  );
};
//Kai.hideLoading();//隐藏loading//
//export default renderReact;//暴露方法

export const test = () => {
  console.log('test')
}
