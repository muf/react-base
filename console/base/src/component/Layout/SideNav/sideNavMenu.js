export default [
    {
        // 0 depth 메뉴
        _tag: 'CSidebarNavItem',
        name: '홈',
        to: '/',
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
        name: '메뉴1',
        route: '#',
        icon: 'cil-puzzle',
        // 2 depth 메뉴
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: '세부 메뉴1',
                to: '/layout/a',
            },
            {
                _tag: 'CSidebarNavItem',
                name: '세부 메뉴2',
                to: '/layout/b',
            }
        ]
    },
    {
        _tag: 'CSidebarNavItem',
        name: '메뉴2',
        to: '#',
        icon: 'cil-puzzle'
    }
];