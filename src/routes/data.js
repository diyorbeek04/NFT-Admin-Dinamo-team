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
        path : "/dashboard",
        element : <DashboardPages/>
    },
    {
        id : 3,
        path : "/moreNFT",
        element : <MoreNFTPage/>
    },
    {
        id : 4,
        path : "/topcreators",
        element : <TopCreatorsPage/>
    },
    {
        id : 5,
        path : "/artist",
        element : <ArtistPage/>
    },
    {
        id : 6,
        path : "/*",
        element : <NotFound/>
    }
]
