import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brandName: string;
  brandIcon?: React.ReactNode;  
  links: NavLink[];             
}

const Navbar: React.FC<NavbarProps> = ({ brandName, brandIcon, links }) => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-black font-bold text-2xl ml-5 mt-2 flex items-center">
          {brandIcon && <div className="mr-2 mt-1 text-2xl">{brandIcon}</div>}
          {brandName}
        </div>

        {/* Links Section */}
        <ul className="flex space-x-12 text-sm mr-12 text-black">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="relative hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
