const quotes =[
  {
    quote : "많이 보고 많이 겪고 많이 공부하는 것은 배움의 세 기둥이다.",
    author : "Benjamin Disraeli",
  },
  {
    quote : "학생이 되기를 멈춘 자는 한 번도 학생인 적이 없었던 자이다.",
    author : "조르지오 일리스",
  },
  {
    quote : "난 항상 아버지의 조언을 따랐다. 첫째, 언행을 일치시켜라. 둘째, 무심코 상대방을 모욕하지 말라. 그러므로 내가 누군가를 모욕할 때, 그것은 분명 의도적인 것이다. 셋째, 괜히 시비거리를 찾아다니지 말라.",
    author : "John Wayne",
  },
  {
    quote : "행동은 말보다 더 새빨간 거짓말을 한다.",
    author : "Carolyn Wells",
  },
  {
    quote : "공훈련이 전부다. 복숭아도 한때는 쓴 씨앗이었고, 대학교육을 받으면 꽃배추도 양배추에 불과하다.",
    author : "Mark Twain",
  },
  {
    quote : "어떤 것을 완전히 알려거든 그것을 다른 이에게 가르쳐라.",
    author : "Tryon Edwards",
  },
  {
    quote : "누구나 다 읽기를 배우게 하면 하면 결국 글쓰기 뿐 아니라 사고도 망쳐버릴 것이다",
    author : "Friedrich Nietzsche",
  },
  {
    quote : "우리가 해야할 일은 끊임없이 호기심을 갖고 새로운 생각을 시험해보고 새로운 인상을 받는 것이다.",
    author : "Walter Pater",
  },
  {
    quote : "공부벌레들에게 잘 해주십시오. 나중에 그 사람 밑에서 일하게 될 수도 있습니다.",
    author : "Bill Gates",
  },
  {
    quote : "할 수 있는 자는 행한다. 할 수 없는 자는 가르친다",
    author : "George Bernard Shaw",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;