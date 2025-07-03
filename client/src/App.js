import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Lazy loading the components
const Userregister = React.lazy(() => import('./components/user/userregister'));
const Userlogin = React.lazy(() => import('./components/user/userlogin'));
const Addproducte = React.lazy(() => import('./components/admin/addproduct'));
const Adminlogin = React.lazy(() => import('./components/admin/adminlogin'));
const Employeeview = React.lazy(() => import('./components/user/employeeview'));
const Msg = React.lazy(() => import('./components/user/welcome'));
const Productview = React.lazy(() => import('./components/user/productview'));
const Productview1 = React.lazy(() => import('./components/seller/productview1'));
const Adminnav = React.lazy(() => import('./components/admin/adminnav'));
const Emppage = React.lazy(() => import('./components/user/emppage'));
const Sellerregister = React.lazy(() => import('./components/seller/sellerregister'));
const Sellerlogin = React.lazy(() => import('./components/seller/sellerlogin'));
const Usersearch = React.lazy(() => import('./components/admin/usersearch'));
const Adminpage = React.lazy(() => import('./components/admin/adminpage'));
const Profile = React.lazy(() => import('./components/user/profile'));
const Sellerpage = React.lazy(() => import('./components/seller/sellerpage'));
const Sellersearch = React.lazy(() => import('./components/admin/sellersearch'));
const Homepage = React.lazy(() => import('./components/homepage'));
const Middle3 = React.lazy(() => import('./components/middle3'));
const Contact = React.lazy(() => import('./components/contact'));
const ProductviewCard = React.lazy(() => import('./components/user/product_card'));
const OrderNow = React.lazy(() => import('./components/user/order'));
const PaymentPage = React.lazy(() => import('./components/user/makepayment'));

// A simple fallback loading component
const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/userregister" element={<Userregister />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/addproduct" element={<Addproducte />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/employeeview" element={<Employeeview />} />
          <Route path="/welcome" element={<Msg />} />
          <Route path="/productview" element={<Productview />} />
          <Route path="/productview1" element={<Productview1 />} />
          <Route path="/adminnav" element={<Adminnav />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/emppage/*" element={<Emppage />} />
          <Route path="/sellerpage/*" element={<Sellerpage />} />
          <Route path="/adminpage/*" element={<Adminpage />} />
          <Route path="/sellerregister" element={<Sellerregister />} />
          <Route path="/sellerlogin" element={<Sellerlogin />} />
          <Route path="/usersearch" element={<Usersearch />} />
          <Route path="/sellersearch" element={<Sellersearch />} />
          <Route path="/middle3" element={<Middle3 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/productviewcard" element={<ProductviewCard />} />
          <Route path="/order" element={<OrderNow />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
