import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error){
        return{hasError: true}
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }
  render() {
    if(this.state.hasError){
        return(
            <div>Something is wrong.</div>
        );
    }
    
    return this.props.children;   
        
    
  }
}
