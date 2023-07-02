import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

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
			className={classNames(
				styles.sidebar,
				{ [styles.collapsed]: collapssed },
				[className]
			)}
		>
			<button onClick={onToggle}>{t('Переключить')}</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={styles.lang} />
			</div>
		</div>
	);
};
