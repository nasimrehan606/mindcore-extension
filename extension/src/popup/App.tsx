import Header from "../components/layout/Header";
import WelcomeCard from "../components/cards/WelcomeCard";
import SearchBar from "../components/inputs/SearchBar";
import FeatureCard from "../components/cards/FeatureCard";

import {
  MessageCircle,
  BookOpen,
  FileText,
  ClipboardCheck,
} from "lucide-react";

function App() {
  return (
    <main className="w-[380px] min-h-[600px] bg-white p-6 ">

      <Header />

      <WelcomeCard />

      <SearchBar />

      <div className="grid grid-cols-2 gap-4 mt-6">

        <FeatureCard
          title="Chat"
          icon={<MessageCircle size={24} />}
        />

        <FeatureCard
          title="Reader"
          icon={<BookOpen size={24} />}
        />

        <FeatureCard
          title="Summary"
          icon={<FileText size={24} />}
        />

        <FeatureCard
          title="Quiz"
          icon={<ClipboardCheck size={24} />}
        />

      </div>

    </main>
  );
}

export default App;