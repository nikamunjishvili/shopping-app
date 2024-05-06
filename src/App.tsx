import { Header } from "./common/components/_molecules";
import { MainLayout } from "./common/components/_organisms";
import Breadcrumbs from "./common/components/_organisms/Breadcrumbs/Breadcrumbs";
import Footer from "./common/components/footer/Footer";

const App = () => {
  return (
    <MainLayout>
      <Header />
      <Breadcrumbs />
        <h1>App</h1>
        <Footer />
      </MainLayout>
  );
};

export default App;