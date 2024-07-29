'use client';
import Link from 'next/link';
import React from 'react';
import '../css/header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="blog">
        <Link href="/Homepage">Blog</Link>
      </div>
      <div className="login">
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;
