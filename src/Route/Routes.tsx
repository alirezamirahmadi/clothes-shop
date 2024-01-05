// import { Route } from "../Utils/Types";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Components/Global/Products/Products";
import ProductInfo from "../Pages/ProductInfo/ProductInfo";
import Articles from "../Components/Global/Articles/Articles";
import ArticleInfo from "../Pages/ArticleInfo/ArticleInfo";
import Purchase from '../Pages/Purchase/Purchase'
import MyAccount from "../Pages/MyAccount/MyAccount";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SizingManual from "../Pages/SizingManual/SizingManual";
import CommonQuestions from "../Pages/CommonQuestions/CommonQuestions";
import Privacy from "../Pages/Privacy/Privacy";
import PurchaseGuide from "../Pages/PurchaseGuide/PurchaseGuide";

const routes = [
  {path:'/', element:<Home/>},
  {path:'/login', element:<Login />},
  {path:'/products', element:<Products filter="All" showFilter={true} showPagination={true}/>},
  {path:'/category/:idCategory', element:<Products filter="All" showFilter={true} showPagination={true}/>},
  {path:'/product-info/:idProduct', element:<ProductInfo/>},
  {path:'/purchase/:tab', element:<Purchase />},
  {path:'/my-account/:tab', element:<MyAccount />},
  {path:'/articles', element:<Articles filter="All" showFilter={false} showPagination={true}/>},
  {path:'/article-info/:idArticle', element:<ArticleInfo/>},
  {path:'/size', element:<SizingManual />},
  {path:'/about-us', element:<AboutUs />},
  {path:'/contact-us', element:<ContactUs />},
  {path:'/commen-questions', element:<CommonQuestions />},
  {path:'/privacy', element:<Privacy />},
  {path:'/purchase-guide', element:<PurchaseGuide />},
]

export default routes;