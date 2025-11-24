import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/Cart";
import Header from "./Header";
import Loder from "./Loder";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = (navigation.state = "loading");
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] " >
      {isLoading && <Loder />}
      <Header />
      <div className="overflow-scroll ">

      <main className=" max-w-3xl  max-auto " >
        <h1>Content</h1>
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
