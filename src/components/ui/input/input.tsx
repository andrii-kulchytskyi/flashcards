import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  children: ReactNode
  className?: string
  search?: boolean
  variant?: 'icon' | 'input' | 'search'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'button'>(props: InputProps<T>) => {
  const { as: Component = 'input', className, icon, search, variant = 'input', ...rest } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${icon && s.icon} ${search && s.search} ${className}`}
      {...rest}
    />
  )
}
