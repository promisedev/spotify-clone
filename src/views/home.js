import Navigation from './components/navigation'
import Body from './components/body'
import Menu from './components/menu'

const Home = ()=>{

    return(

        <section className="spotify">
        <section className="spot_container">
{/* spotify left menu */}
<article className="spot_menu_cont">
<Menu/>
</article>
{/* spotify right content */}
<article className="spot_body_cont">
<Navigation/>
<Body/>
</article>
        </section>
<section className="spot_footer">
    <div className='spot_footer_info'>
        <div className='footer_info_h2'>PREVIEW OF KPALIFY</div>
        <div className='footer_info_h1'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed</div>
    </div>
    <div className="spot_nav_link1">Sign up free</div>
</section>

</section>
    )
}

export default Home