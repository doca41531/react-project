import { useEffect, useState } from 'react';
import './App.css';

/* 
 함수형 컴포넌트 
 state, lifeCycle 관련 기능사용 불 가능하다 하지만 hook을 통해 사용 가능
 메모리 자원을 클래스형 컴포넌트보다 조금 덜 사용한다.
 컴포넌트 선언이 편하다.
*/
function App() {
  const [sec, setsec] = useState(0);
  useEffect(() => {
    // 마운트 : 컴포넌트가 최초로 렌더링을 거칠 때 거치는 과정이다. props와 state가 변경될 때는 마운트 과정을 거치지 않는다.
    const id = setInterval(() => {
      setsec(s => s + 1);
    }, 1000);
    return () => clearInterval(id);  //언마운트 : 컴포넌트가 삭제될떄 거치는 과정
  }, []); 
  return (
   <div>
    <h1>웹사이트를 이용 하신지 {sec}초 지나셨습니다 </h1>
   </div>
  );
}
/* 
  클래스형 컴포넌트 
  state, lifeCycle 관련 기능사용 가능하다.
  메모리 자원을 함수형 컴포넌트보다 조금 더 사용한다.
  임의 메서드를 정의할 수 있다.

  특징: class 키워드를 쓴다
        extants Component를 사용해 Component를 상속받아준다
        render() 메소드가 반드시 있어야한다.

  class App extants Component{
    render() {
      내용
    }
  }

  */
export default App;