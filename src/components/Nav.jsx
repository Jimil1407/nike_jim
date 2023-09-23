const Nav = () => {
    return(
        <nav>
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul>
           <a href = "https://www.nike.com/in/" target="_blank">Menu</a>
           <a href = "https://www.nike.com/in/retail" target="_blank">Location</a>
           <a href = "https://about.nike.com/en" target="_blank">About</a>
           <a href = "https://www.nike.com/in/help/#contact" target="_blank">Contact</a>
        </ul>
        <button ><a href="https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=17046440f00041c492472eea56c4a534&code_challenge=P0dlxhqYdH1aILMqVabrHZ9ouKs-e0c40C1skmLr0ew&code_challenge_method=S256"target="_blank">login</a></button>
    </nav>
    )
};

export default Nav;