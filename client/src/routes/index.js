import { AnimatePresence, motion } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from '../containers/Home';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { links } from '../static/links/index';

const pageVariants = {
  in: { opacity: 1 },
  initial: { opacity: 0 },
  transition: { duration: 0.5 }
};

const Routes = () => {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <AnimatePresence>
        <Switch key={location.pathname} location={location}>
          <motion.div
            animate='in'
            className={`show }`}
            exit='out'
            id='main-wrapper'
            initial='initial'
            variants={pageVariants}
          >
            <Header />
            <Route component={Home} path={links.home} />
            <Footer />
          </motion.div>
        </Switch>
      </AnimatePresence>
    </ErrorBoundary>
  );
};

export default Routes;
