/* 별 채우기 */
function fillstars(count) {
  const stars = document.querySelectorAll('.star');
  for (let index = 0; index < stars.length; index++) {
    const star = stars[index];
    if (index < count) {
      star.classList.add('filled');
      star.classList.remove('far');
    }
  }
}

function removestars() {
  const stars = document.querySelectorAll('.star');
  for (let index = 0; index < stars.length; index++) {
    const star = stars[index];
    star.classList.remove('filled');
    star.classList.add('far');
  }
}
/* 글자 갯수 조정 */
const content = document.querySelector('#content');
  const contentText = content.innerText;
  
  if (contentText.length > 100) {
    content.innerText = contentText.slice(0, 150) + '...';
  }


  /* 스크롤 내리면 배경 색 바뀜 */
  const header = document.querySelector('#header_box');
  const title = document.querySelector('.left_header_title');
  const sub = document.querySelector('.left_header_sub');
  const headerHeight = header.getBoundingClientRect().height;

  const headerBox = document.querySelector('#header_box');
  /* 스크롤 상태 확인 */
  let isScrolled = false;

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    // 스크롤 위치가 맨 위에 있으면 투명
    if (scroll === 0) {
      headerBox.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      title.style.color = 'white';
      sub.style.color = "white";
      isScrolled = false; // 적용해야 지속적으로 탐지 가능
    } else {
      if (!isScrolled) {
        headerBox.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // 스크롤이 내려갈 때 배경 색상 변경
        title.style.color = '#FF2E6E';
        sub.style.color = "black";
        isScrolled = true;
      }
    }
  });