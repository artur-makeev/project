import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './hekpers/classNames/classNames';



export const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>about</Link>
			<Suspense fallback={<div>loading ...</div>}>
				<Routes>
				
					<Route path='/about' element={<AboutPageLazy />}/>
					<Route path='/' element={<MainPageLazy />}/>
			
				</Routes>
			</Suspense>
		</div>
	)};
