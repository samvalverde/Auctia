const InventoryTable = () => {
  const dummyData = [
    { id: 1, name: 'Producto A', date: '2024-10-04' },
    { id: 2, name: 'Producto B', date: '2024-10-05' },
    // Simulación de datos cargados
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Fecha de Carga</th>
        </tr>
      </thead>
      <tbody>
        {dummyData.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
