import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation();
	const [collapssed, setCollapsed] = useState<boolean>(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			data-testid='sidebar'
			className={classNames(
				styles.sidebar,
				{ [styles.collapsed]: collapssed },
				[className]
			)}
		>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={styles.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapssed ? '>' : '<'}
			</Button>
			<div className={styles.items}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={styles.item}
				>
					<MainIcon className={styles.icon} />
					<span className={styles.link}>{t('Главная')}</span>
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
					className={styles.item}
				>
					<AboutIcon className={styles.icon} />
					<span className={styles.link}>{t('О сайте')}</span>
				</AppLink>
			</div>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapssed} className={styles.lang} />
			</div>
		</div>
	);
};
