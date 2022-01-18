import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState ({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    {/* <Fade onReveal = {() => this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade> */}

                        <div className="discount_description">
                    
                            <Fade delay={500}>
                
                            </Fade>

                            <MyButton text="Click Here To Learn More" bck="#ffa800" color="#ffffff" link="https://www.techtalentpipeline.nyc/" />

                        </div>

                </div>
            </div>
        );
    }
}

export default Discount;