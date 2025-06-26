// sections/RegisterWarehouse.tsx
export default function RegisterWarehouse() {
  return (
    <section id="register" className="bg-blue-600 text-white py-20 px-6 max-w-3xl mx-auto rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-6">Cadastre seu armazém</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nome do armazém"
          className="p-3 rounded text-black"
          required
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="p-3 rounded text-black"
          required
        />
        <button
          type="submit"
          className="bg-white text-blue-600 font-semibold py-3 rounded hover:bg-gray-100 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}