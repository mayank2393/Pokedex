import React, { useEffect } from 'react'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Background from './components/Background'
import './scss/index.scss';
import { BrowserRouter , Route , Routes , Navigate} from 'react-router-dom'
import Search from './pages/Search'
import MyList from './pages/MyList'
import About from './pages/About'
import Compare from './pages/Compare'
import Pokemon from './pages/Pokemon'
import { ToastContainer , ToastOptions , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { clearToasts, setUserStatus } from './app/slices/AppSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './utils/FirebaseConfig';

const App = () => {
   const { toasts } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser)=>{
      if(currentUser){
        dispatch(setUserStatus({email : currentUser.email}));
      }
    })
  },[dispatch]);

   useEffect(() => {
     if (toasts.length) {
       toasts.forEach((message: string) => {
        const toastOptions: ToastOptions = {
          position: "bottom-right",
          autoClose: 2000,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        };
         toast(message,toastOptions);
       });
       dispatch(clearToasts());

     }
   }, [toasts, dispatch]);
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about"></Route>
            <Route element={<Compare />} path="/compare"></Route>
            <Route element={<Pokemon />} path="/pokemon/:id"></Route>
            <Route element={<Navigate to="/pokemon/1"/>} path="*"/>
          </Routes>
          <Footer />
          <ToastContainer/> 
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App