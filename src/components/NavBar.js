import memelogo from '../images/meme-logo.png'

function NavBar()
{
    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src={memelogo} width="50px;" height="50px;" alt='Logo'/>
                    <span className="fs-4">Meme Generator</span>
                </a>
                </header>
            </div>
        </div>
    )
}

export default NavBar