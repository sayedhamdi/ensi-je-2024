export default function Author({ img, fullName, job }) {
  return (
    <div className="flex items-center">
      <img className="rounded-[50%] w-[100px] h-[100px]" src={img} alt="" />
      <div className="flex flex-col">
        <b>{fullName}</b>
        <span>{job}</span>
      </div>
    </div>
  );
}
