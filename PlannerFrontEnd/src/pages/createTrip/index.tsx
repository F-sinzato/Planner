import { FormEvent, useState } from "react";
import { InviteGuestModal } from "./inviteGuestModal";
import { ConfirmTripModal } from "./confirmTripModal";
import { DestinationAndDateStep } from "./steps/destinationAndDateStep";
import { InviteGuestStep } from "./steps/inviteGueststep";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

export function CreateTripPage() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>();
  
  const navigate = useNavigate();

  function openGuestInput() {
    if (!isGuestInputOpen) {
      setIsGuestInputOpen(true);
    }
  }

  function closeGuestInput() {
    if (isGuestInputOpen) {
      setIsGuestInputOpen(false);
    }
  }

  function openModal() {
    if (!isGuestModalOpen) {
      setIsGuestModalOpen(true);
    }
  }

  function closeModal() {
    if (isGuestModalOpen) {
      setIsGuestModalOpen(false);
    }
  }

  function openConfirmModal() {
    if (!isConfirmTripModalOpen) {
      setIsConfirmTripModalOpen(true);
    }
  }

  function closeConfirmModal() {
    if (isConfirmTripModalOpen) {
      setIsConfirmTripModalOpen(false);
    }
  }

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!destination || !dateRange?.from || !dateRange?.to) {
      return;
    }

    if (!ownerEmail || !ownerName) {
      return;
    }

    if (emailsToInvite.length === 0) {
      return;
    }

    const response = await api.post("./trips", {
      destination,
      starts_at: dateRange.from,
      ends_at: dateRange.to,
      owner_name: ownerName,
      owner_email: ownerEmail,
    });

    const {tripId} = response.data

    navigate(`/trips/${tripId}`)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );
    setEmailsToInvite(newEmailList);
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-SolPattern bg-no-repeat bg-center bg-[length:600px_600px]">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <p className="text-zinc-300 text-lg">
            Irrrá 🤠, Planeje sua próxima viagem!
          </p>

          <div className="space-y-4">
            <DestinationAndDateStep
              closeGuestInput={closeGuestInput}
              isGuestInputOpen={isGuestInputOpen}
              openGuestInput={openGuestInput}
              setDestination={setDestination}
              setEventStartAndEndDates={setDateRange}
              eventStartAndEndDates={dateRange}
            />

            {isGuestInputOpen && (
              <InviteGuestStep
                emailsToInvite={emailsToInvite}
                openConfirmModal={openConfirmModal}
                openModal={openModal}
              />
            )}
          </div>

          <p className="text-zinc-500 text-sm">
            Ao utilizar nosso app você automaticamente concorda <br /> com
            nossos{" "}
            <a href="#" className="underline text-zinc-300">
              termos de uso
            </a>{" "}
            e{" "}
            <a href="#" className="underline text-zinc-300">
              políticas de privacidade
            </a>
          </p>
        </div>
      </div>
      {isGuestModalOpen && (
        <InviteGuestModal
          closeModal={closeModal}
          addNewEmailToInvite={addNewEmailToInvite}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvite={removeEmailFromInvites}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmModal={closeConfirmModal}
          createTrip={createTrip}
          setOwnerEmail={setOwnerEmail}
          setOwnerName={setOwnerName}
        />
      )}
    </>
  );
}
