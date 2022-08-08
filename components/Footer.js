import { Link } from 'gatsby';
import React from 'react';

import { Icon } from './Icon';
import { NavFooter } from './NavFooter';
import { NavLegal } from './NavLegal';
import { Newsletter } from './Newsletter';

const Footer = ({ showNewsletter = true }) => {
  return (
    <footer className="w-full px-4 xl:px-12 bg-substrateDark text-white font-body">
      {showNewsletter && <Newsletter layout="default" />}
      <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:pt-12 lg:pb-3 border-b-2 border-gray-600">
        <div className="w-52 lg:h-7 relative py-12 lg:p-0 transform transition-all duration-300 ease-in-out hover:opacity-50">
          <Link to="/">
            <Icon name="logo-white"></Icon>
          </Link>
        </div>
        <NavFooter />
      </div>
      <div className="h-auto pb-6 md:flex md:flex-row-reverse md:justify-between md:items-center">
        <NavLegal />
      </div>
    </footer>
  );
};

export { Footer };
