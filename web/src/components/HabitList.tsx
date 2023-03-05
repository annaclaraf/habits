import { Check } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import dayjs from 'dayjs';

interface HabitLisProps {
  date: Date
}

export function HabitsList({ date }: HabitLisProps) {

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date())

  return (
    <div className='mt-6 flex flex-col gap-3'>
      <Checkbox.Root
        className='flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed'
        disabled={isDateInPast}
      >
        <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-50 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background'>
          <Checkbox.Indicator>
            <Check size={20} className="text-white" />
          </Checkbox.Indicator>
        </div>

        <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
          Beber 2L de água
        </span>
      </Checkbox.Root>
    </div>
  )
}