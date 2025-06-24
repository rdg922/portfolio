export default function Footer() {
  return (
    <div className="relative z-10 py-16 px-8 border-t-2 border-dotted border-gray-400 bg-white/30">
      {/* Footer background shapes */}
      <div className="absolute top-8 left-1/4 w-24 h-24 bg-cyan-400 border-3 border-black rotate-45 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-60"></div>
      <div className="absolute bottom-4 right-1/3 w-32 h-16 bg-purple-400 border-3 border-black -rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-50"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="font-mono text-sm text-gray-600 bg-white/80 inline-block px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p>made by rohit dasgupta, with love</p>
          {/* <p className="mt-2 opacity-60">
            please report any bugs or features here
          </p> */}
        </div>
      </div>
    </div>
  );
}
