export default function Navbar() {
  let links = ["Work", "Approach", "Culture", "Careers", "Blog"];
  return (
    <div className="flex justify-between px-[60px] py-[20px]">
      <b className="text-[30px]">PixelMatters</b>
      <ul className="flex gap-[20px] items-center">
        {links.map((link) => (
          <li key={link} className=" hover:text-red-400 ">
            {link}
          </li>
        ))}
        <li>
          <button className="bg-[#ff6e33] text-white px-[20px] py-[10px]">
            Get in Touch
          </button>
        </li>
      </ul>
    </div>
  );
}
