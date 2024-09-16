import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

const FooterA: FC = () => {
  return (
    <footer className="bg-gray-100 p-6 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row ">
        <div className="mb-4 mr-[15vw] md:mb-0">
          <h3 className="mb-2 font-bold">การสนับสนุน/ช่องทางติดต่อ</h3>
          <ul className="space-y-1">
            <li className=" hover:underline ">
              <Link href="https://pantip.com/about/privilege">
                สิทธิ์การใช้งานของสมาชิก
              </Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://pantip.com/about/contact">
                ติดต่อทีมงาน Pantip
              </Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://pantip.com/advertising">ติดต่อลงโฆษณา</Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://pantip.com/about/job">ร่วมงานกับ Pantip</Link>
            </li>
          </ul>
        </div>

        <div className="mb-4 mr-[15vw] md:mb-0">
          <h3 className="mb-2 font-bold">ช่องทางโซเชียล</h3>
          <ul className="space-y-1">
            <li className=" hover:underline ">
              <Link href="https://www.facebook.com/pantipdotcom/">
                Facebook
              </Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://twitter.com/Pantip1996">twitter</Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://www.youtube.com/@pantipchannel">Youtube</Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://www.instagram.com/pantipdotcom">
                Instagram
              </Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://www.tiktok.com/@pantip1996">TikTok</Link>
            </li>
          </ul>
        </div>

        <div className="mb-4 md:mb-0">
          <h3 className="mb-2 font-bold">Pantip/เว็บในเครือ</h3>
          <ul className="space-y-1">
            <li className=" hover:underline ">
              <Link href="https://bloggang.com/">Bloggang</Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://www.pantipmarket.com/">Pantipmarket</Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://pantown.com/">Pantown</Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://maggang.com/">Maggang</Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://pantip.com/about/privacy">
                นโยบายความเป็นส่วนตัว
              </Link>
            </li>
            <li className=" hover:underline ">
              <Link href="https://pantip.com/about/privacy">
                Download App Pantip
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" mt-6  flex border-t border-gray-300 pt-4 text-center md:text-left">
        <p className="flex items-center justify-center ">
          © 2024 Internet Marketing co., ltd
          <Link
            href="https://pantip.com/about/tos"
            className="ml-5 hover:underline"
          >
            {' '}
            กฎกติกา
            {' '}
          </Link>
          <Link
            href="https://pantip.com/advertising"
            className="ml-1 hover:underline"
          >
            {' '}
            ลงโฆษณา
            {' '}
          </Link>
          <Link
            href="https://pantip.com/about/job"
            className="ml-1 hover:underline"
          >
            {' '}
            สมัครงาน
            {' '}
          </Link>
          <Link
            href="https://pantip.com/about/contact"
            className="ml-1 hover:underline"
          >
            {' '}
            ติดต่อทีมงาน
            {' '}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default FooterA;
