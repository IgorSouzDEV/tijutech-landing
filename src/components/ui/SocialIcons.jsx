export default function ContactCards({ icon: Icon, socialUrl, title}) {
  return (
    <div className="text-green-500 text-4xl p-2 hover:text-green-600 rounded-lg bg-green-200/60 transition-color duration-500">
      <a href={socialUrl} target="_blank" rel="noopener noreferrer" aria-label={title}>
        {Icon && (
          <Icon className="text-green-600 text-4xl hover:text-green-800 transition-color duration-500" />
        )}
      </a>
    </div>
  );
}
