import type { SlideDef } from '../../types'
import { ch01Slides } from './ch01-opening'
import { ch02Slides } from './ch02-what-is-ai'
import { ch03Slides } from './ch03-how-it-works'
import { ch04Slides } from './ch04-models'
import { ch05Slides } from './ch05-tools'
import { ch06Slides } from './ch06-talking'
import { ch07Slides } from './ch07-prompts'
import { ch08Slides } from './ch08-usecases'
import { ch09Slides } from './ch09-workshop'
import { ch10Slides } from './ch10-closing'

export const slides: SlideDef[] = [
  ...ch01Slides,
  ...ch02Slides,
  ...ch03Slides,
  ...ch04Slides,
  ...ch05Slides,
  ...ch06Slides,
  ...ch07Slides,
  ...ch08Slides,
  ...ch09Slides,
  ...ch10Slides,
]
