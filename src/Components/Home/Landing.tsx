import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing(): React.JSX.Element {
  
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products/1');
  }

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 justify-between text-center">
        <img src="../../../public/svg/Home/landing.svg" alt="Insurance-amico" className="mx-auto w-3/4 mt-10" />
        <div className="mt-20 lg:mt-60">
          <h2 className="text-6xl lg:text-7xl text-secondary-default">آفتاب کالکشن</h2>
          <h2 id="slogan" className="text-xl lg:text-2xl text-secondary-default">فروش همواره تخفیف</h2>
          <Button variant='contained' onClick={goToProducts} sx={{ mt:'20px' }}>لیست محصولات</Button>
        </div>
      </div>
    </>
  )
}