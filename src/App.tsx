import { MainLayout } from "./common/components/_organisms";
import Footer from "./common/components/footer/Footer";

const App = () => {
  return (
    <div>
      <MainLayout>
        <h1>App</h1>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default App;