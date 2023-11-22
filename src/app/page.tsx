import Result from "@/components/Result";
import Image from "next/image";
type SixGoals = {
  imgUrl: string;
  name: string;
};

const goals: SixGoals[] = [
  { imgUrl: `/goals-1.svg`, name: "天使圓夢計畫" },
  { imgUrl: `/goals-2.svg`, name: "天使圓夢計畫" },
  { imgUrl: `/goals-3.svg`, name: "天使圓夢計畫" },
  { imgUrl: `/goals-4.svg`, name: "天使圓夢計畫" },
  { imgUrl: `/goals-5.svg`, name: "天使圓夢計畫" },
  { imgUrl: `/goals-6.svg`, name: "天使圓夢計畫" },
];

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      {/* KV */}
      <div className='KV__block flex p-24 w-full'>
        <h1 className={" w-full"}>some slogan</h1>
      </div>

      {/* 願景 */}
      <div className='main__container'>
        <div className='center__box'>
          <h1 className='main__title'>願景</h1>
          <p>
            天使的目標是推廣志工服務，鼓勵人人參與，透過志願服務為社會貢獻自己的力量；舉辦教育學習課程，提升個人的生命價值和能力，使自己更好地服務他人；建構公益平台，促進資源共享和協作，讓更多的人參與公益事業，發揮更大的影響力；最終，發揮自己的天賦才能，幫助世界變得更美好。總體來說，天使的目標是透過自己的努力和貢獻，影響社會和改善世界，讓每個人都能擁有更美好的未來。
          </p>
        </div>
      </div>

      {/* goals */}
      <div className='main__container main__container--dark'>
        <div className='center__box'>
          <h1>六大目標</h1>
        </div>
        <div className='grid grid-cols-3 gap-8 w-full mt-[-50px] mb-20'>
          {goals.map((goal, idx: number) => (
            <div className='text-center' key={idx}>
              <div className='bg-white rounded-3xl p-10'>
                <Image
                  className='w-full'
                  src={goal.imgUrl}
                  width={100}
                  height={100}
                  alt='img'
                />
              </div>
              <button className='main__button relative top-[-28px]'>
                {goal.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* result */}
      <Result />

      {/* cta */}
      <div className='CTA'>
        <div className='center__box'>
          <div className='flex'>
            <div className='md:pr-12'>
              <h1>成為自己與他人生命中的天使</h1>
              <h3>成為自己與他人生命中的天使</h3>
            </div>
            <div>
              <button className='action__button-white'>
                捐款支持
                <Image
                  src={"/arrow.svg"}
                  alt='arrow'
                  width={100}
                  height={100}
                />
              </button>
              <button className='action__button-white'>
                成為志工
                <Image
                  src={"/arrow.svg"}
                  alt='arrow'
                  width={100}
                  height={100}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* partners */}
      <div className='main__container main__container--dark'>
        <div className='center__box'>
          <h1>公益夥伴</h1>
          <p className='!text-center'>
            天使的目標是推廣志工服務，鼓勵人人參與，透過志願
          </p>
        </div>
        <div className='grid grid-cols-3 gap-8 w-full mb-20'>
          <div className='bg-white rounded-3xl p-10'>
            <Image
              className='w-full'
              src={"/logo-wide.svg"}
              width={100}
              height={100}
              alt='img'
            />
          </div>
          <div className='bg-white rounded-3xl p-10'>
            <Image
              className='w-full'
              src={"/logo-wide.svg"}
              width={100}
              height={100}
              alt='img'
            />
          </div>
          <div className='bg-white rounded-3xl p-10'>
            <Image
              className='w-full'
              src={"/logo-wide.svg"}
              width={100}
              height={100}
              alt='img'
            />
          </div>
          <div className='bg-white rounded-3xl p-10'>
            <Image
              className='w-full'
              src={"/logo-wide.svg"}
              width={100}
              height={100}
              alt='img'
            />
          </div>
          <div className='bg-white rounded-3xl p-10'>
            <Image
              className='w-full'
              src={"/logo-wide.svg"}
              width={100}
              height={100}
              alt='img'
            />
          </div>
          <div className='bg-white rounded-3xl p-10'>
            <Image
              className='w-full'
              src={"/logo-wide.svg"}
              width={100}
              height={100}
              alt='img'
            />
          </div>
          <div className='bg-white rounded-3xl p-10'>
            <Image
              className='w-full'
              src={"/logo-wide.svg"}
              width={100}
              height={100}
              alt='img'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
