import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Navigation = ()=>{

    return(
        <section className='spot_nav'>
<article className="spot_nav1">
<div className="spot_los"><IconButton><ArrowBackIosIcon style={{color:'rgb(154, 154, 156)',fontSize:'18px'}}/></IconButton></div>
<div className="spot_los"><IconButton><ArrowForwardIosIcon style={{color:'rgb(154, 154, 156)',fontSize:'18px'}}/></IconButton></div>
</article>
{/* --------------------------------------- */}
<article className="spot_nav2">
<div className="spot_nav_link">Premium</div>
<div className="spot_nav_link">Support</div>
<div className="spot_nav_link">Download</div>
</article>
{/* --------------------------------------- */}
<article className="spot_nav3">
<div className="spot_nav_link">Signup</div>
<div className="spot_nav_link1">Log in</div>
</article>

        </section>
    )
}
export default Navigation