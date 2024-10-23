// Animation.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
//import Stats from 'stats.js';

const Animation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    //let stats: Stats;
    let mouseX = 0, mouseY = 0;
    let windowHalfX: number, windowHalfY: number;
    const materials: THREE.PointsMaterial[] = []; // Moved to the top
    const parameters: Array<[[number, number, number], number]> = [[[1, 1, 1], 2]]; // Explicitly typed

    useEffect(() => {
        init();
        animate();

        // Cleanup function to remove event listeners and renderer
        return () => {
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            document.removeEventListener('touchstart', onDocumentTouchStart);
            document.removeEventListener('touchmove', onDocumentTouchMove);
            containerRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    const init = () => {
        const HEIGHT = window.innerHeight;
        const WIDTH = window.innerWidth;

        windowHalfX = WIDTH / 2;
        windowHalfY = HEIGHT / 2;

        // Camera and scene setup
        camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 3000);
        camera.position.z = 1000;
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.0007);

        // Geometry setup
        const geometry = new THREE.BufferGeometry();
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3); // 3 coordinates for each vertex

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = Math.random() * 2000 - 1000;     // x
            positions[i * 3 + 1] = Math.random() * 2000 - 1000; // y
            positions[i * 3 + 2] = Math.random() * 2000 - 1000; // z
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        parameters.forEach((param) => {
            //const color = "#ffffff";
            const size = param[1];

            materials.push(new THREE.PointsMaterial({ size }));

            const particles = new THREE.Points(geometry, materials[materials.length - 1]);
            particles.rotation.x = Math.random() * 6;
            particles.rotation.y = Math.random() * 6;
            particles.rotation.z = Math.random() * 6;
            scene.add(particles);
        });

        // Renderer setup
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(WIDTH, HEIGHT);
        containerRef.current?.appendChild(renderer.domElement);

        // Stats setup
        // stats = new Stats();
        // stats.showPanel(0);
        // stats.dom.style.position = 'absolute';
        // stats.dom.style.top = '0px';
        // stats.dom.style.right = '0px';
        // containerRef.current?.appendChild(stats.dom);

        // Event listeners
        window.addEventListener('resize', onWindowResize);
        document.addEventListener('mousemove', onDocumentMouseMove);
        document.addEventListener('touchstart', onDocumentTouchStart);
        document.addEventListener('touchmove', onDocumentTouchMove);
    };

    const animate = () => {
        requestAnimationFrame(animate);
        render();
        //stats.update();
    };

    const render = () => {
        const time = Date.now() * 0.00005;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        scene.children.forEach((object, i) => {
            if (object instanceof THREE.Points) {
                object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
            }
        });

        materials.forEach((material, i) => {
          if (parameters[i]) { 
            const color = parameters[i][0]; // Access color safely
            const h = (360 * (color[0] + time) % 360) / 360;
            material.color.setHSL(h, color[1], color[2]);
        }
        });

        renderer.render(scene, camera);
    };

    const onDocumentMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX - windowHalfX;
        mouseY = e.clientY - windowHalfY;
    };

    const onDocumentTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) {
            e.preventDefault();
            mouseX = e.touches[0].pageX - windowHalfX;
            mouseY = e.touches[0].pageY - windowHalfY;
        }
    };

    const onDocumentTouchMove = (e: TouchEvent) => {
        if (e.touches.length === 1) {
            e.preventDefault();
            mouseX = e.touches[0].pageX - windowHalfX;
            mouseY = e.touches[0].pageY - windowHalfY;
        }
    };

    const onWindowResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        windowHalfX = width / 2;
        windowHalfY = height / 2;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    };

    return <div ref={containerRef} style={{ margin: 0, overflow: 'hidden' }} 
    className='fixed -z-1 top-0 bg-blue-500'
    />;
};

export default Animation;
