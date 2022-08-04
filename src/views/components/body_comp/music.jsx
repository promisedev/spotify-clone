import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useEffect } from 'react';
import { useState } from 'react';



const Music =(props)=>{
 const item = props.props    
//console.log(item)

const [islong,setislong] =useState(false) 
useEffect(()=>{
    if(item?.artist_names.length >= 15){
        setislong(true)
    }
    else{
        setislong(false)
    }
},[])

//console.log(islong)




const showPlay =(e)=>{
   const music_pp =e.currentTarget.firstChild.firstChild

   music_pp.classList.add('show_music_pp')
}
const hidePlay =(e)=>{
   const music_pp =e.currentTarget.firstChild.firstChild

   music_pp.classList.remove('show_music_pp')
}

    return(
        <article className="single_music" onMouseOver={showPlay} onMouseOut={hidePlay}>
            <div className="music_pp_cont">
                <div className="music_pp"><PlayArrowIcon/></div>
            </div>
            <div className="music_art" style={{backgroundImage:`url(${item?.header_image_thumbnail_url})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
            <div className="music_title">{islong?item?.artist_names.substring(0,15)+'...':item?.artist_names}</div>
            <div className="music_desc">{item?.full_title.substring(0,30)+'...'}</div>
            
        </article>
    )
}

export default Music