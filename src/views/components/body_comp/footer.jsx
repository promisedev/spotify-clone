import List from './list.json'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer =()=>{
const year = new Date().getFullYear()
    return(
        <section className="body_footer_cont">
<article className="body_footer_link">
<div className="footer_link">
    {/* ------------------- */}

{ List.map((list_item,index)=>{
  const{name,list}= list_item;  
return(<article className="single_footer_link" key={index}>
<div className="footer_title">{name}</div>
<ul className="footer_list">
    {
    list.map((list,index)=>{

        return(
           <li key={index}>{list.name}</li> 
        )
    }) }
    
</ul>
</article>)

})
}

        {/* ---------------------- */}

</div>
<div className="footer_social">
<div className='social_link'><InstagramIcon/></div>
<div className='social_link'><TwitterIcon/></div>
<div className='social_link'><span className='f_icon'><FacebookIcon/></span></div>
</div>

</article>
{/* ---------------------------------------- */}
<article className="body_footer_copy">
<div className='footer_copy_link'>
    <ul>
        <li>Legal</li>
        <li>Privacy Center</li>
        <li>Privacy Policy</li>
        <li>Cookies</li>
        <li>About Ads</li>
    </ul>
</div>
<div className='footer_copy'>
&copy; {year} Kpalify AB
</div>

</article>
        </section>
    )
}

export default Footer