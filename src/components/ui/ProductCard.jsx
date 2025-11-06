export default function Cards({ title, image, description }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transform-scale duration-300 overflow-hidden m-4 group">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          loading="lazy"
          className="w-full h-112 object-cover hover:scale-105 transform-scale duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mt-4 text-start">{title}</h3>
        <p className="text-gray-600 mt-2 text-start">{description}</p>
      </div>
    </div>
  );
}
