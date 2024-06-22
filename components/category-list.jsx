const CategoryList = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-4 bg-slate-200">
        <a href="/" className="">
          <img src="categorybanner_1_img.jpg" className="rounded-md" />
        </a>
        <a href="/">
          <img src="categorybanner_2_img.webp" className="rounded-md" />
        </a>
        <a href="/">
          <img src="categorybanner_3_img.webp" className="rounded-md" />
        </a>
        <a href="/">
          <img src="categorybanner_4_img.webp" className="rounded-md" />
        </a>
      </div>
    </>
  );
};

export default CategoryList;
