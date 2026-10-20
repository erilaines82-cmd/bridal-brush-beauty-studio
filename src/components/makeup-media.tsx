import { photoGroups } from "@/lib/makeup-media";

export function PhotoCollection({ group }: { group: (typeof photoGroups)[number] }) {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl text-gradient-gold">{group.title}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {group.photos.map((photo) => (
          <figure key={photo.title} className="overflow-hidden rounded-lg bg-card">
            <img src={photo.src} alt={photo.title} loading="lazy" width={512} height={1024} className="aspect-[3/4] w-full object-cover object-top" />
            <figcaption className="p-4 font-display text-lg">{photo.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function TutorialVideos({ videos }: { videos: { id: string; t: string; c: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {videos.map((video) => (
        <article key={video.id} className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="aspect-video w-full">
            <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}`} title={video.t} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full border-0" />
          </div>
          <div className="p-5">
            <h3 className="text-lg">{video.t}</h3>
            <p className="mt-2 text-xs text-muted-foreground">por {video.c} · YouTube</p>
            <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-primary underline underline-offset-4">Assistir no YouTube ↗</a>
          </div>
        </article>
      ))}
    </div>
  );
}