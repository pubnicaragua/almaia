import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export const InteractiveRatingGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0, rotation: 0 });
  const targetPosRef = useRef({ x: 0, y: 0, rotation: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const autoMoveRef = useRef({ direction: 1, progress: 0 });

  const ratingImages = [
    '/muymal.svg',
    '/mal.svg',
    '/normal.svg',
    '/bien.svg',
    '/muybien.svg',
  ];

  const ratingAlts = [
    'Icono muy mal',
    'Icono mal',
    'Icono normal',
    'Icono bien',
    'Icono muy bien',
  ];

  const mouthImages = [
    '/mouth/vbad.svg',
    '/mouth/bad.svg',
    '/mouth/none.svg',
    '/mouth/good.svg',
    '/mouth/vgood.svg',
  ];

  useEffect(() => {
    // Detectar si es iOS
    const userAgent = window.navigator.userAgent;
    setIsIOS(
      /iPad|iPhone|iPod/.test(userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    );
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;

    if (!container || !cursor) return;

    const handleMouseEnter = () => {
      setIsHovering(true);
      autoMoveRef.current.progress = 0;
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      const rect = container.getBoundingClientRect();
      targetPosRef.current = {
        x: rect.width / 2 - 16,
        y: rect.height / 2 - 16,
        rotation: 0,
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      const rect = container.getBoundingClientRect();
      const xPos = e.clientX - rect.left;
      const yPos = e.clientY - rect.top;
      const relativeX = xPos / rect.width;
      const rotation = relativeX * 60 - 30;

      targetPosRef.current = {
        x: xPos - 16,
        y: yPos - 16,
        rotation,
      };

      const itemWidth = rect.width / 5;
      const newActiveItem = Math.min(Math.floor(xPos / itemWidth) + 1, 5);
      setActiveItem(newActiveItem);
    };

    const handleTouchStart = () => {
      setIsHovering(true);
      autoMoveRef.current.progress = 0;
    };

    const handleTouchEnd = () => {
      setIsHovering(false);
      const rect = container.getBoundingClientRect();
      targetPosRef.current = {
        x: rect.width / 2 - 16,
        y: rect.height / 2 - 16,
        rotation: 0,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isHovering) return;

      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const xPos = touch.clientX - rect.left;
      const yPos = touch.clientY - rect.top;
      const relativeX = xPos / rect.width;
      const rotation = relativeX * 60 - 30;

      targetPosRef.current = {
        x: xPos - 16,
        y: yPos - 16,
        rotation,
      };

      const itemWidth = rect.width / 5;
      const newActiveItem = Math.min(Math.floor(xPos / itemWidth) + 1, 5);
      setActiveItem(newActiveItem);
      const hoverIndex = Math.min(Math.floor(xPos / itemWidth), 4);
      setHoveredIndex(hoverIndex);
    };

    const animate = () => {
      if (!isHovering) {
        const rect = container.getBoundingClientRect();
        const width = rect.width - 32;
        const height = rect.height - 32;

        autoMoveRef.current.progress += 0.005 * autoMoveRef.current.direction;

        if (autoMoveRef.current.progress >= 1) {
          autoMoveRef.current.direction = -1;
        } else if (autoMoveRef.current.progress <= 0) {
          autoMoveRef.current.direction = 1;
        }

        const sineProgress = Math.sin(autoMoveRef.current.progress * Math.PI);

        targetPosRef.current = {
          x: width * autoMoveRef.current.progress,
          y:
            height / 2 +
            Math.sin(autoMoveRef.current.progress * Math.PI * 2) * 10,
          rotation: sineProgress * 30,
        };

        const itemWidth = rect.width / 5;
        const newActiveItem = Math.min(
          Math.floor(targetPosRef.current.x / itemWidth) + 1,
          5
        );
        setActiveItem(newActiveItem);
      }

      posRef.current.x += (targetPosRef.current.x - posRef.current.x) * 0.2;
      posRef.current.y += (targetPosRef.current.y - posRef.current.y) * 0.2;
      posRef.current.rotation +=
        (targetPosRef.current.rotation - posRef.current.rotation) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${posRef.current.x}px, ${posRef.current.y}px)
          rotate(${posRef.current.rotation}deg)
        `;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchmove', handleTouchMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovering]);

  useEffect(() => {
    if (hoveredIndex === null) return;
    const timeout = setTimeout(() => setHoveredIndex(null), 500);
    return () => clearTimeout(timeout);
  }, [hoveredIndex]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-4">
        <div
          ref={containerRef}
          className="grid grid-cols-5 max-w-sm relative cursor-none"
          style={{ height: '80px' }}
        >
          <div
            ref={cursorRef}
            className="absolute w-12 h-12 pointer-events-none z-10 transition-all duration-75"
            style={{ transform: 'translate(0, 0) rotate(0deg)' }}
          >
            <Image
              src="/hand.png"
              alt="hand"
              fill
              className="relative object-contain filter brightness-[1.5] contrast-[1.2] saturate-0"
              unoptimized={isIOS}
            />
          </div>

          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className={`flex justify-center bg-blue-500 aspect-square relative 
                ${index === 0 ? 'rounded-l-lg' : ''} 
                ${index === 4 ? 'rounded-r-lg' : ''}
                ${hoveredIndex === index ? 'animate-shake' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onTouchStart={() => setHoveredIndex(index)}
            >
              <div className="relative w-full h-full">
                {isIOS ? (
                  <img
                    src={ratingImages[index]}
                    alt={ratingAlts[index]}
                    className="object-contain p-2 w-full h-full"
                  />
                ) : (
                  <Image
                    src={ratingImages[index]}
                    alt={ratingAlts[index]}
                    fill
                    className="object-contain p-2"
                    unoptimized={isIOS}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative self-end w-60 h-60 pt-8">
        <Image
          src="/vector-1.svg"
          alt="Almie happy"
          width={180}
          height={180}
          className="absolute -bottom-36 md:right-10 -right-6"
          unoptimized={isIOS}
        />
        <Image
          src={mouthImages[activeItem - 1] || mouthImages[2]}
          alt="mouth"
          width={32}
          height={32}
          className="absolute w-8 md:right-28 top-[100%] right-16"
          unoptimized={isIOS}
        />
        <Image
          src="/mano.png"
          alt="Almie happy"
          width={40}
          height={40}
          className="hidden md:block md:absolute -bottom-14 md:right-4 -right-6 rotate-[112deg]"
          unoptimized={isIOS}
        />
      </div>
    </div>
  );
};
