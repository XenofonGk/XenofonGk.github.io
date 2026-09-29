import { useTheme } from '../theme.jsx'
import { useI18n } from '../i18n/index.jsx'
import Icon from './Icon.jsx'

export default function ThemeToggle() {
  const { resolved, toggle } = useTheme()
  const { t } = useI18n()

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={t('nav.theme')}>
      <Icon name={resolved === 'dark' ? 'sun' : 'moon'} size={16} />
    </button>
  )
}
