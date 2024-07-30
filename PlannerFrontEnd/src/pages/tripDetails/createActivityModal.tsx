import { Calendar, Plus, Tag, X } from "lucide-react";

interface props {
  closeCreateActivity: () => void;
}

export function CreateActivityModal({ closeCreateActivity }: props) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] space-y-5 rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivity}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400 text-left">
            Todos os convidados podem ver as atividades
          </p>
        </div>

        <form className="space-y-3">
          <div className="h-14 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="tittle"
              placeholder="Qual a atividade"
              className="bg-transparent placeholder-zinc-400 text-lg outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="datetime-local"
                name="occursAt"
                placeholder="Data e horário "
                className="bg-transparent placeholder-zinc-400 text-lg outline-none flex-1 [color-scheme: dark]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="justify-center h-11 w-full bg-zinc-300 hover:bg-purple-400 text-zinc-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2"
          >
            Salvar atividade
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
