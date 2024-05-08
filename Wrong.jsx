function Wrong() {
    function Click() {
        alert("Wrong!")
    }
    return(
        <div>
            <body>
                <button onClick={Click}>Using a button.</button>
            </body>
        </div>
    );
}

export default Wrong;