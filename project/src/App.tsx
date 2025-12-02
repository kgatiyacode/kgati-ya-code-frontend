import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { TemplateProvider } from './contexts/TemplateContext';
import { OnboardingProvider } from './contexts/OnboardingContext';
import { Navbar } from './components/Navbar';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Onboarding } from './pages/Onboarding';
import { Templates } from './pages/Templates';
import { Preview } from './pages/Preview';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <TemplateProvider>
            <OnboardingProvider>
              <div className="min-h-screen transition-colors duration-300">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/templates" element={<Templates />} />
                  <Route path="/preview" element={<Preview />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </div>
            </OnboardingProvider>
          </TemplateProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
