export default function ContactCards({icon: Icon, title, description, description2}) {
    return (
        <div className="flex flex-row text-center justify-start min-w-90 mb-4 bg-white rounded-lg shadow-md max-w-sm hover:shadow-xl transition-shadow duration-300 p-4 gap-3 items-center">
            {Icon && <Icon className="text-green-500 text-4xl p-2 hover:text-green-600 rounded-lg bg-green-200/60 transition-color duration-500" />}
            <div className="text-start">
                <h4 className="text-start text-lg font-semibold mb-2">{title}</h4>
                <p className="text-gray-600">{description}</p>
                <p className="text-gray-600">{description2}</p>
            </div>
        </div>
    );
}