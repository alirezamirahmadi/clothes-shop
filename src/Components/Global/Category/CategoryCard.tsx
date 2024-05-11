
import { Link } from "react-router-dom";

import type { CategoryType } from "../../../Utils/Types";

export default function CategoryCard({ image, title, href }: CategoryType): React.JSX.Element {
  return (
    <>
      <Link to={href}>
        <img src={image} alt={title} className="rounded-xl shadow transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500" />
      </Link>
    </>
  )
}