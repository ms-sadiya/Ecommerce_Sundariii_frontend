import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
const selectedProduct = {
  id: "SL-SCR-001",
  name: "Floral Silk Scrunchie",
  category: "Scrunchies",
  description:
    "Soft silk scrunchie designed to give a gentle hold without hair breakage. Perfect for everyday elegance or festive looks.",

  price: 249,
  originalPrice: 349,
  currency: "INR",

  colors: [
    { name: "Blush Pink", hex: "#F4C2C2" },
    { name: "Ivory White", hex: "#FFF8E7" },
    { name: "Lavender Mist", hex: "#E6E6FA" },
    { name: "Midnight Black", hex: "#000000" },
  ],

  sizes: ["S", "M", "L", "XL"],

  material: "Premium Satin Silk",
  careInstructions: ["Hand wash gently", "Do not bleach", "Air dry only"],

  stockStatus: "In Stock",
  ratings: 4.6,
  reviewsCount: 128,

  images: [
    {
      id: 1,
      url: "https://picsum.photos/600/600?random=1",
      alt: "Floral silk scrunchie front view",
    },
    {
      id: 2,
      url: "https://picsum.photos/600/600?random=2",
      alt: "Floral silk scrunchie side view",
    },
  ],

  tags: ["Soft Hold", "No Hair Damage", "Daily Wear", "Trending"],
};

const similarProducts = [
  {
    id: "SL-SCR-002",
    name: "Rose Satin Scrunchie",
    price: 199,
    images: [
      {
        url: "https://picsum.photos/400/400?random=1",
        alt: "Rose satin scrunchie",
      },
    ],
  },
  {
    id: "SL-SCR-003",
    name: "Ivory Pearl Scrunchie",
    price: 229,
    images: [
      {
        url: "https://picsum.photos/400/400?random=2",
        alt: "Ivory pearl scrunchie",
      },
    ],
  },
  {
    id: "SL-SCR-004",
    name: "Lavender Silk Scrunchie",
    price: 249,
    images: [
      {
        url: "https://picsum.photos/400/400?random=3",
        alt: "Lavender silk scrunchie",
      },
    ],
  },
  {
    id: "SL-SCR-005",
    name: "Midnight Black Scrunchie",
    price: 189,
    images: [
      {
        url: "https://picsum.photos/400/400?random=4",
        alt: "Black silk scrunchie",
      },
    ],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(
    selectedProduct.images?.[0]?.url || null
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select a size and color before adding to cart", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to Cart", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `Thumbnail${index}`}
                className={`w-20 h-20 border object-cover cursor-pointer rounded-lg ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              {mainImage && (
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `Thumbnail${index}`}
                className={`w-20 h-20 border object-cover cursor-pointer rounded-lg ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right Side  */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            <p className="text-lg text-gray-600 line-through mb-1">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>

            <p className="text-xl text-gray-500 mb-2">
              $ {selectedProduct.price}
            </p>

            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Color: </p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-3 border-black"
                        : "border-gray-300"
                    } `}
                    style={{
                      backgroundColor: color.hex,
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">Size: </p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 rounded border ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity: </p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Product Details</h3>

              <table className="w-full text-left text-sm border-collapse">
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 font-medium">Category</td>
                    <td className="py-2">{selectedProduct.category}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-medium">Material</td>
                    <td className="py-2">{selectedProduct.material}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-medium">Care Instructions</td>
                    <td className="py-2">
                      <ul className="list-disc list-inside">
                        {selectedProduct.careInstructions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-center text-2xl font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
