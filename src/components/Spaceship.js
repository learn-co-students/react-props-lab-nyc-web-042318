// Code The Spaceship Component Here

import React from 'react';

class Spaceship extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.defaultProps = {
    //         speed= 'slow';
    //     };
    // }
    static defaultProps = {
        // props: { speed: 'slow' },
        speed: "slow",
        hasRockets: false,
        colors: ['black', 'red']
     };



    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.speed}</p>
                <p>{this.props.hasRockets}</p>
                <p>{this.props.colors}</p>

            </div>
        )
    }


};


export default Spaceship;