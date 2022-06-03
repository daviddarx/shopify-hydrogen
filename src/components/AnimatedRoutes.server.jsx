import {
  Route,
  FileRoutes,
} from '@shopify/hydrogen';
import {AnimatePresence} from "framer-motion"
import {React} from 'react';
import NotFound from './NotFound.server';

function AnimatedRoutes() {

  return (
    <AnimatePresence>
      <FileRoutes />
      <Route path="*" page={<NotFound />} />
    </AnimatePresence>  
  );
}

export default AnimatedRoutes