const storiesData = [
  "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTc2ODl8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTc2ODl8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTc2ODl8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1470441623172-c47235e287ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTc2ODl8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1579105728744-9d6b14a45389?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTc2ODl8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1609010697446-11f2155278f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTc2ODl8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1517649281203-dad836b4abe5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTc2ODl8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTc2ODl8&ixlib=rb-4.0.3&q=85"
]

const sideNavData = [
  { icon: "gg-menu-grid-o", tab: "Feed"},
  { icon: "gg-search", tab: "Explore"},
  { icon: "gg-bell", tab: "Notifications"},
  { icon: "gg-mail", tab: "Messages"},
  { icon: "gg-arrows-exchange-v", tab: "Directs"},
  { icon: "gg-align-bottom", tab: "Stats"}
];

const feedData = [
  {
    username: "Jane_Doe",
    likes: "546",
    comments: "36",
    avatar:
      "https://images.unsplash.com/photo-1603023436454-c91a5d12b580?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NjEyNTN8&ixlib=rb-4.0.3&q=85",
    img: "https://images.unsplash.com/photo-1514891163508-4d0d04535922?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTkxMDl8&ixlib=rb-4.0.3&q=85",
  },
  {
    username: "Floranix",
    likes: "185",
    comments: "12",
    avatar:
      "https://images.unsplash.com/photo-1536084006720-6c105926e135?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMyMjE4MzV8&ixlib=rb-4.0.3&q=85",
    img: "https://images.unsplash.com/photo-1549488799-496ecb87b5b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTkxMDl8&ixlib=rb-4.0.3&q=85",
  },
  {
    username: "SealLock",
    likes: "237",
    comments: "21",
    avatar:
      "https://images.unsplash.com/photo-1525337132786-5828a43893af?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMyMjE4MzV8&ixlib=rb-4.0.3&q=85",
    img: "https://images.unsplash.com/photo-1604819360294-88464109e919?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTkxMDl8&ixlib=rb-4.0.3&q=85",
  },
  {
    username: "Voyager1Golf",
    likes: "782",
    comments: "59",
    avatar:
      "https://images.unsplash.com/photo-1535146851324-6571dc3f2672?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMyMjE4MzV8&ixlib=rb-4.0.3&q=85",
    img: "https://images.unsplash.com/photo-1610768764104-ad1bd4763668?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTkxMDl8&ixlib=rb-4.0.3&q=85",
  },
  {
    username: "Stacy-Fly",
    likes: "96",
    comments: "11",
    avatar:
      "https://images.unsplash.com/photo-1541298645675-6cc8e127934d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMyMjE4MzV8&ixlib=rb-4.0.3&q=85",
    img: "https://images.unsplash.com/photo-1571333248844-316a70fb180e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTk2NDB8&ixlib=rb-4.0.3&q=85",
  },
  {
    username: "Hydrapie",
    likes: "12k",
    comments: "674",
    avatar:
      "https://images.unsplash.com/photo-1536164261511-3a17e671d380?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMyMjE5OTR8&ixlib=rb-4.0.3&q=85",
    img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTk2NDB8&ixlib=rb-4.0.3&q=85",
  },
  {
    username: "_Steveran_",
    likes: "1.4k",
    comments: "305",
    avatar:
      "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMyMjIwMTZ8&ixlib=rb-4.0.3&q=85",
    img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NjQzMzJ8&ixlib=rb-4.0.3&q=85",
  },
  {
    username: "SeaToast",
    likes: "10",
    comments: "2",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMyMjIwMTZ8&ixlib=rb-4.0.3&q=85",
    img: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTk2NDB8&ixlib=rb-4.0.3&q=85",
  },
  {
    username: "Seth_Rose",
    likes: "47",
    comments: "4",
    avatar:
      "https://images.unsplash.com/photo-1536456364204-85a9b0676106?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMyMjIwODh8&ixlib=rb-4.0.3&q=85",
    img: "https://images.unsplash.com/photo-1511519620772-8ce30462884f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA4NTk2ODV8&ixlib=rb-4.0.3&q=85",
  },
];

export { storiesData, sideNavData, feedData };
