export default function Video() {
    return (
      <video width="320" height="240" controls preload="none">
        <source src="../data/video/8by8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }