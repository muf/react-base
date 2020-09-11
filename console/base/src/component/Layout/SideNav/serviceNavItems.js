export default () => {
    const newLink = (newpath) => {
        return newpath != '#'? `${newpath}${window.location.search}`: `${window.location.pathname}${window.location.search}#`;
    };

    return [
        {
            // 0 depth 메뉴
            _tag: 'CSidebarNavItem',
            name: '홈',
            to: newLink('/service'),
            icon: 'cil-speedometer',
            // 뱃지
            badge: {
                color: 'info',
                text: 'NEW',
            }
        },
        {
            // 1 depth 헤더
            _tag: 'CSidebarNavTitle',
            _children: ['기본 메뉴']
        },
        {
            _tag: 'CSidebarNavDropdown',
            name: '설정',
            route: '#',
            icon: 'cil-puzzle',
            // 2 depth 메뉴
            _children: [
                {
                    _tag: 'CSidebarNavItem',
                    name: '서비스 공통 옵션',
                    to: newLink('/service/svcOption'),
                },
                {
                    _tag: 'CSidebarNavItem',
                    name: '티켓 & 템플릿 옵션',
                    to: newLink('/service/option'),
                }
            ]
        },
        {
            _tag: 'CSidebarNavDropdown',
            name: '통계',
            route: '#',
            icon: 'cil-puzzle',
            // 2 depth 메뉴
            _children: [
                {
                    _tag: 'CSidebarNavItem',
                    name: '사용량 통계',
                    to: newLink('/service/uStat'),
                },
                {
                    _tag: 'CSidebarNavItem',
                    name: '지표 통계',
                    to: newLink('/service/sStat'),
                }
            ]
        }
    ];
}