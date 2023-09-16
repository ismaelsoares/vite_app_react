export const Button = () => {

    const handleTestePage = () => {
        console.log("Aqui inicia a história de um programador...");
        
    }
    return (
        <div>
            <button onClick={handleTestePage}>Pagina Inicial</button>
        </div>
    )
}