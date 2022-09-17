import Home from "../pages/Home";
import AdminScannerScreen from "../pages/AdminScannerScreen";
import AdminLoginScreen from "../pages/AdminLoginScreen";
import ClientWelcomeScreen from "../pages/ClientWelcomeScreen";
import ClientIdUploadScreen from "../pages/ClientIdUploadScreen";
import ClientScannerScreen from "../pages/ClientScannerScreen";
import ClientProofScreen from "../pages/ClientProofScreen";
import ClientQrCodeScreen from "../pages/ClientQrCodeScreen";
import ClientStatusScreen from "../pages/ClientStatusScreen";

const routes = [
  {
    path: "/",
    element: <ClientWelcomeScreen />,
  },
  {
    path: "client",
    children: [
      {
        element: <ClientIdUploadScreen />,
      },
      {
        element: <ClientProofScreen />,
      },
      {
        element: <ClientScannerScreen />,
      },
      {
        element: <ClientQrCodeScreen />,
      },
      {
        element: <ClientStatusScreen />,
      },
    ],
  },
  {
    path: "staff",
    children: [
      {
        element: <AdminLoginScreen />,
      },
      {
        element: <AdminScannerScreen />,
      },
    ],
  },
];

export default routes;
