import "react";
import { ContactForm } from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Xenofon Gkioka
        </h1>
        <p className="text-lg text-slate-600">
          Xenofon Gkioka || Software Engineer Portfolio
        </p>
      </header>

      <main className="w-full flex-grow flex items-center justify-center">
        <ContactForm />
      </main>

      <footer className="mt-8 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Xenofon Gkioka. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
