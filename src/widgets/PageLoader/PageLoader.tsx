import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={classNames(styles.PageLoader, {}, [className])}>
			<Loader />
		</div>
	);
};
