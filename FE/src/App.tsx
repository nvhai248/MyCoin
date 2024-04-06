import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AntdProvider from "./provider/AntdProvider";
import "./styles/index.css";

function App() {
  return (
    <AntdProvider>
      <RouterProvider router={router} />
    </AntdProvider>
  );
}

export default App;
