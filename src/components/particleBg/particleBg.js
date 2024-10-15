import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Adjust if using a different loader

const ParticleBg = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            {init && <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#140836", // Adjust background color as needed
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble",
                            },
                            onClick: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 500,
                                size: 1,
                                duration: 0.5,
                                opacity: 0.2,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                                size: 1,
                                duration: 0.2,
                            },
                            push: {
                                quantity: 4,
                            },
                            remove: {
                                quantity: 2,
                            },
                        },
                    },
                    particles: {
                        number: {
                            value: 400,
                            density: {
                                enable: true,
                                area: 800,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                        },
                        size: {
                            value: { min: 1, max: 2 },
                            random: true,
                        },
                        links: {
                            enable: false,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                        },
                    },
                    detectRetina: true,
                }}
            />}
        </>
    );
};

export default ParticleBg;
