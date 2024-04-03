interface MeuBotaoProps {
  texto: string
}

function MeuBotao(props: MeuBotaoProps){
  return <button className="button bg-orange-400 h-10 px-3 rounded font-medium">{props.texto}</button>
}

export function App() {

  return (
    <div className="flex gap-2">
      <MeuBotao texto="clique aqui" />
      <MeuBotao texto="clique aqui 2" />
      <MeuBotao texto="2" />
    </div>
  )
}