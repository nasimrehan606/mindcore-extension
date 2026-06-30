import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mt-5 flex items-center rounded-2xl border px-4 py-3">

      <Search size={18} className="text-gray-400 h-14
rounded-2xl
px-4" />

      <input
        className="ml-3 w-full outline-none"
        placeholder="Ask Rabi anything..."
      />

    </div>
  );
}