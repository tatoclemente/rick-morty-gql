import { Options } from "../interfaces"

export const optionsStatus: Options[] = [
  { value: '', label: 'All' },
  { value: 'Alive', label: 'Alive' },
  { value: 'Dead', label: 'Dead' },
  { value: 'unknown', label: 'Unknown' },
]

export const optionsSpecies: Options[] = [
  { value: '', label: 'All' },
  { value: 'Human', label: 'Human' },
  { value: 'Alien', label: 'Alien' },
  { value: 'Humanoid', label: 'Humanoid' },
  { value: 'Poopybutthole', label: 'Poopybutthole' },
  { value: 'Mythological Creature', label: 'Mythological Creature' },
  { value: 'Animal', label: 'Animal' },
  { value: 'Disease', label: 'Disease' },
  { value: 'Robot', label: 'Robot' },
  { value: 'Cronenberg', label: 'Cronenberg' },
]

export const optionsGender: Options[] = [
  { value: '', label: 'All' },
  { value: 'Female', label: 'Female' },
  { value: 'Male', label: 'Male' },
  { value: 'Genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' },
]
