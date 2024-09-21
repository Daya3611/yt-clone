import VideoDetails from "@/components/VideoDetails";

export default function VideoDetailsPage({ params }) {
  const { categoryId, videoId } = params;
  return <VideoDetails categoryId={categoryId} videoId={videoId} />;
}
