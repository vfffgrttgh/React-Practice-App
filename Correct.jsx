function Correct() {
    function Click() {
        alert("Right!")
    }
    return(
        <div>
            <body>
                <button onClick={Click}>Using a div.</button>
            </body>
        </div>
    );
}

export default Correct;