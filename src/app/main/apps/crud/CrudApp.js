import FusePageSimple from "@fuse/core/FusePageSimple";
import _ from "@lodash";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function ProductCard({
  title,
  description,
  category,
  brand,
  handleOpen,
  handleProductCardClick,
  id,
}) {
  const handleDelete = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(console.log);
  };
  return (
    <div
      className="p-[1rem] w-[23%] bg-white rounded-[10px] cursor-pointer mb-[26px] z-9999 "
    >
      <div className="text-[26px]">{title}</div>
      <div className="text-[20px] mt-[10px]">{description}</div>
      <div className="mt-[10px]">Brand : {brand}</div>
      <div className="flex flex-wrap space-x-5">{category}</div>

      <button
        className="p-[1rem] bg-red-500 text-white"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="p-[1rem] bg-blue-600 text-white ml-[16px]"
        onClick={(e) => {
          handleOpen();
          handleProductCardClick({ title, description, category, brand });
        }}
      >
        Update
      </button>
    </div>
  );
}

function CreateForm({ selectedProduct }) {
  const [title, setTitle] = useState(selectedProduct.title || "");
  const [description, setDescription] = useState(
    selectedProduct.description || ""
  );
  const [brand, setBrand] = useState(selectedProduct.brand || "");
  const [categories, setCategories] = useState(selectedProduct.category || []);
  const [delivery, setDelivery] = useState("yes");

  const handleChange = (event) => {
    setDelivery(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, brand, categories, delivery }),
    })
      .then((res) => res.json())
      .then(console.log);
    console.log(categories);
  };

  const handleProductCardClick = (productData) => {
    setTitle(productData.title);
    setDescription(productData.description);
    setBrand(productData.brand);
    setCategories(productData.category);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setCategories([...categories, category]);
    } else {
      setCategories(categories.filter((c) => c !== category));
    }
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 p-2 w-full border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 p-2 w-full border rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="brand"
            className="block text-sm font-medium text-gray-700"
          >
            Brand
          </label>
          <select
            id="brand"
            className="mt-1 p-2 w-full border rounded-md"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          >
            <option value="">Select Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="LG">LG</option>
            <option value="Vivo">Vivo</option>
            <option value="Lenovo">Lenovo</option>
            <option value="HP">HP</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Categories
          </label>
          <div className="mt-2 space-y-2">
            <label className="inline-flex items-center ">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600"
                value="Smartphones"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 mr-6">Smartphones</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600"
                value="TV"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 mr-6">TV</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600"
                value="Computer"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 mr-6">Computer</span>
            </label>
            {/* Add more categories here */}
          </div>
        </div>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={delivery}
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="yes" />
          <FormControlLabel value="no" control={<Radio />} label="no" />
        </RadioGroup>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function CrudApp(props) {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleProductCardClick = (productData) => {
    setSelectedProduct(productData);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res?.products));
  }, []);

  return (
    <Root
      content={
        <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CreateForm selectedProduct={selectedProduct} />
            </Box>
          </Modal>
          <button
            onClick={handleOpen}
            className="p-[1rem] text-white bg-blue-600 rounded-[10px]"
          >
            Create New product
          </button>
          <div className="flex justify-between flex-wrap mt-[20px]">
            {products.map((product) => {
              return (
                <ProductCard
                  handleOpen={handleOpen}
                  handleProductCardClick={handleProductCardClick}
                  title={product.title}
                  key={product.id}
                  id={product.id}
                  description={product.description}
                  brand={product.brand}
                  category={product.category}
                />
              );
            })}
          </div>
          <div className="mt-[40px]"></div>
        </div>
      }
    />
  );
}

export default CrudApp;
