function Dog() {
    //JSX RULES - You must explicity close self-closing elements like <br/>
    //ANOTHER RULES IS  - Components can only return a single element.
    const pet = "lily";

    return (
        <div className='App'>
            <h2>What the dog {pet} doing here?</h2>
        </div>
    )
}

export default Dog;