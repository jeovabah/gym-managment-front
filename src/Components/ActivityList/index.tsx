import { CheckCircledIcon, ClockIcon } from "@radix-ui/react-icons";

// Função para formatar a data atual de forma legível
const formatDate = (date: any) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("pt-BR", options);
};

// Simulando dados de atividades
const activities = [
  {
    id: 1,
    title: "Orientação pela manhã",
    status: "Completo",
    startTime: "09:00",
    endTime: "10:00",
    instructor: "Vitor Samuel",
  },
  {
    id: 2,
    title: "Treino personalizado",
    status: "Em andamento",
    startTime: "11:00",
    endTime: "12:00",
    instructor: "Carlos Augusto",
  },
  // Adicione mais atividades conforme necessário
];

function ActivityList() {
  const today = new Date();
  const totalActivities = activities.length;
  const completedActivities = activities.filter(
    (activity) => activity.status === "Completo"
  ).length;
  const completionRate = totalActivities
    ? (completedActivities / totalActivities) * 100
    : 0;

  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
      {/* Cabeçalho com a data e barra de progresso */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Atividades de Hoje</h2>
          <span>{formatDate(today)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
          <div
            className="bg-innovarte-blue h-2.5 rounded-full"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-700">
          Você completou {completedActivities} de {totalActivities} atividades
          hoje.
        </p>
      </div>

      {/* Lista de atividades */}
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 bg-gray-100 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{activity.title}</h3>
              <div className="flex items-center">
                {activity.status === "Completo" && (
                  <CheckCircledIcon className="w-6 h-6 text-green-500" />
                )}
                {activity.status === "Em andamento" && (
                  <ClockIcon className="w-6 h-6 text-yellow-500" />
                )}
                <span
                  className={`ml-2 text-sm ${
                    activity.status === "Completo"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Horário: {activity.startTime} - {activity.endTime}
            </p>
            <p className="text-sm text-gray-600">
              Instrutor: {activity.instructor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityList;
