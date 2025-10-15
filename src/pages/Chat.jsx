import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { Send, User, Calendar } from "lucide-react";
import Footer from "../components/Footer";

const contacts = [
  { name: "Tutor Luna", lastMsg: "Olá! Que bom que se interessou pela Luna 🐾", online: true },
  { name: "Tutor Thor", lastMsg: "Bom dia! Vamos marcar a adoção?", online: false },
  { name: "Tutor Maya", lastMsg: "Oi! Ela é muito carinhosa.", online: true },
];

const MESSAGE_CHAR_LIMIT = 500;

export default function MewtchChat() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState([
    { from: "tutor", text: selectedContact.lastMsg, time: "09:30" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const finalText = trimmed.slice(0, MESSAGE_CHAR_LIMIT);

    setMessages([...messages, { from: "user", text: finalText, time: `${hours}:${minutes}` }]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header original do site */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 flex flex-col bg-white shadow-lg border-r border-gray-200">
          {/* Banner minimalista */}
          <div className="p-4 bg-orange-50 flex items-center justify-center">
            <span className="text-orange-600 font-medium text-sm">
              🐾 Converse e agende encontros com tutores!
            </span>
          </div>

          {/* Lista de contatos */}
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {contacts.map((contact, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedContact(contact);
                  setMessages([{ from: "tutor", text: contact.lastMsg, time: "09:30" }]);
                }}
                className={`flex items-center gap-3 p-3 cursor-pointer rounded-xl transition-all duration-200 hover:bg-orange-50 ${
                  selectedContact.name === contact.name ? "bg-orange-100 shadow-inner" : ""
                }`}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {contact.name[0]}
                  </div>
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-semibold text-gray-900 truncate">{contact.name}</span>
                  <span className="text-gray-500 text-sm truncate">{contact.lastMsg}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Principal */}
        <main className="flex-1 flex flex-col">
          {/* Header do Chat */}
          <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <User className="w-12 h-12 text-orange-500" />
              <span className="font-bold text-lg text-gray-900">{selectedContact.name}</span>
            </div>
            <span className={`text-sm font-medium ${selectedContact.online ? "text-green-500" : "text-gray-400"}`}>
              {selectedContact.online ? "Online" : "Offline"}
            </span>
          </div>

          {/* Corpo do Chat */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[65%] relative break-words whitespace-pre-wrap p-5 ${
                  msg.from === "user"
                    ? "self-end bg-orange-500 text-white rounded-l-2xl rounded-tr-2xl shadow-md max-w-xl"
                    : "self-start bg-white text-gray-900 rounded-r-2xl rounded-tl-2xl shadow-sm max-w-xl"
                }`}
              >
                {msg.text}
                <span className="text-[10px] text-gray-200 absolute bottom-1 right-2">
                  {msg.time}
                </span>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>

          {/* Input do Chat */}
          <div className="p-4 border-t border-gray-200 bg-white flex gap-3">
            <textarea
              rows={1}
              placeholder="Escreva uma mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              maxLength={MESSAGE_CHAR_LIMIT}
              className="flex-1 border border-gray-300 rounded-3xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm hover:shadow-md"
            />
            <button
              onClick={handleSend}
              className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full transition shadow-lg hover:scale-110"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
