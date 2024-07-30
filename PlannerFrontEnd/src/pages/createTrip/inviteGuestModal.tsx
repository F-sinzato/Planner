import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestModalProps {
  closeModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvite: (email: string) => void;
}

export function InviteGuestModal(props: InviteGuestModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] space-y-5 rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button type="button" onClick={props.closeModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400 text-left">
            Os convidados irão receber e-mails para confirmar a participação na
            sua viagem!
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {props.emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-8"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  type="button"
                  onClick={() => props.removeEmailFromInvite(email)}
                >
                  <X className="size-4 text-zinc-300" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800"></div>

        <form
          onSubmit={props.addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent placeholder-zinc-400 text-lg outline-none flex-1"
            />
          </div>

          <button
            type="submit"
            className="bg-zinc-300 hover:bg-purple-400 text-zinc-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2"
          >
            Convidar
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
