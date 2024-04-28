"use client";

import { useRouter } from "next/navigation";
import { type ElementRef, type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  });

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="h-screen w-screen bg-zinc-900/50"
      onClose={onDismiss}
    >
      {children}
      {/* <button onClick={onDismiss} className="close-button" /> */}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
