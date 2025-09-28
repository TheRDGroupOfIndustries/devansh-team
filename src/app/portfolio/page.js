"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Protfoliotry from "@/components/Protfoliotry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    client
      .fetch(`*[_type == "portfolio"]{_id, title, description, category, "image": image.asset->url}`)
      .then((data) => {
        if (!mounted) return;
        // map to shape expected by Protfoliotry (image, title, description, category)
        const mapped = data.map((d) => ({
          image: d.image || "",
          title: d.title || "",
          description: d.description || "",
          category: d.category || "",
        }));
        setPortfolioItems(mapped);
      })
      .catch((err) => {
        console.error("Failed fetching portfolio from Sanity:", err);
      })
      .finally(() => setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  // 🔹 Filter state
  const [filter, setFilter] = useState("all");

  // 🔹 Filter logic
  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  if (loading) return <div className="text-center py-10">Loading portfolio...</div>;

  return (
      <div>
        <Navbar />
      <section id="portfolio" className="py-20 bg-white min-h-screen mt-6">
            {/* <Link href="/" className="bg-gradient-to-r from-red-600 to-blue-600 rounded-full shadow-lg text-center text-white px-4 py-2 font-semibold tracking-tight absolute top-20 left-10">
            Back To Home
          </Link> */}
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our collection of captured moments, from intimate
                weddings to grand celebrations, each telling its unique story.
              </p>
            </div>

            {/* 🔹 Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["all", "wedding", "corporate", "events", "portraits"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      filter === cat
                        ? "bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat === "all"
                      ? "All Work"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                )
              )}
            </div>

            {/* 🔹 Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Protfoliotry
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
