// import { useRef } from "react";
import { TextField } from "@mui/material";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { ProductHeaderType } from "../../../Utils/Types";
// import TextBox from "../TextBox/TextBox";
// import './CourseHeader.css'

export default function ProductHeader({ changeSortHandler, changeSearchHandler }: ProductHeaderType) {
  // const search = useRef()

  return (
    <>
      <div className="felx justify-between border rounded-lg shadow-md px-1 pt-3 pb-1">
        <div>
          <select onChange={(event) => changeSortHandler(event.target.value)}
            className="border rounded-lg outline-none w-full mb-1 ml-1 px-1">
            <option value="default">Default</option>
            <option value="latest">Latest</option>
            <option value="first">First</option>
            <option value="free">Free</option>
            <option value="notfree">Not Free</option>
          </select>
        </div>
        <div>
          <TextField id="serach_product" label="جستجو" variant="outlined" 
          onChange={event => changeSearchHandler(event.target.value)}/>
          {/* <TextBox ref={search} onChange={event => changeSearchHandler(event.target.value)} icon={<SearchOutlinedIcon color="textColor" />} placeHolder='Search Courses' /> */}
        </div>
      </div>
    </>
  )
}