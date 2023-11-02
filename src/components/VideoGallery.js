import './VideoGalleryStyles.css';

function VideoGallery() {
  return (
    <div style={{marginBottom:"10px"}}>
        <div style={{clear:"both"}} id="video_gallery1_div">
            <div className="video_gallery1_heading">
                <h2 className="video_gallery1_h2h" style={{fontSize: "24px"}}>PIHAS COLLEGE VIDEO GALLARY</h2>
                <p className="video_gallery1_h2h2">Healthy is Wealth</p>
            </div>
            <div className="video_gallery1_list1">
                <div className="video_gallery1_g video-responsive">
                    <div><iframe src="https://www.youtube.com/embed/mQigu9VtJCw" title='frame1' width="640" height="360" frameBorder="0" allowFullScreen="allowfullscreen"></iframe></div>
                </div>
                <div className="video_gallery1_g video-responsive">
                    <div><iframe src="https://www.youtube.com/embed/mQigu9VtJCw" title='frame2' width="640" height="360" frameBorder="0" allowFullScreen="allowfullscreen"></iframe></div>
                </div>
                <div className="video_gallery1_g video-responsive">
                    <div><iframe src="https://www.youtube.com/embed/mQigu9VtJCw" title='frame3' width="640" height="360" frameBorder="0" allowFullScreen="allowfullscreen"></iframe></div>
                </div>
            </div>
            <p className="video_gallery1_loadbutton"><button className="video_gallery1_loadmore1" data-page="2">More Videos 3</button></p>
        </div>
    </div>
  )
}

export default VideoGallery