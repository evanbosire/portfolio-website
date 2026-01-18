import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h1 className="text-9xl font-extrabold text-primary mb-6 animate-fadeIn">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fadeInDelay1">
        Page Not Found
      </h2>
      <p className="text-muted-foreground text-center max-w-md mb-8 animate-fadeInDelay2">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="cosmic-button px-8 py-4 rounded-full font-semibold animate-fadeInDelay3"
      >
        Go Back Home
      </Link>

      {/* Optional subtle animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .animate-fadeInDelay1 { animation: fadeIn 1s ease 0.3s forwards; opacity: 0; }
        .animate-fadeInDelay2 { animation: fadeIn 1s ease 0.6s forwards; opacity: 0; }
        .animate-fadeInDelay3 { animation: fadeIn 1s ease 0.9s forwards; opacity: 0; }
      `}</style>
    </section>
  );
};
