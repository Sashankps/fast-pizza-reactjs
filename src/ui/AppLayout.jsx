import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router';
import Loader from './Loader';

function AppLayout() {
  // UseNavigation checks for any loading state across the whole app, using this can display loading indicator whenever any component is fetching data or is being rendered
  const navigation = useNavigation(); 
  const isLoading  = navigation.state === 'loading'; 

  return (
    <div  className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div  className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* Outlet Renders the child components */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;