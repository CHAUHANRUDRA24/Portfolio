import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ProjectDetail from './components/ProjectDetail';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectDetail />
  </StrictMode>
);
