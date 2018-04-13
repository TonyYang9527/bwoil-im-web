const read = [
    {
        avatar: require("../assets/master.jpg"),
        type: "text",
        message: "I miss you dear,call me please. I leave message  to  you.",
        status: "sent",
        time: "02:49",
        fromUser: false
    },
    {
        avatar: require("../assets/master.jpg"),
        type: "image",
        message: "https://tctechcrunch2011.files.wordpress.com/2018/02/gettyimages-913011976.jpg?w=738",
        status: "received",
        time: "02:49",
        fromUser: true
    },
    {
        avatar: require("../assets/master.jpg"),
        type: "sub",
        message: "Onsub",
        status: "read",
        time: "02:49",
        fromUser: false
    },
    {
        avatar: require("../assets/master.jpg"),
        type: "sub",
        message: "Offer",
        expiry: "03:49",
        status: "read",
        time: "02:49",
        fromUser: true
    }, {
        avatar: require("../assets/master.jpg"),
        type: "text",
        message: "I miss you dear,call me please. i leave message  to  you.",
        status: "sent",
        time: "02:49",
        fromUser: true
    },
    {
        avatar: require("../assets/master.jpg"),
        type: "image",
        message: "https://tctechcrunch2011.files.wordpress.com/2018/02/gettyimages-913011976.jpg?w=738",
        status: "received",
        time: "02:49",
        fromUser: false
    }
];

const unread = [
    {
        avatar: require("../assets/master.jpg"),
        type: "text",
        message: "Hello World!",
        status: "sent",
        time: "02:49",
        fromUser: false
    },
    {
        avatar: require("../assets/master.jpg"),
        type: "image",
        message: "http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%A3%81%E7%BA%B8&step_word=&hs=0&pn=12&spn=0&di=104705526310&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3899500479%2C2329497762&os=2151810542%2C1814128937&simid=3443430587%2C9596722&adpicid=0&lpn=0&ln=3096&fr=&fmq=1522656480880_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=wallpaper&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201206%2F25%2F20120625160633_JhFfM.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Frj5rsjAzdH3F4ks52AzdH3Fnndb9dmcAzdH3F1jpwtsAzdH3F%3Fr6j%3Dnndb9d9m&gsm=0&rpstart=0&rpnum=0&islist=&querylist=",
        status: "received",
        time: "05:26",
        fromUser: false
    }
];

const profiles = [{
    id: 100,
    title: "Vessel Info",
    kvs: [
        {key: "Vessel", value: "BRIGHTOIL GLORY"},
        {key: "Sector", value: "Oil Tanker"},
        {key: "Open Date", value: "01/01/2018"},
        {key: "Open Ports", value: "Singapore,China, Indonesia,India"},
    ]
},
    {
        id: 101,
        title: "Cargo Info",
        kvs: [
            {key: "Vessel", value: "PIG IRON,5000MT"},
            {key: "Laycan date", value: "01-05 Jan 2018"},
            {key: "Voyage", value: "Singapore>Shanghai"},
            {key: "Loading/Discharging Rate", value: "1500/1500"},
            {key: "Address Comission", value: "3.75%"},
            {key: "Freight", value: "SGD:15/MTS"},],
    },
];


export const sessions = [
    {
        partner: [
            {
                id: 200,
                name: "Jim King",
                image: require("../assets/master.jpg")
            },
            {
                id: 201,
                name: "Yang Sun",
                image: require("../assets/master.jpg")
            },
            {
                id: 202,
                name: "Qiaomin Jin",
                image: require("../assets/master.jpg")
            }
        ],
        read: read,
        unread: unread,
        profiles: profiles
    },
    {
        partner: [
            {
                id: 203,
                name: "Jake Li",
                image: require("../assets/master.jpg")
            }
        ],
        read: read,
        unread: unread,
        profiles: profiles
    },
    {
        partner: [
            {
                id: 204,
                name: "Standly McNair",
                image: require("../assets/master.jpg")
            },
            {
                id: 205,
                name: "Charles Smith",
                image: require("../assets/master.jpg")
            },
            {
                id: 106,
                name: "Kelli Ortiz",
                image: require("../assets/master.jpg")
            }
        ],
        read: read,
        unread: unread,
        profiles: profiles
    },
    {
        partner: [
            {
                id: 107,
                name: "Tony Yang",
                image: require("../assets/master.jpg")
            },
            {
                id: 108,
                name: "Lebron James",
                image: require("../assets/master.jpg")
            },
            {
                id: 109,
                name: "Embid",
                image: require("../assets/master.jpg")
            },
            {
                id: 110,
                name: "Durant",
                image: require("../assets/master.jpg")
            }
        ],
        read: read,
        unread: unread,
        profiles: profiles
    },
    {
        partner: [
            {
                id: 111,
                name: "Howard",
                image: require("../assets/master.jpg")
            },
            {
                id: 112,
                name: "Wade",
                image: require("../assets/master.jpg")
            },
            {
                id: 113,
                name: "Anthony",
                image: require("../assets/master.jpg")
            },
            {
                id: 114,
                name: "George",
                image: require("../assets/master.jpg")
            },
            {
                id: 115,
                name: "WhiteSide",
                image: require("../assets/master.jpg")
            }
        ],
        read: read,
        unread: unread,
        profiles: profiles
    }
];

export const contacts = [
    {
        id: 200,
        name: "Jim King",
        image: require("../assets/master.jpg")
    },
    {
        id: 201,
        name: "Yang Sun",
        image: require("../assets/master.jpg")
    },
    {
        id: 202,
        name: "QiaoMin Jin",
        image: require("../assets/master.jpg")
    },
    {
        id: 203,
        name: "Jake Li",
        image: require("../assets/master.jpg")
    },
    {
        id: 204,
        name: "Standly McNair",
        image: require("../assets/master.jpg")
    },
    {
        id: 205,
        name: "Charles Smith",
        image: require("../assets/master.jpg")
    },
    {
        id: 106,
        name: "Kelli Ortiz",
        image: require("../assets/master.jpg")
    },
    {
        id: 107,
        name: "Tony Yang",
        image: require("../assets/master.jpg")
    },
    {
        id: 108,
        name: "Lebron James",
        image: require("../assets/master.jpg")
    },
    {
        id: 109,
        name: "Embid",
        image: require("../assets/master.jpg")
    },
    {
        id: 110,
        name: "Durant",
        image: require("../assets/master.jpg")
    },
    {
        id: 111,
        name: "Howard",
        image: require("../assets/master.jpg")
    },
    {
        id: 112,
        name: "Wade",
        image: require("../assets/master.jpg")
    },
    {
        id: 113,
        name: "Anthony",
        image: require("../assets/master.jpg")
    },
    {
        id: 114,
        name: "George",
        image: require("../assets/master.jpg")
    },
    {
        id: 115,
        name: "WhiteSide",
        image: require("../assets/master.jpg")
    }
];