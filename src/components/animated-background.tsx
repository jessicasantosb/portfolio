"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Create WebGLRenderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setClearColor(0xf0f0f0); // Set background color
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Cube Geometry and Material with line color set to #a855f7
    const geometry = new THREE.BoxGeometry(1, 1, 1); // This automatically has an index buffer
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#a855f7"), // Set line color to #a855f7 (violet)
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Camera settings for zooming in
    camera.position.z = 2; // Closer to the object for zoomed-in effect
    camera.fov = 40; // Lower FOV for zooming in (larger value for zooming out)
    camera.updateProjectionMatrix(); // Update the projection matrix for changes to the camera

    // Resize function
    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    // Animation loop function
    const render = (time: number) => {
      time *= 0.001; // Convert time to seconds
      resize();
      cube.rotation.x = time;
      cube.rotation.y = time * 0.1; // Rotation speed
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    // Add event listener for window resizing
    window.addEventListener("resize", resize);

    // Start the render loop
    render(0);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 h-full"
      ></canvas>
    </div>
  );
};
