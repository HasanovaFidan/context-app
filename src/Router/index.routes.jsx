import Fav from "../Page/site/Fav/Fav";
import Home from "../Page/site/Home/Home";
import SiteRoot from "../Page/site/SiteRoot";
import Detail from "../Page/site/detail/Detail";

const ROOT=[
    {
        path:"/",
        element:<SiteRoot/>,
        children: [{
            path:"/",
            element:<Home/>
        },
        {
            path:"/:id",
            element:<Detail/>
        },
        {
            path:"favorite",
            element:<Fav/>
        }
    ]
    }
]
export default ROOT