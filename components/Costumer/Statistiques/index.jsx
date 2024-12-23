import SportCard from "./SportCard";
import ClientStatus from "./ClientStatus";
import Header from "../../../Commons/Header";
import SportPieChart from "./PieChart";
import useSportsData from "@/hooks/useSportsData";

const NombreDeClientSport = () => {
  const { sportsData, loading, error } = useSportsData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-8">
      <div className="w-full bg-gray-100 pt-7 lg:w-auto">
        <Header title="Nombre de client par sport" className="text-2xl mb-6" />
        <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-8">
          {sportsData.map((sport, index) => (
            <SportCard key={index} {...sport} />
          ))}
        </div>
        <div className="flex flex-col xl:flex-row mx-auto gap-8 justify-between">
          <div className="lg:w-96 w-full mb-8">
            <div className="flex flex-col p-4">
              <Header title="Répartition des clients par sport" className="text-xl mb-4" />
              <SportPieChart sportsData={sportsData} />
            </div>
          </div>

          <div className="w-full mb-8">
            <div className="flex flex-col p-4">
              <Header title="Nombre de client par statut" className="text-sm font-bold mb-4" />
              <ClientStatus />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NombreDeClientSport;
