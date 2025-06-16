export default function Card({ image, name }) {
  return (
    <div className="border rounded-xl p-4 shadow-md text-center h-105 flex flex-col justify-between">
      <img
        src={image}
        alt={name}
        className="mx-auto w-80 h-80 object-cover rounded-full"
      />
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
    </div>
  );
}
