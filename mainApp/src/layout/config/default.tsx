import { AndroidOutlined } from '@ant-design/icons';
import AppCenter from '@images/menu/app-center.svg';

const defaultSidebar = {
    title: '默认菜单',
    icon: <AppCenter />,
    sidebarData: [
        {
            title: '应用管理',
            key: '/app-center/app-manage',
            icon: <AndroidOutlined />,
            children: [
                {
                    title: '业务应用',
                    basePath: '/app-center/app-manage',
                    path: '/app-center/app-manage/biz-apps',
                    key: '/app-center/app-manage/biz-apps'
                }
            ]
        }
        // {
        //     title: '应用注册',
        //     key: '/auth-center/app-register',
        //     icon: <OutlinedEmail />,
        //     children: [
        //         {
        //             title: '私有化应用',
        //             basePath: '/app-center/app-register',
        //             key: '/app-center/app-register/privatized-application',
        //             path: '/app-center/app-register/privatized-application',
        //             icon: <OutlinedEmail />
        //         },
        //         {
        //             title: '托管应用',
        //             basePath: '/app-center/app-register',
        //             key: '/app-center/app-register/hosted-application',
        //             path: '/app-center/app-register/hosted-application',
        //             icon: <OutlinedEmail />
        //         }

        //     ]
        // }
    ]
};

export default defaultSidebar;