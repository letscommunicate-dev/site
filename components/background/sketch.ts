import p5 from "p5";
import Particle from "./particle";

export default function sketch(p: p5) {
    const particles: Particle[] = [];
    const numParticles = window.innerWidth * 0.15;

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.pixelDensity(p.displayDensity());

        for (var i = 0; i < numParticles; i++) {
            const particle = new Particle(p, particles);
            particles.push(particle);
        }
    }

    p.draw = () => {
        p.clear(0, 0, 0, 0);

        var particle: Particle;
        for (var i = particles.length - 1; i >= 0; i--) {
            particle = particles[i];
            particle.run();
        }
    }

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight)
    }
}