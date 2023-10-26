import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import NewCategory from './pages/NewCategory';
import EditProduct from './pages/EditProduct';
import EditCategory from './pages/EditCategory';
import ListProducts from './pages/ListProducts';
import ListCategories from './pages/ListCategories';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/newproduct" component={NewProduct} />
      <Route path="/newcategory" component={NewCategory} />
      <Route path="/editproduct/:id" component={EditProduct} />
      <Route path="/editcategory/:id" component={EditCategory} />
      <Route path="/products" component={ListProducts} />
      <Route path="/categories" component={ListCategories} />
    </Switch>
  );
}
