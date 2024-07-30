import { X } from "lucide-react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface props {
  closeDatePickerModal: () => void;
  selectedDate: DateRange | undefined;
  onSelect: (date: DateRange | undefined) => void;
}

export function DatePickerModal({
  closeDatePickerModal,
  selectedDate,
  onSelect,
}: props) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="space-y-5 rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecione a data</h2>
            <button type="button" onClick={closeDatePickerModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
        </div>

        <DayPicker
          className="w-full items-center justify-center content-center"
          selected={selectedDate}
          onSelect={onSelect}
          mode="range"
        />
      </div>
    </div>
  );
}
