import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  Router,
  ShopifyProvider,
  PerformanceMetrics,
  PerformanceMetricsDebug,
  log
} from '@shopify/hydrogen';
import {Suspense} from 'react';
import DefaultSeo from './components/DefaultSeo.server';
import LoadingFallback from './components/LoadingFallback';
import ServerCartProvider from './components/ServerCartProvider.server';
import AnimatedRoutes from './components/AnimatedRoutes.server';

log.trace('app started'); // Statically log some information.


function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopifyProvider>
        <ServerCartProvider>
          <DefaultSeo />
          <Router>
            <AnimatedRoutes />       
          </Router>
        </ServerCartProvider>
        <PerformanceMetrics />
        {import.meta.env.DEV && <PerformanceMetricsDebug />}
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
