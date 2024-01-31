import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface LabelProps {
  children: ReactNode
}

export function Label(props: LabelProps) {
  return <div className="flex items-center gap-3">{props.children}</div>
}

export interface LabelPrefixProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function LabelPrefix(props: LabelPrefixProps) {
  return (
    <div className={twMerge('rounded-full p-4 text-white', props.className)}>
      {props.children}
    </div>
  )
}

export interface LabelContentProps {
  children: ReactNode
}

export function LabelContent(props: LabelContentProps) {
  return <div className="text-base-text">{props.children}</div>
}
