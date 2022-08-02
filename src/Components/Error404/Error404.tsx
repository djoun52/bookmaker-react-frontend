import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Error404.css'
import Btn from '../btn/btn'
export default function Error404() {

    const navigate = useNavigate()
    const goHome = () => {
        navigate("/")
    }
    return (
        <div className='center error404 '>

                <h1>error 404 Page not found</h1>
                <div className="">
                <Btn text="Retourner à l/'accueil" fct={goHome} />

                    <button className="btn404" onClick={goHome}> Retourner à l'accueil</button>
                </div>

        </div>
    )
}
