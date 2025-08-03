import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./app/routes/index.tsx"; 
export default function App() {
  const element = useRoutes(routes);
  return <Suspense fallback={<p>Loading...</p>}>{element}</Suspense>;
}
