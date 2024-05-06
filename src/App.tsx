import { MainLayout } from "./common/components/_organisms";
import Breadcrumbs from "./common/components/_organisms/Breadcrumbs/Breadcrumbs";
import Footer from "./common/components/footer/Footer";

const App = () => {
  return (
    <MainLayout>
      <Breadcrumbs />
        <h1>App</h1>
        <Footer />
      </MainLayout>
  );
};

export default App;