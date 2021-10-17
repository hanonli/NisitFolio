import React, { Component } from 'react';

class MyResumeportfoliolayoutP extends React.Component{
    render(){
        const child = this.props.children? this.props.children: [];
        console.log(child);
        console.log(child.length);
        let frameclass;
        let childlength = child.length? child.length: 1;
        if(childlength > 3){
            frameclass = "portfoliolayoutP_Frame";
        }
        else{
            frameclass = "portfoliolayoutP_Framesmall";
        }
        let content = [];
        for(var i=0; i<childlength; i++){
            content.push(<div class="portfoliolayoutP_child"><div class="portfoliolayoutP_child_element"><div class="portfoliolayoutP_child_innerbox">{child[i]}</div></div></div>);
        }
        let result;
        if(childlength === 0){
            result = (<div></div>);
        }
        else if(childlength === 1){
            result = (
                <div class={frameclass}>
                    <div class="portfoliolayoutP"><div class="portfoliolayoutP_child"><div class="portfoliolayoutP_child_element"><div class="portfoliolayoutP_child_innerbox">{child}</div></div></div></div>
                </div>
            );
        }
        else{
            result = (
                <div className="Gallery">
                    <div>
                        {content}
                    </div>
                </div>
            );
        }
        return (
            <div class="portfoliolayout_p">
                {result}
            </div>
        );
    }
}
export default MyResumeportfoliolayoutP;