import { CircleDashed, Link2, Plus, UserCog } from "lucide-react";

export function LinksSidebar() {
  return (
    <div className="w-80 space-y-6">
      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Links importantes</h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                Reserva do AirBNB
              </span>
              <a href="a" className="block font-xs text-zinc-400 truncate">
                www.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com
              </a>
            </div>
            <Link2 className="text-zinc-400 size-5 shrink-0" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                Reserva do AirBNB
              </span>
              <a href="a" className="block font-xs text-zinc-400 truncate">
                www.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com
              </a>
            </div>
            <Link2 className="text-zinc-400 size-5 shrink-0" />
          </div>
        </div>

        <button className="w-full justify-center bg-purple-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-800">
          <Plus className="size-5" />
          Cadastrar novo link
        </button>
      </div>

      <div className="w-full h-px bg-zinc-800" />

      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Convidados</h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">Jessica</span>
              <span className="block font-sm text-zinc-400 truncate">
                jessica@gmail.com
              </span>
            </div>
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          </div>
        </div>

        <button className="w-full justify-center bg-purple-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-800">
          <UserCog className="size-5" />
          Gerenciar convidados
        </button>
      </div>
    </div>
  );
}
