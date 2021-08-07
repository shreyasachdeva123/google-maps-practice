import React from "react";


const Marker = ({ text }) => {
    return (
        <div className="marker" style={{
            color: 'white',
            background: 'blue',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)'
        }} >
            {text}
        </div>
    )
}

export default Marker;