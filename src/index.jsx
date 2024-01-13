import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import './global.css';

const myRoot = document.getElementById('root');
const root = createRoot(myRoot);

root.render(<RouterProvider router={routes} />);