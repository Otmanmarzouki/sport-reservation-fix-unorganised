import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ClientProfile from "@/components/Costumer/Detail/Profile";
import ContactInformation from "@/components/Costumer/Detail/Infos";
import SubscriptionDetails from "@/components/Costumer/Detail/Subscription";
import { fetchClientById } from "@/services/client/index";

export default function Detail() {
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
        <ClientProfile
          name={`${client.data.Prenom} ${client.data.Nom}`}
          gender="male"
          avatarSrc="/img/avatar.jpg"
        />
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <ContactInformation
            email={client.data.Email}
            telephone={client.data.Tel}
            registrationDate={client.data.registrationDate}
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
