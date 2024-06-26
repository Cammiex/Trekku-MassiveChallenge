import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// const SplashScreen = React.lazy(() =>
//   import('../components/Pages/SplashScreen/SplashScreen')
// );
const HomePage = React.lazy(() =>
  import('../components/Pages/HomePage/HomePage')
);
const OpenTripPage = React.lazy(() =>
  import('../components/Pages/OpenTripPage/OpenTripPage')
);
const DestinationPage = React.lazy(() =>
  import('../components/Pages/DestinationPage/DestinationPage')
);
const AboutPage = React.lazy(() =>
  import('../components/Pages/AboutPage/AboutPage')
);
const Register = React.lazy(() =>
  import('../components/Pages/AuthPage/Register')
);
const Login = React.lazy(() => import('../components/Pages/AuthPage/Login'));
const OpenTripDetail = React.lazy(() =>
  import('../components/Pages/DetailOpenTripPage/DetailOpenTripPage')
);
const HelpPage = React.lazy(() =>
  import('../components/Pages/HelpPage/HelpPage')
);
const BudgetPlanningPage = React.lazy(() =>
  import('../components/Pages/BudgetPlanningPage/BudgetPlanningPage')
);
const ArticleDetailPage = React.lazy(() =>
  import('../components/Pages/ArticleDetailPage/ArticleDetailPage')
);
const AdminPage = React.lazy(() =>
  import('../components/Pages/AdminPage/AdminPage')
);
const ProductPage = React.lazy(() =>
  import('../components/Pages/AdminPage/ProductPage')
);
const AddProductPage = React.lazy(() =>
  import('../components/Pages/AdminPage/AddProductPage')
);
const EditProductPage = React.lazy(() =>
  import('../components/Pages/AdminPage/EditProductPage')
);
const ProfilePage = React.lazy(() =>
  import('../components/Pages/ProfilePage/ProfilePage')
);
const ProfileHelpPage = React.lazy(() =>
  import('../components/Pages/ProfilePage/HelpPage')
);
const OrderPage = React.lazy(() =>
  import('../components/Pages/OrderPage/OrderPage')
);
const OrderSummaryPage = React.lazy(() =>
  import('../components/Pages/OrderSummaryPage/OrderSummaryPage')
);
const PaymentPage = React.lazy(() =>
  import('../components/Pages/PaymentPage/PaymentPage')
);
const PaymentConfirmPage = React.lazy(() =>
  import('../components/Pages/PaymentConfirmPage/PaymentConfirmPage')
);
const WishlistPage = React.lazy(() =>
  import('../components/Pages/ProfilePage/WishlistPage')
);
const RiwayatPembelianPage = React.lazy(() =>
  import('../components/Pages/ProfilePage/RiwayatPembelianPage')
);
const DetailVoucherPage = React.lazy(() =>
  import('../components/Pages/DetailVoucherPage/DetailVoucherPage')
);
const ReviewsPage = React.lazy(() =>
  import('../components/Pages/ReviewsPage/ReviewsPage')
);

const ProjectRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const expire = localStorage.getItem('expire');
    if (userId && token && expire) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/open-trip" element={<OpenTripPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/open-trip/:id" element={<OpenTripDetail />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/budget-planning/:id" element={<BudgetPlanningPage />} />

          {isLoggedIn ? (
            <>
              <Route
                path="/admin"
                element={<Navigate to="/admin/products" />}
              />
              <Route path="/admin/dashboard" element={<AdminPage />} />
              <Route path="/admin/products" element={<ProductPage />} />
              <Route path="/admin/products/add" element={<AddProductPage />} />
              <Route
                path="/admin/products/edit/:id"
                element={<EditProductPage />}
              />
            </>
          ) : (
            ''
          )}

          {isLoggedIn ? (
            <>
              {' '}
              <Route
                path="/profile/information/:id"
                element={<ProfilePage />}
              />
              <Route path="/profile/help/:id" element={<ProfileHelpPage />} />
              <Route path="/profile/wishlist/:id" element={<WishlistPage />} />
              <Route
                path="/profile/order/:id"
                element={<RiwayatPembelianPage />}
              />
            </>
          ) : (
            ''
          )}

          {isLoggedIn ? (
            <>
              <Route path="/order/:id" element={<OrderPage />} />
              <Route path="/order-summary/:id" element={<OrderSummaryPage />} />
              <Route path="/payment/:id" element={<PaymentPage />} />
              <Route
                path="/payment-confirm/:id"
                element={<PaymentConfirmPage />}
              />
            </>
          ) : (
            ''
          )}

          <Route path="/voucher/:id" element={<DetailVoucherPage />} />

          {isLoggedIn ? (
            <>
              {' '}
              <Route path="/review/:id" element={<ReviewsPage />} />
            </>
          ) : (
            ''
          )}

          <Route path="/article/:id" element={<ArticleDetailPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
