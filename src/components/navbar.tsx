export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 w-full px-6">
      <div>
        <p>Logo</p>
      </div>
      <div className="w-[40%] h-9">
        <input className="border-sky-400 border-2 rounded-full w-full h-full" type="search" />
      </div>
      <div>
        <p>Reset Filters</p>
      </div>
    </nav>
  )
}