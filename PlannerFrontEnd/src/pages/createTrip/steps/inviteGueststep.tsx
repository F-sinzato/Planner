import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestProps {
  openModal: () => void;
  emailsToInvite: string[];
  openConfirmModal: () => void;
}

export function InviteGuestStep({
  emailsToInvite,
  openConfirmModal,
  openModal,
}: InviteGuestProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openModal}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} pessoas convidadas
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <button
        onClick={openConfirmModal}
        className="bg-zinc-300 text-zinc-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-400"
      >
        Confirmar Viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}
