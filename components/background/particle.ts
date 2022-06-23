import p5, { Vector } from 'p5';

export default class Particle {
    static COLOR = [176, 211, 242, 50];
    static STROKE_WEIGHT = 0.2;

    p: p5;
    particles: Particle[];
    position: Vector
    velocity: Vector
    acceleration: Vector

    constructor(p: p5, particles: Particle[]) {
        this.p = p;
        this.acceleration = this.p.createVector(0, 0.05);
        this.velocity = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5));
        this.position = p.createVector(p.random(this.p.width), p.random(this.p.height));
        this.particles = particles;
    }

    run() {
        this.update();
        this.display();
        this.intersects();
    };

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(-0.1);

        if (this.position.x < 0) this.position.x = this.p.width;
        if (this.position.x > this.p.width) this.position.x = 0;
        if (this.position.y < 0) this.position.y = this.p.height;
        if (this.position.y > this.p.height) this.position.y = 0;
    };

    // Method to work out collisions and line proximity
    intersects() {
        for (var i = 0; i < this.particles.length; i++) {
            var other = this.particles[i];
            if (other !== this) {
                var dir = Vector.sub(this.position, other.position);
                if (dir.mag() < 12) {
                    dir.setMag(0.1);
                    this.applyForce(dir);
                }

                if (dir.mag() < 100) {
                    this.p.stroke(Particle.COLOR[0], Particle.COLOR[1], Particle.COLOR[2], Particle.COLOR[3]);
                    this.p.strokeWeight(Particle.STROKE_WEIGHT);
                    this.p.line(this.position.x, this.position.y, other.position.x, other.position.y);
                }
            }
        }
    };

    applyForce(f: Vector) {
        this.acceleration.add(f);
    };

    display() {
        this.p.noStroke();
        this.p.fill(Particle.COLOR[0], Particle.COLOR[1], Particle.COLOR[2]);
        this.p.ellipse(this.position.x, this.position.y, 4, 4);

        var mPos = this.p.createVector(this.p.mouseX, this.p.mouseY);
        var dir = Vector.sub(this.position, mPos);

        if (dir.mag() < 160) {
            this.p.stroke(Particle.COLOR[0], Particle.COLOR[1], Particle.COLOR[2], Particle.COLOR[3]);
            this.p.strokeWeight(Particle.STROKE_WEIGHT);
            this.p.line(this.position.x, this.position.y, this.p.mouseX, this.p.mouseY);
        }
    };
};