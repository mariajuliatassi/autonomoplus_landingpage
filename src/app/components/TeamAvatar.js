function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}


const SIZE = 80;

export default function TeamAvatar({ name, photo }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="rounded-full object-cover border-4 border-white shadow-md shadow-slate-200 shrink-0"
        style={{
          width: SIZE,
          height: SIZE,
          objectFit: "cover",
          borderRadius: "9999px",
        }}
      />
    );
  }

  return (
    <div
      className="rounded-full bg-gradient-to-br from-blue-600 via-sky-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-slate-200 shrink-0"
      style={{ width: SIZE, height: SIZE, fontSize: SIZE * 0.35 }}
    >
      {getInitials(name)}
    </div>
  );
}