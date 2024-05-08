function Button() {
    function Click() {
        alert("clicked!")
    }
    return(
        <div>
            <body>
                <button onClick={Click}>Click Me!</button>
            </body>
        </div>
    );
}

export default Button;