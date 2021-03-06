import {SvgLike,SvgPage,Home,Arrow} from './like.tsx'


const Pdata=[
    {
        title:"Home",
        id:0,
        frIcon:<Home />
    },
    { 
        title:"link one",
        id:1,
        frIcon:<SvgLike />
    },
    {
        title:"link two",
        id:2,
        link:["sub link 1"," sub link 2"," sub link 3"],
        icon:<Arrow />,
        frIcon:<SvgLike />

    },
    {
        title:"link three",
        id:3,
        link:["sub link 1"," sub link 2"," sub link 3"],
        icon:<Arrow />,
        frIcon:<SvgLike />

    },
    {
        title:"link four",
        id:4,
        link:["sub link 1"," sub link 2"," sub link 3"],
        icon:<Arrow />,
        frIcon:<SvgLike />

    },
    {
        title:"link five",
        id:5,
        link:["sub link 1"," sub link 2"," sub link 3"],
        icon:<Arrow />,
        frIcon:<SvgLike />
    },
    {
        title:"contact review",
        id:6,
        frIcon:<SvgPage />
    },
    {
        title:"link six",
        id:7,
        link:["sub link 1"," sub link 2"," sub link 3"],
        icon:<Arrow />,
        frIcon:<SvgLike />
    }
]

const SearchData=[
    {
        id:1,
        option:"option 1"
    },
    {
        id:2,
        option:"option 2"
    },
    {
        id:3,
        option:"option 3"
    },
    {
        id:4,
        option:"option 4"
    },
    {
        id:5,
        option:"option 5"
    },
    {
        id:6,
        option:"option 6"
    }
]





export {Pdata, SearchData};