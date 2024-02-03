import React from 'react'
import clsx from 'clsx'
import { Badge } from './Badge'

type TagsInputProps = React.ComponentPropsWithoutRef<'input'> & {
    isError?: boolean
    tags: string[]
    onChangeTags?: (tags: string[]) => void
}

const styles = {
    default: 'border-gray-200 focus:bg-white focus:border-gray-500',
    error: 'border-red-500 focus:bg-white focus:border-gray-500'
}

export const TagsInput = ({ onChangeTags, tags = [], isError, className, ...props }: TagsInputProps) => {

    const onClose = (i: number) => {
        const newTags = [...tags]
        newTags.splice(i, 1)
        onChangeTags && onChangeTags(newTags)
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.nativeEvent.isComposing) return

        const value = e.currentTarget.value
        if (e.key === 'Backspace' && !value.length && tags.length > 0) {
            onClose(tags.length - 1)
            return
        }

        if (e.key !== 'Enter' || !value.trim()) return
        const newTags = [...tags, value]
        onChangeTags && onChangeTags(newTags)
        e.currentTarget.value = ''
        e.preventDefault()
    }

    return (
        <div className="flex flex-wrap text-gray-700 border leading-tight mb-3 p-3 rounded">
            {tags.map((tag, i) => {
                return (
                    <Badge label={tag} key={i} onClose={() => onClose(i)} />
                )
            })}
            <input
                type="text"
                className={'flex-grow border-0 mb-1 outline-none'}
                {...props}
            />
        </div>
    )
}

export default TagsInput;