import React from 'react';
import ReactDOM from 'react-dom';


class TimelineBlock extends React.Component {
    render() {
        const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const seq = this.props.seq
        let position_class;
        if(seq%2 === 0){
            position_class = "left-row";
        }
        else{
            position_class = "right-row";
        }
        console.log(this.props.data);
        return (
            <div class="timeline-block">
                <div class="timeline-dot-pointer" style={linestyle}></div>
                <div class={position_class}>
                    {this.props.data}                        
                </div>
            </div>
            
        );
        
    }
}

class Myresumetimeline extends React.Component {
    
    render() {
        const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        console.log("this is props data")
        const data = this.props.data? this.props.data: [];
        //console.log(data);
        let list = [];
        if(data.length > 0){
            list.push(<div class="resumetimeline-line" style={linestyle}></div>)
            for (var i = 0; i < data.length; i++) {
                list.push(<TimelineBlock colour={this.props.colour} data={data[i]} seq={i}></TimelineBlock>);
                console.log(data[i]);
            }
        }
        
        
        //console.log(list);
        return (
            
            <div class="resumetimeline">        
                {list}
            </div>
        );
            
    }
}

export default Myresumetimeline;