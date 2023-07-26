


import particlesConfig from '../helpers/particles'
import '../styles/style.css'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { Welcome } from './Welcome'

export const Portaid = () => {

    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);

    return (

        <>
            <Welcome />
            <Particles options={particlesConfig} init={particlesInit} />
            <div className="container-fluid">

                <Link to="/home">
                    <button className="start">VER PROYECTOS</button>
                </Link>
            </div>
        </>

    );
}
