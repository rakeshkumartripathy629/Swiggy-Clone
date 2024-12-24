export function FoodCard({ id, image, title }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"  // Ensure the image is circular and covers the area
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}
