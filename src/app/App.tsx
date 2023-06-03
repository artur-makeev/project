import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { AboutPage } from 'pages/AboutPage/';
import { MainPage } from 'pages/MainPage/';

export const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>about</Link>
			<Suspense fallback={<div>loading ...</div>}>
				<Routes>
				
					<Route path='/about' element={<AboutPage />}/>
					<Route path='/' element={<MainPage />}/>
			
				</Routes>
			</Suspense>
		</div>
	)};
