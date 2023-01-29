import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import Orders from './components/Orders';
import SignIn from './pages/signIn';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      {/*  <SignIn/> */}
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
      />
    </>
  );
};
export default App;
