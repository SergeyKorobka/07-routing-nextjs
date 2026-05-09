'use client';

import NotePreview from '@/components/NotePreview/NotePreview';
import css from './Modal.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ModalNotes() {
  const router = useRouter();

  useEffect(() => {
    function handleClose(e: KeyboardEvent) {
      if (e.code.toLocaleLowerCase() === 'escape') {
        router.back();
      }
    }

    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, [router]);

  return (
    <div
      onClick={e => {
        if (e.currentTarget === e.target) router.back();
      }}
      className={css.backdrop}
    >
      <div className={css.modal}>
        <NotePreview fnBack={() => router.back()} />
      </div>
    </div>
  );
}
