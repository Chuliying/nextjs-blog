import React from "react";
import Image from "next/image";
import Link from "next/link";

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

fetch("https://bankbook.tava.org.tw/api/posts?page=0")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link href={"/"}>
          <Image
            height={100}
            width={100}
            src={"/logo-wide.svg"}
            alt='tava logo'
          />
        </Link>
      </div>
      <nav>
        {pages.map((page, index) => (
          <div key={index}>
            <Link href={page.url}>
              <div>
                <h5>{page.pageName}</h5>
                <p>{page.pageEngName}</p>
              </div>
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
