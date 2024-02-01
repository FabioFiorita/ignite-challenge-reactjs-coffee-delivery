import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export function Input({ isOptional = false, className, ...props }: InputProps) {
  return (
    <div className={twMerge('relative flex items-center', className)}>
      <input
        className="w-full rounded border bg-base-input p-3 text-sm text-base-text"
        {...props}
      />
      {isOptional && (
        <span className="absolute right-0 mr-3 text-sm italic text-base-label">
          Opcional
        </span>
      )}
    </div>
  )
}
