// pages/client/[id].js (Dynamic Route for Client Detail)
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ClientProfile from "@/components/clients/Profile";
import ContactInformation from "@/components/clients/Infos";
import SubscriptionDetails from "@/components/clients/Subscription";
import { fetchClientById } from "@/services/client/index";

export default function ClientDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const fetchedClient = await fetchClientById(id);
        setClient(fetchedClient);
      }
    };

    fetchData();
  }, [id]);

  if (!client) return <div>Loading...</div>;

  return (
    <main className="w-full bg-gray-100 overflow-y-auto">
      <div className="flex flex-col w-full bg-gray-100 p-2 lg:p-10 space-y-6">
        <ClientProfile name={client.name} gender={client.gender} avatarSrc={client.avatarSrc} />
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <ContactInformation
            email={client.email}
            telephone={client.telephone}
            dob={client.dob}
            registrationDate={client.registrationDate}
          />
          <SubscriptionDetails
            subscriptionStatus={client.subscriptionStatus}
            numReservations={client.numReservations}
          />
        </div>
      </div>
    </main>
  );
}
