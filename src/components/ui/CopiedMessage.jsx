"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Chip } from "@/components/ui/Chip";

export const CopiedMessage = ({ show, message }) => {
  const messageRef = useRef();

  useEffect(() => {
    if (show) {
      // Animação de entrada
      gsap.fromTo(
        messageRef.current,
        { bottom: '-2.5rem', opacity: 0 },
        { bottom: '2.5rem', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );

      // Animação de saída após 2 segundos
      const timer = setTimeout(() => {
        gsap.to(messageRef.current, {
          bottom: '-2.5rem',
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
        });
      }, 2000); // Tempo antes da animação de saída começar

      return () => clearTimeout(timer);
    }
  }, [show]);

  return show ? (
    <div
      ref={messageRef}
      className="fixed left-1/2 transform -translate-x-1/2 z-50"
    >
      <Chip size="md" className="w-max flex items-center bg-color-primary-500">
        <p>{message}</p>
      </Chip>
    </div>
  ) : null;
};