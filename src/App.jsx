import { RegisterForm } from './components/RegisterForm';
export default function App() {
  window.addEventListener('resize', (e) => {
    console.log(window.innerHeight, window.innerWidth);
  });

  return <RegisterForm />;
}
