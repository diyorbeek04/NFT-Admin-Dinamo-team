import Login from "../pages/Login"
import DashboardPages from "../pages/dashboard"
import MoreNFTPage from "../pages/DiscoverMoreNFT"
import TopCreatorsPage from "../pages/TopCreators"
import ArtistPage from "../pages/artist"
import NotFound from "../pages/notFound/index"
export const dataRouter = [
    {
        id : 1,
        path : "/",
        element : <Login/>
    },
    {
        id : 2,
        path :  window.localStorage.getItem('AuthToken') && "/dashboard",
        element : window.localStorage.getItem('AuthToken') && <DashboardPages/>
    },
    {
        id : 3,
        path :  window.localStorage.getItem('AuthToken') && "/moreNFT",
        element : window.localStorage.getItem('AuthToken') && <MoreNFTPage/>
    },
    {
        id : 4,
        path :  window.localStorage.getItem('AuthToken') && "/topcreators",
        element : window.localStorage.getItem('AuthToken') && <TopCreatorsPage/>
    },
    {
        id : 5,
        path :  window.localStorage.getItem('AuthToken') && "/artist",
        element : window.localStorage.getItem('AuthToken') && <ArtistPage/>
    },
    {
        id : 6,
        path : "/*",
        element : <NotFound/>
    }
]