import React, { Component } from "react";

/*class MyresumeCertificateComponent extends React.Component{
    render(){
        
    }
} 

class MyresumeCertificate extends React.Component{
    render(){
        
    }
} */

React.createClass({ 
    getInitialState : function() {
       return { showMe : false };
    },
    onClick : function() {
       this.setState({ showMe : true} );
    },
    render : function() {
        if(this.state.showMe) { 
            return (<div> one div </div>);
        } else { 
            return (<a onClick={this.onClick}> press me </a>);
        } 
    }
})