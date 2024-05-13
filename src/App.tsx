import Basket from "./common/components/_molecules/Basket/Basket";
import { MainLayout } from "./common/components/_organisms";
import Breadcrumbs from "./common/components/_organisms/Breadcrumbs/Breadcrumbs";

const App = () => {
  return (
    <MainLayout>
      <Breadcrumbs />
        <Basket />
      </MainLayout>
  );
};

export default App;