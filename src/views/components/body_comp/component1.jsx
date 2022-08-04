import Music from './music'

const Component1 = (props)=>{
const songs = props.props


    return(
        <section className="body_component">
<div className="body_title"><div className="body_title_txt">Editors Picks</div></div>
<div className="body_link"><div className="body_link_txt">SEE ALL</div></div>
<div className="body_content">

 {songs.map((song,index)=>{
const {artist_names,full_title,header_image_thumbnail_url} = song;
  return(
    <Music props={{artist_names,full_title,header_image_thumbnail_url}}key={index}/>
  )
 })  }

</div>
        </section>
    )
}

export default Component1