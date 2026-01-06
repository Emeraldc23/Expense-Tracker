import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import ExpenseBoardTracker from "./Pages/ExpenseBoard/ExpenseBoard";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/expense-board",
    element: <ExpenseBoardTracker />,
  },
]);
function App() {
  return (
    <>
      <div>
        <RouterProvider router={route} />
      </div>
    </>
  );
}

export default App;
