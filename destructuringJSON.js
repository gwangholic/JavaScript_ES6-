var news = [
  {
    title: "sbs",
    imgurl: "http://static.naver.net/newsstand/2017/0313/article",
    newslist: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "Inventore, itaque culpa assumenda repudiandae ipsam iusto tempore esse facilis quam velit eum deserunt est reprehenderit perspiciatis!",
      "Autem labore voluptates porro ea!",
    ],
  },
  {
    title: "mbc",
    imgurl: "http://static.naver.net/newsstand/2017/0313/article",
    newslist: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "Inventore, itaque culpa assumenda repudiandae ipsam iusto tempore esse facilis quam velit eum deserunt est reprehenderit perspiciatis!",
      "Autem labore voluptates porro ea!",
    ],
  },
];

let [, mbc] = news;
let { title, imgurl } = mbc;
console.log(title, imgurl);

function getNewsList([, { newslist }]) {
  console.log(newslist);
}
getNewsList(news);

document.querySelector("div").addEventListener("click", function ({ target }) {
  console.log(target.tagName);
});
