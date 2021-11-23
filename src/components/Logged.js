import React from 'react'

const Logged = ({log, setLog}) => {
    return (
        <div style={{marginTop:'300px'}}>
            BIENVENUE
            <button
            onClick={()=>setLog(!log)}
            >
            Déconnecter
            </button>
        </div>
    )
}

export default Logged
