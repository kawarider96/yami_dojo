import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { MainLayout } from './COMPONENTS/layouts/MainLayout';
import { LandingPageContainer } from './PAGES/LandingPage/LandingPageContainer';
import './index.css'
import { AbcContainer } from './PAGES/abc-page/AbcContainer';
import { WordsContainer } from './PAGES/words/WordsContainer';
import { TrainingContainer } from './PAGES/training/TrainingContainer';
import { CssVarsProvider } from '@mui/joy';
import { basicTheme } from './SUPPORT/THEME/theme';
import CssBaseline from '@mui/joy/CssBaseline';

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
      <CssVarsProvider theme={basicTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </CssVarsProvider>
  </SnackbarProvider>
)
