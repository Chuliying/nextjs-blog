import Link from "next/link";
import React from "react";
import Image from "next/image";

type Pages = {
  pageName: string;
  pageEngName: string;
  url: string;
};

const pages: Pages[] = [
  {
    pageName: "關於我們",
    pageEngName: "about",
    url: "/about",
  },
  {
    pageName: "最新消息",
    pageEngName: "news",
    url: "/news",
  },
  {
    pageName: "天使存摺",
    pageEngName: "tava bank book",
    url: "/tava-bank-book",
  },
  {
    pageName: "捐款支持",
    pageEngName: "donation",
    url: "/donation",
  },
  {
    pageName: "志工故事",
    pageEngName: "stories",
    url: "/storybook",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className='flex'>
        <div>
          <Image style={{width: '320px', marginBottom: '45px'}} src={'/logo-white-simple.svg'} alt='logo' width={100} height={100} />
          {/* <h3>社團法人天使協會</h3> */}
          <p>台內團字第 00000000 號</p>
          <p className='mb-20'>衛部救字第 00000000 號</p>
          <p>成為自己與他人生命中的天使</p>
          <p>copyright</p>
        </div>
        <div>
          <h3>了解我們</h3>
          {pages.map((page, idx) => (
            <p key={idx}>
              <Link href={page.url}>{page.pageName}</Link>
            </p>
          ))}
        </div>
        <div>
          <h3>支持我們</h3>
          <p className='mb-20'>有你的支持，我們可以擴大改變。</p>
          <button className='action__button-white !ml-0' style={{transform: 'scale(0.7)'}}>
            捐款支持{" "}
            <Image src={"/arrow.svg"} alt='arrow' width={100} height={100} />
          </button>
        </div>
        <div>
          <h3>聯絡我們</h3>
          <p>台北市大同區承德路三段193號2樓</p>
          <p>0927 927 970</p>
          <p>mail@mail.com</p>
          <div className='social__box'>
            <div>fb</div>
            <div>ig</div>
            <div>yt</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
