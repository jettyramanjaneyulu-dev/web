"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import {
  Search,
  Download,
  X,
  PackageSearch,
} from "lucide-react";

const filters = [
  "All",
  "SR",
  "CR",
  "DR",
  "EC",
  "MUPS",
  "IR",
  "ER",
  "Combo",
  "Nutra",
];

export default function ProductsListPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" ||
        product.category === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200">

      {/* ================= HERO ================= */}
      <section className="relative py-24 text-center">
        <div className="max-w-4xl mx-auto px-6 bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-white/40 py-16">
          <h1 className="text-5xl font-extrabold text-pink-600 uppercase tracking-wide">
            Product Portfolio
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Precision-engineered pharmaceutical pellets, advanced
            release systems, combination formulations, and
            nutraceutical beadlets.
          </p>
        </div>
      </section>

      {/* ================= CONTROLS ================= */}
      <section className="sticky top-0 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col xl:flex-row gap-6 items-center justify-between bg-white/70 border border-white/40 rounded-2xl shadow-lg px-6 py-5">

            {/* Search */}
            <div className="relative w-full xl:w-56">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500 transition"
                  aria-label="Clear search"
                  type="button"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <input
                type="text"
                placeholder="Search product name…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  pl-12 pr-10
                  py-3
                  rounded-full
                  border border-gray-300
                  bg-white/80
                  text-black
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-pink-400
                "
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all
                    ${
                      activeFilter === filter
                        ? "bg-pink-500 text-white border-pink-500 shadow-md scale-105"
                        : "bg-white/70 border-gray-300 text-gray-700 hover:border-pink-400 hover:text-pink-500"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* PDF */}
            <a
              href="/pdf/nami-products.pdf"
              className="flex items-center gap-2 bg-gray-900/90 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition shadow-md"
            >
              <Download className="w-4 h-4" />
              Product PDF
            </a>
          </div>

          {/* Result Count */}
          <div className="mt-4 text-sm text-gray-600 text-center xl:text-right">
            Showing{" "}
            <span className="font-bold text-gray-800">
              {filteredProducts.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-800">
              {products.length}
            </span>{" "}
            products
          </div>
        </div>
      </section>

      {/* ================= TABLE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden">

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-pink-50/90 backdrop-blur">
                <tr>
                  <th className="p-5 text-left font-bold text-gray-800 w-20">
                    #
                  </th>
                  <th className="p-5 text-left font-bold text-gray-800">
                    Product Name
                  </th>
                  <th className="p-5 text-left font-bold text-gray-800">
                    Strength
                  </th>
                  <th className="p-5 text-left font-bold text-gray-800">
                    Category
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr
                    key={index}
                    className="
                      border-b
                      even:bg-white/40
                      hover:bg-pink-50/60
                      transition
                    "
                  >
                    <td className="p-5 font-bold text-gray-500">
                      {index + 1}
                    </td>

                    <td className="p-5 font-semibold text-gray-900">
                      {product.name}
                    </td>

                    <td className="p-5 text-gray-700">
                      {product.strength || "—"}
                    </td>

                    <td className="p-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-700">
                        {product.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredProducts.length === 0 && (
              <div className="py-24 text-center text-gray-500">
                <PackageSearch className="mx-auto w-12 h-12 text-pink-300 mb-4" />
                <p className="text-lg font-semibold">
                  No products found
                </p>
                <p className="text-sm mt-2">
                  Try adjusting search keywords or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 text-center py-20 px-6">
            <h2 className="text-4xl font-extrabold text-pink-600 mb-6">
              Request Specifications & Samples
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              Get detailed specifications, compatibility
              studies, and customized formulation support
              directly from our technical experts.
            </p>
            <a
              href="/contact"
              className="inline-block bg-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-lg"
            >
              Request Specifications
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
