import React from "react";
import ClientProfile from "./Profile";
import ContactInformation from "./Infos";
import SubscriptionDetails from "./Subscription";

export default function ClientDetails() {
  return (
    <main className="w-full bg-gray-100 overflow-y-auto">
      <div className="flex flex-col w-full bg-gray-100 p-2 lg:p-10 space-y-6">
        <ClientProfile name="EL MARZOUKI OTMANE" gender="male" avatarSrc="/img/avatar.jpg" />
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <ContactInformation
            email="test@test.com"
            telephone="09939393"
            dob="46464646"
            registrationDate="464646"
          />
          <SubscriptionDetails subscriptionStatus="active" numReservations={4} />
        </div>
      </div>
    </main>
  );
}
