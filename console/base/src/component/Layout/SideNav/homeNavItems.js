export default () => {
    const newLink = (newpath) => {
        return newpath != '#'? `${newpath}${window.location.search}`: `${window.location.pathname}${window.location.search}#`;
    };

    return [
        {
            // 0 depth 메뉴
            _tag: 'CSidebarNavItem',
            name: '홈',
            to: newLink('/home'),
            icon: 'cil-speedometer',
            // 뱃지
            badge: {
                color: 'info',
                text: 'NEW',
            }
        },
        , {
            _tag: 'CSidebarNavItem',
            name: '소개',
            to: newLink('/home/intro'),
            icon: 'cil-puzzle'
        }
        , {
            // 1 depth 헤더
            _tag: 'CSidebarNavTitle',
            _children: ['기본 메뉴']
        },
        {
            _tag: 'CSidebarNavDropdown',
            name: '서비스',
            route: '#',
            icon: 'cil-puzzle',
            // 2 depth 메뉴
            _children: [
                {
                    _tag: 'CSidebarNavItem',
                    name: '서비스 권한 관리',
                    to: newLink('/home/auth'),
                }
            ]
        },
        {
            _tag: 'CSidebarNavItem',
            name: '가이드',
            to: newLink('/home/guide'),
            icon: 'cil-puzzle'
        }
    ];
}