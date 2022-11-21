import React from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AuthPage from "../Components/AuthPage";
import Applications from "../Components/Candidate/Applications";
import CandidateConversation from "../Components/Candidate/CandidateConversation";
import CandidateJobs from "../Components/Candidate/CandidateJobs";
import CandidateOnboarding from "../Components/Candidate/CandidateOnboarding";
import CandidateProfile from "../Components/Candidate/CandidateProfile";
import Applicants from "../Components/Employer/Applicants";
import EmployerProfile from "../Components/Employer/EmployerProfile";
import EmployerJobs from "../Components/Employer/EmployerJobs";
import EmployerOnboarding from "../Components/Employer/EmployerOnboarding";
import EmployerConversation from "../Components/Employer/EmployerConversation";
import LandingPage from "../Components/LandingPage";

function Navs() {
  const CandidateProtactedRotes = () => {
    if ("a" === "a") return <Outlet />;
    else return <Navigate to="/" />;
  };
  const EmployerProtactedRotes = () => {
    if ("a" === "a") return <Outlet />;
    else return <Navigate to="/" />;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/candidate/auth" element={<AuthPage type='candidate' />} />
          <Route path="/employer/auth" element={<AuthPage type='employer' />} />
          <Route element={<CandidateProtactedRotes />}>
            <Route
              path="candidate/onboarding"
              element={<CandidateOnboarding />}
            />
            <Route path="candidate/jobs" element={<CandidateJobs />} />
            <Route
              path="candidate/conversation"
              element={<CandidateConversation />}
            />
            <Route path="candidate/profile" element={<CandidateProfile />} />
            <Route path="candidate/applications" element={<Applications />} />
          </Route>
          <Route element={<EmployerProtactedRotes />}>
            <Route
              path="employer/onboarding"
            element={<EmployerOnboarding />}
            />
            <Route path="employer/jobs" element={<EmployerJobs />} />
            <Route
              path="employer/conversation"
              element={<EmployerConversation />}
            />
            <Route path="employer/profile" element={<EmployerProfile />} />
            <Route path="employer/applications" element={<Applicants />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navs;
