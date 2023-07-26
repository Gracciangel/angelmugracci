
import '../styles/style.css';
import Particles from 'react-tsparticles';
import particlesApp from '../helpers/particlesApp';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { Slider } from './Slider';
import { NavBarBoostrap } from './NavBarBoostrap'



export const App = () => {

    const initParticlesApp = useCallback((engine) => {
        loadFull(engine);
    }, []);


    return (
        <>
            <Particles options={particlesApp} init={initParticlesApp} />
            <NavBarBoostrap />
            <div className="container">

                <Slider />


            </div>
        </>
    )
}
