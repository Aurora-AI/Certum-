import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h2 className="font-display text-8xl md:text-9xl text-[#C9A227] opacity-80">CERTUM</h2>
          <p className="mt-4 font-['Inter'] text-sm tracking-widest uppercase text-gray-400">
            Private Wealth Architecture
          </p>
        </div>

        <div className="mt-10 md:mt-0 flex flex-col gap-2 text-right">
          <a href="#" className="font-['Inter'] text-sm uppercase hover:text-[#C9A227] transition-colors">Contact</a>
          <a href="#" className="font-['Inter'] text-sm uppercase hover:text-[#C9A227] transition-colors">Legal</a>
          <a href="#" className="font-['Inter'] text-sm uppercase hover:text-[#C9A227] transition-colors">Client Login</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;