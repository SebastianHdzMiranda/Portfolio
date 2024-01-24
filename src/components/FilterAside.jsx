import React from 'react'

function FilterAside({animarSidebar, mostrarNav}) {
  return (
    <div className={`filterAside ${animarSidebar ? 'filterAside--activo' : ''}`} onClick={mostrarNav}></div>
  )
}

export default FilterAside;