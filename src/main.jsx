import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { MainLayout } from './COMPONENTS/layouts/MainLayout';
import { LandingPageContainer } from './PAGES/LandingPage/LandingPageContainer';
import './index.css'
import './button.css'
import { AbcContainer } from './PAGES/abc-page/AbcContainer';
import { ThemeProvider } from "@material-tailwind/react";
import { WordsContainer } from './PAGES/words/WordsContainer';
import { TrainingContainer } from './PAGES/training/TrainingContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><LandingPageContainer /></MainLayout>,
  },
  {
    path: "/abc",
    element: <MainLayout><AbcContainer /></MainLayout>,
  },
  {
    path: "/words",
    element: <MainLayout><WordsContainer /></MainLayout>,
  },
  {
    path: "/training",
    element: <MainLayout><TrainingContainer /></MainLayout>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider maxSnack={3}>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </SnackbarProvider>
)
