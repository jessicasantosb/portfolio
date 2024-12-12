"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const color = {
    background: 0xf0f0f0,
    cube: "#a855f7",
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setClearColor(color.background);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color.cube),
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 2;
    camera.fov = 40;
    camera.updateProjectionMatrix();

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const render = (time: number) => {
      time *= 0.001;
      resize();
      cube.rotation.x = time;
      cube.rotation.y = time * 0.1;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);

    render(0);

    return () => {
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [color.background, color.cube]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 h-full"></canvas>
    </div>
  );
};
