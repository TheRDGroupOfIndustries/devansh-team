export default function ServiceCard({ icon, title, description, features }) {
  return (
    <div
      className="group bg-white rounded-2xl p-8 shadow-md transition-transform duration-300 
                 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl relative"
    >
      {/* Icon */}
      {icon}

      {/* Title with gradient hover */}
      <h3
        className="mt-4 mb-2 font-bold text-xl text-gray-800 
                   transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text 
                   group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-500"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-gray-700">{description}</p>

      {/* Features */}
      <ul className="mb-2 space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-gray-600 transition-colors group-hover:text-gray-800"
          >
            <span
              className="inline-flex items-center justify-center w-5 h-5 
                         bg-green-100 text-green-600 rounded-full text-xs font-bold"
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Gradient underline at the end of card */}
      <span
        className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-red-500 to-blue-500
                   transition-all duration-300 group-hover:w-full"
      ></span>
    </div>
  );
}
