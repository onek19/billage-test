const questions = [
    {
      id: 1,
      content: {
        imgsrc : '/images/q1.png',
        question: '동네 책방에 들어간 당신,<br>가장 먼저 보이는 것은?',
        options: [
          { id: 1, title: '재미나게 토론중인 독서모임' },
          { id: 2, title: '가지런히 정리된 책들' },
        ],
      },
    },
    {
      id: 2,
      content: {
        imgsrc : '/images/q2.png',
        question: '나는 이럴 때 책을 찾는다',
        options: [
          { id: 1, title: '지친 마음을 위로 받고 싶을 때' },
          { id: 2, title: '몰랐던 지식을 얻어가고 싶을 때' },
        ],
      },
    },
    {
      id: 3,
      content: {
        imgsrc : '/images/q3.png',
        question: '서점에서 마음에<br>쏙 드는 책을 발견하면?',
        options: [
          { id: 1, title: '망설이지 않고 바로 구매한다' },
          { id: 2, title: '일단 메모장에 적어 둔다' },
        ],
      },
    },
    {
      id: 4,
      content: {
        imgsrc : '/images/q4.png',
        question: '나를 주인공으로 한<br>영화를 만든다면?',
        options: [
          { id: 1, title: '로맨틱 코미디' },
          { id: 2, title: 'SF 판타지물' },
        ],
      },
    },
    {
      id: 5,
      content: {
        imgsrc : '/images/q5.png',
        question: '지금 책을 편 당신,<br>어디까지 읽을까?',
        options: [
          { id: 1, title: '한번 폈으면 끝까지 읽어야지!' },
          { id: 2, title: '일단 읽으면서 생각해보지 뭐' },
        ],
      },
    },
    {
      id: 6,
      content: {
        imgsrc : '/images/q6.png',
        question: '사람들과 모인 자리에서 나는?',
        options: [
          { id: 1, title: '적당히 분위기를 맞추며 함께 있는다' },
          { id: 2, title: '사람들이 나를 가만히 내버려두지 않는다' },
        ],
      },
    },
    {
      id: 7,
      content: {
        imgsrc : '/images/q7.png',
        question: '내게 최고의 칭찬은?',
        options: [
          { id: 1, title: '넌 정말 똑똑하고 믿음직해' },
          { id: 2, title: '넌 정말 착하고 다정해' },
        ],
      },
    },
    {
      id: 8,
      content: {
        imgsrc : '/images/q8.png',
        question: '조별과제를 하는데<br>팀에 프리라이더가 있을 때 나는?',
        options: [
          { id: 1, title: '친구들한테 투덜투덜 하소연한다' },
          { id: 2, title: '혼자서 분을 삭히며 마음을 진정시킨다' },
        ],
      },
    },
    {
      id: 9,
      content: {
        imgsrc : '/images/q9.png',
        question: '"책 읽다 네 생각이 났어"<br>라며 친구에게 연락이 왔다.<br>당신의 반응은? ',
        options: [
          { id: 1, title: '우와! 그게 무슨 책인데?' },
          { id: 2, title: '고마워, 감동이야~ :)' },
        ],
      },
    },
    {
      id: 10,
      content: {
        imgsrc : '/images/q10.png',
        question: '내일 여행을 가는 당신!',
        options: [
          { id: 1, title: '내일 컨디션을 위해 잠부터 잔다' },
          { id: 2, title: '미리미리 짐부터 챙겨 놓는다' },
        ],
      },
    },
  ];

  const scores = {
    1: {
        1: {
        //  e     i     f     t     p     j
          1: 5, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
        },
        2: {
          1: 0, 2: 5, 3: 0, 4: 0, 5: 0, 6: 0
        },
      },
    2: {
      1: {
        1: 0, 2: 0, 3: 5, 4: 0, 5: 0, 6: 0
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 5, 5: 0, 6: 0
      },
    },
    3: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 5, 6: 0
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 5
      },
    },
    4: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
      },
    },
    5: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 5
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 5, 6: 0
      },
    },
    6: {
      1: {
        1: 0, 2: 5, 3: 0, 4: 0, 5: 0, 6: 0
      },
      2: {
        1: 5, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
      },
    },
    7: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 5, 5: 0, 6: 0
      },
      2: {
        1: 0, 2: 0, 3: 5, 4: 0, 5: 0, 6: 0
      },
    },
    8: {
      1: {
        1: 5, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
      },
      2: {
        1: 0, 2: 5, 3: 0, 4: 0, 5: 0, 6: 0
      },
    },
    9: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 5, 5: 0, 6: 0
      },
      2: {
        1: 0, 2: 0, 3: 5, 4: 0, 5: 0, 6: 0
      },
    },
    10: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 5, 6: 0
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 5
      },
    },
  };

  const results = [
    {
      id: 1,
      partner : 7,
      content: {
        name: '파티의 중심,<br> 나는야 인간 미러볼',
        imgsrc : '/images/type1.png',
        thumbnail : '/images/thum1.png',
        hashtag : '#분위기메이커 #투머치토커 #자유로운영혼<br>#재미를찾아서 #다같이읽자',
        description : '∙ 사람들과 함께 있을 때 에너지가 충전되는 당신! 모임을 뒤집어놓는 특유의 친화력으로 분위기 메이커 역할을 담당해요.<br><br>∙ 재잘재잘 이야기하는 것을 좋아하는 수다쟁이! 혹시... \'투머치 토커\'라는 별명이 있지는 않으신가요?<br><br>∙ 이것저것 나를 구속하는 것은 NO! 복잡하게 생각하는 것을 싫어해요. 흘러가는 대로~ 자유롭게 살고 싶어요~<br><br>∙ 독서의 원동력은 흥미로운 내용! 관심이 없는 주제를 다루거나 재미를 느끼지 못하는 책에는 쉽게 싫증을 느끼는 경우가 많아요.<br><br>∙ 혹시 SNS에 마음에 드는 책 한 페이지를 찍어올린 적 있나요? 마음에 드는 책은 동네방네 소개하고 싶어 하는 스타일! 같은 책을 읽은 사람들과 이야기를 나눠보고 싶어 해요.',
      },
      store: {
        name: '주책공사',
        description:"다양한 모임과 행사가 개최되는 곳입니다! 많은 작가, 독자들에게 사랑받으며 단골이 많은 서점이랍니다!",
        instalink : "https://instagram.com/lordbook04",
        imgsrc : "/images/store1.jpg",
        location : "부산 중구 대청로 141번길 15-11"
      },
    },
    {
      id: 2,
      partner : 4,
      content: {
        name: '나는 생각한다,<br>고로 존재한다',
        imgsrc : '/images/type2.png',
        thumbnail : '/images/thum2.png',
        hashtag : "#침대=나 #배려의아이콘 #상상력대장<br>#물음표가득 #나홀로독서",
        description : '∙ 외출 후 집으로 돌아와서 에너지를 충전하는 당신! 침대는 나를 위한 충전기예요. 사람들을 만나는 것도 좋지만, 집에서 혼자 쉬는 것이 역시 진정한 힐링이죠.<br><br>∙ 배려가 흐르고 넘쳐요! 사람들과 함께 있을 때 나서서 이끌기보다는, 상대방을 배려하고 경청하면서 맞춰주는 스타일이에요.<br><br>∙ 일상 속에서도 곰곰이 생각하고 상상하는 것을 좋아해요. 수업 시간에 한 번쯤 외계인에게 공격받아서 도망가는 상상, 해본 적 있지 않나요?<br><br>∙ 독서는 책과 나의 오붓한 시간이에요. 조용한 장소에서 나만의 독서 루틴을 만들어서 책 읽는 것을 좋아해요.<br><br>∙ 책을 읽으면서 등장인물들에게 몰입하고, 끊임없이 질문을 던지면서 상상하는 것을 좋아해요.',
      },
      store: {
        name: '무엇보다 책방',
        description:"세심한 큐레이션이 담긴 블라인드 추천책이 준비되어 있는 책방입니다. 흥미로운 컨셉으로 책을 추천해주신답니다!",
        instalink : "https://instagram.com/more.than_anything",
        imgsrc : "/images/store2.jpg",
        location : "서울특별시 송파구 백제고분로45길 30"
      },
    },
    {
      id: 3,
      partner : 8,
      content: {
        name: '팔방 x 팔방 = <br>64방미인',
        imgsrc :'/images/type3.png',
        thumbnail : '/images/thum3.png',
        hashtag : "#호기심천국 #미다스의손<br>#관심분야깊게파기 #귀찮지만책은좋아",
        description : '∙ 너무나 똑똑한 당신! 금손과 명석한 두뇌로 조용하게 맡은 일을 착착 잘 해내요. 모든 사람들이 당신이라면 일을 믿고 맡겨요!<br><br>∙ 솔직한 게 가장 큰 매력이에요. 당신이 하는 말은 진심 순도 100%<br><br>∙ 꼼꼼히 계획하는 건 피곤해~ 즉흥적인 것이 더 재밌고 좋은 기분파예요!<br><br>∙ 사람들을 만나는 것보다 혼자 있는 시간이 즐거워요. 관심 없는 사람들과 함께 하는 자리를 가장 싫어해요.<br><br>∙ 관심사에 열정이 뜨거워요! 관심 있는 분야는 여러 책을 통해 끝까지 파헤쳐 보는 타입이에요. 하지만 무관심한 분야에는 누구보다 차갑게 식어버리곤 해요. <br><br>∙ 독서의 가장 큰 적은 귀차니즘! 귀찮아서 독서를 미뤄두곤 하지만, 독서 리스트는 빵빵해요!',
      },
      store: {
        name: '서른책방',
        description:"스토리텔링이 있는 큐레이션을 제공하고, 흥미로운 원데이 클래스와 정기 모임이 열리는 독립서점 겸 카페입니다!",
        instalink : "https://instagram.com/30books",
        imgsrc : "/images/store3.jpg",
        location : "경기 수원시 영통구 영통로174번길 79",
      },
    },
    {
      id: 4,
      partner : 2,
      content: {
        name: '단호박 먹은 CEO',
        imgsrc : '/images/type4.png',
        thumbnail : '/images/thum4.png',
        hashtag :"#멋쟁이리더형 #완벽주의자 #워커홀릭<br>#독서는자기계발 #원할때마다찾아읽기",
        description : '∙ 열정만땅인 당신! 일하는 것이 나의 원동력이에요~ 일할 때 오히려 에너지가 넘쳐요!<br><br>∙ 모두가 믿고 맡기는 든든한 리더! 활기찬 에너지로 모임을 이끄는 힘이 있어요.<br><br>∙ 플래너는 당신과 한 몸! 계획 없이는 못 살아~ 짜여진 계획대로 행동하는 것이 가장 편해요.<br><br>∙ 법 없이도 잘 살 당신! 뭐든지 척척 해내는 당신의 능력은 모두를 반하게 만들어요<br><br>∙ 독서로 자신을 더욱 발전시키는 당신! 스스로에게 어떤 책이 필요한지 잘 알아요. <br><br>∙ 무슨 책을 읽을지 이미 착착 계획을 세워두곤 해요! 독서 리스트를 채워놓고 원할 때마다 찾아읽어요.',
      },
      store: {
        name: '문우당서림',
        description:"책과 사람의 공간을 지향하는 책방! 독립출판물을 포함하여 문학, 고전 등 다양한 책들이 공존하는 곳입니다.",
        instalink : "https://instagram.com/moonwoodang_bookshop",
        imgsrc : "/images/store4.jpeg",
        location : "강원 속초시 중앙로 45",
      },
    },
    {
      id: 5,
      partner : 6,
      content: {
        name: '세계 4대 성인<br>그리고 바로 당신',
        imgsrc : '/images/type5.png',
        thumbnail : '/images/thum5.png',
        hashtag:"#인간시몬스 #공감능력만렙 #감성충만<br>#책속인물=나 #좋은책은추천",
        description : '∙ 예수, 석가모니, 공자, 소크라테스, 그리고 다음 성인은 바로 당신! 공감하면 당신, 당신하면 공감이에요. 함께 있는 것만으로도 마음이 편안해진다는 것이 당신의 매력 포인트!<br><br>∙ 내 사람들은 내가 챙긴다! 친한 사람들에게 진심이에요. 새로운 사람들을 만나는 건 좀 부담스러워서 뚝딱거리지만, 친한 사람들과 있을 때는 다정다감 모드 ON!<br><br>∙ 빈틈없는 완벽함을 추구해요. 어떤 일을 맡든 세심하고 꼼꼼하게 확인, 또 확인해요!<br><br>∙ 책에 푹 빠졌을 때는 주인공이 바로 나! 책 속의 인물이 느끼는 감정에 공감하며 독서하곤 해요.<br><br>∙ 마음에 드는 책을 만나면, 주변 사람들에게 강력 추천해요! 같이 읽으면 더 재밌잖아요?',
      },
      store: {
        name: '지금의 세상',
        description:"더 나은 삶을 위한 곳, 25권만 판매하는 큐레이션 서점 지금의 세상",
        instalink : "https://instagram.com/the_present_world",
        imgsrc : "/images/store5.jpg",
        location:"서울특별시 동작구 동작대로3길 41",
      },
    },
    {
      id: 6,
      partner : 5,
      content: {
        name: '21세기 콜롬버스',
        imgsrc : '/images/type6.png',
        thumbnail : '/images/thum6.png',
        hashtag :"#행복을찾는항해 #솔직함이매력<br>#물음표대마왕 #내책은내가고른다",
        description : '∙ 지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해, 어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는 일에는 누구보다 열정적인 혁신가예요.<br><br>∙ 편견이나 선입견을 굉장히 싫어해요. 돌려 말하는 건 재미없어요! 아닌 건 아니라고 말할 수 있는 솔직함이 당신의 매력 포인트~<br><br>∙ 세상의 다양함에 관심이 많고, 다른 사람과 공유하고 싶어 해요!<br><br>∙ 논리적인 당신은 책을 읽으며 "왜?"라는 물음표를 자주 던지는 편이에요! 수많은 물음에 답하면서, 한 권의 책을 오래 읽기도 해요!<br><br>∙ 책을 추천받기보다는 내 취향에 따라 직접 고르는 편! 책 뒷면 요약이나 후기를 찾아 나만의 책을 골라 읽어요.',
      },
      store: {
        name: '북다마스',
        description:"다마스로 전국에 출점하는 움직이는 책방! 따라가보는 재미, 알차게 선정된 책들을 만나보는 재미가 있습니다.",
        instalink : "https://instagram.com/book_damas",
        imgsrc : "/images/store6.jpg",
        location:"",
      },
    },
    {
      id: 7,
      partner : 1,
      content: {
        name: '"숙제 있었는데요?"<br>모범생 반장',
        imgsrc : '/images/type7.png',
        thumbnail : '/images/thum7.png',
        hashtag:"#카리스마 #빈틈찾아삼만리 #모범생은나야<br>#책보면서메모는필수 #필사가취미",
        description : '∙ 많은 사람들과 함께 하기보다는, 독립적이고 자기주도적인 환경일 때 능력치 UP! 혼자 일하는 게 역시 편하고 즐거워요!<br><br>∙ 카리스마 있는 모습이 멋진 당신! 가끔 감정 없는 로봇으로 비춰질 수 있지만, 그건 당신을 잘 모르는 사람들의 얘기죠!<br><br>∙ 빈틈이란 내 사전에 없다. 항상 신중하고 정확하게 일을 처리해요!<br><br>∙ 반전 매력의 소유자! 차갑고 조용한 이미지에 비해, 자신의 바운더리 속 사람들에겐 색다른 면모를 보여줘요.<br><br>∙ 중요한 건 꼭 메모하곤 해요. 독서할 때도 꼼꼼하게 정리하며 메모하는 편이에요.<br><br>∙ 이건 꼭 적어야 돼! 눈에 띄는 구절은 필사하며, 마음에 또 한 번 새기는 것을 좋아해요.',
      },
      store: {
        name: '고래책방',
        description:"'강릉', '문학여행', '삶'의 매력적인 주제에 맞춰, 다양한 분야의 책들이 준비되어 있는 서점입니다!",
        instalink : "https://instagram.com/gore_bookstore",
        imgsrc : "/images/store7.jpg",
        location:"강원도 강릉시 율곡로 2848",
      },
    },
    {
      id: 8,
      partner : 3,
      content: {
        name: '해바라기 말고<br>친구바라기',
        imgsrc : '/images/type8.png',
        thumbnail : '/images/thum8.png',
        hashtag:"#같이의가치 #리액션부자<br>#종이위눈물자국 #책선물은힐링",
        description : '∙ 정이 많고 다른 사람에게 관심이 많은 당신! 누군가와 함께 하는 게 무엇보다 행복하고 소중해요.<br><br>∙ 리액션 부자, 칭찬봇이라는 말 많이 듣지 않나요? 당신과의 대화는 언제나 즐거워요!<br><br>∙ 누군가 당신을 인정하고 신뢰한다는 사실을 알았을 때, 비로소 살아있음을 느껴요.<br><br>∙ 새로운 사람을 만나는데 두려움이 없는 타고난 인싸예요! 인간관계뿐만 아니라, 관심사도 넓어 늘 새로운 세상을 만나고 싶어 해요.<br><br>∙ 인물들의 관계에 관심이 많고 책 속 인물의 감정에 공감해요! 주로 소설을 많이 읽는 편이군요. 책을 읽으며 나도 모르게 우는 경우도 많아요.<br><br>∙ 주위 사람들을 잘 챙기는 센스쟁이! 책 선물도 많이 하곤 해요. 내 선물을 받고 좋아하는 지인을 보면 덩달아 행복지수 급상승!',
      },
      store: {
        name: '고메북스',
        description:"문학서적과 독립출판물을 중심으로, 국내외 다양한 책들이 있는 서점! 알차고 다양한 북클럽도 진행됩니다!",
        instalink : "https://instagram.com/gourmetbooks",
        imgsrc : "/images/store8.jpg",
        location:"경기 고양시 일산서구 중앙로 1470",
      },
    },
];

export {questions, scores, results};