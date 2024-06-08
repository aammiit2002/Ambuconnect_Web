import React, { memo, createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/signup";
import Login from "./Pages/Login";
import { UserProvider } from "./Pages/UserContext";
import Accounts from "./Pages/Accounts";
import HospitalSignup from "./Pages/HospitalSignup";
import AmbuDas from "./Pages/AmbuDas";
import NewPatients from "./Pages/NewPatients";
import HospitalDas from "./Pages/HospitalDas";
import Logout from "./Pages/Logout";
import HospitalLogin from "./Pages/HospitalLogin";
import ActiveCaseAmbu from "./Pages/ActiveCaseAmbu";
import CaseCompHosp from "./Pages/CaseCompHosp";
import ActiveCaseHosp from "./Pages/ActiveCaseHosp";
import CaseCompAmbu from "./Pages/CaseCompAmbu";
import HomePage from "./Pages/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';

//Create a context to hold the user state
const UserContext = createContext();

const App = () => {
  //  Define state and methods to update the user state
  const [user, setUser] = useState(null);

  useEffect(() => {
    AOS.init();
  }, [])


  //  Wrap your App component with the UserProvider
  return (
    <UserProvider value={{ user, setUser }}>
      {" "}
      {/* Wrap App with UserProvider */}
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hospitallogin" element={<HospitalLogin />} />
            <Route path="/account" element={<Accounts />} />
            <Route path="/ambudas" element={<AmbuDas />} />
            <Route path="/hospitaldas" element={<HospitalDas />} />
            <Route path="/hospitalSignup" element={<HospitalSignup />} />
            <Route path="/newpatients" element={<NewPatients />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/casecompletedhosp" element={<CaseCompHosp />} />
            <Route path="/activecaseshosp" element={<ActiveCaseHosp />} />
            <Route path="/Active_cases" element={<ActiveCaseAmbu />} />
            <Route path="/cases_completed" element={<CaseCompAmbu />} />
          </Routes>
        </BrowserRouter>
      </>
    </UserProvider>
  );
};

export default memo(App);








// import "./App.css";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <About />
//       <Work />
//       <Testimonial />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;






// App.js
// import React, { memo, createContext, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Signup from "./Pages/signup";
// import Login from "./Pages/Login";
// import { UserProvider } from './Pages/UserContext'; 
// import Accounts from "./Pages/Accounts";
// import HospitalSignup from "./Pages/HospitalSignup";
// import AmbuDas from "./Pages/AmbuDas";
// import NewPatients from "./Pages/NewPatients";
// import HospitalDas from "./Pages/HospitalDas";
// import Logout from "./Pages/Logout";
// import HospitalLogin from "./Pages/HospitalLogin";
// import ActiveCaseAmbu from "./Pages/ActiveCaseAmbu";
// import CaseCompHosp from "./Pages/CaseCompHosp";
// import ActiveCaseHosp from "./Pages/ActiveCaseHosp";
// import CaseCompAmbu from "./Pages/CaseCompAmbu";

// //Create a context to hold the user state
// const UserContext = createContext();

// const App = () => {
//   //  Define state and methods to update the user state
//   const [user, setUser] = useState(null);

//   //  Wrap your App component with the UserProvider
//   return (
//     <UserProvider value={{ user, setUser }}> {/* Wrap App with UserProvider */}
//       <>
//         <header className="flex items-center justify-between h-16 bg-white">
//           <div className="ml-4">
//             <a href="/">
//               <img
//                 src="logo.png"
//                 alt="AmbuConnect"
//                 className="h-8 w-auto"
//               />
//             </a>
//           </div>
//           <nav className="mr-4">
//             <ul className="flex space-x-4">
//               <li>
//                 <a href="/login" className="hover:underline">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/signup" className="hover:underline">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/ambudas" className="hover:underline">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/logout" className="hover:underline">
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} /> 
//             <Route path="/hospitallogin" element={<HospitalLogin />} /> 
//             <Route path="/account" element={<Accounts />} />
//             <Route path="/ambudas" element={<AmbuDas />} />
//             <Route path="/hospitaldas" element={<HospitalDas />} />
//             <Route path="/hospitalSignup" element={<HospitalSignup />} />
//             <Route path="/newpatients" element={<NewPatients />} />
//             <Route path="/logout" element={<Logout />} />
//             <Route path="/casecompletedhosp" element={<CaseCompHosp/>} />
//             <Route path="/activecaseshosp" element={<ActiveCaseHosp/>}/>
//             <Route path="/Active_cases" element={<ActiveCaseAmbu/>}/>
//             <Route path="/cases_completed" element={<CaseCompAmbu/>}/>
//           </Routes>
//         </BrowserRouter>
//       </>
//     </UserProvider>
//   );
// };

// export default memo(App);
