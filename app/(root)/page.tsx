import  EmptyState  from "@/components/EmptyState";
import  Header  from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { getAllVideos } from "@/lib/actions/video";

const page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  const { videos } = await getAllVideos(
    query,
    filter,
    Number(page) || 1
  );

  return (
    <main className="wrapper page">
      <Header subHeader="Public Library" title="All Videos" />

      {videos?.length > 1? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              {...video}
              id={video.videoId}
              title={video.title}
              thumbnail={video.thumbnailUrl}
              createdAt={video.createdAt}
              userImg={user?.image ?? ""}
              username={user?.name ?? "Guest"}
              views={video.views}
              visibility={video.visibility}
              duration={video.duration}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="No Videos Found"
          description="Try adjusting your search."
        />
      )}

      {/* {pagination?.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          queryString={query}
          filterString={filter}
        />
      )} */}
    </main>
  );
};

export default page;