import { statusLabel, type PortfolioProject } from '@/lib/portfolio'

/** An inspection stamp showing a project's status. */
export default function StatusStamp({
  status,
}: {
  status: PortfolioProject['status']
}) {
  return (
    <span className={`stamp stamp-${status}`}>
      <span className="sr-only">Status: </span>
      {statusLabel(status)}
    </span>
  )
}
