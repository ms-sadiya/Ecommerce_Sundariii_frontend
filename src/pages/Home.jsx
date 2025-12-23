import React from 'react'
import Hero from '../components/layout/Hero'
import HairAccessories from '../components/products/HairAccessories'
import NewArrival from '../components/products/NewArrival';
import ProductDetails from'../components/products/ProductDetails';
import ProductGrid from '../components/products/ProductGrid';
import FeaturedCollection from '../components/products/FeaturedCollections'
import FeatureSection from '../components/products/FeatureSection';

const placeholderProducts = [
  {
    id: "SL-SCR-002",
    name: "Rose Satin Scrunchie",
    collection: "Scrunchies",
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
    collection: "Scrunchies",
    price: 229,
    images: [
      {
        url: "https://picsum.photos/400/400?random=2",
        alt: "Ivory pearl scrunchie",
      },
    ],
  },
  {
    id: "SL-CLP-004",
    name: "Floral Claw Clip",
    collection: "Claw Clips",
    price: 299,
    images: [
      {
        url: "https://picsum.photos/400/400?random=3",
        alt: "Floral claw clip",
      },
    ],
  },
  {
    id: "SL-BOW-005",
    name: "Velvet Hair Bow",
    collection: "Bow Accessories",
    price: 179,
    images: [
      {
        url: "https://picsum.photos/400/400?random=4",
        alt: "Velvet hair bow",
      },
    ],
  },
  {
    id: "SL-PIN-006",
    name: "Golden Hair Pins Set",
    collection: "Hair Pins",
    price: 159,
    images: [
      {
        url: "https://picsum.photos/400/400?random=5",
        alt: "Golden hair pins set",
      },
    ],
  },
  {
    id: "SL-EAR-007",
    name: "Minimal Pearl Earrings",
    collection: "Earrings",
    price: 349,
    images: [
      {
        url: "https://picsum.photos/400/400?random=6",
        alt: "Minimal pearl earrings",
      },
    ],
  },
  {
    id: "SL-BRC-008",
    name: "Delicate Gold Bracelet",
    collection: "Bracelets",
    price: 399,
    images: [
      {
        url: "https://picsum.photos/400/400?random=7",
        alt: "Delicate gold bracelet",
      },
    ],
  },
  {
    id: "SL-ANK-009",
    name: "Silver Charm Anklet",
    collection: "Anklets",
    price: 279,
    images: [
      {
        url: "https://picsum.photos/400/400?random=8",
        alt: "Silver charm anklet",
      },
    ],
  },


]

const Home = () => {
  return (
    <div>
      <Hero />
      <HairAccessories />
      <NewArrival />

      {/* Best Sellers */}
      <h2 className="text-3xl text-center">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className='text-3xl text-center font-bold mb-4'>
          Trending Accessories
        </h2>
        <ProductGrid products= {placeholderProducts} /> 
      </div>

      <FeaturedCollection /> 
      <FeatureSection />
    </div>
  )
}

export default Home
