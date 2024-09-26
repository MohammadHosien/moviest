
const Header = () => {
  return (
    <>
      <header className="bg-primary-base flex-1 flex gap-3 ps-4 text-white items-center py-[18px]">
      <i className="material-icons">search</i>
        <input placeholder="Search Movies..." className="placeholder:text-white outline-none w-full h-full bg-transparent" />
      </header>
    </>
  );
};

export default Header;
