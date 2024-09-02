import { RouterProvider } from "react-router-dom";
import { router } from "@/app/routes";
import { Suspense } from "react";

function App() {
  return <Suspense fallback={<h1>Loading</h1>}>
    <RouterProvider router={router} />;
  </Suspense> 

}

export default App;
