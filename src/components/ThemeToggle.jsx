import { useTheme } from '../theme.jsx'
import { useI18n } from '../i18n/index.jsx'

export default function ThemeToggle() {
  const { resolved, toggle } = useTheme()
  const { t } = useI18n()

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={t('nav.theme')}>
      <span aria-hidden="true">{resolved === 'dark' ? '☀' : '☾'}</span>
    </button>
  )
}
