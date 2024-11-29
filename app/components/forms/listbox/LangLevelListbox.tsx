import { Listbox, ListboxButton, ListboxOption, ListboxOptions,  } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid"
import clsx from "clsx"
import React from "react"

const people = [{name: "HELLEO", id: 1}, {name: "HEY", id: 2}]


export default function LangLevelListBox() {
  const [selected, setSelected] = React.useState(people[1])

  return (
    <div className="w-52">
      <Listbox value={selected} onChange={(v) => {
        alert(v.name);
        setSelected(people[v.id - 1])
      }}>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-lg bg-black/60 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          onClick={(e) => alert(e)}
        >
          {selected.name}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--button-width)] rounded-xl border border-black/60 bg-black/60 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {people.map((person) => (
            <ListboxOption
              key={person.name}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{person.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}