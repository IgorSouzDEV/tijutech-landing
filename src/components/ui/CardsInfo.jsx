export default function CardsInfo({icon: Icon, title, description}) {
  return (
    <div className="flex flex-col items-center p-6 m-4 min-w-100 bg-white rounded-lg shadow-md max-w-sm hover:shadow-xl transition-shadow duration-300">
      {Icon && <Icon className="text-green-600 text-4xl mb-4 hover:text-green-800 transition-color duration-500" />}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
