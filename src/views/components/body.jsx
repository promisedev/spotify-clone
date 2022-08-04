import { useEffect, useState } from 'react'
import Component1 from './body_comp/component1'
import Component2 from './body_comp/component2'
import Component3 from './body_comp/component3'
import Component4 from './body_comp/component4'
import Component5 from './body_comp/component5'
import Component6 from './body_comp/component6'
import Footer from './body_comp/footer'
import axios from 'axios'


const Body = ()=>{
const headers =  {
    'X-RapidAPI-Key': '875554d012msh47d737a14537181p146948jsn5736817efc8f',
    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
  }
;
const [songs, setSongs] = useState([])

    useEffect(async()=>{

        await axios.get('https://genius.p.rapidapi.com/artists/16775/songs',{headers:headers})
        .then((response)=> {
	setSongs(response.data.response.songs);
}).catch((error)=> {
	console.error(error);
});
    },[])
//console.log(songs)

// /getting different dommy category
  const editors = songs.filter(song=>song.annotation_count >= 17)
  
const focus = songs.filter(song=>song.annotation_count === 0)

  const myfocus = focus.filter((focus,index)=>index<=4)

const mood = songs.filter(song=>song.annotation_count === 1)
const mymood = mood.filter((focus,index)=>index<=4)

const popular = songs.filter((song,index)=>index<=4)

const sleep = songs.filter(song=>song.annotation_count >1 )
const mysleep = sleep.filter((sleep,index)=>index<=4)


const trackhome = songs.filter(song=>song.annotation_count >5 )
const mytrack = trackhome.filter((track,index)=>index<=4)




    return(
        <article className='spot_body'>
         <div className='spot_body_cont'>   
        <Component1 props={editors}/>
        <Component2 props={myfocus} />
        <Component3  props={mymood} />
        <Component4   props={popular} />
         <Component5 props={mysleep} />
         <Component6 props={mytrack}  />
         <Footer/>
        </div>
        </article>
    )
}
export default Body