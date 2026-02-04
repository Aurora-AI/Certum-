
export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white py-24 px-12 border-t border-white/10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Col 1 */}
        <div className="flex flex-col gap-4">
          {["Work", "Studio", "News"].map((item) => (
            <h4 key={item} className="text-xl font-medium cursor-pointer hover:text-white/70 transition-colors">
              {item}
            </h4>
          ))}
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-medium mb-4">Contact</h4>
          <p className="text-gray-400">hello@certum.prime</p>
          <p className="text-gray-400">+55 11 99999-9999</p>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">
            Aurora Avenue 8<br />
            São Paulo, SP<br />
            Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
