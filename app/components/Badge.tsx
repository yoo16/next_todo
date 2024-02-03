import React from 'react'
import clsx from 'clsx'

const variants = {
    primary: 'bg-green-500 text-white',
    inverse: 'bg-white text-gray-600 border',
    danger: 'bg-red-500 text-white'
}

type BadgeProps = React.ComponentPropsWithoutRef<'span'> & {
    label: string;
    variant?: keyof typeof variants
    onClose?: () => void
}

export const Badge = ({ label = "", variant = 'primary', onClose, className, ...props }: BadgeProps) => {
    return (
        <span className={clsx('font-medium rounded inline-flex items-center me-3', variants[variant], className)}>
            <span className="py-1 px-3 text-sm">{label}{props.children}</span>
            

            {onClose && (
                <span
                    className="inline-flex items-center border-l h-full w-hull cursor-pointer px-2"
                    onClick={() => onClose && onClose()}
                >
                    x
                </span>
            )}
        </span>
    )
}