import { Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold">
          <span className="text-[#111111]">Mind</span>
          <span className="text-[#D4AF37]">Core</span>
        </h1>

        <p className="text-sm text-gray-500">
          Where Learning Meets Intelligence.
        </p>
      </div>

      <button className="p-2 rounded-xl hover:bg-gray-100 transition">
        <Settings size={22} />
      </button>
    </header>
  );
}