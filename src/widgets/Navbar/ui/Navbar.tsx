import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={styles.links}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<Modal isOpen={isAuthModal} onClose={() => onToggleModal()}>
				asdasdsadasdsadasd asdsadsadsada sadsad asdsa dasd
			</Modal>
		</div>
	);
};
