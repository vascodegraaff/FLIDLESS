import logo from './logo.svg';
import './App.css';
import ClientWelcomeScreen from './pages/ClientWelcomeScreen';
import { Routes, Route } from "react-router-dom";
import ClientIdUploadScreen from './pages/ClientIdUploadScreen';
import ClientProofScreen from './pages/ClientProofScreen';
import ClientQrCodeScreen from './pages/ClientQrCodeScreen';
import AdminLoginScreen from './pages/AdminLoginScreen';
import AdminScannerScreen from './pages/AdminScannerScreen';
import NotFoundScreen from './pages/NotFoundScreen';
import ClientStateProvider from './components/ClientStateProvider';

function App() {
  return (
    <Routes>
      <Route path="" element={<ClientWelcomeScreen />} />
      <Route path="/idUpload" element={<ClientIdUploadScreen />} />
      <Route path="/Proof" element={<ClientProofScreen /> } />
      <Route path="/qrCode" element={<ClientQrCodeScreen />} />

      <Route path="admin" element={<AdminLoginScreen />}></Route>
      <Route path="scanner" element={<AdminScannerScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default App;
