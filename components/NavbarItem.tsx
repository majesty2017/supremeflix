interface NavbarItemProps {
    label: string,
}
const NavbarItem = ({label}: NavbarItemProps) => {
  return (
    <div className="cursor-pointer hover:text-gray-300 transition">
        {label}
    </div>
  )
}

export default NavbarItem