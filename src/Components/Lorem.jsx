function Lorem(props) {
    let loremString = "";
    const length = parseInt(props.length, 10); // Conversione in intero e base 10

    if (!isNaN(length) && length > 0) {
        for (let i = 0; i < length; i++) {
            loremString += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas aspernatur repellendus necessitatibus saepe suscipit quaerat. Sequi deleniti doloremque consectetur. Quaerat porro minima rerum reprehenderit ex dolor, inventore dolore quas! "; // ... resto della frase
        }
    }

    return (
        <div>
            <h2 className="subheading">Heading</h2>
            <p>{loremString}</p>
        </div>
    );
}

export default Lorem;