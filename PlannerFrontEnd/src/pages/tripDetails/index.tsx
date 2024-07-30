import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

import { CreateActivityModal } from "./createActivityModal";
import { LinksSidebar } from "./linksSidebar";
import { ActivitysPage } from "./activitysPage";
import { Button } from "../../Components/button";

export function TripDetailsPage() {
  const [isCreateActivityOpen, setIsCreateActivityOpen] = useState(false);

  function openCreateActivity() {
    setIsCreateActivityOpen(true);
  }

  function closeCreateActivity() {
    setIsCreateActivityOpen(false);
  }

  return (
    <>
      <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400" />
            <span className="text-lg tex    t-zinc-100">Rinopolis, Brazil</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <span className="text-base text-zinc-100">16 a 27 de agosto</span>
            </div>
            <div className="w-px h-6 bg-zinc-800" />
            <div>
              <Button>
                Alterar local e data
                <ArrowLeft className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        <main className="flex gap-16 px-4">
          <ActivitysPage openCreateActivity={openCreateActivity} />
          <LinksSidebar />
        </main>

        {isCreateActivityOpen && (
          <CreateActivityModal closeCreateActivity={closeCreateActivity} />
        )}
      </div>
    </>
  );
}
