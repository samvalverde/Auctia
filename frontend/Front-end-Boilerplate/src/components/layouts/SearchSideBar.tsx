const SideBarIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="sidebar-icon">
      {icon}
    </div>
  )
}

const categories = [
  { name: 'Motores'/*, icon: <SideBarIcon icon="🚗" />*/ },
  { name: 'Filtros'/*, icon: <SideBarIcon icon="🔧" />*/ },
  { name: 'Baterías'/*, icon: <SideBarIcon icon="🔋" />*/ },
  { name: 'Llantas'/*, icon: <SideBarIcon icon="🚙" />*/ },
  { name: 'Herramientas'/*, icon: <SideBarIcon icon="🛠" />*/ },
]

const SearchSideBar = () => {
  return (
    <aside className="col-span-2 bg-white shadow-md rounded-lg p-6 hidden md:block">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Categorías de Productos</h3>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.name} className="flex items-center space-x-2">
            <span className="text-gray-700 cursor-pointer hover:text-green-500">{category.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SearchSideBar