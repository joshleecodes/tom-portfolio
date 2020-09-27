import React from 'react';

export default class UpArrowIcon extends React.Component {

    render(){
        return(
            <svg
                width={this.props.width}
                height={this.props.height}
                viewBox={this.props.viewBox}
                fill={this.props.color}
                xmlns="http://www.w3.org/2000/svg"
                className="svg-up-arrow"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <path xmlns="http://www.w3.org/2000/svg" style="" d="M487.411,355.047L252.744,120.38c-4.165-4.164-10.917-4.164-15.083,0L2.994,355.047  c-4.093,4.237-3.976,10.99,0.262,15.083c4.134,3.993,10.687,3.993,14.821,0l227.115-227.115l227.115,227.136  c4.237,4.093,10.99,3.976,15.083-0.261c3.993-4.134,3.993-10.688,0-14.821L487.411,355.047z" fill="#ffffff" data-original="#ffc107"/>
                    <path xmlns="http://www.w3.org/2000/svg" d="M479.859,373.266c-2.831,0.005-5.548-1.115-7.552-3.115L245.192,143.015L18.077,370.151  c-4.237,4.093-10.99,3.976-15.083-0.262c-3.993-4.134-3.993-10.687,0-14.821l234.667-234.667c4.165-4.164,10.917-4.164,15.083,0  l234.667,234.667c4.159,4.172,4.148,10.926-0.024,15.085C485.388,372.146,482.681,373.265,479.859,373.266z" fill="#ffffff" data-original="#000000" style="" class=""/> 
                </g>
            </svg>
        )
    }
}