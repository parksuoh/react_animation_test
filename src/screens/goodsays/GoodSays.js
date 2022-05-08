import React, { useEffect, useState } from 'react'
import LoadingSpin from '../../components/lodingSpin/LoadingSpin';
import SaysCard from '../../components/saysCard/SaysCard';
import './GoodSays.css';

const GoodSays = ({setToggle}) => {
  const [goodSayList, setGoodSayList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(function(){
      setGoodSayList([...goodSayList,
        '지옥을 걷고 있다면 계속해서 걸어가라.',
        '사람들은 의욕이 끝까지 가질 않는다고 말한다. 뭐, 목욕도 마찬가지 아닌가? 그래서 매일 하는거다. 목욕도, 동기부여도.',
        '당신이 지금 달린다면 패배할 가능성이 있다.하지만, 당신이 달리지 않는다면, 당신은 이미 진 것이다.',
        '진정한 프로는 자신에게 전력을 다하게 하는 프로젝트에 힘을 쏟을 것이다. 자신을 가장 깊은 물 속에 빠트리고 가장 깊은 무의식 속으로 끌고 갈 과제를 수행한다.',
        '승자는 한번 더 시도해본 패자다.',
        '남들보다 더 잘하려고 고민하지 마라. 지금의 나보다 잘하려고 애쓰는 게 더 중요하다.',
        '내일 일을 걱정하지 말라 내일 일은 내일 스스로가 맞을 것이니 그날의 괴로움은 그날로 족하다.',
        '아무도 산에 걸려 넘어지진 않는다. 당신을 휘청이게 하는 것은 모두 작은 조약돌 뿐이다. 당신 길에 놓여있는 모든 조약돌들을 지나가라. 그럼 산을 넘었다는 것을 깨닫게 될 것이다.',
        '비록 아무도 과거로 돌아가 새 출발을 할 순 없지만, 누구나 지금 시작해 새로운 엔딩을 만들 수 있다.'
      ])
      setLoading(false);
    }, 1500);

  }, [])

  return (
    <div className='goodsayscont' onClick={() => setToggle(false)}>
      {loading ?  <LoadingSpin /> : goodSayList.map((item, index) => <SaysCard key={index} text={item} />) }
    </div>
  )
}

export default GoodSays