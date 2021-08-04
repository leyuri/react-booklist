const initialState = {
    books:
        [
            {
                title: '부자 아빠 가난한 아빠',
                subtitle: '(20주년 특별 기념판)(개정증보판)',
                likes: 0
            },
            {
                title: '부자 아빠 가난한 아빠',
                subtitle: '(20주년 특별 기념판)(개정증보판)',
                likes: 0
            },
            {
                title: '월가의 영웅',
                subtitle: '(전설로 떠나는)(개정판 2판)(양장본 HardCover)',
                likes: 0
            },
            {
                title: '부의 추월차선',
                subtitle: '',
                likes: 0
            },
            {
                title: '차트분석 무작정 따라하기',
                subtitle: '(',
                likes: 0
            },
            {
                title: '돈, 뜨겁게 사랑하고 차갑게 다루어라',
                subtitle: '(코스톨라니 투자총서 1)',
                likes: 0
            },
            {
                title: '돈 공부는 처음이라',
                subtitle: '(20주년 특별 기념판)(개정증보판)',
                likes: 0
            },
            {
                title: '자본주의',
                subtitle: '(EBS 다큐프라임)',
                likes: 0
            },
            {
                title: '부동산 상식사전',
                subtitle: '',
                likes: 0
            },
            {
                title: '돈되는 재건축 재개발',
                subtitle: '(한 권으로 끝내는)',
                likes: 0
            },
            {
                title: '투자에 대한 생각',
                subtitle: '',
                likes: 0
            },
            {
                title: '넛지',
                subtitle: '(양장본 HardCover)',
                likes: 0
            },
        ],
    selected: undefined
};

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
    return state;
}

export default reducer;