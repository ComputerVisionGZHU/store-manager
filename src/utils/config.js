export const isDev = process.env.NODE_ENV === 'development'
export const isMock = false
export const rootURL = isDev ? (isMock ? 'http://localhost:8002' : '/') : '/'

/* 编辑模式，新增/编辑 */
export const MODIFY_MODAL_TYPE = {
    ADD: 1,
    EDIT: 0
}

/* 管理员导航 */
export const MENU_LIST_MANAGER = [
    {
        subMenuInfo: {
            value: 'order',
            label: '订单管理'
        },
        subMenuItemList: [
            {
                value: 'order-arrange-list',
                label: '预定安排'
            },
            {
                value: 'order-history-list',
                label: '历史订单'
            }
        ]
    },
    {
        subMenuInfo: {
            value: 'payment',
            label: '支付类型'
        },
        subMenuItemList: [
            {
                value: 'payment-type-list',
                label: '支付类型'
            },
            {
                value: 'payment-group-list',
                label: '支付类型分组'
            }
        ]
    },
    {
        subMenuInfo: {
            value: 'theme-list',
            label: '主题管理'
        },
        subMenuItemList: []
    },
    {
        subMenuInfo: {
            value: 'statistics',
            label: '密室统计'
        },
        subMenuItemList: [
            {
                value: 'statistics-income',
                label: '收入统计'
            },
            {
                value: 'statistics-order',
                label: '订单统计'
            }
        ]
    },
    {
        subMenuInfo: {
            value: 'customer-list',
            label: '客户来源'
        },
        subMenuItemList: []
    },
    {
        subMenuInfo: {
            value: 'key-list',
            label: '钥匙管理'
        },
        subMenuItemList: []
    },
    {
        subMenuInfo: {
            value: 'material',
            label: '物料管理'
        },
        subMenuItemList: [
            {
                value: 'item',
                label: '物料列表'
            },
            {
                value: 'house',
                label: '仓库列表'
            },
            {
                value: 'export',
                label: '出库记录'
            },
            {
                value: 'import',
                label: '入库记录'
            }
        ]
    },
    {
        subMenuInfo: {
            value: 'user',
            label: '用户管理'
        },
        subMenuItemList: [
            {
                value: 'user-list',
                label: '用户列表'
            },
            {
                value: 'dishonesty-list',
                label: '失信列表'
            }
        ]
    },
    {
        subMenuInfo: {
            value: 'store-list',
            label: '门店管理'
        },
        subMenuItemList: []
    },
    {
        subMenuInfo: {
            value: 'card',
            label: '会员卡系统'
        },
        subMenuItemList: [
            {
                value: 'card-list',
                label: '会员卡列表'
            },
            {
                value: 'consumption-list',
                label: '消费记录'
            }
        ]
    }
]

/* 用户导航 */
export const MENU_LIST_USER = [
    {
        subMenuInfo: {
            value: 'consume-list',
            label: '消费记录'
        },
        subMenuItemList: []
    }
]

// 成功-200 数据重复-601 参数不正确-401
export const SERVER_ERROR_CODE = {
    SUCCESS: 200,
    REPEAT: 601,
    ERROR_PARAM: 401
}

// 账号类型。0普通用户、1~5依次代表：店员、副店、店长、区域管理员、老板
export const USER_TYPE = {
    NORMAL: 0,
    STAFF: 1,
    VICE_MANAGER: 2,
    MAIN_MANAGER: 3,
    AREA_MANAGER: 4,
    BOSS: 5
}

// 账号类型Map
export const USER_TYPE_MAP = [
    {
        label: '普通用户',
        value: USER_TYPE.NORMAL
    },
    {
        label: '店员',
        value: USER_TYPE.STAFF
    },
    {
        label: '副店',
        value: USER_TYPE.VICE_MANAGER
    },
    {
        label: '店长',
        value: USER_TYPE.MAIN_MANAGER
    },
    {
        label: '区域管理员',
        value: USER_TYPE.AREA_MANAGER
    },
    {
        label: '老板',
        value: USER_TYPE.BOSS
    }
]

// 充值方式
export const RECHARGE_TYPE_MAP = [
    {
        label: '哆啦宝',
        value: 1
    },
    {
        label: '现金',
        value: 2
    }
]

// 卡种
export const CARD_TYPE_MAP = [
    {
        label: '金卡',
        value: 1,
        discount: 0.8
    },
    {
        label: '银卡',
        value: 2,
        discount: 0.85
    },
    {
        label: '铜卡',
        value: 3,
        discount: 0.88
    }
]

export const OPERATION_TYPE = {
    DELETE: 1,
    OPEN: 2,
    CLOSE: 3
}

export const STATUS_LIST = [
    {
        value: '',
        label: '所有状态'
    },
    {
        value: true,
        label: '启用'
    },
    {
        value: false,
        label: '禁用'
    }
]

export const ARRANGE_STATUS_MAP = {
    ARRANGED: 1,
    STARTED: 2,
    END: 3,
    IS_ENDING: 4
}

export const WX_URL = {
    PRE_FIX: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2528c0ee48d8f2d2&redirect_uri=https%3a%2f%2fwww.dbxyyxt.com%2f%23%2fwx%2f',
    POST_FIX: '&response_type=code&scope=snsapi_base&state=1559805356000&connect_redirect=1#wechat_redirect'
}
