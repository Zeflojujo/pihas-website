import './VideoGalleryStyles.css';

function VideoGallery() {
  return (
    <div style={{marginBottom:"10px"}}>
        <div style={{clear:"both"}} id="video_gallery1_div">
            <div class="video_gallery1_heading">
                <h2 class="video_gallery1_h2h">PIHAS COLLEGE VIDEO GALLARY</h2>
                <p class="video_gallery1_h2h2">Healthy is Wealth</p>
            </div>
            <div class="video_gallery1_list1">
                <div class="video_gallery1_g video-responsive">
                    <p><iframe src="https://www.youtube.com/embed/mQigu9VtJCw" title='frame1' width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
                </div>
                <div class="video_gallery1_g video-responsive">
                    <p><iframe src="https://www.youtube.com/embed/mQigu9VtJCw" title='frame2' width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
                </div>
                <div class="video_gallery1_g video-responsive">
                    <p><iframe src="https://www.youtube.com/embed/mQigu9VtJCw" title='frame3' width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
                </div>
            </div>
            <p class="video_gallery1_loadbutton"><button class="video_gallery1_loadmore1" data-page="2">More Videos 3</button></p>
        </div>
    </div>
  )
}

export default VideoGallery