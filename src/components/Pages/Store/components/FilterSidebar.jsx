import React from "react";

const FiltersSidebar = ({ selectedFilters, onFiltersChange }) => {
  const isChecked = (filterName, value) =>
    selectedFilters[filterName]?.includes(value);

  const toggleColor = (color) => {
    const currentColors = selectedFilters.color || [];
    const updatedColors = currentColors.includes(color)
      ? currentColors.filter((c) => c !== color)
      : [...currentColors, color];

    onFiltersChange({
      ...selectedFilters,
      color: updatedColors,
    });
  };

  return (
    <div className="w-80 bg-white flex flex-col shadow-md rounded-lg p-6 h-fit">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">FILTERS</h2>
      </div>

      {/* Cost Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Cost</h3>
        <div className="space-y-2">
          {["1500-4000", "4001-7000", "7001+"].map((costRange) => (
            <label key={costRange} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={isChecked("cost", costRange)}
                onChange={() => {
                  const current = selectedFilters.cost || [];
                  const updated = current.includes(costRange)
                    ? current.filter((c) => c !== costRange)
                    : [...current, costRange];
                  onFiltersChange({ ...selectedFilters, cost: updated });
                }}
              />
              <span>
                {costRange === "1500-4000"
                  ? "Rs. 1500-4000"
                  : costRange === "4001-7000"
                  ? "Rs. 4001-7000"
                  : "Rs. 7001+"}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Colour</h3>
        <div className="flex gap-2">
          {[
            { key: "red", bgClass: "bg-red-500" },
            { key: "blue", bgClass: "bg-blue-400" },
            { key: "yellow", bgClass: "bg-yellow-400" },
            { key: "green", bgClass: "bg-green-400" },
            { key: "yellow-dark", bgClass: "bg-yellow-600" },
          ].map(({ key, bgClass }) => {
            const isSelected = isChecked("color", key);
            return (
              <div
                key={key}
                onClick={() => toggleColor(key)}
                className={`w-8 h-8 rounded cursor-pointer ${bgClass} border-2 ${
                  isSelected ? "border-black" : "border-gray-200"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Design Templates */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Design templates</h3>
        <div className="space-y-2">
          {["2", "3", "3+"].map((dt) => (
            <label key={dt} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={isChecked("designTemplates", dt)}
                onChange={() => {
                  const current = selectedFilters.designTemplates || [];
                  const updated = current.includes(dt)
                    ? current.filter((d) => d !== dt)
                    : [...current, dt];
                  onFiltersChange({ ...selectedFilters, designTemplates: updated });
                }}
              />
              <span>{dt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Type</h3>
        <div className="space-y-2">
          {["Loafers", "Sneakers"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={isChecked("type", type)}
                onChange={() => {
                  const current = selectedFilters.type || [];
                  const updated = current.includes(type)
                    ? current.filter((t) => t !== type)
                    : [...current, type];
                  onFiltersChange({ ...selectedFilters, type: updated });
                }}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
        onClick={() =>
          onFiltersChange({
            cost: [],
            color: [],
            designTemplates: [],
            type: [],
          })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FiltersSidebar;
