import React from 'react';

export default class EmailIcon extends React.Component {

    render(){
        return(
            <svg
                width={this.props.width}
                height={this.props.height}
                viewBox={this.props.viewBox}
                fill={this.props.color}
                xmlns="http://www.w3.org/2000/svg"
                className="svg-email icon__wrapper"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                

                <g>
                    <g>
                        <path 
                            d="M437.019,74.981C388.667,26.628,324.379,0,256,0S123.333,26.628,74.982,74.981C26.628,123.333,0,187.621,0,256
                            s26.628,132.667,74.982,181.019C123.333,485.372,187.621,512,256,512s132.667-26.628,181.019-74.981S512,324.379,512,256
                            S485.372,123.333,437.019,74.981z M256,16.168c53.148,0,102.304,17.389,142.103,46.759L256,170.411L113.897,62.927
                            C153.696,33.557,202.852,16.168,256,16.168z M64.674,400.443C34.246,360.238,16.168,310.193,16.168,256
                            c0-49.856,15.297-96.202,41.436-134.606l7.069,5.547V400.443z M350.074,182.692c-3.815,2.993-4.154,8.648-0.725,12.077
                            c2.892,2.892,7.489,3.169,10.707,0.643l71.102-55.787v280.013c-43.8,46.854-106.112,76.193-175.158,76.193
                            c-69.046,0-131.358-29.339-175.158-76.193V139.625l170.167,133.513c1.465,1.149,3.227,1.725,4.991,1.725
                            c1.763,0,3.526-0.575,4.991-1.725l67.859-53.242c3.815-2.993,4.155-8.648,0.727-12.077c-2.892-2.892-7.489-3.169-10.707-0.643
                            L256,256.503L67.149,108.331c10.016-12.781,21.306-24.513,33.664-35.027l150.31,113.691c2.884,2.182,6.869,2.182,9.754,0
                            L411.188,73.303c12.358,10.514,23.648,22.247,33.664,35.027L350.074,182.692z M447.326,126.94l7.069-5.547
                            c26.139,38.404,41.436,84.75,41.436,134.606c0,54.193-18.077,104.238-48.505,144.443V126.94z"/>
                    </g>
                </g>
            </svg>
        )
    }
}