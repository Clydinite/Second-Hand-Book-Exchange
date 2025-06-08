import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'flowbite';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export type Book = {
  id: number;
  title: string;
  isbn: string;
  courseId: string;
  condition: string;
  price: number;
  image: string;
};

