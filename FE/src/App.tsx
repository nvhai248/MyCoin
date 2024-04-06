import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AntdProvider from "./provider/AntdProvider";

function App() {
  return (
    <AntdProvider>
      <RouterProvider router={router} />
    </AntdProvider>
  );
}

export default App;
