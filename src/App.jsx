import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <motion.div className='m-0 p-0 overflow-x-hidden'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <motion.div
                initial={{ x: '-100%' , opacity: 0 }}
                animate={{ x: 0 , opacity: 1}}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path='/form'
            element={
              <motion.div
                initial={{ x: '100%' , opacity: 0 }}
                animate={{ x: 0 , opacity: 1 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <Form />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
