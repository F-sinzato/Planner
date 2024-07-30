import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { DatePickerModal } from "./datePickerModal";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  openGuestInput: () => void;
  closeGuestInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (date: DateRange | undefined) => void;
  eventStartAndEndDates: DateRange | undefined;
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestInput,
  openGuestInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          onChange={(event) => setDestination(event.target.value)}
          placeholder="Para onde vc vai?"
          className="bg-transparent placeholder-zinc-400 text-lg outline-none"
        />
      </div>

      <button
        disabled={isGuestInputOpen}
        onClick={openDatePicker}
        className="flex items-center gap-2 text-left w-52"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="placeholder-zinc-400 text-lg w-40 flex-1 ">
          {displayDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <DatePickerModal
          closeDatePickerModal={closeDatePicker}
          onSelect={setEventStartAndEndDates}
          selectedDate={eventStartAndEndDates}
        />
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {!isGuestInputOpen ? (
        <button
          onClick={openGuestInput}
          className="bg-zinc-300 text-zinc-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-400"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      ) : (
        <button
          onClick={closeGuestInput}
          className="bg-purple-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-800"
        >
          Alterar local e data
          <ArrowLeft className="size-5" />
        </button>
      )}
    </div>
  );
}
