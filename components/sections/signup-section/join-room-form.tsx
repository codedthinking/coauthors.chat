"use client";

export function JoinRoomForm() {
  return (
    <div className="w-[578px] h-[320px] bg-white rounded-lg border border-gray-200 p-8 shadow-lg flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Allan"
          className="w-full h-12 px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="allansmith@university.edu"
          className="w-full h-12 px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button className="w-full h-12 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 text-white font-semibold hover:opacity-90 transition-opacity">
        Join room
      </button>
    </div>
  );
}
