import { LoginForm } from './components/LoginForm';
export default function App() {
  window.addEventListener('resize', (e) => {
    console.log(window.innerHeight, window.innerWidth);
  });

  return <LoginForm />;
}
