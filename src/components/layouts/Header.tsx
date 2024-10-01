
const Header = () => {
  return (
    <>
      <header className="bg-primary-base z-50 flex-1 pe-4 fixed top-0 w-full flex gap-3 ps-4 text-white items-center py-[18px]">
      <i className="material-icons">search</i>
        <input placeholder="Search Movies..." className="placeholder:text-white outline-none w-full h-full bg-transparent" />
        <i className="material-icons">menu</i>
      </header>
    </>
  );
};

export default Header;
