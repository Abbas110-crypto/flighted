import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../Sidebar/Sidebar.module.css';

function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Sarfo</h1>
        <ul className={styles.list}>
          <li className={pathname === '/admin/dashboard/queries' ? styles.active : ''}>
            <Link href='./queries'>Contact Us</Link>
          </li>
          <li className={pathname === '/admin/dashboard/quotation' ? styles.active : ''}>
            <Link href='./quotation'>Get a quote</Link>
          </li>
          <li className={pathname === '/admin/dashboard/newsletter-applicant' ? styles.active : ''}>
            <Link href='./newsletter-applicant'>NewsLetter</Link>
          </li>
          <li className={pathname === '/admin/dashboard/languages' ? styles.active : ''}>
            <Link href='./languages'>Languages</Link>
          </li>
          <li className={pathname === '/admin/dashboard/blog' ? styles.active : ''}>
            <Link href='./blog'>Blogs</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
