import Author from "./Author";

export default function MainArticle({
  coverImage,
  category,
  createAt,
  title,
  description,
  author,
}) {
  return (
    <div className="flex">
      <img src={coverImage} alt="" />
      <div className="flex flex-col justify-between p-[20px] gap-[40px]">
        <div>
          <span>{category}</span>-<span>{createAt}</span>
        </div>
        <h1 className="text-[40px] font-bold">{title}</h1>
        <p className="text-[18px]">{description}</p>
        <Author img={author.img} fullName={author.fullName} job={author.job} />
      </div>
    </div>
  );
}
