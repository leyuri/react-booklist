import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

export default function BookList() {

    const books = [
        '부자 아빠 가난한 아빠. 1(20주년 특별 기념판)(개정증보판)',
        '월가의 영웅(전설로 떠나는)(개정판 2판)(양장본 HardCover)',
        '부의 추월차선',
        '차트분석 무작정 따라하기 ',
        '돈, 뜨겁게 사랑하고 차갑게 다루어라(코스톨라니 투자총서 1)',
        '돈 공부는 처음이라',
        '자본주의(EBS 다큐프라임) ',
        '부동산 상식사전',
        '돈되는 재건축 재개발(한 권으로 끝내는) ',
        '투자에 대한 생각(양장본 HardCover) ',
        '넛지(양장본 HardCover) '
    ]

    // console.log("books", books);

    return (
        <List component="nav" aria-label="main list">
            {books.map(item => {
                return (
                    <div>
                        <ListItem button>
                            <ListItemText primary={item} />
                        </ListItem>
                        <Divider />
                    </div>
                )
            })}
        </List>
    )
}