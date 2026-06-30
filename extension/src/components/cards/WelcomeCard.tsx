export default function WelcomeCard() {
  return (
    <div className="rounded-3xl
p-6
min-h-[170px] shadow-md bg-gradient-to-br from-black via-red-700 to-yellow-500 text-white">

      <h2 className="text-xl font-semibold">
        👋 Hello, I'm Rabi
      </h2>

      <p className="mt-2 text-sm text-gray-100">
        Your AI learning companion. Ask me questions, summarize documents,
        generate quizzes, and master any subject.
      </p>

    </div>
  );
}