import React from 'react'
import "../App.css"

export default function progresoCircular(props) {
    return (
        <div className="card">
            <div className="box">
                <div className="porcent">
                    <svg>
                        <circle cx={70} cy={70} r={70} />
                        <circle cx={70} cy={70} r={70} />
                    </svg>
                    <div className="number">
                        <h2>{props.porcent}<span>%</span></h2>
                    </div>
                    <h3 className="info">{props.text}</h3>
                </div>
            </div>
        </div>
    )
}
