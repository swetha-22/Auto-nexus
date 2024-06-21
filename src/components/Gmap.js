import React from 'react'
// import Treasure from './dashboardGifs/treasure-removebg-preview.png'
import Pin from './dashboardGifs/pin-point.gif'
import car from './dashboardGifs/ezgif.com-rotate.gif'

const Gmap = (props) => {

    let { source, dest, link } = props;

    return (
        <>
            <div className="card">
                <h5 className="card-header" style={{backgroundColor:"rgb(45, 44, 62)" , color:"white"}}>
                    {/* Distance : <b>{distance}</b> */}
                    <a href={link} target='_blank' className="btn btn-success" style={{position:"relative" , left:"870px"}}>Navigate to G-Maps</a>
                    <img src={Pin} alt="" style={{width:"30px" , position:"relative" , left:"900px"}} />
                </h5>
                <div className="card-body d-flex" style={{backgroundColor:"rgb(235, 237, 237)"}}>
                    <div className="flex-col">
                        <h4 className="card-title">Source</h4>
                        <p className="card-text">{source}</p>
                    </div>
                    <img src={car} alt="" style={{margin:"-58px 5px -58px 0px"}} />
                    <div className="flex-col" style={{marginRight:"-30px"}}>
                        <h4 className="card-title">Destination</h4>
                        <p className="card-text ">{dest.split('-')[0]}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gmap
