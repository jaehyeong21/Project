var header = document.createElement('h2');
// document 객체의 createElement 메서드를 이용하여 <h2> 요소 생성
var textNode = document.createTextNode('Hello DOM');
// 동적으로 추가되는 text
header.appendChild(textNode);

document.body.appendChild(header);

// javascript 배열 다른 언어와 차이점
//배열 내부의 데이터 타입이 서로 다를 수 있다
//배열의 크기는 동적으로 변경될 수 있다