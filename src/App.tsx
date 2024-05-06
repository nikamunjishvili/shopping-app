import { Header } from "./common/components/_molecules";
import Basket from "./common/components/_molecules/Basket/Basket";
import { MainLayout } from "./common/components/_organisms";
import Breadcrumbs from "./common/components/_organisms/Breadcrumbs/Breadcrumbs";
import Footer from "./common/components/footer/Footer";

const App = () => {
  return (
    <MainLayout>
      <Header />
      <Breadcrumbs />
        <Basket />
        <Footer />
      </MainLayout>
  );
};

export default App;