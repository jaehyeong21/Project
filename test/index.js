const ratingContainer = document.querySelector("#rating");
const stars = ratingContainer.querySelector("#stars");

// 중단점을 배열로 관리하기
const stopPointPixel = [0, 30, 60, 100, 130, 170, 200, 240, 270, 310, 340];
let widthPixel = null;
ratingContainer.addEventListener("mousemove", (e) => {
  const offsetX = e.offsetX;
  let width = 0;

  for(let i = stopPointPixel.length; i >= 0; i--){
    if(offsetX > stopPointPixel[i-1] + 15){
      width = stopPointPixel[i];
      break;
    }
  }
  stars.style.width = width + "px";
});

ratingContainer.addEventListener("click", ()=>{
  widthPixel = stars.style.width;
  console.log("widthPixel ", widthPixel );
});

ratingContainer.addEventListener("mouseleave", () => {
  stars.style.width = widthPixel;
})