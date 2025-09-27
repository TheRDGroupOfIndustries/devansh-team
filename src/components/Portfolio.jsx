"use client";
import React, { useState, useEffect } from "react";
import Protfoliotry from "./Protfoliotry";
import { client } from "../sanity/lib/client";

const Portfolio = () => {
  // 🔹 Remote portfolio items (from Sanity)
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
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-8"></div>
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

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                <i className="ri-add-line mr-2"></i>Load More Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
