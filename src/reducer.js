const initialState = {
    books:
        [
            {
                title: '미래의 부',
                subtitle: '인공지능 시대, 돈은 어떤 모습으로 다가오는가',
                img: 'https://bookthumb-phinf.pstatic.net/cover/207/909/20790948.jpg?udate=20210804',
                desc: '석유는 데이터로, 부동산은 데이터센터로 코로나19가 가속화한 4차 산업혁명 시대부의 흐름을 따라잡기 위한 가장 친절하고 직관적인 안내서코로나바이러스감염증-19(이하 코로나19)로 인류는 서로 접촉하지 않는, 이른바 ‘언택트 시대’로 접어들었다. 불과 2년 전까지만 해도 선택의 영역이었던 인공지능과 IT 기술이 코로나19를 기점으로 일상 전반을 지배하게 된 것이다. 2020년 8월, 미국을 대표하는 30개 기업의 주가지수를 보여주는 다우지수가 석유기업 엑슨모빌을 92년 만에 퇴출하고, 그 자리에 클라우드 기업 세일즈포스를 올린 것은 석유 경제로 대표되던 3차 산업혁명 시대가 저물고 4차 산업혁명의 시대가 도래했음을 알린 상징적 사건이었다.종합 베스트셀러 1위를 휩쓴 《에이트》와 《에이트 : 씽크》의 작가 이지성이 ‘에이트 시리즈’의 완결편이자 실천편인 《미래의 부》로 돌아왔다. 유튜브 채널 ‘이지성TV’를 통해 5천만 뷰 이상의 폭발적인 관심을 받은 ‘4차 산업혁명 미국 주식 특강’을 토대로 완성된 이 책은, 코로나19로 이미 우리 삶 깊숙이 들어온 인공지능 시대에 재편될 부의 흐름을 읽고 ‘미래의 부’를 창출할 새로운 방법을 제시한다.바꾸려던 핸드폰 대신 애플 주식을 매수하며 새로운 부의 흐름에 올라탈 대비를 시작할 것이다. 결코 쉬운 길은 아니지만 의지만 있다면 당장 시작할 수 있다. 이 책에는 그런 힘이 있다.',
                likes: 0
            },
            {
                title: '부자 아빠 가난한 아빠',
                subtitle: '(20주년 특별 기념판)(개정증보판)',
                img: '',
                likes: 0
            },
            {
                title: '월가의 영웅',
                subtitle: '(전설로 떠나는)(개정판 2판)(양장본 HardCover)',
                img: '',
                likes: 0
            },
            {
                title: '부의 추월차선',
                subtitle: '',
                img: '',
                likes: 0
            },
            {
                title: '차트분석 무작정 따라하기',
                subtitle: '',
                img: '',
                likes: 0
            },
            {
                title: '돈, 뜨겁게 사랑하고 차갑게 다루어라',
                subtitle: '(코스톨라니 투자총서 1)',
                img: '',
                likes: 0
            },
            {
                title: '돈 공부는 처음이라',
                subtitle: '(20주년 특별 기념판)(개정증보판)',
                img: '',
                likes: 0
            },
            {
                title: '자본주의',
                subtitle: '(EBS 다큐프라임)',
                img: '',
                likes: 0
            },
            {
                title: '부동산 상식사전',
                subtitle: '',
                img: '',
                likes: 0
            },
            {
                title: '돈되는 재건축 재개발',
                subtitle: '(한 권으로 끝내는)',
                img: '',
                likes: 0
            },
            {
                title: '투자에 대한 생각',
                subtitle: '',
                img: '',
                likes: 0
            },
            {
                title: '넛지',
                subtitle: '(양장본 HardCover)',
                img: '',
                likes: 0
            },
        ],
    selected: undefined
};

// initialState.selected = initialState.books[0];

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'BOOK_SELECT' :
            return {
                books: state.books,
                selected: action.payload
            }
        default:
            return state;
    }
}

export default reducer;