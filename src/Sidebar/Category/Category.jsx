import Input from "../../components/Input";
import "./category.css";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category </h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="checkmark all"></span>
        All
      </label>
      <div>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
