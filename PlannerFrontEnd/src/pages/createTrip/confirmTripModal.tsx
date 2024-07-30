import { Plus, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  closeConfirmModal: () => void;
  createTrip: (Event: FormEvent<HTMLFormElement>) => void;
  setOwnerEmail: (email: string) => void;
  setOwnerName: (name: string) => void;
}

export function ConfirmTripModal({
  closeConfirmModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] space-y-5 rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button type="button" onClick={closeConfirmModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400 text-left">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis , Brazil
            </span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              onChange={event => setOwnerName(event.target.value)}
              className="bg-transparent placeholder-zinc-400 text-lg outline-none flex-1"
            />
          </div>

          <div className="h-14 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              onChange={event => setOwnerEmail(event.target.value)}
              placeholder="Seu e-mail"
              className="bg-transparent placeholder-zinc-400 text-lg outline-none flex-1"
            />
          </div>

          <button
            type="submit"
            className="justify-center h-11 w-full bg-zinc-300 hover:bg-purple-400 text-zinc-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2"
          >
            Confirmar viagem
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
