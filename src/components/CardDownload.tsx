import { BsCloudDownload } from 'react-icons/bs'

interface CardDownloadProps {
  title: string
  color: 'primary' | 'green' | 'yellow'
}

export function CardDownload({ title, color }: CardDownloadProps) {
  return (
    <div className="flex cursor-pointer items-center overflow-hidden rounded-md">
      <div className={`grid h-8 place-items-center bg-${color}/40 p-1`}>
        <BsCloudDownload size={18} className={`text-${color}`} />
      </div>
      <span
        className={`grid h-8 place-items-center bg-${color}/20 px-2 text-xs text-${color}`}
      >
        {title}
      </span>
    </div>
  )
}
