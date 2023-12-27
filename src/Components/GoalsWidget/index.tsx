// GoalsWidget.js

function GoalsWidget() {
  // Dados de metas adaptados para um contexto de academia
  const goals = [
    { id: 1, title: "Atingir 500 matrículas", completion: 80 },
    { id: 2, title: "80% de frequência mensal", completion: 60 },
    { id: 3, title: "Incorporar 3 novas modalidades de aula", completion: 40 },
    {
      id: 4,
      title: "Renovar equipamentos do setor de musculação",
      completion: 30,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Metas da Academia</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id} className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span>{goal.title}</span>
              <span>{goal.completion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
              <div
                className="bg-innovarte-green h-2.5 rounded-full"
                style={{ width: `${goal.completion}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalsWidget;
