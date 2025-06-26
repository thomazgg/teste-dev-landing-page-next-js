// sections/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center">
      <p>© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
    </footer>
  );
}