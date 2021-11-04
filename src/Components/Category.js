import React from "react";
import movies from "../movies";
function Category() {
  const [list, setList] = React.useState(movies);
  const categorys = [];
  const newList = list.map((item) => {
    categorys.push(item.category);
  });
  let uniqueCategory = [...new Set(categorys)];

  return (
    <div className="form-group col-md-4">
      <label for="category"></label>
      <select id="inputCtegory" className="form-control">
        <option selected disabled>
          Choose category...
        </option>

        {uniqueCategory.map((category) => (
          <option>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default Category;
